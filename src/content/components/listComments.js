export const listComments = ({ comments }) => {
  console.log(comments);
  return comments.map((comment, index) => {
    return (
      <ul>
        <li>{comment.content}</li>
      </ul>
    );
  });
};
