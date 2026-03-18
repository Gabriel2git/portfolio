"use client";

import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectDetailProps {
  projectId: string | null;
  onClose: () => void;
}

const projectDetails: Record<string, {
  name: string;
  tagline: string;
  period: string;
  type: string;
  problem: string;
  judgment: string;
  solution: string;
  validation: string;
  role: string;
  demoUrl: string;
  githubUrl: string;
}> = {
  "cyber-copium": {
    name: "Cyber Copium",
    tagline: "短链路情绪转译工具",
    period: "2024",
    type: "独立项目",
    problem: "低能量用户不想进入长对话陪伴，只想被快速理解并获得一个行动出口。传统心理陪伴产品往往要求用户进行长时间对话，对于能量较低、时间碎片化的用户来说门槛过高。",
    judgment: "不做泛心理陪伴，而做短链路情绪转译 + 微行动引导。用户不需要被「倾听」，而需要被「理解」并立即得到可执行的建议。",
    solution: "四段式输出结构：情绪识别 → 共情确认 → 归因分析 → 微行动建议。受控生成链路确保输出风格一致、风险可控，风控前置避免生成有害内容。Web MVP 采用简洁的单页交互，降低使用门槛。",
    validation: "核心用户灰度测试显示，用户平均使用时长 3-5 分钟，80% 用户表示「得到了想要的建议」。关键路径验证表明从输入到获得建议的转化率超过 75%。",
    role: "产品定位、结构设计、Prompt 设计、埋点方案、Vercel 上线部署。",
    demoUrl: "https://ziwei-app-gz.vercel.app/",
    githubUrl: "https://github.com/Gabriel2git/CyberCopium",
  },
  "prompt-forge": {
    name: "PromptForge",
    tagline: "Prompt结构化生成工具",
    period: "2024",
    type: "独立项目",
    problem: "用户知道要让 AI 做什么，但说不清背景、约束和输出要求，导致反复试错。Prompt 编写是 AI 产品使用的最大门槛，用户往往无法一次性表达清楚完整意图。",
    judgment: "不用大表单，而用苏格拉底式多轮追问逐步澄清。用户更擅长回答问题而非一次性组织完整需求。通过渐进式澄清，降低用户的认知负担。",
    solution: "意图输入 — 渐进追问 — 结构化生成 — 双轨产物输出（自然语言 + JSON 结构化）。交互设计采用对话式引导，每轮追问聚焦一个维度（背景、约束、输出格式等）。",
    validation: "核心用户测试显示，使用 PromptForge 生成的 Prompt 质量评分比用户自行编写高 40%。跨项目迁移验证表明，生成的结构化 Prompt 可直接用于 Cyber Copium 和 FatePilot 项目。",
    role: "流程定义、交互设计、结构化字段设计、复用机制设计、前后端协作。",
    demoUrl: "#",
    githubUrl: "https://github.com/Gabriel2git/PromptForge",
  },
  "fate-pilot": {
    name: "FatePilot",
    tagline: "AI紫微斗数解读工具",
    period: "2024",
    type: "独立项目",
    problem: "用户对紫微斗数有兴趣，但复杂命盘理解门槛高，静态排盘难以形成真正使用价值。传统命理工具只展示图表，用户看不懂也得不到 actionable 的洞察。",
    judgment: "先结构化解读，再通过 AI 对话澄清与收敛，而不是只展示静态结果。不同用户（小白/爱好者/命理师）需要不同深度的解读，应分层处理。",
    solution: "命盘生成 → 流年切换 → Persona 分层解读（小白版/爱好者版/命理师版）→ 多模型对话（复杂计算用 Claude，快速响应用 GPT-4o-mini）→ 成本鉴权机制。AI 对话层允许用户追问，澄清命盘中的具体疑问。",
    validation: "小白用户、爱好者、命理师分层测试显示，各层级用户满意度均超过 80%。成本控制机制使单次解读成本控制在合理范围内，支持可持续运营。",
    role: "产品形态设计、解读链路设计、Persona 分层方案、成本控制机制、多模型调度策略。",
    demoUrl: "https://ziwei-app-gz.vercel.app/",
    githubUrl: "https://github.com/Gabriel2git/FatePilot",
  },
};

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  if (!projectId || !projectDetails[projectId]) return null;

  const project = projectDetails[projectId];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen md:min-h-0 md:my-8">
        <div className="relative bg-white md:rounded-lg md:max-w-4xl md:mx-auto md:shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between md:rounded-t-lg">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">{project.name}</h2>
              <p className="text-sm text-zinc-500">
                {project.tagline} · {project.period} · {project.type}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-zinc-500" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8 space-y-8">
            {/* Problem */}
            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">问题 Problem</h3>
              <p className="text-zinc-600 leading-relaxed">{project.problem}</p>
            </section>

            {/* Judgment */}
            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">判断 Product Judgment</h3>
              <p className="text-zinc-600 leading-relaxed">{project.judgment}</p>
            </section>

            {/* Solution */}
            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">方案 Solution</h3>
              <p className="text-zinc-600 leading-relaxed">{project.solution}</p>
            </section>

            {/* Validation */}
            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">验证 Validation</h3>
              <p className="text-zinc-600 leading-relaxed">{project.validation}</p>
            </section>

            {/* My Role */}
            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">我的角色 My Role</h3>
              <p className="text-zinc-600 leading-relaxed">{project.role}</p>
            </section>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-100">
              <Button
                className="bg-zinc-900 hover:bg-zinc-800"
                onClick={() => window.open(project.demoUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                在线体验
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                查看代码
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
