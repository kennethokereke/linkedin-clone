import React from 'react'
import './Widge.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export default function Widgets() {
   
    const newArticle = (heading, subtitle) => (
         <div className="widget__articles">
             <div className="widgets__articleLeft">
                 <FiberManualRecordIcon/>
                  </div>
             <div className="widgets__articleRight">
                 <h4>{heading}</h4>
                 <p>{subtitle}</p>
                  </div>

         </div>

        )
    
    return (
        <div className="Widget">
           <div className="widget__header">
               <h2>Linkedin News</h2>
               <InfoIcon/>
           </div>
           {newArticle("PaPa react is back", "Top news - 9099 readers")}
           {newArticle("PaPa react is back", "Top news - 9099 readers")}
           {newArticle("PaPa react is back", "Top news - 9099 readers")}
        </div>
    )
}
