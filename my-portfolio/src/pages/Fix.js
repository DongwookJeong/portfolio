import {Outlet, useNavigate} from "react-router-dom"

const Fix = () => {
    const navi = useNavigate();

    // homme으로
    const homeButton = () => {
        navi('/home', {replace: true})
    }
    // <header> onClick, homeButton
    //  <div> 원 1 ~ 4
    return (
        <>
            <header> 
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Fix;