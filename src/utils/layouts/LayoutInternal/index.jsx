import React from "react";
import Box from "@mui/material/Box";
import SiderLayout from "../Sidebar";
import { DrawerHeader } from "../../../components/Drawer/DrawerEngine";
import "./styles.css";
import Titulo from "../../../components/Titulo";

import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
import img4 from "../../../img/4.jpg";
import {
  Slideshow,
  Slide,
  TextoSlide,
} from "../../../components/Slide/Slideshow";

const LayoutInternal = ({ sectionTitle, children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SiderLayout />
      <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
        <DrawerHeader />
        <Titulo />
        <div className="headerTitle">
          <h1>{sectionTitle}</h1>
        </div>

        <div style={{ margin: "24px 0px 0px" }}>
          <div
            className="content-hero"
            style={{
              padding: 24,
              minHeight: 400,
            }}
          >
            {children}
            <h4>Linear-Algebra-PDI para mostrar y aprender la funcion de Algebra Lineal con el procesamiento de imágenes</h4>
            <p>Herramienta para interactuar, mezclar, resolver, cuestionarios interactivos y más</p>            
          </div>
          <br/>
        </div>

        <main>
          <Slideshow controles={true}>
            <Slide>
              <a href="#">
                <img src={img1} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
            <Slide>
              <a href="https://www.falconmaters.com">
                <img src={img2} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
            <Slide>
              <a href="https://www.falconmaters.com">
                <img src={img3} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
            <Slide>
              <a href="https://www.falconmaters.com">
                <img src={img4} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
          </Slideshow>
          <br />
          <Slideshow
            controles={true}
            autoplay={true}
            velocidad="3000"
            intervalo="5000"
          >
            <Slide>
              <a href="https://www.falconmaters.com">
                <img src={img1} alt="" />
              </a>
              <TextoSlide colorFondo="navy">
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
            <Slide>
              <a href="https://www.falconmaters.com">
                <img src={img2} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
          </Slideshow>
        </main>
        <footer className="footer_hero">
          ©2022 by Fernando Herrara Inc. All rights reserved.
        </footer>
      </Box>
    </Box>
  );
};

export default LayoutInternal;
