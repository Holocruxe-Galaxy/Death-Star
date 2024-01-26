// ** MUI Imports
import Box from '@mui/material/Box';

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react';

const SwiperVertical = () => {
  // ** Hook
  const [ref] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    slides: {
      perView: 2,
      spacing: 8,
    },
  });

  return (
    <Box
      component="div"
      ref={ref}
      className="keen-slider vertical"
      sx={{ maxHeight: 300 }}
    >
      {[...Array(10).keys()].map((num: number) => (
        <Box
          component="div"
          key={num}
          className="keen-slider__slide default-slide"
        >
          {num + 1}
        </Box>
      ))}
    </Box>
  );
};

export default SwiperVertical;
