import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Input, Button } from './AddContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerAddName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlerAddNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.addContact({ name: this.state.name, number: this.state.number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handlerSubmit}>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handlerAddName}
          />
          <Input
            type="tel"
            name="number"
            placeholder="Enter contact number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlerAddNumber}
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
export default ContactForm;
