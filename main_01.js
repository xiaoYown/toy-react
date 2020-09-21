import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  constructor () {
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  render () {
    return <div>
      <h1>my component</h1>
      <span>a: { this.state.a.toString() }</span>
      <br />
      <span>b: { this.state.b.toString() }</span>
      { this.children }
      <button onClick={() => {
        this.setState({
          a: this.state.a++
        })
      }}>add</button>
    </div>
  }
}

render(<MyComponent>
  <p>children</p>
</MyComponent>, document.body)