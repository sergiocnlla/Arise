import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Desktop from "@material-ui/icons/DesktopWindows"
import Smartphone from "@material-ui/icons/Smartphone";
import Cloud from "@material-ui/icons/WbCloudyOutlined"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vamos falar sobre nós</h2>
          <h5 className={classes.description}>
            Você sabia que Arise significa "surgir"? Nós surgiremos para um novo mundo, um novo tempo, com a missão de trazer aos clientes a revolução tecnológica do mais alto nível, facilitando todo o negócio e seus processos, automatizando e expandindo. Nossos colaboradores são pessoas extremamente qualificadas e apaixonadas por tecnologia. Também iremos revolucionar a relação Empresa/Colaborador com o nosso sistema de meritocracia.
            Conte com a Arise, venha surgir conosco para o novo mundo.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web"
              description="Utilizamos as mais modernas e performáticas tecnologias do mercado."
              icon={Desktop}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mobile"
              description="Aplicativos pensados para o usuário, elegantes e modernos. Desenvolvidos com as melhores tecnologias do mercado, como Flutter e SwiftUI."
              icon={Smartphone}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Serviços em nuvem"
              description="Aplicações e serviços gerenciados em nuvem, oferecendo segurança, performance e praticidade."
              icon={Cloud}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
