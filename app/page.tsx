export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-slate-900 tracking-tight">
            The Brand Strategy Canvas
          </span>
          <a
            href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors"
          >
            Get the book →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mb-8 tracking-wide uppercase">
            <span className="w-8 h-px bg-amber-400"></span>
            Published by Apress
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Stop building your{' '}
            <span className="text-amber-400">brand</span>{' '}
            before you&apos;ve built your{' '}
            <span className="italic font-light">strategy.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-12">
            Most founders jump straight to logos, taglines, and websites.
            The Brand Strategy Canvas is the one-page framework that helps
            you make the strategic choices that make all of it work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Get the book
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#canvas"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-lg px-8 py-4 rounded-lg transition-colors"
            >
              See the framework
            </a>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-slate-900">
            Strategy before execution.
            <br />
            <span className="text-slate-400 font-normal italic">Every time.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Most branding advice is written for Nike and Coca-Cola — companies
            with decades of equity and armies of agency partners. <em>The Brand
            Strategy Canvas</em> was written for founders: the people making
            consequential brand decisions with a few hours, a small team, and
            real money on the line.
          </p>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
            The canvas walks you through nine interconnected questions — from
            who you&apos;re actually for, to what you believably claim, to how
            you want to make people feel. When you&apos;re done, you have a
            positioning statement, a brand essence, and a clear foundation for
            every piece of copy, design, and messaging that follows. No agency
            required.
          </p>
          <a
            href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors"
          >
            Order on Amazon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── CANVAS VISUAL ── */}
      <section id="canvas" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Nine boxes. One strategy.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Each box builds on the last. Fill them in order and you&apos;ll
              end up with a complete brand strategy — not a pile of opinions.
            </p>
          </div>

          {/* Canvas Grid */}
          <div className="border-2 border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm">

            {/* Section label + row 1 */}
            <div className="grid grid-cols-[80px_1fr_1fr_1fr] border-b border-slate-200">
              <div className="bg-slate-100 flex items-center justify-center p-3 border-r border-slate-200">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest writing-mode-vertical rotate-180"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Market Opportunity
                </span>
              </div>
              <CanvasBox label="A" title="Customer / User Insight" description="Portrait of your ideal customer — psychographic, demographic, what they desperately need." />
              <CanvasBox label="B" title="Competitive Environment" description="Market landscape, category themes, how competitors position themselves." borderLeft />
              <CanvasBox label="C" title="Company / Product Features" description="What your product does. The foundation everything else is built from." borderLeft />
            </div>

            {/* Row 2 — Benefits + Positioning */}
            <div className="grid grid-cols-[80px_1fr_1fr_1fr] border-b border-slate-200">
              <div className="bg-slate-100 flex items-center justify-center p-3 border-r border-slate-200">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Benefits
                </span>
              </div>
              <CanvasBox label="" title="Rational Benefits" description={`How customers experience your features. The "so what?" that moves up the ladder.`} />
              <div className="border-l border-slate-200 bg-amber-50 p-6 flex flex-col gap-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Core</span>
                <p className="text-base font-bold text-slate-900 leading-tight">Positioning Statement</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  For [audience], [brand] is [description] that [benefit] because [proof] so that [payoff].
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide mb-1">Brand Essence</p>
                  <p className="text-xs text-slate-500">2–4 word distillation of everything above.</p>
                </div>
              </div>
              <CanvasBox label="" title="Emotional Benefits" description={`Higher-order payoff. The "so that..." most startups never reach — and the biggest differentiation opportunity.`} borderLeft />
            </div>

            {/* Row 3 — Identity */}
            <div className="grid grid-cols-[80px_1fr_1fr_1fr]">
              <div className="bg-slate-100 flex items-center justify-center p-3 border-r border-slate-200">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Identity
                </span>
              </div>
              <CanvasBox label="" title="Values" description="Internal guide rails. Not used in copy — experienced by customers. Vision → Mission → Values." />
              <CanvasBox label="" title="Personality" description="Outward expression of values. What would your brand order at a bar? What does it believe?" borderLeft />
              <CanvasBox label="" title="Key Messages" description="3–5 concepts to communicate consistently. Each needs proof points. Apply the Talk Like a Human test." borderLeft />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS BREAKDOWN ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What you&apos;ll work through
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              The canvas moves through four sections in order. Each one
              unlocks the next.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <SectionCard
              number="01"
              title="Market Opportunity"
              subtitle="Boxes A, B, C"
              color="bg-blue-50 border-blue-200"
              accentColor="text-blue-700"
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
              color="bg-emerald-50 border-emerald-200"
              accentColor="text-emerald-700"
              items={[
                { name: 'Rational Benefits', desc: 'How customers experience your features. Move up the Ladder of Abstraction: from "what it does" to "what that means for me." Answers the question: so what?' },
                { name: 'Emotional Benefits', desc: 'The higher-order payoff. This is where most startups stop — and why they all sound the same. Answers: so that... The deepest differentiation opportunity on the canvas.' },
              ]}
            />
            <SectionCard
              number="03"
              title="Positioning"
              subtitle="Statement + Essence"
              color="bg-amber-50 border-amber-200"
              accentColor="text-amber-700"
              items={[
                { name: 'Positioning Statement', desc: 'The philosophical center of the canvas. A single sentence that captures who you\'re for, what you offer, and why it matters — synthesized from everything above.' },
                { name: 'Brand Essence', desc: 'A 2–4 word distillation of the positioning statement. The north star for every brand decision you\'ll ever make.' },
              ]}
            />
            <SectionCard
              number="04"
              title="Voice & Expression"
              subtitle="Values, Personality, Key Messages"
              color="bg-violet-50 border-violet-200"
              accentColor="text-violet-700"
              items={[
                { name: 'Values', desc: 'Internal guide rails, not marketing copy. The nouns that describe what your company genuinely believes and how it makes decisions.' },
                { name: 'Personality', desc: 'The outward manifestation of your values — how your brand shows up in the world. Characterful, not generic.' },
                { name: 'Key Messages', desc: '3–5 concepts you communicate consistently, each backed by proof points. Apply the Talk Like a Human test before you\'re done.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── PLUGIN CTA ── */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-violet-400 text-sm font-medium mb-6 tracking-wide uppercase">
                <span className="w-8 h-px bg-violet-400"></span>
                Claude Code Plugin
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Build your canvas with{' '}
                <span className="text-violet-400">AI coaching.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The Brand Strategy Canvas plugin for Claude Code guides you
                through all nine boxes interactively — asking the right
                questions, helping you synthesize your answers, and writing
                your completed canvas to file when you&apos;re done.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                A single <code className="text-violet-300 bg-slate-800 px-1.5 py-0.5 rounded text-sm">/canvas</code> command
                routes intelligently based on where you are: starting fresh,
                picking up where you left off, or reviewing a completed canvas.
                Output includes both a full strategic document and an
                Excalidraw visualization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/patrickjwoods/brand-canvas-plugin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
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
                  <span className="text-violet-400">$</span>{' '}
                  /plugin marketplace add{' '}
                  <span className="text-amber-300">patrickjwoods/brand-canvas-plugin</span>
                </p>
                <p className="text-slate-300 mb-6">
                  <span className="text-violet-400">$</span>{' '}
                  /plugin install{' '}
                  <span className="text-amber-300">brand-canvas@patrickjwoods/brand-canvas-plugin</span>
                </p>
                <p className="text-slate-500 mb-4"># Start your canvas</p>
                <p className="text-slate-300 mb-6">
                  <span className="text-violet-400">$</span>{' '}
                  <span className="text-emerald-400">/canvas</span>
                </p>
                <p className="text-slate-500 mb-2"># Or jump to a section</p>
                <p className="text-slate-400 text-xs">
                  /canvas opportunity &nbsp;→ Market Opportunity<br />
                  /canvas benefits &nbsp;&nbsp;&nbsp;→ Rational &amp; Emotional<br />
                  /canvas position &nbsp;&nbsp;→ Positioning Statement<br />
                  /canvas voice &nbsp;&nbsp;&nbsp;&nbsp;→ Values, Personality, Messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Patrick Woods.{' '}
            <a
              href="https://www.amazon.com/Brand-Strategy-Canvas-One-Page-Startups/dp/148425158X"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-300 transition-colors"
            >
              Published by Apress.
            </a>
          </p>
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

function CanvasBox({
  label,
  title,
  description,
  borderLeft = false,
}: {
  label: string
  title: string
  description: string
  borderLeft?: boolean
}) {
  return (
    <div className={`p-6 flex flex-col gap-2 ${borderLeft ? 'border-l border-slate-200' : ''}`}>
      {label && (
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      )}
      <p className="text-sm font-semibold text-slate-800 leading-tight">{title}</p>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}

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
    <div className={`border rounded-xl p-8 ${color}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentColor}`}>
            Section {number}
          </p>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
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
