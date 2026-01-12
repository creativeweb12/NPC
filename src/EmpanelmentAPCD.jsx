import React from "react";
import { useNavigate } from "react-router-dom";

const EmpanelmentAPCD = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
            <header style={styles.header}>
        <div style={styles.headerRow}>
          <div>
            <h1 style={{ marginLeft: "20%", whiteSpace: "nowrap" }}>Empanelment of OEMs of APCDs</h1>
            <p style={{ marginLeft: "25%" }}> 
              National Productivity Council (NPC), Government of India
            </p>
          </div>

          {/* Login Button */}
          <button
            style={styles.loginButton}
            onClick={() => navigate("/login")}
          >
            Admin Login
          </button>
        </div>
      </header>

      <section style={styles.section}>
        <h2>About NPC</h2>
        <p>
          The National Productivity Council (NPC), established in 1958, is an
          autonomous body under the Department for Promotion of Industry and
          Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of
          India. NPC promotes productivity, efficiency, and sustainable
          industrial development.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Empanelment Methodology</h2>

        <div style={styles.card}>
          <h3>1. Application Process</h3>
          <ul>
            <li>Online submission of application through NPC Portal</li>
            <li>Upload technical specifications and supporting documents</li>
            <li>
              Application Link:{" "}
              <a
                href="https://www.npcindia.gov.in/NPC/User/applicant_type_check1"
                target="_blank"
                rel="noreferrer"
              >
                Apply Here
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>2. Evaluation & Shortlisting</h3>
          <ul>
            <li>Screening within 7 days</li>
            <li>Assessment of technical compliance and performance</li>
            <li>Past installations and efficiency review</li>
            <li>Online clarification meetings if required</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>3. Site Inspection / Verification</h3>
          <ul>
            <li>Submitted documents will be verified for completeness and authenticity.</li>
            <li>Field inspection of APCD installations will be conducted, wherever required.</li>
            <li>Past installations and efficiency review</li>
            <li>Performance evaluation will be carried out to ensure compliance with prescribed standards and guidelines.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>4. Committee Review & Approval</h3>
          <ul>
            <li>Review by NPC Evaluation Committee</li>
            <li>Decision: Approved / Deferred / Rejected</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>5. Certification & Monitoring</h3>
          <ul>
            <li>Issue of Empanelment ID & Letter</li>
            <li>Publication on NPC Portal</li>
            <li>Performance monitoring and feedback</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>6. Renewal</h3>
          <ul>
            <li>Validity: 2 Years</li>
            <li>Renewable annually up to 2 additional years</li>
            <li>Subject to performance and compliance</li>
          </ul>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© National Productivity Council, Government of India</p>
      </footer>
    </div>
  );
};

const styles = {

  
  container: {
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#ffffff",
    color: "#000000",
    lineHeight: "1.6",
  },
  header: {
    backgroundColor: "#0b5ed7",
    color: "#ffffff",
    padding: "40px",
    textAlign: "center",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "auto",
  },
  loginButton: {
    backgroundColor: "#ffffff",
    color: "#0b5ed7",
    border: "none",
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "600",
  },
  section: {
    padding: "20px",
    maxWidth: "1100px",
    margin: "auto",
  },
  card: {
    border: "1px solid #dcdcdc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  },
  footer: {
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
  },
};

export default EmpanelmentAPCD;
