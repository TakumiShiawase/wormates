const initialState = {
  stepOneData: null,
  userData: null,
  error: null,
  loading: false,
  verificationStatus: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STEP_ONE_DATA':
      return {
        ...state,
        stepOneData: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: null,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'VERIFY_CODE_SUCCESS':
      return { ...state, verificationStatus: 'success' };
    case 'VERIFY_CODE_FAIL':
      return { ...state, verificationStatus: 'fail' };
    default:
      return state;
  }
};

export default registerReducer;
