import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './tabs';

it(`Should Review render correctly`, () => {
  const tabs = [`one`, `two`, `three`];
  const active = 0;
  const func = () => {};
  const child = [1, 2, 3];

  const {container} = render(
      <Tabs tabsTitle={tabs} onChangeActiveItem={func} activeTab={active}>
        {child}
      </Tabs>
  );
  expect(container).toMatchSnapshot();
});
