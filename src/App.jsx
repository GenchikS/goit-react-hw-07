import "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectContacts, selectLoading } from "./redux/contactSlice";
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const dispatch = useDispatch();
  // Отримуємо частини стану в useSelector
  const contacts = useSelector(selectContacts);
  // console.log("contacts", contacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm/>
      <SearchBox/>
      {contacts && <ContactList />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
