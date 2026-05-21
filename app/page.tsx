export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* 背景光效 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      </div>

      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-black tracking-tight">
              DJU AI Translator
            </h1>

            <p className="text-sm text-white/50">
              Korean University Smart Translation
            </p>

          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/70">

            <a href="#features" className="hover:text-cyan-400 transition">
              核心功能
            </a>

            <a href="#tutorial" className="hover:text-cyan-400 transition">
              安装教程
            </a>

            <a href="#forum" className="hover:text-cyan-400 transition">
              用户论坛
            </a>

          </nav>

          {/* 下载按钮 */}
          <a
            href="/plugin.zip"
            download
            className="
              px-6
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              font-bold
              shadow-lg
              shadow-cyan-500/30
              hover:scale-105
              transition-all
            "
          >
            下载插件
          </a>

        </div>

      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* 左侧 */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">

              AI Powered Translation Extension

            </div>

            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">

              韩国大学教务系统

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                AI翻译插件

              </span>

            </h2>

            <p className="text-xl text-white/65 leading-relaxed mb-10">

              专为韩国大学场景深度优化。
              支持教务系统、选课系统、成绩查询、学分系统、毕业审核等复杂韩文页面智能翻译。

            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="/plugin.zip"
                download
                className="
                  px-10
                  py-5
                  rounded-3xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-xl
                  font-black
                  shadow-2xl
                  shadow-cyan-500/30
                  hover:scale-105
                  transition-all
                "
              >
                立即下载
              </a>

            </div>

          </div>

          {/* 右侧卡片 */}
          <div className="relative">

            <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h3 className="text-2xl font-bold">
                    DJU AI Translator
                  </h3>

                  <p className="text-white/50">
                    Ultra Smooth Ultimate Edition
                  </p>

                </div>

                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

              </div>

              <div className="space-y-6">

                <div>

                  <div className="flex justify-between text-white/70 mb-2">

                    <span>AI翻译进度</span>

                    <span>87%</span>

                  </div>

                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <button className="py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 font-bold hover:scale-105 transition-all">

                    开始翻译

                  </button>

                  <button className="py-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all">

                    恢复原文

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 功能 */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h3 className="text-5xl font-black mb-6">
            核心功能
          </h3>

          <p className="text-white/50 text-lg">
            为韩国大学场景深度优化
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "AI智能翻译",
              desc: "支持复杂韩文页面精准翻译"
            },
            {
              title: "无刷新恢复",
              desc: "恢复原文无需刷新网页"
            },
            {
              title: "超流畅UI",
              desc: "可移动、缩放、丝滑动画"
            },
            {
              title: "深度DOM解析",
              desc: "支持表格与复杂嵌套结构"
            },
          ].map((item, i) => (

            <div
              key={i}
              className="
                p-8
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

              <h4 className="text-2xl font-bold mb-4">
                {item.title}
              </h4>

              <p className="text-white/60 leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* 安装教程 */}
      <section
        id="tutorial"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h3 className="text-5xl font-black mb-6">
            安装教程
          </h3>

          <p className="text-white/50 text-lg">
            三分钟完成安装
          </p>

        </div>

        <div className="space-y-8">

          {[
            "下载插件 ZIP",
            "打开 Chrome 扩展管理",
            "开启开发者模式",
            "加载已解压扩展程序",
            "选择插件文件夹",
            "完成安装开始翻译"
          ].map((step, i) => (

            <div
              key={i}
              className="
                flex
                items-center
                gap-6
                p-8
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >

              <div className="
                min-w-[64px]
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                flex
                items-center
                justify-center
                text-2xl
                font-black
              ">

                {i + 1}

              </div>

              <div>

                <h4 className="text-2xl font-bold mb-2">
                  {step}
                </h4>

                <p className="text-white/50">
                  简单快速，无需复杂配置
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* 用户论坛 */}
      <section
        id="forum"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h3 className="text-5xl font-black mb-6">
            用户论坛
          </h3>

          <p className="text-white/50 text-lg">
            问题反馈 · 更新日志 · 用户交流
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "问题反馈",
              desc: "提交翻译错误与BUG"
            },
            {
              title: "更新日志",
              desc: "查看最新版本更新内容"
            },
            {
              title: "用户交流",
              desc: "分享韩国大学使用经验"
            }
          ].map((item, i) => (

            <div
              key={i}
              className="
                p-10
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:border-cyan-400/40
                transition-all
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

              <h4 className="text-3xl font-bold mb-4">
                {item.title}
              </h4>

              <p className="text-white/60 leading-relaxed mb-8">
                {item.desc}
              </p>

              <button className="
                px-6
                py-3
                rounded-2xl
                bg-white/10
                hover:bg-white/15
                transition-all
              ">

                进入

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>

            <h4 className="text-xl font-bold">
              DJU AI Translator
            </h4>

            <p className="text-white/40 text-sm mt-1">
              Korean University Smart Translation Platform
            </p>

          </div>

          <div className="text-white/40 text-sm">

            © 2026 DJU AI Translator. All rights reserved.

          </div>

        </div>

      </footer>

    </main>
  );
}
