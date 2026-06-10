import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const anthemPrimaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#017ACA] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(1,122,202,0.22)] transition-all duration-300 hover:bg-[#005B99] hover:text-white hover:shadow-[0_16px_36px_rgba(1,122,202,0.28)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#017ACA]/30 focus-visible:ring-offset-2"

export const anthemSecondaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#017ACA]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#003B66] shadow-sm transition-all duration-300 hover:border-[#017ACA] hover:bg-[#F4FAFF] hover:text-[#017ACA] hover:shadow-[0_10px_24px_rgba(0,59,102,0.08)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#017ACA]/30 focus-visible:ring-offset-2"

export const anthemChip =
  "group inline-flex items-center gap-1 rounded-md border border-[#017ACA]/20 bg-white px-2.5 py-1 text-[10px] font-bold text-[#003B66] shadow-sm transition-all duration-300 hover:border-[#017ACA] hover:bg-[#017ACA] hover:text-white hover:shadow-[0_8px_24px_rgba(1,122,202,0.18)]"
