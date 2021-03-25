import {ActionType} from '../action';

const initialState = {
  film: {}
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload
      };
  }

  return state;
};

export {filmData};
