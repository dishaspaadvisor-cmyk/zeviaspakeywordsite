// src/pages/ContactPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Zevia Spa | Spa Near Me, Massage Near Me & Full Body Massage
        </title>

        <meta
          name="description"
          content="Contact Zevia Spa for full body massage, Thai massage, deep tissue massage, Swedish massage, couple spa, luxury spa, wellness treatments, special offers and today's availability."
        />

        <meta
          name="keywords"
          content="
            Zevia Spa,
            contact Zevia Spa,
            spa near me,
            spa near me,
            spa near me,
            massage near me,
            massage near me,
            massage near me,

            full body massage in Jetalpur, Vadodara,
            full body massage in Jetalpur, Vadodara,
            full body massage in Jetalpur, Vadodara,
            Thai massage,
            Thai massage in Jetalpur, Vadodara,
            Thai massage,
            deep tissue massage in Jetalpur, Vadodara,
            deep tissue massage in Jetalpur, Vadodara,
            deep tissue massage,
            Swedish massage in Jetalpur, Vadodara,
    

            couple spa in Jetalpur, Vadodara,
            couple spa,
            luxury spa in Jetalpur, Vadodara,
            luxury spa,
            wellness spa in Jetalpur, Vadodara,
            wellness spa,
            day spa,
            day spa near me,

            aromatherapy massage,
            reflexology,
            Ayurvedic massage,
            head massage,
            foot massage,
            back massage,
            stress relief massage,
            pain relief massage,
            spa therapy,
            neck and shoulder massage,
            Balinese massage,
            hot stone massage,
            professional massage therapist,
            wellness center,

            couple massage,
            romantic couple massage,
            couple romantic massage,
            spa packages,

            four hand massage,
            four hand massage,
            hot oil massage,
            hot oil massage,
            Jacuzzi massage,
            foot reflexology,

            body massage in Jetalpur, Vadodara,
            body massage,
            body massage near me,
            body spa near me,
            massage spa near me,
            massage center near me,
            best massage spa near me,
            best body massage near me,
            luxury spa near me,
            luxury massage spa,

            sensual massage,
            sensual massage,
            sensual spa,
            full body sensual massage,

            adult massage in Jetalpur, Vadodara,
            adult massage in Jetalpur, Vadodara,
            adult spa,
            adult spa,

            body to body massage in Jetalpur, Vadodara,
            body to body massage,
            B2B massage,
            B2B massage,

            Nuru massage in Jetalpur, Vadodara,
            Nuru massage,

            sandwich massage in Jetalpur, Vadodara,
            sandwich massage,

            happy ending massage in Jetalpur, Vadodara,
            happy ending massage,
            best happy ending massage in Jetalpur, Vadodara,

            female to male massage in Jetalpur, Vadodara,
            female to male massage,

            Russian massage girl in Jetalpur, Vadodara,
            relax with beautiful girls,

            sensual massage near me,
            adult massage near me,
            adult spa near me,
            body to body massage near me,
            B2B massage near me,
            Nuru massage near me,
            sandwich massage near me,
            happy ending massage near me,
            female to male massage near me,

            spa contact near me,
            massage booking near me,
            spa booking near me,
            massage availability near me,
            spa offers near me,
            massage offers near me,
            nearby spa massage,
            nearby massage center,
            nearest spa centre,
            nearest massage center
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
          content="Contact Zevia Spa | Spa, Massage & Wellness Services"
        />

        <meta
          property="og:description"
          content="Connect with Zevia Spa for full body massage, Thai massage, deep tissue massage, Swedish massage, luxury spa services, special offers and availability."
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
          content="Contact Zevia Spa | Full Body Massage & Luxury Spa"
        />

        <meta
          name="twitter:description"
          content="Contact Zevia Spa for premium massage therapies, wellness services, special offers and today's availability."
        />
      </Helmet>

      <PageHero
        title="Contact Us"
        description="Connect with Zevia Spa for premium wellness services, special offers and today's availability."
      />

      <ContactCard />
    </>
  );
}