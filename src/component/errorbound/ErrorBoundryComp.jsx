import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🛑 Error caught by ErrorBoundary:", error, errorInfo);
    // You can log error to services like Sentry here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-4 bg-red-50 text-red-800 border border-red-300 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Something went wrong 😢</h2>
          <p className="mb-4 text-sm">Please try refreshing the page or contact support.</p>
          {process.env.NODE_ENV === 'development' && (
            <pre className="text-xs bg-red-100 p-2 rounded max-w-[80%] overflow-auto">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;