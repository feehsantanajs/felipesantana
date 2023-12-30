import Image from "next/image";

interface RelevantExperiencesProps {
  company: string;
  position: string;
  duration: string;
  image?: string;
}

export function RelevantExperiences({
  company,
  position,
  duration,
  image,
}: RelevantExperiencesProps) {
  return (
    <div className="flex gap-3 ">
      <div className="rounded-full bg-gradient-to-br from-purple-900 to-blue-900 p-1 h-10 w-10">
        <Image
          src={`/assets/images/companies/${image}`}
          className="rounded-full"
          width={40}
          height={40}
          alt="Company Image"
        />
      </div>
      <div className="flex flex-col">
        <strong>{company}</strong>
        <span>{position}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}
