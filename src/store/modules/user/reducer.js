import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  rescue: null,
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
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.rescue = null;
        break;
      }
      default:
    }
  });
}
