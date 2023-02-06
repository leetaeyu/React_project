import Person from "./Parson";
import "./about.css";

const About = () => {
    return (
        <div className="innerBox">
            <div className="titleBox2">
                <h2>About</h2>
            </div>
            <div className="aboutWrap">
                <Person person = {persons} />
                {/* <div className="bigImg">
                    <img src="images/about-bg.jpg" />
                </div> */}
            </div>
        </div>
    )
}
// 인적사항을 저장할 오브젝트 만들기
const persons=[
    {id:1,title:"Name",content:"Lee Tae Yu",link:""},
    {id:2,title:"Birthday",content:"1994.12.21",link:""},
    {id:3,title:"Education",content:"한양사이버대학교 컴퓨터공학과 재학",link:""},
    {id:4,title:"Career",content:"UI/UX기반 웹퍼블리싱&프론트엔드 수료",link:""},
    {id:5,title:"Phone",content:"010-3379-2710",link:""},
    {id:6,title:"E-mail",content:"",content:"ehdrkq2005@naver.com",link:""},
]

export default About;