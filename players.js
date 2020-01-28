const players = [
  {
    "id": 1,
    "name": "Jack Hughes",
    "country": "USA",
    "points": 17,
    "team": 1
  },
  {
    "id": 2,
    "name": "Nico Hischier",
    "country": "SWI",
    "points": 29,
    "team": 1
  },
  {
    "id": 3,
    "name": "Matthew Barzal",
    "country": "CAN",
    "points": 42,
    "team": 2
  },
  {
    "id": 4,
    "name": "Anders Lee",
    "country": "USA",
    "points": 29,
    "team": 2
  },
  {
    "id": 5,
    "name": "Mika Zibanejad",
    "country": "SWE",
    "points": 39,
    "team": 3
  },
  {
    "id": 6,
    "name": "Kaapo Kakko",
    "country": "FIN",
    "points": 16,
    "team": 3
  },
  {
    "id": 7,
    "name": "Claude Giroux",
    "country": "CAN",
    "points": 35,
    "team": 4
  },
  {
    "id": 8,
    "name": "Jakub Voracek",
    "country": "CZE",
    "points": 38,
    "team": 4
  },
  {
    "id": 9,
    "name": "Sidney Crosby",
    "country": "CAN",
    "points": 25,
    "team": 5
  },
  {
    "id": 10,
    "name": "Evgeni Malkin",
    "country": "RUS",
    "points": 50,
    "team": 5
  },
  {
    "id": 11,
    "name": "David Pastrnak",
    "country": "CZE",
    "points": 70,
    "team": 6
  },
  {
    "id": 12 "Patrice Bergeron",
    "country": "CAN",
    "points": 41,
    "team": 6
  },
  {
    "id": 13,
    "name": "Jack Eichel",
    "country": "USA",
    "points": 62,
    "team": 7
  },
  {
    "id": 14,
    "name": "Rasmus Dahlin",
    "country": "SWE",
    "points": 28,
    "team": 7
  },
  {
    "id": 15,
    "name": "Shea Weber",
    "country": "CAN",
    "points": 33,
    "team": 8
  },
  {
    "id": 16,
    "name": "Tomas Tatar",
    "country": "CZE",
    "points": 43,
    "team": 8
  },
  {
    "id": 17,
    "name": "Mitch Marner",
    "country": "CAN",
    "points": 47,
    "team": 10
  },
  {
    "id": 18,
    "name": "Auston Matthews",
    "country": "USA",
    "points": 57,
    "team": 10
  },

  {
    "id": 19,
    "name": "Sebastian Aho",
    "country": "FIN",
    "points": 42,
    "team": 12
  },
  {
    "id": 20,
    "name": "Jacob Slavin",
    "country": "USA",
    "points": 23,
    "team": 12
  },
  {
    "id": 21,
    "name": "Alexander Barkov",
    "country": "FIN",
    "points": 54,
    "team": 13
  },
  {
    "id": 22,
    "name": "Mike Hoffman",
    "country": "CAN",
    "points": 40,
    "team": 13
  },
  {
    "id": 23,
    "name": "Nikita Kucherov",
    "country": "RUS",
    "points": 54,
    "team": 14
  },
  {
    "id": 24,
    "name": "Steven Stamkos",
    "country": "CAN",
    "points": 48,
    "team": 14
  },
  {
    "id": 25,
    "name": "Alex Ovechkin",
    "country": "RUS",
    "points": 50,
    "team": 15
  },
  {
    "id": 26,
    "name": "John Carlson",
    "country": "USA",
    "points": 60,
    "team": 15
  },
  {
    "id": 27,
    "name": "Patrick Kane",
    "country": "USA",
    "points": 63,
    "team": 16
  },
  {
    "id": 28,
    "name": "Johnathan Toews",
    "country": "CAN",
    "points": 44,
    "team": 16
  },
  {
    "id": 29,
    "name": "Dylan Larkin",
    "country": "USA",
    "points": 36,
    "team": 17
  },
  {
    "id": 30,
    "name": "Tyler Bertuzzi",
    "country": "CAN",
    "points": 36,
    "team": 17
  },
  {
    "id": 31,
    "name": "Roman Josi",
    "country": "SWI",
    "points": 48,
    "team": 18
  },
  {
    "id": 32,
    "name": "Victor Arvidsson",
    "country": "SWE",
    "points": 20,
    "team": 18
  },
  {
    "id": 33,
    "name": "Ryan O\'Reilly",
    "country": "CAN",
    "points": 43,
    "team": 19
  },
  {
    "id": 34,
    "name": "Vladimir Tarasenko",
    "country": "RUS",
    "points": 10,
    "team": 19
  },
  {
    "id": 35,
    "name": "Johnny Gaudreau",
    "country": "USA",
    "points": 38,
    "team": 20
  },
  {
    "id": 36,
    "name": "Sean Monahan",
    "country": "CAN",
    "points": 36,
    "team": 20
  },
  {
    "id": 37,
    "name": "Nathan MacKinnon",
    "country": "CAN",
    "points": 72,
    "team": 21
  },
  {
    "id": 38,
    "name": "Cale Makar",
    "country": "CAN",
    "points": 37,
    "team": 21
  },
  {
    "id": 39,
    "name": "Connor McDavid",
    "country": "CAN",
    "points": 76,
    "team": 22
  },
  {
    "id": 40,
    "name": "Leon Draisaitl",
    "country": "GER",
    "points": 75,
    "team": 22
  },
  {
    "id": 41,
    "name": "Elias Pettersson",
    "country": "SWE",
    "points": 51,
    "team": 23
  },
  {
    "id": 42,
    "name": "Brock Boeser",
    "country": "USA",
    "points": 43,
    "team": 23
  },
  {
    "id": 43,
    "name": "Ryan Getzlaf",
    "country": "CAN",
    "points": 33,
    "team": 24
  },
  {
    "id": 44,
    "name": "Sam Steel",
    "country": "CAN",
    "points": 15,
    "team": 24
  },
  {
    "id": 45,
    "name": "Jamie Benn",
    "country": "CAN",
    "points": 23,
    "team": 25
  },
  {
    "id": 46,
    "name": "Tyler Seguin",
    "country": "CAN",
    "points": 36,
    "team": 25
  },
  {
    "id": 47,
    "name": "Anze Kopitar",
    "country": "SVN",
    "points": 43,
    "team": 26
  },
  {
    "id": 48,
    "name": "Drew Doughty",
    "country": "CAN",
    "points": 27,
    "team": 26
  },
  {
    "id": 49,
    "name": "Joe Thornton",
    "country": "CAN",
    "points": 19,
    "team": 28
  },
  {
    "id": 50,
    "name": "Tomas Hertl",
    "country": "CZE",
    "points": 35,
    "team": 28
  },
  {
    "id": 51,
    "name": "Cam Atkinson",
    "country": "USA",
    "points": 26,
    "team": 29
  },
  {
    "id": 52,
    "name": "Seth Jones",
    "country": "USA",
    "points": 28,
    "team": 29
  },
  {
    "id": 53,
    "name": "Eric Staal",
    "country": "CAN",
    "points": 38,
    "team": 30
  },
  {
    "id": 54,
    "name": "Matt Dumba",
    "country": "CAN",
    "points": 16,
    "team": 30
  },
  {
    "id": 55,
    "name": "Blake Wheeler",
    "country": "USA",
    "points": 43,
    "team": 52
  },
  {
    "id": 56,
    "name": "Patrik Laine",
    "country": "FIN",
    "points": 45,
    "team": 52
  },
  {
    "id": 57,
    "name": "Oliver Ekman-Larsson",
    "country": "SWE",
    "points": 22,
    "team": 53
  },
  {
    "id": 58,
    "name": "Taylor Hall",
    "country": "CAN",
    "points": 40,
    "team": 53
  },
  {
    "id": 59,
    "name": "William Karlsson",
    "country": "SWE",
    "points": 34,
    "team": 54
  },
  {
    "id": 60,
    "name": "Ryan Reaves",
    "country": "CAN",
    "points": 9,
    "team": 54
  },
  {
    "id": 61,
    "name": "Brady Tkachuk",
    "country": "USA",
    "points": 27,
    "team": 55
  },
  {
    "id": 62,
    "name": "Thomas Chabot",
    "country": "CAN",
    "points": 27,
    "team": 55
  },
];
