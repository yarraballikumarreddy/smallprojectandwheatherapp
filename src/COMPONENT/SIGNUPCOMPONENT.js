import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)//====Email-Validationd======

const formValid = FormErrors => { //VALIDATIONS
    let valid = true;
    Object.values(FormErrors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}

export class SIGNUPCOMPONENT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            email: '',
            username: '',
            password: '',
            FormErrors: {  //VALIDATIONS
                id: '',
                email: '',
                username: '',
                password: ''
            }
        }
    }
    changeHandler = event => {
        let FormErrors = this.state.FormErrors;
        this.setState({ FormErrors, [event.target.name]: event.target.value }, () => console.log(this.state))
        switch (event.target.name) { //VALIDATIONS
            case 'id': FormErrors.id =
                event.target.value.length < 1 ? 'Minimum one word Is Required' : '';
                break;
            case 'email': FormErrors.email =
                emailRegex.test(event.target.value) ? '' : 'INVALID-EMAIL-ADRESS';
                break;

            case 'username': FormErrors.username =
                event.target.value.length < 6 ? 'Minimum 6 Charecters Is Required' : '';
                break;

            case 'password': FormErrors.password =
                event.target.value.length < 6 ? 'Minimum 6 Charecters Is Required' : '';
                break;
            default:
                break;
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        if (formValid(this.state.FormErrors)) {
            axios.post('http://localhost:8081/SignupPage', this.state)
                .then(res => {
                    console.log(res.data);
                    alert('SucseFully Signup')
                })
        }
    }

    render() {
        const { FormErrors } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Enter ID</label>
                                <input type="id" onChange={this.changeHandler} name="id" placeholder='ID' className={FormErrors.id.length > 0 ? 'error form-control' : 'form-control'} />
                                {FormErrors.id.length > 0 && (
                                    <span className='errormassage'>{FormErrors.id}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Enter Email</label>
                                <input type="email" onChange={this.changeHandler} name="email" placeholder='EMAIL' className={FormErrors.email.length > 0 ? 'error form-control' : 'form-control'} />
                                {FormErrors.email.length > 0 && (
                                    <span className='errormassage'>{FormErrors.email}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Enter UserName</label>
                                <input type="username" onChange={this.changeHandler} name="username" placeholder='USERNAME' className={FormErrors.username.length > 0 ? 'error form-control' : 'form-control'} />
                                {FormErrors.username.length > 0 && (
                                    <span className='errormassage'>{FormErrors.username}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Enter Password</label>
                                <input type="password" onChange={this.changeHandler} name="password" placeholder='PASSWORD' className={FormErrors.password.length > 0 ? 'error form-control' : 'form-control'} />
                                {FormErrors.password.length > 0 && (
                                    <span className='errormassage'>{FormErrors.password}</span>
                                )}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                            {/* <button type="submit" className="btn btn-primary btn-block">Add</button> */}

                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default SIGNUPCOMPONENT
