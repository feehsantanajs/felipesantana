import Image from "next/image";

interface RelevantPostProps {
  title: string;
  description?: string;
  image: string;
}
export function RelevantPost({ image, title, description }: RelevantPostProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={`/assets/images/posts/${image}`}
        width={100}
        height={100}
        alt="Image about Post"
      />
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}
