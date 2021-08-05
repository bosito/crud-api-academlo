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
                    <div style={{ width: '100%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: 'white' }} >Create Task</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
                        <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <p style={{ color: 'white', width: '90%', marginBottom: 2 }}>Student:</p>
                            <TextField style={{ height: 25, width: '90%' }}
                                placeholder="Student´s  Name"
                                type="text"
                                id="student"
                                onChange={onChange}
                            />
                        </div>
                        <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 25 }}>
                            <p style={{ color: 'white', width: '90%', marginBottom: 2 }} >Task:</p>
                            <TextField style={{ height: 25, width: '90%' }}
                                placeholder="Task"
                                id="task"
                                onChange={onChange}
                                type="text"
                            />
                        </div>

                        <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: 25 }}>
                            <Button className="botonAdd" onClick={onClick} color="primary" variant="contained">Add Task</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

