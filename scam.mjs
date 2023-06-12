import { fetch, CookieJar } from "node-fetch-cookies";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "fr-FR,en-US;q=0.7,en;q=0.3",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "same-origin",
  "Sec-Fetch-User": "?1",
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
};

const PRENOMS = [
  "Aaron",
  "Abel",
  "Achille",
  "Adam",
  "Adrien",
  "Ahmed",
  "Alban",
  "Alessio",
  "Alexandre",
  "Alexis",
  "Ali",
  "Amaury",
  "Amine",
  "Amir",
  "Anas",
  "Ansgar",
  "Antoine",
  "Antonin",
  "Armand",
  "Arnaud",
  "Arthur",
  "Auguste",
  "Augustin",
  "Axel",
  "Ayden",
  "Aylan",
  "Aymen",
  "Ayoub",
  "Bailintin",
  "Baptiste",
  "Basile",
  "Bastien",
  "Béatrisse",
  "Benjamin",
  "Bilal",
  "Charles",
  "Charly",
  "Clément",
  "Colin",
  "Corentin",
  "Corinna",
  "Daniel",
  "David",
  "Diégo",
  "Dylan",
  "Élias",
  "Élie",
  "Éliot",
  "Éliott",
  "Émile",
  "Enzo",
  "Erwan",
  "Esteban",
  "Ethan",
  "Eugenie",
  "Évan",
  "Félix",
  "Gabin",
  "Gabriel",
  "Gaspard",
  "Hélène",
  "Henrie",
  "Hugo",
  "Ianka",
  "Idriss",
  "Inger",
  "Isaac",
  "Isidro",
  "Jean",
  "Joseph",
  "Jules",
  "Julien",
  "Killian",
  "Léo",
  "Léon",
  "Leonard",
  "Lois",
  "Lorenzo",
  "Louis",
  "Luca",
  "Lucas",
  "Lucien",
  "Mael",
  "Marceau",
  "Marcel",
  "Marin",
  "Marius",
  "Martin",
  "Mateo",
  "Mathias",
  "Mathis",
  "Matteo",
  "Maxime",
  "Mederic",
  "Nathan",
  "Nathan",
  "Nathanael",
  "Nicolas",
  "Noé",
  "Odile",
  "Oscar",
  "Pablo",
  "Paco",
  "Paul",
  "Philippine",
  "Pierre",
  "Quentin",
  "Rafael",
  "Raphaël",
  "Rebecca",
  "Robin",
  "Romain",
  "Romeo",
  "Rosie",
  "Samuel",
  "Sidoine",
  "Simeon",
  "Simon",
  "Theo",
  "Thibault",
  "Thomas",
  "Tiago",
  "Tom",
  "Tristan",
  "Valentin",
  "Victor",
  "Wanda",
  "Welter",
  "William",
  "Youssef",
];

