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

  toggleDropdown = () => {
    const button = document.getElementById("button");
    const buttonRect = button.getBoundingClientRect();
    const chevron = document.getElementById("chevron");
    const chevronRect = chevron.getBoundingClientRect();
    const menuRight = buttonRect.right - chevronRect.right;
    const menuTop = chevronRect.top - buttonRect.top;

    const menu = document.getElementById("menu");
    menu.style.top = `${menuTop}px`;
    menu.style.right = `${menuRight}px`;
    const dropdown = document.getElementById("dropdown");

    if (dropdown.classList.contains("open")) {
      menu.style.top = `${menuTop}px`;
      menu.style.right = `${menuRight}px`;
    } else {
      menu.style.top = `${button.clientHeight + 10}px`;
      menu.style.right = 0;
    }

    dropdown.classList.toggle("open");
  };

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

            <div className="dropdown me-2" id="dropdown">
              <button id="button" onClick={() => this.toggleDropdown()}>
                <i
                  style={{
                    fontSize: "26px",
                  }}
                  className="bx bx-user-circle"
                ></i>
                RECEP ORTA
                <span
                  style={{
                    fontSize: "26px",
                  }}
                  id="chevron"
                  class="chevron bx bx-chevron-down"
                ></span>
              </button>
              <div id="menu" className="menu">
                <button>
                  {this.props.themeToogle === "dark" ? (
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
                      checked={this.props.themeToogle === "dark"}
                      onChange={(e) => this.onChangeTheme(e)}
                      defaultChecked
                    />
                  </div>
                </button>
                <button onClick={() => this.logoutFunc()}>
                  <i
                    style={{
                      fontSize: "21px",
                      marginRight: 5,
                    }}
                    class="bx bx-log-out"
                  ></i>
                  <span className="me-2">Çıkış yap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderCls;
