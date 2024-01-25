import React, { ReactNode } from "react";
import NavbarComponent from "@/components/navbar";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Dashboard;
