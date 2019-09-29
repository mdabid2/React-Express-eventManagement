import * as types from '../constants/constants';

import axios from 'axios';


export const getAllEventsRequest = () => {
  return(dispatch) => {
      axios.get('/api/addevent')
        .then((response) => {dispatch(getAllEvents(response));})
        .catch((response) => {return Promise.reject(response);});
    };
};
export const getAllEvents = (request) => {
  return {
    type: types.GET_EVENTS,
    payload: request
    };
};
