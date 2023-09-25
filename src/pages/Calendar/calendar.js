import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import ModalCls from "../../components/Modal/modal";

moment.locale("tr");
const localizer = momentLocalizer(moment);

class BigCalendarCls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [
        {
          id: 0,
          title: "Zafer Bayramı",
          allDay: true,
          start: new Date(2023, 7, 30),
          end: new Date(2023, 7, 30),
          background: "green",
          color: "#ffffff",
        },
      ],
      isOpen: false,
    };
  }

  onSelectedEvent = (e) => {
    console.log(e);
    this.setState({
      isOpen: true,
    });
  };

  modalContent = () => {
    return (
      <React.Fragment>
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for confirming actions or
          displaying critical information.
        </p>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div
        style={{
          height: window.innerHeight * 0.86,
          width: "100%",
          padding: 20,
        }}
      >
        <Calendar
          localizer={localizer}
          events={this.state.calendarEvents}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          views={["month", "week", "day", "agenda"]}
          onSelectEvent={(e) => this.onSelectedEvent(e)}
          onSelectSlot={(e) => this.onSelectedEvent(e)}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.background,
              color: event.color,
              border: event.border,
            },
          })}
        />
        <ModalCls
          isOpen={this.state.isOpen}
          closeModal={() => this.setState({ isOpen: false })}
          content={this.modalContent()}
        />
      </div>
    );
  }
}

export default BigCalendarCls;
