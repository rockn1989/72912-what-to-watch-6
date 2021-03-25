import {ActionType} from '../action';

const initialState = {
  formStatus: true
};

const formStatus = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEND_FORM_DATA:
      return {
        ...state,
        formStatus: action.payload
      };
  }

  return state;
};

export {formStatus};
