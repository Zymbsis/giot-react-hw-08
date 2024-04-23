import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchFieldId = useId();
  const value = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchFieldId}>Find contacts by name or number</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
