import { baseApi } from "./baseApi";

const allApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    createRecipe: builder.mutation({
      query: (data) => {
        return {
          url: "/recipe",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllRecipe: builder.query({
      query: (args) => {
        return {
          url: `/recipes?category=${args.category}&country=${args.country}&search=${args.search}`,
          method: "GET",
        };
      },
    }),
    getCategoryRecipe: builder.query({
      query: (params) => {
        return {
          url: `/recipes?category=${params.category}`,
          method: "GET",
        };
      },
    }),
    getSingleRecipe: builder.query({
      query: (params) => {
        return {
          url: `/recipes/${params.id}`,
          method: "GET",
        };
      },
    }),
    updateAfterBuy: builder.mutation({
      query: (data) => {
        return {
          url: "/recipe-update",
          method: "PATCH",
          body: data,
        };
      },
    }),
    purchaseCoin: builder.mutation({
      query: (data) => {
        return {
          url: "/coin",
          method: "PATCH",
          body: data,
        };
      },
    }),
    addReaction: builder.mutation({
      query: (data) => {
        return {
          url: `/recipes/reaction`,
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
  usePurchaseCoinMutation,
  useGetSingleRecipeQuery,
  useGetCategoryRecipeQuery,
  useAddReactionMutation,
} = allApi;
