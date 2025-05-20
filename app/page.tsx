export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <img src="./Benjamin.png" alt="Benjamin" className="mt-150" />

      {/* Spotify Player in bottom-right */}
      <div className="absolute bottom-4 right-4 w-120 h-100">
        <iframe
          style={{ borderRadius: "5px" }}
          src="https://open.spotify.com/embed/playlist/2lBBaqq6qwFaejmTE0HL9i?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
