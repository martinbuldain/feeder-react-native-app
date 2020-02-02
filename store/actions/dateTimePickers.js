export const ADD_PICKER = 'ADD_PICKER';
export const addPicker = date => {
    return { type: ADD_PICKER, picker: date }
}

export const DELETE_PICKER = 'DELETE_PICKER';
export const deletePicker = pickerId => {
    return { type: DELETE_PICKER, pickerId: pickerId }
}