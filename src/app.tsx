import { MantineProvider } from "@mantine/core";
import React from "react";
import "~/styles/global.scss";

import Router from "./routes";

const App = () => (
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router />
    </MantineProvider>
  </React.StrictMode>
);

export default App;
