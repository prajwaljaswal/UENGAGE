// pages/posts/[id].js or app/posts/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import useResponse from "../../server/useResponse";
import Card from "@/app/ReusableComponents/Card";

const PostDetailPage = () => {
  const router = useParams();
  let id = router.id[0][0];

  const endpoints = useMemo(() => {
    if (!id) return [];
    return [`/posts/${id}`, `/comments?postId=${id}`];
  }, [id]);

  const { responses, loading, error } = useResponse(endpoints);
  const [post, comments] = responses;

  const authorEndpoint = useMemo(() => {
    if (!post || !post.userId) return null;
    return `/users/${post.userId}`;
  }, [post]);

  const { responses: [author] = [] } = useResponse(
    authorEndpoint ? [authorEndpoint] : []
  );

  if (loading || !post)
    return <p className="flex justify-center">Loading...</p>;
  if (error) return <p>Error loading post</p>;

  return (
    <Card post = {post} author = {author} comments ={comments}/>
  );
};

export default PostDetailPage;
