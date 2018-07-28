export function wait() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    })
  })
}

export function getMocks(query, variables, result) {
  return [
    {
      request: { query, variables },
      result: {
        data: result
      }
    }
  ]
}
