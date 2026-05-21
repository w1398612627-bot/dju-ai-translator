export default function DJUTranslatorWebsite() {

  return (

    <div className="min-h-screen bg-[#07090f] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 blur-[180px] rounded-full" />

      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              DJU AI Translator
            </h1>

            <p className="text-sm text-white/60">
              Korean University Smart Translator
            </p>

          </div>

          <div className="flex gap-3">

            {/* 下载按钮 */}
            <a
              href="/dju-translator-extension-1.0.zip"
              download
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2
                rounded-xl
                bg-cyan-500
                hover:scale-105
                transition-all
                font-semibold
                shadow-lg
                shadow-cyan-500/20
              "
            >
              下载插件
            </a>

            <button className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">

              安装教程

            </button>

          </div>

        </div>

      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6">

              AI Powered Translation Extension

            </div>

            <h2 className="text-6xl font-black leading-tight mb-6">

              韩国大学教务系统

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                AI翻译插件

              </span>

            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">

              专为在韩留学生设计。
              支持教务系统、选课页面、成绩查询、学分系统等复杂韩文页面的智能翻译。

            </p>

            <div className="flex gap-4 flex-wrap">

              {/* 主下载按钮 */}
              <a
                href="https://github.com/w1398612627-bot/dju-ai-translator/releases/download/v1.0/dju-translator-extension1.0.zip"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-lg
                  font-bold
                  hover:scale-105
                  hover:shadow-cyan-500/40
                  transition-all
                  duration-300
                  shadow-2xl
                  shadow-cyan-500/30
                "
              >
                立即下载
              </a>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-lg hover:bg-white/10 transition-all">

                查看教程

              </button>

            </div>

          </div>

          {/* Preview */}
          <div className="relative">

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h3 className="font-bold text-xl">
                    DJU AI Translator
                  </h3>

                  <p className="text-white/50 text-sm">
                    Ultra Smooth Ultimate Edition
                  </p>

                </div>

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              </div>

              <div className="space-y-4">

                <div>

                  <div className="flex justify-between text-sm mb-2 text-white/70">

                    <span>AI翻译进度</span>

                    <span>87%</span>

                  </div>

                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[87%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  <button className="py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold hover:scale-105 transition-all">

                    开始翻译

                  </button>

                  <button className="py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all">

                    恢复原文

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}