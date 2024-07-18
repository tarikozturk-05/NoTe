import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export const Heroes = () =>{
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div style={{backgroundColor:"#30BDCB"}} className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full">
                    <Image
                    src="/project-main-icon.png"
                    fill
                    className="object-contain"
                    alt="HawHaw"
                    />

                </div>
                
            </div> 
            <div className="pt-5">
                <Button>
                Giriş Yap
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
            </div>
            
        </div>
    )
}