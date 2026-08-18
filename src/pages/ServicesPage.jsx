  // src/pages/ServicesPage.jsx

  import { Helmet } from "react-helmet-async";

  import PageHero from "../components/PageHero";
  import ServiceCard from "../components/ServiceCard";

  import { servicesData } from "../data/data";

  export default function ServicesPage() {
    return (
      <>
        <Helmet>
          <title>
            Best Spa in Jetalpur Road Vadodara | Full Body Massage & Thai Massage
          </title>

          <meta
            name="description"
            content="Visit Zevia Spa near Jetalpur Road, Vadodara for full body massage,Body to Body Massage ,Nuru Massage, deep tissue massage,Sandwich Massage
              couple spa and premium wellness therapies."
          />

          <meta
            name="keywords"
            content="
              full body massage in Jetalpur Road Vadodara,
              full body massage in Jetalpur Road Vadodara,
              full body massage near Jetalpur Road Vadodara,

              Thai massage in Jetalpur Road Vadodara,
              Thai massage in Jetalpur Road Vadodara,
              Thai massage near Jetalpur Road Vadodara,

              deep tissue massage in Jetalpur Road Vadodara,
              deep tissue massage in Jetalpur Road Vadodara,
              deep tissue massage near Jetalpur Road Vadodara,

              Swedish massage in Jetalpur Road Vadodara,
              Swedish massage in Jetalpur Road Vadodara,
              Swedish massage near Jetalpur Road Vadodara,

              spa near me,
              spa near me,
              spa near me,

              massage near me,
              massage near me,
              massage near me,

              spa in Jetalpur Road Vadodara,
              spa in Jetalpur Road Vadodara,
              spa in Jetalpur Road Vadodara,

              best spa in Jetalpur Road Vadodara,
              best spa in Vadodara,

              massage spa in Jetalpur Road Vadodara,
              massage spa in Vadodara,

              body spa in Jetalpur Road Vadodara,
              body massage in Jetalpur Road Vadodara,

              luxury spa in Jetalpur Road Vadodara,
              luxury spa in Vadodara,

              wellness spa in Jetalpur Road Vadodara,
              wellness spa in Vadodara,

              day spa in Jetalpur Road Vadodara,
              day spa in Vadodara,

              couple spa in Jetalpur Road Vadodara,
              couple spa in Vadodara,

              couple massage in Jetalpur Road Vadodara,
              romantic couple massage in Vadodara,
              couple romantic massage in Vadodara,

              hot oil massage in Jetalpur Road Vadodara,
              four hand massage in Jetalpur Road Vadodara,
              female to male massage in Jetalpur Road Vadodara,

              aromatherapy massage in Vadodara,
              reflexology in Vadodara,
              Ayurvedic massage in Vadodara,
              head massage in Vadodara,
              foot massage in Vadodara,
              back massage in Vadodara,
              stress relief massage in Vadodara,
              pain relief massage in Vadodara,
              spa therapy in Vadodara,
              neck and shoulder massage in Vadodara,
              Balinese massage in Vadodara,
              hot stone massage in Vadodara,

              professional massage therapist in Vadodara,
              wellness center in Vadodara,
              spa packages in Vadodara,

              sensual massage in Jetalpur Road Vadodara,
              sensual spa in Jetalpur Road Vadodara,
              full body sensual massage in Vadodara,

              adult massage in Jetalpur Road Vadodara,
              adult spa in Vadodara,

              body to body massage in Jetalpur Road Vadodara,
              B2B massage in Vadodara,

              Nuru massage in Vadodara,
              sandwich massage in Vadodara,

              happy ending massage in Vadodara,
              best happy ending massage in Vadodara,

              female to male massage in Vadodara,
              Russian massage girl Vadodara,
              relax with beautiful girls Vadodara,

              body massage near me,
              body spa near me,
              massage spa near me,
              luxury spa near me,
              couple spa near me,
              foot massage near me,
              head massage near me,
              spa packages near me,

              best massage spa near me,
              best body massage near me,
              best body spa near me,
              massage center near me,
              nearest spa center,
              nearby spa massage,

              Zevia Spa Jetalpur Road,
              Zevia Spa Jetalpur Road Vadodara,
              Zevia Spa Vadodara
            "
          />

          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />

          <meta
            name="googlebot"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />

          <meta
            property="og:title"
            content="Zevia Spa Jetalpur Road Vadodara | Full Body Massage & Spa Services"
          />

          <meta
            property="og:description"
            content="Discover premium massage services at Zevia Spa near Jetalpur Road, Vadodara including full body massage, Thai massage, deep tissue massage, Swedish massage and wellness therapies."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:site_name"
            content="Zevia Spa"
          />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Zevia Spa Jetalpur Road Vadodara | Massage & Wellness"
          />

          <meta
            name="twitter:description"
            content="Explore full body massage, Thai massage, deep tissue massage, Swedish massage and premium spa services near Jetalpur Road, Vadodara."
          />
        </Helmet>
        <PageHero
          title="Our Services"
          description="Explore premium spa and massage services including full body massage, Sandwich Massage, Nuru Massage , Body to Body Massage, Swedish massage, hot oil massage, aromatherapy massage, Balinese massage, foot reflexology, couple spa, female to male massage and relaxing spa packages."
        />

        <section className="services-main-section">
          <div className="services-main-container">
            <div className="services-main-grid">
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }