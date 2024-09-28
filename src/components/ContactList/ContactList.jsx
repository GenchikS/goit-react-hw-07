import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactSlice";
import Contact from "./Contact/Contact";
// import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  //  повернення мемоізованого та отфільтрованного масиву
  const contacts = useSelector(selectFilteredContacts);
  // console.log("contacts", contacts);

  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
          <li className={css.listContactUser} key={contact.id}>
            {/* перевірка ітерації масиву */}
            {/* {console.log("contact.name", contact.name)} */}
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
  );
}







