import { registerUser } from '../../services/register.js';
import api from '../../services/api.js';

export const setStepOneData = (data) => {
  return {
    type: 'SET_STEP_ONE_DATA',
    payload: data,
  };
};

export const registerUserAction = (data) => async (dispatch) => {
  try {
    const response = await registerUser(data);
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: error,
    });
  }
};
export const verifyCodeAction = (verificationCode) => {
  return (dispatch) => {
    return api
      .post('register_verification/', { code: verificationCode })
      .then((response) => {
        dispatch({ type: 'VERIFY_CODE_SUCCESS', payload: response.data });
        return response.data;
      })
      .catch((error) => {
        dispatch({ type: 'VERIFY_CODE_FAIL', payload: error.response.data });
        throw error;
      });
  };
};
