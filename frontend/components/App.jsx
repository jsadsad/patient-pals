import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './landing/landing'
import LoginFormContainer from './session_form/login_container'
import SignupFormContainer from './session_form/signup_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Redirect to="/404" />
    </Switch>
  </div>
)

export default App
