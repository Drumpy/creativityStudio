import Card from "./Card";
import design from "/images/design-3d.png";
import web from "/images/web-development.png";
import video from "/images/video-editing.png";

export function Services() {
  return (
    <div className="xl:container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-[Inter Var] font-bold uppercase text-[#06102D] mb-4">
        Our Services
      </h2>
      <p className="text-xl lg:text-2xl text-[#0C1F5A] mb-32 md:mb-16">
        This is a subtitle for Our Services section.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-24 md:mt-36 px-2 space-y-16 md:space-y-0">
        <Card
          image={web}
          title="Web Development"
          description="This is a description for the service listed above."
        />
        <Card
          image={design}
          title="Design"
          description="This is a description for the service listed above."
        />
        <Card
          image={video}
          title="Video Editing"
          description="This is a description for the service listed above."
        />
      </div>
    </div>
  );
}
