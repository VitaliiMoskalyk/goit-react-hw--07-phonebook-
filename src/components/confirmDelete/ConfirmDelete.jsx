import { Button } from '../Contacts/ContactItem/contactItem.styled';

export const ConfirmDelete = ({ onClick }) => {
  return (
    <span>
      Delete?{' '}
      <Button type="button" onClick={onClick}>
        Y
      </Button>
    </span>
  );
};
