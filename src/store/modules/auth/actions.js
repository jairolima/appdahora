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

export function signUpRequest(username, email, password, phone, cpf) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {username, email, password, phone, cpf},
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
