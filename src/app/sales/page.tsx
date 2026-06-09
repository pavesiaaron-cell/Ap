import type { Metadata } from "next";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Sales Scripts | Latitude Advisory (Internal)",
  description: "Cold outbound scripts and objection handling for Latitude Advisory sales team.",
};

function ScriptBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
      <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">{title}</h3>
      {children}
    </div>
  );
}

function Script({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap font-mono text-sm bg-slate-50 rounded-lg p-4">
      {children}
    </div>
  );
}

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900">Latitude Advisory</Link>
          <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">Internal Use Only</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Sales Playbook</h1>
        <p className="text-slate-500 mb-8">Cold outbound scripts, follow-up sequences, and objection handling for Latitude Advisory.</p>

        <Tabs defaultValue="cold-call">
          <TabsList className="mb-6 flex flex-wrap h-auto gap-1 bg-slate-100 p-1 rounded-lg">
            <TabsTrigger value="cold-call">Cold Call</TabsTrigger>
            <TabsTrigger value="cold-email">Cold Email</TabsTrigger>
            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
            <TabsTrigger value="followup">Follow-up Sequence</TabsTrigger>
            <TabsTrigger value="objections">Objection Handling</TabsTrigger>
          </TabsList>

          {/* COLD CALL */}
          <TabsContent value="cold-call">
            <ScriptBlock title="Cold Call Script — Pattern Interrupt Opener">
              <Script>
{`OPENER (pattern interrupt — not a pitch):
"Hey [Name], this is [Your Name] — you probably don't know me. I'm going to be upfront: this is a cold call. Got 30 seconds before you hang up?"

[Wait for response. Most people say "sure."]

BRIDGE:
"Appreciate it. I work with multi-unit [brand] operators — people running [3–10] locations who are trying to figure out their next move, whether that's adding sites, swapping brands, or positioning to sell. I'm not a broker — I don't sell franchises, I advise on them. Does that sound like it could be relevant to where you are?"

[If yes → discovery. If no → pivot or exit gracefully.]

DISCOVERY QUESTIONS (choose 3–4, don't ask all):
1. "How many units are you currently operating, and are they all under one brand?"
2. "What's your 3-year outlook — are you in growth mode, holding steady, or starting to think about an exit?"
3. "What's your biggest headache right now — operations, finding good sites, or something else?"
4. "Have you looked at diversifying across brands, or are you doubling down on your current franchisor?"
5. "If you could solve one thing about your portfolio in the next 6 months, what would it be?"

CLOSE (to a call, not a sale):
"Based on what you've told me, I think a 20-minute call could be worth your time. We could look at [specific thing they mentioned] and I can give you one concrete insight — no pitch, you can decide what to do with it. What does your schedule look like [day] or [day]?"

[If they push back → Objection Handling tab]

GRACEFUL EXIT (if they're not a fit):
"Totally fair. I won't take more of your time. If your situation changes — especially if you're ever thinking about adding sites or looking at an exit — I'd love to reconnect. Mind if I send a quick email so you have my info?"
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Voicemail Script">
              <Script>
{`"Hey [Name], [Your Name] here — I'll keep this short. I work with multi-unit franchise operators on portfolio strategy — site selection, diversification, exit prep. Not a broker, not a consultant selling systems. I noticed you're running [X] [brand] locations in [market] and thought there might be something worth a conversation.

Call me back at [number] or shoot me an email at [email] if you want to hear more. No pressure either way. Thanks."

[Voicemail should be under 30 seconds. Time it.]
`}
              </Script>
            </ScriptBlock>
          </TabsContent>

          {/* COLD EMAIL */}
          <TabsContent value="cold-email">
            <ScriptBlock title="Cold Email Template A — Site Selection Angle">
              <Script>
{`Subject: [Brand] site selection — quick question

Hi [First Name],

Running [X] [Brand] locations in [market] is no small thing. I help multi-unit operators like you find the next site before it hits the broker's list — and avoid the ones that look good on paper but underperform.

Quick question: are you actively looking to add a location, or are you in more of a "when the right one shows up" mode?

Either way, I'd love to share one data point on [their market] that might be useful.

[Your Name]
Latitude Advisory

P.S. I'm not a franchise broker — I don't earn commissions on what you buy. My job is to make sure what you buy is actually the right call.
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Cold Email Template B — Portfolio Risk Angle">
              <Script>
{`Subject: All your eggs in one [Brand] basket?

Hi [First Name],

Most multi-unit operators I talk to got into franchising through one brand they know well — and built from there. At some point, that concentration becomes a liability (royalty increases, brand stumbles, category headwinds).

If you've thought about diversifying but haven't made a move, I'd be curious what's held you back.

Happy to share how operators in similar positions have approached it — 15 minutes, no pitch.

[Your Name]
Latitude Advisory
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Cold Email Template C — Exit Angle">
              <Script>
{`Subject: When are you planning to sell your [Brand] portfolio?

Hi [First Name],

Not trying to get you out — just asking because the answer changes what you should be doing right now.

Operators planning a 3–5 year exit need a different strategy than those building for 10+. Site selection, lease terms, EBITDA packaging — it all looks different depending on your timeline.

Do you have a rough exit horizon in mind? Asking because I may have one insight worth 15 minutes of your time.

[Your Name]
Latitude Advisory
`}
              </Script>
            </ScriptBlock>
          </TabsContent>

          {/* LINKEDIN */}
          <TabsContent value="linkedin">
            <ScriptBlock title="Connection Request Note (300 chars max)">
              <Script>
{`"Hi [Name] — I work with multi-unit [Brand] operators on portfolio strategy (not a broker — no commissions). Saw you're running [X] locations in [market]. Would love to connect and share something relevant. — [Your Name]"
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Follow-up DM After Connection">
              <Script>
{`"Thanks for connecting, [Name].

Quick context: I advise franchise operators on site selection, brand diversification, and exit strategy. My clients are typically running 3–15 units and trying to make better decisions about what to buy, where to open, or when to sell.

I noticed you're in [market] with [Brand]. I have one observation about that market I think you'd find useful — no pitch attached. Would it be worth a 15-minute call?

Here's my calendar if you want to grab time: [link]"
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Value Message (if no response after 1 week)">
              <Script>
{`"Hey [Name] — dropping one thing I thought you'd find interesting regardless of whether we ever talk:

[Insert a relevant data point — e.g. 'QSR saturation in [market] is up 18% YoY but foot traffic per unit is actually holding. That tells me there's still a viable lane if you target [specific submarket].']

Nothing to sell. Just sharing what we're seeing. If you ever want the full picture, you know where to find me.

— [Your Name]"
`}
              </Script>
            </ScriptBlock>
          </TabsContent>

          {/* FOLLOW-UP */}
          <TabsContent value="followup">
            <ScriptBlock title="Day 3 — Portfolio Risk Angle">
              <Script>
{`Subject: Re: [original subject line]

Hi [First Name],

Didn't hear back — no worries, timing is everything.

One thought I'll leave you with: the operators who get the best outcomes aren't necessarily the ones with the best locations. They're the ones who made their next move before they had to.

If you're in a period of "things are fine," that's actually the best time to stress-test your portfolio. Happy to do that for free if you want to spend 20 minutes on it.

[Calendar link]

[Your Name]
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Day 7 — Case Study Hook">
              <Script>
{`Subject: What one Subway operator did before rates spiked

Hi [First Name],

Quick story (won't take long):

A 6-unit Subway operator I work with started repositioning his portfolio 18 months before he planned to sell — cleaning up underperforming sites, repackaging EBITDA, and locking in favorable lease terms. By the time he went to market, he got 1.8x what a comparable portfolio sold for the year before.

He didn't do anything exotic. He just made the right moves in the right order.

If you're running [X] units and have any horizon in mind — exit, expansion, or just optimization — I think we could have a useful conversation.

[Calendar link]

[Your Name]
`}
              </Script>
            </ScriptBlock>

            <ScriptBlock title="Day 14 — Breakup Email">
              <Script>
{`Subject: Last note from me

Hi [First Name],

I've reached out a couple of times and haven't heard back — completely understood. You're running a business and this probably didn't land at the right moment.

I'll take you off my radar after this. But if your situation ever changes — you're thinking about a new site, a new brand, or starting to think about an exit — feel free to reach out directly: [email] or [phone].

Wishing you a strong year either way.

[Your Name]
Latitude Advisory
`}
              </Script>
            </ScriptBlock>
          </TabsContent>

          {/* OBJECTIONS */}
          <TabsContent value="objections">
            <div className="space-y-4">
              {[
                {
                  objection: '"I already have a broker I work with."',
                  response: `"That makes sense — a broker is great for finding and closing deals. What I do is different: I work on the strategy layer before and after the broker conversation. Which sites to target, whether that brand makes sense for your portfolio, what terms to hold out for. Think of it as the advisor your broker talks to. Is there any decision coming up where that kind of thinking would be useful?"`,
                },
                {
                  objection: '"I can\'t afford advisory fees right now."',
                  response: `"I get that. Two things: one, we do project-based work — you don't have to commit to a retainer. A one-time strategy brief is $1,500. Second, most of our clients find the ROI shows up in what they don't buy as much as what they do. Would it be worth 20 minutes to figure out if there's a decision coming up where the math works?"`,
                },
                {
                  objection: '"I\'m not looking to expand right now."',
                  response: `"Fair enough — and honestly, that might make now the perfect time to talk. If you're in a holding pattern, that's when the best operators review their portfolio, tighten their exits, and position for optionality. This isn't about selling you on expanding — it's about making sure you're set up for whatever comes next. Five minutes to see if any of that's relevant to you?"`,
                },
                {
                  objection: '"I need to think about it."',
                  response: `"Of course. Can I ask — is there a specific part you're unsure about, or is it more about timing? [Listen.] Here's what I'd suggest: book a 20-minute call with zero obligation. You'll either walk away with something useful, or you'll know it's not a fit. Either outcome is better than a lingering 'maybe.' What's your calendar look like [day]?"`,
                },
                {
                  objection: '"I already have a franchise consultant."',
                  response: `"Good consultants are worth their weight. Quick question: does your consultant do the financial modeling on your portfolio, or are they more focused on finding brands and managing the FDD process? [Most say: FDD/brand selection.] That's exactly where we'd complement them — we're on the portfolio strategy and economics side, not the brand matching side. Happy to talk to your consultant too if that would help."`,
                },
                {
                  objection: '"Send me some information."',
                  response: `"Happy to. What I'll send is our overview — but I want to make sure I send you the right thing. What's the most pressing decision you're facing in the next 90 days? [Get a specific answer, then tailor what you send. Sending generic info is usually a polite brush-off — get specific before you hang up.]"`,
                },
              ].map((item) => (
                <div key={item.objection} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="text-sm font-semibold text-red-600 mb-3 italic">{item.objection}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.response}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-700">
          <strong>Reminder:</strong> Every script is a starting point. Adapt to the conversation. The best call is the one where you shut up and listen.
        </div>
      </div>
    </div>
  );
}
