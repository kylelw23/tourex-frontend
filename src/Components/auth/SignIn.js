import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
export default class SignIn extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalSignIn" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                        <div className='m-4'>
                            <div>
                                <h1 className='display-5 m-b-10'>Login in to Tourex</h1>
                                <label for="message-text" class="col-form-label">Log in to add things to your 
                                        wishlist and access your bookings from any device.</label>
                            </div>
                            <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Email</label>
                                <input type="text" class="form-control" id="email-name"/>
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Password</label>
                                <input type="text" class="form-control" id="password"/>
                            </div>
                            <button type="button" className="btn btn-primary m-t-10">Sign In</button>
                            </form>
                            <hr className="my-4"/>
                            <span>Don't have an account yet? <a href=''>Sign Up</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}