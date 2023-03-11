import { Route, Routes } from "react-router-dom";
import { HomePage } from "./base/pages/homePage";
import { LoginPage } from "./base/pages/loginPage";
import { useContext } from "react";
import { AuthContext } from "./SwApi/contexts/authContext";
import { SwApiInterfaceApp } from "./SwApi/swApiInterface";
import { MyProfile } from "./base/pages/myProfile";
import { NotFoundPage } from "./base/pages/notFoundPage";
import { LoginRequire } from "./base/pages/loginRequire";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/app"
        element={
          useContext(AuthContext).isAuthenticated === true ? (
            <SwApiInterfaceApp />
          ) : (
            <LoginRequire />
          )
        }
      />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
