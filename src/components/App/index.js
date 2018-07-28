import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import styles from "./styles.scss"

const App = () => (
  <Query query={SAY_HELLO} variables={{ name: "Jon" }}>
    {({ data }) => (
      <header>
        <h1>{data.hello}</h1>
      </header>
    )}
  </Query>
)

const SAY_HELLO = gql`
  query sayHello($name: String!) {
    hello(name: $name)
  }
`

export default App
