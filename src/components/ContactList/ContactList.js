
const ContactList = ({ contacts, onDeleteContact }) => (
      <ul>
            {contacts.map(({ name, id, number }) => (
                  <li key={id}>{name}: {number}
                        <button
                              type="button"
                              onClick={() => onDeleteContact(id)}
                        > Delete
                        </button></li>
            ))}
      </ul>
);

export default ContactList;