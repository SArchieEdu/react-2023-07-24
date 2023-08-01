export const Review = ({ user, text, rating }) => (
  <div>
    {user && <h4>{user}</h4>}
    {rating && <p>rating: {rating}</p>}
    {text && <p>{text}</p>}
  </div>
);
