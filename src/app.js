import TeammateComments from "./components/teammate-comments"
import './../node_modules/bootstrap/dist/css/bootstrap.css'

const api = [
    {img:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",name:'soheil',position:'SEO specialist',comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {img:"https://www.nicepng.com/png/full/340-3400381_smiling-man-smiling-man-face-png.png",name:'ali',position:'mobile reairer',comment:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {img:"https://www.kindpng.com/picc/m/311-3114403_young-man-with-healthy-smile-hd-png-download.png",name:'amir',position:'hotel waiter',comment:'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {img:"https://www.kindpng.com/picc/m/472-4727583_male-smile-mouth-png-transparent-png.png",name:'saber',position:'shopeman',comment:'It has survived not only five centuries, but also the leap into electronic typesetting'},
    {img:"https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",name:'javad',position:'pulimbing',comment:'remaining essentially unchanged.'},

];


const App = () => {
    return ( <TeammateComments information={api} /> );
}
 
export default App;