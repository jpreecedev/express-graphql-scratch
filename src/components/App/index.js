import React, { Component } from "react"
import styles from "./styles.scss"

class App extends Component {
  state = {
    message: "Hello, World!"
  }

  showMessage = () => {
    alert(this.state.message)
  }

  render() {
    return (
      <header>
        <h1>Hello, World!</h1>
        <h2 className={styles.module}>Goodbye</h2>
        <button onClick={this.showMessage}>Click Me</button>
      </header>
    )
  }
}

export default App
