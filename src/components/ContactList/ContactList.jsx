import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import {
  ContactListStyled,
  ContactItemStyled,
  ButtonStyled,
  Name,
  Number,
  HeaderLi,
  HeaderName,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  console.log(contacts);

  return (
    <ContactListStyled>
      <HeaderLi>
        <HeaderName>Name</HeaderName>
        <HeaderName>Number</HeaderName>
      </HeaderLi>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <ButtonStyled
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
