import React from 'react'
import App from './App'

class Products extends React.Component{
	render(){
		console.log(this.props.appliances)
		return(
			<div>
				<h1>HOME ELECTRONICS</h1>
				{
					this.props.appliances.map((product)=>(
						<div key={product.id} >
						    <img src={product.image} width="200px" className="image"/>
							<p>Name:{product.name}</p>
							<p>About:{product.description}</p>
							<p>Price:{product.price}</p>
							

						</div>
					))
				}
            </div>
			)
	}
}
export default Products;