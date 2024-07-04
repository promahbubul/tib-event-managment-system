const ProgressStatus = () => {
  const handleClick = (e) => {
    console.log(window.clientInformation.navigator);
  };
  return (
    <div>
      <input type="file" name="" id="" onChange={handleClick} />
    </div>
  );
};
export default ProgressStatus;
