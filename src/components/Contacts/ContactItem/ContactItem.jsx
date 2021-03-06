import propTypes from 'prop-types';
import defaultImage from '../../images/default.png';
import {
  ItemWrapper,
  Image,
  Name,
  Number,
  FlexContact,
  Button,
} from './contactItem.styled';
import { deleteIcon } from '../../images/delete';
import { Accordion } from 'react-bootstrap';

const ContactItem = ({ contact, deleteFunction }) => {
  const { id, name, phone, email, company, avatar = defaultImage } = contact;

  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>
          <ItemWrapper>
            <Image src={avatar} alt={name} />
            <FlexContact>
              <Name>{name}</Name>
              <Number>{phone}</Number>
            </FlexContact>
          </ItemWrapper>
        </Accordion.Header>
        <Accordion.Body>
          <p>{email}</p>
          <p>{company}</p>

          <p>
            Delete contact
            <Button type="button" onClick={() => deleteFunction(id)}>
              {deleteIcon}
            </Button>
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;
