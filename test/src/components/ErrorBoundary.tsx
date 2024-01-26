import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;
type State = { hasError: boolean; errorMessage: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      errorMessage: error.toString(),
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    // 에러가 발생했을 경우에 렌더링할 JSX
    if (this.state.hasError) {
      return (
        <div>
          <h1>에러가 발생했습니다.</h1>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    // 일반적인 상황의 JSX
    return this.props.children;
  }
}
