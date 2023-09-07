import { Message } from '../api/types'
import classNames from 'classnames'
import { uniqueId } from 'lodash'
import Linkify from 'linkify-react'
import './whatsapp-message.css'

const WhatsappMessage = ({ message }: { message: Message }) => (
  <div
    className={classNames({
      WhatsappMessage: true,
      'WhatsappMessage--user': message.from === 'USER',
      'WhatsappMessage--bot': message.from === 'BOT',
    })}
  >
    <TextMessage message={message.content} />
  </div>
)

const TextMessage = ({ message }: { message: string }) => {
  const messageLines = message.split('\n')
  return (
    <>
      {messageLines.map((line: String) => {
        const boldParts = line.split('*')
        return (
          <>
            <>
              {boldParts.map((part, i) => (
                <span
                  key={uniqueId('TextMessage')}
                  style={{ fontWeight: i % 2 === 0 ? 400 : 'bold' }}
                >
                  <Linkify
                    options={{
                      target: '_blank',
                    }}
                  >
                    {part}
                  </Linkify>
                </span>
              ))}
            </>
            <br />
          </>
        )
      })}
    </>
  )
}

export default WhatsappMessage
