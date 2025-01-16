import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={e => dispatch(changeFilter(e.target.value))}
      className={styles.input}
    />
  );
};

export default SearchBox;