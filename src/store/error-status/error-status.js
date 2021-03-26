import {ActionType} from '../action';

const initialState = {
  error: false
};

const errorStatus = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ERROR:
      return {
        ...state,
        error: true
      };
  }

  return state;
};

export {errorStatus};
