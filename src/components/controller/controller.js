import './controller.css'

const Controller = ({setState,currentState,length}) => {

    const next = () =>{
        !(currentState+1 >= length)? setState(currentState+1) : setState(0);
    }
    const prev = ()=>{
        (currentState=== 0)? setState(length-1) : setState(currentState-1);
    }
    const random =()=>{
        const randomNumber =Math.round(Math.random()*length);
        setState(randomNumber);
    }

    return <section className="controller d-flex justify-content-between">
        <i onClick={next} class="icon fa-solid fa-arrow-left"></i>
        <button onClick={random} className="btn btn-sm btn-success">random</button>
        <i onClick={prev} class="icon fa-solid fa-arrow-right"></i>
    </section>
}
 
export default Controller;