import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="app">
      {/* Sidebar */}
      
      <aside className="sidebar">
        <title>Admin Portal – Empanelment of OEMs of APCDs | NPC</title>
         <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    
  ></link>
       </aside>

  
     
      <main className="main">
      
        
     

<header class="py-3">
  <div class="container-fluid">
    <h1 class="mb-0">NPC Admin Portal</h1>
    <p class="mb-0">Empanelment of OEMs of APCDs</p>
  </div>
</header>


<div class="container-fluid">
  <div class="row">

 
    <nav class="col-md-3 col-lg-2 sidebar p-3">
      <h3 class="h6">Admin Menu</h3>
      <a href="#" class="active">Dashboard</a>
      <a href="#">New Applications</a>
      <a href="#">Approved OEMs</a>
      <a href="#">Deferred Applications</a>
      <a href="#">Rejected Applications</a>
      <a href="#">Reports</a>
      <a href="#">Logout</a>
    </nav>


    <main class="col-md-9 col-lg-10 p-4">

 
      <section class="mb-4">
        <h2>Dashboard Overview</h2>
        <div class="row mt-3">
          <div class="col-md-3">
            <div class="card text-center">
              <div class="card-body">
                <h3>45</h3>
                <p>Total Applications</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center">
              <div class="card-body">
                <h3>28</h3>
                <p>Approved</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center">
              <div class="card-body">
                <h3>10</h3>
                <p>Deferred</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center">
              <div class="card-body">
                <h3>7</h3>
                <p>Rejected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>OEM Applications</h2>
        <div class="table-responsive mt-3">
          <table class="table table-bordered table-hover">
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
                <td class="status-approved">Approved</td>
                <td>
                  <button class="btn btn-sm btn-primary">View</button>
                </td>
              </tr>
              <tr>
                <td>NPC/APCD/0013</td>
                <td>GreenTech Solutions</td>
                <td>Bag Filter</td>
                <td>06-Jan-2026</td>
                <td class="status-deferred">Deferred</td>
                <td>
                  <button class="btn btn-sm btn-primary">View</button>
                </td>
              </tr>
              <tr>
                <td>NPC/APCD/0014</td>
                <td>CleanAir Engineering</td>
                <td>Wet Scrubber</td>
                <td>07-Jan-2026</td>
                <td class="status-rejected">Rejected</td>
                <td>
                  <button class="btn btn-sm btn-primary">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

     
      <section class="mt-5">
        <h2>Application Action Panel</h2>
        <form class="row g-3 mt-2">
          <div class="col-md-4">
            <label class="form-label">Select Status</label>
            <select class="form-select">
              <option>Approved</option>
              <option>Deferred</option>
              <option>Rejected</option>
            </select>
          </div>
          <div class="col-md-8">
            <label class="form-label">Remarks</label>
            <textarea class="form-control" rows="2"></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-success">Update Status</button>
          </div>
        </form>
      </section>

    </main>
  </div>
</div>

<footer class="border-top mt-4">
  <div class="container-fluid py-3 text-center">
    <small>© National Productivity Council, Government of India</small>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

        {/* Content Grid */}
        <section className="grid">
          {/* Chart Placeholder */}
       

          {/* Table */}
         
        </section>
      </main>
    
    </div>
  );
}
