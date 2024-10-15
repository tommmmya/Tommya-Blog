import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Tommmy-Blog/",

  lang: "zh-CN",
  title: "Tommya 个人博客",
  description: "Tommya 个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
