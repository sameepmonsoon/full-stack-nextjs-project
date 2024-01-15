export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setUserDetail = (userDetail: any) => {
  localStorage.setItem("user", JSON.stringify(userDetail));
};
export const getUserDetail = () => {
  const user: any = localStorage.getItem("user");
  return JSON.parse(user);
};
