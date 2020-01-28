const teams = [
    {
      name: "New Jersey Devils",
      venue: "Prudential Center",
      abbreviation: "NJD",
      roster: [{
        name: "Jack Hughes",
        country: "USA",
        points: 17
      },
      {
        name: "Nico Hischier",
        country: "SWI",
        points: 29
      }]
    },
    {
      name: "New York Islanders",
      venue: "Barclays Center",
      abbreviation: "NYI",
      roster: [{
        name: "Mathew Barzal",
        country: "CAN",
        points: 42
      },
      {
        name: "Anders Lee",
        country: "USA",
        points: 29
      }]
    },
    {
      name: "New York Rangers",
      venue: "Madison Square Garden",
      abbreviation: "NYR",
      roster: [{
        name: "Mika Zibanejad",
        country: "SWE",
        points: 39
      },
      {
        name: "Kaapo Kakko",
        country: "FIN",
        points: 16
      }]
    },
    {
      name: "Philadelphia Flyers",
      venue: "Wells Fargo Center",
      abbreviation: "PHI",
      roster: [{
        name: "Claude Giroux",
        country: "CAN",
        points: 35
      },
      {
        name: "Jakub Voracek",
        country: "CZE",
        points: 38
      }]
    },
    {
      name: "Pittsburgh Penguins",
      venue: "PPG Paints Arena",
      abbreviation: "PIT",
      roster: [{
        name: "Sidney Crosby",
        country: "CAN",
        points: 25
      },
      {
        name: "Evgeni Malkin",
        country: "RUS",
        points: 50
      }]
    },
    {
      name: "Boston Bruins",
      venue: "TD Garden",
      venue: "BOS",
      roster: [{
        name: "David Pastrnak",
        country: "CZE",
        points: 70
      },
      {
        name: "Patrice Bergeron",
        country: "CAN",
        points: 41
      }]
    },
    {
      name: "Buffalo Sabres",
      venue: "KeyBank Center",
      abbreviation: "BUF",
      roster: [{
        name: "Jack Eichel",
        country: "USA",
        points: 62
      },
      {
        name: "Rasmus Dahlin",
        country: "SWE",
        points: 28
      }]
    },
    {
      name: "Montréal Canadiens",
      venue: "Bell Centre",
      abbreviation: "MTL",
      roster: [{
        name: "Shea Weber",
        country: "CAN",
        points: 33
      },
      {
        name: "Tomas Tatar",
        country: "CZE",
        points: 43
      }]
    },
    {
      name: "Toronto Maple Leafs",
      venue: "Scotiabank Arena",
      abbreviation: "TOR",
      roster: [{
        name: "Mitch Marner",
        country: "CAN",
        points: 47
      },
      {
        name: "Auston Matthews",
        country: "USA",
        points: 57
      }]
    },
    {
      name: "Carolina Hurricanes",
      venue: "PNC Arena",
      abbreviation: "CAR",
      roster: [{
        name: "Sebastian Aho",
        country: "FIN",
        points: 42
      },
      {
        name: "Jacob Slavin",
        country: "USA",
        points: 23
      }]
    },
    {
      name: "Florida Panthers",
      venue: "BB&T Center",
      abbreviation: "FLA",
      roster: [{
        name: "Alexander Barkov",
        country: "FIN",
        points: 54
      },
      {
        name: "Mike Hoffman",
        country: "CAN",
        points: 40
      }]
    },
    {
      name: "Tampa Bay Lightning",
      venue: "AMALIE Arena",
      abbreviation: "TBL",
      roster: [{
        name: "Nikita Kucherov",
        country: "RUS",
        points: 54
      },
      {
        name: "Steven Stamkos",
        country: "CAN",
        points: 48
      }]
    },
    {
      name: "Washington Capitals",
      venue: "Capital One Arena",
      abbreviation: "WSH",
      roster: [{
        name: "Alex Ovechkin",
        country: "RUS",
        points: 50
      },
      {
        name: "John Carlson",
        country: "USA",
        points: 60
      }]
    },
    {
      name: "Chicago Blackhawks",
      venue: "United Center",
      abbreviation: "CHI",
      roster: [{
        name: "Patrick Kane",
        country: "USA",
        points: 63
      },
      {
        name: "Johnathan Toews",
        country: "CAN",
        points: 44
      }]
    },
    {
      name: "Detroit Red Wings",
      venue: "Little Caesars Arena",
      abbreviation: "DET",
      roster: [{
        name: "Dylan Larkin",
        country: "USA",
        points: 36
      },
      {
        name: "Tyler Bertuzzi",
        country: "CAN",
        points: 36
      }]
    },
    {
      name: "Nashville Predators",
      venue: "Bridgestone Arena",
      abbreviation: "NSH",
      roster: [{
        name: "Roman Josi",
        country: "SWI",
        points: 48
      },
      {
        name: "Victor Arvidsson",
        country: "SWE",
        points: 20
      }]
    },
    {
      name: "St. Louis Blues",
      venue: "Enterprise Center",
      abbreviation: "STL",
      roster: [{
        name: "Ryan O\'Reilly",
        country: "CAN",
        points: 43
      },
      {
        name: "Vladimir Tarasenko",
        country: "RUS",
        points: 10
      }]
    },
    {
      name: "Calgary Flames",
      venue: "Scotiabank Saddledome",
      abbreviation: "CGY",
      roster: [{
        name: "Johnny Gaudreau",
        country: "USA",
        points: 38
      },
      {
        name: "Sean Monahan",
        country: "CAN",
        points: 36
      }]
    },
    {
      name: "Colorado Avalanche",
      venue: "Pepsi Center",
      abbreviation: "COL",
      roster: [{
        name: "Nathan MacKinnon",
        country: "CAN",
        points: 72
      },
      {
        name: "Cale Makar",
        country: "CAN",
        points: 37
      }]
    },
    {
      name: "Edmonton Oilers",
      venue: "Rogers Place",
      abbreviation: "EDM",
      roster: [{
        name: "Connor McDavid",
        country: "CAN",
        points: 76
      },
      {
        name: "Leon Draisaitl",
        country: "GER",
        points: 75
      }]
    },
    {
      name: "Vancouver Canucks",
      venue: "Rogers Arena",
      abbreviation: "VAN",
      roster: [{
        name: "Elias Pettersson",
        country: "SWE",
        points: 51
      },
      {
        name: "Brock Boeser",
        country: "USA",
        points: 43
      }]
    },
    {
      name: "Anaheim Ducks",
      venue: "Honda Center",
      abbreviation: "ANA",
      roster: [{
        name: "Ryan Getzlaf",
        country: "CAN",
        points: 33
      },
      {
        name: "Sam Steel",
        country: "CAN",
        points: 15
      }]
    },
    {
      name: "Dallas Stars",
      venue: "American Airlines Center",
      abbreviation: "DAL",
      roster: [{
        name: "Jamie Benn",
        country: "CAN",
        points: 23
      },
      {
        name: "Tyler Seguin",
        country: "CAN",
        points: 36
      }]
    },
    {
      name: "Los Angeles Kings",
      venue: "STAPLES Center",
      abbreviation: "LAK",
      roster: [{
        name: "Anze Kopitar",
        country: "SVN",
        points: 43
      },
      {
        name: "Drew Doughty",
        country: "CAN",
        points: 27
      }]
    },
    {
      name: "San Jose Sharks",
      venue: "SAP Center at San Jose",
      abbreviation: "SJS",
      roster: [{
        name: "Joe Thornton",
        country: "CAN",
        points: 19
      },
      {
        name: "Tomas Hertl",
        country: "CZE",
        points: 35
      }]
    },
    {
      name: "Columbus Blue Jackets",
      venue: "Nationwide Arena",
      abbreviation: "CBJ",
      roster: [{
        name: "Cam Atkinson",
        country: "USA",
        points: 26
      },
      {
        name: "Seth Jones",
        country: "USA",
        points: 28
      }]
    },
    {
      name: "Minnesota Wild",
      venue: "Xcel Energy Center",
      abbreviation: "MIN",
      roster: [{
        name: "Eric Staal",
        country: "CAN",
        points: 38
      },
      {
        name: "Matt Dumba",
        country: "CAN",
        points: 16
      }]
    },
    {
      name: "Winnipeg Jets",
      venue: "Bell MTS Place",
      abbreviation: "WPG",
      roster: [{
        name: "Blake Wheeler",
        country: "USA",
        points: 43
      },
      {
        name: "Patrik Laine",
        country: "FIN",
        points: 45
      }]
    },
    {
      name: "Arizona Coyotes",
      venue: "Gila River Arena",
      abbreviation: "ARI",
      roster: [{
        name: "Oliver Ekman-Larsson",
        country: "SWE",
        points: 22
      },
      {
        name: "Taylor Hall",
        country: "CAN",
        points: 40
      }]
    },
    {
      name: "Vegas Golden Knights",
      venue: "T-Mobile Arena",
      abbreviation: "VGK",
      roster: [{
        name: "William Karlsson",
        country: "SWE",
        points: 34
      },
      {
        name: "Ryan Reaves",
        country: "CAN",
        points: 9
      }]
    },
    {
      name: "Ottawa Senators",
      venue: "Canadian Tire Centre",
      abbreviation: "OTT",
      roster: [{
        name: "Brady Tkachuk",
        country: "USA",
        points: 27
      },
      {
        name: "Thomas Chabot",
        country: "CAN",
        points: 27
      }]
    }
  ];
