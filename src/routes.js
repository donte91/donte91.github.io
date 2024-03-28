/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ProjectPage from "layouts/pages/landing-pages/project-page";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections

const routes = [
  {
    name: "Project Overview",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Capstone",
        collapse: [
          {
            name: "Project Overview",
            route: "/pages/landing-pages/project-page",
            component: <ProjectPage />,
          },
          {
            name: "Meet the Team",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "Personas",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Persona",
        description: "Persona  Information",
        dropdown: false,
      },
      {
        name: "Persona 1",
        description: "Persona Information",
        dropdown: false,
      },
      {
        name: "Persona 2",
        description: "Persona Information",
        dropdown: false,
      },
      {
        name: "Persona 3",
        description: "Persona Information",
        dropdown: false,
      },
      {
        name: "Methodology",
        description: "Persona Methodology",
        dropdown: false,
      },
    ],
  },
  {
    name: "Berkeley Resources",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Berkeley Side",
        description: "Berkeley Nonprofit News Site",
        href: "https://www.berkeleyside.org/",
      },
      {
        name: "Berkeley City Council",
        description: "Berkeley City Council Website",
        href: "https://berkeleyca.gov/your-government/city-council",
      },
      {
        name: "Berkeley City Council Agenda",
        description: "Stay up to date",
        href: "https://berkeleyca.gov/your-government/city-council/city-council-agendas",
      },
    ],
  },
];

export default routes;
