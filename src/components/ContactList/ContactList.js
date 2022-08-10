import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';


const ContactList = ({ onDeleteContact, contacts }) => (
      <ul>
            <Contact
                  contacts={contacts}
                  onDeleteContact={onDeleteContact}/>
            
      </ul>
);

ContactList.propTypes = {
      contacts: PropTypes.arrayOf(
            PropTypes.shape(
                  {
                        name: PropTypes.string.isRequired,
                        id: PropTypes.string.isRequired,
                        number: PropTypes.string.isRequired,
                  }
            )
      ).isRequired,
      onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;