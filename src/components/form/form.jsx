// import PropTypes from 'prop-types';
import { Container } from 'utils';
import { InputLabel, Input } from './form.styled';
// import { Section } from "../section";

export const Form = () => {



  return (
    <Container>
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
    </Container>
  );
};