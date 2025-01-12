'use client';
import waareeLogo from '@/assets/logos/waaree.png';
import solidWorksLogo from '@/assets/logos/solidworks.png';
import ansysLogo from '@/assets/logos/ansys.png';
import molexLogo from '@/assets/logos/molex.png';
import pcbPowerLogo from '@/assets/logos/PCBPower.png';
import aboutEnergyLogo from '@/assets/logos/about.png';
import igusLogo from '@/assets/logos/igus.png';
import nikolLogo from '@/assets/logos/nikol.png';
import sunPowerLogo from '@/assets/logos/sunpower.png';
import microTechLogo from '@/assets/logos/microsoft.png';
import nieLogo from '@/assets/logos/nie.png';
import gripKingLogo from '@/assets/logos/gripking.png';
import orientToolsLogo from '@/assets/logos/orient.png';
import weLogo from '@/assets/logos/wu.png';
import altiumLogo from '@/assets/logos/altium.png';
import srLogo from '@/assets/logos/sr.png';
import guritLogo from '@/assets/logos/gurit.png';
import harnawaLogo from '@/assets/logos/harnawa.png';
import jrLogo from '@/assets/logos/jr.png';
import { PartnerCard } from './PartnerCard';
import Image from 'next/image';

const partnerLinks = [
    {label:'Waaree', href: waareeLogo},
    {label:'SolidWorks', href: solidWorksLogo},
    {label:'Ansys', href: ansysLogo},
    {label:'Molex', href: molexLogo},
    {label:'PCB Market', href: pcbPowerLogo},
    {label:'About Energy', href: aboutEnergyLogo},
    {label:'Igus', href: igusLogo},
    {label:'Nikol', href: nikolLogo},
    {label:'Sunpower', href: sunPowerLogo},
    {label:'Microtech', href: microTechLogo},
    {label:'NIE', href: nieLogo},
    {label:'Gripking', href: gripKingLogo},
    {label:'Orient Tools', href: orientToolsLogo},
    {label:'WE', href: weLogo},
    {label:'Altium', href: altiumLogo},
    {label:'SR Composites', href: srLogo},
    {label:'Gurit', href: guritLogo},
    {label:'Harnawa', href: harnawaLogo},
    {label:'JR Sensors', href: jrLogo}
  ]

export const PartnerGrid = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-4 py-4'>
            {partnerLinks.map(link => (
                <PartnerCard key={link.label}>
                    <Image className='size-20 md:size-32 object-contain' src={link.href} alt={`${link.label}-Icon`} />
                </PartnerCard>
            ))}
        </div>
    );
}