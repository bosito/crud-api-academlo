import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import EmpyView from '../components/EmpyView';

//style...
import '../styles/firtView.css';

export default function SecondView(props) {

    const { isView, listTarea } = props;
    const [listTaskComplete, setlistTaskComplete] = useState([]);
    const WIDTHVIEW = window.screen.width;

    useEffect(() => {
        const isCompleteFilter = () => {
            const newList = listTarea.filter(task => task.isCompleted && task);
            setlistTaskComplete(newList);
        };
        
        isCompleteFilter();
    }, [listTarea]);

    return (
        <div hidden={isView} className="containerPrincipal" >
            {
                listTaskComplete && (
                    listTaskComplete.length > 0 ? (
                        <div className="containerList">
                            {
                                listTaskComplete.map((tarea) => {
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