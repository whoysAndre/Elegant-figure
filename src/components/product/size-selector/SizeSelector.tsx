import clsx from "clsx";

interface Props{
  selectedSize: string;
  avaibleSize: string[];
}


export const SizeSelector = ({selectedSize, avaibleSize}:Props) => {
  
  
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex ">
        {
          avaibleSize.map(size=>(
            <button 
              className={
                clsx(
                  "mx-2 hover:underline text-lg",
                  {
                    "underline": size === selectedSize
                  }
                )
              }
              key={size}
            >
              {size}
            </button>
          ))
        }

      </div>
    </div>
  )
}
