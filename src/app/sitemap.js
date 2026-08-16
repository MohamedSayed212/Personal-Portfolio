import { SITE_URL } from "../i18n/config";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ];
}
