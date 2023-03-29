import slide1 from '../../imagens/slide1.jpg';
import slide2 from '../../imagens/slide2.jpg';
import slide3 from '../../imagens/slide3.jpg';
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Carrossel() {

    return (
        <swiper-container  
            //pagination="true" 
            scrollbar="true" 
            //navigation="true"
            loop="true"
            speed="500"
            autoHeight= "true"
            >
            <swiper-slide><img src={slide1} alt='slide 1'/></swiper-slide>
            <swiper-slide><img src={slide2} alt='slide 2'/></swiper-slide>
            <swiper-slide><img src={slide3} alt='slide 3'/></swiper-slide>
        </swiper-container>
    );
}