let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomMethod(x) {
  var x = document.getElementById("excuse");

  var first = who[Math.floor(Math.random() * who.length)];
  var second = what[Math.floor(Math.random() * what.length)];
  var third = when[Math.floor(Math.random() * when.length)];
  x.innerHTML = first + " " + " " + second + " " + " " + third;
}

window.onload = randomMethod();
