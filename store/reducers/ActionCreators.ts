import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStaticProps = async (query: any) => {
  const response = await fetch(
    `https://dev.retnback.only.com.ru/api/news/list?search=` +
      query.search +
      "&type=" +
      query.type
  );
  const posts = await response.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return posts.data;
  //   return {
  //     props: {
  //       initialReduxState: {
  //         posts: posts.data,
  //       },
  //     },
  //   };
};

export const fetchPosts = createAsyncThunk("post/fetch", getStaticProps);
