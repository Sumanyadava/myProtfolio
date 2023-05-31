import React  from 'react'
import '../../styles/homeStyle/home_skill.scss'
import data from '../../fakeapi.json'

const Homeskills = () => {

    // fetching all array from api / server

    const Expe = data.skills.Expertise
    const Desi = data.skills.Design
    const Webe = data.skills.Web
    const Appy = data.skills.App
    const Othe = data.skills.Other
    


    const HandleE = (e) => {

          

        const skill = document.querySelector(".skill_name")
        const proj = document.querySelector(".projectview")
        // const h2text = document.querySelector(".skill_h2")

        const main_skils = document.querySelector(".render_skills")

        

        




        const pro = document.querySelector(".pro_show")
        skill.style.display = "block";
        proj.style.display = "block";

         
          console.log(e)
         if(e===1)     {
            
            pro.textContent = data.project.Expertise[0]

            //rendering list herer
            const showHTML = Expe.map((project)=>{
                return `<li> ${project} </li>`
            }).join('')
            main_skils.innerHTML = showHTML


            
            
        }else if(e===2){
            
            
                   
            pro.textContent = data.project.Design[0]

            //rendering list herer
            const showHTML = Desi.map((project)=>{
                return `<li> ${project} </li>`
            }).join('')
            main_skils.innerHTML = showHTML

        }
        else if(e===3){
            
            
            
            
            pro.textContent = data.project.Web[0]

            //rendering list herer
            const showHTML = Webe.map((project)=>{
                return `<li> ${project} </li>`
            }).join('')
            main_skils.innerHTML = showHTML
        }
        else if(e===4){
            
            
            
            
            pro.textContent = data.project.App[0]

            //rendering list herer
            const showHTML = Appy.map((project)=>{
                return `<li> ${project} </li>`
            }).join('')
            main_skils.innerHTML = showHTML
        }
        else{
            
            
            pro.textContent = data.project.Other[1]

            //rendering list herer
            const showHTML = Othe.map((project)=>{
                return `<li> ${project} </li>`
            }).join('')
            main_skils.innerHTML = showHTML
        }
    }

    
    
    return (
        
        <div>
            <div className="skill_container">
                <div className="skill_tech">
                <h1 className="skill_tech_h1">Tech stack i know</h1>

                    <div className=" skill_name">
                        
                        <div className="skill_content_tech">
                        
                        <ul className="render_skills">
                            <li>hello</li>
                            
                            
                            
                        </ul>
                        </div>
                    </div>
                    


                </div>
                <div className="skill_nav">
                    <div className="nav_center_ty" id="first" onMouseEnter={()=>HandleE(1)}><div className="before">Experti</div>S <div className="after">e</div>

                    </div>
                    <div className="nav_center_ty" id="secound" >K</div>
                    <div className="nav_center_ty" id="third" onMouseEnter={()=>HandleE(2)}><div className="before">Des</div>I  <div className="after">gning</div></div>
                    <div className="nav_center_ty" id="fourth"onMouseEnter={()=>HandleE(3)}><div className="before">Web&nbsp;Deve</div>L <div className="after">opment</div> </div>
                    <div className="nav_center_ty" id="fivth" onMouseEnter={()=>HandleE(4)}><div className="before">App&nbsp;Deve</div>L <div className="after">opment</div></div>
                    <div className="nav_center_ty" id="sixth" onMouseEnter={()=>HandleE(5)}><div className="before">Other</div>S</div>
                </div>
                <div className="skill_proj">
                <h1 className="skill_proj_h1">Completed Projects</h1>


                    <div className="projectview">
                        

                        <div className="skill_content">
                        <div className="pro_show pro_one">1</div>
                        <div className="pro_show pro_two">2</div>
                        <div className="pro_show pro_three">3</div>
                        <div className="pro_show pro_four">4</div>
                        
                        </div>

                    </div>
                    



                </div>
            </div>
        </div>
    )
}

export default Homeskills
