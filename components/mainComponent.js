import React, { Component, useState } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

export default Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <Menu dishes = {dishes}/>
  )
}