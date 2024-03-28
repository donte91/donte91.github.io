/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
import Team from "pages/LandingPages/AboutUs/sections/Team";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import SimpleFooter from "examples/Footers/SimpleFooter";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://sooryansatheesh.github.io/projects/capstone/index.html",
          label: "Take Persona Survey",
          color: "warning",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="95vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 10,
            mb: 6,
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Team />
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>
    </>
  );
}

export default AboutUs;
