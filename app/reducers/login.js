const initialState = {
  email:'example@email.com',
  password:'xxxxxxx',
  userError:'There are some issues'
}; 
const login = (state = initialState, action) => {
  switch (action.type) {
    case 'GETINPUTVALUE':
      return {
        email: action.obj.value
      };
    default:
      return state;
  }
}

export default login;
