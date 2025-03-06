import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

/*
 *  example: cn('bg-blue-500 py-2 px-4', className, { "bg-gray-500": pending })
 */
