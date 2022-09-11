import './teammate-comments.css'
import Image from './image/image';
import Info from './info/info';
import Comment from './comment/comment'
import Controller from './controller/controller';

const TeammateComments = () => {

    return  <div className='d-flex justify-content-center'>
                <section className='comments'>
                        <Image />
                        <Info />
                        <Comment />
                        <Controller />
                </section> 
        </div>
        ;
}
 
export default TeammateComments;