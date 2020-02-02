import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import AddEditTimePicker from './AddEditTimePicker';

import Colors from '../constants/colors';

const TimePickerItem = props => {

  console.log("TimePicker date: " + props.value);

    return (
      <View style={styles.screen}>
        <View style={styles.timeItem}>
          <View style={styles.actions} key={props.key}>
            <View style={styles.button}>
              <AddEditTimePicker
                btnTitle={props.valueVisible}
                date={props.value}
                color={Colors.primary}
                isVisible={props.isVisible}
                onConfirm={props.onConfirm}
                onCancel={hideDateTimePickerHandler} />
            </View>
            <View style={styles.button}>
              <Button
                title='Delete'
                onPress={props.onDelete.bind(this, props.id)}
                color={Colors.accent} />
            </View>            
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    timeItem: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 80,
      marginVertical: 10,
      width: 300
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20
    },
    button: {
      width: 100
    }
});

export default TimePickerItem;