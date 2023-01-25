const axios = require("axios");

async function fedexData(trackingNumber) {
  const API_URL = `https://api.fedex.com/track/v2/shipments`;

  const headers = {
    authority: "api.fedex.com",
    path: "/track/v2/shipments",
    scheme: "https",
    accept: "application/json",
    authorization: "Bearer l7b8ada987a4544ff7a839c8e1f6548eea",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
  };

  const payload = {
    appDeviceType: "WTRK",
    appType: "WTRK",
    supportCurrentLocation: true,
    trackingInfo: [
      {
        trackNumberInfo: {
          trackingCarrier: "",
          trackingNumber: trackingNumber,
          trackingQualifier: `2459737000~${trackingNumber}~FX`,
        },
      },
    ],
    uniqueKey: "",
  };
  const response = await axios
    .post(API_URL, payload, {
      headers: headers,
    })
    .catch(console.error);
  const data = await response.json();
  console.log(response);
}

async function fedexDataTest() {
  const response = await axios
    .post(
      "https://api.fedex.com/track/v2/shipments",
      {
        appDeviceType: "WTRK",
        appType: "WTRK",
        supportCurrentLocation: true,
        trackingInfo: [
          {
            trackNumberInfo: {
              trackingCarrier: "",
              trackingNumber: "390875905838",
            },
          },
        ],
        uniqueKey: "",
      },
      {
        headers: {
          authority: "api.fedex.com",
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9",
          authorization: "Bearer l7b8ada987a4544ff7a839c8e1f6548eea",
          cookie:
            'siteDC=edc; xacc=CA; fdx_cbid=30375628281669239167063490244751; fdx_locale=en_US; bm_sz=AA00A63FF64A9BD2DFC8C550F92B852E~YAAQvX86F6RvjIaEAQAAx1tophFXD0nf1UKaF6QVW3MbrxkGuogoO7sqFuiqZn0I0XLXLd75cYe0wnFrJNlhTFdIHv4BiAHioP8jv2hrcQN5Ssvh+eeFtpmS7mKlzYxE8oj2GXqd53l/V1YUUNQmaYi9B8yNyuKIgUOHsfQ2VyAkqWbsyJlJmZGMsIsBTQEV0PXjtiAmRzdy+dd9wfdNiVuxjmfM4qzePpIlI72PV1hoEfdGpuJkB1SQhKc17FLVHhl3Kw3vCnD9GmlxtK494630JI4fE/036lqxLwaKfI98tA==~3683385~3163188; PIM-SESSION-ID=b2WT4R5FvgG0Kplz; optimizelyEndUserId=oeu1669239168756r0.5154264064494711; isTablet=false; isMobile=false; isWireless=false; ak_bmsc=C9D5D5124BBC840B66BCDB76CAB57B90~000000000000000000000000000000~YAAQvX86FwJwjIaEAQAAYGBophHBjNJFyCSETvDTUcrdGlel7eZNkFqS601lQQdAPToGaJdpUX1TRB6OsfKqlgfX1LMkiwLF4k1RoP+9fgamNLglcXroIaoJGtzYjHemqW5q5a2EVGLCl0jIVup2TtT+xsQclUsaTykLgwoAUP6vYnlxD0L6GTKzj+Lf9mksUYnqPtLOAX8Ggp2ZFooLabfBJK0iVgTL23ccxFnA50qU4307EBnRlyagVHZ766heImC7ajOiFNBukgr2aYw36J3rDkOEhnVCk9ug3h5K+rjQTOPOtKBFbvu7H+jN2y/32m+mtHlr2bU9zLM/E6pqH6fOBkxdgZwumVnZtwQ9ItsShr8AcK1nvFXrL5LJdb4+shmB+ElreYQRLyo+9e2IVQKTta9tC817vNJqvzvJ3IL97Kq1Kp1pV8O9wGHen+YSwi8uEkxoSNpRX3gXC2oJRd+pKLmnA2F1TDHrSuzYUIqT; aemserver=PROD-P-dotcom-c0031753.prod.cloud.fedex.com; gdl-clientId=85961a2a-c4ea-41ee-85cf-6274976d6215; s_invisit=true; g_sref=(direct); g_stime=1669239169758; s_vnum=1669265999999&vn=1; SameSite=None; at_check=true; AMCVS_1E22171B520E93BF0A490D44%40AdobeOrg=1; _gcl_au=1.1.71562049.1669239171; s_ecid=MCMID%7C50490316852426187661497261686290058680; Nina-nina-fedex-session=%7B%22loginStatus%22%3A%22loggedOut%22%2C%22locale%22%3A%22en_us%22%2C%22lcstat%22%3Afalse%7D; AMCV_1E22171B520E93BF0A490D44%40AdobeOrg=359503849%7CMCIDTS%7C19320%7CMCMID%7C50490316852426187661497261686290058680%7CMCAAMLH-1669843970%7C7%7CMCAAMB-1669843970%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1669246370s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1; mboxEdgeCluster=34; gpv_pageName=fedex/apps/wtrk/detailedtracking; s_cc=true; _abck=206A45462F288CD1C4DC1915FAE1F934~0~YAAQzX86F8uFcIWEAQAASYBopgg9mXDa4EJxgOoCFFpasIwfVUW3SsVT9ZEVFzsF9L7vdHGMRbefvW8tw0ayOdiQhZJ13uJgE4gZx4Dr/6LucFoaHLlnxTBrkNnYMsDAvbbO6sMXjXZoAZHBOCHij1PjAKWqV0b1JSZ7S9fnKrxoaC5JhLq7887v0cmt3LDTQxMx+DeVgt/0xBhdf24+e25TtEvImIxAZiJbCt02iLQxzfrk3S0OLRFXa9y2pEDAbpsmGaZ6Z1JySdvz25te1oxc7m/P9dZXrVckEejyhLK2jNS7KsXzmdGpyGjfNpXpLBHIUwmM307Qrsr68WFYV6rwoQKgNg5V2njb2m3ynqr34gl3arZHlW+aNvGQkcYSBajNPrsQtbbHLKiK5cxE67Su5AC2U3Y=~-1~-1~-1; mbox=session#8266a6eda4554d0c8ca030c8c1be983b#1669241039|PC#8266a6eda4554d0c8ca030c8c1be983b.34_0#1732483979; ADRUM=s=1669239182722&r=https%3A%2F%2Fwww.fedex.com%2Ffedextrack%2F%3F1516514479; s_ppv=fedex/apps/wtrk/detailedtracking%2C87%2C87%2C0; ADRUM_BTa="R:88|g:ba9cba65-860b-479b-9805-3291bf374511|n:fedex1_b2302943-9419-49fb-b06e-405cc744a61c"; ADRUM_BT1="R:88|i:13912289|e:26"; bm_sv=27D2C5BE59C4A0E5843571759585CF9D~YAAQzX86F/OIcIWEAQAARphophHUwYhdTXMW3BK6K06+A5zdXduuKeFYc2mA6ouoU+QUdMbg72E5BcycYZVsU3WyARIj+D7pHrBhhhX/dCEsRmvRn7o0deJeRDkFZRyRvmBdkcS+WJBjkYUtSru0RKv0X+zqlsVd9os1f+kfF1xhJ7nWbcc6ucnSZkOzuyXMCmWem8Of3BRxLypyERBpQ/bzJ9DNG+0rTzAT5vSD+ZMSssPDrOBbzkyfznremL/A~1',
          "content-type": "application/json",
          origin: "https://www.fedex.com",
          referer: "https://www.fedex.com/fedextrack",
          "sec-ch-ua":
            '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
          "x-clientid": "WTRK",
          "x-locale": "en_US",
          "x-requested-with": "XMLHttpRequest",
          "x-version": "1.0.0",
        },
      }
    )
    .catch(console.error);
  const data = await response.data;
  console.log(data.output.packages);
  return data;
}
async function getCookies() {
  const config = {
    headers: {
      authority: "api.fedex.com",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      origin: "https://www.fedex.com",
      referer: "https://www.fedex.com/fedextrack",
      "sec-ch-ua":
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "x-clientid": "WTRK",
      "x-locale": "en_US",
      "x-requested-with": "XMLHttpRequest",
      "x-version": "1.0.0",
    },
  };
  var response = await axios.get(
    "https://www.fedex.com/fedextrack/?trknbr=390875905838&trkqual=2459904000~390875905838~FX",
    config
  ).catch(console.error);
  
  const cookies = await response.headers['set-cookie']
  
  const cookieString = cookies.join("; ")
  config.headers.cookie = cookieString
  config.headers.authorization = "Bearer l7b8ada987a4544ff7a839c8e1f6548eea"

  var response = await axios
    .post(
      "https://api.fedex.com/track/v2/shipments",
      {
        appDeviceType: "WTRK",
        appType: "WTRK",
        supportCurrentLocation: true,
        trackingInfo: [
          {
            trackNumberInfo: {
              trackingCarrier: "",
              trackingNumber: "390875905838",
            },
          },
        ],
        uniqueKey: "",
      }, config).catch(console.error)

  const data = await response
  console.log(data);
}

getCookies()


