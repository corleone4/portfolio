import { useState } from "react";

export default function ImageFrame({ photo, handleSpoiler }) {
  const [isSpoiler, setIsSpoiler] = useState(true);

  function handleSpoiler() {
    setIsSpoiler((prevState) => !prevState);
  }

  return (
    <div className="relative">
      {isSpoiler ? (
        <>
          <div className="absolute inset-0 rounded-xl transition-all backdrop-blur-xl bg-black/30"></div>
          <img src={photo} className="w-screen h-full object-cover rounded-xl" />
          <button onClick={handleSpoiler} className="absolute inset-0 flex items-center justify-center rounded-xl hover:bg-black/40 transition-all">
            <span
              className="text-white font-semibold bg-black/40 p-1 rounded-4xl px-3 text-lg"
            >
              SPOILER
            </span>
          </button>
        </>
      ) : (
        <img src={photo} onClick={handleSpoiler} className="w-screen transition-all h-full object-cover rounded-xl" />
      )}
    </div>
  );
}
