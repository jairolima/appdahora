export function updateProfileRequest(
  first_name,
  last_name,
  email,
  phone,
  access_token,
) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: {first_name, last_name, email, phone, access_token},
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {profile},
  };
}

export function updateProfilefailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function storeAwardsRequest(modalId, access_token) {
  return {
    type: '@user/STORE_AWARDS_REQUEST',
    payload: {
      modalId,
      access_token,
    },
  };
}

export function storeAwardsSuccess() {
  return {
    type: '@user/STORE_AWARDS_SUCCESS',
  };
}

export function storeAwardsFailure() {
  return {
    type: '@user/STORE_AWARDS_FAILURE',
  };
}

export function updatePasswordRequest(
  password,
  password_confirmation,
  access_token,
) {
  return {
    type: '@user/UPDATE_PASSWORD_REQUEST',
    payload: {password, password_confirmation, access_token},
  };
}

export function updateAwardsSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {profile},
  };
}

export function updateRescueSuccess(rescue) {
  return {
    type: '@user/UPDATE_RESCUE_SUCCESS',
    payload: {rescue},
  };
}
