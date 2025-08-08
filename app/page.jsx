import React, { useState } from "react";

const images = {
  hero:
    "https://images.unsplash.com/photo-1580281657522-f59f02898c10?auto=format&fit=crop&w=1170&q=80",
  volunteering:
    "https://images.unsplash.com/photo-1588776814546-3c5042d3f25c?auto=format&fit=crop&w=1170&q=80",
  donations:
    "https://images.unsplash.com/photo-1582515073490-c84f0e1d7879?auto=format&fit=crop&w=1170&q=80",
  community:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1170&q=80",
};

export default function MedicalServiceSociety() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate EmailJS or backend here for real submissions
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f9fafb;
          color: #222;
        }
        header {
          background: #0d3b66;
          color: white;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        header h1 {
          margin: 0;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 1px;
        }
        nav a {
          color: white;
          margin-left: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        nav a:hover {
          color: #fca311;
        }
        .hero {
          background: url(${images.hero}) center/cover no-repeat;
          height: 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 0 20px;
          box-shadow: inset 0 0 0 1000px rgba(13, 59, 102, 0.6);
        }
        .hero h2 {
          font-size: 48px;
          margin: 0 0 10px 0;
          font-weight: 900;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
        }
        .hero p {
          font-size: 20px;
          max-width: 600px;
          margin: 0 0 25px 0;
          font-weight: 500;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        }
        .btn-primary {
          background-color: #fca311;
          border: none;
          color: #0d3b66;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background-color: #ffb93b;
        }
        section {
          max-width: 900px;
          margin: 50px auto;
          padding: 0 20px;
        }
        section h3 {
          font-size: 32px;
          color: #0d3b66;
          margin-bottom: 20px;
          font-weight: 800;
          border-bottom: 3px solid #fca311;
          display: inline-block;
          padding-bottom: 6px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .content-grid img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .content-grid div {
          font-size: 18px;
          line-height: 1.6;
          color: #444;
        }
        .form-container {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: 0 auto 80px auto;
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
          color: #0d3b66;
        }
        input, textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 6px;
          border: 1.5px solid #ccc;
          font-size: 16px;
          font-family: inherit;
          resize: vertical;
          transition: border-color 0.3s;
        }
        input:focus, textarea:focus {
          border-color: #fca311;
          outline: none;
        }
        button.submit-btn {
          width: 100%;
          padding: 16px;
          background-color: #0d3b66;
          color: white;
          font-weight: 700;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button.submit-btn:hover {
          background-color: #094071;
        }
        .thankyou {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          color: #0d3b66;
          padding: 40px 20px;
          border-radius: 12px;
          background: #d7f4e3;
          box-shadow: 0 6px 15px rgba(34, 139, 34, 0.2);
          max-width: 600px;
          margin: 0 auto 80px auto;
        }
        footer {
          background: #0d3b66;
          color: white;
          text-align: center;
          padding: 25px 20px;
          font-weight: 600;
          letter-spacing: 0.6px;
          user-select: none;
        }
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .hero h2 {
            font-size: 32px;
          }
          .hero p {
            font-size: 16px;
          }
        }
      `}</style>

      <header>
        <h1>Medical Service Society</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#volunteering">Volunteering</a>
          <a href="#donations">Donations</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="hero" aria-label="Medical Service Society Hero Section">
        <h2>Make a Difference in Medicine</h2>
        <p>
          Join Saugus High School’s Medical Service Society and help your community
          through volunteering and outreach.
        </p>
        <a href="#join" className="btn-primary" tabIndex={0}>
          Join Now
        </a>
      </section>

      <section id="about">
        <h3>About Us</h3>
        <p>
          The Medical Service Society is a student-run organization focused on providing
          volunteering opportunities in healthcare, donation drives for children with
          medical needs, and community health events.
        </p>
      </section>

      <section id="volunteering">
        <h3>Volunteering Opportunities</h3>
        <div className="content-grid">
          <img src={images.volunteering} alt="Medical volunteers helping patients" />
          <div>
            <p>
              Get hands-on experience assisting medical staff, greeting patients, and
              supporting healthcare operations at local hospitals and clinics.
            </p>
          </div>
        </div>
      </section>

      <section id="donations">
        <h3>Donation & Toy Drives</h3>
        <div className="content-grid">
          <img src={images.donations} alt="Toys and donations for kids in hospital" />
          <div>
            <p>
              Participate in our drives to collect toys, clothes, and supplies for kids
              with medical challenges and their families.
            </p>
          </div>
        </div>
      </section>

      <section id="join">
        <h3>Join the Medical Service Society</h3>
        {!submitted ? (
          <form className="form-container" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />

            <label htmlFor="message">Why do you want to join?</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about why you want to join"
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="thankyou" role="alert" tabIndex={0}>
            Thank you for signing up! We will reach out to you shortly.
          </div>
        )}
      </section>

      <footer>
        © {new Date().getFullYear()} Medical Service Society - Saugus High School
      </footer>
    </>
  );
}
