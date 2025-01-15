'use client';
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { Red_Rose } from "next/font/google";

const redRose = Red_Rose({
    variable: "--color-red-rose",
    subsets: ["latin"],
});

export const MemberCard = (props: {
    isPositionBlack?: boolean;
    isNameOrange?: boolean;
    isBorder?: boolean;
    memberName?: string;
    memberImage: StaticImageData;
    memberPosition?: string;
    className?: string;
}) => {
    const { isPositionBlack, isNameOrange, isBorder, memberName, memberImage, memberPosition, className } = props;

    return (
        <div className={twMerge("flex flex-col items-center", className)}>
            <div className="flex flex-col items-center">
                {/* Wrap memberPosition with a container */}
                <div
                    className={twMerge(
                        "flex justify-center px-[9.7px] md:px-[42.2px] w-full md:w-full",
                        isPositionBlack ? "bg-black text-white font-semibold" : "bg-white text-orange-600 font-semibold"
                    )}
                >
                    <span
                        className={twMerge(
                            "text-center text-xl",
                            redRose.className
                        )}
                    >
                        {memberPosition}
                    </span>
                </div>
                {/* Image */}
                <Image
                    src={memberImage}
                    alt={`${memberName}-photo`}
                    className={twMerge(
                        "size-32 md:size-48 object-cover w-full md:w-full",
                        isBorder ? "border-4 border-orange-600" : "border-4 border-black"
                    )}
                />
                {/* Wrap memberName with a container */}
                <div
                    className="flex justify-center w-full"
                >
                    <p
                        className={twMerge(
                            redRose.className,
                            "text-xl md:text-2xl tracking-wide text-center font-semibold",
                            isNameOrange ? "text-orange-600" : "text-white"
                        )}
                    >
                        {memberName}
                    </p>
                </div>
            </div>
        </div>
    );
};
