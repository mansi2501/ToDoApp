import { useFormik } from 'formik';
import { validationSchema } from '../schema';

function FormValidation() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            date: '',
            gender: '',
            interest: []
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    //form submit
    const handleSubmit = async (e) => {
        //e.preventDefault();
        console.log("form submitted");
        try {
            //await validationSchema
            console.log("form submitted");
        }
        catch { }
    }


    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let newInterests = [...formik.values.interest];
        if (checked) {
            newInterests.push(value);
        } else {
            newInterests = newInterests.filter(interest => interest !== value);
        }
        formik.setFieldValue("interest", newInterests);
    };


    return (
        <div>
            <h1 className="text-decoration-underline text-success">User Data</h1>
            <form onSubmit={formik.handleSubmit}>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th>First Name:</th>
                            <td><input type="text" name="firstName" id="firstName" onChange={formik.handleChange} value={formik.values.firstName} />
                                {formik.errors.firstName && <div className="text-danger">{formik.errors.firstName}</div>}

                            </td>
                        </tr>
                        <tr>
                            <th>Last Name:</th>
                            <td>
                                <input type="text" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} />
                                {formik.errors.lastName && <div className="text-danger">{formik.errors.lastName}</div>}

                            </td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}</td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td>
                                <input type="number" name="age" onChange={formik.handleChange} value={formik.values.age} />
                                {formik.errors.age && <div className="text-danger">{formik.errors.age}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>Birth Date:</th>
                            <td><input type="date" name="date" onChange={formik.handleChange} value={formik.values.date} max={new Date().toISOString().split("T")[0]} />
                                {formik.errors.date && <div className="text-danger">{formik.errors.date}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>Gender:</th>
                            <td>
                                <input type="radio" name="gender" checked={formik.values.gender === "Male"} onChange={formik.handleChange} value="Male" />Male
                                <input type="radio" name="gender" checked={formik.values.gender === "Female"} onChange={formik.handleChange} value="Female" />Female
                                {formik.errors.gender && <div className="text-danger">{formik.errors.gender}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>Interest:</th>
                            <td>
                                <input type="checkbox" name="cooking" checked={formik.values.interest.includes('cooking')} onChange={handleCheckboxChange} value="cooking" />Cooking
                                <input type="checkbox" name="traveling" checked={formik.values.interest.includes('traveling')} onChange={handleCheckboxChange} value="traveling" />Traveling
                                <input type="checkbox" name="reading" checked={formik.values.interest.includes('reading')} onChange={handleCheckboxChange} value="reading" />Reading
                                {formik.errors.interest && <div className="text-danger">{formik.errors.interest}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td><input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                                {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
                            </td>
                        </tr>
                        <tr>
                            <th>Confirm Password:</th>
                            <td><input type="password" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                                {formik.errors.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><button type="submit" class="btn btn-outline-primary" onClick={(e) => handleSubmit(e)}>Submit</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
}

export default FormValidation;