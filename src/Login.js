import React from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'

export class Login extends React.Component{
  constructor (props) {
    super(props)
    this.state = { email : '', password : '', jump : ''}
  }

  api(command) {
    console.log(command)
    request.get('/users/'+command)
    .query({ 
      email : this.state.email,
      password : this.state.password
    })
    .end((err, res) => {
      if(err) return
      /*
      console.log("Login.js result -----------------");
      console.log('res : ' + res);
      console.log("Login.js result -----------------");
      console.log('res : ' + JSON.stringify(res.body));
      console.log('res : ' + JSON.stringify(res.body.result));
     
*/

      if(res.body.result)
      {
        console.log('res : ' + JSON.stringify(res.body.result));
        this.setState({jump : '/userList'})
      }
    })
  }

  render () {
    if(this.state.jump){
      console.log(this.state)
      return <Redirect to={this.state.jump} />
    }


    const changed = (name, e) => this.setState({[name]: e.target.value})
    return (

	<div class="row mt-5">
	  <div class="col-md-6 m-auto">
	    <div class="card card-body">
	      <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
		<div class="form-group">
		  <label for="email">Email</label>
		  <input
		    value={this.state.email}
		    type="email"
		    id="email"
		    name="email"
		    class="form-control"
		    placeholder="Enter Email"
		    onChange={e => changed('email', e)}
		  />
		</div>
		<div class="form-group">
		  <label for="password">Password</label>
		  <input
		    value={this.state.password}
		    type="password"
		    id="password"
		    name="password"
		    class="form-control"
		    placeholder="Enter Password"
		    onChange={e => changed('password', e)}
		  />
		</div>
		<button type="submit" class="btn btn-primary btn-block" onClick={e => this.api('login')} >Login</button>
	      <p class="lead mt-4">
		No Account? <a href="/users/register">Register</a>
	      </p>
	    </div>
	  </div>
	</div>

    )
  }

}
