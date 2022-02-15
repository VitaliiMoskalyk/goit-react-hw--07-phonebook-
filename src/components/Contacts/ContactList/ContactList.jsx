import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { ConfirmDelete } from '../../confirmDelete/ConfirmDelete';
import Filter from 'components/Filter';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../../fetchData/mockApi/mockApi';
import { Loader } from '../../Loader/Loader';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery('users');
  const filter = useSelector(({ filter }) => filter);

  const [deleteContact] = useDeleteContactMutation();

  const deleteContacts = contact => {
    deleteContact(contact.id);
    toast.success(`${contact.name} removed`);
  };

  const findForFilter = () =>
    data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <h2>Contacts </h2>
      {isFetching && <Loader />}
      {error && <p>/{error.status}</p>}
      {data && (
        <>
          <Filter />
          {findForFilter().length === 0 && <p>you don`t have contacts</p>}
          <ul>
            {findForFilter().map(contact => (
              <li key={contact.createdAt}>
                <ContactItem
                  contact={contact}
                  deleteFunction={() => deleteContacts(contact)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ContactList;
