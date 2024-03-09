import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UsersPage } from "./page/users/Users";

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </div>
  );
};
