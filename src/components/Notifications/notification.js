import React from "react";
import Notifications from "react-notifications-menu";
require("./notification-module.css");

class NotificationCls extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  pushNotificationPage = () => {};

  render() {
    return (
      <div className="notification-box">
        <Notifications
          data={this.props.data}
          header={{
            title: <h4 className="notification__heading">Bildirimler</h4>,
            option: {
              text: <p className="mark__read">Tüm mesaajları görüntüle</p>,
              onClick: () => this.pushNotificationPage(),
            },
          }}
          icon={require("../../assets/images/bel_icon.png").default}
        />
      </div>
    );
  }
}

export default NotificationCls;
