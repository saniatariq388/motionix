import * as react_jsx_runtime from 'react/jsx-runtime';

type MotionVariant = "ease" | "bounce" | "float" | "pop";
interface IconProps {
    size?: number;
    color?: string;
    hoverColor?: string;
    fillOnHover?: boolean;
    variant?: MotionVariant;
    className?: string;
}

declare function BellIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function HeartIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function StarIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function TrashIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function SearchIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function SunMoonIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function DownloadIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function SendIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function LoaderIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

declare function BookmarkIcon({ size, color, hoverColor, fillOnHover, variant, className, }: IconProps): react_jsx_runtime.JSX.Element;

export { BellIcon, BookmarkIcon, DownloadIcon, HeartIcon, type IconProps, LoaderIcon, type MotionVariant, SearchIcon, SendIcon, StarIcon, SunMoonIcon, TrashIcon };
