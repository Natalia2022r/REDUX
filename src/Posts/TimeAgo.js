import {parseISO, formatDistanceToNow} from "date-fnc"

import React from 'react'

const TimeAgo = ({timestamp}) => {
    const timeAgo = ""

    if(timestamp){
        const data = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(data)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <span title={timestamp}>
           &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo