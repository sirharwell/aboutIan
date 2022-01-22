import React, { Component } from 'react';
import { Menu, Image, Button, Label, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class NavBar extends Component {
  state = {
    activeItem: this.props.location.pathname
  }


  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        fixed="top"
        size='large'
        pointing
        inverted
      >
      <Menu.Item as='a' href="/" active={activeItem === '/'} >Home</Menu.Item>
      <Menu.Item position='right' as='a' href="/Work_XP" active={activeItem === "/Work_XP"}>Work Experience</Menu.Item>
      <Menu.Item position='right' as='a' href="/Family" active={activeItem === '/Family'}>Family</Menu.Item>
      <Menu.Item position='right' as='a' href="/Interests" active={activeItem === '/Interests'} >Interests</Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
