import { renderRichText } from "#/helpers/render-rich-text";
import { socials } from "#/static/socials";
import { type PS } from "#/types";

export const Section = ({ title, content }: PS) => (
  <section className="flex min-h-dvh w-full items-center justify-center">
    <div className="flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50">
      <div className="w-full flex-1" />
      <div className="w-full space-y-4 bg-black/50 p-4 sm:p-8">
        <h2 className="text-center text-2xl text-white">{title}</h2>
        <div className="h-0.5 w-full bg-linear-to-r from-white/0 via-white/30 to-white/0" />
        {content !== "socials" ? (
          <h5 className="text-center text-sm font-light text-white/80">
            {renderRichText(content)}
          </h5>
        ) : (
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ linkProps, icon }, index) => (
              <a key={`socialLink-${index}`} {...linkProps}>
                {icon}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex-1" />
    </div>
  </section>
);
