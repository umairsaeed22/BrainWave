import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
    return (
        <Section className='overflow-hidden' id="pricing">
            <div className='relative container z-2'>
                <div className='relative hidden justify-centerbv-[6.5rem] lg:flex'>
                    <img src={smallSphere} className='relative z-1' width={255} height={255} alt='sphere' />
                </div>
                <div className='absolute top-1/2 w-[16rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <img src={stars} className='w-full' width={950} height={400} />
                </div>
            </div>
           

            <div className='relative md:m-20 m-5'>
            <Heading
                tag="Get started with Brainwave"
                title="Pay once, use forever " />
                <PricingList />
                <LeftLine />
                <RightLine />
            </div>

            <div className='flex justify-center mt-10'>
                <a className='text-sx font-code font-bold tracking-wider uppercase border-b'>See the full details</a>
            </div>
        </Section>
    )
}

export default Pricing