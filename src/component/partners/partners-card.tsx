import Image from "next/image";

export interface PartnersCardProps{
    image:string;
    title:string;
}

export const PartnersCard:React.FC<PartnersCardProps> =({image, title}) =>{
    return(
        <div className="">
            <div className="aspect-w-1 aspect-h-1">
                <Image src="/image/"  alt="" fill className="object-cover"/>
            </div>
            <div className="">
                <h1 className="md:text-xl text-lg font-ubuntu underline">dddd</h1>
            </div>
        </div>
    )
}