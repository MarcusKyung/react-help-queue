import React from "react";


function Question1(props){
  const Question1Styles = { //css is typically added to components inline using a property called style. The style property's value should be an object with camelCased versions of the css properties you'd like to add. The values of these properties should be strings.
    color: "red",
  }
  return (
    <div style={Question1Styles}>
      <p>"Have you gone through all the steps on the Learn How to Program debugging lesson?"</p>
    </div>
  );
}

export default Question1;