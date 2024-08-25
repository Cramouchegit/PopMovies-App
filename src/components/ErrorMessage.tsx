interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="error">
      <span>😭</span>
      {message}
    </div>
  );
}

export default ErrorMessage;
