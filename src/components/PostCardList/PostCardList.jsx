import PostCard from '../PostCard/PostCard'

export default function PostCardList({ posts }) {
  return (
    <section>
      {posts.map(post =>
        <PostCard
          key={post.id}
          post={post}
        />
      )}
    </section>
  )
}
