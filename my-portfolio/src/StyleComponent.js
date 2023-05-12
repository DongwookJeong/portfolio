import styled from 'styled-components'

const Header = styled.header`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`

const Homebutton = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 45px;
    color: black;
    font-weight: 600;
    cursor: pointer;
`
const StyleComponent = () => {
    <Header>
        <Homebutton/>
    </Header>
}

export default StyleComponent;