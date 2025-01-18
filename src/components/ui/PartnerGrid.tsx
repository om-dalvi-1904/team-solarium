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
import { twMerge } from 'tailwind-merge';

const partnerLinks = [
    {label:'Waaree', href: waareeLogo,link:"https://waaree.com/"},
    {label:'SolidWorks', href: solidWorksLogo,link:"https://www.solidworks.com/"},
    {label:'Ansys', href: ansysLogo,link:"https://www.ansys.com/en-in"},
    {label:'About Energy', href: aboutEnergyLogo,link:"https://www.aboutenergy.io/"},
    {label:'PCB Market', href: pcbPowerLogo,link:"https://www.pcbpower.com/"},
    {label:'Molex', href: molexLogo,link:"https://www.molex.com/en-us/home"},
    {label:'Igus', href: igusLogo,link:"https://www.igus.in/"},
    {label:'Nikol', href: nikolLogo,link:"https://www.linkedin.com/company/nikolindia/"},
    {label:'Sunpower', href: sunPowerLogo,link:"https://us.sunpower.com/"},
    {label:'Microtech', href: microTechLogo,link:""},
    {label:'NIE', href: nieLogo,link:""},
    {label:'Gripking', href: gripKingLogo,link:"https://gripkingtapes.com/"},
    {label:'Orient Tools', href: orientToolsLogo,link:"http://orienttools.co.in/"},
    {label:'WE', href: weLogo,link:"https://www.we-online.com/en"},
    {label:'Altium', href: altiumLogo,link:"https://www.altium.com/"},
    {label:'SR Composites', href: srLogo,link:"https://www.linkedin.com/company/srcomposites/"},
    {label:'Gurit', href: guritLogo,link:"https://www.gurit.com/"},
    {label:'Harnawa', href: harnawaLogo,link:"https://www.harnawa.in/"},
    {label:'JR Sensors', href: jrLogo,link:"https://jrsensors.in/"}
  ]

export const PartnerGrid = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-4 py-4'>
            {partnerLinks.map(link => (
                <a href={link.link} target='__blank' key={link.label}>
                <PartnerCard>
                    <Image className={twMerge('size-20 md:size-32 object-contain')} src={link.href} alt={`${link.label}-Icon`} />
                </PartnerCard>
                </a>
            ))}
        </div>
    );
}