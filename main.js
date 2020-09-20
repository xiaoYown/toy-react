import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  render () {
    return <div>
      my component
      { this.children }
    </div>
  }
}

render(<MyComponent>
  <p>1</p>
  <p>1</p>
</MyComponent>, document.body)