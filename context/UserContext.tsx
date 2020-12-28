import React from 'react';

var UserStateContext = React.createContext(null);
var UserDispatchContext = React.createContext(null);

function userReducer(state: any, action: { type: any }) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem('id_token'),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(
  dispatch: (arg0: { type: string }) => void,
  login: any,
  password: any,
  history: string[],
  setIsLoading: (arg0: boolean) => void,
  setError: (arg0: boolean) => void,
) {
  setError(false);
  setIsLoading(true);

  if (!!login && !!password) {
    setTimeout(() => {
      localStorage.setItem('id_token', '1');
      setError(null);
      setIsLoading(false);
      dispatch({ type: 'LOGIN_SUCCESS' });

      history.push('/app/dashboard');
    }, 2000);
  } else {
    dispatch({ type: 'LOGIN_FAILURE' });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(
  dispatch: (arg0: { type: string }) => void,
  history: string[],
) {
  localStorage.removeItem('id_token');
  dispatch({ type: 'SIGN_OUT_SUCCESS' });
  history.push('/login');
}
