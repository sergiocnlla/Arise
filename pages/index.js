import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={require("assets/img/logo.png")}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/bg_arise2.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>O futuro do seu negócio é na Arise</h1>
              <h4>
              Desenvolvimento ágil e focado na otimização dos processos, aqui nós aliamos a tecnologia ao operacional, sempre expandindo as possibilidades.
              </h4>
              <br />
              <Button
                color="dark"
                size="lg"
                //href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                href="mailto:contato@ariseti.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btnHome"
                round
              >
                <i className={"far fa-envelope"} />
                Entre em contato
                {/*<i className={classes.marginLeft5 + " " + "fas fa-phone"} />*/}
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/*<TeamSection />*/}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
