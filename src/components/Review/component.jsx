export function Review({ text, user, rating }) {
  const reviewStyle = {
    padding: "5px 0",
  }

  return (
    <>
      <div style={reviewStyle}>
        <div>{text}</div>
        <div>Score: {rating} by <strong>{user}</strong></div>
      </div>
    </>
  )
}
