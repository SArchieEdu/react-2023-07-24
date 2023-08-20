export const Review = ({ text, authorName }) => {
  return <div>
    <div>{text}</div>
    <div>by <b>{authorName}</b></div>
  </div>;
};
