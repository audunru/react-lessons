import Alert from "../alert";

const ErrorComponent = () => {
  return (
    <div className="container mx-auto px-4">
      <Alert type="error">
        <strong className="font-bold">Error:</strong> Something went wrong!
      </Alert>
    </div>
  );
};

export default ErrorComponent;
