import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume__section">
        <h2 className="resume__section-title">About</h2>
        <p className="resume__text">
          Constantly learning passionate Full-Stack Developer with 2+ years of
          experience in Next.js, React, Node.js and TypeScript. I combine
          hands-on technical skills and 5+ years overall in creating web and
          mobile products in different roles at international companies like
          Yandex and Viber.
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Technical Skills</h2>
        <div
          className="resume__skills-row"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ minWidth: "200px" }}>
            <b>Programming Languages</b>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>Frameworks & Libraries</b>
            <ul>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>State Management</b>
            <ul>
              <li>Redux</li>
              <li>Zustand</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>Backend Frameworks</b>
            <ul>
              <li>Express</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>Databases</b>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Neon PostgreSQL</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>ORMs</b>
            <ul>
              <li>Drizzle ORM</li>
              <li>Prisma ORM</li>
              <li>Neon PostgreSQL</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>Hosting & Deployment</b>
            <ul>
              <li>Vercel</li>
              <li>Google Cloud</li>
            </ul>
          </div>
          <div style={{ minWidth: "200px" }}>
            <b>Mobile Development</b>
            <ul>
              <li>React Native</li>
              <li>Expo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Work Experience</h2>

        <div className="resume__job">
          <h3 className="resume__job-title">Full Stack Developer</h3>
          <p className="resume__job-company">
            Pro Algorithm - Logistics Company, Hadera, Israel
          </p>
          <p className="resume__job-duration">Feb 2025 - Present</p>
          <p className="resume__text">
            Engineered scalable, production-grade algorithms and end-to-end
            solutions as a Full Stack Developer. Leveraged Node.js, TypeScript,
            and React to design robust backend architectures and responsive
          </p>
          <ul className="resume__job-list">
            <li>
              Developed a backend for a logistics company using Node.js,
              TypeScript and MongoDB.
            </li>
            <li>
              Led full lifecycle development of microservices and RESTful APIs,
              consistently improving system performance and reliability.
            </li>
            <li>
              Enhanced UI/UX by designing reusable components and streamlining
              state management with Zustand.
            </li>
            <li>Backend development using Node.js, TypeScript and MongoDB.</li>
            <li>
              Developed a React Native app for drivers to manage their rides and
              income. I used Expo, React Native, Node.js, TypeScript and
              MongoDB.
            </li>
          </ul>
        </div>

        <div className="resume__job">
          <h3 className="resume__job-title">Frontend Developer</h3>
          <p className="resume__job-company">
            LETT DO Start Up, Tel Aviv, Israel
          </p>
          <p className="resume__job-duration">Jan 2024 - Feb 2025</p>
          <p className="resume__text">
            Developed and maintained frontend applications for a startup
            environment, focusing on user experience and performance
            optimization. Collaborated with cross-functional teams to deliver
            high-quality digital solutions using modern web technologies.
          </p>
          <ul className="resume__job-list">
            <li>
              Conducted end-to-end development of flagship product and key
              features using Next.js, React and TypeScript.
            </li>
            <li>
              Developed an Admin interface using React to streamline the
              management of internal data.
            </li>
            <li>
              Designed and implemented site footer with app install QR,
              resulting in +25 app installs daily.
            </li>
          </ul>
        </div>

        <div className="resume__job">
          <h3 className="resume__job-title">Tech Project Manager</h3>
          <p className="resume__job-company">Rakuten Viber, Tel Aviv, Israel</p>
          <p className="resume__job-duration">Sep 2021 - Jan 2024</p>
          <ul className="resume__job-list">
            <li>
              Implemented Monday.com for project management, achieving a 92%
              on-time task completion rate.
            </li>
            <li>
              Led &ldquo;Untrusted Users&rdquo; and &ldquo;ASO Relaunch&rdquo;
              projects, reducing UA untrusted users by 35%.
            </li>
            <li>
              Executed mobile marketing strategy, decreasing CPMAU in CIS by 15%
              and increasing MAU in MENA by 25% YoY.
            </li>
          </ul>
        </div>

        <div className="resume__job">
          <h3 className="resume__job-title">Mobile Marketing Manager</h3>
          <p className="resume__job-company">Yandex, Moscow, Russia</p>
          <p className="resume__job-duration">Nov 2018 - Sep 2021</p>
          <ul className="resume__job-list">
            <li>
              Managed $1.5–3M/month advertising budget, increasing app installs
              by 50% with optimized ROI.
            </li>
            <li>
              Led the integration of advanced mobile ad solutions including ASA
              API, dynamic retargeting, and Adjust event mapping.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Education</h2>
        <p className="resume__text">
          Higher School of Economics - Master&apos;s Degree
        </p>
      </section>
    </div>
  );
};

export default Resume;
