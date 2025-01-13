'use client';
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import Image from "next/image";
import teamPhoto from '@/assets/team.png';

export default function MeetTheTeam () {
    return (
        <>
        <NavbarCommon />
        <div className="relative">
            <Image src={teamPhoto} alt="Team Photo" className="max-w-full object-cover md:h-" />
        </div>
        </>
    );
}