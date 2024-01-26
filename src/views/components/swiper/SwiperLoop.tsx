// ** Next.JS Imports
import Image from 'next/image';

// ** MUI Imports
import Box from '@mui/material/Box';
import { Direction } from '@mui/material';

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react';

const SwiperLoop = ({ direction }: { direction: Direction }) => {
  // ** Hook
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl',
  });

  return (
    <Box component="div" ref={ref} className="keen-slider">
      <Box component="div" className="keen-slider__slide">
        <Image src="/images/banners/banner-7.jpg" alt="swiper 7" />
      </Box>
      <Box component="div" className="keen-slider__slide">
        <Image src="/images/banners/banner-8.jpg" alt="swiper 8" />
      </Box>
      <Box component="div" className="keen-slider__slide">
        <Image src="/images/banners/banner-9.jpg" alt="swiper 9" />
      </Box>
      <Box component="div" className="keen-slider__slide">
        <Image src="/images/banners/banner-10.jpg" alt="swiper 10" />
      </Box>
    </Box>
  );
};

export default SwiperLoop;
