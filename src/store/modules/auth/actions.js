export function signInRequest(cpf, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {cpf, password},
  };
}

export function signInSuccess(token, user, rescue) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user, rescue},
  };
}

export function signUpRequest(values) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      values,
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

export function forgotRequest(email) {
  return {
    type: '@auth/FORGOT_REQUEST',
    payload: {email},
  };
}

// export function forgotSuccess(email) {
//   return {
//     type: '@auth/FORGOT_SUCCESS',
//     payload: {email},
//   };
// }

// export function forgotFailure() {
//   return {
//     type: '@auth/FORGOT_FAILURE',
//   };
// }
