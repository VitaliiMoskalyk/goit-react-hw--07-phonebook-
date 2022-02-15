import Form from './Form/Form';
import ContactList from './Contacts/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <section>
      <Toaster position="top-left" reverseOrder={false} />
      <div className="form-wrapper">
        <h1>Phonebook</h1>
        <Form />
      </div>
      <ContactList />
    </section>
  );
};
