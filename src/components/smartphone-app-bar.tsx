import { Link, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { RootState } from '../redux/ducks'
import { useSelector } from 'react-redux'
import SmartphoneClock from './smartphone-clock'
import './smartphone-app-bar.css'

const SmartphoneAppBar = () => {
  const { pollId, phone } = useParams()
  const { editing } = useSelector((state: RootState) => state.editor)

  return (
    <div className="SmartphoneAppBar">
      <SmartphoneClock />
      <div className="SmartphoneAppBar__top_icons">
        <Icon icon="mdi:wifi" />
        <Icon icon="mdi:signal-5g" />
        <Icon icon="mdi:signal" />
        <Icon icon="mdi:battery-high" />
      </div>
      <div className="SmartphoneAppBar__contact_avatar"></div>
      <div className="SmartphoneAppBar__contact_name" contentEditable={editing}>
        Metropolitan Health Center
      </div>
      <div className="SmartphoneAppBar__actions">
        <Link to={`/${pollId}/${Number(phone) - 1}`} title="">
          <Icon icon="mdi:chevron-left" />
        </Link>
        <Link to={`/${pollId}/${Number(phone) + 1}`} title="">
          <Icon icon="mdi:chevron-right" />
        </Link>
      </div>
      <div className="SmartphoneAppBar__contact_status">en línea</div>
    </div>
  )
}

export default SmartphoneAppBar
