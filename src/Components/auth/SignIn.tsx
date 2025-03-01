import React, { FunctionComponent } from "react";
// import { Link } from "react-router-dom";
// import SignUp from "./SignUp";
import * as Constants from "../../Store/Constants";
import { fetchUserTokenBySignIn } from "../../Store/APIAction";

interface IProps {
  userIsLoggedInHandler: Function;
}
interface IState {
  userName: string;
  password: string;
  submitSuccess: boolean;
  error: string;
  hideSubmitBtn: boolean;
}

export default class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      submitSuccess: false,
      error: "",
      hideSubmitBtn: false,
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
      hideSubmitBtn: true,
    });

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
      if (submitSuccess) {
        window.location.reload();
      }
    }

    this.setState({
      hideSubmitBtn: false,
    });
  };

  private validateForm(): boolean {
    //Todo more validation?
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  private async submitForm(): Promise<boolean> {
    // do api call to check user authentication.
    let response = await fetchUserTokenBySignIn(
      this.state.userName,
      this.state.password
    );

    if (response == Constants.HTTP_400) {
      this.setState({ error: "Invalid email or password!" });
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
    const { submitSuccess, error, hideSubmitBtn } = this.state;
    return (
      // prettier-ignore
      <div className="modal fade" id="modalSignIn" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-body">
                  <div className='m-4'>
                      <div>
                          <h1 className='display-5 m-b-10'>Login in to Tourex</h1>
                          <label htmlFor="message-text" className="col-form-label">Log in to add things to your 
                                  wishlist and access your bookings from any device.</label>
                      </div>
                      {/* Form */}
                      <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                        {submitSuccess && (
                          <div className="alert alert-info" role="alert">
                            Successfully logged in!
                          </div>
                        )}
                        {!submitSuccess && error !== "" && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        {/* Username */}
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Email</label>
                            <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                        </div>
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        {/* Submit */}
                        {!hideSubmitBtn &&
                          <div className="form-group">
                            <button style={{backgroundColor:'#ffac42', width:'100%'}} type="submit" className="btn" >
                              Submit
                            </button>
                          </div>
                        }
                      </form>
                      <hr className="my-4"/>
                      <span>Don't have an account yet? <a href=''>Sign Up</a></span>
                  </div>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
