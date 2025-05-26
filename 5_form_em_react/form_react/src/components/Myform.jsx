import React from 'react'
import './Myform.css'
import { useState } from 'react'


const Myform = ({user}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '') 
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : 'user')

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o form...')
        console.log(name, email, bio, role)

        // '  6 - Limpar os campos do form
        setName('')
        setEmail('')
        setBio('')
    }

  return (
    <div>
        {/* 5 - envio de forms  */}

        {/* 1 - Criacao do formulario */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" value={name} name="name" placeholder="Digite seu nome" onChange={handleName} required/>

        {/* 2 - label envolvendo input  */}
            <label>
                <span>E-mail:</span>
        {/* 4 - simplificação de manipulação de state  */}

                <input type="email" value={email} name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} required/>
            </label>

        {/* 7 - textarea */}
        <label>        
            <span>Bio:</span>
            <textarea name="bio" id="bio" placeholder='Descrição do usuário' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
        </label>

        {/* 8 - select */}
        <label>
            <span>Função no sistema:</span>
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>

        <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform;