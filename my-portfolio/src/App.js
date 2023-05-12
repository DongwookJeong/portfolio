import React, {Component} from 'react'
import styled from 'styled-components'

class App extends Component {
  render(){
    return (
      <div>
        <Homebutton/>
      </div>
        
      
    )
  }
}

const Homebutton = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 45px;
    color: black;
    font-weight: 600;
    cursor: pointer;
`

export default App;
