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
        <div className="px-8 md:px-16 lg:px-32">
          <p className="flex justify-center items-center lg:w-1/2 h-screen font-semibold text-blue-900 text-4xl lg:text-7xl">
            Building things is our mission.
          </p>
        </div>
      </div>
    </>
  );
}
