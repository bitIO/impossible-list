export default {
  create({ Meteor, LocalState, FlowRouter }, name, description, due) {
    if (!name) {
      return LocalState.set('CREATE_ITEM_ERROR', 'Item name is required.');
    }
    LocalState.set('CREATE_ITEM_ERROR', null);

    Meteor.call('items.create', name, description, due, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      return LocalState;
    });
    FlowRouter.go('/');

    return LocalState;
  },
  update({ Meteor, LocalState, FlowRouter }, name, description, due, id) {
    Meteor.call('items.update', id, name, description, due, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      return LocalState;
    });
    FlowRouter.go('/');

    return LocalState;
  },

  clearErrors({ LocalState }) {
    return LocalState.set('SAVING_ERROR', null);
  },
};
