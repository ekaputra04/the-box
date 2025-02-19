import { Button } from "./ui/button";

export default function About() {
  return (
    <>
      <div className="grid lg:grid-cols-7 lg:px-32 py-16" id="about">
        <img
          src="../../public/images/About.png"
          alt="About"
          className="col-span-5"
        />
        <div className="relative space-y-6 col-span-2 bg-blue-900 mt-32 -ml-32 p-8 w-96 h-fit text-white">
          <h2 className="font-semibold text-xl">About Us</h2>
          <div className="space-y-4">
            <p>
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p>
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
          </div>
          <Button className="bg-white hover:bg-blue-50 text-blue-900">
            More on Our History
          </Button>
        </div>
      </div>
    </>
  );
}
