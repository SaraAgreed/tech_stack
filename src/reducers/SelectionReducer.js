export default ( state = null ,action ) => {
//the initial value should not be undefined
switch (action.type) {
    case 'select_library':
    return action.payload;

    default:
    return state;
}

};