import {
  MegamenuItem,
  NavItemType,
} from "components/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

// const dashboardChildMenus: NavItemType[] = [
//   {
//     id: ncNanoId(),
//     href: "/dashboard",
//     name: "Dashboard",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard/posts",
//     name: "Posts",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard/edit-profile",
//     name: "Edit profile",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard/billing-address",
//     name: "Billing address",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard/subscription",
//     name: "Subscription",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard/submit-post",
//     name: "Submit post",
//   },
// ];

// const otherPageChildMenus: NavItemType[] = [
//   {
//     id: ncNanoId(),
//     href: "/about",
//     name: "About",
//   },
//   {
//     id: ncNanoId(),
//     href: "/contact",
//     name: "Contact us",
//   },
//   {
//     id: ncNanoId(),
//     href: "/login",
//     name: "Login",
//   },
//   {
//     id: ncNanoId(),
//     href: "/signup",
//     name: "Signup",
//   },
//   {
//     id: ncNanoId(),
//     href: "/forgot-pass",
//     name: "Forgot Password",
//   },
//   {
//     id: ncNanoId(),
//     href: "/dashboard",
//     name: "Dashboard",
//     type: "dropdown",
//     children: dashboardChildMenus,
//   },
//   {
//     id: ncNanoId(),
//     href: "/subscription",
//     name: "Subscription",
//   },
// ];

// const archviePageChildrenMenus: NavItemType[] = [
//   {
//     id: ncNanoId(),
//     href: "/archive/the-demo-archive-slug",
//     name: "Archive Page",
//   },
//   {
//     id: ncNanoId(),
//     href: "/archive-audio/the-demo-archive-slug",
//     name: "Archive Audio",
//   },
//   {
//     id: ncNanoId(),
//     href: "/archive-video/the-demo-archive-slug",
//     name: "Archive Video",
//   },
//   {
//     id: ncNanoId(),
//     href: "/author/the-demo-author-slug",
//     name: "Author Pages",
//     type: "dropdown",
//     children: [
//       {
//         id: ncNanoId(),
//         href: "/author/the-demo-author-slug",
//         name: "Author Page 1",
//       },
//       {
//         id: ncNanoId(),
//         href: "/author-v2/the-demo-author-slug",
//         name: "Author Page 2",
//       },
//     ],
//   },
//   {
//     id: ncNanoId(),
//     href: "/search",
//     name: "Search Pages",
//     type: "dropdown",
//     children: [
//       {
//         id: ncNanoId(),
//         href: "/search",
//         name: "Seach Page 1",
//       },
//       {
//         id: ncNanoId(),
//         href: "/search-v2",
//         name: "Search Page 2",
//       },
//     ],
//   },
// ];

const demoChildMenus: NavItemType[] = [];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    // type: "dropdown",
    // children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/http-status-codes",
    name: "HTTP Status Codes",
    type: "dropdown",
    // children: HttpStatusCodes
    // type: "megaMenu",
    // megaMenu: megaMenuDemo,
  },

  {
    id: ncNanoId(),
    href: "/about",
    name: "About",

    // type: "",
    // megaMenu: megaMenu3ItemDemo,
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
    // type: "dropdown",
    // children: templateChilds,
  },
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Other pages",
  //   type: "dropdown",
  //   children: otherPageChildMenus,
  // },
];

export const NAVIGATION_SHORT_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Discover",
    type: "megaMenu",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "How it works",
  },
];
