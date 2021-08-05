import React, { useState } from 'react';
import LoadingComponent from '../components/LoadingComponent';
import CardComponent from '../components/CardComponent';
import AlertComponent from '../components/FirtView/AlertComponent';
import EmpyView from '../components/EmpyView';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

//style...
import '../styles/firtView.css';

export default function FirtView(props) {

    const { isView, loading, listTarea, setListTarea } = props;
    const WIDTHVIEW = window.screen.width;
    const [newTarea, setNewTarea] = useState(false);
    const [newTaskData, setNewTaskData] = useState({
        task: "",
        student: ""
    });

    const textChengeInputs = (e) => setNewTaskData({ ...newTaskData, [e.target.id]: e.target.value });

    const isComplete = (tareaId) => {
        let newData = {}
        listTarea.forEach((task) => {
            if (task.id === tareaId) {
                if (task.isCompleted) {
                    task.isCompleted = false;
                    newData = task;
                }
                else {
                    task.isCompleted = true;
                    newData = task;
                }
            }
        });
        putTask(tareaId, newData);
        setListTarea([...listTarea]);
    };

    const logInputs = () => {
        if (newTaskData) {
            if (newTaskData.student.length > 0 & newTaskData.task.length > 0) {
                postTask(newTaskData);
                setNewTaskData({
                    task: "",
                    student: ""
                });
            }
        };
    };

    const postTask = async (newData) => {
        try {
            const response = await axios.post(`https://todos-go.herokuapp.com/api/todos`, newData);
            setListTarea([...listTarea, response.data]);
            setNewTarea(false);
        } catch (error) {
            console.error(error);
        };
    };

    const deleteTask = async (index, deleteId) => {
        try {
            await axios.delete(`https://todos-go.herokuapp.com/api/todos/${deleteId}`);
            const arrayList = [...listTarea];
            arrayList.splice(index, 1);
            setListTarea([...arrayList]);
            return
        } catch (error) {
            console.error(error);
        }
    };

    const putTask = async (dataId, newData) => {
        try {
            const response = await axios.put(`https://todos-go.herokuapp.com/api/todos/${dataId}`, newData);
            console.log(response);
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <div hidden={isView} className="firtViewContainer">
            {
                loading ? (
                    <LoadingComponent />
                ) : (
                    listTarea && (
                        listTarea.length > 0 ? (
                            <div className="containerList">
                                {
                                    listTarea.map((tarea, index) => {
                                        const { id, task, isCompleted, student } = tarea;
                                        return (
                                            <CardComponent
                                                id={id}
                                                task={task}
                                                isCompleted={isCompleted}
                                                student={student}
                                                WIDTHVIEW={WIDTHVIEW}
                                                completeOnClick={() => isComplete(id)}
                                                deleteOnClick={() => deleteTask(index, id)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <>
                                <EmpyView />
                            </>
                        )
                    )
                )
            }

            {
                newTarea && (
                    <AlertComponent
                        onChange={textChengeInputs}
                        onClick={logInputs}
                    />
                )
            }

            <Tooltip title={newTarea ? "Crear Tarea" : "Nueva Tarea"} >
                <Fab onClick={() => setNewTarea(!newTarea)}
                    style={{ height: 50, width: 50, position: 'absolute', bottom: 10, right: 20, backgroundColor: newTarea ? '#4caf50' : '#3f51b5' }}
                >
                    {newTarea ? <EditIcon color="inherit" /> : <AddIcon color="inherit" />}
                </Fab >
            </Tooltip>

        </div>
    );
};