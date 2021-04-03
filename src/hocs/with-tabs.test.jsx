import React from 'react';
import {render, screen} from '@testing-library/react';
import withTabs from './with-tabs';
import Overview from '../components/overview/overview';
import films from '../mocks/films';

jest.mock(`../components/tabs/tabs`, () => {
  const mockTabs = () => <>This is mock Tabs</>;
  mockTabs.displayName = `MockTabs`;
  return {
    __esModule: true,
    default: () => {
      return mockTabs();
    }
  };
});

describe(`Test HOC 'withTabs'`, () => {
  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <h1>First Tab</h1>;
    const BaseComponentWrapped = withTabs(BaseComponent);
    render(<BaseComponentWrapped />);
    expect(screen.getByText(/First Tab/i)).toBeInTheDocument();
  });

  it(`Base component should be correct rendering another component with render-prop when use with HOC`, () => {
    const mockTabs = [`Overview`, `Details`, `Reviews`];
    const BaseComponentWrapped = withTabs(Overview);
    render(
        <BaseComponentWrapped tabsTitle={mockTabs} film={films[0]}>
          <Overview film={films[0]} />
        </BaseComponentWrapped>
    );

    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  });
});
