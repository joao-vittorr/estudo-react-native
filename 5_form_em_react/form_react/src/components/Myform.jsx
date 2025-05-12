import React from 'react'
import './Myform.css'
import { useState } from 'react'


const Myform = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o form...')
        console.log(name, email)
    }

  return (
    <div>
        {/* 5 - envio de forms  */}

        {/* 1 - Criacao do formulario */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} required/>

        {/* 2 - label envolvendo input  */}
            <label>
                <span>E-mail:</span>
        {/* 4 - simplificação de manipulação de state  */}

                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} required/>
            </label>
        
        <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform;