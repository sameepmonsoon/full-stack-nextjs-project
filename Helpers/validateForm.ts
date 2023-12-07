// validation function
const validate = (values: any) => {
  const errors: any = {};

  if (!values.username) {
    errors.username = "User name is required";
  } else {
    let userRegEx = /^[a-zA-Z0-9]{4,10}$/;
    if (!userRegEx.test(values.username)) {
      errors.username = "Invalid Username";
    }
  }

  if (!values.email) {
    errors.email = "Email is required";
    // setIsSubmitting(false);
  } else {
    let emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,5}$/i;
    if (!emailRegEx.test(values.email)) {
      errors.email = "Email is not valid";
      //   setIsSubmitting(false);
    }
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
    // setIsSubmitting(false);
  } else {
    let phoneRegEx = /[9][6-9]\d{8}/;

    if (!phoneRegEx.test(values.phone)) {
      errors.phone = "Phone number is not valid";
      //   setIsSubmitting(false);
    }
  }
  if (!values.password) {
    errors.password = "Password is required";
    // setIsSubmitting(false);
  } else {
    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!passwordRegEx.test(values.password)) {
      //   setIsSubmitting(false);

      errors.password =
        "Password must contain atleast 6 characters, one uppercase, one lowercase, one special-character and one number ";
    }
  }

  return errors;
};

///password strength validator
export const checkPasswordStrength = (password: string) => {
  let errors: any = {};
  let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
  const poorRegExp = /[a-z]/;
  const weakRegExp = /(?=.*?[0-9])/;
  const goodExp = /(?=.*?[#?!@$%^&*-])/;
  const poorPassword = poorRegExp.test(password);
  const weakPassword = weakRegExp.test(password);
  const goodPassword = goodExp.test(password);

  console.log(poorPassword, weakPassword, goodPassword);
  if (!password) {
    errors.password = "Password is reuired.";
  } else {
    if (
      password.length <= 5 &&
      (poorPassword || weakPassword || goodPassword)
    ) {
      errors.poor = true;
    }
    if (
      password.length <= 7 &&
      poorPassword &&
      (weakPassword || goodPassword)
    ) {
      errors = {};
      errors.weak = true;
    }
    if (password.length > 7 && poorPassword && weakPassword && goodPassword) {
      errors.normal = true;
    }
    if (passwordRegEx.test(password)) {
      errors.good = true;
    }
  }
  return errors;
};
