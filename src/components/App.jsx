import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled.js';

const contactsBook = [
  { id: 1, contactName: 'Oleg', number: '123456789' },
  { id: 2, contactName: 'Oksana', number: '987456321' },
  { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', contactName: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: contactsBook,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isExist = this.state.contacts.find(
      ({ contactName }) => contactName.toLowerCase() === name.toLowerCase()
    );
    console.log('isExist', isExist);
    if (isExist) {
      alert(`${isExist.contactName} is alredy in contacts!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), contactName: name, number: number },
      ],
    }));
  };

  renderContactList = list => {
    return list.map(cont => (
      <li key={cont.id}>
        {cont.contactName}: {cont.number}
      </li>
    ));
  };

  onFind = name => {
    const findName = name.toLowerCase();
    this.setState({ filter: findName });
  };

  filterResult = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ contactName }) =>
      contactName.toLowerCase().includes(filter)
    );
  };

  deleteContact = id => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(cont => cont.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.filterResult();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFind} />
        <ContactList contArr={filteredContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
