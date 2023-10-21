// import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
// import {
//   ContactsError,
//   ContactsField,
//   ContactsForm,
//   ContactsLabel,
//   ContactsBtn,
//   PatterFormatStyle,
// } from './ContactsForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';

// export const ContactForm = () => {
//   const ContactsFormSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required!'),
//     number: Yup.string().min(15).max(20).required('Number is required!'),
//   });

//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleSubmit = (values, action) => {
//     const newContact = {
//       name: values.name,
//       phone: values.number,
//     };

//     const handleAddContact = () => dispatch(addContact(newContact));

//     const overlap = contacts.map(({ name }) => name).includes(values.name);

//     overlap
//       ? alert(`${values.name} is already in contacts`)
//       : handleAddContact();

//     action.resetForm();
//   };

//   const handleNumberChange =
//     form =>
//     ({ formattedValue }) => {
//       form.setFieldValue('number', formattedValue);
//     };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={ContactsFormSchema}
//       onSubmit={handleSubmit}
//     >
//       <ContactsForm>
//         <ContactsLabel>
//           Name
//           <ContactsField
//             type="text"
//             name="name"
//             placeholder="Enter your name..."
//           />
//           <ContactsError component="div" name="name" />
//         </ContactsLabel>

//         <ContactsLabel>
//           Number
//           <Field name="number">
//             {({ field, form }) => (
//               <PatterFormatStyle
//                 format="+380 (##) ## ## ###"
//                 allowEmptyFormatting
//                 mask="_"
//                 value={form.values.number}
//                 onValueChange={handleNumberChange(form)}
//                 {...field}
//               />
//             )}
//           </Field>
//           <ContactsError component="div" name="number" />
//         </ContactsLabel>

//         <ContactsBtn type="submit">Add contact</ContactsBtn>
//       </ContactsForm>
//     </Formik>
//   );
// };

// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import toast from 'react-hot-toast';

import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import {
  FormStyled,
  LabelStylet,
  FieldStyled,
  ButtonForm,
  ErrorMess,
  Text,
} from './ContactForm.styled';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(
      1,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    )
    .required('Please enter a name'),
  number: Yup.string()
    .min(
      7,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter the number'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  const handleSubmit = (values, actions) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() ===
            values.name.toLowerCase().trim() ||
          contact.number.trim() === values.number.trim()
      )
    ) {
      return toast.error('A contact with that name or number already exists');
    }
    dispatch(addContact({ ...values }));
    actions.resetForm();
    toast.success('Contact added successfully', {
      duration: 3000,
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <LabelStylet>
          <Text>Name</Text>
          <FieldStyled type="text" name="name" />
          <ErrorMess name="name" component="div" />
        </LabelStylet>

        <LabelStylet>
          <Text>Number</Text>
          <FieldStyled type="tel" name="number" />
          <ErrorMess name="number" component="div" />
        </LabelStylet>

        <ButtonForm type="submit">Create contact</ButtonForm>
      </FormStyled>
    </Formik>
  );
};
