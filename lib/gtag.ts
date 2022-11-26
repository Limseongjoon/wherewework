export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // convert ascii to utf-8
  const decoded = decodeURI(url);

  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_title: decoded,
    page_path: decoded,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// https://support.google.com/analytics/answer/1033068#Anatomy&zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90%EC%84%9C%EB%8A%94-%EB%8B%A4%EC%9D%8C-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%8B%A4%EB%A3%B9%EB%8B%88%EB%8B%A4
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
