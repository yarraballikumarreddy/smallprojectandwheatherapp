import axios from 'axios';
import React, { Component } from 'react'
axios.interceptors.request.use(function(config) {
  console.log('ooooooooooooooooooooooooo',config)
    let token= localStorage.getItem('token');
    if ( token != null ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  }, function(err) {
    return Promise.reject(err);
  });
export class AxiousIntercepte extends Component {
 
    render() {
    
        return (
            <div>
                
            </div>
        )
    }
}

export default AxiousIntercepte

