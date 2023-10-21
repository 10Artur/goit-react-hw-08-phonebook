// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/contacts/operations';
// import {
//   selectIsLoading,
//   selectIsError,
//   selectDisplayedContacts,
// } from 'redux/contacts/selectors';
// import {
//   ContactsListBtn,
//   ContactsListItem,
//   ContactsListItems,
// } from './ContactsList.styled';
// import { useEffect } from 'react';

// export const ContactsList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectIsError);
//   const displayedContacts = useSelector(selectDisplayedContacts);

//   return (
//     <div>
//       {isLoading && !error && <b>Loading...</b>}
//       {error && <p>There was an error fetching contacts: {error}</p>}
//       {!isLoading && !error && (
//         <ContactsListItems>
//           {displayedContacts.length === 0 ? (
//             <p>No contacts!</p>
//           ) : (
//             displayedContacts.map(({ id, name, phone }) => (
//               <ContactsListItem key={id}>
//                 {name}: {phone}
//                 <ContactsListBtn onClick={() => dispatch(deleteContact(id))}>
//                   Delete
//                 </ContactsListBtn>
//               </ContactsListItem>
//             ))
//           )}
//         </ContactsListItems>
//       )}
//     </div>
//   );
// };

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
  Edit,
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
