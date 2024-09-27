import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectFilteredContacts, selectNameFilter } from "../../redux/contactSlice";
import Contact from "./Contact/Contact";
// import { selectFiltered } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
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
        filters
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


