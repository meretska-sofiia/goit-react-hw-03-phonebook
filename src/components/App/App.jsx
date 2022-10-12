import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import SearchContactFilter from '../Filter/Filter';
import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
    console.log('hello');
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContactClick = ({ name, number }) => {
    const nameArray = this.state.contacts.map(({ name }) => name);

    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, { id: nanoid(), name, number }],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  HandlerDeleteItem = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.handleAddContactClick} />
        {!!this.state.contacts.length && (
          <>
            <Title>Contacts</Title>
            <SearchContactFilter changeFilter={this.changeFilter} />

            <ContactList
              contacts={visibleContacts}
              onDelete={this.HandlerDeleteItem}
            />
          </>
        )}
      </Container>
    );
  }
}
