import RouteItem from "./RouteItem";

const RouteList = (props) => {
  const removeRouteHandler = (id) => {
    const filteredRoutes = props.routes.filter((el) => el.id !== id);
    props.onRemove(filteredRoutes, id);
  };

  return (
    <div>
      <ul>
        {props.routes.map((el) => (
          <RouteItem route={el} onRemove={removeRouteHandler} />
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
