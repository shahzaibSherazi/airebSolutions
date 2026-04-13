import { useState, useEffect } from "react";
import avatarIcon from "@/assets/Industies/ecommerce/avatar.png";
import botIcon from "@/assets/Industies/ecommerce/bot.png";
import productIcon from "@/assets/Industies/ecommerce/product.png";
import bgImg from "@/assets/Industies/ecommerce/hero-bg.png";

// ── Gradient border helpers (CSS background-clip trick) ───────────────────────
const rightPanelBorder = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#000000 0%,#4285F4 45.19%,#000000 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const purchaseBorder = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#0d1117,#0d1117), linear-gradient(90deg,#4285F4 0%,#000000 63.46%,#1D3051 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

// ── Chat bubble animations ────────────────────────────────────────────────────
const chatItems = [
  { type: "user", delay: 0 },
  { type: "bot", delay: 800 },
  { type: "card", delay: 1600 },
  { type: "action", delay: 2400 },
];

function useSequentialReveal() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    chatItems.forEach((item, i) => {
      setTimeout(() => setVisible(i + 1), item.delay);
    });
  }, []);
  return visible;
}

// ── Cart / Purchase icon ──────────────────────────────────────────────────────
function CartIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 5.9 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.45 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

export default function EcommerceHero() {
  const visible = useSequentialReveal();

  return (
    <>
      <section className="heros_height relative w-full  overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(257.21deg, rgba(0, 0, 0, 0.2) 45.87%, rgba(66, 133, 244, 0.5) 98.27%)",
          }}
          className="absolute inset-0"
        />
        <div className="relative  z-10 w-full  px-6 lg:px-8 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col items-start self-end gap-5 w-full">
            {/* Sector badge */}
            <div
              style={{
                background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
              }}
              className="mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
              <p className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold ">
                Sector
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-stoke text-[clamp(18px,5vw,52px)] leading-[1.28] text-white">
              E-commerce Solutions
              <br />
              for Modern Businesses
            </h1>
          </div>

          {/* ── RIGHT: Chat UI Panel ── */}
          <div className="relative w-full  max-w-[480px]">
            {/* Corner marks top-right and bottom-left */}
            <div className="absolute -top-2 -right-2 w-4 h-4 pointer-events-none">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#4285F4]" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#4285F4]" />
            </div>

            {/* Panel with gradient border */}
            <div
              className="w-full  p-5 flex flex-col gap-6"
              style={{ ...rightPanelBorder }}>
              {/* Bubble 1 — User message */}
              {visible >= 1 && (
                <div className="chat-item flex items-center justify-end gap-3">
                  <div
                    className="flex items-center gap-3 px-4 py-4 border border-primary rounded-2xl rounded-tr-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #000000 0%, #4285F4 100%)",
                      maxWidth: "85%",
                    }}>
                    <p className="text-white text-sm leading-snug font-outfit font-normal">
                      What's your best selling Vitamins combo?
                    </p>
                  </div>
                  {/* User avatar */}
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img src={avatarIcon} className="w-full h-full" />
                  </div>
                </div>
              )}

              {/* Bubble 2 — Bot reply */}
              {visible >= 2 && (
                <div className="chat-item flex items-start  gap-3">
                  {/* Bot avatar */}
                  <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center">
                    <img src={botIcon} className="w-full h-full" />
                  </div>
                  <div
                    className="px-4 py-4 rounded-2xl rounded-tl-sm border border-primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #000000 0%, #4285F4 100%)",
                      maxWidth: "80%",
                    }}>
                    <p className="text-white text-sm leading-snug font-outfit font-normal">
                      You got it.
                      <br />
                      Here is our most popular combo:
                    </p>
                  </div>
                </div>
              )}

              {/* Bubble 3 — Product card */}
              {visible >= 3 && (
                <div className="chat-item flex items-start gap-3 ml-12">
                  <div
                    className="flex  items-center md:flex-row flex-col gap-3 px-2 py-4 border border-primary rounded-2xl overflow-hidden w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #000000 0%, #4285F4 100%)",
                    }}>
                    {/* Product image placeholder */}
                    <div className="md:max-w-32 w-full  h-[130px]  rounded-xl  flex items-center justify-center overflow-hidden">
                      <img src={productIcon} className="w-full h-full" />
                    </div>

                    {/* Product info */}
                    <div className="flex flex-col  gap-2 flex-1 min-w-0">
                      <p className="text-textColor text-sm font-normal font-outfit leading-snug">
                        Wellwoman Original, Now Eve Capsules, and Life Extension
                        Two-Per-Day Multivitamin.
                      </p>
                      <button className="flex items-center font-outfit font-light  bg-black gap-1.5 px-3 py-1.5 rounded-full text-white text-xs w-fit">
                        <CartIcon size={12} color="white" />
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Bubble 4 — Purchase row */}
              {visible >= 4 && (
                <div className="chat-item flex justify-end mt-1">
                  <div
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl "
                    style={{ ...purchaseBorder }}>
                    <div className="flex items-center gap-2 text-white text-sm font-medium">
                      <CartIcon size={16} color="#4285F4" />
                      <span className="font-outfit font-medium text-xs text-textColor">
                        Purchase
                      </span>
                    </div>
                    <span className="text-xs text-[#3DFAB8] rounded-lg font-outfit font-medium ">
                      +$120
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
