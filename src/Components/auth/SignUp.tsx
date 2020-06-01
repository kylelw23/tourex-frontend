import React from "react";
// import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
  render() {
    return (
      //prettier-ignore
      <div className="modal fade" id="modalSignUp" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                    <div className='m-4'>
                        <div className="m-b-50">
                            <h1 className='display-5 m-b-10'>Sign up for TourEx</h1>
                        </div>
                        <form>
                        <form className="form-group">
                            <div className="row">
                                <div className="col">
                                <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                        </form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" id="email-name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password" id="password"/>
                        </div>
                        <div className="form-check m-l-8 m-t-8 m-b-8">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                            To sign up an account, you should agree to our Term and Conditions and Privacy Policy
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary m-t-10">Sign Up</button>
                        </form>
                        <hr className="my-4"/>
                        <span className="text-center">Already have an account? <a href=''>Log in</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
