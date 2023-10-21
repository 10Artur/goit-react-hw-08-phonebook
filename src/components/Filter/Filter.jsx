// import { useDispatch, useSelector } from 'react-redux';
// import { selectFilter } from 'redux/contacts/selectors';
// import { setFilter } from 'redux/contacts/contactsSlice';
// import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);

//   const handleInputChange = evt => {
//     const contacToFind = evt.target.value;

//     dispatch(setFilter(contacToFind));
//   };

//   return (
//     <FilterContainer>
//       <FilterLabel htmlFor="filterInput">
//         Find contacts by name:
//         <FilterInput
//           id="filterInput"
//           onChange={handleInputChange}
//           placeholder="Search contact..."
//           value={filter}
//         ></FilterInput>
//       </FilterLabel>
//     </FilterContainer>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';

import { LabelStyled, FilterStyled, Input, Title } from './Filter.styled';
import { selectFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <LabelStyled>
        <Title>Search by name</Title>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => {
            dispatch(filterContact(e.target.value.toLowerCase().trim()));
          }}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
