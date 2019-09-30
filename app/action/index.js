// @flow
import * as types from '../constants/constants';

import axios from 'axios';


export const getAllEventsRequest = () => {
  return(dispatch:Function) => {
      axios.get('/api/addevent')
        .then((response) => {dispatch(getAllEvents(response));})
        .catch((response) => {return Promise.reject(response);});
    };
};
export const getAllEvents = (request:Object) => {
  return {
    type: types.GET_EVENTS,
    payload: request
    };
};
