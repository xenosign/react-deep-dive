import { ComponentType, PropsWithChildren } from "react";

interface AddProps {
  number?: number;
}

function withComponent<T>(WrappedComponent: ComponentType<T>) {
  return function withAddPropsComponent(props: PropsWithChildren<T>) {
    const { ...restProps } = props;

    console.log(restProps);

    return <WrappedComponent {...restProps} />;
  };
}

const Component = withComponent((props: { text: string }) => {
  return <h1>{props.text}</h1>;
});

export default function WithFoo() {
  return <Component text={"테스트"} />;
}
