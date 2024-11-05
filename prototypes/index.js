const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(animals) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

    var orangeAnimals = animals.filter((animal) => {
      return animal.color === "orange"
    })
    var orangeAnimalNames = orangeAnimals.map ((animal) => {
      return animal.name
    }) 
    return orangeAnimalNames
  
        // I want just the kitties that have a color of orange - FILTER.
        // because filter return the data as it comes then we will need another
        // method to go with this we will want to use map in addition to filter
        // because we need to 'transform' the object to only return the names info
        // in an array.  
    // Annotation:
    // Because we are given an array and I want just the names of orange cats, 
    // then using filter first to find just the orange cats and then using map to 
    // create a new array of the orange cat names makes the most sense to me. 
    // On each iteration of filter it uses the criteria of color: orange to include
    // that kitty object in the new array. Then each iteration of map goes through an
    // instance of the orange kitty and pulls out only their name information to add it 
    // to the new array. 
  },

  sortByAge(animals) {
    // Sort the kitties by their age
    animals.sort((a, b) =>
      b.age - a.age )
    return (animals)

    // I know I need to return all of the kitties in the array, so the length is not 
    // changing. What is changing is the order the cats are in the array. I want the 
    //oldest cat to be at index 0 and so on. I will sort by age to do this. 
    // Annotation:
    // The word 'sort' is in the function name, so this feels obvious I would use sort.
    // I know I need to sort by age and so kitties.age is how I pull that info from the 
    // object
  },

  growUp(animals) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    // Pseudo Code: I want to return a nested hash in an array. This nested hash is 
    // the same length as the original array (4 elements). Since the age needs to incease
    // by two I will use map() because I want a new array and I will have to transform
    // the age information. I will need to grab the age age each iteration increase it by two
    // so all kitties aged by 2 years. 

      var agedTwoYears = animals.map((animal) => {
        return { 
          name: animal.name,
          age: animal.age += 2,
          color: animal.color
        };
      });
      return agedTwoYears

       // Annotation: Map makes the most sense because we need to transform the data to 
       // add two years to the age and we want to return a new array with all the 
       // information in the old array, but with the age changed.
  }

};

// USING SPREAD: 

