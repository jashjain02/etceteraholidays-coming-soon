import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to a readable string
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

// Get the launch date (20 days from now)
export function getLaunchDate(): Date {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 20);
  return launchDate;
}