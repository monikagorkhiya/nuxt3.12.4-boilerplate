export function useCommon() {
  // Create a reactive state for the theme using useState
  const theme = useState<'light' | 'dark'>('theme', () => 'light') // Default is 'dark'

  return { theme }
}
