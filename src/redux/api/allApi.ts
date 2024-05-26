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
    createRecipe: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/recipe",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllRecipe: builder.query({
      query: () => {
        return {
          url: "/recipes",
          method: "GET",
        };
      },
    }),
    updateAfterBuy: builder.mutation({
      query: (data) => {
        return {
          url: "/recipe",
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useCreateRecipeMutation,
  useGetAllRecipeQuery,
  useUpdateAfterBuyMutation,
} = allApi;
