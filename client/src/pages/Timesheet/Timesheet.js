import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Calendar, dateFnsLocalizer, Views   } from 'react-big-calendar'
import moment from 'moment'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enIN from 'date-fns/locale/en-IN'
import "./styles.css"
import "./react-big-calendar.css"


const allViews = Object.keys(Views).map(k => Views[k])
const locales = {
    'en-IN': enIN,
  }


  const   events= [
    {
      start: moment().subtract(4, 'days'),
      end: moment().subtract(4, 'days'),
      title: "approved"
    },
    {
      start: moment().subtract(3, 'days'),
      end: moment().subtract(3, 'days'),
      title: "approved"
    },
    {
      start: moment().subtract(2, 'days'),
      end: moment().subtract(2, 'days'),
      title: "approved"
    },
    {
      start: moment().subtract(1, 'days'),
      end: moment().subtract(1, 'days'),
      title: "approved"
    },
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "approved",
    } 
    
  ]

 const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
function Timesheet() {
    return (
        <div>
            <div className='timeSheet'>
              <div className='px-4'>

              <Calendar
       localizer={localizer}
       views={allViews}
        step={60}
       startAccessor="start"
       defaultView="month"
       events={events}
       defaultDate={new Date()}
       endAccessor="end"
      style={{ height: 500 }}
    />
              </div>
                </div>
           
            <NavBar />
        </div>
    )
}

export default Timesheet
