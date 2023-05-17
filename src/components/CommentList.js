import Comment from "./Comment"


const CommentList = ({comments}) => {

  const commentComponents = comments.map( comment => {
    return (
      <Comment key={comment.id} author={comment.author} commentText={comment.text}/>
    )
  })


  return (
    <>
      {commentComponents}
    </>
  )
}

export default CommentList