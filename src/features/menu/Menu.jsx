import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //gets data into component from loader defined in routes
  //fetches as it mounts at same time
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//loader function to get data from api
//getmenu from apiresteraunt file fetches api menu and returns data.json
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
