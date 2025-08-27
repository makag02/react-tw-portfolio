import { clsx } from "clsx";
import { twMerge } from 'tailwind-merge';


//cn() allows you to pass a list of classnames
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}