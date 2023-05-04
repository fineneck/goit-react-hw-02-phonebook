import React, { Component } from 'react';

import { Section } from './section';
// import { Container } from 'utils';
import { Form } from './form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Section title="Phonebook">
        <Form/>
      </Section>
    );
  }
}
