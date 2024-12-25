const initialState = {
  activePage: 'home',
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
