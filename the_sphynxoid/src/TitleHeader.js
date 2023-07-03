import "./TitleHeader.css"
import glogo from'./github-mark-white.svg';
import mlogo from "./mail.svg"

function onClickLogo(link){
    window.open(link);
};

export default function TitleHeader(){
    return(
        <>
            <h1>The Sphynx Portfolio</h1><br/>
            <div class="LogoDiv">
                <img src = {glogo} class="title_logo" 
                    alt="github" onClick={()=>onClickLogo("https://github.com/TheSphynxoid")}></img>
                <img src = {mlogo} class="title_logo" 
                    alt="github" onClick={()=>onClickLogo("mailto:jmail.hamza@gmail.com")}></img> 
            </div>
            <hr></hr>
        </>
    );
}