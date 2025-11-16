import { createBrowserRouter } from "react-router";
import Home from "../Components/HomeComponents/Home/Home";


export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
		hydrateFallbackElement: <p>Loading....</p>,
		errorElement: <p>404</p>
	}
])