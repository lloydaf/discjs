import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Pages } from './views/Pages'

function App(): JSX.Element {
  return (
    <Router>
      <Route path="/pages/:pageId">
        <Pages />
      </Route>
    </Router>
  )
}

export default App
