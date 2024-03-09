import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UsersPage } from "./page/users-page/users-page";
import { UserPage } from "./page/user-page/user-page";

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
};
