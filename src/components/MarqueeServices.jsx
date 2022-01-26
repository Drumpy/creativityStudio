import Marquee from "react-fast-marquee";

const services = [
  "Design",
  "Web Development",
  "Branding",
  "Video Production",
  "Video Editing",
];

const servicesStr = services.join(" / ");

export function MarqueeServices() {
  return (
    <>
      <div className="absolute top-[200px] -left-[250px] w-[150%] rotate-[335deg] hidden lg:block pointer-events-none -z-0">
        <Marquee
          gradient={false}
          speed={80}
          className="text-[150px] text-[#0c1f5a31] leading-none uppercase whitespace-nowrap font-[Bauziet] overflow-hidden"
        >
          {servicesStr}
        </Marquee>
      </div>
      <div className="absolute top-[390px] -left-[250px] w-[150%] rotate-[335deg] hidden lg:block pointer-events-none -z-0">
        <Marquee
          gradient={false}
          speed={80}
          className="text-[150px] text-[#0c1f5a31] leading-none uppercase whitespace-nowrap font-[Bauziet] overflow-hidden"
          direction="right"
        >
          {servicesStr}
        </Marquee>
      </div>
    </>
  );
}
