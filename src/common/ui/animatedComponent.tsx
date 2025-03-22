import { forwardRef, type ReactNode, type ElementType, type Ref } from "react";
import { motion, type MotionProps } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "helpers/style";

interface AnimatedComponentProps extends MotionProps {
  tag?: ElementType;
  children?: ReactNode;
  className?: string;
}

export const AnimatedComponent = forwardRef<
  HTMLElement,
  AnimatedComponentProps
>(
  (
    {
      tag: Component = "div", // Указываем div как элемент по умолчанию
      children,
      className,
      ...motionProps
    },
    ref
  ) => {
    // Проверяем, если ширина экрана менее 541px
    const isScreenWidthMoreThan540 = useMediaQuery("(min-width: 768px)");

    // @ts-expect-error: TypeScript не поддерживает динамическое обращение к motion[] напрямую
    const MotionTag = motion[Component as keyof JSX.IntrinsicElements];

    return isScreenWidthMoreThan540 ? (
      // Если анимации включены, рендерим MotionComponent
      <MotionTag
        ref={ref as Ref<HTMLDivElement>}
        className={cn(className)}
        {...motionProps}
        children={children}
      />
    ) : (
      // Если анимации отключены, просто рендерим содержимое без анимации
      <Component ref={ref as Ref<HTMLDivElement>} className={cn(className)}>
        {children}
      </Component>
    );
  }
);
