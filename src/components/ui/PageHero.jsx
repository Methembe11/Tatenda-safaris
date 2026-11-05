import Image from "next/image";

export default function PageHero({
  image,
  eyebrow,
  title,
  intro,
  meta = [],
  size = "default",
  preload = true,
  children,
}) {
  const sizeClass =
    size === "short"
      ? " pageHero--short"
      : size === "detail"
        ? " pageHero--detail"
        : "";

  return (
    <section className={`pageHero${sizeClass}`}>
      <div className="pageHeroMedia">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          loading={preload ? "eager" : "lazy"}
          preload={preload}
        />
      </div>
      
      <div className="container pageHeroInner">
        {eyebrow ? <p className="pageHeroEyebrow">{eyebrow}</p> : null}
        <h1 className="pageHeroTitle">{title}</h1>
        {intro ? <p className="pageHeroSub">{intro}</p> : null}
        {meta.length ? (
          <div className="pageHeroMeta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
