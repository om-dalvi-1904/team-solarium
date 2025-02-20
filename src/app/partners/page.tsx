import PartnerCard from "@/components/sections/PartnerCard"
import Image from "next/image"
import teamPhoto from '@/assets/team_mem/legacyImage.png'
import { NavbarCommon } from "@/components/sections/NavbarCommon"
import { Footer } from "@/components/sections/Footer"
import { PartnerGrid } from "@/components/ui/PartnerGrid"

export default function ExamplePage() {
  const pccoeLogo = [
    {
      url: "/logos/pccoe2Logo.png",
      alt: "Air France logo",
    },
  ]
  const mitsubaLogo = [
    {
      url: "/logos/mitsubaLogo.svg",
      alt: "Air France logo",
    },
  ]

  const goldLogos = [
    {
      url: "/logos/enproLogo.webp",
      alt: "Air France logo",
    },
    {
        url: "/logos/adityaLogo.jpeg",
        alt: "Air France logo",
      },
      {
        url: "/logos/gefranLogo.jpg",
        alt: "Air France logo",
      },
      {
        url: "/logos/cpLogo.png",
        alt: "Air France logo",
      },
  ]

  const silverLogos = [
    {
      url: "/logos/boschLogo.webp",
      alt: "Air France logo",
    },
    {
      url: "/logos/anucoolLogo.png",
      alt: "Air France logo",
    },
    {
      url: "/logos/supergenLogo.png",
      alt: "Air France logo",
    },
    {
      url: "/logos/atiLogo.png",
      alt: "Air France logo",
    },
    {
      url: "/logos/kvaserLogo.png",
      alt: "Air France logo",
    }
  ]

  return (
    <>
    <main className="min-h-screen">
        <NavbarCommon />
    <div className="relative h-[60vh] w-full">
        <Image
          src={teamPhoto}
          alt="Team members in racing suits"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold tracking-tight text-white/65 mb-8">PARTNERS</h1>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-white/70">
          Each year, we strive to build our most efficient solar car yet, packed with cutting-edge technological innovations. We showcase the power of solar energy by competing in one of the toughest challenges in the world—the SASOL Solar Challenge, a grueling endurance race across South Africa, powered solely by the sun.
          </p>
        </div>
        </div>
        <p className="text-center text-xl text-orange-500 font-semibold">PLATINUM PARTNERS</p>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
      <PartnerCard
        partnerLevel="PLATINUM PARTNER"
        title="PCCOE"
        description="Pimpri Chinchwad College of Engineering (PCCoE) and Team Solarium share a unified vision of fostering innovation and sustainability. PCCoE&apos;s mission to develop globally competent and ethical professionals aligns seamlessly with Team Solarium&apos;s commitment to advancing solar energy solutions. Together, we strive to create a sustainable future through education and innovation."
        logos={pccoeLogo}
        className="flex justify-center items-center"
      />
        <PartnerCard
        partnerLevel="PLATINUM PARTNER"
        title="Mitsuba"
        description="Mitsuba Corporation&apos;s commitment to technology in harmony with society and the environment aligns with Team Solarium&apos;s mission to advance solar mobility. By supporting Team Solarium, Mitsuba fosters sustainable transportation solutions, reflecting its corporate philosophy of providing pleasure and peace of mind through innovative, environmentally friendly technologies that benefit society."
        logos={mitsubaLogo}
        className="flex justify-center items-center"
      />
    </div>
    <p className="text-center text-xl text-orange-500 font-semibold">GOLD & SILVER PARTNERS</p>
    <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-6">
    <PartnerCard
        partnerLevel="GOLD PARTNERS"
        title=""
        description="Team Solarium partners with Enpro Industries, Aditya Birla Advanced Materials, Gefran, and Chicago Pneumatics to drive innovation in solar mobility. Together, we advance clean energy, automation, and advanced materials, fostering sustainable transportation. Our shared commitment to efficiency and renewable technology powers a greener future through cutting-edge engineering and collaboration."
        logos={goldLogos}
        className="grid grid-cols-2"
      />
    <PartnerCard
        partnerLevel="SILVER PARTNERS"
        title=""
        description="Team Solarium collaborates with Bosch, Anucool Industries, SuperGen, ATI Technologies, and KVASER to drive solar mobility innovation. Their expertise in engineering, materials, and automotive solutions empowers our pursuit of clean energy. Together, we push technological boundaries, optimize performance, and advance sustainable transportation for a cleaner, more energy-efficient future."
        logos={silverLogos}
        className="grid grid-cols-2"
      />
    </div>
    <div className="px-6 py-4 text-orange-500 font-semibold">
    <p className="text-center text-xl">BRONZE PARTNERS</p>
    <PartnerGrid />
    </div>
    <Footer />
    </main>
    </>
  )
}

