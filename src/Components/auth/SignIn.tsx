import React from "react";
// import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { fetchUserTokenBySignIn } from "./Auth";

interface IProps {}
interface IState {
  userName: string;
  password: string;
  submitSuccess: boolean;
  error: string;
  hideSubmitBtn: boolean;
}
export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export default class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const errors: IErrors = {};
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
    let success = await fetchUserTokenBySignIn(
      this.state.userName,
      this.state.password
    );

    if (success !== "Bad credentials" && success) {
      return true;
    } else {
      this.setState({ error: success });
      return false;
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
                            The form was successfully submitted!
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
                            <button type="submit" className="btn btn-primary" >
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
