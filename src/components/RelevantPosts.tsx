import Image from "next/image";

interface RelevantPostProps {
  title: string;
  description?: string;
  image: string;
  date: string;
}
export function RelevantPosts({
  date,
  image,
  title,
  description,
}: RelevantPostProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={`/assets/images/posts/${image}`}
        width={100}
        height={100}
        alt="Image about Post"
      />
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">{title}</h1>
          <span>{date}</span>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}
