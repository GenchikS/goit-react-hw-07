import { fetchFilters } from "../../redux/contactsOps";
import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (evn) => {
    // console.log("evn", evn.target.value);

    //  dispatch введеного значання
    return dispatch(fetchFilters(evn.target.value));
  };

  return (
    <div className={css.containerSearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        // value={value}
        className={css.searchInput}
        onChange={handleChange}
      />
    </div>
  );
}
