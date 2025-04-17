import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CSSProperties } from "react";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const ICON_STYLES: CSSProperties = {
  width: "50px",
  height: "50px",
  objectFit: "contain",
};

const LOCALHOST_URL = "http://localhost:3000";

export default async function Image() {
  const [montserratBold] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/fonts/Montserrat-Bold.ttf")),
  ]);

  const profileImageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL || LOCALHOST_URL}/assets/images/imageProfileGhibli.png`;
  const iconTypescriptUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL || LOCALHOST_URL}/assets/icons/iconTypescript.svg`;
  const iconNextjsUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL || LOCALHOST_URL}/assets/icons/iconNextjs.svg`;
  const iconReactUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL || LOCALHOST_URL}/assets/icons/iconReact.svg`;
  const iconTailwindUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL || LOCALHOST_URL}/assets/icons/iconTailwind.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          background: "#2f2f2f",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ color: "white", fontSize: "64px" }}>
            Federico Avelin
          </span>
          <span style={{ color: "#f6f200", fontSize: "32px" }}>
            Fullstack Web Developer
          </span>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              alignItems: "center",
            }}
          >
            <img
              src={iconTypescriptUrl}
              alt="typescript icon"
              style={ICON_STYLES}
            />
            <img src={iconNextjsUrl} alt="nextjs icon" style={ICON_STYLES} />
            <img src={iconReactUrl} alt="react icon" style={ICON_STYLES} />
            <img
              src={iconTailwindUrl}
              alt="tailwind icon"
              style={ICON_STYLES}
            />
          </div>
        </div>
        <img
          src={profileImageUrl}
          alt="profile image ghibli style"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "100%",
            marginLeft: "300px",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: montserratBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
