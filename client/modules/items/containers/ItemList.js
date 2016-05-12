import ItemList from '../components/ItemList.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import moment from 'moment';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({}, { sort: { due: -1 } }).fetch();

    const total = Collections.Items.find().count() || 1;
    const completed = Collections.Items.find({ complete: true }).count() || 0;
    const percentage = Math.round((completed / total) * 100);

    onData(null, { items, currentDate: moment(), percentage });
  }
};

export default composeAll(
 composeWithTracker(composer),
 useDeps()
)(ItemList);
