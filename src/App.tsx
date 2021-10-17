import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { Pages } from './views/Pages'

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Router>
        <Route path="/pages/:pageId">
          <Pages />
        </Route>
      </Router>
    </RecoilRoot>
  )
}

export default App
