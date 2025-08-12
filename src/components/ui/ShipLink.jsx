const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 font-medium"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink