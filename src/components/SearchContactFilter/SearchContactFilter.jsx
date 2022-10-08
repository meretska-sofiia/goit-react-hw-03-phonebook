import PropTypes from 'prop-types';
import { Input, Label } from './SearchContactFilter.styled';
const SearchContactFilter = ({ changeFilter }) => {
  return (
    <>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input type="text" id="search" onChange={changeFilter} />
    </>
  );
};

SearchContactFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchContactFilter;
