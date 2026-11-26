import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import PublicLayout from "./Layouts/PublicLayout";
import AdminLayout from "./Layouts/AdminLayout";
import AuthLayout from "./Layouts/AuthLayout";

// Pages
import HomePage from "./pages/landing/HomePage";
import PostsPage from "./pages/landing/PostsPage";
import DetailPostPage from "./pages/landing/DetailPostPage";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import CreatePost from "./pages/admin/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "detail",
        element: <DetailPostPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
