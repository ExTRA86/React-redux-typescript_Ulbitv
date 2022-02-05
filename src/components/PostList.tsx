import React, { FC, useEffect } from "react"
import { useActions } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"

const PostList: FC = () => {
  const { error, limit, loading, page, posts } = useTypeSelector(
    state => state.post
  )

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const { fetchPosts, setPostPage } = useActions()

  useEffect(() => {
    fetchPosts(page, limit)
  }, [page])

  return (
    <div>
      {loading && <h1>Идет загрузка...</h1>}
      {error && { error }}
      {posts.map(post => (
        <div key={post.id}>
          {post.id}) {post.title}
          <div>{post.body}</div>
          <hr />
        </div>
      ))}
      <div style={{ display: "flex", cursor: "pointer" }}>
        {pages.map(p => (
          <div
            onClick={() => setPostPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
