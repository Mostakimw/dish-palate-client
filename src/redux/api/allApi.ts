import { baseApi } from "./baseApi";

const allApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = allApi;
