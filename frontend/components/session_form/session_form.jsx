import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

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
      role: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginDemo = this.loginDemo.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
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

  renderErrors() {
    if (this.props.errors.session.length !== 0) {
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
        <div className="loginSignupForm">
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
                      className="form-control mb-md-3 mb-sm-1"
                    />
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleField('password')}
                      placeholder="Password"
                      required
                      className="form-control mb-md-3 mb-sm-1"
                    />
                    <button
                      type="submit"
                      value={this.props.formType}
                      className="btn btn-primary"
                    >
                      {this.props.formType.capitalize()}
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
        <div className="loginSignupForm">
          {this.renderErrors()}
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h3>Sign Up for Patient Pals</h3>
                <div>
                  <div>
                    <input
                      type="text"
                      value={this.state.first_name}
                      onChange={this.handleField('first_name')}
                      placeholder="First Name"
                      className="form-control mb-md-3 mb-sm-1"
                      required
                    />
                    <input
                      type="text"
                      value={this.state.last_name}
                      onChange={this.handleField('last_name')}
                      placeholder="Last Name"
                      className="form-control mb-md-3 mb-sm-1"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleField('email')}
                      placeholder="Email"
                      className="form-control mb-md-3 mb-sm-1"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleField('password')}
                      placeholder="Password"
                      className="form-control mb-md-3 mb-sm-1"
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
                      className="form-control mb-md-3 mb-sm-1"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={this.state.location}
                      onChange={this.handleField('location')}
                      placeholder="Location"
                      className="form-control mb-md-3 mb-sm-1"
                    />
                  </div>
                  <select
                    value={this.state.role}
                    onChange={this.handleField('role')}
                    className="form-control mb-md-3 mb-sm-1"
                  >
                    <option value="" disabled defaultValue>
                      Role
                    </option>
                    <option value="Patient">Patient</option>
                    <option value="Patient Partner">Patient Partner</option>
                  </select>
                  <button
                    type="submit"
                    value={this.props.formType}
                    className="btn btn-primary"
                  >
                    {this.props.formType.capitalize()}
                  </button>
                  <div onClick={this.loginDemo}>Demo User</div>
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
