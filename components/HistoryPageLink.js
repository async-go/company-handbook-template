import { React } from "react";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function HistoryPageLink() {
  const { publicRuntimeConfig } = getConfig();
  const historyRepositoryBase = publicRuntimeConfig.historyRepositoryBase;
  if (historyRepositoryBase) {
    var historyUrl;
    const router = useRouter();
    if (router.route.match(/\/$/)) {
      historyUrl = historyRepositoryBase + "/index.md";
    } else {
      historyUrl = historyRepositoryBase + router.route + ".md";
    }
    return (
      <>
        <p className="page-helper">
          <a href={historyUrl}>See page history</a>
        </p>
      </>
    );
  } else {
    return null;
  }
}
