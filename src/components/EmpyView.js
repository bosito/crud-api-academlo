import React from 'react';
import Lottie from 'lottie-react-web';
import empyTask from '../styles/lottie/emptyTask.json';

export default function EmpyView() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Lottie
                height={300}
                width={300}
                options={{
                    animationData: empyTask,
                    autoplay: true,
                    loop: false,
                }} />
            <p style={{ color: 'white', fontWeight: 'bold' }}>Not homework for now</p>
        </div>
    );
};

