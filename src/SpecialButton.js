import React from 'react'
import { withRouter } from 'react-router'

export const SpecialButton = withRouter(({ history }) => {
  return (
    <button onClick={() => {
      history.push('/post/special')
    }}>Special Button</button>
  )
})