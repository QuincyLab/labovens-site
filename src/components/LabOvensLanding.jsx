import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Flame, Wind, Ruler, Gauge, ShieldCheck, Mail, BookOpen, Factory, ChevronRight, CheckCircle } from 'lucide-react'

const UTM = '?utm_source=labovens.com&utm_medium=referral&utm_campaign=landing'
const LINKS = {
  home: `https://www.quincylab.com/${UTM}`,
  ovens: `https://www.quincylab.com/${UTM}#ovens`,
  contact: `https://www.quincylab.com/${UTM}#contact`,
  resources: `https://www.quincylab.com/${UTM}#resources`,
}

const features = [
  { icon: Wind, title: 'Forced-Air Convection', text: 'Fast recovery, enhanced uniformity, ideal for high-throughput drying and curing.' },
  { icon: Flame, title: 'Gravity Convection', text: 'Gentle airflow for samples sensitive to forced circulation.' },
  { icon: Gauge, title: 'Digital Control', text: 'Precise setpoint control with tight stability and repeatability.' },
  { icon: Ruler, title: 'Right-Sized Chambers', text: 'From compact benchtop to larger capacity—pick the volume that fits your workflow.' },
  { icon: ShieldCheck, title: 'Built for Reliability', text: 'Durable construction and trusted performance—backed by Quincy Lab expertise.' },
  { icon: Factory, title: 'Made for Labs', text: 'Designed for research, industrial QA, education, and healthcare environments.' },
]

const faqs = [
  { q: 'What’s the difference between forced-air and gravity convection ovens?',
    a: 'Forced-air uses a fan to circulate air, delivering faster heat-up and tighter uniformity—great for throughput and consistent drying. Gravity convection relies on natural air movement, which is gentler for sensitive samples and often quieter.' },
  { q: 'How do I choose the right chamber size?',
    a: 'Estimate present and near-future sample load and airflow needs. Leave headroom for circulation and consider shelf configuration. When in doubt, size up one class to avoid bottlenecks.' },
  { q: 'What temperature stability and uniformity should I expect?',
    a: 'Digital-control ovens target tight stability; uniformity depends on load and setpoint. See individual model specs on Quincy Lab for detailed performance.' },
  { q: 'Can I request documentation for compliance or validation?',
    a: 'Yes. Visit Quincy Lab to access manuals, performance notes, and contact support for application-specific guidance.' },
]

const Section = ({ id, children, alt }) => (
  <section id={id} style={{ background: alt ? '#f9fafb' : 'white' }}>
    <div className="container">{children}</div>
  </section>
)

const Card = ({ children }) => <div className="card">{children}</div>

