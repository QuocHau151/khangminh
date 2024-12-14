import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./Typewriter-effect";
import { motion } from "framer-motion";

const EmblaCarousel = () => {
  const options: EmblaOptionsType = {};

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const words1 = [
    {
      text: "Đèn",
    },
    {
      text: "Ray",
    },
    {
      text: "Nam",
    },
    {
      text: "Châm",
    },
    {
      text: "Khang Minh Lighting.",
      className: "text-orange-400 ",
    },
  ];
  const words2 = [
    {
      text: "Đèn",
    },
    {
      text: "Thả",
    },
    {
      text: "Hộp",
    },
    {
      text: "Khang Minh Lighting.",
      className: "text-orange-500 ",
    },
  ];
  return (
    <section className="embla relative h-full w-full md:h-[100vh]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide mt-[70px] flex h-full items-center justify-center md:h-[calc(100vh-70px)]">
            <Image
              src="/assets/images/banner/1.jpg"
              width={1920}
              height={1080}
              alt="banner 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center">
              <TypewriterEffectSmooth words={words1} />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
                className="flex items-center justify-center gap-2 space-x-0 md:flex-row md:space-x-4 md:space-y-0"
              >
                <button className="rounded-xl border border-transparent bg-orange-500 px-3 py-2 text-[10px] font-bold text-white md:px-10 md:py-4 md:text-[16px]">
                  Xem Sản Phẩm
                </button>
                <button className="rounded-xl border border-transparent bg-white px-3 py-2 text-[10px] font-bold text-black md:px-10 md:py-4 md:text-[16px]">
                  Liên Hệ Ngay
                </button>
              </motion.div>
            </div>
          </div>
          <div className="embla__slide mt-[70px] flex h-full items-center justify-center md:h-[calc(100vh-70px)]">
            <Image
              src="/assets/images/banner/2.jpg"
              width={1920}
              height={1080}
              alt="banner 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center md:top-[15%] md:translate-y-[0%]">
              <TypewriterEffectSmooth words={words2} />
              <motion.div
                initial={{ opacity: 0, y: 100, visibility: "hidden" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  visibility: "visible",
                  transition: { duration: 2 },
                }}
                className="flex items-center justify-center gap-2 space-x-0 md:flex-row md:space-x-4 md:space-y-0"
              >
                <button className="rounded-xl border border-transparent bg-orange-500 px-3 py-2 text-[10px] font-bold text-white md:px-10 md:py-4 md:text-[16px]">
                  Xem Sản Phẩm
                </button>
                <button className="rounded-xl border border-transparent bg-white px-3 py-2 text-[10px] font-bold text-black md:px-10 md:py-4 md:text-[16px]">
                  Liên Hệ Ngay
                </button>
              </motion.div>
            </div>
          </div>
          <div className="embla__slide mt-[70px] flex h-full items-center justify-center md:h-[calc(100vh-70px)]">
            <Image
              src="/assets/images/banner/6.jpg"
              width={1920}
              height={1080}
              alt="banner 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="embla__slide mt-[70px] flex h-full items-center justify-center md:h-[calc(100vh-70px)]">
            <Image
              src="/assets/images/banner/3.jpg"
              width={1920}
              height={1080}
              alt="banner 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="embla__slide mt-[70px] flex h-full items-center justify-center md:h-[calc(100vh-70px)]">
            <Image
              src="/assets/images/banner/4.jpg"
              width={1920}
              height={1080}
              alt="banner 4"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute left-0 top-[50%] ml-2 h-10 w-10 translate-y-[-50%] p-3 text-primary opacity-50"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute right-0 top-[50%] mr-2 h-10 w-10 translate-y-[-50%] p-3 text-primary opacity-50"
        />
      </div>

      <div className="absolute bottom-2 right-[50%] flex translate-x-[50%] gap-0.5">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"rounded-[50%] border-[5px] border-white".concat(
              index === selectedIndex
                ? "rounded-[50%] border-[5px] border-primary"
                : "",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
