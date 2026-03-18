"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
          郑皓予
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-zinc-600 mb-6">
          C端AI应用产品经理｜AI交互 / AIGC工具方向
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          聚焦 AI 输入转译、生成可控性与结果消费体验，关注如何将模糊用户意图转化为结构化输出并落地为可验证产品。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-8"
            onClick={handleScrollToProjects}
          >
            查看项目
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            下载简历
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Gabriel2git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="mailto:zhy_zju@163.com"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm">邮箱</span>
          </a>
        </div>
      </div>
    </section>
  );
}
