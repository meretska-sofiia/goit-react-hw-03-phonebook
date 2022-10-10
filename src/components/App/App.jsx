import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import SearchContactFilter from '../SearchContactFilter/SearchContactFilter';
import { Container, MainTitle, SecondaryTitle } from './App.styled';

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
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.handleAddContactClick} />
        {!!this.state.contacts.length && (
          <>
            <SecondaryTitle>Contacts</SecondaryTitle>
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
