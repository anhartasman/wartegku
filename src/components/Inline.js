import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};
function Inline() {
  return (
    <div>
      {/* CSS class can be applied to child component */}
      <h1 className="error">Error</h1>
      {/* CSS Modules cant be applied to child component
      <h1 className={styles.success}>Success</h1> */}
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
