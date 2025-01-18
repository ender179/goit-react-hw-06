import React from "react";  
import { useDispatch, useSelector } from "react-redux";  
import { deleteContact } from "../../redux/contactsSlice";  
import { FaUser, FaPhone } from "react-icons/fa"; // Імпорт іконок, якщо потрібно  
import s from "../ContactList/List.module.css"; // Переконайтеся, що шлях вірний  

const Contact = ({ id, name, number }) => {  
  const dispatch = useDispatch();  

  // Виклик useSelector для отримання фільтрів  
  const filters = useSelector((state) => state.filters);   

  console.log("Фільтри:", filters); // Для перевірки, що отримуємо з Redux  

  return (  
    <div className={s.containerItem}>  
      <div className={s.contact}>  
        <p className={s.p}><FaUser /> {name}</p>  
        <p className={s.p}><FaPhone /> {number}</p>  
      </div>  
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>  
        Delete  
      </button>  
    </div>  
  );  
};  

export default Contact;