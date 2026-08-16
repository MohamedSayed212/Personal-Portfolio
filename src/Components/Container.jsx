function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1320px] px-6  md:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Container;
