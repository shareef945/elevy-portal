import "./App.css";
import SideMenu, { menuItems } from "./components/utils/SideMenu";
import "@tremor/react/dist/esm/tremor.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import graNewRequest from "./components/pages/graNewRequest";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}

          {menuItems.map((menu, index) => (
            <>
              <Route
                key={menu.name}
                exact={menu.exact}
                path={menu.to}
                component={menu.component}
              />
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route
                      key={subMenu.name}
                      path={subMenu.to}
                      component={subMenu.component}
                    />
                  ))
                : null}
            </>
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
