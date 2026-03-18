export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-12 text-center">
          关于我
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Background */}
          <div className="bg-white rounded-lg p-6 border border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900 mb-3">背景</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              浙江大学机械工程本科，转向 C 端 AI 产品方向。具备从 0 到 1 的产品实战经验，能够将技术能力转化为用户价值。
            </p>
          </div>

          {/* Current Advantage */}
          <div className="bg-white rounded-lg p-6 border border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900 mb-3">当前优势</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              有独立上线项目、GitHub 开源、Vercel 在线 Demo，能展示从产品定义到 MVP 验证的完整链路。熟悉 AI 产品特有的交互与生成控制挑战。
            </p>
          </div>

          {/* Focus Areas */}
          <div className="bg-white rounded-lg p-6 border border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900 mb-3">关注方向</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              AI 对话产品、AI 工具产品、AIGC 应用、复杂知识解释、情绪/内容/效率场景。专注于提升 AI 产品的可用性与用户价值转化。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
