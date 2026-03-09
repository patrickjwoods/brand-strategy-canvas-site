export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-slate-900">
            The Brand Strategy Canvas
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#plugin"
              className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              Try the plugin
            </a>
            <a
              href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
            >
              Get the book →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 bg-ic-dark text-white">
        <div className="max-w-4xl mx-auto">
          <p className="subhead text-xs font-semibold uppercase text-ic-yellow mb-6">/ The Brand Strategy Canvas</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Anyone can ship software.{' '}
            Not everyone can{' '}
            <span className="text-ic-yellow">create meaning.</span>
          </h1>
          <div className="flex items-start gap-4 max-w-2xl mb-12">
            <span className="flex-none w-14 h-px bg-ic-yellow mt-[0.85em]"></span>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              The tools to ship have never been more powerful. The market has
              never been more crowded. Speed-to-market is table stakes. But
              what still can&apos;t be LLMed is the strategic insight that
              makes a brand resonate. Nine boxes. One page. This is the
              framework for finding it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 pl-[4.5rem]">
            <a
              href="#plugin"
              className="inline-flex items-center justify-center gap-2 bg-ic-yellow hover:bg-ic-yellow/90 text-black font-semibold text-sm px-8 py-4 transition-colors"
            >
              Explore the plugin
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#canvas"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-slate-300 hover:text-white font-medium text-sm px-8 py-4 transition-colors"
            >
              See the framework
            </a>
          </div>
          <a
            href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-ic-yellow font-medium transition-colors text-sm pl-[4.5rem]"
          >
            Get the book
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="subhead text-xs font-semibold uppercase text-ic-yellow mb-4 text-center">/ The Problem</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight mb-8 text-slate-900 text-center">
            Building is cheap. Meaning is earned.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Coding agents mean any team can ship fast. That&apos;s raised the
            floor — and the ceiling — of what&apos;s possible. It&apos;s also
            flooded every market with countless alternatives.
          </p>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            When the tools to build are everywhere, what separates the companies
            that break through is clarity: about who they&apos;re for, what they
            genuinely offer, and why it matters. That clarity can&apos;t be
            generated. It has to be discovered by a human willing to do the
            strategic work.
          </p>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
            <em>The Brand Strategy Canvas</em> is that work. Nine boxes. In
            order. The framework for turning your insight about your audience,
            your market, and your product into a brand strategy that actually
            holds.
          </p>
          <div className="text-center">
            <a
              href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ic-dark hover:bg-black text-white font-semibold text-sm px-7 py-3.5 transition-colors"
            >
              Order on Amazon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── CANVAS VISUAL ── */}
      <section id="canvas" className="py-24 px-6 bg-[#f1f1f1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="subhead text-xs font-semibold uppercase text-ic-yellow mb-4">/ The Framework</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight mb-4">
              Nine boxes. One strategy.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Each box builds on the last. Fill them in order for a clear
              point of view on who you&apos;re for, what you stand for,
              and why you win.
            </p>
          </div>

          {/* Canvas PNG */}
          <img
            src="/brand-canvas.png"
            alt="The Brand Strategy Canvas — nine-box framework"
            className="w-[95%] sm:w-1/2 mx-auto block"
          />
          <div className="text-center mt-4">
            <a
              href="/brand-canvas.png"
              download
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTIONS BREAKDOWN ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="subhead text-xs font-semibold uppercase text-ic-yellow mb-4">/ How It Works</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight mb-4">
              Four sections. Nine decisions. One foundation.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Work through them in order. Each answer narrows the decision
              space for what comes next — copy, design, positioning, hiring.
              Done right, you&apos;ll reference this for years.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <SectionCard
              number="01"
              title="Market Opportunity"
              subtitle="Boxes A, B, C"
              color="border-l-ic-yellow"
              accentColor="text-amber-600"
              items={[
                { name: 'Customer / User Insight', desc: 'A precise portrait of who you\'re building for — not a demographic checkbox, but a real understanding of how they think, what they fear, and what they\'re trying to become.' },
                { name: 'Competitive Environment', desc: 'Map the landscape: what alternatives exist, how they position themselves, and where the white space is. The anti-audience exercise clarifies who you\'re explicitly not for.' },
                { name: 'Company / Product Features', desc: 'What your product actually does. This is the raw material — before benefits, before emotion, before story.' },
              ]}
            />
            <SectionCard
              number="02"
              title="Benefits"
              subtitle="Rational + Emotional"
              color="border-l-ic-teal"
              accentColor="text-teal-600"
              items={[
                { name: 'Rational Benefits', desc: 'How customers experience your features — not what it does, but what it means for them. The first step up the Ladder of Abstraction.' },
                { name: 'Emotional Benefits', desc: 'The higher-order payoff. This is where most startups stop — which is exactly why it\'s the biggest differentiation opportunity on the canvas.' },
              ]}
            />
            <SectionCard
              number="03"
              title="Positioning"
              subtitle="Statement + Essence"
              color="border-l-ic-purple"
              accentColor="text-violet-500"
              items={[
                { name: 'Positioning Statement', desc: 'One sentence. Who you\'re for, what you offer, why it matters. Every box above this one exists to make this sentence true.' },
                { name: 'Brand Essence', desc: '2–4 words that distill the whole statement. Short enough to remember. Clear enough to make decisions from.' },
              ]}
            />
            <SectionCard
              number="04"
              title="Voice & Expression"
              subtitle="Values, Personality, Key Messages"
              color="border-l-slate-400"
              accentColor="text-slate-500"
              items={[
                { name: 'Values', desc: 'Internal guide rails, not marketing copy. The nouns that describe what your company genuinely believes and how it makes decisions.' },
                { name: 'Personality', desc: 'How your brand shows up in the world. Characterful, not generic. The outward expression of everything your values say internally.' },
                { name: 'Key Messages', desc: '3–5 concepts you communicate consistently, each backed by proof points. Apply the Talk Like a Human test before you\'re done.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── PLUGIN CTA ── */}
      <section id="plugin" className="py-24 px-6 bg-ic-dark text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="subhead text-xs font-semibold uppercase text-ic-purple mb-6">/ Claude Code Plugin</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight mb-6">
                The framework,{' '}
                <span className="text-ic-purple">built into Claude Code.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Install the plugin, run{' '}
                <code className="text-ic-purple bg-white/10 px-1.5 py-0.5 text-sm">/brand-canvas</code>,
                and Claude walks you through every box — asking the right
                questions, pushing back on vague answers, and writing your
                finished canvas to file when you&apos;re done.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                It knows where you are. Start fresh, pick up mid-canvas, or
                jump straight to a specific section. You finish with two files:
                a full strategic document and an Excalidraw diagram you can
                pin to the wall.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/patrickjwoods/brand-canvas-plugin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ic-purple hover:bg-ic-purple/90 text-white font-semibold text-sm px-7 py-3.5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Code block */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-700 bg-slate-800/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                <span className="ml-3 text-xs text-slate-500 font-mono">Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-slate-500 mb-4"># Install the plugin</p>
                <p className="text-slate-300 mb-2">
                  <span className="text-ic-purple">$</span>{' '}
                  /plugin marketplace add{' '}
                  <span className="text-amber-300">patrickjwoods/brand-canvas-plugin</span>
                </p>
                <p className="text-slate-300 mb-6">
                  <span className="text-ic-purple">$</span>{' '}
                  /plugin install{' '}
                  <span className="text-amber-300">brand-canvas@patrickjwoods/brand-canvas-plugin</span>
                </p>
                <p className="text-slate-500 mb-4"># Start your canvas</p>
                <p className="text-slate-300 mb-6">
                  <span className="text-ic-purple">$</span>{' '}
                  <span className="text-emerald-400">/brand-canvas</span>
                </p>
                <p className="text-slate-500 mb-2"># Or jump to a section</p>
                <p className="text-slate-400 text-xs">
                  /brand-canvas opportunity &nbsp;→ Market Opportunity<br />
                  /brand-canvas benefits &nbsp;&nbsp;&nbsp;→ Rational &amp; Emotional<br />
                  /brand-canvas position &nbsp;&nbsp;→ Positioning Statement<br />
                  /brand-canvas voice &nbsp;&nbsp;&nbsp;&nbsp;→ Values, Personality, Messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Patrick Woods.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/patrickjwoods"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              @patrickjwoods
            </a>
            <a
              href="https://github.com/patrickjwoods/brand-canvas-plugin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}

/* ── Sub-components ── */

function SectionCard({
  number,
  title,
  subtitle,
  color,
  accentColor,
  items,
}: {
  number: string
  title: string
  subtitle: string
  color: string
  accentColor: string
  items: { name: string; desc: string }[]
}) {
  return (
    <div className={`bg-white border border-slate-100 border-l-4 p-8 ${color}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentColor}`}>
            Section {number}
          </p>
          <h3 className="font-display text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <p className="font-semibold text-slate-800 text-sm mb-1">{item.name}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
