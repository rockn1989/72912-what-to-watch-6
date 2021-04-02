import {errorStatus} from './error-status';
import {showErrorAction} from '../action';

describe(`Reducer error-status work corrently`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(errorStatus(undefined, {}))
      .toEqual({
        error: false
      });
  });

  it(`Reducer should update errorStatus to 'true'`, () => {
    const state = {
      error: false
    };

    expect(errorStatus(state, showErrorAction(true)))
      .toEqual({
        error: true
      });
  });
});
