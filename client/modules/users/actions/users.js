export default {
  create({ Meteor, LocalState }, email, password) {
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }
    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({ email, password });

    FlowRouter.go('/');

    return LocalState;
  },
  clearErrors({ LocalState }) {
    LocalState.set('CREATE_USER_ERROR', null);
    LocalState.set('LOGIN_ERROR', null);
    return LocalState;
  },
  login({ Meteor, LocalState, FlowRouter }, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        LocalState.set('LOGIN_ERROR', err.meesage);
      } else {
        FlowRouter.go('/');
      }
    });
    return LocalState;
  },
};
