import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkmodeContextProvider from "./context/Darkmode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkmodeContextProvider>
        <TotalPriceProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TotalPriceProvider>
      </DarkmodeContextProvider>
    </Provider>
  </StrictMode>
);
