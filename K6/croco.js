import http from "k6/http";
import {check, sleep} from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


// export let options = {
//     vus: 10,
//     // duration: "10s"
//     iterations: 10,
//     thresholds: {                                          //stop running when it fails
//         http_req_duration: ["p(99)<100"]
//     }
// }

//For DASHOARD --> K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=report.html k6 run k6/script.js

export function handleSummary(data) {
    return {
      "result.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }



const baseUrl = "https://test-api.k6.io";       //k6 run script.js --vus 10 --duration 10s -e BASE_URL=https://test-api.k6.io

export default () => {
   const resp =  http.get(`${baseUrl}/public/crocodiles/`);
//    console.log(resp);
    check(resp, {                                         //checks run even if it fails
        'assert status code 200': r => r.status === 200,  //r is the response from the resp
        'assert body contains Bert': r => r.body.includes("Bert")
    })
    sleep(randomIntBetween(0.3,1));
}

const randomUsername = randomString(6)+randomString(6);
const randomEmail = randomEString()+'@gmail.com';

const payload = JSON.stringify({
    "username": randomUsername,
    "email": randomEmail
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  function randomString(length, charset = '') {
	if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';
	let res = '';
	while (length--) res += charset[(Math.random() * charset.length) | 0];
	return res;
}