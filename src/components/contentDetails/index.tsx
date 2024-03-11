import React from "react";
import { ContentType } from "@/interfaces/content";

export default function ContentDetails({ contentDetail } : { contentDetail: ContentType }) {
  return (
    <div>
      {contentDetail && (
        <div>
          <video width="750" controls>
            <source src={contentDetail?.videoUrl} type="video/mp4" />
          </video>
          <h2>{contentDetail?.title}</h2>
          <p>{contentDetail?.description}</p>
        </div>
      )}
    </div>
  );
}
