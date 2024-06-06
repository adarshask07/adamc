import { Home, PlantsPage, Profile, SignIn, SignUp } from "@/pages";
import { element } from "prop-types";
import PlantDetailPage from "./pages/PlantDetailPage";

export const routes = [
  // {
  //   name: "home",
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  {
    name: "Plants",
    path : "/plants",
    element : <PlantsPage/>
  },
  // {
  //   name: "Plant Detail",
  //   path : "/plants/:plantName",
  //   element : <PlantDetailPage/>
  // },

  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },

];

export default routes;
