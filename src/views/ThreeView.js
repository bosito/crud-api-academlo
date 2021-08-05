import React, { useState, useEffect } from "react";
import CardComponent from '../components/CardComponent';
import EmpyView from '../components/EmpyView';

//style...
import '../styles/firtView.css';


export default function ThreeView(props) {

    const { isView, listTarea } = props;
    const [listTaskInComplete, setlistTaskInComplete] = useState([]);
    const WIDTHVIEW = window.screen.width;

    useEffect(() => {
        const isInCompleteFilter = () => {
            const newList = listTarea.filter((task) => !task.isCompleted && task);
            setlistTaskInComplete(newList);
        };
        
        isInCompleteFilter();
    }, [listTarea]);

    return (
        <div className="containerPrincipal" hidden={isView}>
            {
                listTaskInComplete && (
                    listTaskInComplete.length > 0 ? (
                        <div className="containerList">
                            {
                                listTaskInComplete.map((tarea) => {
                                    const { id, task, isCompleted, student } = tarea;
                                    return (
                                        <CardComponent
                                            id={id}
                                            task={task}
                                            isCompleted={isCompleted}
                                            student={student}
                                            WIDTHVIEW={WIDTHVIEW}
                                            completeOnClick={null}
                                            deleteOnClick={null}
                                        />
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <EmpyView />
                    )
                )
            }
        </div>
    );
};