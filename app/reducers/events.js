import { GET_EVENTS } from '../constants/constants';

const Events = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      console.log("ReducerPayload",action.payload)
      console.log("ReducerState",state)
      return action.payload.data
    }
   return state;
  }

export default Events;
