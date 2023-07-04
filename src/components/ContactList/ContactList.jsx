import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { remove } from 'redux/contacts/contactSlice';
import { useGetContactsQuery } from 'redux/newContacts/contactApi';



const ContactList = () => {
  const {data, user, isLoading} = useGetContactsQuery()
  console.log(data)
  console.log(user)
  console.log(isLoading)
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);


  const handleDelete = id => {
    dispatch(remove(id));
  };

  const getContactBySearch = () => {
    const filteredContactList = contacts && contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContactList;
  };

  return (
    <ul>
      {getContactBySearch().map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactList}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              id={id}
              className={css.deleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
