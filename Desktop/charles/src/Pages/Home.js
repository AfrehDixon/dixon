// import React from 'react'

// function Home() {
//   const  employeeList = [ 

//     {first_name:"Eleanor", id: 1, last_name:"Bolton", designation:"CEO, Co-Founder", tags: ["Finance","San Francisco", "Mentor", "Top Management"], age:45},
    
//     {first_name:"Caspian",id: 2, last_name:"Shields", designation:"CTO, Co-Founder", tags:["Engineering","San Francisco", "Mentor", "Top Management"], age:34},
    
//     {first_name:"Marek",id: 3, last_name:"Goodman", designation:"CFO", tags:["Operations","New York", "Mentor", "Top Management"], age:31},
                             
//     {first_name:"Lisa",id: 4, last_name:"Whitehouse", designation:"CMO", tags:["People","San Francisco", "Mentor", "Top Management"], age:39},
    
//     {first_name:"Buster",id: 5, last_name:"Mackenzi", designation:"COO", tags:["Product","New York", "Mentor", "Top Management"], age:43}
                           
//   ];

//   return (
//     <div>
//       <h1>This is my homepage</h1>
//       {
//         employeeList.map((employee,id) =>  
//          <div key={id}>{employee.first_name}</div>)
         
//       }
      
//     </div>
//   )
// }

// export default Home

import React, { Component } from 'react'
import Cardlist from '../Component/Card/Cardlist';
// import Searchuser from '../Component/Card/Searchuser';


// const search=(searchfield)=>{
 


// }

export default class Home extends Component {
  constructor(){
    super();
      this.state={
        monsters: [],
        searchfield : '',
        
      }

    
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters :user}))
    
  }

  

  render() {

    const {monsters , searchfield} = this.state
    const filtedmonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    return (
      <div>
        <h1>Monster Rolodex</h1>
          
          <input 
          type="search" 
          id="" placeholder='Enter to search a monster '
          onChange = {e => this.setState({searchfield : e.target.value})
          }
          />
          
           
        <Cardlist  monsters= {filtedmonster} />
        

        
        
      </div>
    )
  }
}
