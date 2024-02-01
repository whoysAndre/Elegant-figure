import Image from "next/image"


interface Props{
  src?: string;
  alt: string;
  className: React.StyleHTMLAttributes<HTMLIFrameElement>['className'];
  width: number;
  height: number;
}

export const ProductImage = ({src,width,height,alt,className}:Props) => {
  
  const localSrc = (src)
    ? src.startsWith('http')
      ?src
      : `/products/${src}`
    : '/imgs/placeholder.jpg'
  
  return (
    <Image 
      src={localSrc} 
      width={width} 
      height={height} 
      alt={alt} 
      className={className}
    />
  )
}
