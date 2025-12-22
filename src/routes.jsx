import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import SkillDetails from "./pages/Skills/SkillDetails";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";

const withProviders = (element) => <AuthProvider>{element}</AuthProvider>;

const router = createBrowserRouter([
  {
    path: "/",
    element: withProviders(<MainLayout />),
    children: [
      { index: true, element: <Home /> },

      // ✅ Matches deployed URL: /skill/1
      {
        path: "skill/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot", element: <ForgotPassword /> },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
