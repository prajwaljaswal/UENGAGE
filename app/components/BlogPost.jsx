"use client";

import React, { useMemo } from "react";
import useResponse from "../server/useResponse";
import PostCard from "../ReusableComponents/PostCard";

const truncateText = (text, maxLength = 100) =>
  text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

const BlogList = () => {
  const endpoints = useMemo(() => ["/posts", "/users"], []);
  const { responses, loading, error } = useResponse(endpoints);
  const [posts, users] = responses;

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading data</p>;

  const getAuthorName = (userId) => {
    const user = users?.find((u) => u.id === userId);
    return user ? user.name : "Unknown";
  };

  return (
   <>
   <PostCard posts = {posts} truncateText ={truncateText} getAuthorName = {getAuthorName}/>
   </>
  );
};

export default BlogList;
