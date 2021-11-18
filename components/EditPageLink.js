import { React } from "react";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function EditPageLink() {
  const { publicRuntimeConfig } = getConfig();
  const editRepositoryBase = publicRuntimeConfig.editRepositoryBase;
  if (editRepositoryBase) {
    var editUrl;
    const router = useRouter();
    if (router.route.match(/\/$/)) {
      editUrl = editRepositoryBase + "/index.md";
    } else {
      editUrl = editRepositoryBase + router.route + ".md";
    }
    return (
      <>
        <p className="edit-page-link">
          <a href={editUrl}>Edit this page</a>
        </p>
      </>
    );
  } else {
    return null;
  }
}
