import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm'
import { Label} from './ContactForm/ContactForm.styled';


export class App extends Component {
  state = {
    contacts: [{ id: 1, contactName: 'Oleg', number: '123456789' },
      { id: 2, contactName: 'Oksana', number: '987456321' },
      { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', contactName: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: ''
  }

  addContact = ({name, number}) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts,{id: nanoid(),contactName: name, number: number}]
    }))
  }

  renderContactList = list => {
     return (list.map(cont => (<li key={cont.id}>{cont.contactName}: {cont.number}</li>)))
  }

  onFind = e => {
    const findName = e.target.value.toLowerCase();
    return this.state.contacts.filter(({contactName})=>contactName.toLowerCase().includes(findName));
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={ this.addContact} />
        <div>
          <h2>Contacts</h2>
          <Label>
            <input type="text" name="name" onChange={this.onFind}/>
          </Label>
          <ul>
            {this.state.contacts.length && this.renderContactList(this.state.contacts)}
          </ul>
        </div>
      </div>
    )
  }
}
