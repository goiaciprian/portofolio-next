import Image from "next/image";

export function ProjectSide({
  description,
  image,
  imageURL,
  side,
}: {
  description: string;
  image: string;
  imageURL: string;
  side: "left" | "right";
}) {
  return (
    <div className="pt-5">
      <div>
        <label htmlFor="description" className="text-2xl font-semibold">
          Description {side}
        </label>
        <p id="description" className="text-xl pt-3">
          {description}
        </p>
      </div>
      <div className="pt-5">
        <label htmlFor="image" className="text-2xl font-semibold pb-3">
          Image {side}
        </label>
        <Image
          width="150"
          height="150"
          src={image}
          id="image"
          alt="project image"
        />
      </div>
      <div className="pt-5">
        <label className="text-2xl font-semibold">Image URL {side}</label>
        <p className="text-xl pt-3">{imageURL}</p>
      </div>
    </div>
  );
}
