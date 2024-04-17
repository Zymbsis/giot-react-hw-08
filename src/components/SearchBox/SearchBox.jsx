import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};
export default SearchBox;
