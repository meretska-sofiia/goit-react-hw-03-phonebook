import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      <ContactListItem contacts={contacts} onDelete={onDelete} />
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
export default ContactList;
