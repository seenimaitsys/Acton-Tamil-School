import { useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";

const ImageModal = ({
  image,
  caption,
  current,
  total,
  onPrevious,
  onNext,
  show,
  onHide,
}) => {
  // Handle keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!show) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && onHide) {
        onHide();
      } else if (event.key === "ArrowLeft") {
        onPrevious();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onHide, onNext, onPrevious, show]);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (!show) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="image-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-photo-title"
      onClick={(e) => {
        if (e.target === e.currentTarget && onHide) {
          onHide();
        }
      }}
    >
      <div className="image-modal-dialog">
        {/* Header */}
        <div className="image-modal-header">
          <h2 id="event-photo-title" className="image-modal-title">
            {caption}
          </h2>
          <span className="image-modal__counter" aria-live="polite">
            {current} / {total}
          </span>
          {onHide && (
            <button
              type="button"
              className="image-modal-close"
              aria-label="Close dialog"
              onClick={onHide}
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Stage / Body */}
        <div className="image-modal__stage">
          <img src={image} alt={caption} className="image-modal__image" />
          <button
            type="button"
            className="ease image-modal__nav image-modal__nav--prev"
            aria-label="View previous photo"
            title="Previous photo"
            onClick={onPrevious}
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="ease image-modal__nav image-modal__nav--next"
            aria-label="View next photo"
            title="Next photo"
            onClick={onNext}
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};

export default ImageModal;
