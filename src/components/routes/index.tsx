import { Home } from "src/components/screens/Home/Home";
import { Favorites } from "src/components/screens/Favorites/Favorites";
import { Orders } from "src/components/screens/Orders/Orders";
import { Sneaker } from "src/components/screens/Sneaker/Sneaker";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/sneaker/:id', element: <Sneaker /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/orders', element: <Orders /> },
];
