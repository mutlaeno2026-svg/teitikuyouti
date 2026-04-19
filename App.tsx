import { motion } from "motion/react";
import { 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Info, 
  Mail, 
  MessageCircle, 
  Printer,
  Zap,
  Maximize2,
  AlertTriangle,
  Clock
} from "lucide-react";

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-page-bg py-4 md:py-8 overflow-auto flex items-start md:items-center justify-center">
      {/* Print Button Overlay */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 md:px-6 md:py-3 rounded-full shadow-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95 font-bold text-sm md:text-base"
        >
          <Printer size={18} className="md:w-5 md:h-5" />
          印刷する (A4横)
        </button>
      </div>

      {/* Flyer Container (Bento Grid) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-container"
      >
        {/* Header */}
        <header className="md:col-span-2 bg-primary text-white p-5 md:p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <span className="bg-accent text-white text-[10px] md:text-sm font-bold px-2 md:px-3 py-0.5 md:py-1 rounded inline-block mb-1 md:mb-2">
              パートナー様 向け
            </span>
            <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
              系統用蓄電所 開発用地の募集について
            </h1>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-0 border-accent pl-3 md:pl-0">
            <p className="text-xs md:text-sm opacity-90 mb-0.5 md:mb-1">「狭小地・端地」を収益化</p>
            <p className="text-lg md:text-xl font-black">市街化調整区域も検討可能</p>
          </div>
        </header>

        {/* Main Column (Left) */}
        <div className="grid grid-rows-auto gap-3">
          
          {/* Revenue Card */}
          <section className="bg-bento-bg border-2 border-teal-light rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center">
              <p className="text-xs md:text-[14px] font-bold mb-2 md:mb-3">物件ごとの総予算（土地代＋諸経費）</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-black text-primary leading-none">40</span>
                <span className="text-xl md:text-2xl font-bold text-primary">万円</span>
              </div>
              <p className="text-[10px] md:text-[12px] mt-3 md:mt-4 text-bento-gray font-medium">※土地売買代金 ＋ 仲介/コンサル手数料の合計額</p>
            </div>

            <div className="bg-white border-2 border-dashed border-accent p-4 rounded-lg flex flex-col justify-center">
              <p className="text-[10px] md:text-xs font-bold text-accent mb-1">【貴社の収益例】</p>
              <p className="text-[10px] md:text-[11px] mb-1 md:mb-2 text-bento-gray">土地代が1万円の場合：</p>
              <div className="space-y-1 mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs md:text-[14px] font-bold text-accent">残額</span>
                  <span className="text-3xl md:text-4xl font-black text-accent leading-none">39</span>
                  <span className="text-base md:text-lg font-bold text-accent">万円</span>
                </div>
                <div className="bg-accent text-white px-2 py-0.5 rounded text-[9px] md:text-[11px] font-black inline-block">
                  全額お支払いいたします
                </div>
              </div>
              <p className="text-[9px] md:text-[10px] leading-tight text-bento-text font-medium">
                土地代を抑えるほど、貴社への「手数料・コンサル料」が最大化する仕組みです。
              </p>
            </div>
          </section>

          {/* Specs Card */}
          <section className="bg-white border border-[#E1E8ED] rounded-lg p-5 md:p-6">
            <h2 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2 text-primary">
              <span className="text-lg md:text-xl">📐</span> 募集土地スペック
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                { label: "面積", value: "30㎡ 以上" },
                { label: "接道", value: "軽トラ通行可でOK", highlight: true },
                { label: "対象エリア", value: "全国（沖縄・離島除く）" },
                { label: "民家距離", value: "30m程度 離間" },
                { label: "地目", value: "農地以外（雑種地・山林等）" },
                { label: "傾斜", value: "平坦" },
              ].map((item, idx) => (
                <div key={idx} className={`flex justify-between items-center border-b border-[#EEE] pb-2 ${item.highlight ? 'bg-[#FFF9F9] px-2 -mx-2 rounded border-none' : ''}`}>
                  <span className="text-xs md:text-[13px] font-bold text-bento-gray">{item.label}</span>
                  <span className={`text-sm font-black ${item.highlight ? 'text-accent' : 'text-primary'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
              {[
                "ハザードマップ非該当",
                "埋蔵文化財なし",
                "電柱が近いほど有利"
              ].map((text, idx) => (
                <div key={idx} className="flex-1 min-w-[100px] bg-[#F0F4F8] p-2 md:p-3 rounded text-[10px] md:text-[11px] font-bold text-center text-bento-gray">
                  {text}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Side Column (Right) */}
        <div className="grid grid-rows-auto gap-3">
          
          {/* Process Card */}
          <section className="bg-[#F8FAFB] border border-[#E1E8ED] rounded-lg p-5 md:p-6">
            <h2 className="text-base md:text-lg font-bold mb-4 md:mb-5 flex items-center gap-2 text-primary">
              <span className="text-lg md:text-xl">📅</span> 決済までのフロー
            </h2>
            <div className="space-y-4 md:space-y-5">
              {[
                { step: 1, title: "物件紹介・簡易調査", desc: "地番情報を元に弊社にて迅速に開発可否を判定します。" },
                { step: 2, title: "土地売買契約の締結", desc: "地権者様と停止条件付売買契約を締結して頂きます。" },
                { step: 3, title: "電力申請（約3ヶ月〜）", desc: "電力会社への接続申請を行います。回答受領で事業確定。" },
                { step: 4, title: "土地決済・引渡", desc: "所有権移転と同時に代金をお支払い。紹介から約半年目安。" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="bg-teal-light text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-black text-[10px] md:text-xs shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-primary mb-0.5">{item.title}</p>
                    <p className="text-[10px] md:text-[11px] text-bento-gray leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Required Info Card */}
          <section className="bg-[#FAFAFA] border border-dashed border-[#CCC] rounded-lg p-4 md:p-5">
            <p className="text-[10px] md:text-[11px] font-bold text-bento-gray mb-2">ご用意いただくもの：</p>
            <ul className="text-[11px] md:text-xs space-y-1.5 text-bento-text font-medium">
              <li>• 土地の正確な住所（地番）</li>
              <li>• 謄本、公図の写し</li>
              <li>• 周辺の現地写真（あれば）</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <footer className="md:col-span-2 bg-[#EEF2F3] rounded-lg p-5 md:p-4 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-[10px] md:text-xs font-bold text-primary mb-1">まずはLINEまたはメールでお問合せください</p>
            <p className="text-lg md:text-xl font-black text-primary">物件情報 受付窓口</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <div className="bg-white px-4 py-3 rounded-lg border border-[#DDD] shadow-sm flex items-center gap-4 flex-1 md:flex-none">
              <div className="shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://lin.ee/Vrqtkvp" 
                  alt="LINE QR Code" 
                  className="w-12 h-12 md:w-16 md:h-16"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] text-bento-gray font-bold uppercase mb-0.5">Official LINE</p>
                <p className="text-xs md:text-sm font-bold text-primary">https://lin.ee/Vrqtkvp</p>
                <p className="text-[8px] md:text-[9px] text-bento-gray font-bold mt-1">← スマホで読み取り</p>
              </div>
            </div>
            <div className="bg-white px-4 py-3 rounded-lg border border-[#DDD] shadow-sm flex flex-col justify-center flex-1 md:flex-none">
              <p className="text-[9px] md:text-[10px] text-bento-gray font-bold uppercase mb-0.5">Email Address</p>
              <p className="text-xs md:text-sm font-bold text-primary break-all">mutla.eno2026@gmail.com</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
