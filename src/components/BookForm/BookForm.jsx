import Button from "../Botton/Botton";
import s from "./BookForm.module.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BookForm = () => {
  const today = new Date();
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (value, action) => {
    console.log(value);
    action.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short!").required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date()
      .required("Booking date is required")
      .min(today, "Booking date cannot be in the past"),
    comment: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapText}>
          <h3 className={s.title}>Book your campervan now</h3>
          <p className={s.descr}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div className={s.wrapFieldGroup}>
          <div className={s.wrapField}>
            <Field
              className={s.field}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.wrapField}>
            <Field
              className={s.field}
              type="text"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.wrapField}>
            <Field name="bookingDate">
              {({ field, form }) => (
                <DatePicker
                  className={s.field}
                  selected={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                  placeholderText="Booking date*"
                  dateFormat="dd/MM/yyyy"
                  minDate={today}
                  wrapperClassName={s.field}
                />
              )}
            </Field>
            <ErrorMessage
              className={s.error}
              name="bookingDate"
              component="span"
            />
          </div>
          <div className={s.wrapField}>
            <Field
              className={s.field}
              as="textarea"
              name="comment"
              placeholder="Comment"
              rows="5"
            />
            <ErrorMessage className={s.error} name="comment" component="span" />
          </div>
        </div>
        <Button text={"Send"} />
      </Form>
    </Formik>
  );
};

export default BookForm;
