// Variables

// Cube Variables

let cubeSAbtn = document.getElementById("cube-sa-btn");
let cubeSAIn = document.getElementById("cube-sa-in");
let cubeSAOut = document.getElementById("cube-sa-out");

let cubeVbtn = document.getElementById("cube-v-btn");
let cubeVIn = document.getElementById("cube-v-in");
let cubeVOut = document.getElementById("cube-v-out");

// Rectangular Cuboid Variables

let recSAbtn = document.getElementById("rec-sa-btn");

let recSAIn1 = document.getElementById("rec-sa-In1");
let recSAIn2 = document.getElementById("rec-sa-In2");
let recSAIn3 = document.getElementById("rec-sa-In3");
let recSAIn4 = document.getElementById("rec-sa-In4");
let recSAIn5 = document.getElementById("rec-sa-In5");
let recSAIn6 = document.getElementById("rec-sa-In6");
let recSAOut = document.getElementById("rec-sa-out");

let recVbtn = document.getElementById("rec-v-btn");

let recVIn1 = document.getElementById("rec-v-in1");
let recVIn2 = document.getElementById("rec-v-in2");
let recVIn3 = document.getElementById("rec-v-in3");
let recVOut = document.getElementById("rec-v-out");

// Rectangular Pyramid Variables

let recpSAbtn = document.getElementById("recp-sa-btn");

let recpSAIn1 = document.getElementById("recp-sa-in1");
let recpSAIn2 = document.getElementById("recp-sa-in2");
let recpSAIn3 = document.getElementById("recp-sa-in3");
let recpSAIn4 = document.getElementById("recp-sa-in4");
let recpSAIn5 = document.getElementById("recp-sa-in5");
let recpSAIn6 = document.getElementById("recp-sa-in6");
let recpSAOut = document.getElementById("recp-sa-out");

let recpVbtn = document.getElementById("recp-v-btn");

let recpVIn1 = document.getElementById("recp-v-in1");
let recpVIn2 = document.getElementById("recp-v-in2");
let recpVIn3 = document.getElementById("recp-v-in3");
let recpVOut = document.getElementById("recp-v-out");

// Square Pyramid Variables

let spySABtn = document.getElementById("spy-sa-btn");

let spySAIn1 = document.getElementById("spy-sa-in1");
let spySAIn2 = document.getElementById("spy-sa-in2");
let spySAIn3 = document.getElementById("spy-sa-in3");
let spySAOut = document.getElementById("spy-sa-out");

let spyVBtn = document.getElementById("spy-v-btn");

let spyVIn1 = document.getElementById("spy-v-in1");
let spyVIn2 = document.getElementById("spy-v-in2");
let spyVOut = document.getElementById("spy-v-out");

// Cylinder Variables

let cynSABtn = document.getElementById("cyn-sa-btn");

let cynSAIn1 = document.getElementById("cyn-sa-in1");
let cynSAIn2 = document.getElementById("cyn-sa-in2");
let cynSAIn3 = document.getElementById("cyn-sa-in3");
let cynSAOut = document.getElementById("cyn-sa-out");

let cynVBtn = document.getElementById("cyn-v-btn");

let cynVIn1 = document.getElementById("cyn-v-in1");
let cynVIn2 = document.getElementById("cyn-v-in2");
let cynVOut = document.getElementById("cyn-v-out");

// Cone Variables

let coneSABtn = document.getElementById("cone-sa-btn");

// Event Listeners

cubeSAbtn.addEventListener("click", cubeSA);
cubeVbtn.addEventListener("click", cubeVOL);

recSAbtn.addEventListener("click", recSA);
recVbtn.addEventListener("click", recVOL);

recpSAbtn.addEventListener("click", recpSA);
recpVbtn.addEventListener("click", recpVOL);

spySABtn.addEventListener("click", spySA);
spyVBtn.addEventListener("click", spyVOL);

cynSABtn.addEventListener("click", cynSA);
cynVBtn.addEventListener("click", cynVOL);

// Functions

// Cube Functions

