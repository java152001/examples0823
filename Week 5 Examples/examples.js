/*** Example 1 Slicing ***/

// const arrayExample = [7,5,2, 27, 11, 9, 41,3,17];

// const sliceElement = (givenArray, splitLength) => {

//     const givenLength = givenArray.length;
//     const start = givenLength - splitLength;

//     return givenArray.slice(start, givenLength);
// }

// console.log(arrayExample);
// console.log(sliceElement(arrayExample, 4));
// console.log(arrayExample);

/*** Example 2 Splicing ***/

// const arrayExample2 = [4,18,25,"Otters", true, 3.1415];

// const spliceElements = (givenArray, spliceLength, thingsToAdd) => {
    
//     const givenLength = givenArray.length;
//     const start = givenLength - 1;

//     givenArray.splice(start, spliceLength, thingsToAdd); //Will this work?

//     //If we want to accept an array of extra properties, we could do this
//     // if (Array.isArray(thingsToAdd)) {
//     //     givenArray.splice(start, spliceLength);
//     //     thingsToAdd.forEach(item => givenArray.push(item));
//     // } else {
//     //     givenArray.splice(start, spliceLength);
//     //     givenArray.push(thingsToAdd);
//     // }

//     return givenArray;

// }

// console.log(spliceElements(arrayExample2, 1, "Roger Roger", "It's a trap", false));

/*** Example 3  Splitting ***/

// const stringExample = "NextTech_is_my_favorite thing"

// const superMegaSplitter = (givenString, splitter) => {
//     return givenString.split(splitter);
// }

// console.log(superMegaSplitter(stringExample, '_')); // [NextTech, is, my, favorite string]
// console.log(superMegaSplitter(stringExample, ' ')); // [NextTech_is_my_favorite, thing]
// console.log(superMegaSplitter(stringExample, 'e'));
// console.log(stringExample);

/*** Example 4 ArraySorting and Display ***/

// const renderPosts = (boston, container) => {
//     let people = boston.data;
//     //console.log(people);

//     let html = ``;

//     // people.sort((a, b) => b[11] - a[11]);
//     // people.splice(5);

//     // could also just write:

//     //[ 1, "17439B12-1A55-4B6A-980E-5BAC15841AC4", 1, 1426008064, "525314", 1426008064, "525314", "{\n}", "Adario,Anthony J", "Supvising Claims Agent (Asd)", "ASD Human Resources", "98538.32", "0.00", "1842.87", "0.00", "0.00", "0.00", "0.00", "100381.19", "02132" ]

//     // people.forEach((person, i) => {
//     //     return people[i] = {
//     //         id: person[0],
//     //         salary: person[11],
//     //         name: person[8]
//     //     }
//     // });

//     //console.log(people);

//     people.sort((a, b) => b[11] - a[11]).splice(5);

//     // console.log(people);

//     //for part 2
//     bigPocketPeople = people.filter(person => person[11] > 200000 );

//     for (let i = 0; i < bigPocketPeople.length; i++) {
//         html +=
//             `<li class="post">
//                 <h2>Name: ${bigPocketPeople[i][8]}</h2>
//                 <h3 id="topSalaries">${bigPocketPeople[i][11]}</h3>
//             </li>
//             `
//     }

//     let ulCont = document.createElement('ul');
//     ulCont.innerHTML = html;
//     container.appendChild(ulCont);
// }

// renderPosts(boston, document.getElementById('area'));




// function renderPosts(boston, container) {
//     const people = boston.data;
//     const len = boston.data.length;
//     let html = '';
//     for (let i = 0; i < len; i++) {
//       html +=
//         '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
//     }
//     container.innerHTML = '<ul id = "data">' + html + '</ul>';
  
//     // TODO: add code to display the html variable inside a ul element with id="data"
//     // Hint: you can use the container parameter's innerHTML property to insert Html tags
//   }
//   function renderTopSalaries(boston, container) {
//     // Step 1 solution
//     var people = boston.data;
//     var topSalaries = people.sort((a, b) => a[11] - b[11]).slice(-5);
//     console.log(topSalaries);
//     const len = topSalaries.length;
//     var html = '';
//     for (let i = 0; i < len; i++) {
//       html +=
//         '<li class="top">' +
//         '<h2>' +
//         topSalaries[i][8] +
//         '</h2>' +
//         '<h3>' +
//         topSalaries[i][11] +
//         '</h3>';
//     }
  
//     container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
//   }
//   function renderTopEmployees(boston, container) {
//     //step 2 solution
//     var people = boston.data;
//     var topEmployees = people.filter((a) => a[11] > 200000);
//     const len = topEmployees.length;
//     var html = '';
//     for (let i = 0; i < len; i++) {
//       html +=
//         '<li class="top">' +
//         '<h2>' +
//         topEmployees[i][8] +
//         '</h2>' +
//         '<h3>' +
//         topEmployees[i][11] +
//         '</h3>';
//     }
  
//     container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
//   }
  
//   //renderPosts(boston, document.getElementById('area'));
//   renderTopSalaries(boston, document.getElementById('area'));
//   //renderTopEmployees(boston, document.getElementById('area'));

function convertDataToObject(data) {
  let people = data.data;

  // Employee Name is at index 8
  // Salary is at index 11
  // Position is at index 9

  let cleanData = people.map(function(person) {
    return {
      name: person[8],
      position: person[9],
      salary: person[11]
    }
  });

  return cleanData;
}

let betterData = convertDataToObject(boston);

betterData.sort((a,b) => a.salary - b.salary)

console.log(convertDataToObject(boston));