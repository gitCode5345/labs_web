import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';

const Incrementer = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Збільшити лічильник
    </button>
  );
};

export default Incrementer;
