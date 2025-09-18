import * as Yup from 'yup';

//To check form field validation
export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email format').required('Email is Required'),
    age: Yup.number().typeError("Age must be a number").min(18, "You must be 18 years old").max(100, "You cannot be older than 100 years").required('Age is required'),
    date: Yup.date().required("Birth Date is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "confirm password and password must match"),
    gender: Yup.string().required("Gender is required"),
    interest: Yup.array().min(1, "Select at least one interest").required("Interest is required")
})