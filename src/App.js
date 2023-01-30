import { Fragment, useState, useEffect, useContext } from "react";
import Login from "./components/Login";
import RouteForm from "./components/RouteForm";
import RouteList from "./components/RouteList";
import AuthContext from "./store/auth-store";

import "./App.css";

const App = () => {
  const [routes, setRoutes] = useState([]);
  const authCtx = useContext(AuthContext);

  const urlLK =
    "https://routes-keeper-default-rtdb.firebaseio.com/routesLK.json";
  const urlJG =
    "https://routes-keeper-default-rtdb.firebaseio.com/routesJG.json";

  useEffect(() => {
    fetch(authCtx.isLoggedInLK ? urlLK : urlJG)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const routes = [];
        for (const key in data) {
          const route = {
            // id: key,
            ...data[key],
          };
          routes.push(route);
        }
        setRoutes(routes);
      });
  }, [authCtx]);

  const addNewRouteHandler = (route) => {
    fetch(authCtx.isLoggedInLK ? urlLK : urlJG, {
      method: "POST",
      body: JSON.stringify(route),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (route.id = data.name));

    setRoutes((currRoutes) => [...currRoutes, route]);
  };

  const removeRouteHandler = (routes, id) => {
    fetch(
      authCtx.isLoggedInLK
        ? `https://routes-keeper-default-rtdb.firebaseio.com/routesLK/${id}.json`
        : `https://routes-keeper-default-rtdb.firebaseio.com/routesJG/${id}.json`,

      {
        method: "DELETE",
      }
    );
    setRoutes(routes);
  };

  return (
    <div>
      {!authCtx.isLoggedInLK && !authCtx.isLoggedInJG && (
        <Login logInLK={authCtx.loginLK} logInJG={authCtx.loginJG} />
      )}
      {(authCtx.isLoggedInLK || authCtx.isLoggedInJG) && (
        <Fragment>
          <h1>7a i trudniej :)</h1>
          <div className="container">
            <RouteForm onAdd={addNewRouteHandler} />
          </div>
          <div className="container">
            <RouteList routes={routes} onRemove={removeRouteHandler} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
