import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
      </Route>
    </Routes>
  );
}
