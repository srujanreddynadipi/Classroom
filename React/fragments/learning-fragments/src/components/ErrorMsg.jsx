const ErrorMsg = ({items}) => {
  return <>{items.length === 0 && <h3>Iam Still hungry.</h3>}</>;
};

export default ErrorMsg;
