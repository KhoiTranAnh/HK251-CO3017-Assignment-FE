import axios from "axios";
import { cookieUtils } from "../utils/cookieUtils";

const login = async ({ email, password }) => {
  const reqBody = {
    username: email,
    password: password,
  };

  const response = await axios.post("/api/auth/login", reqBody);

  if (response.status === 200) {
    cookieUtils.setCookie("token", response.data.token);
    cookieUtils.setCookie("userName", response.data.userName);
    cookieUtils.setCookie("userStudyId", response.data.userStudyId);
    cookieUtils.setCookie("userRole", response.data.userRole);

    return {
      success: response.data.success,
      userName: response.data.userName,
      userStudyId: response.data.userStudyId,
      userRole: response.data.userRole,
    };
  }

  return {};
};

const createAccount = async ({
  name,
  email,
  password,
  roles,
  address,
  sex,
  phone,
  degree,
  birthday,
}) => {
  const reqBody = {
    name,
    email,
    password,
    roles,
    address,
    sex,
    phone,
    degree,
    birthday,
  };

  const response = await axios.post("/api/auth/addNewUser", reqBody);

  if (response.status === 200) {
    const loginResponse = await login({ email, password });

    if (loginResponse) return loginResponse;
  }

  return {};
};

export const authService = { login, createAccount };
