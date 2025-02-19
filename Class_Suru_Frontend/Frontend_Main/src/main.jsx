import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store/store.js";
import { LoadingProvider } from "./Components/Loading/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </Provider>
  </StrictMode>
);
