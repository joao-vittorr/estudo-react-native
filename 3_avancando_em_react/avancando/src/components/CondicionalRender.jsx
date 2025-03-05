import React, { useState } from 'react'

const CondicionalRender = () => {
    const [x] = useState(true);
    
    const [name] = useState("João");


  return (
    <div>
        <h1>
            Isso vai ser exibido?
        </h1>
        {x ? <h2>Se x for true, isso será exibido</h2> : <h2>Se x for false, isso será exibido</h2>}
        <br /><hr />
        <h1>If ternário
            
        </h1>
        {name === "João" ? <h2>Se o nome for João, isso será exibido</h2> : <h2>Se o nome não for João, isso será exibido</h2>}
    </div>
  )
}

export default CondicionalRender