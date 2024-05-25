import { baseApi } from "./baseApi";

const allApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useCreateUserMutation } = allApi;
