export const listComments = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <ul>
        <li>{comment.content}</li>
      </ul>
    );
  });
};
