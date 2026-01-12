import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container-fluid">

      {/* Header */}
      <header className="py-3 border-bottom">
        <div className="container-fluid">
          <h1 className="mb-0">NPC Admin Portal</h1>
          <p className="mb-0">Empanelment of OEMs of APCDs</p>
        </div>
      </header>

      <div className="row">

        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 bg-light p-3 min-vh-100">
          <h3 className="h6">Admin Menu</h3>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#">New Applications</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Approved OEMs</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Deferred Applications</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Rejected Applications</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#">Logout</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 p-4">

          {/* Dashboard Overview */}
          <section className="mb-4">
            <h2>Dashboard Overview</h2>
            <div className="row mt-3">
              {[
                { label: "Total Applications", value: 45 },
                { label: "Approved", value: 28 },
                { label: "Deferred", value: 10 },
                { label: "Rejected", value: 7 }
              ].map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card text-center">
                    <div className="card-body">
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Table */}
          <section>
            <h2>OEM Applications</h2>
            <div className="table-responsive mt-3">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Application ID</th>
                    <th>OEM Name</th>
                    <th>APCD Type</th>
                    <th>Date Submitted</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NPC/APCD/0012</td>
                    <td>ABC Enviro Systems Pvt. Ltd.</td>
                    <td>Electrostatic Precipitator</td>
                    <td>05-Jan-2026</td>
                    <td className="text-success fw-bold">Approved</td>
                    <td><button className="btn btn-sm btn-primary">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Action Panel */}
          <section className="mt-5">
            <h2>Application Action Panel</h2>
            <form className="row g-3 mt-2">
              <div className="col-md-4">
                <label className="form-label">Select Status</label>
                <select className="form-select">
                  <option>Approved</option>
                  <option>Deferred</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="col-md-8">
                <label className="form-label">Remarks</label>
                <textarea className="form-control" rows="2"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-success">Update Status</button>
              </div>
            </form>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="border-top mt-4 text-center py-3">
        <small>© National Productivity Council, Government of India</small>
      </footer>

    </div>
  );
}
