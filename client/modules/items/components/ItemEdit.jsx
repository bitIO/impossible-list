import Button from 'react-toolbox/lib/button';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';
import Link from 'react-toolbox/lib/link';
import React from 'react';

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      due: new Date(),
    };

    if (props.item) {
      this.state.name = props.item.name;
      this.state.description = props.item.description;
      this.state.due = new Date(props.item.due);
    }

    this.createItem = this.createItem.bind(this);
  }

  createItem(e) {
    e.preventDefault();
    e.stopPropagation();

    const { create, update, item, itemId } = this.props;
    const { name, description, due } = this.state;

    const opType = item ? update : create;
    opType(name, description, due.getTime(), itemId);

    this.setState({ name: '', description: '', due: '' });
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    const { item } = this.props;
    const opType = item ? 'Edit' : 'Add';
    return (<form>
      <Link href="/" icon="keyboard_arrow_left" > Back to Items</Link>
      <h5>{opType} Item</h5>

      <Input
        type="text"
        label="Name"
        value={this.state.name}
        ref="name"
        onChange={this.handleChange.bind(this, 'name')}
      />
      <Input
        type="text"
        label="Description"
        multiline
        value={this.state.description}
        ref="description"
        onChange={this.handleChange.bind(this, 'description')}
      />

      <DatePicker
        label="Due date"
        minDate={new Date()}
        onChange={this.handleChange.bind(this, 'due')}
        value={this.state.due}
      />
      <Button
        icon="input"
        label="Add item"
        onClick={this.createItem}
        raised
        primary
      />
    </form>);
  }
}

ItemEdit.propTypes = {
  create: React.PropTypes.func,
  update: React.PropTypes.func,
  item: React.PropTypes.object,
  itemId: React.PropTypes.string,
};

export default ItemEdit;
