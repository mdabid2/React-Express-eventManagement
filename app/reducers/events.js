import { GET_EVENTS } from '../constants/constants';

const Events = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        events: (function(){
          return action.payload.data
        })()
      }
    }
   return state;
  }

export default Events;
