'use client';
import { twMerge } from "tailwind-merge";
import { Red_Rose } from "next/font/google";
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Inter } from "next/font/google";

const redRose = Red_Rose({
    variable: "--color-red-rose",
    subsets: ["latin"],
})
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: "400",
})

export const Footer = () => {
    return (
        <>
        <div className="bg-orange-600 py-5"></div>
        <div className={twMerge("bg-gradient-to-b from-[#1e1e1e] via-[#252525] to-[#0f0f0f] flex flex-col pt-6 px-4 text-white", redRose.className)}>
            <span className={twMerge('text-2xl font-extrabold',redRose.className)}>Team Solarium</span>
            <div className="grid grid-rows-1 md:hidden pt-20 pb-4">
                <div className="flex flex-col">
                <span className="flex text-xl tracking-wide font-semibold">Location</span>
                <p className="text-lg font-medium py-4">Pimpri Chinchwad College of Engineering, Pune</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.278799271737!2d73.7598889742414!3d18.651481082467612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9343fc6624b%3A0xdcefadbd70227776!2sTeam%20Solarium!5e0!3m2!1sen!2sin!4v1736699391290!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
                <hr className="border-white/30 mt-6" />
                <div className="flex flex-col py-8">
                    <span className="flex text-xl tracking-wide font-semibold">Contact Us</span>
                    <p className="py-4 text-lg font-light">We&apos;d be happy to hear from you! If you have any questions, comments, or suggestions, don&apos;t hesitate to reach out.</p>
                    <p className="py-2 text-lg font-light">We&apos;ll make sure to respond as quickly as possible!</p>
                    <span className="py-4 text-lg font-medium">Aryan Jadhav: +91 94224 23002</span>
                    <span className="text-lg font-medium">Raj Dhanjode: +91 77090 22557</span>
                    <span className="py-4 text-lg font-medium">Email: teamsolarium@gmail.com</span>
                    <div className="py-7 flex flex-col">
                        <span className="text-xl tracking-wide font-semibold">Connect with us</span>
                        <div className="py-4 flex flex-row gap-2">
                            <a className="p-0 m-0" href="https://www.linkedin.com/company/team-solarium/" target="__blank">
                                <Linkedin className="size-8" />
                            </a>
                            <a className="p-0 m-0" href="https://www.instagram.com/teamsolarium_india/" target="__blank">
                                <Instagram className="size-8" />
                            </a>
                            <a className="p-0 m-0" href="https://www.instagram.com/teamsolarium_india/" target="__blank">
                                <Facebook className="size-8" />
                            </a>
                        </div>
                        <div className={twMerge("pt-10 text-white/60 text-center flex flex-col", inter.className)}>
                            <span>Developed with 💗 by GDGC PCCoE</span>
                            <span>&copy; GDGC 2025</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="hidden md:grid md:grid-cols-2">
                    <div className="flex flex-col">
                    <span className="flex text-xl tracking-wide font-semibold">Location</span>
                    <p className="text-lg font-medium py-4">Pimpri Chinchwad College of Engineering, Pune</p>
                    <iframe className="pr-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.278799271737!2d73.7598889742414!3d18.651481082467612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9343fc6624b%3A0xdcefadbd70227776!2sTeam%20Solarium!5e0!3m2!1sen!2sin!4v1736699391290!5m2!1sen!2sin" width="100%" height="50%" loading="lazy" ></iframe>
                    </div>
                    <div className="border-l-[2px] border-white/30 rounded-xs px-6">
                        <div className="flex flex-col py-8">
                        <span className="flex text-xl tracking-wide font-semibold">Contact Us</span>
                        <p className="py-4 text-lg font-light">We&apos;d be happy to hear from you! If you have any questions, comments, or suggestions, don&apos;t hesitate to reach out.</p>
                        <p className="py-2 text-lg font-light">We&apos;ll make sure to respond as quickly as possible!</p>
                        <span className="py-4 text-lg font-medium">Aryan Jadhav: +91 94224 23002</span>
                        <span className="text-lg font-medium">Raj Dhanjode: +91 77090 22557</span>
                        <span className="py-4 text-lg font-medium">Email: teamsolarium@gmail.com</span>
                        <div className="py-7 flex flex-col">
                            <span className="text-xl tracking-wide font-semibold">Connect with us</span>
                            <div className="py-4 flex flex-row gap-2">
                                <a className="p-0 m-0" href="https://www.linkedin.com/company/team-solarium/" target="__blank">
                                    <Linkedin className="size-8" />
                                </a>
                                <a className="p-0 m-0" href="https://www.instagram.com/teamsolarium_india/" target="__blank">
                                    <Instagram className="size-8" />
                                </a>
                                <a className="p-0 m-0" href="https://www.instagram.com/teamsolarium_india/" target="__blank">
                                    <Facebook className="size-8" />
                                </a>
                            </div>
                        </div>
                </div>
                    </div>
            </div>
            <div className={twMerge("hidden md:flex pt-10 pb-2 text-white/60 text-center flex-col text-sm", inter.className)}>
                                <span>Developed with 💗 by GDGC PCCoE</span>
                                <span>&copy; GDGC 2025</span>
                            </div>
        </div>
        </>
    );
}