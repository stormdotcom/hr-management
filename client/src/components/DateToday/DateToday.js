import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Clock from 'react-live-clock';
function DateToday() {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    return (
      <div className='mr-5 pr-3'>        
         <p className='lg:mt-2'> {date}  <AccessTimeIcon />  &nbsp;
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'IST/Asia'} />  </p> 
      </div>

    )
}

export default DateToday
