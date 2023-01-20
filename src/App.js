import { Fragment, useState, useEffect } from "react";
import Login from "./components/Login";
import RouteForm from "./components/RouteForm";
import RouteList from "./components/RouteList";

import "./App.css";

const App = () => {
  const [routes, setRoutes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const urlLK = "https://routes-keeper-default-rtdb.firebaseio.com/routes.json";

  useEffect(() => {
    fetch(urlLK)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const routes = [];
        for (const key in data) {
          const route = {
            id: key,
            ...data[key],
          };
          routes.push(route);
        }
        setRoutes(routes);
      });
  });

  const addNewRouteHandler = (route) => {
    fetch(urlLK, {
      method: "POST",
      body: JSON.stringify(route),
      headers: { "Content-Type": "application/json" },
    });
    setRoutes((currRoutes) => [...currRoutes, route]);
  };

  const removeRouteHandler = (routes, id) => {
    fetch(
      `https://routes-keeper-default-rtdb.firebaseio.com/routes/${id}.json`,
      {
        method: "DELETE",
      }
    );
    setRoutes(routes);
  };
  const logInHandler = () => {
    setIsLoggedIn(true);
  };
  // const sortRoutesHandler = (routes) => {
  //   setRoutes(routes);
  //   fetch(urlLK, { method: "PATCH" });
  // };

  return (
    <div>
      {!isLoggedIn && <Login logIn={logInHandler} />}
      {isLoggedIn && (
        <Fragment>
          <h1>7a i trudniej :)</h1>
          <div className="container">
            <RouteForm onAdd={addNewRouteHandler} />
          </div>
          <div className="container">
            <RouteList
              routes={routes}
              onRemove={removeRouteHandler}
              // onSort={sortRoutesHandler}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
