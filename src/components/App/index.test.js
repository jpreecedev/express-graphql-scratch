import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import { wait, getMocks } from "../../utils/test-graphql"

import App, { SAY_HELLO } from "../App"
import Loading from "../Loading"

var renderComponent = function({ query, variables, result }, props) {
  return mount(
    <MockedProvider mocks={getMocks(query, variables, result)}>
      <App {...props} />
    </MockedProvider>
  )
}

describe("<App /> tests", function() {
  test("Should render 'Hello Jon' when calling SAY_HELLO query", function(done) {
    var query = SAY_HELLO
    var variables = {
      name: "Jon"
    }
    var result = {
      hello: "Hello Jon"
    }

    var wrapper = renderComponent({ query, variables, result })
    expect(wrapper.find(Loading).length).toBe(1)

    wait().then(function() {
      wrapper.update()
      expect(wrapper.find("h1").text()).toContain(result.hello)
      done()
    })
  })
})
