const Diamond = ({ size = 24, color = "#60D548" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="h-full w-auto"
  >
    <path fill={color} d="M12 24 0 12 12 0l12 12-12 12Z" />
  </svg>
);

export default Diamond;
