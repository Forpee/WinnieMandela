import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const localizer = momentLocalizer(moment);



export default function Rcalendar({data}) {
    const events = []
   const newArray = data.map(event =>{
       const obj = {
           title: event.title,
           start : new Date(event.date),
           end  : new Date(event.date)

       }
       events.push(obj);

   })

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
