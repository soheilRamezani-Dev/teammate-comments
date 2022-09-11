import './teammate-comments.css'
import Image from './image/image';
import Info from './info/info';

const TeammateComments = () => {

    return  <div className='d-flex justify-content-center'>
                <section className='comments'>
                        <Image />
                        <Info />
                </section> 
        </div>
        ;
}
 
export default TeammateComments;