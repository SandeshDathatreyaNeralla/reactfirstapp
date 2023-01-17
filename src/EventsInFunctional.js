function EventsInFunctional(){
	function dummy(e){
		alert("hi")
		console.log(e)
	}
	return(
         
         <div>
           <button onClick={dummy}> call me</button>

         </div>
		)
}
export default EventsInFunctional