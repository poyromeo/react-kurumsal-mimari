import React from "react";
import { Calendar, ConfigProvider, theme } from "antd";
import "./antMiniCalendar.css";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const AntMiniCalendarCls = () => {
  const { token } = theme.useToken();

  return (
    <div className="ant-mini-calendar">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            colorBgContainer: "#e0e0e0",
          },
        }}
      >
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </ConfigProvider>
    </div>
  );
};
export default AntMiniCalendarCls;
