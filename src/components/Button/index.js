import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, type }) => (
  <button type="button" className={`${styles}.${type}`}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
