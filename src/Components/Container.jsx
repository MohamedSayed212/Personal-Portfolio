// The ONE place page gutters are defined. No section, header or grid should
// set its own horizontal padding — if the edges need to move, they move here
// and every block on the page stays aligned.
function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1320px] px-7 md:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Container;
