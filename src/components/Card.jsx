export default function Card({ title, description, image }) {
  return (
    <div className="bg-[#E8EDFC] flex flex-col rounded-lg pt-32 pb-12 px-6 text-center custom-shadow relative">
      <img
        src={image}
        className="-top-20 w-48 absolute self-center drop-shadow-2xl floating"
      />
      <h3 className="text-2xl font-bold text-[#0C1F5A] uppercase mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
