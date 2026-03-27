export type MotionVariant = "ease" | "bounce" | "float" | "pop";

export interface IconProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  fillOnHover?: boolean;
  variant?: MotionVariant;
  className?: string;
}
