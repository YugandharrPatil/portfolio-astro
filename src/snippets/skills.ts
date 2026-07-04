// NEW
// Languages
import CSharp from "../../public/images/languages/c-sharp.png";
import C from "../../public/images/languages/c.png";
import Cpp from "../../public/images/languages/cpp.png";
import Go from "../../public/images/languages/golang.png";
import JS from "../../public/images/languages/js.png";
import Python from "../../public/images/languages/python.png";
import Rust from "../../public/images/languages/rust.png";
import TS from "../../public/images/languages/typescript.png";

// Arch
import Apache from "../../public/images/devops/apache.png";
import AWS from "../../public/images/devops/aws.png";
import DigitalOcean from "../../public/images/devops/digital-ocean.png";
import Docker from "../../public/images/devops/docker.png";
import Firebase from "../../public/images/devops/firebase.png";
import Linode from "../../public/images/devops/linode.png";
import Nginx from "../../public/images/devops/nginx.png";
import Vercel from "../../public/images/devops/vercel.png";

// WebDev
import ReactNative from "../../public/images/webdev/ChatGPT Image Mar 1, 2026, 06_11_13 PM.png";
import Drizzle from "../../public/images/webdev/drizzle.png";
import MongoDB from "../../public/images/webdev/mongo.png";
import Next from "../../public/images/webdev/next.png";
import NodeJS from "../../public/images/webdev/nodejs.png";
import Prisma from "../../public/images/webdev/prisma.png";
import React from "../../public/images/webdev/react.png";
import Supabase from "../../public/images/webdev/supabase-logo-icon.png";
import TailwindCSS from "../../public/images/webdev/tailwind.png";
import Turso from "../../public/images/webdev/turso.png";

// GameDev
import Blender from "../../public/images/gamedev/blender.png";
import DirectX11 from "../../public/images/gamedev/directx.png";
import SDL from "../../public/images/gamedev/sdl.png";
import Unity from "../../public/images/gamedev/unity.png";

// Misc
import Git from "../../public/images/misc/git.png";
import GitHub from "../../public/images/misc/github.png";
import Postman from "../../public/images/misc/postman.png";

export const languages = [
  { id: 1, imageSrc: C, tooltip: "C" },
  { id: 2, imageSrc: Go, tooltip: "Go" },
  { id: 3, imageSrc: Rust, tooltip: "Rust" },
  // { id: 2, imageSrc: Cpp, tooltip: "C++" },
  // { id: 3, imageSrc: JS, tooltip: "JavaScript" },
  { id: 4, imageSrc: TS, tooltip: "TypeScript" },
  // { id: 5, imageSrc: CSharp, tooltip: "C#" },
  { id: 7, imageSrc: Python, tooltip: "Python" },
];

export const devOps = [
  { id: 1, imageSrc: Docker, tooltip: "Docker" },
  { id: 2, imageSrc: DigitalOcean, tooltip: "Digital Ocean" },
  { id: 3, imageSrc: Linode, tooltip: "Linode" },
  { id: 4, imageSrc: AWS, tooltip: "AWS" },
  { id: 5, imageSrc: Vercel, tooltip: "Vercel" },
  { id: 6, imageSrc: Apache, tooltip: "Apache" },
  { id: 7, imageSrc: Nginx, tooltip: "Nginx" },
  { id: 8, imageSrc: Firebase, tooltip: "Firebase" },
];

export const webDev = [
  { id: 1, imageSrc: NodeJS, tooltip: "NodeJS" },
  { id: 2, imageSrc: React, tooltip: "React" },
  { id: 3, imageSrc: Next, tooltip: "Next" },
  { id: 4, imageSrc: Supabase, tooltip: "Supabase" },
  { id: 5, imageSrc: ReactNative, tooltip: "React Native" },
  // { id: 4, imageSrc: TailwindCSS, tooltip: "TailwindCSS" },
  // { id: 5, imageSrc: Prisma, tooltip: "Prisma" },
  // { id: 6, imageSrc: Drizzle, tooltip: "DrizzleORM" },
  // { id: 7, imageSrc: MongoDB, tooltip: "MongoDB" },
  // { id: 7, imageSrc: Turso, tooltip: "Turso" },
];

export const misc = [
  { id: 1, imageSrc: Git, tooltip: "Git" },
  { id: 2, imageSrc: GitHub, tooltip: "Github" },
  { id: 3, imageSrc: Postman, tooltip: "Postman" },
];

export const gameDev = [
  { id: 1, imageSrc: Unity, tooltip: "Unity Engine" },
  { id: 2, imageSrc: Blender, tooltip: "Blender" },
  { id: 3, imageSrc: DirectX11, tooltip: "DirectX" },
  { id: 4, imageSrc: SDL, tooltip: "SDL" },
];
