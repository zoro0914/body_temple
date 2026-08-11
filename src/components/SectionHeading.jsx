function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.55em] text-[#E63946]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-anton text-4xl uppercase text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-white/70">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
