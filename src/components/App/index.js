import React, { Component } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

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
      <Query query={SAY_HELLO} variables={{ name: "Jon" }}>
        {({ data }) => (
          <header>
            <h1>{data.hello}</h1>
            <h2 className={styles.module}>Goodbye</h2>
            <button onClick={this.showMessage}>Click Me</button>
          </header>
        )}
      </Query>
    )
  }
}

const SAY_HELLO = gql`
  query sayHello($name: String!) {
    hello(name: $name)
  }
`

export default App
