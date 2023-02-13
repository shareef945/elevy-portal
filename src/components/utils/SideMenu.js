import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";
import GraNewRequest from "../pages/graNewRequest";
import GraBulkRequest from "../pages/graBulkRequests";
import GraAllRequests from "../pages/graAllRequests";
import GraSimulation from "../pages/graSimulation";
import GraSubmission from "../pages/graSubmission";
import GraTinStatus from "../pages/graTinStatus";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-bar-chart-fill",
  },
  {
    name: "GRA Desk",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-globe",
    subMenus: [
      {
        name: "Raise New Request",
        to: "/gra/newrequest",
        component: GraNewRequest,
      },
      {
        name: "Bulk Request Upload",
        to: "/gra/bulkrequests",
        component: GraBulkRequest,
      },
      {
        name: "View All Request",
        to: "/gra/allrequests",
        component: GraAllRequests,
      },
      { name: "TIN Status", to: "/gra/tinstatus", component: GraTinStatus },
      {
        name: "GRA Simulation",
        to: "/gra/simulation",
        component: GraSimulation,
      },
      {
        name: "GRA Response Submission",
        to: "/gra/submission",
        component: GraSubmission,
      },
    ],
  },
];
//
const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <i class="bi bi-bank"></i>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar"></div>
        <div className="user-info">
          <h5>Ecobank Ghana PLC</h5>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
