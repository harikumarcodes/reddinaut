import PostCardDetails from '../PostCardDetails/PostCardDetails'

export default function PostCard({ post }) {
  return(
    <article>
      <h1>{post.title}</h1>
      <img src={post.image.src} alt={post.image.alt} />
      <PostCardDetails post={post} />
    </article>
  )
}
