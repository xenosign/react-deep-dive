import { ComponentType } from "react";

interface LoginProps {
  loginRequired?: boolean;
}

// TS 3.0 이슈로 인한 문법 변경 필요
// https://fourwingsy.medium.com/react%EC%99%80-typescript%EC%9D%98-%EB%AF%B8%EB%AC%98%ED%95%9C-%EB%B6%88%EC%9D%BC%EC%B9%98-b8f0e2bfe05d
function withLoginComponent<T extends { value: string }>(
  Component: ComponentType<T>
) {
  return function (props: T & LoginProps) {
    const { loginRequired, ...restProps } = props;

    if (loginRequired) {
      return <div>로그인이 필요합니다.</div>;
    }

    return <Component {...(restProps as T)} />;
  };
}

const Component = withLoginComponent((props: { value: string }) => {
  return <h3>{props.value}</h3>;
});

export default function WithLoginComponent() {
  const isLogin: boolean = true;

  return <Component value="text" loginRequired={isLogin} />;
}
