import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
