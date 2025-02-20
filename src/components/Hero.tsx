export default function Hero() {
  return (
    <>
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: "url(/images/Hero.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:px-32">
          <p className="flex justify-center items-center w-1/2 h-screen font-semibold text-blue-900 text-7xl">
            Building things is our mission.
          </p>
        </div>
      </div>
    </>
  );
}
