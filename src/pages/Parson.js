import "../pages/parson.css"

const Person = (props) => {
    const personList = props.person;
    const personSet = personList.map((f)=>
        <div className="box">
            <div className="imgBox">
                <img src={f.icon} />
            </div>
            <div className="textBoxParson">
                <p className="item1">{f.title}</p>
                <p className="item2">{f.content}</p>
                <p><a href={`mailto:${f.link}`}>{f.link}</a></p>
            </div>
        </div>
    )
    return (
        <div>
            {personSet}
        </div>
    )
}
export default Person;