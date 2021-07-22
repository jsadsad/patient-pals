import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './landing/landing_container'
import LoginFormContainer from './session_form/login_container'
import SignupFormContainer from './session_form/signup_container'
import NavbarContainer from '../components/navbar/navbar_container'
import PatientIndex from '../components/users/patients/patients_container'
import PartnerIndex from '../components/users/partners/partners_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_util'
import ConversationFormContainer from './conversation/conversation_form_container'
import UserIndex from './users/index/index_container'
import UserConversationContainer from './user_conversations/user_conversations_container'

const App = () => (
  <div id="App">
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route
        exact
        path={`/conversations/:conversationId/messages`}
        component={ConversationFormContainer}
      />
      <ProtectedRoute path="/users" component={UserIndex} />
      <ProtectedRoute path="/messages" component={UserConversationContainer} />
      <ProtectedRoute path="/patients" component={PatientIndex} />
      <ProtectedRoute exact path="/patient-partners" component={PartnerIndex} />
      <Redirect to="/404" />
    </Switch>
  </div>
)

export default App
