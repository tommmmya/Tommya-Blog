import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
   
    // {
    //   text: "生活",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      prefix: "study/",
      children: "structure",
    },
    {
      text: "关于",
      icon: "laptop-code",
      prefix: "about/",
      children: "structure",
    },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
  "/study/": [
   
    {
      text: "知识点",
      icon: "book",
      prefix: "/study/",
      children: "structure",
    },

  ],
  "/about/": [
    "intro",
  ],
  // "/demo/": [
  //   {
  //     text: "日常",
  //     icon: "laptop-code",
  //     prefix: "/demo/",
  //     children: "structure",
  //   },
  // ],

});
