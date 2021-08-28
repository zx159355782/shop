import React from "react";
import { signIn, signOut, clearCart } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "10550053715-k71lkfg79t8htdr0loadropr6t9l74if.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
    this.props.clearCart();
  };

  renderButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="sign">
          <i className="fab fa-google" />
          登出
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="sign">
          <i className="fab fa-google" />
          登入
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut, clearCart })(
  GoogleAuth
);
