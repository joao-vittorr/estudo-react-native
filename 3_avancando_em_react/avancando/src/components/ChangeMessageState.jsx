import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const  messages = ["Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4", "Mensagem 5"];

  return (
    <div>
        {messages.map((msg, index) => (
            <button key={index} onClick={() => handleMessage(msg)}>{msg}</button>
        ))}
    </div>
  )
}

export default ChangeMessageState;