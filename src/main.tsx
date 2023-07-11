import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./PostList.tsx";
import PostDetail from "./PostDetail.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
