import { Button } from "@/components/ui/button";
import { Mail, Github, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-zinc-500 mb-12 max-w-2xl mx-auto">
          欢迎交流 C 端 AI 应用、AIGC 工具、对话式产品相关机会
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-800"
            onClick={() => window.open("mailto:zhy_zju@163.com")}
          >
            <Mail className="mr-2 h-4 w-4" />
            发送邮件
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-300"
            onClick={() => window.open("https://github.com/Gabriel2git", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-300"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileDown className="mr-2 h-4 w-4" />
            下载简历
          </Button>
        </div>

        <div className="text-sm text-zinc-400">
          <p>郑皓予 © 2024</p>
          <p className="mt-1">C端AI应用产品经理</p>
        </div>
      </div>
    </section>
  );
}
