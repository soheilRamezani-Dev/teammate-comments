const Image = ({src}) => {
    return  <section className="d-flex justify-content-center p-2" >
        <img width="100" height="100" className="rounded-circle border border-light" src={src} />
    </section> 
}
 
export default Image;