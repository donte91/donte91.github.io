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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/bg-home2.jpeg";
import bgBack from "assets/images/bg-home2.jpeg";

function Overview() {
  return (
    <MKBox component="section" py={3} my={3}>
      <Container>
        <Grid
          container
          item
          xs={16}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>MIMS &apos;24 Capstone Project</>}
                description="Exploring information systems as a bridge between political information and civic engagement."
              />
              <RotatingCardBack
                image={bgBack}
                title="Overview"
                description="Within this project, we will conduct user research to interrogate two questions with the goal of identifying current attitudes, perceptions, sensemaking, and participation in local community politics within Berkeley:
                What is the relationship between political engagement and community among Berkeley residents ages 18-34?
                How do residents and students currently make sense of local political information (e.g. local representatives and events)?"
                action={{
                  type: "internal",
                  route: "/sections/landing-pages/about-us",
                  label: "Read More",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>MIMS &apos;24 Capstone Project</>}
                description="Exploring information systems as a bridge between political information and civic engagement."
              />
              <RotatingCardBack
                image={bgBack}
                title="Overview"
                description="Within this project, we will conduct user research to interrogate two questions with the goal of identifying current attitudes, perceptions, sensemaking, and participation in local community politics within Berkeley:
                What is the relationship between political engagement and community among Berkeley residents ages 18-34?
                How do residents and students currently make sense of local political information (e.g. local representatives and events)?"
                action={{
                  type: "internal",
                  route: "/sections/landing-pages/about-us",
                  label: "Read More",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={4} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>MIMS &apos;24 Capstone Project</>}
                description="Exploring information systems as a bridge between political information and civic engagement."
              />
              <RotatingCardBack
                image={bgBack}
                title="Overview"
                description="Within this project, we will conduct user research to interrogate two questions with the goal of identifying current attitudes, perceptions, sensemaking, and participation in local community politics within Berkeley:
                What is the relationship between political engagement and community among Berkeley residents ages 18-34?
                How do residents and students currently make sense of local political information (e.g. local representatives and events)?"
                action={{
                  type: "internal",
                  route: "/sections/landing-pages/about-us",
                  label: "Read More",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Overview;
