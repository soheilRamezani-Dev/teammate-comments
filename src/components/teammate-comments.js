import {useState} from 'react'
import './teammate-comments.css'
import Image from './image/image';
import Info from './info/info';
import Comment from './comment/comment'
import Controller from './controller/controller'


const TeammateComments = ({information}) => {
        const [current , setCurrent] = useState(0);
        const info = information[current];
        const numberOfComments = information.length;
    return  <div className='d-flex justify-content-center'>
                <section className='comments'>
                        <Image src={info.img} />
                        <Info name={info.name} position ={info.position} />
                        <Comment text ={info.comment} />
                        <Controller setState= {setCurrent} currentState={current} length={numberOfComments} />
                </section> 
        </div>
        ;
}
 
export default TeammateComments;