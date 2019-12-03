import React  from 'react'

 const FormComponent = (props)=>{
     return(
     <form onSubmit={props.getWeather}>
     <input type='text' name='country' placeholder='COUNTRY..' />
     <input type='text' name='city' placeholder='CITY..' />
     <button>Get Weather</button>
    </form>
     )
     
}
export default FormComponent
