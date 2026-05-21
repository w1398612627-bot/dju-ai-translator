export default function DJUTranslatorWebsite() {

  const features = [
    {
      title: "极速韩文翻译",
      desc: "针对韩国大学教务系统优化，支持动态页面与深度DOM翻译。"
    },
    {
      title: "AI智能术语库",
      desc: "自动识别选课、成绩、学分等校园术语，翻译更准确。"
    },
    {
      title: "丝滑UI体验",
      desc: "支持拖动、缩放、动态进度条与毛玻璃现代化界面。"
    },
    {
      title: "多浏览器支持",
      desc: "支持 Chrome、Edge 等 Chromium 浏览器。"
    }
  ];

  const installSteps = [
    "下载插件 ZIP 文件",
    "解压到本地文件夹",
    "打开 Chrome / Edge 扩展管理页",
    "开启开发者模式",
    "点击“加载已解压的扩展程序”",
    "选择插件文件夹即可完成安装"
  ];

  const forumPosts = [
    {
      title: "教务系统翻译优化建议",
      author: "학생A",
      replies: 18
    },
    {
      title: "最新版本翻译速度测试",
      author: "DJU_User",
      replies: 9
    },
    {
      title: "Edge 浏览器兼容性反馈",
      author: "ComputerMajor",
      replies: 6
    }
  ];

  return (

    <div className="min-h-screen bg-[#07090f] text-white overflow-hidden">

      {/* 背景光效 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 blur-[180px] rounded-full" />

      </div>

      {/* 顶部导航 */}
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

            {/* 真下载按钮 */}
            <a
              href="/dju-ai-translator.zip"
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

          {/* 左边 */}
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

              {/* 真下载按钮 */}
              <a
                href="/dju-translator-extension-1.0.zip"
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

          {/* 插件预览 */}
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

      {/* 核心功能 */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-black mb-4">
            核心功能
          </h2>

          <p className="text-white/60 text-lg">
            为韩国大学场景深度优化
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:-translate-y-2 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 mb-5" />

              <h3 className="text-xl font-bold mb-3">

                {item.title}

              </h3>

              <p className="text-white/60 leading-relaxed">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* 安装教程 */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div>

            <h2 className="text-4xl font-black mb-6">

              安装教程

            </h2>

            <div className="space-y-4">

              {installSteps.map((step, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <div className="text-white/80 text-lg">

                    {step}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* 用户反馈 */}
          <div>

            <h2 className="text-4xl font-black mb-6">

              用户反馈

            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="space-y-5">

                <input
                  placeholder="你的邮箱"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400 transition-all"
                />

                <textarea
                  placeholder="输入你的反馈建议..."
                  rows={6}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400 transition-all resize-none"
                />

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-lg hover:scale-[1.02] transition-all shadow-2xl shadow-cyan-500/20">

                  提交反馈

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 用户论坛 */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-end justify-between mb-10">

          <div>

            <h2 className="text-4xl font-black mb-3">

              用户论坛

            </h2>

            <p className="text-white/60">

              用户交流、BUG反馈、功能建议

            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">

            发布帖子

          </button>

        </div>

        <div className="space-y-5">

          {forumPosts.map((post, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-cyan-500/30 hover:-translate-y-1 transition-all backdrop-blur-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold mb-2">

                    {post.title}

                  </h3>

                  <p className="text-white/50">

                    作者：{post.author}

                  </p>

                </div>

                <div className="text-right">

                  <div className="text-cyan-400 text-2xl font-black">

                    {post.replies}

                  </div>

                  <div className="text-white/40 text-sm">

                    回复

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>

            <h3 className="font-bold text-xl mb-1">

              DJU AI Translator

            </h3>

            <p className="text-white/50 text-sm">

              Korean University Smart Translation Project

            </p>

          </div>

          <div className="flex gap-4 text-white/50 text-sm">

            <span>Privacy</span>

            <span>Github</span>

            <span>Discord</span>

            <span>Email</span>

          </div>

        </div>

      </footer>

    </div>

  );

}