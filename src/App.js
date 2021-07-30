import React, { Fragment, useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import HederNavigation from './components/HederNavigation';


import { useTheme } from '@material-ui/core/styles';
import './App.css';

export default function App() {

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChangeIndex = (index) => setValue(index);

  return (
    <Fragment>
      <HederNavigation value={value} setValue={setValue} />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <FritView isView={value !== 0} />

        <SecondView isView={value !== 1} />

        <ThreeView isView={value !== 2} />

      </SwipeableViews>
    </Fragment>
  );
};

function FritView(props) {
  const { isView } = props;
  return (
    <div hidden={isView}>
      Item One test
    </div>
  );
};

function SecondView(props) {
  const { isView } = props;
  return (
    <div hidden={isView}>
      Item Two test
    </div>
  );
};

function ThreeView(props) {
  const { isView } = props;
  return (
    <div hidden={isView}>
      Item Three test
    </div>
  );
};