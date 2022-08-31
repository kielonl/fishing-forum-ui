export const ListComments = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <ul key={index}>
        <li>{comment.content}</li>
      </ul>
    );
  });
};
