import React from 'react';
import { AppBar, Layout, NavDrawer, Panel } from 'react-toolbox';
import IconButton from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false,
      drawerPinned: false,
      sidebarPinned: false,
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
  }

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive });
  }
  toggleDrawerPinned() {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  drawNavigationItems() {
    let actions;
    if (Meteor.user()) {
      actions = [
        { label: 'Home', icon: 'home', href: '/' },
        { label: 'New item', icon: 'note_add', href: '/edit' },
        { label: 'Logout', icon: 'lock', href: '/logout' },
      ];
    } else {
      actions = [
        { label: 'Home', icon: 'home', href: '/' },
        { label: 'Register', icon: 'lock_open', href: '/register' },
        { label: 'Login', icon: 'account_circle', href: '/login' },
      ];
    }
    return <Navigation type="vertical" actions={actions} />;
  }

  render() {
    return (<Layout>
      <NavDrawer
        active={this.state.drawerActive}
        pinned={this.state.drawerPinned}
        permanentAt="xxxl"
        onOverlayClick={this.toggleDrawerActive}
      >
        {this.drawNavigationItems()}
      </NavDrawer>
      <Panel>
        <AppBar>
          <IconButton icon="menu" onClick={this.toggleDrawerActive} />
          <h4>Impossible list</h4>
        </AppBar>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
        {this.props.content()}
        </div>
      </Panel>
    </Layout>);
  }
}

MainLayout.propTypes = {
  content: React.PropTypes.func,
};

export default MainLayout;
