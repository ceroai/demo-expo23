import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './smartphone-clock.css'

const SmartphoneClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const updateTime = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(updateTime)
  }, [])
  return <div className="SmartphoneClock">{format(currentTime, 'HH:mm')}</div>
}

export default SmartphoneClock
