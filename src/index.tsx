import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
