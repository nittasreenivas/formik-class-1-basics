import { Formik } from "formik";
export default function StudentForm() {
  return (
    <div className="student">
      <h3 className="stu"> Hii students</h3>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          graduation: "",
          percentage: ""
        }}
        validate={(values) => {
          var errors = {};
          if (!values.firstname) {
            errors.firstname = "Firstname is mandatory";
          }
          if (!values.graduation) {
            errors.graduation = "Graduation is mandatory";
          }
          console.log("errors:", errors);
          return errors;
        }}
        onSubmit={(values) => {
          console.log("values::", values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          handleBlur,
          touched
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              FirstName:{" "}
              <input
                type="text"
                placeholder="enter firstname"
                name="firstname"
                onChange={handleChange}
                value={values.firstname}
                onBlur={handleBlur}
              />
              <br />
              <div>
                {errors && errors.firstname && touched.firstname && (
                  <b className="err">{errors.firstname} </b>
                )}
              </div>
              LastName:{" "}
              <input
                type="text"
                placeholder="enter lastname"
                name="lastname"
                onChange={handleChange}
                value={values.lastname}
                onBlur={handleBlur}
              />
              <br />
              Graduation:{" "}
              <input
                type="text"
                placeholder="enter graduation"
                name="graduation"
                onChange={handleChange}
                value={values.graduation}
                onBlur={handleBlur}
                className={
                  errors && errors.graduation && touched.graduation && "a"
                }
              />
              <br />
              <div>
                {errors && errors.graduation && touched.graduation && (
                  <b className="err">{errors.graduation} </b>
                )}
              </div>
              Percentage:{" "}
              <input
                type="text"
                placeholder="enter percentage"
                name="percentage"
                onChange={handleChange}
                value={values.percentage}
                onBlur={handleBlur}
              />
              <br />
              <button> Save Students</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
