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

async function run(i) {
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

runLoop(10, 10000);
