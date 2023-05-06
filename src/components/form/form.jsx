import PropTypes from 'prop-types';
import { Container } from 'utils';
import { InputLabel, Input } from './form.styled';
// import { Section } from "../section";

export const Form = ({ name, handleInputChange }) => {
  
  handleInputChange = e => {
    console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };


  return (
    <Container>
      <form>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          type="text"
          value={name}
          onChange={handleInputChange}
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



Form.propTypes = {
  handleInputChange: PropTypes.func,
};