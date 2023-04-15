import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);
  const a = 0;

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </div>
  );
};

export default ClickCounter;
