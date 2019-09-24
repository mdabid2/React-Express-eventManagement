
//Reduscer Code can move 
const initialState = {
  text: ""
}; 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_INVENTORY':
      return "hello World";
    default:
      return state;
  }
}
export default reducer;
