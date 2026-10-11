import { MessageSquareText } from 'lucide-react';

export default function PostCardDetails({ post }) {
  return(
    <>
      <button>↑</button>
      <p>VOTES</p>
      <button>↓</button>

      <MessageSquareText />
      <p>COMMENT_COUNT</p>

      <p>TIME_SINCE_POSTED</p>
      <p>AUTHOR</p>
    </>
  )
}
