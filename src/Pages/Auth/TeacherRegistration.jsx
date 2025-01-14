import { Button } from "../../Components/Card/Button";
import { Input } from "../../Components/Card/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../../Assets/Styles/TeacherFormStyle.css'

export const TeacherRegistration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      checkbox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4)
        .max(12)
        .required("Please, enter a valid name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required Email"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required password"),
      checkbox: Yup.boolean().oneOf(
        [true],
        "You must select this to register as a teacher"
      ),
    }),
    onSubmit: (values, action) => {
      console.log("Form data:", values);
      action.resetForm();
    },
  });

  return (
    <>

   
    <div className="form-container-tch">
      <p>Fill in your details</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container-tch">
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
          <div className="input-wrapper-tch">
            <i className="fas fa-user"></i>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
        </div>

        <div className="input-container-tch">
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
          <div className="input-wrapper-tch">
            <i className="fas fa-envelope"></i>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
        </div>

        <div className="input-container-tch">
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
          <div className="input-wrapper-tch">
            <i className="fas fa-lock"></i>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
        </div>

        <div className="input-container-tch checkbox-container-tch">
          {formik.touched.checkbox && formik.errors.checkbox && (
            <div className="error">{formik.errors.checkbox}</div>
          )}
          <Input
            type="checkbox"
            name="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.checkbox}
          />
          <span className="formcheckbox-tch">
            Click if you are registering as a teacher
          </span>
        </div>

        <Button type="submit" label="Create Account" />
      </form>
    </div>
    </>
  );
};
