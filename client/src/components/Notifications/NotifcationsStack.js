import React from 'react';
import "./styles.css"
import {BsDot} from "react-icons/bs"
import moment from "moment"
function NotifcationsStack({text, time}) {

  return <>
  <div className='w-90 flex'>
      <div className="flex justif-center">
             <BsDot className='text-fourth  text-2xl ' />
      </div>
    <div className='flex-col space-x-1'> 
          <div> <p className='text-base font-semibold mb-0'>{text} </p> </div>
          <div><p className='text-sm text-slate-400 mb-0'> 	{moment(time).fromNow()} </p>  </div>
           </div>
             </div>
     <hr className="text-zinc-50 w-80" /> 
             </>
}
 
export default NotifcationsStack;
