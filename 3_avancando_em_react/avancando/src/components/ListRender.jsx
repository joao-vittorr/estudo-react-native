import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    let [list, setList] = useState(["Matheus", "João", "Maria"])

    const [users, setUsers] = useState([
        {id:121212, name: "Matheus", age: 20 },
        {id:1231234512, name: "João", age: 30 },
        {id:123123, name: "Maria", age: 25 }
    ])
    
    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            return prevUsers.filter((_, index) => index !== randomIndex);
        });
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete radom user</button>
    </div>
  )
}

export default ListRender;