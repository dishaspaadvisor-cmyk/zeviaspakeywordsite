// src/pages/GalleryPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";

import { galleryData } from "../data/data";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>
          Zevia Spa Gallery | Luxury Spa, Massage & Wellness Ambience
        </title>

        <meta
          name="description"
          content="Explore the Zevia Spa gallery and discover our relaxing spa ambience, premium massage rooms, luxury wellness spaces and peaceful environment for complete relaxation."
        />

        <meta
          name="keywords"
          content="
            Zevia Spa gallery,
            spa gallery,
            spa near me,
            spa near me,
            spa near me,
            massage near me,
            massage near me,
            massage near me,

            luxury spa,
            luxury spa,
            luxury spa,
            luxury spa near me,
            luxury spa near me,

            wellness spa,
            wellness spa,
            wellness center,
            spa wellness center near me,

            full body massage,
            full body massage,
            full body massage,
            full body massage near me,

            Thai massage in Jetalpur Road, Vadodara ,
            Thai massage in Jetalpur, Vadodara,
            Thai massage in Jetalpur, Vadodara,,
            Thai massage near me,

            deep tissue massage in Jetalpur, Vadodara,,
            deep tissue massage in Jetalpur, Vadodara,,
            deep tissue massage in Jetalpur, Vadodara,,

            Swedish massage in Jetalpur, Vadodara,,
            Swedish massage in Jetalpur, Vadodara,,
            Swedish massage in Jetalpur, Vadodara,,

            hot oil massage in Jetalpur, Vadodara,,
            hot oil massage in Jetalpur, Vadodara,,
            hot oil massage in Jetalpur, Vadodara,,

            body spa in Jetalpur, Vadodara,,
            body spa near me,
            body spa near me,

            massage spa in Jetalpur, Vadodara,,
            massage spa near me,
            massage spa near me,

            couple spa in Jetalpur, Vadodara,,
            couple spa,
            couple spa near me,

            couple massage,
            couple massage,
            romantic couple massage,

            day spa,
            day spa near me,
            nearest day spa,

            relaxation spa,
            relaxation massage,
            relaxation massage near me,

            spa experience,
            spa experience,
            luxury spa experience,
            premium spa experience,

            spa ambience,
            luxury spa ambience,
            relaxing spa ambience,
            peaceful spa environment,

            spa rooms,
            massage rooms in Jetalpur, Vadodara,,
            luxury massage rooms in Jetalpur, Vadodara,,
            premium spa rooms in Jetalpur, Vadodara,,

            spa interior,
            luxury spa interior in Jetalpur, Vadodara,,
            wellness spa interior in Jetalpur, Vadodara,,

            spa photos,
            massage spa photos,
            luxury spa photos,
            wellness spa gallery,

            aromatherapy massage,
            Balinese massage,
            Ayurvedic massage,
            hot stone massage,

            head massage in Jetalpur, Vadodara,,
            back massage in Jetalpur, Vadodara,,
            neck and shoulder massage in Jetalpur, Vadodara,

            stress relief massage,
            pain relief massage,
            spa therapy in Jetalpur, Vadodara,,
            massage therapy in Jetalpur, Vadodara,,

            professional massage therapist,
            premium massage services,
            spa and massage services,

            best spa near me,
            best spa near me,
            best massage spa near me,
            best massage spa near me,

            best body massage near me,
            best body spa near me,

            massage center near me,
            massage center near me,

            nearest spa centre,
            nearest spa center,

            nearby spa massage,
            nearby spa center,
            nearby massage center,

            local spa treatments near me,
            luxury massage spa in Jetalpur, Vadodara,
            luxury massage spa near me,

            spa packages,
            spa packages near me
 
    couple massage,
    couple massage,
    romantic couple massage in Jetalpur, Vadodara,,
    couple romantic massage in Jetalpur, Vadodara,,
    spa packages in Jetalpur, Vadodara,,

    body massage near me,
    body spa near me,
    massage spa near me,
    massage center near me,
    best massage spa near me,
    best body massage near me,
    luxury spa near me,
    luxury massage spa,

    sensual massage in Jetalpur, Vadodara,,
    sensual massage in Jetalpur, Vadodara,,
    sensual massage,
    sensual spa,
    sensual spa in Jetalpur, Vadodara,,
    full body sensual massage,
    full body sensual massage,

    adult massage in Jetalpur, Vadodara,,
    adult massage in Jetalpur, Vadodara,,
    adult spa,
    adult spa,


    B2B massage in Jetalpur, Vadodara,,
    B2B massage,

    nuru massage in Jetalpur, Vadodara,,
    nuru massage,
    sandwich massage in Jetalpur, Vadodara,,
    sandwich massage,

    happy ending massage in Jetalpur, Vadodara,,
    happy ending massage,
    best happy ending massage in Jetalpur, Vadodara,,
    best happy ending massage,

    female to male massage in Jetalpur, Vadodara,,
    female to male massage,
    female to male massage,

    Russian massage girl in Jetalpur, Vadodara,,
    Russian massage girl,

    relax with beautiful girls,
    relax with beautiful girls,

    romantic massage in Jetalpur, Vadodara,,
    romantic massage spa,
    sensual body massage in Jetalpur, Vadodara,,
    full body sensual spa in Jetalpur, Vadodara,,
    adult body massage,
    adult massage spa in Jetalpur, Vadodara,,
    body to body spa,
    B2B spa,
    female therapist massage in Jetalpur, Vadodara,
    female massage therapist,
    male relaxation massage,
    couple romantic spa,
    luxury sensual spa,`
    sensual massage near me,
    adult massage near me,
    adult spa near me,
    body to body massage near me,
    B2B massage near me,
    nuru massage near me,
    female to male massage near me, 
    happy ending massage near me
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
          content="Zevia Spa Gallery | Luxury Spa & Wellness Experience"
        />

        <meta
          property="og:description"
          content="View the Zevia Spa gallery featuring relaxing spa ambience, premium massage rooms and peaceful wellness spaces."
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
          content="Zevia Spa Gallery | Luxury Spa & Massage"
        />

        <meta
          name="twitter:description"
          content="Explore Zevia Spa's relaxing ambience, massage rooms and premium wellness spaces."
        />
      </Helmet>

      <PageHero
        title="Our Gallery"
        description="Take a look at our relaxing spa ambience, premium wellness spaces and peaceful environment."
      />

      <section className="gallery-main-section">
        <div className="gallery-main-container">
          <div className="gallery-main-heading">
            <span>
              Discover Our Space
            </span>

            <h2>
              A Glimpse Into
              <strong> Relaxation</strong>
            </h2>

            <p>
              Explore our spa atmosphere and wellness spaces
              designed to provide comfort, calmness and a
              refreshing experience.
            </p>
          </div>

          <div className="gallery-main-grid">
            {galleryData.map((item) => (
              <GalleryCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}