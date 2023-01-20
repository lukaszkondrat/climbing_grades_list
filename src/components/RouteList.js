import RouteItem from "./RouteItem";

const RouteList = (props) => {
  const removeRouteHandler = (id) => {
    const filteredRoutes = props.routes.filter((el) => el.id !== id);
    props.onRemove(filteredRoutes, id);
  };

  // const sortRoutesHandler = () => {
  //   const grades = props.routes.map((el) => el.grade).sort();
  //   const sortedRoutes = [];
  //   for (let i = 0; i < grades.length; i++) {
  //     for (let j = 0; j < props.routes.length; j++) {
  //       if (grades[i] === props.routes[j].grade) {
  //         sortedRoutes.push(props.routes[j]);
  //       }
  //     }
  //   }
  //   props.onSort(sortedRoutes);
  // };

  return (
    <div>
      <ul>
        {props.routes.map((el) => (
          <RouteItem route={el} onRemove={removeRouteHandler} />
        ))}
      </ul>
      {/* <div>
        <button onClick={sortRoutesHandler}>Sort</button>
      </div> */}
    </div>
  );
};

export default RouteList;
