import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TimePickerItem from './TimePickerItem';
import AddEditTimePicker from './AddEditTimePicker';
import { useSelector, useDispatch } from 'react-redux';

import * as dateTimePickerActions from '../store/actions/dateTimePickers';

export default function MainApp () {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
//   const [dateTimePickers, setDateTimePickers] = useState([]);
  const availablePickers = useSelector(state => state.pickers.pickers);
  const dispatch = useDispatch();

  showDateTimePickerHandler = () => {
    setIsDateTimePickerVisible(true);
  };

  hideDateTimePickerHandler = () => {
    setIsDateTimePickerVisible(false);
  };

  dateWasPickedHandler = date => {
    console.log('A date has been picked: ', date);
    this.hideDateTimePickerHandler();
    // setDateTimePickers(currentPickers =>
    //   [...currentPickers,
    //     {
    //       id: Math.random().toString(),
    //       valueVisible: date.getHours().toString() + ":" + date.getMinutes().toString(),
    //       value: date
    //     }
    //   ]
    // );
    pickerToStore = {
              id: Math.random().toString(),
              valueVisible: date.getHours().toString() + ":" + date.getMinutes().toString(),
              value: date
            }
    dispatch(dateTimePickerActions.addPicker(pickerToStore));
  };

  deleteDateTimePicker = pickerId => {
    dispatch(dateTimePickerActions.deletePicker(pickerId));
  }

  let list = null;
  if(availablePickers.length > 0) {
    list = (
      <FlatList
            data={availablePickers}
            keyExtractor={item => item.id}
            extraData={availablePickers}
            renderItem={itemData =>
              <TimePickerItem
                id={itemData.item.id}
                value={itemData.item.value}
                valueVisible={itemData.item.valueVisible}
                isVisible={isDateTimePickerVisible}
                onConfirm={dateWasPickedHandler}
                onCancel={hideDateTimePickerHandler}
                onDelete={deleteDateTimePicker} />}
          />
    );
  }

  return (
      <View style={styles.screen}>
        <AddEditTimePicker
          btnTitle="Agregar horario"
          isVisible={isDateTimePickerVisible}
          onConfirm={dateWasPickedHandler}
          onCancel={hideDateTimePickerHandler} />
        {list}
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
