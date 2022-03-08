const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: `,actual, `===`, expected);
  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: `,actual, `!==`, expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 1);
assertEqual("Lighthouse", "lighthouse");
assertEqual("Labs", "Labs");
assertEqual("4", "4");
