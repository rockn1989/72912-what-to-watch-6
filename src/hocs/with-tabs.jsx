import React, {PureComponent} from 'react';

const withTabs = (WrappedComponent) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: 0
      };

      this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(tab) {
      this.setState({
        activeTab: tab,
      });
    }

    render() {
      const {activeTab} = this.state;
      return <WrappedComponent onChangeActiveItem={this.onClickHandler} activeTab={activeTab} {...this.props} />;
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
