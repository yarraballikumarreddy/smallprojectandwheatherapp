import React, { Component } from 'react'
import TitleComponent from './TitleComponent'
import FormComponent from './FormComponent'
import WhetherData from './WhetherData'
const API_KEY= "74823fea87fe01a660459799d4733533";
export class Wheterapp extends Component {
    state={
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
    }
    
    getWeather=async(e)=>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if(city && country){

            this.setState({
                temperature:data.main.temp,
                city:data.name,
                country:data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:""
            })
        }
        else{
            this.setState({
                temperature:undefined,
                city:undefined,
                country:undefined,
                humidity:undefined,
                description:undefined,
                error:'Please Enter Values'
            })
        }
    }
    render() {
        return (
            <div>
               
                < TitleComponent />
                < FormComponent getWeather={this.getWeather} />
                < WhetherData 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.country}
                description={this.state.description}
                error={this.state.error}
                />
            </div>
        )
    }
}

export default Wheterapp
