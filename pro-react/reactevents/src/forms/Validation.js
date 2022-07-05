import validator from "validator";

export function ValidateData(data, rules) {
  let errors = {};
  Object.keys(data).forEach((field) => {
    if (rules.hasOwnProperty(field)) {
      let fieldErrors = [];
      let val = data[field];
      if (rules[field].required && validator.isEmpty(val)) {
        fieldErrors.push("Value required");
      }
      if (!validator.isEmpty(data[field])) {
        if (
          rules[field].minlength &&
          !validator.isLength(val, rules[field].minlength)
        ) {
          fieldErrors.push(
            `Enter at least ${rules[field].minlength} charachters`
          );
        }
        if (rules[field].alpha && !validator.isAlpha(val)) {
          fieldErrors.push("Enter only letters");
        }
        if (rules[field].email && !validator.isEmail(val)) {
          fieldErrors.push("Enter a valid email address");
        }
      }
      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    }
  });
  return errors;
}
