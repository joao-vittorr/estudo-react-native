import React from 'react'
import './Myform.css'

const Myform = () => {
  return (
    <div>
        {/* 1 - Criacao do formulario */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" required/>
        
        </form>
        <input type="submit" value="Enviar" />
    </div>
  )
}

export default Myform;