import "./SignUp.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupActions } from "../../store/signup";

const SignUp = ({setScreenIndex}) => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.signup.records);

  const [register, setRegister] = useState({
    email: "",
    name: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    mobile: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const clear = () => {
    setRegister({
      email: "",
      name: "",
      mobile: "",
      password: "",
    });
  };



  const signupHandler = (event) => {
    event.preventDefault();
    if (validate(register)) {
      dispatch(signupActions.signup(register)
      );
      clear();
    };
  };

  const validate = (values) => {
    let isValidate = false;

    let errors = {};
   // const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const emailReg= /\S+@\S+\.\S+/;
    const nameReg = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
    const pwReg = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    const phoneReg = /^(?:0|94|\+94)(|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;



    if (values.email === "") {
      errors.email = "Email is required!";
    } else if (!emailReg.test(values.email)) {
      errors.email = "Please enter a valid Email";
    } else if (isAlreadySaveEmail(values)){
      errors.email = "Email Already Used";
    }
    if (values.name === "") {
      errors.name = "FullName is required!";
    } else if (!nameReg.test(values.name)) {
      errors.name = "please enter fullname only letters";
    }
    if ( values.mobile === "") {
      errors.mobile = "Mobile is required!";
    } else if (!phoneReg.test(values.mobile)) {
      errors.mobile = "Please enter a valid mobile number";
    }
    if (values.password === "") {
      errors.password = "Password is required!";
    } else if (!pwReg.test(values.password)) {
      errors.password =
        "Password must be more than 7 characters & at least one digit,lowercase,upper case letter";
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      isValidate = true;
    } else {
      isValidate = false;
    }

    return isValidate;
  };

  function isAlreadySaveEmail(details) {
   return records.some((record)=>(details.email === record.email));
  }

  return (
    <div className="form">
      <div className="container">
        <h2>SIGNUP</h2>
        <h5>Please enter your details!</h5>

        <input
          value={register.email}
          onChange={handleChange}
          placeholder="    Enter Email"
         
          name="email"
          id="email"
        />
        <p className={'erro-text'} id="p-email">{errors.email}</p>

        <input
          value={register.name}
          onChange={handleChange}
          placeholder="    Enter Full Name"
          name="name"
          id="name"
        />
        <p className={'erro-text'}>{errors.name}</p>

        <input
          value={register.mobile}
          onChange={handleChange}
          placeholder="    Enter Mobile Number"
          name="mobile"
          id="mobile"
        />
        <p className={'erro-text'}>{errors.mobile}</p>

        <input
            value={register.password}
            onChange={handleChange}
            placeholder="    Enter Password"
            type="password"
            name="password"
            id="password"
        />
        <p className={'erro-text'}>{errors.password}</p>

        <button onClick={signupHandler} className="btn" id={'signup'}>
          SIGNUP
        </button>

        <button
          onClick={() => {
             setScreenIndex(1);
          }}
          id="back"
          className="btn"
        >
          Back To Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
