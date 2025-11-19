import React from "react";
import "./Portfolio.css";


import profileImg from "./assets/profile.jpg";



export default function Portfolio() {
  const github = "https://github.com/Ujjwal-Kumarrr";
  const linkedin = "https://www.linkedin.com/in/ujjwal-kumar-b88408340/";
  const leetcode = "https://leetcode.com/u/UjjwalKumarrr/";

  return (
    <div className="page">
      <header className="header">

        <div className="profile">
          {/* Avatar Image Instead of Text */}
          <img src={profileImg} alt="Ujjwal Kumar" className="avatar" />

          <div>
            <h1 className="name">Ujjwal Kumar</h1>
            <p className="tagline">DSA · Web Developer · Machine Learning</p>
          </div>
        </div>

        <nav className="nav">
          <a href={github} target="_blank">GitHub</a>
          <a href={linkedin} target="_blank">LinkedIn</a>
          <a href={leetcode} target="_blank" className="highlight">LeetCode</a>
        </nav>
      </header>

      <main className="main">
        {/* Hero */}
        <section className="hero card">
          <h2>Hi — I’m Ujjwal Kumar</h2>
          <p>
            A budding Web Developer and DSA enthusiast learning Machine
            Learning. <b>No professional experience yet</b>, but actively
            building projects and solving problems on LeetCode.
          </p>

          <div className="button-row">
            <a href={github} target="_blank" className="btn1">View GitHub</a>
            <a href={leetcode} target="_blank" className="btn2">My LeetCode</a>
          </div>

          <div className="two-grid">
            <div className="subcard">
              <h3>What I’m learning</h3>
              <ul>
                <li>Advanced DSA (graphs, DP, segment trees)</li>
                <li>React (hooks, context)</li>
                <li>Machine Learning basics</li>
              </ul>
            </div>

            <div className="subcard">
              <h3>Career Goal</h3>
              <p>
                Get an internship in web dev or ML research, contribute to
                open-source, and grow into a full-stack ML-enabled developer.
              </p>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="sidebar card">
          <div className="stats">
            <h3>Quick Stats</h3>
            <div className="stat-grid">
              <div className="stat">
                <div className="value">0</div>
                <div className="label">Experience</div>
              </div>
              <div className="stat">
                <div className="value">100+</div>
                <div className="label">LeetCode Problems</div>
              </div>
              <div className="stat">
                <div className="value">5+</div>
                <div className="label">Projects</div>
              </div>
            </div>
          </div>

          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              {[
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "C++",
                "Python",
                "DSA",
                "Machine Learning",
              ].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <p>Email me or connect on LinkedIn.</p>
            <div className="button-row">
              <a href="mailto:ujjwal.kumar@example.com" className="email">
                Email
              </a>
              <a href={linkedin} target="_blank" className="email">
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        {/* Projects */}
        <section className="projects card">
          <h2>Selected Projects</h2>
          <p className="hint">Replace these with your real GitHub repos.</p>

          <div className="project-grid">
            <div className="project">
              <h4>Personal Portfolio</h4>
              <p>A responsive React portfolio showcasing your skills.</p>
              <div className="button-row">
                <a href={github} className="repo">View Repo</a>
                <a href="#" className="demo">Live Demo</a>
              </div>
            </div>

            <div className="project">
              <h4>DSA Visualizer</h4>
              <p>Sorting & graph algorithm visualizer built in React.</p>
              <div className="button-row">
                <a href={github} className="repo">View Repo</a>
                <a href="#" className="demo">Live Demo</a>
              </div>
            </div>

            <div className="project">
              <h4>House Price Predictor</h4>
              <p>ML model using Python + linear regression.</p>
              <div className="button-row">
                <a href={github} className="repo">View Repo</a>
                <a href="#" className="demo">Notebook</a>
              </div>
            </div>

            <div className="project">
              <h4>Competitive Coding Solutions</h4>
              <p>Curated C++ & Python interview problems.</p>
              <div className="button-row">
                <a href={github} className="repo">View Repo</a>
                <a href={leetcode} className="leetcode">LeetCode</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Made with ❤️ by Ujjwal Kumar</p>
        </footer>
      </main>
    </div>
  );
}
