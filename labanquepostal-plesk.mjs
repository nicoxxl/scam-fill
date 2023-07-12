import { fetch, CookieJar } from "node-fetch-cookies";
import {
  HEADERS,
  PRENOMS,
  NOMS,
  TYPE_RUES,
  RUES,
  VILLES,
  USER_AGENTS,
  sleep,
  pickFromList,
  pickFromRange,
  pickDigits,
  computeCCLugn,
  pickCCNumber,
  encodeForm,
} from "./common.mjs";

async function index(extraHeaders, jar) {
  return await fetch(jar, "https://vszq.216-52-136-49.plesk.page/TYFJH/", {
    credentials: "omit",
    headers: {
      ...HEADERS,
      ...extraHeaders,
    },
    method: "GET",
    mode: "cors",
  });
}

async function response(extraHeaders, jar, credentials) {
  return await fetch(
    jar,
    "https://vszq.216-52-136-49.plesk.page/TYFJH/response.php",
    {
      credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
      referrer: "https://vszq.216-52-136-49.plesk.page/TYFJH/",
      body: encodeForm(credentials),
      method: "POST",
      mode: "cors",
    }
  );
}

async function miseÀJourGet(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour.php",
    {
      credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      referrer: "https://vszq.216-52-136-49.plesk.page/TYFJH/",
      method: "GET",
      mode: "cors",
    }
  );
}

async function miseÀJourPost(extraHeaders, jar, phone) {
  return await fetch(
    jar,
    "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour.php",
    {
      credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,

        "Content-Type": "application/x-www-form-urlencoded",
      },
      referrer: "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour.php",
      body: encodeForm(phone),
      method: "POST",
      mode: "cors",
    }
  );
}

async function màjCarteGet(extraHeaders, jar) {
  return await fetch(
    jar,
    "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour_Carte.php",
    {
      credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      referrer: "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour.php",
      method: "GET",
      mode: "cors",
    }
  );
}

async function màjCartePost(extraHeaders, jar, card) {
  return await fetch(
    jar,
    "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour_Carte.php",
    {
      credentials: "omit",
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
      referrer:
        "https://vszq.216-52-136-49.plesk.page/TYFJH/mise_a_jour_Carte.php",
      body: encodeForm(card),
      method: "POST",
      mode: "cors",
    }
  );
}

async function runWith(extraHeaders, credentials, phone, card) {
  const jar = new CookieJar();
  await index(extraHeaders, jar);
  await sleep(pickFromRange(200, 400));
  await response(extraHeaders, jar, credentials);
  await sleep(pickFromRange(200, 400));
  await miseÀJourGet(extraHeaders, jar);
  await sleep(pickFromRange(4000, 10000));
  await miseÀJourPost(extraHeaders, jar, phone);
  await sleep(pickFromRange(200, 400));
  await màjCarteGet(extraHeaders, jar);
  await sleep(pickFromRange(6000, 12000));
  await màjCartePost(extraHeaders, jar, card);
}

async function run(i) {
  await runWith(
    {
      "User-Agent": pickFromList(USER_AGENTS),
    },
    {
      login: pickDigits(11),
      password: pickDigits(6),
    },
    {
      téléphone: pickDigits(9),
    },
    {
      d: pickCCNumber(),
      mois: `${pickFromRange(1, 12)}`.padStart(2, "0"),
      expireYY: pickFromRange(24, 30),
      a: pickDigits(3),
    }
  );
  console.log(`Done: ${i}`);
}

async function runLoop(bucketSize, total) {
  let bucket = [];
  let done = 0;
  for (let i = 0; i < total; i++) {
    if (i != 0) {
      await sleep(pickFromRange(1000, 3000));
    }
    console.log(`Start: ${i} (${i - done})`);
    bucket.push(run(i));
    if (bucket.length >= bucketSize) {
      await bucket.shift();
      done += 1;
    }
  }
}

runLoop(5, 10000);
