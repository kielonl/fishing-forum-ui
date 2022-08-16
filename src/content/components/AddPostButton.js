const AddPostButton = ({ setMode }) => {
  const handleClick = () => {
    setMode(true);
  };
  return (
    <button className="content-addPost-button" onClick={handleClick}>
      Add Post
    </button>
  );
};

export default AddPostButton;
