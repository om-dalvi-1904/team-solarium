import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PartnerCardProps {
  partnerLevel: string
  title: string
  description: string
  logos: Array<{
    url: string
    alt: string
  }>
}

export default function PartnerCard({ partnerLevel, title, description, logos }: PartnerCardProps) {
  return (
    <Card className="bg-black/50 max-w-md">
      <CardHeader className="space-y-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-4">
          {logos.map((logo, index) => (
            <div key={index} className="relative h-16 w-full">
              <Image src={logo.url || "/placeholder.svg"} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
        <p className="text-orange-500 font-medium tracking-wide">{partnerLevel}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-3xl font-semibold text-white/60">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

