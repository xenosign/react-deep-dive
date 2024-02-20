import { memo } from "react"

const withSampleHOC = (Component) => {
  return function () {
    return <Component />
  }
}

const HOCComponent = withSampleHOC(() => <>HOCComponent</>)

const withNamedSampleHOC = (Component) => {
  return function withNamedSampleHOC () {
    return <Component />
  }
}

const NamedHOCComponent = withNamedSampleHOC(function NamedHOCComponent () {
  return <>NamedHOCComponent</>
})


const MemoizedComponent = memo(() => <>MemoizedComponent</>);

MemoizedComponent.displayName = "메모된 컴포넌트";


export default function DevTools() {
  return (
    <>
      <HOCComponent />
      <NamedHOCComponent />
      <MemoizedComponent />
    </>
  )
}
