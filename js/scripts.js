

// var triangle = [sideA , sideB, sideC]
//
// var triangleType = function(triangle) {
//   return false;
// };


  // if (sideA === sideB && sideB === sideC) {
  //   return("That's an equilateral triangle!");
  // } else if (sideA === sideB || sideA === sideC || sideB === sideC){
  //   return("That's an isoceles triangle!");
  // } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC) {
  //   return("That's a scalene triangle!");
  // } else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
  //   alert("That's not a triangle. Please try again.");
//
//     }
//   }
// }

var triangle = function(sideA, sideB, sideC) {
  if (sideA <= (sideB + sideC) && sideB <= (sideA + sideC) && sideC <= (sideA + sideB)) {
    // return "this is a triangle";
    if (sideA === sideB && sideB === sideC) {
      return "Thats an equilateral triangle.";
    } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC) {
      return "That's a scalene triangle!";
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      return "Thats an isosceles triangle.";
    }
  } else {
      return "This is not a triangle";
  }
};


//   } return "this is not a triangle";
//  } else {
//    if (sideA === sideB && sideB === sideC) {
//     return "Thats an equilateral triangle.";
//   }
// }
//
//
//
//
// //     if (sideA === sideB && sideB === sideC) {
// //       return "Thats an equilateral triangle";
// //
// //     }
// //   }
// // }
