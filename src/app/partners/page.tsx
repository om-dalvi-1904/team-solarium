import PartnerCard from "@/components/sections/PartnerCard"
import Image from "next/image"
import teamPhoto from '@/assets/team_mem/legacyImage.png'
import { NavbarCommon } from "@/components/sections/NavbarCommon"
import { Footer } from "@/components/sections/Footer"
import { PartnerGrid } from "@/components/ui/PartnerGrid"

export default function ExamplePage() {
  const airFranceLogos = [
    {
      url: "/placeholder.svg?text=AirFrance",
      alt: "Air France logo",
    },
  ]

  const goldLogos = [
    {
      url: "/placeholder.svg?text=AirFrance",
      alt: "Air France logo",
    },
    {
        url: "/placeholder.svg?text=AirFrance",
        alt: "Air France logo",
      },
      {
        url: "/placeholder.svg?text=AirFrance",
        alt: "Air France logo",
      },
      {
        url: "/placeholder.svg?text=AirFrance",
        alt: "Air France logo",
      },
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
            Each year we aim to build the most efficient solar car to date, filled to the brim with the newest
            technological innovations research has to offer. We try to show the capabilities of solar energy by
            partaking in one of the most difficult challenges in the world; a 3000-kilometer race through the scorching
            desert of Australia, driven only by the power of the sun.
          </p>
        </div>
        </div>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
      <PartnerCard
        partnerLevel="DIAMOND PARTNER"
        title="Investing in Sustainable Transportation"
        description="With a shared passion for transportation and innovation, Air France KLM Martinair Cargo supports our mission as our logistics partner. Their commitment to innovation and sustainability in transportation perfectly aligns with our goal of driving technological advancements and promoting sustainability."
        logos={airFranceLogos}
      />
        <PartnerCard
        partnerLevel="DIAMOND PARTNER"
        title="Investing in Sustainable Transportation"
        description="With a shared passion for transportation and innovation, Air France KLM Martinair Cargo supports our mission as our logistics partner. Their commitment to innovation and sustainability in transportation perfectly aligns with our goal of driving technological advancements and promoting sustainability."
        logos={airFranceLogos}
      />
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-6">
    <PartnerCard
        partnerLevel="GOLD PARTNERS"
        title="Investing in Sustainable Transportation"
        description="With a shared passion for transportation and innovation, Air France KLM Martinair Cargo supports our mission as our logistics partner. Their commitment to innovation and sustainability in transportation perfectly aligns with our goal of driving technological advancements and promoting sustainability."
        logos={goldLogos}
      />
    <PartnerCard
        partnerLevel="SILVER PARTNERS"
        title="Investing in Sustainable Transportation"
        description="With a shared passion for transportation and innovation, Air France KLM Martinair Cargo supports our mission as our logistics partner. Their commitment to innovation and sustainability in transportation perfectly aligns with our goal of driving technological advancements and promoting sustainability."
        logos={goldLogos}
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

