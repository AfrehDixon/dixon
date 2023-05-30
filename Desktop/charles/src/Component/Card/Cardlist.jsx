import React from 'react'
import './Cardlis.css'

function Cardlist(props) {
  return (
    
    <div className='cardlist'>
        
       {
          props.monsters.map((monster, id) =>
          <div  className='maincard' key={id}>
            
            {/* <h1>{monster.id}</h1> */}
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
            </div>
          )
        }
    </div>
  )
}

export default Cardlist
