import { Button } from '../Contacts/ContactItem/contactItem.styled';
import { deleteIcon } from '../images/delete';

export const ConfirmDelete = ({ onClick }) => {
  return (
    <span>
      Delete?{' '}
      <Button type="button" onClick={onClick}>
        {deleteIcon}
      </Button>
    </span>
  );
};
