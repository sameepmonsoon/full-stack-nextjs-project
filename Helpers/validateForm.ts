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
const calculatePasswordStrength = (password: string) => {
  const weaknesses = [];
  let strength = 100;
  if (password?.length === 0 || password === undefined) {
    strength = 0;
    return { strength };
  }
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(numberWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  weaknesses.push(repeatCharactersWeakness(password));

  weaknesses.forEach((weakness) => {
    if (weakness === null) return;
    strength -= weakness.deduction;
  });

  return { strength };
};

const lengthWeakness = (password: string) => {
  const length = password?.length;

  if (length <= 5) {
    return {
      message: "Your password is too short",
      deduction: 40,
    };
  }

  if (length <= 10) {
    return {
      message: "Your password could be longer",
      deduction: 15,
    };
  }

  return null;
};

const uppercaseWeakness = (password: string) => {
  return characterTypeWeakness(password, /[A-Z]/g, "uppercase characters");
};

const lowercaseWeakness = (password: string) => {
  return characterTypeWeakness(password, /[a-z]/g, "lowercase characters");
};

const numberWeakness = (password: string) => {
  return characterTypeWeakness(password, /[0-9]/g, "numbers");
};

const specialCharactersWeakness = (password: string) => {
  return characterTypeWeakness(
    password,
    /[^0-9a-zA-Z\s]/g,
    "special characters"
  );
};

const characterTypeWeakness = (password: string, regex: RegExp, type: any) => {
  const matches = password?.match(regex) || [];

  if (matches.length === 0) {
    return {
      message: `Your password has no ${type}`,
      deduction: 20,
    };
  }

  if (matches.length <= 2) {
    return {
      message: `Your password could use more ${type}`,
      deduction: 5,
    };
  }

  return null;
};

const repeatCharactersWeakness = (password: string) => {
  const matches = password?.match(/(.)\1/g) || [];

  if (matches.length > 0) {
    return {
      message: "Your password has repeat characters",
      deduction: matches.length * 10,
    };
  }

  return null;
};

const passwordStrengthType = (strength: number) => {
  let type: string = "poor";
  if (strength <= 20) {
    type = "poor";
  } else if (strength > 20 && strength < 40) {
    type = "weak";
  } else if (strength >= 40 && strength < 60) {
    type = "normal";
  } else if (strength >= 60 && strength < 80) {
    type = "good";
  } else if (strength >= 80) {
    type = "strong";
  }

  return type;
};

export { calculatePasswordStrength, passwordStrengthType };
