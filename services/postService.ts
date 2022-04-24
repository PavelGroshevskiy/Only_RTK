import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://dev.retnback.only.com.ru/api/news/list?search=retn&type=new",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: () => ({
        url: "/news",
      }),
    }),
  }),
});
