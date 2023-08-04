import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
