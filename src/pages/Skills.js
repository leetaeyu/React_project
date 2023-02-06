import Myskill from "./Myskill"
import Portfolio from "./Portfolio"
import "./skill.css";

const Skills = () => {
    return (
        <div className="innerBox innerBoxSkill">
            <div className="titleBox titleBoxSkill">
                <h2>Skills</h2>
            </div>
            <div>
                <Myskill skill={fronetSkill} htitle="FRONTEND" />
                <Myskill skill={designSkill} htitle="DESIGN" />
                {/* <Myskill skill={backSkill } htitle="BACKEND"/> */}
            </div>
        </div>
    )
}
//Desin
const designSkill = [
    {id:1,title:"PHOTOSHOP",img:"images/photoshop.png",per:"85%"},
    {id:2,title:"ILLUSTARTOR",img:"images/illustartor.png",per:"80%"},
]
//FrontEnd
const fronetSkill = [
    {id:1,title:"HTML5",img:"images/html5.svg",per:"90%"},
    {id:2,title:"CSS3",img:"images/css3.svg",per:"90%"},
    {id:5,title:"SCSS",img:"images/sass.svg",per:"85%"},
    {id:3,title:"JAVASCRIPT",img:"images/javascript.svg",per:"70%"},
    {id:4,title:"JQUERY",img:"images/jquery.png",per:"70%"},
    {id:7,title:"GIT",img:"images/git.svg",per:"70%"},
    {id:6,title:"REACT",img:"images/react.svg",per:"30%"},
]
//BackEnd
// const backSkill= [
//     {id:1,title:"JAVA",img:"images/java.png",per:"0%"},
//     {id:2,title:"SQL",img:"images/sql.png",per:"0%"},
//     {id:2,title:"JSP",img:"images/jsp.png",per:"0%"},
// ]
export default Skills;