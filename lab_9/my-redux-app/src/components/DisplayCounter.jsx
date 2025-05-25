import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from '../redux/counterSlice';

const DisplayCounter = () => {
  const counter = useSelector(selectCounter);

  return <h2>Поточне значення: {counter}</h2>;
};

export default DisplayCounter;