// var agedTwoYears = animals.map((animal)=> {
//   return {
//     ...animal,
//     age: animal.age + 2
//   }
// })
// return agedTwoYears

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // const clubs = [
    //   { club: 'Drama', members: ['Louisa', 'Pam', 'Nathaniel' ] },
    //   { club: 'Band', members: ['Leta', 'Robbie', 'Jhun', 'Will'] },
    //   { club: 'Chess', members: ['David', 'Pam', 'Brittany', 'Robbie'] },
    //   { club: 'Newspaper', members: ['Pam', 'David', 'Brittany', 'Christie', 'Leta'] },
    //   { club: 'Astronomy', members: ['Nathaniel', 'Leta'] },
    //   { club: 'FBLA', members: ['Christie', 'David', 'Robbie'] },
    //   { club: 'Art', members: ['Jhun', 'Louisa'] }
    // ];

    // Your function should access the clubs data through a parameter 
    // (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    // pseudo code:
    // I want to return a hash where the key is a name of a member and the value is
    // an array of clubs that they are members to. 
    // The name will come from iterating through the array to access the values of the 
    // members key, but I need to access the values one at a time. It is important to
    // note that these names repeat because they are members of multiple clubs.
    // Next I will have to take those names and make them keys that do not repeat
    // The values to those name keys will be the clubs that they are members to, 
    // so to access that data I will need to iterate through each club and if the name
    // matches the key then the club can be added as a value to the array of clubs


    // const clubObj = clubs.map((club) => {
    //   const members = club.members

    //   const singleMember = members.reduce((acc, member) => {
    //     console.log('acc', acc)
    //     console.log('member', member)

    //     // if (!acc[member]) {
    //     //   acc[member] = []
    //     // }
    //     // console.log('acc', acc)
    //     // console.log('member', member)
    //   }, {})


    // })





    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((mod) => {
      // console.log('mod.mod:', mod.mod)
      // console.log('students:', mod.students)
      // console.log('instructors:', mod.instructors)
      const studentsPerInstructor = mod.students / mod.instructors
      // console.log('students per instructor:', studentsPerInstructor)
        return { 
          mod: mod.mod,
          studentsPerInstructor: studentsPerInstructor,
        };
    })
    return result

    /* Pseudo Code:
    I start with an array of mod objects. I also want to end with an array of 
    mod objects. Mathematically, I need to create a new key called studentsPerInstuctor
    which equals mods.students divided by mods.instructors. I will need to transform
    my data to return only the mod: and the studentsPerInstructor:. I think using
    map will be the most efficient because I need to return two existing key value pairs
    from the current array. 
    */

    // Annotation:
    /* I used map here because I wanted to return a new array that was the same 
    length as the given array. I knew that I needed to transform the data so that
    I could calculate the students per instructor and then return only two key-value 
    pairs and so I could return an object and write in the key and use dot notation
    to get to the mod number, the students and the instructors. 
    */
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]


    let result = cakes.map((cake) => {
      // console.log(cake.cakeFlavor)
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };    
    })
    return result



    // Annotation:
    /* I knew that I would need to return an array of objects that were the same length as the original array. 
    Since the new array needed to only return two of the key-value pairs, it needed to be transformed, so map 
    made the msot sense. Using dot notation lets you access the values in the array.  
    */
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]


    return cakes.filter((cake) => {
      return cake.inStock > 0
    })


    // Annotation:
    /* I only wanted to return the object if the cake was in stock, so I needed to filter by inStock > 0. It was 
    also clear because the array that was returned was two objects less than the original array. 
    */
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59


    let result = cakes.reduce((acc, cake) => {
      // console.log('acc', acc)
      // console.log('cake', cake.inStock)
      return acc + cake.inStock
    }, 0)
    return result

    // Annotation:
    /* Since 59 is a single value, I knew I wanted to use reduce. What I needed to access
    was the cake.inStock and since the values were being added together then I could use 
    acc + cake.inStock to create a sum.  
    */
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* Pseudo Code:
    1. I need to return an array of topings with no duplicated. An array is one single item, so
    I can use reduce to add items if they are unique to an array. I will start the initial value
    to be an array.
    2. I need to access topings using cake.toppings. I need the topings to be singular strings
    instead of an array
    */

    const uniqueToppings = cakes.reduce((acc, cake) => {
      const singleCakeToppings = cake.toppings
      singleCakeToppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
  
    return uniqueToppings;
  


    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /*
    Pseudo Code:
    1. I am starting with an array of objects and I need to return an object
    In the object the key is the topping and the value is the number of the toppings needed. 
    2. I can use the code I already wrote because it returns the a unique array of each topping. 
    3. Instead of shoving the topping into an array I want it to be the key of the object
    and to start with a value of 1, but count up everytime the topping is found in the iteration
    I do. 
    */

    /* CODE GOES HERE */

    const toppingCount = cakes.reduce((acc, cake) => {
      const singleCakeToppings = cake.toppings
      singleCakeToppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 0
        }
        acc[topping] += 1
      });
      return acc;
    }, {});
  
    return toppingCount;

    // Annotation:
    // It made sense to use reduce because I needed to return one single object
    // and the object value needed to count up as the topings were iterated and multiple 
    // of the same value were found. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

