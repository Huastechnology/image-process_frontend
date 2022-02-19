import LayoutInternal from '../../utils/layouts/LayoutInternal'
import { Typography } from '@mui/material'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import {Slideshow, Slide, TextoSlide} from '../../components/Slide/Slideshow'

const Home = () => (  

    <LayoutInternal sectionTitle="Descripción">
        <Typography paragraph color={'black'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at nulla, omnis sed ea magnam laborum quisquam totam optio fuga, ipsa dolorem tempora incidunt quos esse. Hic distinctio esse illum?
        </Typography>
        <main>
	
    <Slideshow controles={true}>
        <Slide>
            <a href="#">
                <img src={img1} alt=""/>
            </a>
            <TextoSlide>
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="https://www.falconmaters.com">
                <img src={img2} alt=""/>
            </a>
            <TextoSlide>
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="https://www.falconmaters.com">
                <img src={img3} alt=""/>
            </a>
            <TextoSlide>
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="https://www.falconmaters.com">
                <img src={img4} alt=""/>
            </a>
            <TextoSlide>
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
    </Slideshow>
    <br/>
    <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
        <Slide>
            <a href="https://www.falconmaters.com">
                <img src={img1} alt=""/>
            </a>
            <TextoSlide colorFondo="navy">
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
        <Slide>
            <a href="https://www.falconmaters.com">
                <img src={img2} alt=""/>
            </a>
            <TextoSlide>
                <p>15% descuento en productos Apple</p>
            </TextoSlide>
        </Slide>
    </Slideshow>
</main>
    </LayoutInternal>

    
    
)

export default Home