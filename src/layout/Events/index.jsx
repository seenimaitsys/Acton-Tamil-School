import "./index.css";
import { useState } from "react";
import { EventImage } from "../../components/Events";
import ImageModal from "../../components/Events/imagemodal";
import heroImage from "../../assets/images/event43.webp";
import volunteerImage from "../../assets/images/event001.webp";
import recognitionImage from "../../assets/images/event28.webp";

const INITIAL_PHOTO_COUNT = 12;

const photoLabels = [
  "Students celebrating the school year",
  "Tamil cultural performance",
  "Families at a school gathering",
  "Students sharing a stage moment",
  "A colorful Tamil celebration",
  "Our volunteer school community",
];

const gatheringThemes = [
  {
    icon: "bi-calendar-heart",
    title: "Celebrate together",
    copy: "Pongal, Tamil New Year, and school milestones bring language, food, music, and tradition into one shared experience.",
  },
  {
    icon: "bi-mic",
    title: "Take the stage",
    copy: "Performances give students a joyful reason to speak, sing, create, and share Tamil with confidence.",
  },
  {
    icon: "bi-people",
    title: "Make it possible",
    copy: "Families and volunteer educators bring their time and care to every class, gathering, and celebration.",
  },
];

const EventsLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const visiblePhotos = showAllPhotos
    ? EventImage
    : EventImage.slice(0, INITIAL_PHOTO_COUNT);
  const selectedPhoto =
    selectedIndex === null ? null : EventImage[selectedIndex];
  const getPhotoLabel = (index) =>
    photoLabels[index % photoLabels.length];

  const selectAdjacentPhoto = (direction) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return (
        (currentIndex + direction + EventImage.length) % EventImage.length
      );
    });
  };

  return (
    <main id="main-content" className="events-page">
      <section className="section-shell events-page__hero">
        <div className="events-page__hero-content">
          <p className="eyebrow events-page__hero-eyebrow">Our community</p>
          <h1 className="events-page__hero-title">
            Where Tamil comes alive, together.
          </h1>
          <p className="events-page__hero-lead">
            Classrooms are only the beginning. Our families, students, and
            volunteers create a place where language becomes performance,
            tradition, friendship, and belonging.
          </p>
          <div className="events-page__hero-actions">
            <a
              className="button button-primary events-page__hero-button"
              href="#community-moments"
            >
              Explore our moments
              <i className="bi bi-arrow-down" aria-hidden="true" />
            </a>
            <a
              className="text-link events-page__hero-link"
              href="https://www.facebook.com/ActonTamilSchool/"
              target="_blank"
              rel="noreferrer"
            >
              Follow on Facebook
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="events-page__hero-media">
          <figure className="events-page__hero-figure-main">
            <img
              src={heroImage}
              alt="Acton Tamil School students and teachers together on stage"
              className="events-page__hero-image-main"
            />
          </figure>
          <figure className="events-page__hero-figure-side">
            <img
              src={volunteerImage}
              alt="Acton Tamil School volunteers gathered on stage"
              className="events-page__hero-image-side"
            />
          </figure>
          <figure className="events-page__hero-figure-side">
            <img
              src={recognitionImage}
              alt="Community members presenting recognition on stage"
              className="events-page__hero-image-side"
            />
          </figure>
        </div>
      </section>

      <section
        className="section section-soft events-page__gathering"
        aria-labelledby="community-gathering-title"
      >
        <div className="section-shell">
          <div className="events-page__gathering-header">
            <div>
              <p className="eyebrow">More than a school day</p>
              <h2
                id="community-gathering-title"
                className="events-page__heading"
              >
                Language is learned in class. Belonging is built together.
              </h2>
            </div>
            <p className="events-page__gathering-lead">
              Every gathering gives children another way to experience Tamil
              as something living, expressive, and shared across generations.
            </p>
          </div>

          <div className="events-page__gathering-grid">
            {gatheringThemes.map((theme, index) => (
              <article className="feature-card" key={theme.title}>
                <span className="feature-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>
                  {theme.title}
                  <span className="feature-icon" aria-hidden="true">
                    <i className={`bi ${theme.icon}`} />
                  </span>
                </h3>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="community-moments"
        className="section anchor-section events-page__moments"
        aria-labelledby="community-moments-title"
      >
        <div className="section-shell">
          <div className="events-page__moments-header">
            <div>
              <p className="eyebrow">Community moments</p>
              <h2
                id="community-moments-title"
                className="events-page__heading"
              >
                Joy worth remembering.
              </h2>
            </div>
            <p className="events-page__moments-lead">
              A look at the performances, celebrations, friendships, and
              milestones that shape our school year.
            </p>
            <span className="events-page__moments-count">
              {EventImage.length} photos
            </span>
          </div>

          <div className="events-page__gallery">
            {visiblePhotos.map((item, index) => {
              const cyclePosition = index % 6;
              const isWide5 = cyclePosition === 0 || cyclePosition === 5;
              const isWide7 = cyclePosition === 1 || cyclePosition === 4;
              const isQuadStart = index % 4 === 0;
              return (
                <button
                  type="button"
                  className={`group events-page__photo ${
                    isWide5
                      ? "events-page__photo--wide5"
                      : isWide7
                        ? "events-page__photo--wide7"
                        : "events-page__photo--wide4"
                  } ${
                    isQuadStart
                      ? "events-page__photo--quad"
                      : "events-page__photo--single"
                  }`}
                  key={item.image}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open photo: ${getPhotoLabel(index)}`}
                >
                  <img
                    src={item.image}
                    alt={getPhotoLabel(index)}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="events-page__photo-image"
                  />
                  <span className="ease events-page__photo-badge">
                    <i className="bi bi-arrows-fullscreen" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>

          {!showAllPhotos && EventImage.length > INITIAL_PHOTO_COUNT && (
            <div className="events-page__more">
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setShowAllPhotos(true)}
              >
                Show all {EventImage.length} photos
                <i className="bi bi-images" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section section-soft events-page__voices">
        <div className="section-shell">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">Watch and listen</p>
            <h2>Voices from our school.</h2>
            <p>
              Student performances preserve traditions while giving every
              learner a chance to shine.
            </p>
          </div>
          <div className="events-page__voices-layout">
            <iframe
              src="https://www.youtube.com/embed/pKHmvMrTXLA?si=hL9jblmIuROiawND"
              title="Tamil Thai Vazhthu performed by Acton Tamil School children"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
              className="events-page__voices-video"
            />
            <div>
              <span className="events-page__voices-label">
                School year celebration
              </span>
              <h3 lang="ta" className="events-page__voices-title">
                தமிழ்த்தாய் வாழ்த்து
              </h3>
              <p className="events-page__voices-copy">
                Tamil Thai Vazhthu performed by Acton Tamil School students to
                mark a successful year of learning.
              </p>
              <a
                className="text-link"
                href="https://www.youtube.com/@actontamilschool8567"
                target="_blank"
                rel="noreferrer"
              >
                Visit our YouTube channel
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section events-page__connect">
        <div className="section-shell events-page__connect-card">
          <div>
            <p className="eyebrow eyebrow-light">Stay connected</p>
            <h2 className="events-page__connect-title">
              Share in what our community does next.
            </h2>
            <p className="events-page__connect-copy">
              Follow school celebrations and student moments, or join the
              families learning with us.
            </p>
          </div>
          <div className="events-page__connect-actions">
            <a
              className="button button-light events-page__connect-button"
              href="https://www.facebook.com/ActonTamilSchool/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
              Follow on Facebook
            </a>
            <a
              className="button events-page__connect-button--outline"
              href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta"
              target="_blank"
              rel="noreferrer"
            >
              Enroll now
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ImageModal
        show={selectedIndex !== null}
        onHide={() => setSelectedIndex(null)}
        image={selectedPhoto?.image}
        caption={
          selectedIndex === null ? "" : getPhotoLabel(selectedIndex)
        }
        current={selectedIndex === null ? 0 : selectedIndex + 1}
        total={EventImage.length}
        onPrevious={() => selectAdjacentPhoto(-1)}
        onNext={() => selectAdjacentPhoto(1)}
      />
    </main>
  );
};

export default EventsLayout;
