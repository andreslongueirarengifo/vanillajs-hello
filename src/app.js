/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var excuses = (document.getElementById("excuse").innerHTML = createExcuses(
    who,
    what,
    when
  ));
};

function createExcuses(who, what, when) {
  return (
    who[Math.floor(Math.random() * 4 + 0)] +
    " " +
    what[Math.floor(Math.random() * 4 + 0)] +
    " " +
    when[Math.floor(Math.random() * 5 + 0)]
  );
}