const NOMS = [
  "Auriol",
  "Bernard",
  "Castiel",
  "Chirac",
  "Coty",
  "de Gaulle",
  "Doumergue",
  "Dubois",
  "Durand",
  "Giscard d'Estaing",
  "Hollande",
  "Johnson",
  "Lebrun",
  "Macron",
  "Martin",
  "Mitterand",
  "Petit",
  "Poher",
  "Pompidou",
  "Ricard",
  "Richard",
  "Robert",
  "Sarkozy",
  "Singer",
  "Thiers",
  "Thomas",
  "Uriel",
  "Winchester",
];
const TYPE_RUES = ["impasse", "rue", "rue", "rue", "avenue", "chemin"];
const RUES = [
  "Charles de Gaulle",
  "Louis Pasteur",
  "Victor Hugo",
  "Jean Jaurès",
  "Jean Moulin",
  "Léon Gambetta",
  "Général Leclerc",
  "Jules Ferry",
  "Flamants",
  "Françoise Dolto",
  "Louis Masse",
  "Mascard",
  "Nicolas-Louis Vauquelin",
  "Toul",
  "Berthy Albrecht",
  "Charles Valaze",
  "Firmin Boissin",
  "Van Dyck",
  "Édouard Vaillant",
  "Ernest Mérimée",
  "Marguerite Duras",
  "Saunière",
  "Mage",
  "Iris",
  "Noël Ballay",
  "Nantes",
  "Alexandre Fleming",
  "Orfèvres",
  "Pages",
  "Charles Géniaux",
  "Général Bourbaki",
  "Lozère",
  "Paul Bély",
  "Octave Léry",
  "Fabas",
  "Annie Girardot",
  "Corneille",
  "Alger",
  "Vicdessos",
  "Dautezac",
  "Londres",
  "Jumeaux",
  "Victor Allègre",
  "Pierre Brossolette",
  "Prêtres",
  "Hérault",
  "Nalis",
  "Paul Rocache",
  "Clair Matin",
  "Alexandre Falguière",
  "Lafayette",
  "Paul Mesplé",
  "Hélène Boucher",
  "Colette",
  "Jeanne Marvig",
  "Labruyère",
  "Kiev",
  "Malafosse",
  "Orpellières",
  "Quêteurs",
  "Arvenseng Delorme",
  "Pargaminières",
  "Roquemaurel",
  "Arc-en-Ciel",
  "Jean Criq",
  "Ernest Feydeau",
  "Gramat",
  "Dupuy du Grez",
  "Neuve",
  "Fonderie",
  "Roland Garros",
  "Christophe Colomb",
  "Estienny",
  "Lausanne",
  "Gallois",
  "Jules Bobillot",
  "Sylvain Marcaillou",
  "Laque",
  "Picard",
  "Poisson",
  "André Baugé",
  "Alphonse Daudet",
  "Agen",
  "Jean-Baptiste Pigalle",
  "Caubère",
  "Jacinthes",
  "Salé",
  "Albert Carovis",
  "Prilloume",
  "Koufra",
  "Vignemale",
  "Pradal",
  "Hyères",
  "René Bazin",
  "Cyclamens",
  "Ernest Renan",
  "Arts",
  "Médecin-Colonel Calbairac",
  "Jean Giono",
  "Moselle",
  "Tastavin",
  "Dominique de Pérignon",
  "Frédéric Petit",
  "Marc Arcis",
  "Gaillac",
  "Foix",
  "Daniel Sorano",
  "Beau Site",
];
const VILLES = [
  "Paris",
  "Marseille",
  "Lyon",
  "Toulouse",
  "Nice",
  "Nantes",
  "Montpellier",
  "Strasbourg",
];

function pickFromList(l) {
  const random = Math.floor(Math.random() * l.length);
  return l[random];
}
function pickFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function pickDigits(length) {
  let digits = "";
  for (let i = 0; i < length; i++) {
    digits += ((Math.random() * 100) | 0) % 10;
  }
  return digits;
}

function computeCCLugn(digits) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digitValue = parseInt(digits.charAt(i));
    let isMultiplied = i % 2 != digits.length % 2;
    if (isMultiplied) {
      digitValue *= 2;
      if (digitValue > 9) {
        digitValue -= 9;
      }
    }
    // console.log(i, digitValue, isMultiplied, sum, sum + digitValue);
    sum += digitValue;
  }
  // console.log(sum);
  return (sum * 9) % 10;
}
function pickCCNumber() {
  let digits = "";
  if (Math.random() < 0.4) {
    // Visa
    digits += "4" + pickDigits(1);
  } else {
    // MasterCard
    digits += "5" + pickFromRange(1, 6);
  }
  // 2 = prefix, 1 = verif
  digits += pickDigits(16 - 2 - 1);
  digits += computeCCLugn(digits);
  return digits;
}

function encodeForm(form) {
  let entries = [];
  for (const [key, value] of Object.entries(form)) {
    entries.push(`${encodeURI(key)}=${encodeURI(value)}`);
  }
  return entries.join("&");
}

