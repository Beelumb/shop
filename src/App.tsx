import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";
import RootLayout from "./Pages/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./components/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:productId", element: <ProductPage /> }, // Add this line

    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
