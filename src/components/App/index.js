import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Loading from "../Loading"
import Error from "../Error"
import styles from "./styles.scss"

export const SAY_HELLO = gql`
  query sayHello($name: String!) {
    hello(name: $name)
  }
`

const App = () => (
  <Query query={SAY_HELLO} variables={{ name: "Jon" }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />
      }
      if (error) {
        return <Error error={error} />
      }
      return (
        <header>
          <h1>{data.hello}</h1>
        </header>
      )
    }}
  </Query>
)

export default App
