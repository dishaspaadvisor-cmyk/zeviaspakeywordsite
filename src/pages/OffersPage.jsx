// src/pages/OffersPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import OfferCard from "../components/OfferCard";

import { offersData } from "../data/data";

export default function OffersPage() {
  return (
    <>
      <Helmet>
        <title>
          Spa Offers in Vadodara | Massage Offers Jetalpur Road | Zevia Spa
        </title>

        <meta
          name="description"
          content="Discover special spa offers in Vadodara at Zevia Spa near Jetalpur Road, Sampatrao Colony. Explore full body massage, Thai massage, deep tissue massage, Swedish massage, couple spa and luxury wellness packages."
        />

        <meta
          name="keywords"
          content="
            spa in Vadodara,
            spa in Vadodara,
            spa in Vadodara,

            best spa in Vadodara,
            best spa in Vadodara,

            massage spa in Vadodara,
            massage spa in Vadodara,

            spa near Jetalpur Road Vadodara,
            spa near Jetalpur Road Vadodara,

            massage near Jetalpur Road Vadodara,
            massage near Jetalpur Road Vadodara,

            spa in Sampatrao Colony Vadodara,
            massage spa in Sampatrao Colony Vadodara,

            spa near me,
            spa near me,
            spa near me,

            massage near me,
            massage near me,
            massage near me,

            full body massage in Vadodara,
            full body massage in Vadodara,
            full body massage in Vadodara,

            Thai massage in Vadodara,
            Thai massage in Vadodara,
            Thai massage in Vadodara,

            deep tissue massage in Vadodara,
            deep tissue massage in Vadodara,

            Swedish massage in Vadodara,
            Swedish massage in Vadodara,

            hot oil massage in Vadodara,
            four hand massage in Vadodara,
            female to male massage in Vadodara,

            couple spa in Vadodara,
            couple spa in Vadodara,

            couple massage in Vadodara,
            romantic couple massage in Vadodara,

            luxury spa in Vadodara,
            luxury spa in Vadodara,
            luxury spa near me,

            wellness spa in Vadodara,
            wellness center in Vadodara,

            day spa in Vadodara,
            day spa near me,

            body massage in Vadodara,
            body massage in Vadodara,

            body spa in Vadodara,
            body spa near me,

            massage center in Vadodara,
            massage center near me,

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
            spa packages in Vadodara,
            spa offers in Vadodara,
            massage offers in Vadodara,
            wellness packages in Vadodara,

            special spa offers Vadodara,
            best spa offers Vadodara,
            massage packages Vadodara,
            luxury spa packages Vadodara,

            sensual massage Vadodara,
            sensual spa Vadodara,
            full body sensual massage Vadodara,
            adult massage Vadodara,
            adult spa Vadodara,

            body to body massage Vadodara,
            B2B massage Vadodara,
            Nuru massage Vadodara,
            sandwich massage Vadodara,

            happy ending massage Vadodara,
            best happy ending massage Vadodara,

            female to male massage Vadodara,
            Russian massage girl Vadodara,
            relax with beautiful girls Vadodara,

            sensual massage near me,
            body to body massage near me,
            B2B massage near me,
            Nuru massage near me,
            female to male massage near me,

            Zevia Spa Vadodara,
            Zevia Spa Jetalpur Road,
            Zevia Spa Sampatrao Colony,
            Zevia Spa Gujarat
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
          content="Spa Offers in Vadodara | Zevia Spa Jetalpur Road"
        />

        <meta
          property="og:description"
          content="Explore exclusive spa and massage offers at Zevia Spa in Vadodara near Jetalpur Road and Sampatrao Colony."
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
          content="Spa Offers in Vadodara | Zevia Spa"
        />

        <meta
          name="twitter:description"
          content="Discover massage offers, spa packages and wellness treatments at Zevia Spa in Vadodara."
        />
      </Helmet>

      <PageHero
        title="Special Offers"
        description="Discover exclusive spa offers and wellness packages created for your perfect relaxing experience."
      />

      <section className="premium-offers-section">
        <div className="premium-offers-container">

          {/* HEADING */}
          <div className="premium-offers-heading">
            <span>
              Exclusive Wellness Offers
            </span>

            <h2>
              Relax More.
              <strong>
                {" "}Enjoy More.
              </strong>
            </h2>

            <p>
              Choose from our selected spa offers and
              discover the perfect wellness experience
              for yourself or someone special.
            </p>
          </div>

          {/* CARDS */}
          <div className="premium-offers-grid">
            {offersData.map((offer) => (
              <OfferCard
                key={offer.id}
                {...offer}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}