import React from 'react'
import request from 'superagent'

export class ApplicationHeader extends React.Component{
  constructor (props) {
    super(props)
    this.state = { email : '', password : '', jump : ''}
  }

  render() {

    

    return(
        
	<nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
	  <div class="container">
	    <div class="navbar-brand"><a href="/" class="nav-link"> MyApp </a> </div>
	    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	      <ul class="navbar-nav">
		<li class="nav-item"><a href="/list" class="nav-link">MySQL list</a></li>
		<li class="nav-item"><a href="/slowLambda" class="nav-link">slowLambda</a></li>
		<li class="nav-item"><a href="/s3list" class="nav-link">S3 bucket</a></li>
	      </ul>
	    </div>
	    <a href="/users/logout" class="btn ">Logout</a>
	  </div>
	</nav>
    )
  }

}
