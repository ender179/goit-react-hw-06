import { removeContact } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.items.filter((item) =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <>
      <ul>
        {contacts.map((item) => (
          <li key={item.id} className={styles.contactUser}>
            <p className={styles.user}>
              <b>{item.name}</b> {item.number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(removeContact(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};