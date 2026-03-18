const capabilities = [
  {
    module: "用户洞察",
    description: "从低能量用户、Prompt 编写低效、复杂命盘解读等场景中识别真实摩擦",
  },
  {
    module: "AI 交互设计",
    description: "多轮追问、结构化输出、Persona 分层、结果消费体验优化",
  },
  {
    module: "生成控制",
    description: "Analyzer/Composer 模式、字段约束、fallback 机制、风险降级策略",
  },
  {
    module: "产品验证",
    description: "核心用户测试、关键路径验证、跨项目迁移验证",
  },
  {
    module: "MVP 落地",
    description: "Vercel 上线、GitHub 管理、Demo 可访问、成本可控",
  },
];

export default function Capability() {
  return (
    <section id="capability" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 text-center">
          能力映射
        </h2>
        <p className="text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
          将项目经验转化为可识别的产品能力，帮助招聘方快速理解价值
        </p>

        <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-900 w-1/4">
                    能力模块
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-900">
                    体现方式
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {capabilities.map((item, index) => (
                  <tr key={index} className="hover:bg-zinc-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900">
                      {item.module}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
