
const Info = ({name,position}) => {
    return <section className="info">
        <div className="name justify-content-center d-flex p-1">{name}</div>
        <div className="position justify-content-center d-flex p-1 text-danger">{position}</div>
    </section>
}
 
export default Info;