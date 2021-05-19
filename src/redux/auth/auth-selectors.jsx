export const getLoggedOn = state => state.auth.isLoggedOn;

export const getUserName = state => state.auth.user.name;

export const getUserToken = state => state.auth.token;

export const getLoading = state => state.auth.isLoading;