/* 
    Pseudo Code:
    1. I think that using filter makes sense here because I am starting
    with an array and returning an array, but I only want to return 
    an array if the program == 'FE'
*/

    /* CODE GOES HERE */

    const frontEnd = classrooms.filter((classroom) => {
      return classroom.program == 'FE'
    })
    return frontEnd

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* Pseudo Code
    1. It makes sence to use reduce here because I want to start with an array and return one object
    2. I will have to use conditional logic if program == 'FE' make key and accumulate capacity
    and I will have to do the same for the BE
    */

    const capacityByProgram = classrooms.reduce((acc, classroom) =>{
      if (!acc[`${classroom.program.toLowerCase()}Capacity`]) {
        acc[`${classroom.program.toLowerCase()}Capacity`] = 0
      }
      acc[`${classroom.program.toLowerCase()}Capacity`] += classroom.capacity
      return acc
    }, {})
    return capacityByProgram
    // Annotation:
    // Reduce made sense because I wanted to return a single object and I wanted 
    // to sum up the capacity as reduce iterated through. 
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */

    var sortedArray = classrooms.sort((a,b) =>
      a.capacity - b.capacity
    )
    return sortedArray

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as 
    // an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* Pseudo Code
    1. I start with an array of book objects and I want to return an array of only the titles.
    2. Since I want only the titles. I am going to use map (reduce would also work) 
    3. Conditional logic needs to be used here for !genre == 'horor' || !genre == 'true crime'
    4. I need to acccess the title of the books. books.title should work
     */

    notHorrorNorCrime = []

    books.forEach((book) => {
      if(book.genre !== 'Horror' && book.genre !== 'True Crime') {
        notHorrorNorCrime.push(book.title)
      }  
    })
    return notHorrorNorCrime

    // Annotation:
    // Map does not work in this example because we do not want to return an array of the same length.
    // Since the horror, and true crime books are being excluded our array will have fewer elements,
    // This means filter and map or forEach or reduce would work, but not map alone. 
  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* Pseudo Code
    1. I start with an array and I end with an array of the same length because it contains
    all books. 
    2. I want to transform the array to contain objects where the key is the title and the other
    is the year
    3. map should work for this 
     */

    const ninetiesAndTwoThousands = books.filter((book) => {
      return book.published >= 1990
    })
    const result = ninetiesAndTwoThousands.map((book) => {
      return { 
        title: book.title,
        year: book.published
      };
    })
    return result

    // Annotation:
    // I thought that I could simply use map with some conditional statements, but I couldn't because I was mistaken when
    // I first read it. I actually did not want to return ALL books I wanted to return all books from the 90s and 00s. 
    // After realizing this I decided that filter needed to happen before I could do map. Year and published tripped me up
    // for a minute, so it is important to look at the data closely. 
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* Pseudo Code
    1. I think that I can reuse a lot of the logic, but this time I need to take in a parameter that will be
    the year and make sure that where necessary I am using bracket notation.  
     */

    const booksByYear = books.filter((book) => {
      return book.published >= year
    })
    const result = booksByYear.map((book) => {
      return { 
        title: book.title,
        year: book.published
      };
    })
    return result

    // Annotation:
    // It was basically the same code, but I replaced 1990 with year and changed my year to a string. 
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* Pseudo Code
    1. I am starting off with an array and I am returning an array
    2. I need to access both high and low temperatures and put them in an array 
    3. Since each object has a high and a low temperature I am not returning an array of the same length,
    so map will not be my best option, at least not right away. 
    4. I think reduce will work best because it can accumulate the temperatures and add them to an array
     */

    const highAndLowTemps = weather.reduce((acc, cityWeather) => {
      averageTemps = (cityWeather.temperature.high + cityWeather.temperature.low) / 2 

      acc.push(averageTemps)
      return acc
    },[])
      return highAndLowTemps 

    // Annotation:
    // At first I did not realize that the values in the getAverageTemps function were actually averages.
    // I overlooked this and I pushed in both the high and the low values using reduce. It was a simple fix 
    // once I realized it. 
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* Pseudo Code
    1. I am starting with an array and ending with an array of locations where the weather type is 'sunny' 
    or 'mostly sunny'. Because of this I think that filter is a good option to access the sunny weather locations
    2. After I have used filter I can use forEach or reduce or map to write an interpolated statement with the 
    // weather.location and weather.type
     */

      const sunnyLocations = weather.filter((cityWeather) => {
        return cityWeather.type == 'sunny'  || cityWeather.type == 'mostly sunny'
      })
      const result = sunnyLocations.map((cityWeather) => {
        return `${cityWeather.location} is ${cityWeather.type}.`
      })
      return result


    // Annotation:
    // What I am realizing is that I can almost always use filter + map, forEach or reduce interchangeably 
    // if I am writting my code in a way that makes sense to me and I am accounting for the type of data
    // that I need to return such as an integer, array or object and if the data I am returning is altered
    // and if it is the same length as the original array or not. 
    // I'm also realizing that I am paying more attention to whether or not I am starting with an array, 
    // and if not how to get the data to match an array so I can use a prototype method on it. 
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPrompts = {
  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByBrightness() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use.  Even though the same weapon might be used by multiple characters, count each weapon only once.
    // Solve this *without* using Object.keys().  Hint: iterate over the characters array, then iterate through each character's weapons array. Find a way to make sure you only count each weapon once. 
    // Answer => 59

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of *awesome* dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// ---------------------------------------------------------------------------
//  ADDITIONAL CHALLENGES THAT INCLUDE METHODS NOT NEEDED FOR YOUR ASSESSMENT
   /* NOTE - You will not see Object.keys() on an assessment */
// ---------------------------------------------------------------------------



// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
 

    // Annotation:
    // Write your annotation here as a comment
  }
};

// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPromptsII = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinoPromptsII = {
  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};














module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
