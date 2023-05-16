import { Outlet } from "react-router-dom";
// import HostLayout from "../../components/HostLayout";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard goes here</h1>
      {/* <HostLayout /> */}
      <Outlet />
    </>
  );
};
export default Dashboard;
