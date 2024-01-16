import React, { Component } from "react";

export default class Chapter01_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  functionCountUp() {
    // functionCountUp 함수의 this 를 가르킴
    console.log(this);
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  }

  arrowFunctionCountUp = () => {
    // 삼위 클래스 컴포넌트의 this 를 가르킴
    console.log(this);
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.functionCountUp}>일반 함수</button>
        <button onClick={this.arrowFunctionCountUp}>화살표 함수</button>
      </div>
    );
  }
}
