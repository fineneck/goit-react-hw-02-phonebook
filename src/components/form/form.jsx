// import PropTypes from 'prop-types';
import { Container } from 'utils';
import { InputLabel, Input } from './form.styled';
// import { Section } from "../section";

export const Form = () => {
  return (
    <Container>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button>Add contact</button>
    </Container>
  );
};
