import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppRouter } from "routes";
import { store } from "store";
import "styles/index.scss";
import "fusion/i18n/index.ts";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Suspense>
);
