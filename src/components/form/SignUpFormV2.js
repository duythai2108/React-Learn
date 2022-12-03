import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 character or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">FirstName</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-600">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-600">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-400 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
