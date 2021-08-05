import React, { useEffect, useState } from 'react';
import FirtView from './views/FirtView';
import SecondView from './views/SecondView';
import ThreeView from './views/ThreeView';
import axios from 'axios';
import SwipeableViews from 'react-swipeable-views';
import HederNavigation from './components/HederNavigation';
//import MuiAlert from '@material-ui/lab/Alert';


import { useTheme } from '@material-ui/core/styles';
import './App.css';
import './styles/firtView.css';

export default function App() {

  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [listTarea, setListTarea] = useState([]);

  useEffect(() => {

    (async () => {
      setLoading(true);
      try {

        const response = await getTask();
        setListTarea(response.todos);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    })();

  }, []);

  /*la idea era que hiciera peticiones y verificara si la lista que hay en el estado es la misma
   *(almenos en total de datos) para que se refrescara en toempo real o algo asi 
   */
  useEffect(() => {

    (async () => {
      try {
        const response = await getTask();
        console.log(response.todos);
        if (response.todos.length !== listTarea.length) {
          setListTarea(response.todos);
        };
      } catch (error) {
        console.error(error);
      }
    })();

  });

  const getTask = async () => {
    try {
      const response = await axios.get(`https://todos-go.herokuapp.com/api/todos`);
      return response.data;
    } catch (error) {
      console.error(error);
    };
  };

  const handleChangeIndex = (index) => setValue(index);

  return (
    <div className="containerPrincipal" >
      <HederNavigation value={value} setValue={setValue} />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <FirtView
          isView={value !== 0}
          loading={loading}
          listTarea={listTarea}
          setLoading={setLoading}
          setListTarea={setListTarea}
        />

        <SecondView
          isView={value !== 1}
          listTarea={listTarea}
        />

        <ThreeView
          isView={value !== 2}
          listTarea={listTarea}
        />

      </SwipeableViews>
    </div>
  );
};