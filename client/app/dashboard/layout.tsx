import React, { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return <div className="w-screen h-screen">{children}</div>;
};

export default Dashboard;
