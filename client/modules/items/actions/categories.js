export default {
  create({ Meteor, LocalState, FlowRouter }, name) {
    if (!name) {
      return LocalState.set('CREATE_CATEGORY_ERROR', 'Category name is required.');
    }

    LocalState.set('CREATE_CATEGORY_ERROR', null);
    Meteor.call('categories.create', name, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go('/categories');
  },

  clearErrors({ LocalState }) {
    LocalState.set('CREATE_CATEGORY_ERROR', null);
    LocalState.set('SAVING_ERROR', null);
    return LocalState;
  },
};