function cubeSA() {
  let s = +cubeSAIn.value;

  let answer = 6 * s ** 2;
  answer = answer.toFixed(2);

  cubeSAOut.innerHTML = answer;

  cubeSAIn.value = " ";
}

function cubeVOL() {
  let s = +cubeVIn.value;

  let answer = s ** 3;
  answer = answer.toFixed(2);

  cubeVOut.innerHTML = answer;

  cubeVIn.value = " ";
}

// Rectangular Functions

function recSA() {
  let l1 = +recSAIn1.value;
  let w1 = +recSAIn2.value;
  let w2 = +recSAIn3.value;
  let h1 = +recSAIn4.value;
  let l2 = +recSAIn4.value;
  let h2 = +recSAIn5.value;

  let answer = 2 * (l1 * w1) + 2 * (w2 * h1) + 2 * (l2 * h2);
  answer = answer.toFixed(2);

  recSAOut.innerHTML = answer;

  recSAIn1.value = " ";
  recSAIn2.value = " ";
  recSAIn3.value = " ";
  recSAIn4.value = " ";
  recSAIn5.value = " ";
  recSAIn6.value = " ";
}

function recVOL() {
  let l = +recVIn1.value;
  let w = +recVIn2.value;
  let h = +recVIn3.value;

  let answer = l * w * h;
  answer = answer.toFixed(2);
  recVOut.innerHTML = answer;

  recVIn1.value = " ";
  recVIn2.value = " ";
  recVIn3.value = " ";
}

// Rectangular Pyramid Functions

function recpSA() {
  let l1 = +recpSAIn1.value;
  let w1 = +recpSAIn2.value;
  let l2 = +recpSAIn3.value;
  let s1 = +recpSAIn4.value;
  let w2 = +recpSAIn5.value;
  let s2 = +recpSAIn6.value;

  let answer = l1 * w1 + l2 * s1 + w2 * s2;
  answer = answer.toFixed(2);

  recpSAOut.innerHTML = answer;

  recpSAIn1.value = " ";
  recpSAIn2.value = " ";
  recpSAIn3.value = " ";
  recpSAIn4.value = " ";
  recpSAIn5.value = " ";
  recpSAIn6.value = " ";
}

function recpVOL() {
  let l = +recpVIn1.value;
  let w = +recpVIn2.value;
  let h = +recpVIn3.value;

  let answer = (1 / 3) * l * w * h;
  answer = answer.toFixed(2);

  recpVOut.innerHTML = answer;

  recpVIn1.value = " ";
  recpVIn2.value = " ";
  recpVIn3.value = " ";
}

// Square Pyramid Functions

function spySA() {
  let l1 = +spySAIn1.value;
  let l2 = +spySAIn2.value;
  let s = +spySAIn3.value;

  let answer = l1 ** 2 + 2 * l2 * s;
  answer = answer.toFixed(2);

  spySAOut.innerHTML = answer;

  spySAIn1.value = " ";
  spySAIn2.value = " ";
  spySAIn3.value = " ";
}

function spyVOL() {
  let l = +spyVIn1.value;
  let h = +spyVIn2.value;

  let answer = (1 / 3) * l ** 2 * h;
  answer = answer.toFixed(2);

  spyVOut.innerHTML = answer;

  spyVIn1.value = " ";
  spyVIn2.value = " ";
}

// Cylinder Functions

function cynSA() {
  let r1 = +cynSAIn1.value;
  let r2 = +cynSAIn2.value;
  let h = +cynSAIn3.value;

  let answer = 2 * Math.PI * r1 ** 2 + 2 * Math.PI * r2 * h;
  answer = answer.toFixed(2);

  cynSAOut.innerHTML = answer;

  cynSAIn1.value = " ";
  cynSAIn2.value = " ";
  cynSAIn3.value = " ";
}

function cynVOL() {
  let r = +cynVIn1.value;
  let h = +cynVIn2.value;

  let answer = Math.PI * r ** 2 * h;
  answer = answer.toFixed(2);

  cynVOut.innerHTML = answer;

  cynVIn1.value = " ";
  cynVIn2.value = " ";
}
