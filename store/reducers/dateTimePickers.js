import { ADD_PICKER } from '../actions/dateTimePickers';
import { DELETE_PICKER } from '../actions/dateTimePickers';

const initialState = {
    pickers: []
};

const dateTimePickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PICKER:
            return {
                ...state,
                pickers: state.pickers.concat(action.picker)
            }
        case DELETE_PICKER:
            return {
                ...state,
                pickers: state.pickers.filter(picker => picker.id !== action.pickerId)
            }
        default:
            return state;
    }
    return state;
}

export default dateTimePickerReducer;