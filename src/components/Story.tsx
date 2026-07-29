import { useTranslation } from "react-i18next";
import { useInView } from "@/src/hooks/useInView";

export default function Story() {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="story"
      ref={ref}
      className={`transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span
              className="uppercase text-[0.85rem] font-semibold tracking-[0.2em] mb-4 block"
              style={{ color: "var(--muted-gold)" }}
            >
              {t("story.eyebrow")}
            </span>
            <h2
              className="text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.2] mt-2 mb-7 font-bold"
              style={{
                color: "var(--warm-black)",
                fontFamily: "var(--font-ar)",
              }}
            >
              {t("story.heading")}
            </h2>
            <div className="space-y-5">
              <p
                className="text-[1.05rem] leading-[1.75]"
                style={{ color: "#333" }}
              >
                {t("story.p1")}
              </p>
              <p
                className="text-[1.05rem] leading-[1.75]"
                style={{ color: "#333" }}
              >
                {t("story.p2")}
              </p>
              <p
                className="text-[1.05rem] leading-[1.75]"
                style={{ color: "#333" }}
              >
                {t("story.p3")}
              </p>
            </div>
            <div
              className="flex gap-10 mt-10 pt-8"
              style={{ borderTop: "1px solid var(--muted-gold)" }}
            >
              <div>
                <div
                  className="text-[2.25rem] font-bold leading-none"
                  style={{
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-body-ltr)",
                  }}
                >
                  +15
                </div>
                <div className="text-[0.85rem] mt-1" style={{ color: "#666" }}>
                  {t("story.stat1")}
                </div>
              </div>
              <div>
                <div
                  className="text-[2.25rem] font-bold leading-none"
                  style={{
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-body-ltr)",
                  }}
                >
                  +300
                </div>
                <div className="text-[0.85rem] mt-1" style={{ color: "#666" }}>
                  {t("story.stat2")}
                </div>
              </div>
              <div>
                <div
                  className="text-[2.25rem] font-bold leading-none"
                  style={{
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-body-ltr)",
                  }}
                >
                  12
                </div>
                <div className="text-[0.85rem] mt-1" style={{ color: "#666" }}>
                  {t("story.stat3")}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
              alt="Moroccan artisan hands crafting decor piece"
              className="w-full h-auto aspect-[4/5] object-cover block shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
