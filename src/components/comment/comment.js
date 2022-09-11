const Comments = ({text}) => {
    return <section className="comment-text p-3" style={{height:'100px'}}>
        <p className="text-center">
            {text}
        </p>
    </section>
}
 
export default Comments;