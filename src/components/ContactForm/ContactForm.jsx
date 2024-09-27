// import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { fetchAddContact } from "../../redux/contactsOps";
import { useDispatch} from "react-redux";
// import { selectFilteredContacts } from "../../redux/contactSlice";

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Занадто коротке ім'я!")
//     .max(50, "Занадто довге ім'я!")
//     .required("Required!"),
//   number: Yup.number().min(4, "Занадто короткий номер!").required("Required!"),
// });

const initialValues = {
  id: Date.now(),
  name: "",
  number: "",
};

export default function ContactForm() {
  //   //  віклик хука useDispatch для передачі деннмх в store
  const dispatch = useDispatch();
 
    const handleSubmit = (evn, actions) => {
    // console.log("submit.name", evn.name); //  перевірка значення name при submit
    console.log("submit", evn); //  перевірка введених значень при submit
    // const addContactUser = evn;
    actions.resetForm(); //  активація скидання форми
    // console.log("addContactUser", addContactUser);
    return dispatch(fetchAddContact(evn));
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      //   validationSchema={FeedbackSchema}
    >
      <Form className={css.containerForm}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" className={css.name} id={nameId} />
        <ErrorMessage className={css.errorName} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" className={css.number} id={numberId} />
        <ErrorMessage
          className={css.errorNumber}
          name="number"
          component="span"
        />
        <button className={css.buttonAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
