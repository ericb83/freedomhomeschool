import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" flex min-h-screen bg-data-theme">
      {/* Sidebar*/}
      <aside className=" w-64 bg-data-theme text-white">
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700">Dashboard</li>
            <li className="p-4 hover:bg-gray-700">Students</li>
            <li className="p-4 hover:bg-gray-700">Classes</li>
            <li className="p-4 hover:bg-gray-700">Reports</li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
