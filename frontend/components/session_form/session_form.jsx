import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      age: '',
      location: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginDemo = this.loginDemo.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.errorsOccured = this.errorsOccured.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  loginDemo(e) {
    e.preventDefault()
    this.props
      .loginDemo({
        email: 'test@example.com',
        password: 'password',
      })
      .then(() => this.props.history.goBack())
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  errorsOccured() {
    this.props.errors.session.length !== 0
  }

  renderErrors() {
    if (this.errorsOccured) {
      return (
        <ul>
          {this.props.errors.session.map((error, idx) => (
            <li key={`error-${idx}`}>
              {' '}
              {error}
              <span onClick={() => this.props.clearErrors()}>&times;</span>
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <div>
            <Link to="/">Home Page</Link>
          </div>
          {this.renderErrors()}
          <div>
            <div>
              <div>Log in to Patient Pals</div>
              <div>
                New To Patient Pals?
                <span>
                  <Link to="/signup">Sign up!</Link>
                </span>
              </div>
              <div onClick={this.loginDemo}>Demo User</div>
              <div></div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleField('email')}
                      placeholder="Email"
                      required
                    />
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleField('password')}
                      placeholder="Password"
                      required
                    />
                    <button type="submit" value={this.props.formType}>
                      {this.props.formType}
                    </button>
                    <div>
                      New To Patient Pals?
                      <span>
                        <Link to="/signup">Sign up!</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    } else if (this.props.formType === 'signup') {
      return (
        <div>
          <div>
            <Link to="/">Home Page</Link>
          </div>
          {this.renderErrors()}
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h3>Sign Up for Patient Pals</h3>
                <div onClick={this.loginDemo}>Demo User</div>
                <div>
                  <div>
                    <input
                      type="text"
                      value={this.state.first_name}
                      onChange={this.handleField('first_name')}
                      placeholder="First Name"
                      required
                    />
                    <input
                      type="text"
                      value={this.state.last_name}
                      onChange={this.handleField('last_name')}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleField('email')}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleField('password')}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      max="150"
                      value={this.state.age}
                      onChange={this.handleField('age')}
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <select
                      value={this.state.location}
                      onChange={this.handleField('location')}
                    >
                      <option value="" disabled defaultValue>
                        Location
                      </option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="Portland">Portland</option>
                      <option value="Seattle">Seattle</option>
                      <option value="Los Angeles">Los Angeles</option>
                    </select>
                  </div>
                  <button type="submit" value={this.props.formType}>
                    {this.props.formType}
                  </button>
                  <div>
                    Already on Patient-Pals? <Link to="/login">Log in</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm)