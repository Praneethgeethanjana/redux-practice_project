import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ limit }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  extraReducers: {
    [fetchPosts.pending]: () => {
      console.log("pending");
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Success!");
      state.posts = payload;
    },
    [fetchPosts.rejected]: () => {
      console.log("Fetched Failed");
    },
  },
});

export const getPostActions = postSlice.actions;

// export const getAllPosts = (state) => state.post.posts;

export default postSlice.reducer;
