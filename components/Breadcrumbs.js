import { useRouter } from "next/router";
import React from "react";

export default function Breadcrumbs() {
  const router = useRouter();
  if (router.route == "/_error") {
    return null;
  }
  return (
    <>
      {router.route.split("/").map((part, index) => {
        if (index == 0) {
          return (
            <React.Fragment key="/">
              <a href="/">Handbook</a>
            </React.Fragment>
          );
        } else {
          const link = router.route
            .split("/")
            .slice(0, index + 1)
            .join("/");
          return (
            <React.Fragment key={link}>
              {" / "}
              <a href={link}>{part}</a>
            </React.Fragment>
          );
        }
      })}
    </>
  );
}
