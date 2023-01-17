function FunctionalExample(props){
	return(
          <div>
          <h1>this is functional example</h1>
          {
          	props.employees.map((emp)=>(

          	  <div key={emp.id}>
          	  <p> name:{emp.name}</p>
          	  <p> age:{emp.age}</p>
          	  </div>










          	))
          }
          </div>

		)
}
export default FunctionalExample