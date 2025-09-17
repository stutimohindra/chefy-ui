import React from "react";
import Image from "next/image";
import { bot1, bot2, gallery, main, top1, top2 } from "./styles.css";
import { GalleryProps } from "./types";

const Gallery = ({ foodphotoUrl }: GalleryProps) => {
  return (
    <div className={gallery}>
      <div className={main}>
        <Image
          src={foodphotoUrl[0]!}
          alt="Main"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
      </div>

      <div className={top1}>
        <Image
          src={foodphotoUrl[1]!}
          alt="Top 1"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>

      <div className={top2}>
        <Image
          src={foodphotoUrl[2]!}
          alt="Top 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>

      <div className={bot1}>
        <Image
          src={foodphotoUrl[3]!}
          alt="Bottom 1"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>

      <div className={bot2}>
        <Image
          src={foodphotoUrl[4]!}
          alt="Bottom 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
    </div>
  );
};

export default Gallery;
