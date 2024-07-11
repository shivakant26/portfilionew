import { Formik } from "formik";
import React from "react";
const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", name: "" ,email:"",subject:"" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if(!values.name){
            errors.name = "Required*";
          }
          if(!values.subject){
            errors.subject = "Required*";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <p className="error">{errors.name && touched.name && errors.name}</p>
            </div>
            <div className="form-field">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error">{errors.email && touched.email && errors.email}</p>
            </div>
            <div className="form-field">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
             <p className="error">{errors.subject && touched.subject && errors.subject}</p>
            </div>
            <div className="form-field">
              <textarea rows="5" placeholder="Message"></textarea>
            </div>
            <button className="sent-btn" type="submit" disabled={isSubmitting}>
              Send Messaage
            </button>
          </form>
        )}
      </Formik>
      {/* <form>
        <div className="form-field">
          <input type="text" name="Name" placeholder="Your Name" />
        </div>
        <div className="form-field">
          <input type="text" name="email" placeholder="Your Email" />
        </div>
        <div className="form-field">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-field">
          <textarea rows="5" placeholder="Message"></textarea>
        </div>
        <button className="sent-btn">Send Messaage</button>
      </form> */}
    </>
  );
};
export default ContactForm;
