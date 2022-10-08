import PropTypes from 'prop-types';
import {
  ListItem,
  Name,
  Number,
  Button,
  Contact,
} from './ContactListItem.styled';
const ContactListItem = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact>
            <Name>{contact.name}:</Name> <Number>{contact.number}</Number>
          </Contact>
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};

export default ContactListItem;
