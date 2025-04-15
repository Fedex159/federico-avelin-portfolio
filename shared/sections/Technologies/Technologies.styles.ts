import tw, { clsx } from "@/shared/utils/tailwind";

const TechBoxVariables = clsx`
  [--box-size:_150px]
  [--box-transition-duration:_0.2s]
  [--color-tech-box-border:_#ffe300]
  [--color-tech-box-face-four:_#fbbe31]
  [--color-tech-box-face-one:_#fff3c4]
  [--color-tech-box-face-third:_#fcd34d]
  [--color-tech-box-face-two:_#fde68a]
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
  bg-(--color-tech-box-face-one)
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

const ItemFaceOne = clsx`
  nth-[1]:group-hover/tech-item:transform-[translate(8px,_4px)]
  nth-[1]:group-hover/tech-item:bg-(--color-tech-box-face-two)
  [@media_(hover:_none)]:nth-[1]:group-active/tech-item:transform-[translate(8px,_4px)]
  [@media_(hover:_none)]:nth-[1]:group-active/tech-item:bg-(--color-tech-box-face-two)
`;

const ItemFaceTwo = clsx`
  nth-[2]:group-hover/tech-item:transform-[translate(16px,_8px)]
  nth-[2]:group-hover/tech-item:bg-(--color-tech-box-face-third)
  [@media_(hover:_none)]:nth-[2]:group-active/tech-item:transform-[translate(16px,_8px)]
  [@media_(hover:_none)]:nth-[2]:group-active/tech-item:bg-(--color-tech-box-face-third)
`;

const ItemFaceThird = clsx`
  nth-[3]:group-hover/tech-item:transform-[translate(24px,_12px)]
  nth-[3]:group-hover/tech-item:bg-(--color-tech-box-face-four)
  [@media_(hover:_none)]:nth-[3]:group-active/tech-item:transform-[translate(24px,_12px)]
  [@media_(hover:_none)]:nth-[3]:group-active/tech-item:bg-(--color-tech-box-face-four)
`;

const ItemFaceFourBefore = clsx`
  nth-[4]:before:absolute
  nth-[4]:before:top-0
  nth-[4]:before:left-0
  nth-[4]:before:h-full
  nth-[4]:before:w-0
  nth-[4]:before:border-b
  nth-[4]:before:border-(--color-tech-box-border)
  nth-[4]:before:transition-all
  nth-[4]:before:duration-(--box-transition-duration)
  nth-[4]:before:content-['']
  nth-[4]:group-hover/tech-item:before:w-full
  nth-[4]:group-hover/tech-item:before:delay-[0.4s]
  [@media_(hover:_none)]:nth-[4]:group-active/tech-item:before:w-full
  [@media_(hover:_none)]:nth-[4]:group-active/tech-item:before:delay-[0.4s]
`;

const ItemFaceFourAfter = clsx`
  nth-[4]:after:absolute
  nth-[4]:after:top-full
  nth-[4]:after:left-0
  nth-[4]:after:h-0
  nth-[4]:after:w-full
  nth-[4]:after:border-r
  nth-[4]:after:border-(--color-tech-box-border)
  nth-[4]:after:transition-all
  nth-[4]:after:duration-(--box-transition-duration)
  nth-[4]:after:content-['']
  nth-[4]:group-hover/tech-item:after:top-0
  nth-[4]:group-hover/tech-item:after:h-full
  nth-[4]:group-hover/tech-item:after:delay-[0.6s]
  [@media_(hover:_none)]:nth-[4]:group-active/tech-item:after:top-0
  [@media_(hover:_none)]:nth-[4]:group-active/tech-item:after:h-full
  [@media_(hover:_none)]:nth-[4]:group-active/tech-item:after:delay-[0.6s]
`;

const ItemFaceFour = clsx`
  ${ItemFaceFourBefore}
  ${ItemFaceFourAfter}
  nth-[4]:z-0
  nth-[4]:transform-[translate(-4px,_-4px)]
  nth-[4]:border-t
  nth-[4]:border-l
  nth-[4]:border-(--color-tech-box-border)
  nth-[4]:opacity-50
  group-hover/tech-item:nth-[4]:transform-[translate(30px,_16px)]
  group-hover/tech-item:nth-[4]:delay-[0.2s]
  [@media_(hover:_none)]:group-active/tech-item:nth-[4]:transform-[translate(30px,_16px)]
  [@media_(hover:_none)]:group-active/tech-item:nth-[4]:delay-[0.2s]
`;

const ItemFace = tw.span`
  ${() => TransitionStyles}
  ${() => ItemFaceOne}
  ${() => ItemFaceTwo}
  ${() => ItemFaceThird}
  ${() => ItemFaceFour}
  absolute
  top-0
  left-0
  h-full
  w-full
  transform-[translate(0,0)]
`;

export const SC = {
  Container,
  TechContainer,
  TechItem,
  ItemFace,
};

export const Classname = {
  Section,
  TechImage,
};