async function index(jar) {
  return await fetch(jar, "https://www.chrinopost-erreurlivraison.com/", {
    credentials: "include",
    headers: {
      ...HEADERS,
    },
    method: "GET",
    mode: "cors",
  });
}

async function explain(jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/explain.php",
    {
      // credentials: "omit",
      headers: {
        ...HEADERS,
        "Sec-Fetch-Site": "none",
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function loader(jar, goto) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/loader.php?goto=" + goto,
    {
      headers: {
        ...HEADERS,
      },
      referrer: "https://www.chrinopost-erreurlivraison.com/client/explain.php",
      method: "GET",
      mode: "cors",
    }
  );
}

async function billing(jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/billing.php?",
    {
      headers: {
        ...HEADERS,
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function cookieConsent(jar) {
  return await fetch(
    jar,
    "https://consent.cookiebot.com/logconsent.ashx?action=decline&nocache=1686553543714&cbid=07728dca-296d-43fc-9a3b-107a450004d2&cbt=leveloptin&method=strict&hasdata=true&usercountry=FR&referer=https%3A%2F%2Fwww.chrinopost-erreurlivraison.com",
    {
      headers: {
        ...HEADERS,
        Accept: "*/*",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
      },
      referrer: "https://www.chrinopost-erreurlivraison.com/",
      method: "GET",
      mode: "cors",
    }
  );
}

async function process2(jar, data) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/actions/process002.php",
    {
      headers: {
        ...HEADERS,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      referrer:
        "https://www.chrinopost-erreurlivraison.com/client/billing.php?error=dob",
      body: encodeForm(data),
      method: "POST",
      mode: "cors",
    }
  );
}

async function payment(jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/paiement.php?",
    {
      headers: {
        ...HEADERS,
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function process3(jar, data) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/actions/process003.php",
    {
      credentials: "include",
      headers: {
        ...HEADERS,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      referrer:
        "https://www.chrinopost-erreurlivraison.com/client/paiement.php?",
      body: encodeForm(data),
      method: "POST",
      mode: "cors",
    }
  );
}

async function logResult(res) {
  let text = await res.text();
  let showText = "<Too Long>";
  if (text.length < 50) {
    showText = text;
  }
  console.log(res.status, text.length, showText);
}

async function runWith(infos, card) {
  const jar = new CookieJar();
  logResult(await index(jar));
  logResult(await explain(jar));
  logResult(await loader(jar, "billing"));
  logResult(await billing(jar));
  // logResult(await cookieConsent(jar));
  logResult(await process2(jar, infos));
  logResult(await loader(jar, "card"));
  logResult(await payment(jar));
  logResult(await process3(jar, card));
  logResult(await loader(jar, "finished"));
}

async function run() {
  await runWith(
    {
      lname: pickFromList(NOMS),
      fname: pickFromList(PRENOMS),
      dob: `${pickFromRange(1, 30)}/${pickFromRange(1, 13)}/${pickFromRange(
        1950,
        2003
      )}`,
      phone: `0${pickFromRange(1, 8)}${pickDigits(8)}`,
      adress: `0${pickFromRange(1, 300)} ${pickFromList(
        TYPE_RUES
      )} ${pickFromList(RUES)}`,
      city: pickFromList(VILLES),
      zip: pickDigits(5),
      continue: "",
    },
    {
      ccnum: pickCCNumber(),
      ccexp: `0${pickDigits(1)}/${pickFromRange(24, 30)}`,
      ccvv: pickDigits(3),
      continue: "",
    }
  );
}

async function runLoop(bucketSize, total) {
  let bucket = [];
  for (let i = 0; i < total; i++) {
    bucket.push(run());
    if (bucket.length >= bucketSize) {
      await bucket.shift();
    }
  }
}

runLoop(20, 10000);
