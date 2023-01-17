import React from 'react'

class StateExample extends React.Component{
	render(){
		
		return(
			
			<div>
			<h1>from state example</h1>
			{
				this.props.employees.map((employ)=>(
				<div key={employ.id}>
				<p>Name:{employ.name}</p>
			    <p>Name:{employ.age}</p>


				</div>


			  ))
			}
		 
			</div>

			)
	}
}
export default StateExample