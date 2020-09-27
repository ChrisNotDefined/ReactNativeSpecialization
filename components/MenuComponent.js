import React, { Component, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default Menu = (props) => {
  const renderMenuItem = ({item, index}) => {
    return (
      <ListItem 
        key = {index}
        title = {item.name}
        subtitle = {item.description}
        hideChevron = {true}
        leftAvatar = {{ source: require('./images/logo.png')}}
      />
    )
  }
  
  return (
    <FlatList 
      data = {props.dishes}
      renderItem = {renderMenuItem}
      keyExtractor = {item => item.id.toString()}
      />
  )
}