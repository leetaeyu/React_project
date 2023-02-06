const Myskill = (props) => {
    const skillList = props.skill;
    const skillSet = skillList.map((s)=>
    <div className="skillBox">
        <div className="imgBox">
            <img src={s.img} />
        </div>
        <div className="textBoxSkill">
            <strong>{s.title}</strong>
            <p>{s.per}</p>
        </div>
    </div>
    )
    return(
        <div className="skill">
            <h2>{props.htitle}</h2>
            <div className="skillWrap">{skillSet}</div>
        </div>
    )
}
export default Myskill;