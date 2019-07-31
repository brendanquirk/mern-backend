const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email: '';
  data.password = !isEmpty(data.password) ? data.password: '';

  //Checks to see if there is an email/if it is correct
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  //Checks if there is a password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  return {
    errors,
    isValid: isEmpty(errors);
  }
};
