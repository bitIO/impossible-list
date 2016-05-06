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
    });
    FlowRouter.go('/');
  },
  update({ Meteor, LocalState, FlowRouter }, id, name, description, due) {
    console.log('update.action', id, name, description, due);
    Meteor.call('items.update', id, name, description, due, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go('/');
  },

  clearErrors({ LocalState }) {
    return LocalState.set('SAVING_ERROR', null);
  },
};
