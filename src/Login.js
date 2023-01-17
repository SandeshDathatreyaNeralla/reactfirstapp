import React from "react"

class Login extends React.Component{
	state={
		username:"",
		password:""
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
	}
render(){
return(

<div className="input" >

<p><input  name="username"  placeholder="username"  onChange={this.handleChange}/></p>
<p><input  name="password"placeholder="password" onChange={this.handleChange}/></p>
<p><button onClick={this.handleClick}>Submit</button></p>
</div>

		)
}
}
export default Login;