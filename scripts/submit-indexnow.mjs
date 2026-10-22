import https from "node:https";

const INDEXNOW_KEY = "b2279db494ccbf4bdde4df4501c5701d";
const HOST = "spectrumplumbingirvine.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const URL_LIST = [
  "https://spectrumplumbingirvine.com/",
  "https://spectrumplumbingirvine.com/services/",
  "https://spectrumplumbingirvine.com/service-areas/",
  "https://spectrumplumbingirvine.com/about/",
  "https://spectrumplumbingirvine.com/contact/",
  "https://spectrumplumbingirvine.com/how-it-works/",
  "https://spectrumplumbingirvine.com/faq/",
  "https://spectrumplumbingirvine.com/blog/",
  "https://spectrumplumbingirvine.com/editorial-policy/",
  "https://spectrumplumbingirvine.com/sitemap/",
  "https://spectrumplumbingirvine.com/privacy-policy/",
  "https://spectrumplumbingirvine.com/terms-of-use/",
  "https://spectrumplumbingirvine.com/disclaimer/",
  "https://spectrumplumbingirvine.com/accessibility/",
  "https://spectrumplumbingirvine.com/services/emergency-plumbing-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/drain-cleaning-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/water-heater-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/tankless-water-heaters-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/leak-detection-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/slab-leak-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/sewer-line-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/hydro-jetting-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/toilet-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/faucet-and-sink-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/garbage-disposal-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/pipe-repair-and-repiping-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/water-line-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/gas-line-services-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/commercial-plumbing-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/water-softener-installation-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/backflow-testing-irvine-ca/",
  "https://spectrumplumbingirvine.com/services/sump-pump-repair-irvine-ca/",
  "https://spectrumplumbingirvine.com/service-areas/woodbridge/",
  "https://spectrumplumbingirvine.com/service-areas/turtle-rock/",
  "https://spectrumplumbingirvine.com/service-areas/northwood/",
  "https://spectrumplumbingirvine.com/service-areas/westpark/",
  "https://spectrumplumbingirvine.com/service-areas/university-park/",
  "https://spectrumplumbingirvine.com/service-areas/portola-springs/",
  "https://spectrumplumbingirvine.com/service-areas/great-park/",
  "https://spectrumplumbingirvine.com/service-areas/orchard-hills/",
  "https://spectrumplumbingirvine.com/service-areas/quail-hill/",
  "https://spectrumplumbingirvine.com/service-areas/cypress-village/",
  "https://spectrumplumbingirvine.com/blog/signs-of-a-slab-leak/",
  "https://spectrumplumbingirvine.com/blog/copper-pinhole-leaks-irvine-repipe/",
  "https://spectrumplumbingirvine.com/blog/hydro-jetting-vs-snaking-sewer-cleaning/",
  "https://spectrumplumbingirvine.com/blog/tankless-water-heater-descaling-flush-guide/",
  "https://spectrumplumbingirvine.com/blog/earthquake-gas-shut-off-valves-irvine/",
  "https://spectrumplumbingirvine.com/blog/how-to-shut-off-main-water-valve-irvine/",
  "https://spectrumplumbingirvine.com/blog/garbage-disposal-humming-jammed-fix/",
  "https://spectrumplumbingirvine.com/blog/commercial-plumbing-backflow-testing-irvine/",
  "https://spectrumplumbingirvine.com/blog/why-drains-keep-clogging/",
  "https://spectrumplumbingirvine.com/blog/water-heater-not-heating/",
  "https://spectrumplumbingirvine.com/blog/irvine-hard-water-plumbing/",
  "https://spectrumplumbingirvine.com/authors/spectrum-editorial-team/"
];

const payload = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

async function submitToIndexNow(endpointHost) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: endpointHost,
      port: 443,
      path: "/indexnow",
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    console.log(`Submitting ${URL_LIST.length} URLs to https://${endpointHost}/indexnow...`);

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`[SUCCESS] ${endpointHost} returned HTTP ${res.statusCode} (URLs Accepted)`);
        } else {
          console.log(`[RESPONSE] ${endpointHost} returned HTTP ${res.statusCode}: ${data || res.statusMessage}`);
        }
        resolve({ host: endpointHost, status: res.statusCode, body: data });
      });
    });

    req.on("error", (err) => {
      console.error(`[ERROR] Failed submitting to ${endpointHost}:`, err.message);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log(`========================================`);
  console.log(`IndexNow Batch Submission`);
  console.log(`Host: ${HOST}`);
  console.log(`Key: ${INDEXNOW_KEY}`);
  console.log(`Key File: ${KEY_LOCATION}`);
  console.log(`Total URLs: ${URL_LIST.length}`);
  console.log(`========================================\n`);

  try {
    await submitToIndexNow("api.indexnow.org");
    await submitToIndexNow("www.bing.com");
    console.log("\nIndexNow submission complete!");
  } catch (error) {
    console.error("IndexNow submission encountered an issue:", error);
    process.exit(1);
  }
}

run();
