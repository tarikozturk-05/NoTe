import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const Logo = () =>{
    return(
        <div className="hidden md:flex items-center gap-x-2 w-[100px]">
            <Image 
            src="/project-main-icon.png"
            height="40"
            width="40"
            alt="HawHaw"
            />
            <p className={cn("font-semibold", font.className)}>
                LUCITOR
            </p>
        </div>
    )
}