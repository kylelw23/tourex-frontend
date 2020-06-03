import React from "react";
// import { Link } from 'react-router-dom';
import { userSignUp } from "../../Store/APIAction";
import * as Constants from "../../Store/Constants";

interface IProps {}
interface IState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  submitSuccess: boolean;
  error: string;
  hideSignUpBtn: boolean;
}
export default class SignUp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
      submitSuccess: false,
      error: "",
      hideSignUpBtn: false,
    };
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(({
      [name]: value,
    } as unknown) as Pick<IState, keyof IState>);
  };

  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    this.setState({
      hideSignUpBtn: true,
    });

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    } else {
      this.setState({ error: "All fields cannot be empty!" });
    }

    this.setState({
      hideSignUpBtn: false,
    });
  };

  private validateForm(): boolean {
    //Todo: validation for email '@'.
    const { firstName, lastName, email, password, mobile } = this.state;

    let isValid =
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      mobile.length > 0;

    return isValid;
  }

  private async submitForm(): Promise<boolean> {
    // do api call to check user authentication.
    const { firstName, lastName, email, password, mobile } = this.state;
    let fullName = firstName + "," + lastName;

    //api call to do POST and create a new user account.
    let response = await userSignUp(fullName, email, password, mobile);

    if (response == Constants.HTTP_400) {
      this.setState({ error: "Sorry but this email is already taken." });
      return false;
    } else if (response == Constants.HTTP_500) {
      this.setState({
        error: "Sorry, we are currently experiencing some server problems.",
      });
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { submitSuccess, error, hideSignUpBtn } = this.state;
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
                        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                            {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                You've successfuly signed up! You can now use your email and password to login.
                            </div>
                            )}
                            {!submitSuccess && error !== "" && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                            )}
                            
                            {!submitSuccess && (
                                <>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" name="firstName" 
                                                value={this.state.firstName} onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" name="lastName" 
                                                value={this.state.lastName} onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" id="email" name="email" 
                                        value={this.state.email} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" id="password" name="password" 
                                        value={this.state.password} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="mobile" id="mobile" name="mobile" 
                                        value={this.state.mobile} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-check m-l-8 m-t-8 m-b-8">
                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                    To sign up an account, you should agree to our Term and Conditions and Privacy Policy
                                    </label>
                                </div>
                                {!hideSignUpBtn &&
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" >
                                    Sign Up
                                    </button>
                                </div>
                                }
                                </>
                            )}
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
