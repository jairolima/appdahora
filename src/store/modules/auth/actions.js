export function signInRequest(cpf, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {cpf, password},
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user},
  };
}

export function signUpRequest(
  avatar,
  first_name,
  last_name,
  cpf,
  birthday,
  email,
  phone,
  password,
  password_confirmation,
  zipcode,
  neighborhood,
  address,
  number,
  complement,
  city,
  state,
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      avatar,
      first_name,
      last_name,
      cpf,
      birthday,
      email,
      phone,
      password,
      password_confirmation,
      zipcode,
      neighborhood,
      address,
      number,
      complement,
      city,
      state,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
