let intructorName = "ibtihel ben salah r788698698td22 @^#&@^";
let numberone = 16.5;
numberone = 30;
console.log(8 * 5);
console.log(intructorName);
console.log(numberone + 5);
console.log(5 > 10);
let hello = true;
console.log(hello);
let x = 5;
let y = "5";
console.log(x === y);
const students = [
  "Roufiada",
  "Siwar",
  "Maryem",
  "Dial",
  "Ibtissem",
  "Ahmed",
  "Othmen",
  "sara",
];
const presence = [
  "PRESENTE",
  "PRESENTE",
  "PRESENTE",
  "PRESENT",
  "abscente",
  "abscent",
  "abscent",
  "abscente",
];
console.log(students[0], presence[0]);
console.log(students[1], presence[1]);
console.log(students[2], presence[2]);
console.log(students[3], presence[3]);
console.log(students[4], presence[4]);
console.log(students[5], presence[5]);
console.log(students[6], presence[6]);
console.log(students[7], presence[7]);

const studentsInfo = [
  {
    firstName: "Rofaida",
    lastName: "Guissous",
    presence: true,
    progress: 35,
  },
  {
    firstName: "Btissam",
    lastName: "Didi Alaoui",
    presence: false,
    progress: 27,
  },
  {
    firstName: "Maryem",
    lastName: "Mallas",
    presence: true,
    progress: 10,
  },
  {
    firstName: "Diall",
    lastName: "Mahamane",
    presence: true,
    progress: 27,
  },
  {
    firstName: "Siwar",
    lastName: "Hmaidi",
    presence: true,
    progress: 15,
  },
  {
    firstName: "Sara",
    lastName: "Alboz",
    presence: false,
    progress: 27,
  },
  {
    firstName: "Atmane",
    lastName: "El Affani",
    presence: false,
    progress: 15,
  },
  {
    firstName: "Ahmed",
    lastName: "Helal",
    presence: false,
    progress: 0,
  },
];
let score = 0;
for (let i = 0; i < students.length; i++) {
  console.log(
    "student n :" +
      i +
      " " +
      studentsInfo[i].firstName +
      " est " +
      studentsInfo[i].presence +
      " " +
      studentsInfo[i].progress
  );
  score = score + studentsInfo[i].progress;
}
let average = score / studentsInfo.length;

if (studentsInfo[7].progress > average) {
  console.log("above average");
} else if (studentsInfo[7].progress === average) {
  console.log("equal to average ");
} else {
  console.log("below average");
}
for (let i = 0; i < studentsInfo.length; i++) {
  if (studentsInfo[i].progress > average) {
    console.log("above average");
  } else if (studentsInfo[i].progress === average) {
    console.log("equal to average ");
  } else {
    console.log("below average");
  }
}
const isTrue = [true, false, true, true, false, false, false];

let countTrue = 0;
for (let k = 0; k < isTrue.length; k++) {
  if (isTrue[k] == true) {
    console.log(isTrue[k], k, countTrue);
    countTrue = countTrue + 1;
  }
}
console.log(countTrue);

let z = 8;

function factorialFn(n) {
  let factoriel = 1;

  for (let i = 1; i <= n; i++) {
    factoriel = factoriel * i;
  }
  console.log("factorial of ", n, " = ", factoriel);
  return factoriel;
}

function add(a, b) {
  let res = a + b;
  console.log("a = ", a);
  console.log("b = ", b);
  console.log("a + b = ", res);
}

add(1250, 885);
add(895, 755);
factorialFn(z);
factorialFn(9);
console.log(factorialFn(7) / 5);
