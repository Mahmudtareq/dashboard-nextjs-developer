export function generateBreadcrumbs(pathname) {
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments
  let pathAccumulator = "";

  return segments.map((segment, index) => {
    pathAccumulator += `/${segment}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter
    const isLast = index === segments.length - 1;

    return {
      label,
      path: pathAccumulator,
      isLast,
    };
  });
}
