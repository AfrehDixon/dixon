import React, { useState } from 'react'

function Searchuser() {
    const [search , setsearch] = useState ('')
  return (
    <div className='search'> 
        <input type="search" name='name' id="" placeholder='Enter to search a monster '
            onchange = {(e) => console.log(e.target.value)}
        />
        <button type="submit" onClick={console.log('kofi')}>Search</button>
    </div>
  )
}

export default Searchuser