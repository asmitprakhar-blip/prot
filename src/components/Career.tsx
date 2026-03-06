import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Manager</h4>
                <h5>Prakhar Enterprises</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Managed operations and digital strategy, focusing on brand
              credibility and clear presentation of services for multiple
              divisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Aura Bite</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed the official website for Aura Bite, a health-focused
              food and beverage brand, optimizing for customer engagement and
              modern design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Loktantra</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a civic engagement platform designed to simplify political
              awareness and participation through digital tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
