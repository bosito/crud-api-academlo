import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingComponent() {
    return (
        <div style={style.loadingComponent} >
            <CircularProgress color="primary" />
        </div>
    );
};

const style = {
    loadingComponent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
};