import './Footer.css'
import mainLogo from '../../assets/icons/mainLogo.png'
import  facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/insta.svg'
import X from '../../assets/icons/X.svg'
import wpp from '../../assets/icons/wpp.svg'
import git from '../../assets/icons/git.svg'

export default function Footer(){

    return(
        <div id='FooterContainer'>   
            <img src={mainLogo} id='mainLogo'></img>
            <div id='networksContainer'>
                <img src={facebook} id='facebook'></img>
                <img src={insta} id='insta'></img>
                <img src={X} id='X'></img>
                <img src={wpp} id='wpp'></img>
            </div>
            <div id='progInfo'>
                <a href='https://github.com/bryan201429'>bryan201429 </a>
                <img src={git} id='git'></img>
            </div>
                            
        </div>
    )

}