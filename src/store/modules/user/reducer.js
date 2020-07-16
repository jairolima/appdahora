import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  rescue: null,
  rescueload: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.rescue = action.payload.rescue;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/UPDATE_AWARDS_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/UPDATE_RESCUE_SUCCESS': {
        draft.rescue = action.payload.rescue;
        break;
      }
      case '@user/STORE_AWARDS_REQUEST': {
        draft.rescueload = true;
        break;
      }
      case '@user/STORE_AWARDS_SUCCESS': {
        draft.rescueload = false;
        break;
      }
      case '@user/STORE_AWARDS_FAILURE': {
        draft.rescueload = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.rescue = null;
        break;
      }
      default:
    }
  });
}
