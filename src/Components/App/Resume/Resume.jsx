import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume__section">
        <h2 className="resume__section-title">About</h2>
        <p className="resume__text">
          Constantly learning passionate Frontend Developer with 1+ year of
          experience in React, JavaScript and Next.js. I combine hands-on
          technical skills and 5+ years overall in creating web and mobile
          products in different roles at international companies like Yandex and
          Viber. I offer a unique dual perspective to align technical
          implementation with business objectives.
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Technical Skills</h2>
        <p className="resume__text">
          JavaScript · TypeScript · React · Node.js · Babel · Webpack · HTML ·
          CSS · Git · Node Package Manager · RESTful APIs · Figma · Redux
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Work Experience</h2>

        <div className="resume__job">
          <h3 className="resume__job-title">Frontend Developer</h3>
          <p className="resume__job-company">
            LETT DO Start Up, Tel Aviv, Israel
          </p>
          <p className="resume__job-duration">Jan 2024 - Present</p>
          <ul className="resume__job-list">
            <li>
              Developed an Admin interface using React to streamline the
              management of internal data.
            </li>
            <li>
              Designed and implemented site footer with app install QR,
              resulting in +25 app installs daily.
            </li>
            <li>
              Built more than 15 notification templates in HTML/CSS, increasing
              open rates by 15%.
            </li>
          </ul>
        </div>

        <div className="resume__job">
          <h3 className="resume__job-title">Project Manager</h3>
          <p className="resume__job-company">Rakuten Viber, Tel Aviv, Israel</p>
          <p className="resume__job-duration">Sep 2021 - Jan 2024</p>
          <ul className="resume__job-list">
            <li>
              Implemented Monday.com for project management, achieving a 92%
              on-time task completion rate.
            </li>
            <li>
              Led "Untrusted Users" and "ASO Relaunch" projects, reducing UA
              untrusted users by 35%.
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
          Triple Ten - Certificate | Full Stack Web Development (12 months,
          Yandex)
        </p>
        <p className="resume__text">
          Higher School of Economics - Master's Degree | International Business
          (Aug 2018)
        </p>
      </section>
    </div>
  );
};

export default Resume;
