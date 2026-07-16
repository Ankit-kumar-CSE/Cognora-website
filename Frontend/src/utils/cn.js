/**
 * Utility: className joiner
 * Merges multiple class strings, filtering out falsy values.
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
