export default function Validation (values) {
     const errors ={}
     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
     const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

     if(values.name ==="") {
        errors.name = "names is Required"
     }

     if(values.email === "") {
        errors.email = "email is Required"
     }
     if(!email_pattern.test(values.email)) {
        errors.email = "Email is not correct"
     }
     else{(!email_pattern.test(values.email))
        errors.email = "Email did'nt match"
     }

     if(values.password ==="") {
        errors.password = 'Password Required';
     }
     else if (!password_pattern.test(values.password)) {
        errors.email = "Password did't macth"
     }

     return errors;
}