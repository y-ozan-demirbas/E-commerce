export default  function VideoBox({ videoUrl }) {
  return (
    <div className="video-box">
      <section className="w-full flex justify-center py-16">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            src="https://www.youtube.com/embed/3EIAViUKWfc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
}