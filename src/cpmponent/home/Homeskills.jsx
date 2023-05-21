import React, { useState }  from 'react'
import '../../styles/homeStyle/home_skill.scss'

const Homeskills = () => {

    // const HandleE = (e) =>{
        // const skill = document.querySelector(".skill_tech") 
        // const proj = document.querySelector(".skill_proj")
        // skill.style.background = "red";
        // proj.style.background = "blue";
        // console.log(e)
        // setContyp(e)
        // if(e==1)     {
        /*    skill.appendChild(
                
            )
        }else if(e==2){
            
        }else{}
    }*/
    // const [contyp, setContyp] = useState(0)

    return (
        
        <div>
            <div className="skill_container">
                <div className="skill_tech">Tech stach i know</div>
                <div className="skill_nav">
                    <div className="ty" id="first"/* onMouseEnter={()=>HandleE(1)}*/ ><div className="before">Program</div>S 
                    {/*
                    if(contype==1)     {
                        skill.appendChild(
                            
                        )
                    }else if(e==2){
                        
                    }else{}
                    
                    
                    */}
                    </div>
                    <div className="ty" id="secound" /*  onMouseEnter={()=>HandleE(2)} */>K</div>
                    <div className="ty" id="third"><div className="before">Des</div>I  <div className="after">gning</div></div>
                    <div className="ty" id="fourth"><div className="before">Web_Deve</div>L <div className="after">opment</div> </div>
                    <div className="ty" id="fivth"><div className="before">App_Deve</div>L <div className="after">opment</div></div>
                    <div className="ty" id="sixth"><div className="before">Other</div>S</div>
                </div>
                <div className="skill_proj"> Examples</div>
            </div>
        </div>
    )
}

export default Homeskills
