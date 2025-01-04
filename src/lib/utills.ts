import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }