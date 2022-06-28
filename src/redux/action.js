export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});
export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  users,
});
