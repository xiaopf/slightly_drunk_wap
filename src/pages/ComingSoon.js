import React from 'react';
import './ComingSoon.less';


import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';


class ComingSoon extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {

    return (
      <div className="comeSoonWrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
        >Msg</NavBar>

        <div className="comingSoon">coming soon !!!</div>
      </div>

    )
  }
}












export default ComingSoon;
