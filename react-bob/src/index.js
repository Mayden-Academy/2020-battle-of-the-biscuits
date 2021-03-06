import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import './index.scss'
import NotFound from './Components/NotFound/NotFound'
import Biscuit from './Components/App'
import Leaderboard from './Components/Leaderboard'

import * as serviceWorker from './serviceWorker'

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={ Biscuit } />
          <Route exact path="/leaderboard" component={ Leaderboard } />
          <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <Routing />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
