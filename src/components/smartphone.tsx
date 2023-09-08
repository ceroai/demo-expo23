import SmartphoneKeyboard from './smartphone-keyboard'
import WhatsappConversation from './whatsapp-conversation'
import WhatsappInput from './whatsapp-input'
import SmartphoneAppBar from './smartphone-app-bar'
import './smartphone.css'

const Smartphone = () => {
  return (
    <div className="Smartphone">
      <SmartphoneAppBar />
      <div className="Smartphone__main">
        <WhatsappConversation />
        <WhatsappInput />
      </div>
      <SmartphoneKeyboard />
    </div>
  )
}

export default Smartphone
