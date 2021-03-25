import {NameSpace} from '../root-reducer';

export const getErrorStatus = (state) => state[NameSpace.ERROR_STATUS].error;
