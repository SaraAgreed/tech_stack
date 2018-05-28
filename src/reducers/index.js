import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers ({   //combineReducers makes multiple reducers work together nicely
    libraries: LibraryReducer ,      //libraries is our key
    selectedLibraryId: SelectionReducer
});