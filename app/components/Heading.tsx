"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className="text-2xl font-bold">{title}</div>{" "}
      <div className="font-light text-neutral-500">{subtitle}</div>{" "}
      <div className="border-b-[1px] border-neutral-200 mt-3"></div>
    </div>
  );
};

export default Heading;
