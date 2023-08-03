export const Review = ({rating, user, comment}) => {
  return (
    <div>
      <h2>{user}</h2>
      <p>{comment}</p>
      <p>{rating}</p>
    </div>
  )
}