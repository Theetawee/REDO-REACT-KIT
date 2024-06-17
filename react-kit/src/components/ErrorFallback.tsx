import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ children }: { children: React.ReactNode }) => {
  const FallBack = () => (
    <div>
      <p>Something went wrong.</p>
    </div>
  );

  return <ErrorBoundary FallbackComponent={FallBack}>{children}</ErrorBoundary>;
};

export default ErrorFallback;
