import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//imagenes....
import image from "../images/Iam.png";
import reactImage from "../images/react.png";
import javaScript from "../images/javaScript.png";
import imageSvg from "../images/logo_raw.svg";

export default function HederNavigation(props) {

    const { value, setValue } = props;
    const classes = useStyles();
    const [firtsView] = useState(false);
    const [secondView] = useState(false);
    const [threeView] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ flexDirection: 'row' }} >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <a href="https://my-portafolio-six.vercel.app/" >
                            <div className={classes.image}>
                                <img src={image} alt="My icon" />
                            </div>
                        </a>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        App de Tareas
                    </Typography>


                    <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                        <a href="https://es.reactjs.org/" >
                            <div className={classes.image2}>
                                <img src={reactImage} alt="My icon" />
                            </div>
                        </a>
                    </IconButton>

                    <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                        <div className={classes.image2}>
                            <img src={javaScript} alt="My icon" />
                        </div>
                    </IconButton>

                    <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                        <div className={classes.image2}>
                            <img src={imageSvg} alt="My icon" />
                        </div>
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Paper square className={classes.navigationTapHeder}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    aria-label="icon label tabs example"
                    centered={true}
                    wrapper
                >
                    <Tab disabled={secondView} icon={<HomeWorkIcon />} label="" />
                    <Tab disabled={firtsView} icon={<CheckCircleOutlineIcon />} label="" />
                    <Tab disabled={threeView} icon={<HighlightOffIcon />} label="" />
                </Tabs>
            </Paper>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
    },
    image: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        background: 'white',
        borderRadius: 50,
        width: 45,
        height: 45,
    },
    navigationTapHeder: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#757de8',
        height: 50
    },
    image2: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        background: undefined,
        borderRadius: 50,
        width: 45,
        height: 45,
    },
}));