import {formStatus} from './form-status';
import {sendFormDataAction} from '../action';

describe(`Reducer form-status work corrently`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(formStatus(undefined, {}))
      .toEqual({
        formStatus: true
      });
  });

  it(`Reducer should update formStatus to 'false'`, () => {
    const state = {
      formStatus: true
    };

    expect(formStatus(state, sendFormDataAction(false)))
      .toEqual({
        formStatus: false
      });
  });
});