const Button = ({ href, children, outline, size='md' }) => (
  <a className={'btn ' + (outline ? 'outline' : '')} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default function LabOvensLanding() {
  return (
    <div>
      <header className="sticky">
        <div className="container hstack between" style={{height:64}}>
          <a href="#top" className="hstack gap-2">
            <div style={{height:32,width:32,borderRadius:12,background:'#111827',color:'#fff',display:'grid',placeItems:'center',fontWeight:700}}>Q</div>
            <span style={{fontWeight:600}}>LabOvens.com</span>
          </a>
          <nav className="hstack gap-6" style={{display:'none'}} aria-hidden>
            <a href="#learn">Learn</a>
            <a href="#compare">Compare</a>
            <a href="#faq">FAQ</a>
            <a href={LINKS.home} target="_blank" rel="noreferrer">Quincy Lab</a>
          </nav>
          <div>
            <Button href={LINKS.home}>Shop Quincy Lab <ArrowRight size={16}/></Button>
          </div>
        </div>
      </header>

      <Section id="top">
        <div className="container">
          <div className="hero">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} style={{maxWidth:760}}>
              <h1>Find the Right <span style={{color:'#374151'}}>Lab Oven</span> — Fast</h1>
              <p className="lead">
                A quick resource by <strong>LabOvens.com</strong>, powered by <strong>Quincy Lab</strong>.
                Learn the essentials, compare options, and head to Quincy Lab to purchase with confidence.
              </p>
              <div className="hstack gap-3" style={{marginTop:24, flexWrap:'wrap'}}>
                <Button href={LINKS.home}>Browse Quincy Lab Ovens <ArrowRight size={18}/></Button>
                <Button href="#compare" outline>Compare Types</Button>
              </div>
              <div className="pill" style={{marginTop:16}}><CheckCircle size={16}/> No ads, no fluff — just what you need to decide.</div>
            </motion.div>
          </div>
        </div>
        <div aria-hidden="true" style="pointer-events:none;position:absolute;left:0;right:0;top:0;height:1px;"></div>
      </Section>

      <Section id="learn" alt>
        <div className="grid grid-3">
          {features.map((f, i) => (
            <Card key={i}>
              <div className="hstack gap-3" style={{marginBottom:8}}>
                <div style={{padding:8, borderRadius:12, background:'#f3f4f6'}}><f.icon size={20} /></div>
                <div style={{fontWeight:600}}>{f.title}</div>
              </div>
              <div className="muted" style={{fontSize:14}}>{f.text}</div>
            </Card>
          ))}
        </div>
        <div style={{marginTop:16}}>
          <a className="pill" href={LINKS.resources} target="_blank" rel="noreferrer">Deep-dive resources on Quincy Lab <ChevronRight size={16}/></a>
        </div>
      </Section>

      <Section id="compare">
        <div style={{maxWidth:760}}>
          <h2>Compare Lab Oven Types</h2>
          <p className="muted" style={{marginTop:12}}>A quick side-by-side to help you choose the right platform for your workflow.</p>
        </div>

        <div className="grid grid-2" style={{marginTop:24}}>
          <Card>
            <div className="hstack gap-2" style={{fontWeight:600, marginBottom:8}}><Wind size={18}/> Forced-Air Convection</div>
            <ul style={{paddingLeft:18, marginTop:8, lineHeight:1.7, fontSize:14}}>
              <li>Rapid heat-up and recovery</li>
              <li>Better uniformity across shelves</li>
              <li>Best for high-throughput drying/curing</li>
              <li>Typical use: materials testing, electronics, QA/QC</li>
            </ul>
            <div style={{marginTop:8}}><Button href={LINKS.home} size="sm">See Quincy forced-air ovens</Button></div>
          </Card>

          <Card>
            <div className="hstack gap-2" style={{fontWeight:600, marginBottom:8}}><Flame size={18}/> Gravity Convection</div>
            <ul style={{paddingLeft:18, marginTop:8, lineHeight:1.7, fontSize:14}}>
              <li>Gentler airflow; suitable for delicate samples</li>
              <li>Simple design, low turbulence</li>
              <li>Great for labs prioritizing minimal disturbance</li>
              <li>Typical use: reagents, glassware, education labs</li>
            </ul>
            <div style={{marginTop:8}}><Button href={LINKS.home} size="sm">See Quincy gravity ovens</Button></div>
          </Card>
        </div>

        <div className="muted" style={{marginTop:16, fontSize:12}}>
          Always verify performance specs (stability, uniformity, max temp) for your application and standards. Visit Quincy Lab for detailed datasheets and support.
        </div>
      </Section>

      <Section id="guides" alt>
        <div style={{maxWidth:760}}>
          <h2>Quick Guides</h2>
          <p className="muted" style={{marginTop:12}}>Short, practical notes to help you choose with confidence.</p>
        </div>
        <div className="grid grid-3" style={{marginTop:24}}>
          {['Sizing Your Oven','Uniformity vs. Stability','Optimizing Throughput'].map((title, i) => (
            <Card key={i}>
              <div className="hstack gap-2" style={{fontWeight:600, marginBottom:8}}><BookOpen size={16}/> {title}</div>
              <div className="muted" style={{fontSize:14}}>Read a short explainer, then jump to Quincy Lab models recommended for that use-case.</div>
              <div style={{marginTop:8}}><a className="pill" href={LINKS.resources} target="_blank" rel="noreferrer">Open guide <ArrowRight size={16}/></a></div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <div style={{maxWidth:760}}>
          <h2>FAQ</h2>
          <p className="muted" style={{marginTop:12}}>Straight answers to common questions about lab ovens.</p>
        </div>
        <div style={{marginTop:24, border:'1px solid #e5e7eb', borderRadius:16, overflow:'hidden'}}>
          {faqs.map((item, idx) => (
            <details key={idx} className="group" style={{padding:16, borderTop: idx? '1px solid #e5e7eb' : 'none'}}>
              <summary>{item.q}</summary>
              <div className="muted" style={{marginTop:8, fontSize:14}}>{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      <Section id="contact" alt>
        <div style={{maxWidth:760}}>
          <h2>Questions? Talk with Quincy Lab</h2>
          <p className="muted" style={{marginTop:12}}>Have a specific application in mind? Reach out and we’ll help you pick the right model.</p>
        </div>
        <div className="grid grid-2" style={{marginTop:24}}>
          <Card>
            <div className="hstack gap-2" style={{fontWeight:600, marginBottom:8}}><Mail size={16}/> Contact Quincy Lab</div>
            <div className="muted" style={{fontSize:14}}>Go straight to Quincy Lab’s contact page and include that you found us via LabOvens.com.</div>
            <div style={{marginTop:8}}><Button href={LINKS.contact}>Contact Quincy Lab</Button></div>
          </Card>
          <Card>
            <div className="hstack gap-2" style={{fontWeight:600, marginBottom:8}}><ShieldCheck size={16}/> Confidence & Support</div>
            <div className="muted" style={{fontSize:14}}>Quincy Lab stands for dependable, high‑quality lab equipment that’s accessible and affordable—merging tradition with innovation. Performance notes, manuals, and application help are available on the Quincy Lab site.</div>
          </Card>
        </div>
      </Section>

      <section style={{padding:'48px 0', borderTop:'1px solid #e5e7eb'}}>
        <div className="container cta hstack between" style={{flexWrap:'wrap', gap:16}}>
          <div>
            <div style={{fontSize:24, fontWeight:700}}>Ready to browse Quincy Lab ovens?</div>
            <div style={{marginTop:8, color:'#d1d5db'}}>Visit Quincy Lab to see specs, capacities, and pricing—and get support from real engineers.</div>
          </div>
          <a className="btn" href={LINKS.home} target="_blank" rel="noreferrer">Go to Quincy Lab <ArrowRight size={18}/></a>
        </div>
      </section>

      <footer>
        <div className="container hstack between" style={{flexWrap:'wrap', gap:16}}>
          <div className="muted" style={{fontSize:14}}>© {new Date().getFullYear()} LabOvens.com • A resource by Quincy Lab</div>
          <div className="hstack gap-3 muted" style={{fontSize:14}}>
            <a href={LINKS.home} target="_blank" rel="noreferrer">Quincy Lab</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
