import React, { Component } from 'react'

 class LogoutComponent extends Component {
            
    render() {
        localStorage.removeItem('token')
        this.props.history.push('/Login')
        return (
            <div>
                
                
            </div>
        )
    }
}

export default LogoutComponent
