import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const marqueeModule = () => {
  const marquee = document.querySelector('.marquee-splide')

  if (marquee) {
    new Splide('.marquee-splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoWidth: true,
      gap: 20,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 2,
      },
    }).mount({ AutoScroll });
  }
}