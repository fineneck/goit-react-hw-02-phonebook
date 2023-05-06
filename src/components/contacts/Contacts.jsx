import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} {number}
          </p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
