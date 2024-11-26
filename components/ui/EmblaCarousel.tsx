import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative h-[100vh] w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide flex h-[100vh] items-center justify-center bg-slate-500"
              key={index}
            >
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
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
