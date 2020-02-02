import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const AddEditTimePicker = props => {

    let date = props.date;
    console.log("Date was: " + date);
    if(!props.date) {
        date = new Date();
    }
    console.log("Date iss: " + date);
    
    return (
        <View>
            <Button title={props.btnTitle} color={props.color} onPress={showDateTimePickerHandler} />
            <DateTimePicker
                isVisible={props.isVisible}
                onConfirm={props.onConfirm.bind(this)}
                onCancel={hideDateTimePickerHandler}
                mode='time'
                date={date}
            />
        </View>
    );
}

export default AddEditTimePicker;