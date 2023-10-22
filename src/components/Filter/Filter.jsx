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
