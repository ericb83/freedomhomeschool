import OverviewSection from "@/components/OverviewSection";
import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

const dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <OverviewSection />
    </DashboardLayout>
  );
};

export default dashboard;
