import React from "react";
const Card = ({post,author,comments})=>{
    return(
<>
<div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-700 mt-2">{post.body}</p>

      {author && (
        <div className="mt-6 border-t pt-4">
          <h2 className="font-semibold">Author</h2>
          <p>
            {author.name} ({author.email})
          </p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Comments</h2>
        {comments?.map((comment) => (
          <div key={comment.id} className="mt-3 p-4 border rounded">
            <p className="font-medium">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
</>
    )
}

export default Card