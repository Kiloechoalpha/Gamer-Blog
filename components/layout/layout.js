import { Fragment } from "react";
import MainNavifation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavifation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
