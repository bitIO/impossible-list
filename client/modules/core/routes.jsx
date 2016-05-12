/* global Meteor */
import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from './components/MainLayout.jsx';

import ItemList from '../items/containers/ItemList';
import ItemEdit from '../items/containers/ItemEdit';

import NewUser from '../users/containers/NewUser';
import Login from '../users/containers/Login';

import CategoryList from '../items/containers/CategoryList';
import CategoryNew from '../items/containers/CategoryNew';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // ensure there is a logged in user
  FlowRouter.triggers.enter((context, redirect) => {
    if (!Meteor.user()) {
      redirect('users.login');
    }
  }, { except: ['users.login', 'users.new'] });

  // Items
  // ---------------------------------------------------------------------------
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />),
      });
    },
  });
  FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemEdit />),
      });
    },
  });
  FlowRouter.route('/edit/:itemId', {
    name: 'items.edit',
    action({ itemId }) {
      mount(MainLayoutCtx, {
        content: () => (<ItemEdit itemId={itemId} />),
      });
    },
  });

  // User register, login and logout
  // ---------------------------------------------------------------------------
  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />),
      });
    },
  });
  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });
  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout(() => {
        FlowRouter.go('/');
      });
    },
  });

  // Categories
  // ---------------------------------------------------------------------------
  FlowRouter.route('/categories', {
    name: 'categories.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoryList />),
      });
    },
  });

  FlowRouter.route('/categories/new/', {
    name: 'categories.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoryNew />),
      });
    },
  });
}
