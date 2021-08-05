import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';

export default function CardComponent(props) {
    const { id, task, isCompleted, student, WIDTHVIEW, completeOnClick, deleteOnClick } = props;
    return (
        <div key={id} style={{ width: '100%', height: 60, marginTop: 20, marginBottom: 20, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="cardTask"  >
                <div className={isCompleted ? "adornoTrue" : "adorno"}></div>
                <div className="containerDataTask">
                    <p style={{ fontWeight: 'bold' }} >{student}</p>
                    <p style={{ fontFamily: 'monospace' }}>-{task}</p>
                </div>
                <div className="containerButons">
                    {
                        isCompleted ? (
                            <Tooltip title="tarea Finalizada" >
                                <Button className="botonCard" color="primary" onClick={completeOnClick}
                                    disableElevation
                                    variant="contained"
                                >
                                    <CheckCircleOutlineIcon />
                                    {WIDTHVIEW > 500 && <p style={{ fontSize: 11, marginLeft: 5 }} >complete</p>}
                                </Button>
                            </Tooltip>
                        ) : (
                            <Tooltip title="tarea Incompleta" >
                                <Button className="botonCard" color="default"
                                    onClick={completeOnClick}
                                    disableElevation
                                    variant="contained"
                                >
                                    <CancelIcon />
                                    {WIDTHVIEW > 500 && <p style={{ fontSize: 11, marginLeft: 5 }} >Incomplete</p>}
                                </Button>
                            </Tooltip>
                        )
                    }


                    <Tooltip title="elimina la tarea" >
                        <Button onClick={deleteOnClick} className="botonCard" color="secondary" disableElevation variant="contained">
                            <DeleteIcon />
                            {WIDTHVIEW > 500 && <p style={{ fontSize: 11, marginLeft: 5 }} >delete</p>}
                        </Button>
                    </Tooltip>

                </div>
            </div>
        </div>
    );
};
