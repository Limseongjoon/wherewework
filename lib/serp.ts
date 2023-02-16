import axios from 'axios';
import { load } from 'cheerio';
import puppeteer from 'puppeteer';

const getSerpRankingPuppeteer = async (keyword: string, domain: string) => {
  // const browser = await puppeteer.launch({ headless: false });
  // const pageObj = await browser.newPage();
  // await pageObj.setViewport({
  //   width: 1920,
  //   height: 1080,
  // });
  // await pageObj.goto(
  //   `https://www.google.com/search?q=${encodeURIComponent(
  //     keyword
  //   )}&start=${start}`
  // );
  // await pageObj.waitForSelector('#rso');
  // await pageObj.waitForTimeout(Math.floor(Math.random() * 1000));
  // const content = await pageObj.content();
  // const $ = load(content, { decodeEntities: true });
  // await browser.close();
};

export const getSerpRanking = async (keyword: string, domain: string) => {
  const referer = 'https://www.google.com/';
  const type = 'desktop';

  // 지역별(gl), 언어별(hl) 필터
  const start = 0;
  const num = 100;
  const gl = 'kr';
  const hl = 'ko'; // hl 은 검색결과에 영향 안미치는 듯?

  let url = `https://www.google.com/search?q=${keyword}&start=${start}&num=${num}&gl=${gl}&hl=${hl}`;

  const headers = {
    'User-Agent':
      type === 'desktop'
        ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36'
        : type === 'tablet'
        ? 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
        : type == 'mobile'
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
        : '',
    Referer: referer,
  };
  const data = await fetchData(url, headers);

  const $ = load(data);

  const result = $('#rso');

  let rank = 1;

  const ret: any = {
    found: false,
    rank: null,
    organic_results: [],
  };

  for (let i = 1; i <= num; i++) {
    const ithContainer = result.find(`div:nth-child(${i})`);
    if (!ithContainer) continue;

    const item = ithContainer.find('div.g');
    if (!item) continue;

    // TODO: Get the title, description
    const urlContainer = item.find('div > div > div:nth-child(1) > a');
    if (!urlContainer) continue;

    const url = urlContainer.attr('href');
    if (!url) continue;

    const title = urlContainer.find('h3').html();

    // get google description
    const description = ithContainer
      .find('div > div > div:nth-child(2) > div > span')
      .html();

    // if (!url.startsWith('http')) break;
    ret.organic_results.push({
      // page: page,
      i: i,
      rank: rank,
      url: url,
      title: title,
    });

    if (url?.includes(domain)) {
      ret.found = true;
      ret.rank = rank;
    }

    rank++;
  }

  return ret;
};

// export const getSerpRankingOld = async (keyword: string, domain: string) => {
//   // Set the user agent and the referer to simulate a real search

//   let rank = 1;

//   const organic_results = [];

//   for (let page = 1; page <= 10; page++) {
//     const start = (page - 1) * 10;

//     if (start > 100) {
//       return -1;
//     }

//     const headers = {
//       'User-Agent':
//         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Whale/3.18.154.8 Safari/537.36',
//       Referer: 'https://www.google.com/',
//     };

//     // 지역별(gl), 언어별(hl) 필터 기능 추가
//     // hl 은 영향 안미치는 듯?
//     // referer 도 설정 변경

//     let url = `https://www.google.com/search?q=${keyword}&start=${start}&gl=kr&hl=ko`;
//     const data = await fetchData(url, headers);

//     const $ = load(data);

//     const result = $('#rso');

//     for (let i = 1; i <= 10; i++) {
//       const ithContainer = result.find(`div:nth-child(${i})`);
//       if (!ithContainer) continue;

//       const item = ithContainer.find('div.g');
//       if (!item) continue;

//       // TODO: Get the title, description
//       const linkContainer = item.find('div > div > div:nth-child(1) > a');
//       if (!linkContainer) continue;

//       // console.log('description', description);

//       const link = linkContainer.attr('href');
//       if (!link) continue;

//       const title = linkContainer.find('h3').html();

//       // get google description
//       const description = ithContainer
//         .find('div > div > div:nth-child(2) > div > span')
//         .html();

//       // if (!url.startsWith('http')) break;
//       console.log({
//         page: page,
//         i: i,
//         rank: rank,
//         title: title,
//         link: link,
//         html: item.html()?.replaceAll(/\\/g, ''),
//       });

//       organic_results.push({
//         page: page,
//         i: i,
//         rank: rank,
//         title: title,
//         link: link,
//         html: item.html()?.replaceAll(/\\/g, ''),
//       });

//       if (link?.includes(domain)) {
//         return {
//           status: 'found',
//           organic_results: organic_results,
//         };
//       }

//       rank++;
//     }
//   }
// };

const fetchData = async (url: string, headers: any): Promise<any> => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 429) {
      // scrape.do
      // scraperapi
      // scrapingbee
      // 여러개 순회하면서 스크레이핑 하도록. 하나 막히면 다음으로 넘어가도록.

      const scrape_do_url = `http://api.scrape.do?token=${
        process.env.SCRAPEDO_TOKEN
      }&url=${encodeURIComponent(url)}`;

      const response = await axios.get(scrape_do_url, { headers });
      return response.data;
    } else {
      throw error;
    }
  }
};

function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
