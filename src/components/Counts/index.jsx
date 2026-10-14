import "./index.css";

const stats = [
  { value: "100+", label: "Students learning together" },
  { value: "25+", label: "Volunteer educators" },
  { value: "15+", label: "Community events" },
];

const Counts = () => {
  return (
    <div
      className="counts"
      aria-label="Acton Tamil School at a glance"
    >
      {stats.map((stat) => (
        <div
          className="counts__item"
          key={stat.label}
        >
          <strong className="counts__value">
            {stat.value}
          </strong>
          <span className="counts__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Counts;
