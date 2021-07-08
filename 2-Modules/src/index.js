import _ from "lodash";

function component() {
  const element = document.createElement("div");

  //BEFORE: Lodash, currently included via a script, is required for this line to work
  //AFTER: Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
