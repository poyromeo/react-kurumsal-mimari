import React from "react";
import "./login.mudule.css";

class LoginCls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }

  signInHandleButton = () => {
    this.setState({
      active: "",
    });
  };

  singUpHandleButton = () => {
    this.setState({
      active: "right-panel-active",
    });
  };

  render() {
    return (
      <div
        className={"login-container" + " " + this.state.active}
        id="container"
      >
        <div className="form-container sign-up-container">
          <div className="form">
            <h1>Kayıt Oluştur</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a href="#" className="social">
                <i class="bx bxl-google-plus"></i>
              </a>
              <a href="#" className="social">
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
            <span>veya kayıt için e-postanızı kullanın</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Kayıt Ol</button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="form">
            <h1>Giriş Yap</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a href="#" className="social">
                <i class="bx bxl-google-plus"></i>
              </a>
              <a href="#" className="social">
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
            <span>veya mevcut hesabınızı kullanın</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Parolanızı mı unuttunuz?</a>
            <button onClick={this.props.tokenControl(true)}> Giriş Yap</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hoşgeldin!</h1>
              <p>Giriş yapmak için tıklayınız!</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => this.signInHandleButton()}
              >
                Giriş Yap
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Merhaba!</h1>
              <p>Kayıt olmak için tıklayınız!</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => this.singUpHandleButton()}
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginCls;
