// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import MKTypography from "components/MKTypography";
const date = new Date().getFullYear();

// Material Kit 2 React components
// Images
import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Magenta",
    image: logoCT,
    route: "/",
  },
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.ischool.berkeley.edu/programs/mims"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        MIMS
      </MKTypography>
      .
    </MKTypography>
  ),
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
  ],
  menus: [
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.ischool.berkeley.edu/programs/mims" },
        { name: "privacy policy", href: "https://www.ischool.berkeley.edu/programs/mims" },
      ],
    },
  ],
};
