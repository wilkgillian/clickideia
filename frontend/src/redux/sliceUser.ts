import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { useRouter } from "next/router";

interface UserState {
  user: UserProps;
}
interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  isAdmin: boolean;
  userToken: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    username: "",
    email: "",
    isAdmin: false,
    userToken: "",
  },
  reducers: {
    loginUser: (state, action) => {
      async function sigIn() {
        const { data } = await api.post("/sessions", {
          username: action.payload.username,
          password: action.payload.password,
        });
        const userInfos = {
          id: data.user.id,
          name: data.user.name,
          username: data.user.username,
          email: data.user.email,
          isAdmin: data.user.isAdmin,
          userToken: data.token,
        };
        return {
          userInfos,
        };
      }
    },
  },
});

export default userSlice.reducer;
export const { loginUser } = userSlice.actions;

export const useUser = (state: UserState) => {
  return state.user;
};
