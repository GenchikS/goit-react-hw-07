import { useDispatch } from "react-redux";
import { fetchDeleteContact } from "../../../redux/contactsOps";
import css from "./Contact.module.css";


export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  function onHandleDelete(evn) {
    //  перевірка введеного ID
    // console.log("id", evn);
    return dispatch(fetchDeleteContact(evn));
  }
  //  перевірка компонентів яки приходять
  // console.log("name", name);
  // console.log("numbere", number);
  return (
    <div className={css.container}>
      <ul className={css.containerList}>
        <li>
          <p className={css.textName}>{name}</p>
        </li>
        <li>
          <p className={css.textNumber}>{number}</p>
        </li>
      </ul>
      <button onClick={() => onHandleDelete(id)} className={css.buttomDelete}>
        Delete
      </button>
    </div>
  );
}
