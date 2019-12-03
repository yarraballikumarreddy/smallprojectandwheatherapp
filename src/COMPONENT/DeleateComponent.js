import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
class DeleateComponent extends Component  {
   constructor(props) {
     super(props)
   
     this.state = {
      id:this.props.match.params.id
     }
     console.log(this.state.id);
     axios.post(`http://localhost:8081/DeleteData`,this.state)
     .then(res => {
      //  console.log(res.data)
      console.log(this.props)
      alert('SucseFully Deleated');
      this.props.history.push('/Listofstudent')
     })
   }
    render() {
        return (
            <div>
          
          </div>
        )
      }
    }
export default DeleateComponent
