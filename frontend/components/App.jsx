import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './landing/landing_container'
import LoginFormContainer from './session_form/login_container'
import SignupFormContainer from './session_form/signup_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util'
import ConversationForm from './conversation/conversation_form_container'
import UserIndex from './users/index/index_container'

const App = () => (
  <div id="App">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/users" component={UserIndex} />
      <ProtectedRoute
        path={`/conversations/:conversationId/messages/new`}
        component={ConversationForm}
      />
      <Redirect to="/404" />
    </Switch>
  </div>
)

export default App
