import "./Cover.css";

const Cover = ({ onFlip }) => {
  return (
    <div className="Cover">
      <h1 className="name">HEO YERIM</h1>
      <h2 className="subtitle">&lt;FrontEnd Developer /&gt;</h2>
      <h3 className="portfolio">Portfolio</h3>

      <p className="description">
        This is just the beginning of my journey.
        <br />
        Let’s dive in.
      </p>

      <p className="clickText">
        Click to &lt;Top Secret /&gt; stamp to proceed.
      </p>

      <button className="topSecret" onClick={onFlip}>
        TOP SECRET
      </button>
    </div>
  );
};

export default Cover;
