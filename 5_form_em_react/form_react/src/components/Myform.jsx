import React from 'react'
import './Myform.css'
import { useState } from 'react'


const Myform = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }

  return (
    <div>
        {/* 1 - Criacao do formulario */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={handleName} required/>

        {/* 2 - label envolvendo input  */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={handleEmail} required/>
            </label>
        
        </form>
        <input type="submit" value="Enviar" />
    </div>
  )
}

export default Myform;