import React from 'react'

class Events extends React.Component{
	state={
		username:"",
		passcode:""
	}
/*	save=(e)=>{
		console.log(e.target.value)
		this.setState({
			username:e.target.value
		})
	}
		passcode=(e)=>{
		console.log(e.target.value)
		this.setState({
			passcode:e.target.value
		})
	}*/
	handleChange=(e)=>{

		this.setState({
			[e.target.name]:e.target.value
		})
			


	}
	handleClick=()=>{
		console.log(this.state.username,this.state.passcode)
	}

	render(){
		return(

			<div>

               <input  name="username" placeholder="username" onChange={this.handleChange}/>
               <input  name="passcode" placeholder="passcode" onChange={this.handleChange}/>
                <p>username:{this.state.username}</p>
               <p>passcode:{this.state.passcode}</p>
               <button onClick={this.handleClick}>submit</button>
			</div>




		)
	}
}
 export default Events