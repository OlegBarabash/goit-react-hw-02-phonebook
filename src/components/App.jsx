import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [{id:1,contactName: 'Oleg'}, {id:2, contactName: 'Oksana'}],
    name: ''
  }

  addContact = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    this.setState(prevState => ({
      contacts: [...prevState.contacts,{id: nanoid(),contactName: name}]
    }))
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
              <input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.length && (this.state.contacts.map(cont => (<li key={cont.id}>{ cont.contactName}</li>)))}
          </ul>
        </div>
      </div>
    )
  }
}
