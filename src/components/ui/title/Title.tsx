import { titleFont } from "@/config/fonts";


interface Props{
  title: string,
  subtitle?:string,
  className?:string 
}

export const Title = ({title, subtitle, className}:Props) => {
  return (
    <div className={`mt-3 ${className} px-5 sm:px-0`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-5`}>
        {title}
      </h1>
      {
        subtitle && (
          <h3 className={`${titleFont.className} text-xl mb-5 font-normal`}>{subtitle}</h3>
        )
      }

    </div>
  );
};
