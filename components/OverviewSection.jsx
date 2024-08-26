import React from "react";

const OverviewSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Hours Logged Card */}
      <div className="card shadow-lg compact bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Total Hours Logged</h2>
          <p className="text-4xl font-bold">120</p>
        </div>
      </div>
      {/* Upcoming Classes Card */}
      <div className="card shadow-lg compact bg-secondary text-secondary-content">
        <div className="card-body">
          <h2 className="card-title">Upcoming Classes</h2>
          <p className="text-2xl">Math - 9:00 AM</p>
          <p className="text-2xl">History - 11:00 AM</p>
        </div>
      </div>
      {/* Recent Activities Card */}
      <div className="card shadow-lg compact bg-accent text-accent-content">
        <div className="card-body">
          <h2 className="card-title">Recent Activities</h2>
          <ul>
            <li>Completed Science Assignment</li>
            <li>Logged 2 hours for Reading</li>
            <li>Added new class: Art</li>
          </ul>
        </div>
      </div>
      {/* Attendance Overview Card */}
      <div className="card shadow-lg compact bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Attendance Overview</h2>
          <p className="text-2xl">90% Attendance</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
