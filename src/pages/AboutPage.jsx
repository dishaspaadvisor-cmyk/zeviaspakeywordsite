import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Zevia Spa | Full Body Massage, Thai Massage & Luxury Spa
        </title>

        <meta
          name="description"
          content="Discover Zevia Spa for full body massage, Thai massage, deep tissue massage, Swedish massage, hot oil massage, foot reflexology and luxury spa therapies."
        />

        <meta
          name="keywords"
          content="Zevia Spa, spa near me, massage near me, full body massage, Thai massage, deep tissue massage, Swedish massage, hot oil massage, four hand massage, female to male massage, foot reflexology, Jacuzzi massage, couple spa, couple massage, luxury spa, wellness spa, day spa, body spa, body massage, massage spa near me, body massage near me, massage center near me, professional massage therapist, relaxation spa, aromatherapy massage, reflexology, Balinese massage, hot stone massage, spa packages"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <PageHero
        title="About Zevia Spa"
        description="Discover Zevia Spa, a peaceful wellness destination for full body massage, Thai massage, deep tissue massage, Swedish massage and premium relaxation therapies."
      />

      <AboutSection />

      <section className="about-seo-section">
        <div className="about-seo-container">
          <span className="about-seo-label">
            RELAX • REFRESH • REJUVENATE
          </span>

          <h2>Premium Spa & Full Body Massage Experience</h2>

          <p>
            Welcome to <strong>Zevia Spa</strong>, a relaxing wellness
            destination offering professional spa and massage therapies
            designed to help you relax, refresh and rejuvenate.
          </p>

          <p>
            If you are searching for a <strong>spa near me</strong>,{" "}
            <strong>massage near me</strong> or a premium{" "}
            <strong>full body massage</strong>, Zevia Spa provides a peaceful
            and comfortable wellness experience.
          </p>

          <p>
            Our popular treatments include <strong>Thai massage</strong>,{" "}
            <strong>deep tissue massage</strong>,{" "}
            <strong>Swedish massage</strong>,{" "}
            <strong>hot oil massage</strong>,{" "}
            <strong>four hand massage</strong>, foot reflexology and Jacuzzi
            therapy.
          </p>

          <div className="about-seo-services">
            <h2>Massage & Spa Services at Zevia Spa</h2>

            <div className="about-seo-grid">
              <article>
                <h3>Full Body Massage</h3>
                <p>
                  Complete relaxation for your body, mind and overall wellness.
                </p>
              </article>

              <article>
                <h3>Female to Male Massage</h3>
                <p>
                  Professional therapy designed for comfort, relaxation and
                  stress relief.
                </p>
              </article>

              <article>
                <h3>Four Hand Massage</h3>
                <p>
                  Two therapists working together for a deeply relaxing
                  massage experience.
                </p>
              </article>

              <article>
                <h3>Thai Massage</h3>
                <p>
                  Stretch, relax and restore your body's natural energy.
                </p>
              </article>

              <article>
                <h3>Deep Tissue Massage</h3>
                <p>
                  Focused therapy to relieve muscle tension and refresh the
                  body.
                </p>
              </article>

              <article>
                <h3>Hot Oil Massage</h3>
                <p>
                  Warm oils and soothing massage techniques for deep
                  relaxation.
                </p>
              </article>

              <article>
                <h3>Swedish Massage</h3>
                <p>
                  Gentle massage strokes that calm the body and refresh the
                  mind.
                </p>
              </article>

              <article>
                <h3>Jacuzzi Massage</h3>
                <p>
                  Luxury hydrotherapy designed for relaxation and
                  rejuvenation.
                </p>
              </article>

              <article>
                <h3>Foot Reflexology</h3>
                <p>
                  Relax tired feet and restore overall comfort and wellness.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-seo-section {
          padding: 90px 20px;
          background:
            radial-gradient(
              circle at top left,
              rgba(229, 182, 116, 0.12),
              transparent 35%
            ),
            #fffaf4;
        }

        .about-seo-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .about-seo-label {
          display: inline-block;
          margin-bottom: 14px;

          color: #bd8d52;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .about-seo-container > h2 {
          max-width: 800px;

          margin: 0 0 25px;

          color: #37271f;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(36px, 5vw, 54px);
          font-weight: 400;

          line-height: 1.12;
        }

        .about-seo-container > p {
          max-width: 1000px;

          margin: 0 0 18px;

          color: #6f625c;

          font-size: 16px;

          line-height: 1.9;
        }

        .about-seo-container > p strong {
          color: #3c2b23;

          font-weight: 600;
        }

        .about-seo-services {
          margin-top: 65px;
        }

        .about-seo-services > h2 {
          margin: 0 0 35px;

          color: #37271f;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(30px, 4vw, 44px);
          font-weight: 400;

          line-height: 1.2;
        }

        .about-seo-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 22px;
        }

        .about-seo-grid article {
          position: relative;

          padding: 30px 26px;

          overflow: hidden;

          background: rgba(255, 255, 255, 0.92);

          border: 1px solid rgba(189, 141, 82, 0.2);

          border-radius: 20px;

          box-shadow:
            0 12px 35px rgba(71, 49, 37, 0.07);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .about-seo-grid article::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background:
            linear-gradient(
              90deg,
              #c99555,
              #edc68e,
              #c99555
            );

          opacity: 0;

          transition: opacity 0.3s ease;
        }

        .about-seo-grid article:hover {
          transform: translateY(-6px);

          border-color: rgba(189, 141, 82, 0.4);

          box-shadow:
            0 18px 45px rgba(71, 49, 37, 0.12);
        }

        .about-seo-grid article:hover::before {
          opacity: 1;
        }

        .about-seo-grid article h3 {
          margin: 0 0 12px;

          color: #3b2a22;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 22px;
          font-weight: 400;

          line-height: 1.25;
        }

        .about-seo-grid article p {
          margin: 0;

          color: #746861;

          font-size: 14px;

          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .about-seo-section {
            padding: 75px 20px;
          }

          .about-seo-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .about-seo-section {
            padding: 55px 16px;
          }

          .about-seo-label {
            margin-bottom: 10px;

            font-size: 9px;

            letter-spacing: 2.2px;
          }

          .about-seo-container > h2 {
            margin-bottom: 20px;

            font-size: 34px;
          }

          .about-seo-container > p {
            margin-bottom: 15px;

            font-size: 15px;

            line-height: 1.8;
          }

          .about-seo-services {
            margin-top: 45px;
          }

          .about-seo-services > h2 {
            margin-bottom: 25px;

            font-size: 30px;
          }

          .about-seo-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .about-seo-grid article {
            padding: 24px 20px;

            border-radius: 16px;
          }

          .about-seo-grid article h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}