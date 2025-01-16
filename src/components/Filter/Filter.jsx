import { useDispatch, useSelector } from "react-redux";

import styles from "./Filter.module.css";
import { setFilter } from "../../redux/filtersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const showFilteredContacts = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
          className={styles.inputField}
        />
      </label>
    </div>
  );
};