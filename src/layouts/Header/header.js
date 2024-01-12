import React from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout, Button, Switch } from "antd";
import NotificationCls from "../../components/Notifications/notification";
import moment from "moment/moment";
import "./header.css";
const { Header } = Layout;

const data = [
  {
    image: require("../../assets/images/bell.png").default,
    message: (
      <div>
        <div className="displayflex">
          <div className="username">recep orta</div>
        </div>
        <div className=" displayflex ">
          <div className=" displayflex call">Bildirim oluştu</div>
          <div className="time">
            Oluşturulma Tarihi: {moment().format("LLL")}
          </div>
        </div>
      </div>
    ),
  },
];

function Avatar(props) {
  return (
    <header className="_header">
      <span className="navigation__group">
        <img
          className="profile"
          src={require("../../assets/images/joe-doe-profile.png").default}
          alt="Joe Doe Picture"
        />
      </span>
      <div className="dropdown__wrapper hide dropdown__wrapper--fade-in none">
        <div className="dropdown__group">
          <div className="user-name">RECEP ORTA</div>
          <div className="email">recpoy.orta@gmail.com</div>
        </div>
        <hr className="divider" />
        <nav>
          <ul>
            <li>
              <img
                src={require("../../assets/images/profile.svg").default}
                alt="Profile"
              />
              Profil
            </li>
            <li>
              <img
                src={require("../../assets/images/settings.svg").default}
                alt="Settings"
              />
              Ayarlar
            </li>
          </ul>
          <hr className="divider" />
          <ul>
            <li>
              <img
                src={require("../../assets/images/tutorials.svg").default}
                alt="Tutorials"
              />
              Tutorials
            </li>
            <li>
              {props.themeToogle === "dark" ? (
                <i
                  style={{
                    fontSize: "21px",
                    marginRight: 5,
                  }}
                  className="bx bx-moon"
                ></i>
              ) : (
                <i
                  style={{
                    fontSize: "21px",
                    marginRight: 5,
                  }}
                  className="bx bx-sun"
                ></i>
              )}

              <div className="switch-box">
                <Switch
                  checked={props.themeToogle === "dark"}
                  onChange={(e) => props.onChangeTheme(e)}
                  defaultChecked
                />
              </div>
            </li>
          </ul>
          <hr className="divider" />
          <ul>
            <li
              onClick={props.logout}
              style={{
                color: "#E3452F",
              }}
            >
              <img
                src={require("../../assets/images/logout.svg").default}
                alt="Log Out"
              />
              Log out
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
class HeaderCls extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onChangeTheme = (e) => {
    this.props.changeTheme(e);
  };

  logoutFunc = () => {
    this.props.tokenControlLayoutFunc(false);
  };

  componentDidMount() {
    const profile = document.querySelector(".profile");
    const dropdown = document.querySelector(".dropdown__wrapper");

    profile.addEventListener("click", () => {
      dropdown.classList.remove("none");
      dropdown.classList.toggle("hide");
    });

    document.addEventListener("click", (event) => {
      const isClickInsideDropdown = dropdown.contains(event.target);
      const isProfileClicked = profile.contains(event.target);

      if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add("hide");
        dropdown.classList.add("dropdown__wrapper--fade-in");
      }
    });
  }

  render() {
    return (
      <Header
        style={{
          padding: 0,
          backgroundColor: "#ccc",
        }}
      >
        <div className="d-flex align-items-center justify-content-between  ">
          <div className="left-header d-flex align-items-center">
            <img
              style={{ marginLeft: 17, height: 40, width: 50, borderRadius: 2 }}
              src={require("../../assets/images/logo.png").default}
              alt=""
            />
            <Button
              type="text"
              icon={this.props.collapsed ? <MenuOutlined /> : <CloseOutlined />}
              onClick={() => this.props.setCollapsed()}
              style={{
                fontSize: "16px",
                width: 60,
                height: 60,
              }}
            />
          </div>
          <div className="right-box d-flex align-items-center">
            <NotificationCls data={data} />
            <Avatar
              logout={() => this.logoutFunc()}
              themeToogle={this.props.themeToogle}
              onChangeTheme={(e) => this.onChangeTheme(e)}
            />
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderCls;
