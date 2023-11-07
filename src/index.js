import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Routers";
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === 'production') disableReactDevTools()
ReactDOM.render(<Routers />, document.getElementById("root"));
