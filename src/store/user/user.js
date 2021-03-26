import {ActionType} from '../action';
import {AUTH, NO_AUTH} from '../../const';

const initialState = {
  authorizationStatus: NO_AUTH,
  userInfo: {
    avatarUrl: `img/avatar.jpg`
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZED:
      return {
        ...state,
        authorizationStatus: action.payload ? AUTH : NO_AUTH
      };

    case ActionType.SET_USER_INFO:
      const {avatar_url: avatar, ...restData} = {...action.payload};
      return {
        ...state,
        userInfo: {...restData, avatarUrl: avatar}
      };
  }

  return state;
};

export {user};
