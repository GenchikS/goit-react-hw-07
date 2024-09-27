import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactSlice";
import Contact from "./Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  // const selectNameFilter = useSelector(selectNameFilter);
  const filters = useSelector(selectNameFilter);
  
  //  перевірка масиву стану
  // console.log("contacts", contacts);
  //  перевірка поверненого пошуку
  // console.log("filters", filters);

  return (
    <ul className={css.container}>
      {!filters &&
        contacts.map((contact) => (
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
      {filters &&
        contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filters.toLowerCase()))
          .map((contact) => (
            <li className={css.listContactUser} key={contact.id}>
              {/* перевірка ітерації масиву */}
              {/* {console.log("contact.name", contact)} */}
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







