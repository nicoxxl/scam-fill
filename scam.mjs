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
const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Windows NT 10.0; rv:113.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.42",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.57",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.50",
  "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 OPR/98.0.0.0",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.37",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0",
  "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4.1 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.41",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
  "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 OPR/99.0.0.0",
  "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Mozilla/5.0 (Windows NT 10.0; rv:112.0) Gecko/20100101 Firefox/112.0",
  "Mozilla/5.0 (Windows NT 10.0; rv:114.0) Gecko/20100101 Firefox/114.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.4.603 Yowser/2.5 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

async function index(extraHeaders, jar) {
  return await fetch(jar, "https://www.chrinopost-erreurlivraison.com/", {
    credentials: "include",
    headers: {
      ...HEADERS,
      ...extraHeaders,
    },
    method: "GET",
    mode: "cors",
  });
}

async function explain(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/explain.php",
    {
      // credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,
        "Sec-Fetch-Site": "none",
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function loader(extraHeaders, jar, goto) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/loader.php?goto=" + goto,
    {
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      referrer: "https://www.chrinopost-erreurlivraison.com/client/explain.php",
      method: "GET",
      mode: "cors",
    }
  );
}

async function billing(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/billing.php?",
    {
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function cookieConsent(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://consent.cookiebot.com/logconsent.ashx?action=decline&nocache=1686553543714&cbid=07728dca-296d-43fc-9a3b-107a450004d2&cbt=leveloptin&method=strict&hasdata=true&usercountry=FR&referer=https%3A%2F%2Fwww.chrinopost-erreurlivraison.com",
    {
      headers: {
        ...HEADERS,
        ...extraHeaders,
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

async function process2(extraHeaders, jar, data) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/actions/process002.php",
    {
      headers: {
        ...HEADERS,
        ...extraHeaders,
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

async function payment(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/paiement.php?",
    {
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      method: "GET",
      mode: "cors",
    }
  );
}

async function process3(extraHeaders, jar, data) {
  return await fetch(
    jar,
    "https://www.chrinopost-erreurlivraison.com/client/actions/process003.php",
    {
      credentials: "include",
      headers: {
        ...HEADERS,
        ...extraHeaders,
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
  if (showText != "<Too Long>" || res.status != 200) {
    console.log(res.status, text.length, showText);
  }
}

async function runWith(extraHeaders, infos, card) {
  const jar = new CookieJar();
  logResult(await index(extraHeaders, jar));
  await sleep(pickFromRange(1000, 4000));
  logResult(await explain(extraHeaders, jar));
  await sleep(pickFromRange(1000, 4000));
  logResult(await loader(extraHeaders, jar, "billing"));
  await sleep(pickFromRange(1000, 4000));
  logResult(await billing(extraHeaders, jar));
  await sleep(pickFromRange(1000, 4000));
  // logResult(await cookieConsent(extraHeaders, jar));
  await sleep(pickFromRange(3000, 6000));
  logResult(await process2(extraHeaders, jar, infos));
  await sleep(pickFromRange(1000, 4000));
  logResult(await loader(extraHeaders, jar, "card"));
  await sleep(pickFromRange(1000, 4000));
  logResult(await payment(extraHeaders, jar));
  await sleep(pickFromRange(1000, 4000));
  logResult(await process3(extraHeaders, jar, card));
  await sleep(pickFromRange(1000, 4000));
  logResult(await loader(extraHeaders, jar, "finished"));
  await sleep(pickFromRange(1000, 4000));
}

async function run() {
  await runWith(
    {
      "User-Agent": pickFromList(USER_AGENTS),
    },
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
  let done = 0;
  for (let i = 0; i < total; i++) {
    if (i != 0) {
      await sleep(pickFromRange(1000, 3000));
    }
    console.log(`Start: ${i} (${i-done})`);
    bucket.push(run());
    if (bucket.length >= bucketSize) {
      await bucket.shift();
      done += 1;
      console.log(`Done: ${done}`);
    }
  }
}

runLoop(20, 10000);
