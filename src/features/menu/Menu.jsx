import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  // React Hook getting the data form loader function
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
