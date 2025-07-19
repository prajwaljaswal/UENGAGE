import React from "react"
import { useRouter } from "next/navigation";

const PostCard = ({posts,truncateText,getAuthorName})=>{
    const router = useRouter();
    return(
        <>
         <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts?.map((post) => (
          <div
            onClick={() => router.push(`/post/${post.id}`)}
            key={post.id}
            className="bg-white rounded-2xl shadow p-5 border border-gray-100 hover:shadow-lg  transition hover:cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{truncateText(post.body, 120)}</p>
            <p className="text-sm text-gray-500">
              By:{" "}
              <span className="font-medium">{getAuthorName(post.userId)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

export default PostCard