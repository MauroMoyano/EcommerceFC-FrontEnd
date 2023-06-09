import React from 'react';
// import components
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
// images
import PromoImg1 from '../img/promo_img1.jpg'
import PromoImg2 from '../img/promo_img2.jpg'

const Hero = () => {
    return <section className='mb-[30px] pt-36 xl:pt-0'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px] '>
                {/*  sidebar  */}
                <div>
                    <CategoryNav />
                </div>
                {/*  main sidebar  */}
                <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
                    <MainSlider />
                </div>
                {/*  promos   */}
                <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
                    {/*    promo 1   */}
                    <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                    {/*    text     */}
                        <div className='flex flex-col max-w-[144px] h-full justify-center'>
                            <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                                Promo 35% todos los productos
                            </div>
                            <a href='#' className='uppercase text-accent'>
                                Shop now
                            </a>
                        </div>
                    {/*    img      */}
                        <img className='absolute z-20 top-0 rounded-lg right-0 h-auto w-[40%]' src={PromoImg1} alt=''/>
                    </div>
                    {/*    promo 2   */}
                    <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                        {/*    text     */}
                        <div className='flex flex-col max-w-[144px] h-full justify-center'>
                            <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                                Promo 25% todos los productos
                            </div>
                            <a href='#' className='uppercase text-accent'>
                                Shop now
                            </a>
                        </div>
                        {/*    img      */}
                        <img className='absolute z-20 top-0 rounded-lg right-0 h-auto w-[40%]' src={PromoImg2} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Hero;
