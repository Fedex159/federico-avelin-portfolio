import tw, { clsx } from "@/shared/utils/tailwind";

const TechBoxVariables = clsx`
  [--box-size:_150px]
  [--box-transition-duration:_0.2s]
  [--color-tech-box-base:_#fff3c4]
  [--color-tech-box-border:_#ffe300]
  [--color-tech-box-face-one:_#fde68a]
  [--color-tech-box-face-third:_#fbbe31]
  [--color-tech-box-face-two:_#fcd34d]
  [--tech-container-columns:_5]
  [--tech-container-gap:_20px]
  [--tech-container-max-width:_calc(var(--tech-container-total-width)_+_var(--tech-container-total-gap))]
  [--tech-container-total-gap:_calc(var(--tech-container-gap)_*_calc(var(--tech-container-columns)_-_1))]
  [--tech-container-total-width:_calc(var(--box-size)_*_var(--tech-container-columns))]
  md:[--tech-container-gap:_40px]
`;

const Section = clsx`
  ${TechBoxVariables}
  flex
  flex-col
  items-center
  justify-center
  gap-10
`;

const Container = tw.div`
  grid
  grid-cols-1
  items-center
  justify-center
  gap-10
  md:grid-cols-2
`;

const TechContainer = tw.ul`
  grid
  h-full
  w-full
  max-w-[var(--tech-container-max-width)]
  grid-cols-[repeat(auto-fill,_minmax(var(--box-size),_1fr))]
  gap-[var(--tech-container-gap)]
`;

const TransitionStyles = clsx`
  transition-all
  duration-(--box-transition-duration)
`;

const TechItem = tw.li`
  ${() => TransitionStyles}
  group/tech-item
  relative
  mx-auto
  h-[var(--box-size)]
  w-[var(--box-size)]
  transform-[_translate(0,0)_rotateY(0)_skewY(0)]
  bg-(--color-tech-box-base)
  hover:transform-[_translate(-15px,_-5px)_rotateY(-15deg)_skewY(-10deg)]
  [@media_(hover:_none)]:active:transform-[_translate(-15px,_-5px)_rotateY(-15deg)_skewY(-10deg)]
`;

const TechImage = clsx`
  ${TransitionStyles}
  absolute
  top-1/2
  left-1/2
  z-10
  h-full
  w-full
  -translate-1/2
  object-contain
  p-5
  grayscale-100
  group-hover/tech-item:grayscale-0
  [@media_(hover:_none)]:group-active/tech-item:grayscale-0
`;

const ItemFaceStyles = clsx`
  ${TransitionStyles}
  absolute
  top-0
  left-0
  h-full
  w-full
  transform-[translate(0,0)]
`;

const ItemFaceOne = tw.span`
  ${() => ItemFaceStyles}
  group-hover/tech-item:transform-[translate(8px,_4px)]
  group-hover/tech-item:bg-(--color-tech-box-face-one)
  [@media_(hover:_none)]:group-active/tech-item:transform-[translate(8px,_4px)]
  [@media_(hover:_none)]:group-active/tech-item:bg-(--color-tech-box-face-one)
`;

const ItemFaceTwo = tw.span`
  ${() => ItemFaceStyles}
  group-hover/tech-item:transform-[translate(16px,_8px)]
  group-hover/tech-item:bg-(--color-tech-box-face-two)
  [@media_(hover:_none)]:group-active/tech-item:transform-[translate(16px,_8px)]
  [@media_(hover:_none)]:group-active/tech-item:bg-(--color-tech-box-face-two)
`;

const ItemFaceThird = tw.span`
  ${() => ItemFaceStyles}
  group-hover/tech-item:transform-[translate(24px,_12px)]
  group-hover/tech-item:bg-(--color-tech-box-face-third)
  [@media_(hover:_none)]:group-active/tech-item:transform-[translate(24px,_12px)]
  [@media_(hover:_none)]:group-active/tech-item:bg-(--color-tech-box-face-third)
`;

const ItemFaceFourBefore = clsx`
  before:absolute
  before:top-0
  before:left-0
  before:h-full
  before:w-0
  before:border-b
  before:border-(--color-tech-box-border)
  before:transition-all
  before:duration-(--box-transition-duration)
  before:content-['']
  group-hover/tech-item:before:w-full
  group-hover/tech-item:before:delay-[0.4s]
  [@media_(hover:_none)]:group-active/tech-item:before:w-full
  [@media_(hover:_none)]:group-active/tech-item:before:delay-[0.4s]
`;

const ItemFaceFourAfter = clsx`
  after:absolute
  after:top-full
  after:left-0
  after:h-0
  after:w-full
  after:border-r
  after:border-(--color-tech-box-border)
  after:transition-all
  after:duration-(--box-transition-duration)
  after:content-['']
  group-hover/tech-item:after:top-0
  group-hover/tech-item:after:h-full
  group-hover/tech-item:after:delay-[0.6s]
  [@media_(hover:_none)]:group-active/tech-item:after:top-0
  [@media_(hover:_none)]:group-active/tech-item:after:h-full
  [@media_(hover:_none)]:group-active/tech-item:after:delay-[0.6s]
`;

const ItemFaceFour = tw.span`
  ${() => ItemFaceFourBefore}
  ${() => ItemFaceFourAfter}
  ${() => ItemFaceStyles}
  z-0
  border-t
  border-l
  border-(--color-tech-box-border)
  opacity-50
  group-hover/tech-item:delay-[0.2s]
  [&&]:transform-[translate(-4px,_-4px)]
  group-hover/tech-item:[&&]:transform-[translate(30px,_16px)]
  [@media_(hover:_none)]:group-active/tech-item:delay-[0.2s]
  [@media_(hover:_none)]:group-active/tech-item:[&&]:transform-[translate(30px,_16px)]
`;

export const SC = {
  Container,
  TechContainer,
  TechItem,
  ItemFaceOne,
  ItemFaceTwo,
  ItemFaceThird,
  ItemFaceFour,
};

export const Classname = {
  Section,
  TechImage,
};
