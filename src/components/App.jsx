import React, { Component } from 'react';

import { Section } from './section';
// import { Container } from 'utils';
import { Form } from './form';
import { Contacts } from './contacts';

// import { InputLabel, Input } from './form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };


  getVisibleContacts = () => {
    const { contacts} = this.state;
    // const normalizedFilter = filter.toLowerCase();

    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );

    return contacts;
  };


  // handleInputChange = e => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ name: e.currentTarget.value });
  // };

  render() {

    // const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

 


    return (
      <div>
        <Section title="Phonebook">
          <Form  />

          {/* <Container>
            <form>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                type="text"
                value={this.name}
                onChange={this.handleInputChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <button>Add contact</button>
            </form>
          </Container> */}


        
        </Section>
        <Section title="Contacts"><Contacts contacts={visibleContacts} /></Section>
      </div>
    );
  }
}
