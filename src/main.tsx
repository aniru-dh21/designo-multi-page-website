import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageContainer from "./components/shared/page.container";
import PageContent from "./components/shared/page.content";
import Header from "./components/header/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
        </PageContent>
      </PageContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
