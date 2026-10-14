import "./index.css";
import { useState } from "react";
import anniversaryLogo from "../../assets/images/anniversary-10th-3d.webp";

const stories = [
  { role: "Student", title: "A conversation with Paati", text: "The first time I spoke to my grandmother in Tamil without asking for help, our call lasted a little longer." },
  { role: "Parent", title: "Tamil came home with us", text: "A song from Sunday class became the song our child sang all week. Soon, we were singing along too." },
  { role: "Teacher", title: "From a whisper to a story", text: "A child who once answered in a whisper stood up to tell a story. The whole classroom listened." },
  { role: "Student", title: "My first moment on stage", text: "I was nervous before the performance. Then I saw my friends beside me, and remembered we had practised together." },
  { role: "Parent", title: "More than Sunday mornings", text: "We came looking for Tamil lessons. We found families who shared our traditions and friendships that grew beyond the classroom." },
  { role: "Teacher", title: "The joy of one new word", text: "Sometimes the best moment is a small one: a new word remembered, a sentence finished, a hand raised with confidence." },
  { role: "Student", title: "Letters that became my name", text: "Writing my name in Tamil made the letters feel like they belonged to me. I wanted to show everyone at home." },
  { role: "Parent", title: "A tradition of our own", text: "Getting ready for the school’s Pongal celebration became a family tradition, with stories from our own childhood along the way." },
  { role: "Teacher", title: "Learning goes both ways", text: "My students bring wonderful questions. Finding answers together reminds me why I love teaching our language." },
  { role: "Student", title: "A place to belong", text: "My favourite memory is laughing with friends after class. Tamil school became a place where I could just be myself." },
];
const filters = ["All stories", "Student", "Parent", "Teacher"];

export default function Anniversary() {
  const [filter, setFilter] = useState("All stories");
  const [page, setPage] = useState(0);
  const visible = stories.map((story, index) => ({ ...story, number: index + 1 })).filter(story => filter === "All stories" || story.role === filter);
  return (
    <section
      id="anniversary"
      className="section-shell anchor-section anniversary"
      aria-labelledby="anniversary-title"
    >
      <div className="anniversary__hero">
        <div>
          <p className="anniversary__eyebrow">
            <span aria-hidden="true">✦</span> A DECADE TO CELEBRATE
          </p>
          <h2
            id="anniversary-title"
            className="anniversary__title"
          >
            Rooted in Tamil.
            <br />
            <em className="anniversary__em">
              Growing together.
            </em>
          </h2>
          <p
            className="anniversary__tamil"
            lang="ta"
          >
            தமிழோடு வளர்ந்த பத்து ஆண்டுகள்
          </p>
          <p className="anniversary__lead">
            Ten years of little beginnings, lasting friendships, and a
            language that brings us closer. A celebration of everyone who
            makes Acton Tamil School feel like home.
          </p>
          <a href="#anniversary-stories" className="button button-primary">
            Discover the stories{" "}
            <i className="bi bi-arrow-down-right" aria-hidden="true" />
          </a>
          <p className="anniversary__motto">
            OUR LANGUAGE <span className="anniversary__motto-star">✦</span> OUR ROOTS{" "}
            <span className="anniversary__motto-star">✦</span> OUR FUTURE
          </p>
        </div>
        <div className="anniversary__emblem">
          <img
            src={anniversaryLogo}
            alt="Acton Tamil School 10th anniversary emblem"
            width="1600"
            height="1600"
            loading="lazy"
            decoding="async"
            className="anniversary__emblem-img"
          />
          <span className="anniversary__emblem-caption">
            A milestone made possible by our community.
          </span>
        </div>
      </div>
      <div
        id="anniversary-stories"
        className="anniversary__stories"
        aria-labelledby="stories-title"
      >
        <div className="anniversary__stories-head">
          <div>
            <p className="anniversary__eyebrow">
              THE PEOPLE BEHIND THE JOURNEY
            </p>
            <h3
              id="stories-title"
              className="anniversary__stories-title"
            >
              10 years. <em className="anniversary__em">10 stories.</em>
            </h3>
          </div>
          <p className="anniversary__stories-note">
            Small moments.
            <br />A lasting place in our hearts.
          </p>
        </div>
        <div
          className="anniversary__filters"
          role="group"
          aria-label="Filter memories by storyteller"
        >
          {filters.map(item => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => { setFilter(item); setPage(0); }}
              className="anniversary__filter"
            >
              {item === "All stories" ? item : `${item}s`}
            </button>
          ))}
        </div>
        <p
          className="anniversary__status"
          role="status"
        >
          {Math.min(page * 6 + 1, visible.length)} to{" "}
          {Math.min((page + 1) * 6, visible.length)} of {visible.length}{" "}
          stories
        </p>
        <div className="anniversary__grid">
          {visible.slice(page * 6, (page + 1) * 6).map(story => (
            <article
              className="anniversary__card"
              key={story.number}
            >
              <div className="anniversary__card-head">
                <span className="anniversary__card-number">
                  {String(story.number).padStart(2, "0")}
                </span>
                <span>{story.role} perspective</span>
                <i className="bi bi-chat-quote anniversary__card-icon" aria-hidden="true" />
              </div>
              <h4 className="anniversary__card-title">
                {story.title}
              </h4>
              <p className="anniversary__card-text">
                {story.text}
              </p>
            </article>
          ))}
        </div>
        {visible.length > 6 && (
          <nav
            className="anniversary__pager"
            aria-label="Story pages"
          >
            <button
              type="button"
              aria-current={page === 0 ? "page" : undefined}
              onClick={() => setPage(0)}
              className="anniversary__page"
            >
              1
            </button>
            <button
              type="button"
              aria-current={page === 1 ? "page" : undefined}
              onClick={() => setPage(1)}
              className="anniversary__page"
            >
              2
            </button>
          </nav>
        )}
        <div className="anniversary__outro">
          <span className="anniversary__outro-star" aria-hidden="true">✦</span>
          <p className="anniversary__outro-text">
            Every family adds a chapter.
            <br />
            <strong className="anniversary__outro-strong">
              Thank you for being part of ours.
            </strong>
          </p>
          <span className="anniversary__outro-star" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  );
}
