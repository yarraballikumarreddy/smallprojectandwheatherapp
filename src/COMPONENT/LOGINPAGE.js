import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
const emailRegex=RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)//====Email-Validationd======
const formValid=FormErrors=>{ //VALIDATIONS
    let valid=true;
    Object.values(FormErrors).forEach(val=>val.length>0 && (valid=false));
    return valid;
}
export class LOGINPAGE extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            FormErrors:{  //VALIDATIONS
                email:'',
                password:''
            }
        }
    }
    changeHandler =event => {
        let FormErrors=this.state.FormErrors; //VALIDATIONS
        this.setState({FormErrors,[event.target.name] :event.target.value},()=>console.log(this.state))
        switch(event.target.name){ //VALIDATIONS
            case 'email':FormErrors.email=
             emailRegex.test(event.target.value) ? '':'INVALID-EMAIL-ADRESS';
             break;
             case 'password':FormErrors.password=
             event.target.value.length<6 ? 'Minimum 6 Charecters Is Required':'';
             break;
             default:
              break;
          }
        
}
    handleSubmit = event=>{
        event.preventDefault();
      if(formValid(this.state.FormErrors)){
        axios.post('http://localhost:8081/LOG',this.state)
        .then(res=>{
            console.log(res)
            if((res.data.token)!=="INVALIDE AUTHORIZATION"){
                localStorage.setItem('token',res.data.token);
                console.log(res.data);
                alert('SucseFully Token Genarated');
                this.props.history.push('/Listofstudent')
            }else{

                alert('INVALIDE USER-NAME AND PASSWORD')
            }       
        })
        .catch(err=>{       
        })
      }
      else{
          console.error('INVALID-FORM-DETAILS')
      }  }
    render() {
        const {FormErrors}=this.state
        return (
            <div  className="container">
            <div  className="row">
            <div className="col-md-4"></div>
            <div   className="col-md-4">
                 <form onSubmit={this.handleSubmit}>
                
                     <div  className="form-group">
                         <label>Enter Email</label>
                         
                         <input type="email"  onChange={this.changeHandler} name="email" placeholder='Email' className={FormErrors.email.length>0 ? 'error form-control': 'form-control'}  />
                        {FormErrors.email.length >0 && (
                            <span className='errormassage'>{FormErrors.email}</span>
                        )}
                     </div>
                    
                     <div  className="form-group">
                         <label>Enter Password</label>
                        <input type="password" onChange={this.changeHandler} name="password" className={FormErrors.password.length>0 ? 'error form-control': 'form-control'} placeholder='Password' />
                        {FormErrors.password.length >0 && (
                            <span className='errormassage'>{FormErrors.password}</span>
                        )}
                     </div>
                     <input type="submit"  className="btn btn-primary btn-block" value="Submit" />
                     {/* <button type="submit" className="btn btn-primary btn-block">Add</button> */}
                
                </form>
                </div>
                <div  className="col-md-4"></div>
            </div>
        </div> 
        )
    }
}

export default LOGINPAGE

