import { useState } from "react";

export default function ImageG({ source }) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    const newIndex = (index + 1) % source.length;
    setIndex(newIndex);
  };
  return (
    <div className="d-flex flex-column">
      <img src={source[index].url} />
      <section>
        <button onClick={handleClick} className="btn btn-primary ">
          next
        </button>
      </section>
    </div>
  );
}
