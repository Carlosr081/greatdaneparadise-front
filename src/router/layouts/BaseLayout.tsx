import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="flex h-screen justify-center align-middle">
      <Outlet />
    </div>
  );
}
