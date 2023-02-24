import "./App.css";
import SideMenu, { menuItems } from "./components/utils/SideMenu";
import "@tremor/react/dist/esm/tremor.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./components/pages/landingPage";

function App() {
  const [inactive, setInactive] = useState(false);
  const [data, setData] = useState(null);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: headers,
    credentials: "include",
  };

  const callApi = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_LOGIN_ROOT,
        requestOptions
      );
      if (response.status === 200) {
        setData(await response.json());
      } else if (response.status === 401) {
        const {
          error,
          data: { URL },
        } = await response.json();
        if (!error && URL) window.location.href = URL;
        else console.log("Invalid redirect URL");
      } else {
        console.log("handle other response status codes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      {data ? (
        <div className="App">
          <Router basename="/portal/elevy">
            <SideMenu
              onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
              }}
            />
            <Route path="/" element={<LandingPage />} />
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
      ) : (
        <div>You are not logged in</div>
      )}
    </>
  );
}

export default App;
