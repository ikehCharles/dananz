import { SiteNav } from "../../models/common";

export const Nav:SiteNav[] = [
    {
      title: "Home",
      routeTo: "/",
      active: true
    },
    {
      title: "About Us",
      routeTo: "/about",
      active: false
    },
    {
      title: "Services",
      routeTo: "/services",
      active: false
    },
    {
      title: "Our Team",
      routeTo: "/team",
      active: false
    }
  ]