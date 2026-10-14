import { useState } from "react";
import "./index.css";
import { FAQList } from "./DynamicQuestion";

const previewCount = 7;

const FAQuestion = () => {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const visibleQuestions = showAll
    ? FAQList
    : FAQList.slice(0, previewCount);

  return (
    <div className="section-shell faq">
      <div className="section-heading faq__heading">
        <p className="eyebrow">Good to know</p>
        <h2>Questions from families, answered.</h2>
        <p>
          Find quick details about classes, registration, tuition, placement,
          and volunteering.
        </p>
        {/* <a className="text-link" href="mailto:actontamilschool@gmail.com">
          Still have a question?
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </a> */}
      </div>
      <div>
        <div className="faq__list">
          {visibleQuestions.map((value, index) => (
            <details
              open={openIndex === index}
              key={value.Question}
              className="group faq__item"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? -1 : index);
                }}
                className="faq__summary"
              >
                {value.Question}
              </summary>
              <div className="faq__answer">
                {value.Answer}
              </div>
            </details>
          ))}
        </div>
        <button
          type="button"
          className="faq__toggle"
          onClick={() => setShowAll((current) => !current)}
          aria-expanded={showAll}
        >
          {showAll
            ? "Show fewer questions"
            : `View all ${FAQList.length} questions`}
          <i
            className={`bi ${showAll ? "bi-chevron-up" : "bi-chevron-down"}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default FAQuestion;
