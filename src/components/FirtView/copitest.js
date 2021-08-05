import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import '../../styles/firtView.css';

export default function AlertComponent(props) {
    const { onChange, onClick } = props;
    return (
        <div className="containerModal">
            <div className="fondoAlert" >
                <div className="containerInputs">
                    <div style={style.title}>
                        <h2 style={{ color: 'white' }} >Create Task</h2>
                    </div>
                    <div style={style.contForm} >
                        <div style={style.contInput}>
                            <p style={style.titleInput}>Student:</p>
                            <TextField style={style.textInput}
                                placeholder="Student´s  Name"
                                type="text"
                                id="student"
                                //onChange={(e)=>onChange(e)}
                            />
                        </div>
                        <div style={[style.contInput, { marginBottom: 25 }]}>
                            <p style={style.titleInput} >Task:</p>
                            <TextField style={style.textInput}
                                placeholder="Task"
                                id="task"
                                //onChange={(e)=>onChange(e)}
                                type="text"
                            />
                        </div>

                        <div style={style.contBoton}>
                            <Button
                                className="botonAdd"
                                //onClick={()=>onClick()}
                                color="primary"
                                variant="contained"
                            >
                                Add Task
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

const style = {
    title: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    contInput: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleInput: {
        color: 'white',
        width: '90%',
        marginBottom: 2
    },
    textInput: {
        height: 25,
        width: '90%'
    },
    contBoton: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 25
    },
};
