const dialog=document.querySelector('#case-dialog');
const content=document.querySelector('#case-content');
let lastTrigger;
const projects={
 yogger:{label:'YOGGER / MOBILE APP REDESIGN'},
 milestone:{label:'MILESTONE / FITNESS PRODUCT CONCEPT',title:'Less tracking friction.<br><span class="serif">More showing up.</span>',lead:'A simple workout logger and a protein-first tracker, designed around everyday consistency.',role:'Product concept · UX/UI direction',type:'Fitness · Mobile app',visual:'milestone',sections:[
 ['THE OPPORTUNITY','Progress without<br><span class="serif">the mental load.</span>','The concept brings together a workout logger that feels like a step up from Notes and protein tracking that keeps the focus on one useful daily goal.','The design question','How can logging feel light enough to become a habit, while still giving people a clear picture of their progress?'],
 ['01 / WORKOUT LOGGING','Keep the useful bits.<br><span class="serif">Keep it simple.</span>','The logger is designed around recording a workout quickly, with enough structure to make it more useful than a loose note.','The product direction','Make the core logging flow clear and direct. Additional features should support that task without competing with it.'],
 ['02 / PROTEIN FIRST','One goal.<br><span class="serif">An obvious next step.</span>','Protein tracking uses a clear daily target, visible progress, and quick logging. AI supports the protein tracking feature; the workout logger remains a separate, simple experience.','The visual direction','The preview explores a large progress indicator and concise meal entries. This is an illustrative interface direction, not a screenshot of the released app.'],
 ['03 / CONSISTENCY','A little encouragement<br><span class="serif">goes a long way.</span>','Friend streaks are central to the concept. They add a shared reason to keep showing up, alongside individual workout and protein progress.','What I would validate next','Evaluate how quickly people can log an entry, whether they understand their daily progress, and whether friend streaks encourage a sustainable habit.']
 ]},

};
// Additional projects from the original portfolio. Full case studies follow.
Object.assign(projects, {
 relax:{label:'RELAX / MEDITATION APP',name:'Relax',title:'A moment<br><em>to yourself.</em>',lead:'Designing a calm, low-friction meditation experience from scratch.',type:'Wellness · App design',pending:true,overview:'A meditation app exploring a calmer way to discover content and build a little space into the day.'},
 tide:{label:'TIDE / CAMPAIGN DESIGN',name:'Tide',title:'Chill zone<br><em>ahead.</em>',lead:'A campaign connecting with how Gen Z thinks about laundry.',type:'Campaign · Visual design',pending:true,overview:'A visual campaign built around a different way to connect with Gen Z, bringing a fresh voice and visual direction to laundry.'},
 reports:{label:'YOGGER / REPORT DESIGN',name:'Yogger reports',title:'From measurements<br><em>to meaning.</em>',lead:'Turning dense information into clear, approachable visuals.',type:'Information design · Reports',pending:true,overview:'Report design for Yogger, focused on making movement assessment information easier to read and understand.'},
 marketplace:{label:'FACEBOOK MARKETPLACE / CAMPAIGN',name:'Facebook Marketplace',title:'Notice something<br><em>missing?</em>',lead:'Marketplace has it.',type:'Campaign · Visual design',pending:true,overview:'A visual campaign for Facebook Marketplace built around a simple idea: notice something missing? Marketplace has it.'},
 chanel:{label:'CHANEL / EDITORIAL DESIGN',name:'Chanel',title:'The art of<br><em>the detail.</em>',lead:'Exploring structure and hierarchy in editorial design.',type:'Editorial · Visual design',pending:true,overview:'An editorial design project exploring typography, composition, and hierarchy through the visual world of Chanel.'}
});
Object.assign(projects.tide,{pending:false,label:'TIDE / THE ZEN CYCLE',name:'Tide / The Zen Cycle'});
Object.assign(projects.marketplace,{pending:false,label:'FACEBOOK MARKETPLACE / STUDENT CAMPAIGN'});
Object.assign(projects.relax,{pending:false,label:'RELAX / MEDITATION APP CONCEPT'});
Object.assign(projects.chanel,{pending:false,label:'CHANEL / EDITORIAL DESIGN'});
function renderUpcomingProject(key) {
 const p=projects[key];
 const source=document.querySelector('.project-visual[data-project="'+key+'"]');
 const preview=source.cloneNode(true);preview.querySelector('.view-circle')?.remove();
 return '<article class="yg home-draft"><section class="yg-intro yg-wrap"><p class="yg-kicker">'+p.label+'</p><h1>'+p.title+'</h1><p class="yg-lead">'+p.lead+'</p><span class="draft-status">Case study in progress</span></section><div class="draft-preview"><div class="'+preview.className+'">'+preview.innerHTML+'</div></div><section class="draft-overview yg-wrap"><div><p class="yg-kicker">OVERVIEW</p><h2>'+p.name+'</h2></div><div class="yg-body"><p>'+p.overview+'</p><p>The full story and project visuals are coming soon.</p></div></section><div class="yg-wrap yg-end"><p>Explore more product design</p><button data-next="yogger">View Yogger ↗</button></div></article>';
}
const yoggerAssets = {
  assessment: 'assets/1- Pick Assessment.png',
  expanded: 'assets/1 - Pick Assessment EXPANDED.png',
  score: 'assets/2- View Score.png',
  comparison: 'assets/3- Compare Score App.png',
  report: 'assets/3.1- Compare Score Print Report.png'
};

const yoggerIllustrations = [
  ['lunge.png', 'Lunge'],
  ['runner.png', 'Running'],
  ['yogi.png', 'Flexibility'],
  ['baseballplayer.png', 'Baseball'],
  ['golfer.png', 'Golf'],
  ['tennisplayer.png', 'Tennis'],
  ['clipboard.png', 'Assessments'],
  ['jumprope.png', 'Jump rope'],
  ['flexing.png', 'Strength']
];

// Scoped to the Yogger case study so your homepage keeps its existing styling.
const yoggerStyles = document.createElement('style');
yoggerStyles.textContent = `
  .yg { --yg-sage:#c3cfad; --yg-green:#526447; --yg-ink:#2c3944; --yg-paper:#f7f4ef; color:var(--yg-ink); background:var(--yg-paper); }
  .yg *, .yg *::before, .yg *::after { box-sizing:border-box; }
  .yg .yg-wrap { width:min(1160px,88%); margin-inline:auto; }
  .yg .yg-kicker { font-size:10px; letter-spacing:1.8px; font-weight:600; line-height:1.6; color:var(--yg-green); margin:0 0 20px; }
  .yg h1,.yg h2,.yg h3 { font-family:Manrope,Arial,sans-serif; font-weight:500; color:var(--yg-ink); }
  .yg h1 { font-size:clamp(46px,6.8vw,94px); letter-spacing:-.055em; line-height:1.08; margin:25px 0; }
  .yg h2 { font-size:clamp(32px,4vw,54px); letter-spacing:-.045em; line-height:1.15; margin:0 0 22px; }
  .yg h3 { font-size:19px; letter-spacing:-.025em; line-height:1.4; margin:0 0 9px; }
  .yg em { font-family:Georgia,serif; color:var(--yg-green); font-weight:400; }
  .yg p { line-height:1.8; }
  .yg .yg-lead { font-size:18px; max-width:680px; color:#52606d; margin:0; }
  .yg .yg-topline { display:flex; justify-content:space-between; align-items:center; gap:20px; }
  .yg .yg-topline .yg-kicker { margin:0; }
  .yg .yg-project-type { font-size:11px; color:#52606d; }
  .yg .yg-intro { padding:70px 0 25px; }
  .yg .yg-facts { display:grid; grid-template-columns:1fr 1fr 1.4fr; gap:30px; border-top:1px solid #d6d3cf; margin-top:40px; padding-top:22px; }
  .yg .yg-facts p { font-size:12px; line-height:1.7; margin:0; }
  .yg .yg-facts span { display:block; font-size:9px; letter-spacing:1.5px; color:#52606d; margin-bottom:7px; }
  .yg .yg-showcase { position:relative; background:var(--yg-sage); border-radius:4px; padding:55px 40px 30px; overflow:hidden; }
  .yg .yg-showcase::before { content:''; position:absolute; width:620px; height:620px; border:1px solid #52644720; border-radius:50%; top:-110px; left:calc(50% - 310px); pointer-events:none; }
  .yg .yg-device-row { position:relative; display:flex; justify-content:center; gap:38px; align-items:center; padding:15px 0 25px; }
  .yg .yg-device-row figure { margin:0; text-align:center; width:230px; }
  .yg .yg-device-row figure:nth-child(1) { transform:rotate(-6deg) translateY(12px); }
  .yg .yg-device-row figure:nth-child(2) { transform:translateY(-15px); }
  .yg .yg-device-row figure:nth-child(3) { transform:rotate(6deg) translateY(12px); }
  .yg .yg-phone { position:relative; width:100%; padding:6px; background:#202830; border:1px solid #75818b; border-radius:34px; box-shadow:0 20px 35px #2c394426, inset 0 0 0 2px #52606d; }
  .yg .yg-phone::before { content:''; position:absolute; z-index:2; top:15px; left:50%; transform:translateX(-50%); width:29%; height:15px; border-radius:20px; background:#171d22; pointer-events:none; }
  .yg .yg-phone img { display:block; width:100%; height:auto; border-radius:27px; background:white; }
  .yg .yg-device-row figcaption { font-size:10px; letter-spacing:.3px; margin-top:22px; }
  .yg .yg-device-row figcaption span { font-size:9px; margin-right:8px; opacity:.65; }
  .yg .yg-showcase-caption { position:relative; display:flex; justify-content:space-between; border-top:1px solid #52644730; padding-top:18px; font-size:10px; letter-spacing:.7px; }
  .yg .yg-nav { position:sticky; top:90px; z-index:10; background:#f7f4eff2; backdrop-filter:blur(12px); border-bottom:1px solid #d6d3cf; }
  .yg .yg-nav .yg-wrap { display:flex; justify-content:space-between; gap:18px; padding-block:20px; }
  .yg .yg-nav a { white-space:nowrap; font-size:11px; color:#52606d; transition:color .2s; }
  .yg .yg-nav a:hover,.yg .yg-nav a[aria-current="location"] { color:var(--yg-green); }
  .yg section[id] { scroll-margin-top:160px; }
  .yg .yg-overview { display:grid; grid-template-columns:1fr 1.2fr; gap:100px; padding:85px 0; }
  .yg .yg-body { color:#52606d; font-size:15px; line-height:1.8; }
  .yg .yg-body p:last-child { margin-bottom:0; }
  .yg .yg-question { padding:30px 0 0; margin-top:26px; border-top:1px solid #d6d3cf; }
  .yg .yg-question .yg-kicker { margin-bottom:12px; }
  .yg .yg-question p:last-child { font-size:22px; line-height:1.5; color:var(--yg-ink); letter-spacing:-.5px; margin:0; }
  .yg .yg-chapter { padding:80px 0; border-top:1px solid #d6d3cf; }
  .yg .yg-chapter-head { display:grid; grid-template-columns:1fr 1fr; gap:100px; margin-bottom:40px; align-items:end; }
  .yg .yg-chapter-head h2 { margin-bottom:0; }
  .yg .yg-chapter-head>p { font-size:15px; color:#52606d; margin:0; }
  .yg .yg-split { display:grid; grid-template-columns:1.1fr 1fr; gap:80px; align-items:center; }
  .yg .yg-stage { margin:0; min-height:625px; background:#e4e8dc; border-radius:4px; padding:45px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
  .yg .yg-stage .yg-phone { width:245px; transform:rotate(-4deg); transition:transform .6s; }
  .yg .yg-stage:hover .yg-phone { transform:rotate(0deg) translateY(-6px); }
  .yg .yg-stage-score { background:#dbe3d0; }
  .yg .yg-stage-score .yg-phone { transform:rotate(4deg); }
  .yg .yg-stage-note { position:absolute; left:25px; bottom:22px; font-size:9px; letter-spacing:1px; color:var(--yg-green); }
  .yg .yg-decisions { display:grid; gap:25px; }
  .yg .yg-decision { border-bottom:1px solid #d6d3cf; padding-bottom:23px; }
  .yg .yg-decision:last-child { border:0; padding-bottom:0; }
  .yg .yg-decision .yg-kicker { font-size:9px; margin-bottom:10px; }
  .yg .yg-decision p:last-child { color:#52606d; font-size:14px; line-height:1.8; margin-bottom:0; }
  .yg .yg-insight { margin:45px 0 0; padding:26px 30px; border-left:2px solid var(--yg-green); background:#e4e8dc70; font-family:Georgia,serif; font-style:italic; font-size:25px; line-height:1.5; color:var(--yg-green); }
  .yg .yg-comparison-stage { background:var(--yg-sage); border-radius:4px; padding:55px 45px 35px; }
  .yg .yg-comparison-visuals { display:grid; grid-template-columns:260px 1fr; gap:65px; max-width:880px; margin:auto; align-items:center; }
  .yg .yg-comparison-visuals figure { margin:0; }
  .yg .yg-comparison-visuals .yg-phone { transform:rotate(-4deg); }
  .yg .yg-report { display:block; transform:rotate(3deg); transition:transform .6s; }
  .yg .yg-report:hover { transform:rotate(0deg) translateY(-5px); }
  .yg .yg-report img { display:block; width:100%; box-shadow:0 20px 35px #2c394425; border-radius:2px; }
  .yg .yg-comparison-visuals figcaption { margin-top:25px; font-size:11px; text-align:center; }
  .yg .yg-comparison-caption { text-align:center; font-size:10px; color:var(--yg-green); margin:35px 0 0; }
  .yg .yg-comparison-decisions { display:grid; grid-template-columns:1fr 1fr; gap:65px; margin-top:40px; }
  .yg .yg-comparison-decisions p { font-size:14px; color:#52606d; }
  .yg .yg-system { padding:70px 0; border-top:1px solid #d6d3cf; display:grid; grid-template-columns:1fr 1.2fr; gap:100px; }
  .yg .yg-system-list { display:flex; gap:10px; flex-wrap:wrap; margin-top:25px; }
  .yg .yg-system-list span { padding:8px 13px; border:1px solid #c3cfad; border-radius:30px; font-size:10px; }
  .yg .yg-reflection { background:#e4e8dc; margin-top:20px; padding:80px 0; }
  .yg .yg-reflection .yg-wrap { display:grid; grid-template-columns:1fr 1.2fr; gap:100px; }
  .yg .yg-reflection h2 { font-size:46px; }
  .yg .yg-reflection strong { font-weight:500; color:var(--yg-ink); }
  .yg .yg-end { padding:60px 0 75px; display:flex; align-items:center; justify-content:space-between; gap:20px; }
  .yg .yg-end p { margin:0; font-size:13px; color:#52606d; }
  .yg .yg-end button { background:var(--yg-ink); color:var(--yg-paper); border:0; padding:15px 25px; border-radius:30px; font-size:12px; }
  .yg .yg-reveal { opacity:1; transform:none; transition:opacity .7s,transform .7s; }
  .yg .yg-reveal.yg-pending { opacity:0; transform:translateY(22px); }
  @media(max-width:1000px) {
    .yg .yg-overview,.yg .yg-chapter-head,.yg .yg-system,.yg .yg-reflection .yg-wrap { gap:50px; }
    .yg .yg-split { gap:40px; }
    .yg .yg-device-row { gap:22px; }
    .yg .yg-device-row figure { width:190px; }
    .yg .yg-stage { min-height:560px; padding:30px; }
    .yg .yg-stage .yg-phone { width:215px; }
    .yg .yg-comparison-visuals { grid-template-columns:210px 1fr; gap:40px; }
  }
  @media(max-width:700px) {
    .yg .yg-intro { padding-top:40px; }
    .yg .yg-project-type { display:none; }
    .yg .yg-lead { font-size:16px; }
    .yg .yg-facts { grid-template-columns:1fr 1fr; gap:20px; margin-top:30px; }
    .yg .yg-facts p:last-child { grid-column:1/-1; }
    .yg .yg-showcase { padding:35px 10px 20px; }
    .yg .yg-device-row { gap:10px; padding:15px 0 20px; }
    .yg .yg-device-row figure { width:29%; }
    .yg .yg-phone { padding:4px; border-radius:23px; }
    .yg .yg-phone img { border-radius:18px; }
    .yg .yg-phone::before { top:10px; height:10px; }
    .yg .yg-device-row .yg-phone { padding:3px; border-radius:16px; }
    .yg .yg-device-row .yg-phone img { border-radius:12px; }
    .yg .yg-device-row .yg-phone::before { top:7px; height:6px; }
    .yg .yg-device-row figcaption { font-size:8px; margin-top:16px; }
    .yg .yg-device-row figcaption span { display:block; margin:0 0 3px; }
    .yg .yg-showcase-caption { margin:0 12px; font-size:8px; letter-spacing:0; }
    .yg .yg-showcase-caption span:last-child { display:none; }
    .yg .yg-nav { top:75px; }
    .yg .yg-nav .yg-wrap { overflow-x:auto; padding-block:17px; justify-content:flex-start; gap:23px; }
    .yg .yg-nav a { font-size:10px; }
    .yg .yg-overview,.yg .yg-chapter-head,.yg .yg-split,.yg .yg-system,.yg .yg-reflection .yg-wrap { grid-template-columns:1fr; gap:30px; }
    .yg .yg-overview { padding:55px 0; }
    .yg .yg-chapter { padding:55px 0; }
    .yg .yg-chapter-head { margin-bottom:30px; gap:20px; }
    .yg .yg-chapter-head>p,.yg .yg-body { font-size:14px; }
    .yg .yg-stage { min-height:585px; padding:35px; }
    .yg .yg-stage .yg-phone { width:225px; }
    .yg .yg-insight { font-size:22px; margin-top:30px; padding:22px; }
    .yg .yg-comparison-stage { padding:35px 20px 25px; }
    .yg .yg-comparison-visuals { grid-template-columns:1fr; gap:40px; }
    .yg .yg-comparison-visuals figure:first-child { width:220px; margin:auto; }
    .yg .yg-comparison-visuals figure:last-child { width:92%; margin:auto; }
    .yg .yg-comparison-decisions { grid-template-columns:1fr; gap:20px; margin-top:30px; }
    .yg .yg-system { padding:55px 0; }
    .yg .yg-reflection { padding:55px 0; }
    .yg .yg-reflection h2 { font-size:36px; }
    .yg .yg-end { padding:40px 0 55px; flex-wrap:wrap; }
  }
  @media(prefers-reduced-motion:reduce) {
    .yg .yg-reveal.yg-pending { opacity:1; transform:none; }
    .yg *, .yg *::before, .yg *::after { animation:none!important; transition:none!important; }
  }

  .yg .yg-color-panel { grid-column:1/-1; margin-top:5px; padding:35px; background:#fbfaf7; border:1px solid #d6d3cf; border-radius:4px; }
  .yg .yg-color-heading { display:flex; justify-content:space-between; align-items:flex-end; gap:30px; margin-bottom:25px; }
  .yg .yg-color-heading h3 { font-size:27px; letter-spacing:-.8px; margin:0; }
  .yg .yg-color-heading p { max-width:370px; font-size:12px; line-height:1.7; color:#52606d; margin:0; }
  .yg .yg-palette { display:grid; grid-template-columns:1.3fr 1.3fr 1fr 1fr; gap:12px; }
  .yg .yg-swatch { min-width:0; }
  .yg .yg-color-block { height:180px; border-radius:3px; display:flex; flex-direction:column; justify-content:space-between; padding:20px; color:#334155; transition:transform .35s; }
  .yg .yg-swatch:hover .yg-color-block { transform:translateY(-4px); }
  .yg .yg-color-block strong { font-size:16px; font-weight:500; letter-spacing:-.3px; }
  .yg .yg-color-block code { font-family:monospace; font-size:11px; letter-spacing:.5px; }
  .yg .yg-color-charcoal { background:#3c4b5c; color:white; }
  .yg .yg-color-green { background:#77c290; }
  .yg .yg-color-gold { background:#f4c542; }
  .yg .yg-color-coral { background:#ff6b6b; }
  .yg .yg-swatch>p { font-size:11px; color:#52606d; margin:12px 0 0; line-height:1.6; }
  .yg .yg-neutral-row { display:flex; align-items:center; justify-content:space-between; gap:25px; border-top:1px solid #d6d3cf; margin-top:30px; padding-top:22px; }
  .yg .yg-neutral-copy strong { display:block; font-size:12px; font-weight:500; margin-bottom:3px; }
  .yg .yg-neutral-copy p { font-size:11px; color:#52606d; line-height:1.6; margin:0; }
  .yg .yg-neutrals { display:flex; flex-wrap:wrap; gap:20px; }
  .yg .yg-neutral { display:flex; align-items:center; gap:8px; }
  .yg .yg-neutral i { width:28px; height:28px; border-radius:50%; display:block; border:1px solid #2c394414; }
  .yg .yg-neutral span { font-size:9px; line-height:1.6; color:#52606d; }
  .yg .yg-neutral code { display:block; font-size:9px; font-family:monospace; }
  @media(max-width:1000px) { .yg .yg-color-heading { align-items:flex-start; flex-direction:column; gap:12px; } .yg .yg-neutral-row { align-items:flex-start; flex-direction:column; gap:18px; } }
  @media(max-width:700px) { .yg .yg-color-panel { padding:23px; } .yg .yg-color-heading h3 { font-size:23px; } .yg .yg-palette { grid-template-columns:1fr 1fr; gap:18px 12px; } .yg .yg-color-block { height:145px; padding:15px; } .yg .yg-color-block strong { font-size:15px; } .yg .yg-color-block code { font-size:10px; } .yg .yg-neutrals { gap:15px; } }

  .yg .yg-stage-expanded { padding:35px 25px 55px; background:#eef0e9; min-height:0; }
  .yg .yg-expanded { position:relative; width:100%; max-width:530px; }
  .yg .yg-expanded::before { content:''; position:absolute; top:-4px; bottom:-4px; left:-4px; width:59.3%; border:5px solid #2c3944; border-radius:25px; background:white; box-shadow:0 15px 30px #2c394415; }
  .yg .yg-expanded::after { content:''; position:absolute; top:10px; left:22%; width:14%; height:10px; border-radius:20px; background:#202830; pointer-events:none; }
  .yg .yg-expanded img { display:block; position:relative; width:100%; height:auto; border-radius:21px 0 0 21px; }
  .yg .yg-expanded-link { display:block; }
  .yg .yg-icon-panel { grid-column:1/-1; margin-top:-55px; }
  .yg .yg-icon-heading { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:end; margin-bottom:26px; }
  .yg .yg-icon-heading h3 { font-size:30px; letter-spacing:-1px; margin-bottom:0; }
  .yg .yg-icon-heading p { font-size:14px; color:#52606d; line-height:1.8; margin:0; }
  .yg .yg-icon-heading .yg-kicker { font-size:9px; margin-bottom:12px; }
  .yg .yg-icon-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
  .yg .yg-icon-card { margin:0; background:#fff; border:1px solid #e2e8f0; border-radius:9px; padding:22px 20px 18px; text-align:center; overflow:hidden; }
  .yg .yg-icon-card img { display:block; width:165px; height:165px; max-width:100%; object-fit:contain; margin:0 auto 10px; transition:transform .5s; }
  .yg .yg-icon-card:hover img { transform:translateY(-5px) scale(1.035); }
  .yg .yg-icon-card figcaption { font-size:12px; color:#3c4b5c; }
  .yg .yg-icon-footer { display:flex; justify-content:space-between; gap:20px; border-top:1px solid #d6d3cf; margin-top:24px; padding-top:18px; }
  .yg .yg-icon-footer span { font-size:10px; color:#52606d; line-height:1.6; }
  @media(max-width:1000px) { .yg .yg-icon-panel { margin-top:-20px; } .yg .yg-icon-heading { gap:30px; } }
  @media(max-width:700px) { .yg .yg-icon-panel { margin-top:8px; } .yg .yg-icon-heading { grid-template-columns:1fr; gap:16px; } .yg .yg-icon-heading h3 { font-size:27px; } .yg .yg-icon-heading p { font-size:13px; } .yg .yg-icon-grid { gap:8px; } .yg .yg-icon-card { padding:12px 7px; border-radius:6px; } .yg .yg-icon-card img { width:100%; height:auto; aspect-ratio:1; margin-bottom:8px; } .yg .yg-icon-card figcaption { font-size:10px; } .yg .yg-icon-footer { flex-direction:column; gap:6px; } .yg .yg-stage-expanded { padding:25px 16px 50px; } .yg .yg-expanded::before { border-width:4px; border-radius:20px; } .yg .yg-expanded::after { height:7px; top:8px; } }

  .yg .yg-flow-rows { margin-top:50px; }
  .yg .yg-flow-intro { display:flex; justify-content:space-between; align-items:center; gap:20px; margin-bottom:30px; }
  .yg .yg-flow-intro .yg-kicker { margin-bottom:8px; }
  .yg .yg-flow-toggle { background:none; border:1px solid #d6d3cf; border-radius:30px; padding:9px 15px; font-size:11px; white-space:nowrap; }
  .yg .yg-flow-row { margin:30px 0; }
  .yg .yg-flow-row>h3 { font-size:18px; margin-bottom:5px; }
  .yg .yg-flow-row>p { font-size:12px; color:#52606d; margin-bottom:16px; }
  .yg .yg-flow-window { overflow:hidden; border-radius:6px; }
  .yg .yg-flow-track { display:flex; width:max-content; animation:yg-flow 45s linear infinite; }
  .yg .yg-flow-set { display:flex; gap:12px; padding-right:12px; }
  .yg .yg-flow-card { width:160px; flex:none; margin:0; padding:14px; background:white; border:1px solid #e2e8f0; border-radius:9px; }
  .yg .yg-flow-card img { display:block; width:100%; height:125px; object-fit:contain; }
  .yg .yg-flow-card figcaption { font-size:11px; text-align:center; margin-top:10px; line-height:1.5; }
  .yg .yg-flow-card small { display:block; font-size:9px; color:#6b7a8c; margin-top:5px; }
  .yg .yg-flow-reverse .yg-flow-track { animation-direction:reverse; }
  .yg .yg-flow-paused .yg-flow-track,.yg .yg-flow-window:hover .yg-flow-track,.yg .yg-flow-window:focus-within .yg-flow-track { animation-play-state:paused; }
  .yg .yg-flow-note { font-size:13px; color:#52606d; margin:20px 0 0; }
  @keyframes yg-flow { to { transform:translateX(-50%); } }
  @media(max-width:700px) { .yg .yg-flow-card { width:135px; } .yg .yg-flow-card img { height:100px; } .yg .yg-flow-intro { align-items:flex-start; } }
  @media(prefers-reduced-motion:reduce) { .yg .yg-flow-track { animation:none; } .yg .yg-flow-window { overflow-x:auto; } .yg .yg-flow-set[aria-hidden] { display:none; } .yg .yg-flow-card[aria-hidden] { display:none; } .yg .yg-flow-toggle { display:none; } }

  .yg .yg-chapter-head-simple { grid-template-columns:1fr; }
  .yg .yg-chapter-head-simple h2 { max-width:850px; }
  .yg .yg-system { column-gap:70px; row-gap:40px; }
  .yg .yg-icon-panel { margin-top:0; }
  .yg .yg-icon-heading { display:flex; align-items:center; justify-content:space-between; gap:25px; margin-bottom:20px; }
  .yg .yg-icon-toggle { border:1px solid #d6d3cf; border-radius:30px; padding:9px 15px; background:none; font-size:11px; white-space:nowrap; }
  .yg .yg-library-toolbar { display:flex; align-items:center; justify-content:space-between; gap:20px; margin-bottom:25px; font-size:11px; color:#52606d; }
  .yg .yg-flow-rows { margin-top:45px; }
  .yg .yg-flow-row { margin:22px 0; }
  .yg .yg-flow-track { animation-duration:85s; }
  .yg .yg-flow-window,.yg .yg-icon-window { overflow-x:auto; scrollbar-width:none; cursor:grab; touch-action:pan-y; }
  .yg .yg-flow-window::-webkit-scrollbar,.yg .yg-icon-window::-webkit-scrollbar { display:none; }
  .yg .yg-flow-static .yg-flow-track { animation:none; }
  .yg .yg-flow-card { width:170px; padding:16px 12px; }
  .yg .yg-flow-card img { height:135px; }
  .yg .yg-flow-row>h3 { margin-bottom:14px; font-size:15px; color:#6b7a8c; }
  .yg .yg-icon-window { width:calc(100% + 13.6364%); margin-left:-6.8182%; background:#f1f2eb; border-radius:4px; }
  .yg .yg-icon-track { display:flex; width:max-content; animation:yg-flow 95s linear infinite; }
  .yg .yg-icon-set { display:flex; gap:18px; padding:18px 18px 18px 0; }
  .yg .yg-strip-icon { width:175px; flex:none; padding:12px; background:white; border-radius:7px; }
  .yg .yg-strip-icon img { display:block; width:100%; height:150px; object-fit:contain; user-select:none; -webkit-user-drag:none; }
  .yg .yg-icons-paused .yg-icon-track,.yg .yg-icon-window:hover .yg-icon-track,.yg .yg-icon-window:focus-within .yg-icon-track,.yg .yg-dragging .yg-icon-track,.yg .yg-dragging .yg-flow-track { animation-play-state:paused; }
  .yg .yg-dragging { cursor:grabbing; }
  @media(max-width:700px) { .yg .yg-flow-card { width:145px; } .yg .yg-flow-card img { height:110px; } .yg .yg-strip-icon { width:140px; } .yg .yg-strip-icon img { height:120px; } .yg .yg-icon-heading { align-items:flex-start; } .yg .yg-system { row-gap:28px; } }
  @media(prefers-reduced-motion:reduce) { .yg .yg-icon-track { animation:none; } .yg .yg-icon-set[aria-hidden],.yg .yg-strip-icon[aria-hidden],.yg .yg-icon-toggle { display:none; } }

  /* Cohesive pale green surfaces and a compact, finite assessment library. */
  #case-dialog:has(.yg), #case-content:has(.yg) { background:#f7f4ef; }
  .yg .yg-color-panel,.yg .yg-icon-window { background:transparent; }
  .yg .yg-showcase,.yg .yg-stage,.yg .yg-stage-score,.yg .yg-comparison-stage { background:#eef0e9; }
  .yg .yg-showcase { padding-bottom:110px; }
  .yg .yg-nav { background:#f7f4eff5; border-color:#cdd6c4; }
  .yg .yg-nav a { font-weight:750; font-size:12px; color:var(--yg-ink); padding:9px 12px; border-radius:25px; }
  .yg .yg-nav a:hover,.yg .yg-nav a[aria-current="location"] { background:#dbe3d0; color:#40563a; }
  .yg .yg-nav a:focus-visible { outline:2px solid var(--yg-green); outline-offset:3px; }
  .yg .yg-color-panel { padding:0; border:0; }
  .yg .yg-flow-rows { margin-top:32px; }
  .yg .yg-flow-row { min-width:0; margin:0; }
  .yg .yg-flow-row>h3 { margin:0 0 10px; font-size:13px; font-weight:650; color:#526447; }
  .yg .yg-flow-track,.yg .yg-icon-track { animation:none; }
  .yg .yg-flow-set { gap:10px; padding:0; }
  .yg .yg-flow-card { width:128px; padding:10px 8px; border-color:#ccd6c3; box-shadow:none; }
  .yg .yg-flow-card img { height:91px; }
  .yg .yg-flow-card figcaption { font-size:10px; line-height:1.4; margin-top:7px; }
  .yg .yg-flow-static .yg-flow-window { overflow:visible; cursor:default; }
  .yg .yg-flow-static .yg-flow-track { width:100%; }
  .yg .yg-flow-static .yg-flow-set { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); width:100%; }
  .yg .yg-flow-static .yg-flow-card { width:auto; }
  .yg .yg-functional-groups { display:grid; grid-template-columns:3fr 2fr; gap:10px; margin:24px 0; }
  .yg .yg-functional-groups .yg-flow-set { grid-template-columns:repeat(3,minmax(0,1fr)); }
  .yg .yg-functional-groups .yg-flow-row:last-child .yg-flow-set { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .yg .yg-rom { border-top:1px solid #ccd6c3; padding-top:20px; }
  .yg .yg-library-toolbar { margin-bottom:14px; }
  .yg .yg-library-toolbar h3 { font-size:16px; margin:0; }
  .yg .yg-rom-groups { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
  .yg .yg-flow-window,.yg .yg-icon-window { touch-action:pan-x pan-y; }
  .yg .yg-strip-icon { padding:0; border-radius:0; }
  @media(max-width:700px) {
    .yg .yg-showcase { padding-bottom:75px; }
    .yg .yg-nav a { font-size:11px; padding:8px 10px; }
    .yg .yg-flow-static .yg-flow-set { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .yg .yg-functional-groups { grid-template-columns:3fr 1fr; }
    .yg .yg-functional-groups .yg-flow-row:last-child .yg-flow-set { grid-template-columns:1fr; }
    .yg .yg-flow-card img { height:75px; }
    .yg .yg-flow-card { width:116px; padding:8px 5px; }
    .yg .yg-flow-card figcaption { font-size:9px; }
    .yg .yg-rom-groups { grid-template-columns:1fr; gap:18px; }
  }

  /* Expanded library presentation, with the product's original white cards. */
  .yg .yg-stage-note { left:20px; right:20px; text-align:center; line-height:1.6; }
  .yg .yg-flow-rows { padding:30px; border:1px solid #e2e8f0; border-radius:22px; background:linear-gradient(90deg,#fff 0%,#fff 61%,#faf9f6 61%); box-shadow:0 16px 45px #2c394408; }
  .yg .yg-library-heading { display:flex; justify-content:space-between; align-items:center; gap:20px; margin-bottom:20px; }
  .yg .yg-library-heading h3 { font-size:26px; margin:0; letter-spacing:-.8px; }
  .yg .yg-library-heading .yg-kicker { font-size:9px; margin-bottom:8px; }
  .yg .yg-library-badge { font-size:10px; color:#6b7a8c; }
  .yg .yg-movement-age { display:flex; align-items:center; justify-content:space-between; max-width:360px; padding:14px 18px; border:1px solid #d5e6d6; border-radius:15px; background:#edf8ef; margin-bottom:22px; }
  .yg .yg-movement-age strong { display:block; font-size:15px; }
  .yg .yg-movement-age span { display:block; font-size:11px; color:#6b7a8c; margin-top:4px; }
  .yg .yg-movement-age img { height:62px; width:62px; object-fit:contain; }
  .yg .yg-flow-card { background:#fff; border:1px solid #e2e8f0; border-radius:15px; box-shadow:0 4px 12px #2c394406; }
  .yg .yg-flow-row>h3 { color:#6b7a8c; }
  .yg .yg-flow-card img { border-radius:8px; }
  .yg .yg-rom { border-color:#e2e8f0; }
  .yg .yg-system { display:block; }
  .yg .yg-system h2,.yg .yg-icon-heading h3 { font-size:36px; line-height:1.2; letter-spacing:-1px; }
  .yg .yg-color-panel { margin:32px 0 48px; }
  .yg .yg-palette { grid-template-columns:repeat(4,minmax(0,1fr)); gap:28px; max-width:760px; }
  .yg .yg-swatch { text-align:center; }
  .yg .yg-color-block { width:110px; height:110px; padding:0; border-radius:50%; margin:0 auto 14px; box-shadow:inset 0 0 0 1px #2c394410; }
  .yg .yg-swatch-name { display:block; font-size:13px; font-weight:650; }
  .yg .yg-swatch-hex { display:block; font-size:10px; color:#6b7a8c; margin-top:4px; }
  .yg .yg-swatch>p { font-size:10px; margin-top:8px; }
  .yg .yg-icon-window { width:100%; margin-left:0; }
  .yg .yg-icon-set { gap:14px; padding:10px 0; }
  .yg .yg-strip-icon { background:#fff; padding:14px; border:1px solid #e2e8f0; border-radius:16px; box-shadow:0 4px 12px #2c394406; }
  .yg .yg-strip-icon img { border-radius:8px; }
  @media(max-width:700px) {
    .yg .yg-flow-rows { padding:18px 12px; border-radius:16px; background:#fff; }
    .yg .yg-library-heading { display:block; }
    .yg .yg-library-heading h3 { font-size:22px; }
    .yg .yg-library-badge { display:block; margin-top:8px; }
    .yg .yg-system h2,.yg .yg-icon-heading h3 { font-size:28px; }
    .yg .yg-palette { grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; }
    .yg .yg-color-block { width:90px; height:90px; padding:0; }
    .yg .yg-strip-icon { padding:10px; }
  }

  /* Shared card dimensions keep every library row aligned. */
  .yg .yg-palette { margin-inline:auto; }
  .yg .yg-flow-rows { --yg-card-width:160px; --yg-card-height:185px; }
  .yg .yg-functional-groups { display:flex; flex-direction:column; gap:24px; margin:24px 0; }
  .yg .yg-rom-groups { grid-template-columns:1fr; gap:24px; }
  .yg .yg-flow-static .yg-flow-set,
  .yg .yg-functional-groups .yg-flow-set,
  .yg .yg-functional-groups .yg-flow-row:last-child .yg-flow-set { display:flex; flex-wrap:wrap; width:100%; gap:10px; }
  .yg .yg-flow-card,.yg .yg-flow-static .yg-flow-card { box-sizing:border-box; width:var(--yg-card-width); height:var(--yg-card-height); flex:0 0 var(--yg-card-width); padding:12px 10px; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; }
  .yg .yg-flow-card img { width:100%; height:125px; flex:none; }
  .yg .yg-flow-card figcaption { width:100%; min-height:30px; margin:8px 0 0; font-size:10px; display:flex; align-items:center; justify-content:center; line-height:1.4; }
  .yg .yg-showcase,.yg .yg-stage,.yg .yg-stage-score,.yg .yg-comparison-stage { background:radial-gradient(ellipse at 48% 30%,#d7dfc9 0%,#bdcaaa 48%,#96a986 100%); }
  .yg .yg-stage-note { color:#2c3944; }
  .yg .yg-icon-window { box-sizing:border-box; padding:18px; border-radius:16px; background:linear-gradient(125deg,#c3cfad,#96a986); }
  @media(max-width:700px) {
    .yg .yg-flow-rows { --yg-card-width:96px; --yg-card-height:145px; }
    .yg .yg-flow-card,.yg .yg-flow-static .yg-flow-card { padding:8px 5px; }
    .yg .yg-flow-card img { height:95px; }
    .yg .yg-flow-card figcaption { font-size:9px; min-height:26px; margin-top:6px; }
    .yg .yg-functional-groups,.yg .yg-rom-groups { gap:20px; }
    .yg .yg-icon-window { padding:12px; }
  }

  /* Compact library, lighter Pea tones, and hover-controlled motion. */
  .yg .yg-showcase { padding-bottom:45px; }
  .yg .yg-showcase,.yg .yg-stage,.yg .yg-stage-score,.yg .yg-comparison-stage {
    background:radial-gradient(ellipse at 48% 30%,#e4eadb 0%,#d3ddc3 48%,#c3cfad 100%);
  }
  .yg .yg-icon-window { background:linear-gradient(125deg,#e4eadb,#c3cfad); }
  .yg .yg-flow-rows { --yg-card-width:120px; --yg-card-height:140px; width:75%; box-sizing:border-box; margin:32px auto 0; padding:23px; background:#fff; border-radius:17px; }
  .yg .yg-library-heading { margin-bottom:18px; }
  .yg .yg-library-heading h3 { font-size:20px; }
  .yg .yg-library-heading .yg-kicker { font-size:8px; }
  .yg .yg-library-badge { font-size:9px; }
  .yg .yg-flow-card,.yg .yg-flow-static .yg-flow-card { padding:9px 7px; }
  .yg .yg-flow-card img { height:91px; }
  .yg .yg-flow-card figcaption { font-size:9px; min-height:25px; margin-top:6px; }
  .yg .yg-flow-row>h3 { font-size:12px; margin-bottom:8px; }
  .yg .yg-functional-groups { margin:18px 0; gap:18px; }
  .yg .yg-rom-groups { gap:18px; }
  .yg .yg-rom { padding-top:16px; }
  .yg .yg-library-toolbar h3 { font-size:14px; }
  .yg .yg-flow-moving .yg-flow-window { max-width:380px; }
  @media(max-width:1000px) { .yg .yg-flow-rows { width:90%; } }
  @media(max-width:700px) {
    .yg .yg-showcase { padding-bottom:30px; }
    .yg .yg-flow-rows { width:100%; --yg-card-width:96px; --yg-card-height:132px; padding:16px 12px; }
    .yg .yg-flow-card img { height:83px; }
    .yg .yg-flow-moving .yg-flow-window { max-width:280px; }
    .yg .yg-library-heading h3 { font-size:20px; }
  }

  /* Range of motion now uses the full library canvas. */
  .yg .yg-flow-moving .yg-flow-window { width:100%; max-width:none; }
  .yg .yg-create-flow { position:relative; flex:none; align-self:center; }
  .yg .yg-create-flow summary { display:flex; align-items:center; gap:14px; padding:10px 14px; background:#fff; border:1px solid #edf0f3; border-radius:28px; box-shadow:0 8px 25px #2c39440d; font-size:11px; color:#2c3944; cursor:pointer; list-style:none; white-space:nowrap; }
  .yg .yg-create-flow summary::-webkit-details-marker { display:none; }
  .yg .yg-create-gear { font-size:21px; line-height:1; color:#3c4b5c; }
  .yg .yg-create-flow p { position:absolute; z-index:4; top:calc(100% + 8px); right:0; width:210px; margin:0; padding:14px; background:#fff; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 10px 30px #2c394418; font-size:11px; line-height:1.6; }
  .yg .yg-create-flow summary:focus-visible { outline:2px solid #526447; outline-offset:3px; }
  @media(max-width:700px) { .yg .yg-flow-moving .yg-flow-window { width:100%; max-width:none; } .yg .yg-create-flow summary { gap:9px; padding:9px 11px; font-size:10px; } }

  /* Portfolio presentation preserves the mobile cards and their hierarchy. */
  .yg .yg-phone-detail-library { width:100%; padding:28px; background:#fff; --yg-card-width:110px; --yg-card-height:142px; }
  .yg .yg-library-pair { display:grid; grid-template-columns:210px minmax(0,1fr); gap:30px; align-items:start; }
  .yg .yg-library-context { background:linear-gradient(130deg,#e4eadb,#c3cfad); border-radius:16px; padding:24px 15px; }
  .yg .yg-library-context .yg-phone { transform:rotate(-3deg); }
  .yg .yg-library-detail { min-width:0; padding-top:4px; }
  .yg .yg-detail-tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:22px; }
  .yg .yg-detail-tabs button { background:#fff; color:#52606d; border:1px solid #e2e8f0; border-radius:24px; font:inherit; font-size:12px; font-weight:600; padding:10px 14px; cursor:pointer; }
  .yg .yg-detail-tabs button[aria-selected="true"] { background:#e4eadb; border-color:#c3cfad; color:#2c3944; }
  .yg .yg-detail-tabs button:focus-visible { outline:2px solid #526447; outline-offset:3px; }
  .yg .yg-detail-panel[hidden] { display:none; }
  .yg .yg-detail-group { margin-bottom:20px; }
  .yg .yg-detail-group:last-child { margin-bottom:0; }
  .yg .yg-detail-group h4 { font-size:12px; font-weight:650; color:#6b7a8c; margin:0 0 10px; }
  .yg .yg-detail-group .yg-flow-set { gap:10px; padding-right:0; }
  .yg .yg-detail-group .yg-flow-card img { height:93px; }
  .yg .yg-detail-group .yg-flow-card figcaption { min-height:26px; font-size:9px; }
  .yg .yg-detail-group .yg-flow-window { width:100%; max-width:none; }
  .yg .yg-create-flow summary,.yg .yg-create-flow summary span { color:#3c4b5c!important; }
  @media(max-width:700px) {
    .yg .yg-phone-detail-library { padding:20px 14px; --yg-card-width:100px; --yg-card-height:138px; }
    .yg .yg-library-pair { grid-template-columns:1fr; gap:24px; }
    .yg .yg-library-context { max-width:210px; width:100%; box-sizing:border-box; margin:auto; }
    .yg .yg-detail-tabs { margin-bottom:18px; }
    .yg .yg-detail-tabs button { padding:10px 12px; font-size:11px; }
    .yg .yg-detail-group .yg-flow-card img { height:89px; }
  }

  /* Reference layout: one phone, a four-tab detail panel, decisions below. */
  .yg .yg-assessment-showcase { display:grid; grid-template-columns:245px minmax(0,1fr); gap:55px; align-items:center; padding:45px 35px; background:linear-gradient(120deg,#e0e7d3 0%,#c3cfad 100%); border:0; border-radius:4px; }
  .yg .yg-assessment-showcase .yg-library-context { background:transparent; padding:0; border-radius:0; }
  .yg .yg-library-context figure { margin:0; }
  .yg .yg-assessment-showcase .yg-phone { transform:rotate(-3deg); }
  .yg .yg-library-context figcaption { font-size:9px; letter-spacing:.7px; text-align:center; line-height:1.6; margin-top:25px; color:#2c3944; }
  .yg .yg-assessment-showcase .yg-library-detail { padding:22px; background:#fff; border-radius:24px; min-width:0; }
  .yg .yg-assessment-showcase .yg-detail-tabs { display:flex; flex-wrap:nowrap; overflow-x:auto; scrollbar-width:thin; gap:14px; margin:0 0 14px; padding-bottom:5px; }
  .yg .yg-assessment-showcase .yg-detail-tabs button { flex:none; border:0; border-radius:0; background:transparent; font-size:10px; font-weight:650; padding:6px 0; color:#6b7a8c; white-space:nowrap; }
  .yg .yg-assessment-showcase .yg-detail-tabs button[aria-selected="true"] { color:#2c3944; background:transparent; }
  .yg .yg-assessment-showcase .yg-detail-panel { min-height:170px; }
  .yg .yg-assessment-showcase .yg-flow-set { gap:10px; padding:12px 3px; }
  .yg .yg-assessment-showcase .yg-flow-card { width:110px; flex-basis:110px; height:148px; padding:10px 7px; border-radius:14px; box-shadow:none; }
  .yg .yg-assessment-showcase .yg-flow-card img { height:98px; transition:transform .28s ease; transform-origin:center; }
  .yg .yg-assessment-showcase .yg-flow-card:hover img,.yg .yg-assessment-showcase .yg-flow-card:focus img { transform:scale(1.14); }
  .yg .yg-assessment-showcase .yg-flow-card:focus-visible { outline:2px solid #526447; outline-offset:2px; }
  .yg .yg-assessment-showcase .yg-flow-card figcaption { font-size:9px; min-height:27px; margin-top:6px; }
  .yg .yg-assessment-showcase .yg-detail-group { margin-bottom:12px; }
  .yg .yg-assessment-showcase .yg-detail-group h4 { font-size:10px; font-weight:500; margin:0; }
  .yg .yg-assessment-showcase .yg-create-flow { width:max-content; margin:8px auto 0; }
  .yg .yg-assessment-showcase .yg-create-flow summary { font-size:10px; padding:7px 11px; color:#3c4b5c; }
  .yg #yg-assessment>.yg-decisions { grid-template-columns:1fr 1fr; column-gap:55px; row-gap:24px; margin-top:38px; align-items:start; }
  .yg #yg-assessment>.yg-decisions .yg-decision:nth-child(1) { grid-column:1; grid-row:1; }
  .yg #yg-assessment>.yg-decisions .yg-decision:nth-child(2) { grid-column:1; grid-row:2; border:0; padding-bottom:0; }
  .yg #yg-assessment>.yg-decisions .yg-decision:nth-child(3) { grid-column:2; grid-row:1 / span 2; }
  @media(max-width:1000px) { .yg .yg-assessment-showcase { grid-template-columns:210px minmax(0,1fr); padding:32px 24px; gap:30px; } .yg .yg-assessment-showcase .yg-library-detail { padding:18px; } }
  @media(max-width:700px) {
    .yg .yg-assessment-showcase { grid-template-columns:1fr; padding:28px 14px; gap:28px; }
    .yg .yg-assessment-showcase .yg-library-context { max-width:210px; margin:auto; }
    .yg .yg-assessment-showcase .yg-library-detail { width:100%; box-sizing:border-box; padding:16px; border-radius:18px; }
    .yg .yg-assessment-showcase .yg-detail-tabs { gap:14px; }
    .yg #yg-assessment>.yg-decisions { grid-template-columns:1fr; gap:24px; margin-top:28px; }
    .yg #yg-assessment>.yg-decisions .yg-decision:nth-child(n) { grid-column:1; grid-row:auto; }
  }
  @media(prefers-reduced-motion:reduce) { .yg .yg-assessment-showcase .yg-flow-card img { transition:none; } }

  /* Stable panel geometry and a stronger, quieter visual hierarchy. */
  .yg .yg-assessment-showcase { grid-template-columns:minmax(280px,.9fr) minmax(0,1.55fr); gap:34px; padding:48px 34px; align-items:center; }
  .yg .yg-assessment-showcase .yg-library-context { width:100%; max-width:none; display:flex; justify-content:center; }
  .yg .yg-library-context figure { width:280px; max-width:100%; margin:0; transform:translateX(16px); }
  .yg .yg-assessment-showcase .yg-phone { width:100%; transform:rotate(-2deg); }
  .yg .yg-assessment-showcase .yg-library-detail { box-sizing:border-box; height:460px; padding:24px; display:grid; grid-template-rows:60px minmax(0,1fr); border-radius:24px; box-shadow:0 18px 45px #2c394409; }
  .yg .yg-assessment-showcase .yg-detail-tabs { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; overflow:visible; margin:0; padding:0 0 16px; border-bottom:1px solid #edf0f3; align-items:stretch; }
  .yg .yg-assessment-showcase .yg-detail-tabs button { position:relative; white-space:normal; text-align:left; font-size:13px; line-height:1.3; padding:0 0 8px; font-weight:650; transition:color .2s; }
  .yg .yg-assessment-showcase .yg-detail-tabs button::after { content:''; height:2px; position:absolute; bottom:0; left:0; right:0; border-radius:2px; background:#526447; transform:scaleX(0); transform-origin:left; transition:transform .22s ease; }
  .yg .yg-assessment-showcase .yg-detail-tabs button[aria-selected="true"]::after { transform:scaleX(1); }
  .yg .yg-assessment-showcase .yg-detail-tabs button:hover { color:#2c3944; }
  .yg .yg-assessment-showcase .yg-detail-panel { min-height:0; padding-top:18px; animation:yg-panel-enter .2s ease both; }
  .yg .yg-assessment-showcase .yg-flow-card { height:136px; }
  .yg .yg-assessment-showcase .yg-flow-card img { height:86px; }
  .yg .yg-assessment-showcase .yg-flow-card img { transition:transform .32s cubic-bezier(.2,.7,.2,1); }
  .yg .yg-assessment-showcase .yg-flow-card:hover img,.yg .yg-assessment-showcase .yg-flow-card:focus img { transform:scale(1.1); }
  .yg .yg-assessment-showcase .yg-detail-group { margin-bottom:14px; }
  .yg .yg-assessment-showcase .yg-detail-group h4 { font-size:12px; line-height:1.4; }
  .yg .yg-assessment-showcase .yg-flow-set { padding-block:10px; }
  .yg .yg-assessment-showcase .yg-create-flow { margin-top:12px; }
  .yg #yg-assessment>.yg-decisions { grid-template-columns:1fr 1fr; gap:48px; margin-top:36px; }
  .yg #yg-assessment>.yg-decisions .yg-decision:nth-child(n) { grid-column:auto; grid-row:auto; border:0; padding-bottom:0; }
  @keyframes yg-panel-enter { from { opacity:.6; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
  @media(max-width:1000px) {
    .yg .yg-assessment-showcase { grid-template-columns:245px minmax(0,1fr); gap:28px; padding:34px 24px; }
    .yg .yg-library-context figure { width:250px; transform:translateX(9px); }
    .yg .yg-assessment-showcase .yg-library-detail { padding:20px; }
    .yg .yg-assessment-showcase .yg-detail-tabs { gap:9px; }
    .yg .yg-assessment-showcase .yg-detail-tabs button { font-size:12px; }
  }
  @media(max-width:700px) {
    .yg .yg-assessment-showcase { grid-template-columns:1fr; padding:30px 14px; gap:30px; }
    .yg .yg-assessment-showcase .yg-library-context { max-width:none; }
    .yg .yg-library-context figure { width:250px; transform:none; }
    .yg .yg-assessment-showcase .yg-library-detail { height:460px; padding:18px 14px; }
    .yg .yg-assessment-showcase .yg-detail-tabs { gap:8px; }
    .yg .yg-assessment-showcase .yg-detail-tabs button { font-size:11px; }
    .yg #yg-assessment>.yg-decisions { grid-template-columns:1fr; gap:26px; }
  }

  /* Plain navigation and evenly spaced library categories. */
  .yg .yg-nav a,.yg .yg-nav a:hover,.yg .yg-nav a[aria-current="location"] { background:transparent; border-radius:0; }
  .yg .yg-nav a[aria-current="location"] { color:#2c3944; }
  .yg .yg-assessment-showcase .yg-library-detail { height:470px; grid-template-rows:22px 44px minmax(0,1fr); }
  .yg .yg-library-kicker { font-size:9px; line-height:1.4; font-weight:650; letter-spacing:1.6px; color:#526447; margin:0; }
  .yg .yg-assessment-showcase .yg-detail-tabs { grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; border-bottom:0; padding-bottom:8px; align-items:center; }
  .yg .yg-assessment-showcase .yg-detail-tabs button { text-align:center; padding:4px 0; }
  .yg .yg-assessment-showcase .yg-detail-tabs button::after { display:none; }
  .yg .yg-assessment-showcase .yg-detail-panel { padding-top:8px; }
  .yg .yg-assessment-showcase .yg-flow-card { height:128px; padding:8px 7px; }
  .yg .yg-assessment-showcase .yg-flow-card img { height:78px; }
  .yg .yg-icon-window { background:transparent; border-radius:0; padding:0; }
  @media(max-width:700px) {
    .yg .yg-assessment-showcase .yg-library-detail { height:470px; grid-template-rows:25px 44px minmax(0,1fr); }
    .yg .yg-assessment-showcase .yg-detail-tabs { gap:8px; }
    .yg .yg-library-kicker { font-size:8px; letter-spacing:1.2px; }
    .yg .yg-icon-window { padding:0; }
  }

  /* Balanced header: natural label widths, shared baseline, even gaps. */
  .yg .yg-assessment-showcase .yg-detail-tabs { display:flex; align-items:baseline; justify-content:space-between; gap:18px; overflow-x:auto; scrollbar-width:none; padding:4px 0 10px; }
  .yg .yg-assessment-showcase .yg-detail-tabs::-webkit-scrollbar { display:none; }
  .yg .yg-assessment-showcase .yg-detail-tabs button { flex:0 0 auto; white-space:nowrap; text-align:left; font-size:12px; line-height:1.4; padding:4px 0; }
  .yg .yg-assessment-showcase .yg-detail-tabs button[aria-selected="true"] { color:#2c3944; font-weight:750; }
  @media(max-width:1000px) { .yg .yg-assessment-showcase .yg-detail-tabs { gap:16px; } .yg .yg-assessment-showcase .yg-detail-tabs button { font-size:11px; } }
  @media(max-width:700px) { .yg .yg-assessment-showcase .yg-detail-tabs { justify-content:flex-start; gap:20px; } }

  .yg .yg-create-flow summary img.yg-create-gear { display:block; width:20px; height:20px; flex:0 0 20px; object-fit:contain; border-radius:0; margin:0; }
`;
document.head.appendChild(yoggerStyles);

function yoggerPhone(src, alt, eager = false) {
  return `<div class="yg-phone"><img src="${src}" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"></div>`;
}


const yoggerImageFallbacks = {
  'neckMobility.png':'neckMobility(1).png',
  'yogi.png':'yogi(1).png',
  'golfer.png':'golfer(1).png',
  'lunge.png':'lunge(1).png'
};
content.addEventListener('error',event => {
  const img=event.target;
  if(img.tagName!=='IMG' || !img.closest('.yg') || img.dataset.fallbackTried)return;
  const name=decodeURIComponent(img.getAttribute('src').split('/').pop());
  const replacement=yoggerImageFallbacks[name];
  if(replacement){img.dataset.fallbackTried='true';img.src='assets/'+replacement;}
},true);

function renderAssessmentRows() {
  const row=(title,items,moving=false)=>`<div class="yg-detail-group ${moving?'yg-flow-moving':''}">${title?`<h4>${title}</h4>`:''}<div class="yg-flow-window" tabindex="0" role="region" aria-label="${title||'Assessment'} examples"><div class="yg-flow-track"><div class="yg-flow-set">${items.map(([file,label])=>`<figure class="yg-flow-card" tabindex="0" aria-label="${label} illustration"><img src="assets/${file}" alt="" loading="lazy" decoding="async" width="450" height="450"><figcaption>${label}</figcaption></figure>`).join('')}</div></div></div></div>`;
  const tabs=[['flows','Assessment Flows'],['functional','Functional Movements'],['performance','Performance'],['rom','Range of Motion']];
  return `<div class="yg-phone-detail-library yg-assessment-showcase yg-reveal">
    <div class="yg-library-context"><figure>${yoggerPhone(yoggerAssets.assessment,'Yogger Choose Assessment screen')}<figcaption>GROUPED BY HOW USERS ASSESS MOVEMENT</figcaption></figure></div>
    <div class="yg-library-detail">
      <p class="yg-library-kicker">A CLOSER LOOK INTO THE LIBRARY</p>
      <div class="yg-detail-tabs" role="tablist" aria-label="Assessment library categories">${tabs.map(([key,label],i)=>`<button type="button" id="yg-${key}-tab" role="tab" aria-selected="${i===0}" aria-controls="yg-${key}-panel" tabindex="${i===0?'0':'-1'}" data-library-tab="${key}">${label}</button>`).join('')}</div>
      <div class="yg-detail-panel" id="yg-flows-panel" role="tabpanel" aria-labelledby="yg-flows-tab">
        ${row('',[['neckMobility.png','Neck Mobility'],['shoulderMobility.png','Shoulder Mobility'],['trunkMobility.png','Trunk Mobility'],['yogi.png','Flexibility'],['golfer.png','Golf Assessment']])}
        <details class="yg-create-flow"><summary><span>+ Create Flow</span><img class="yg-create-gear" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHlElEQVR4nO1dWYyURRDuBU+8iMb7Sox44BHNKu5O9+6AgsxWzXIoozBVPxt9WOODV3wwKrJeESVyJcYXRRN8AjQh4oV44Jl4oCbGKxxCBB+IopjI7a6pmRUJuzAz/9U9//xfUslmH/6p6u/v7uqu41cqRYoUKVKkSDiyE7uGG6SVGnmPQe6rRjTSTgO8sFAoDLWtf+KgkR6qlogBkudJtvVPHAzQq74JQZ5lW//EwSCt9UuIRn7Ntv6JQjbbdZQG3htghmywbUOikIHiFQHIEOkVp8C2HYmB7igWAxLS1wacsW1HYmCQHgtKiAa6TTUycrk7jgzrWRrp5aCEGKRnwtKnubn7cFVPMMCPGuBdBnizQZoS9Hka6fvAMwT5g6B6tHXwjWJT/4GzR9UDDNKTAweDFmULhWP9vo0GaXfwGcJb/drUUigcrZEWDGLXXFVvZOy3hq/3s7HqzumXhEBGSVpw+pm1/n4r8qUG6NuDzzxHSTkUGfstG3s00sO13C0ZpClhEdKG3vgaTGrSSHeVlqeKdjlGigGeV9PgAL+fzdFZh3xoT8+QDBTHaOB3wiJEIy0zWGyuZE8Wuk4zwCtqtOlpVZdk/C+/yyZ54PPawbvYAM/XyL+GRcQg8qNsypkJU88YYE9HMa+Rtvh6rm1SqlmmqnhrSxu+6Zx+ufwd8Iqk1gHcJb/ZjtNGlK5nyht3b0B75tbbzBhkYOi32EjAwYR2G6CNYT1PA8+pn9hEwwg9EBshBmiTfYPZbQHaGBshYXo+yRVaGRsh/Z7QdvtGs5MiZ5f2juJlKk7Iocm24cZVAb5TWUCTQX7DuvHomtDbMjY2CFFysLLvsrJLsrVt4s1nK5vQ4N3gwED0uSAa6CblAjTyS7YHw9gn4wXlCsaOLZwgmR0NTMb6UTk6XrkEnfdMrPdQ6IgA/WPyXla5CI08u+FmB/LjyuXEBt9X13UoGuknpxMedI5abA+SiZeQHYPFVJxBIx4UNdBTykVIaDSmQeg1yF9KCEAjjc6MpwvHjeNjRFrz0y6S/xmgmRp4dSz6AP3Vcn3hROUaNPJzMRCx2HR4F1Srk5ClgZcGjQJWnCVIdyuXMLJQOEKuDaIzmta24bRRQfY2OStERgjwZ8olSIVShEvCR63j+JSgOl49yTtJI70bmZ41zNxIIEkB7TnvylJmOtCnERn6XphupcxkDbQqoln8imTRSKwoUle4ZEQpe9ArSJKbQVqikb+L+lSuZYnJ3XJy2PbITDFAayLVvVyYuk4jL5fMHI08XZye5nz3MF/3Uhp4RimpDGiNpeuQ3iB7RiVk8l5r1Bv94C8Z7y2NKdIyGWMZ64rK1pyxF40sVhEjnBKHoATRW5UJCSfTPNDsMDFskHJmsU2IjHUVhMQ/lQ9Q8gsVEzTSV7ZfPucJ0cAzYmGjvDz3pIRUIgRpdCxslCuirk0JqSDtOG1ELGz0X62khFSQrM/SNz8oZd2nhBxaMhNuPS4WNpRSEgdPCXHoTqjVvuvrPiEZKI6JhY10U69SgGbGGMN5JCWkgmjg1THWuXzjPiH2ywx6xR2NpaTCfpb89moIWWhbUQ28NGpCJH5h206D9HxFRaWoXyNNlmwKjfSmRv7FxizROWqJjIyOorayNEthKdDr5RgJTfbdnLMUI8l7xiB3l0uHaWXUZQga6efIAlQB2gVWKdv6M2MWlQubvLFhhKEroclg8bw2KE6UuHckpACtkohlqMkYwB9GQwItyaAHOu+do2xDpl90M4U/DivJQWL0iU1yGJDTC/RHZKQArZewa5A9o7QERkUG8OfKNYjHEJnBWJJeCbvKdUdtrm0M3hTwPaqBU0n7SpE+4B65+hCC5NZWRP6W/5WzY/jrhk4lbdhka+TZylU0YDnCTqfLEWTZiHJzN+7JOsngVK7ChWsXE7cAz1cuooHr1Xt1njuVS5Bun43c0UEjbWkbT6crJ9DTMyTSNH+sEwFeIWNhmw6Jut1vfTDQDdFYvNf+YVBaijswGMYJod1RZu0fElJkWWq3an0Q2C0BWhNnKtM+SLMV68ajq1JFJDBcMhrWxe2rQabGxUdTxF2n+xIhwJtj6SwnBY3VNKhvdNFIO2Lrg+JAglmf6yJjFAsZ+0gBnhOi8paXQNodZuKDvf7vyLNCiAIukBCwzWb8LZ18fjabPUwCW4F/H3iesgl5G3wqv6ENiu1WPlcB/IM0rxns/qncGc9fGw5nPuxSKynyVlaq0S4UCkNNnq6Tj3mFRYR8gjXT4V1VTd2IRnqxrmaGn+VLI/+ZQaaangueF9rM6Cjmaz5vVXOL7RoZ1ZAiDfwrfuYo4uSJViieq2rENZ1TT5WZVXdkHIwU8ccN8n1+r6ab893DSp0/gxOyLcBBTdqqdxugv+uKjP8gteblb4zQSmlcE/R5JgSXVCN9EliPHI3sz2veZIAeVI0KE+zj9v1LJj1r247EwITw8TGDfLttOxIDE4KnJecL23YkBia4p5V+4D5MNAf1tOL8QFejwCCv8+9h8XLb+icOJoinBfSEbf0TBx3gY5ZSdmdb/8QhO7FruCSj9Xf8rPYwuEM6bvuudk2RIkWKFClU/eBfGVn6L4j5caMAAAAASUVORK5CYII=" alt="" width="20" height="20" aria-hidden="true"></summary><p>Combine single tests into a reusable assessment flow.</p></details>
      </div>
      <div class="yg-detail-panel" id="yg-functional-panel" role="tabpanel" aria-labelledby="yg-functional-tab" hidden>${row('',[['ohs.png','Overhead Squat'],['posture.png','Posture'],['lunge.png','Lunge']])}</div>
      <div class="yg-detail-panel" id="yg-performance-panel" role="tabpanel" aria-labelledby="yg-performance-tab" hidden>${row('',[['singleLegSquat.png','Single Leg Squat']])}</div>
      <div class="yg-detail-panel" id="yg-rom-panel" role="tabpanel" aria-labelledby="yg-rom-tab" hidden>
        ${row('Rotation',[['neckRotation.png','Neck Rotation'],['shoulderRotation.png','Shoulder Rotation'],['standingRotation.png','Standing Trunk Rotation'],['hipRotation.png','Hip Rotation'],['seatedRotation.png','Seated Thoracic Rotation']],true)}
        ${row('Flexion & Extension',[['neckFlexionExtension.png','Neck Flexion-Extension'],['lateralNeckFlexion.png','Lateral Neck Flexion'],['shoulderFlexion.png','Shoulder Flexion'],['backFlexion.png','Standing Trunk Flexion']])}
      </div>
    </div>
  </div>`;
}

function selectLibraryTab(button) {
  const library=button.closest('.yg-phone-detail-library');
  library.querySelectorAll('[data-library-tab]').forEach(tab=>{
    const selected=tab===button;
    tab.setAttribute('aria-selected',String(selected));
    tab.tabIndex=selected?0:-1;
    library.querySelector('#'+tab.getAttribute('aria-controls')).hidden=!selected;
  });
}
content.addEventListener('click',event=>{
  const button=event.target.closest('[data-library-tab]');
  if(button)selectLibraryTab(button);
});
content.addEventListener('keydown',event=>{
  const button=event.target.closest('[data-library-tab]');
  if(!button || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();
  const tabs=[...button.parentElement.querySelectorAll('[data-library-tab]')];
  const index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(tabs.indexOf(button)+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
  selectLibraryTab(tabs[index]);tabs[index].focus();
});

function renderIconStrip() {
  const icons=[['runner.png','Running'],['tennisplayer.png','Tennis'],['baseballplayer.png','Baseball'],['clipboard.png','Assessments'],['flexing.png','Strength'],['dumbell.png','Dumbbell'],['lungeman.png','Lunge'],['neckRotation.png','Neck Rotation'],['seatedRotation.png','Seated Rotation'],['wavelady.png','Welcome']];
  return `<div class="yg-icon-window" tabindex="0" role="region" aria-label="Yogger illustration collection"><div class="yg-icon-track"><div class="yg-icon-set">${icons.map(([file,label]) => `<div class="yg-strip-icon"><img src="assets/${file}" alt="${label} illustration" width="450" height="450" loading="lazy" decoding="async"></div>`).join('')}</div></div></div>`;
}

function enablePreviewDragging() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  content.querySelectorAll('.yg-flow-window,.yg-icon-window').forEach(view => {
    let startX=0,startScroll=0,dragging=false,direction=1,lastTime=0,waitUntil=0,position=0;
    view.addEventListener('pointerdown',event => {
      if(event.pointerType !== 'mouse' || event.button !== 0)return;
      dragging=true;startX=event.clientX;startScroll=view.scrollLeft;
      view.classList.add('yg-dragging');view.setPointerCapture(event.pointerId);
    });
    view.addEventListener('pointermove',event => {
      if(dragging)view.scrollLeft=startScroll-(event.clientX-startX);
    });
    const end=()=>{dragging=false;position=view.scrollLeft;view.classList.remove('yg-dragging');};
    view.addEventListener('pointerup',end);view.addEventListener('pointercancel',end);
    view.addEventListener('dragstart',event=>event.preventDefault());
    const moving=view.closest('.yg-flow-moving') || view.classList.contains('yg-icon-window');
    if(!moving)return;
    const tick=time => {
      if(!view.isConnected)return;
      const delta=Math.min(time-lastTime,50);lastTime=time;
      const paused=reducedMotion.matches || dragging || view.matches(':hover,:focus-within');
      const limit=Math.max(0,view.scrollWidth-view.clientWidth);
      if(!paused && limit>1 && time>=waitUntil) {
        const next=position+direction*delta*0.022;
        position=Math.max(0,Math.min(limit,next));
        view.scrollLeft=position;
        if(next>=limit || next<=0){direction*=-1;waitUntil=time+1200;}
      }
      if(paused)position=view.scrollLeft;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function renderYogger() {
  return `
  <article class="yg" aria-labelledby="yg-title">
    <section class="yg-intro yg-wrap" id="yg-top">
      <div class="yg-topline"><p class="yg-kicker">YOGGER / MOBILE APP REDESIGN</p><span class="yg-project-type">Health tech · Product design</span></div>
      <h1 id="yg-title">Clarifying the path from<br><em>assessment to score</em></h1>
      <p class="yg-lead">Redesigning how users choose assessments, understand movement scores, and track progress over time.</p>
      <div class="yg-facts">
        <p><span>MY ROLE</span>Sole Product Designer</p>
        <p><span>PLATFORM</span>Mobile app · Printable reports</p>
        <p><span>THE GOAL</span>Make movement data easier to navigate, explain, and act on</p>
      </div>
    </section>
    <div class="yg-wrap yg-showcase">
      <div class="yg-device-row">
        <figure>${yoggerPhone(yoggerAssets.assessment, 'Yogger assessment selection screen', true)}<figcaption><span>01</span> Pick an assessment</figcaption></figure>
        <figure>${yoggerPhone(yoggerAssets.score, 'Yogger lunge score and component breakdown', true)}<figcaption><span>02</span> Understand the score</figcaption></figure>
        <figure>${yoggerPhone(yoggerAssets.comparison, 'Yogger comparison of previous and current results', true)}<figcaption><span>03</span> See what changed</figcaption></figure>
      </div>
    </div>
    <nav class="yg-nav" aria-label="Yogger case study sections"><div class="yg-wrap">
      <a href="#yg-overview">Overview</a><a href="#yg-assessment">01 / Assessment</a><a href="#yg-scoring">02 / Scoring</a><a href="#yg-comparison">03 / Comparison</a><a href="#yg-reflection">Reflection</a>
    </div></nav>
    <section class="yg-overview yg-wrap yg-reveal" id="yg-overview">
      <div><p class="yg-kicker">THE CHALLENGE</p><h2>Score data needs<br><em>a clear path</em></h2></div>
      <div class="yg-body">
        <p>Yogger turns movement assessments into measurable data. The experience needed to make that information easier to navigate, understand, and explain.</p>
        <p>My focus was the journey around the assessment: finding the right test, understanding what a score means, and seeing how results change over time.</p>
        <div class="yg-question"><p class="yg-kicker">THE DESIGN QUESTION</p><p>How can users get to the right assessment, then understand the result without getting lost in the data?</p></div>
      </div>
    </section>
    <section class="yg-chapter yg-wrap" id="yg-assessment">
      <div class="yg-chapter-head yg-chapter-head-simple yg-reveal"><div><p class="yg-kicker">01 / ASSESSMENT DISCOVERY</p><h2>How can users get to<br><em>the right test faster?</em></h2></div></div>
      ${renderAssessmentRows()}
        <div class="yg-decisions yg-reveal">
  <div class="yg-decision"><p class="yg-kicker">PRIORITIZE HOW CLINICIANS ACTUALLY WORK</p><h3>Put repeated workflows first</h3><p>I reorganized the page around how clinicians use the product: custom assessment flows first, individual movement tests below, and a featured entry point for the new Movement Age experience.</p></div>
  <div class="yg-decision"><p class="yg-kicker">CREATE CLEARER ENTRY POINTS</p><h3>Make each option easier to scan</h3><p>Smaller cards, grouped sections, new icons, labels, and tighter spacing made the page easier to scan while leaving room for new tests and flows.</p></div>
</div>
      <p class="yg-insight yg-reveal">Assessment setup should feel organized before the data gets complex.</p>
    </section>
    <section class="yg-chapter yg-wrap" id="yg-scoring">
      <div class="yg-chapter-head yg-chapter-head-simple yg-reveal"><div><p class="yg-kicker">02 / SCORE HIERARCHY</p><h2>Lead with the result.<br><em>Let users go deeper.</em></h2></div></div>
      <div class="yg-split">
        <figure class="yg-stage yg-stage-score yg-reveal">${yoggerPhone(yoggerAssets.score, 'An 84 percent overall score above an expanded posture component')}<figcaption class="yg-stage-note">OVERVIEW → COMPONENTS → MEASUREMENTS</figcaption></figure>
        <div class="yg-decisions yg-reveal">
          <div class="yg-decision"><p class="yg-kicker">LEAD WITH THE RESULT</p><h3>Make the overall score the anchor</h3><p>A prominent score gives users the main takeaway first, before they move into the supporting components.</p></div>
          <div class="yg-decision"><p class="yg-kicker">SHOW WHAT NEEDS ATTENTION</p><h3>Make component scores easier to compare</h3><p>Consistent cards, progress bars, and color cues make the breakdown easier to scan, while numeric scores keep the information readable beyond color alone.</p></div>
          <div class="yg-decision"><p class="yg-kicker">LET USERS CONTROL THE DEPTH</p><h3>Reveal measurements in context</h3><p>Expandable components keep left and right measurements tied to the score they explain, without showing every metric at once.</p></div>
        </div>
      </div>
      <p class="yg-insight yg-reveal">Help users understand the result first, then explore the metrics behind it.</p>
    </section>
    <section class="yg-chapter yg-wrap" id="yg-comparison">
      <div class="yg-chapter-head yg-chapter-head-simple yg-reveal"><div><p class="yg-kicker">03 / COMPARISON & REPORTING</p><h2>Turning assessments<br><em>into progress stories</em></h2></div></div>
      <div class="yg-comparison-stage yg-reveal">
        <div class="yg-comparison-visuals">
          <figure>${yoggerPhone(yoggerAssets.comparison, 'Mobile comparison showing previous and current lunge assessment scores')}<figcaption>Compare in the app</figcaption></figure>
          <figure><a class="yg-report" href="${yoggerAssets.report}" target="_blank" rel="noopener" aria-label="Open the full-size sample comparison report in a new tab"><img src="${yoggerAssets.report}" alt="Printable sample lunge comparison report with overall scores and component changes" loading="lazy" decoding="async"></a><figcaption><a href="${yoggerAssets.report}" target="_blank" rel="noopener">View the full report ↗</a></figcaption></figure>
        </div>
      </div>
      <div class="yg-comparison-decisions yg-reveal">
        <div><p class="yg-kicker">MAKE CHANGE VISIBLE</p><h3>Put the comparison in one view</h3><p>Previous and current results sit side by side, with directional changes next to the measurements they describe. Users can connect the overall result to what changed underneath it.</p></div>
        <div><p class="yg-kicker">CARRY THE STORY BEYOND THE APP</p><h3>Keep reports familiar</h3><p>The printable report follows the same hierarchy: overall comparison first, component breakdown next. The format changes, but the explanation stays consistent.</p></div>
      </div>
    </section>
    <section class="yg-system yg-wrap yg-reveal">
      <div><p class="yg-kicker">VISUAL REFRESH</p><h2>Making the product<br><em>feel more cohesive</em></h2></div>
      <div class="yg-color-panel">
        <div class="yg-palette" aria-label="Selected Yogger interface colors">
          <div class="yg-swatch"><div class="yg-color-block yg-color-charcoal" aria-hidden="true"></div><strong class="yg-swatch-name">Charcoal</strong><code class="yg-swatch-hex">#3C4B5C</code><p>Text, navigation & key actions</p></div>
          <div class="yg-swatch"><div class="yg-color-block yg-color-green" aria-hidden="true"></div><strong class="yg-swatch-name">Tea Green</strong><code class="yg-swatch-hex">#77C290</code><p>Progress & positive results</p></div>
          <div class="yg-swatch"><div class="yg-color-block yg-color-gold" aria-hidden="true"></div><strong class="yg-swatch-name">Gold</strong><code class="yg-swatch-hex">#F4C542</code><p>Measurements to review</p></div>
          <div class="yg-swatch"><div class="yg-color-block yg-color-coral" aria-hidden="true"></div><strong class="yg-swatch-name">Coral</strong><code class="yg-swatch-hex">#FF6B6B</code><p>Stronger attention cues</p></div>
        </div>
      </div>
      <div class="yg-icon-panel">
        <div class="yg-icon-heading"><div><p class="yg-kicker">ILLUSTRATION SYSTEM</p><h3>Different movements.<br><em>One visual language.</em></h3></div></div>
        ${renderIconStrip()}
      </div>
    </section>
    <section class="yg-reflection" id="yg-reflection"><div class="yg-wrap yg-reveal">
      <div><p class="yg-kicker">THE TAKEAWAY</p><h2>The order<br><em>did the work</em></h2></div>
      <div class="yg-body"><p>This project taught me that making data available is not the same as making it usable. The biggest improvement was simple: put the information in the right order.</p><p>That hierarchy made the experience clearer from the first selection to the final progress report, while giving Yogger a structure future scoring experiences could build on.</p></div>
    </div></section>
    <div class="yg-wrap yg-end"><p>Thoughtful structure. Clearer movement insights.</p><button data-next="milestone">Next project: Milestone ↗</button></div>
  </article>`;
}


const milestoneAssets = {
  progress:'assets/milestone-protein-progress.png',
  meals:'assets/milestone-protein-meals.png',
  scan:'assets/milestone-scan-start.png',
  camera:'assets/milestone-scan-camera.png',
  photo:'assets/milestone-scan-photo.png',
  description:'assets/milestone-scan-description.png',
  review:'assets/milestone-scan-review.png',
  logged:'assets/milestone-scan-logged.png'
};
const milestoneScanSteps = [
  {image:'scan',title:'Start with Quick Log',text:'Manual entry and camera scanning sit together, so users can choose the method that fits the moment.'},
  {image:'camera',title:'Photograph the meal',text:'A camera shortcut gives users a way to start logging without typing every ingredient.'},
  {image:'photo',title:'Check the photo',text:'Users can retake the image or use it before moving on. The decision stays in their hands.'},
  {image:'description',title:'Add useful context',text:'An optional description helps clarify ingredients and portions that a photo alone may not explain.'},
  {image:'review',title:'Review before saving',text:'Suggested protein and calorie estimates remain editable. Convenience does not replace the user’s judgment.'},
  {image:'logged',title:'See the updated day',text:'The saved meal appears in the log and updates daily progress, closing the loop in the same screen.'}
];
function milestonePhone(src,alt,eager=false) {
  return `<div class="yg-phone ms-phone"><img src="${src}" alt="${alt}" loading="${eager?'eager':'lazy'}" decoding="async" width="945" height="2048"></div>`;
}
function renderMilestone() {
  return `<article class="yg ms" aria-labelledby="ms-title">
    <section class="yg-intro yg-wrap" id="ms-top">
      <div class="yg-topline"><p class="yg-kicker">MILESTONE / PROTEIN TRACKING</p><span class="yg-project-type">Fitness · Mobile product design</span></div>
      <h1 id="ms-title">A little more protein,<br><em>a lot less pressure</em></h1>
      <p class="yg-lead">A focused protein tracker designed to make daily progress clear and food logging easier to keep up with.</p>
      <div class="yg-facts"><p><span>MY ROLE</span>Product Designer<br>Protein-tracking experience</p><p><span>COLLABORATION</span>Worked with the developer<br>Within an existing workout app</p><p><span>THE GOAL</span>Know where you stand, log a meal,<br>and move on with your day</p></div>
    </section>
    <div class="yg-wrap ms-hero yg-reveal">
      <div class="ms-hero-phones">
        <figure>${milestonePhone(milestoneAssets.scan,'Milestone protein tracker showing daily progress and Quick Log',true)}<figcaption><span>01</span> Know where you stand</figcaption></figure>
        <figure>${milestonePhone(milestoneAssets.review,'Milestone meal review with editable protein and calorie estimates',true)}<figcaption><span>02</span> Log in a way that fits</figcaption></figure>
        <figure class="ms-hero-fragments"><div class="ms-fragment-stack"><div class="ms-fragment-progress-frame"><img class="ms-fragment-progress" src="assets/milestone-day-progress.png" alt="Daily protein progress: 135 grams logged toward a 160–180 gram range" loading="eager" decoding="async"></div><div class="ms-fragment-meal-frame"><img class="ms-fragment-meals" src="assets/milestone-day-meals.png" alt="Three named meals with protein totals and source labels" loading="eager" decoding="async"></div></div><figcaption><span>03</span> See the day add up</figcaption></figure>
      </div>
    </div>
    <nav class="yg-nav" aria-label="Milestone case study sections"><div class="yg-wrap"><a href="#ms-overview">Overview</a><a href="#ms-inspiration">Inspiration</a><a href="#ms-progress">01 / Progress</a><a href="#ms-logging">02 / Quick Log</a><a href="#ms-feedback">03 / Feedback</a><a href="#ms-reflection">Reflection</a></div></nav>
    <section class="ms-overview yg-wrap yg-reveal" id="ms-overview">
      <div><p class="yg-kicker">THE OPPORTUNITY</p><h2>Track what matters.<br><em>Let go of the rest.</em></h2></div>
      <div class="yg-body"><p>Milestone brings workout logging and protein tracking together. I joined after the workout logger had been developed and took ownership of the protein-tracking experience, while contributing to the wider app.</p><p>The idea came from my own experience: tracking food could quickly turn into overthinking every meal. I wanted the awareness of tracking with fewer numbers competing for attention.</p><div class="yg-question"><p class="yg-kicker">THE DESIGN QUESTION</p><p>How might we help people track protein consistently without making food feel like another thing to get perfect?</p></div></div>
    </section>
    <section class="yg-chapter yg-wrap" id="ms-inspiration">
      <div class="ms-section-heading yg-reveal"><p class="yg-kicker">THE STARTING POINT</p><h2>It started in Notes.<br><em>The simplicity was worth keeping.</em></h2></div>
      <div class="ms-inspiration-grid yg-reveal">
        <div class="ms-notes-pair ms-notes-evidence">
          <figure class="ms-notes-main"><a href="assets/milestone-notes-original.png" target="_blank" rel="noopener" aria-label="View the full original protein note">${milestonePhone('assets/milestone-notes-original.png','Original Notes protein counter with unnamed calorie and protein rows, emoji ratings, and manually written totals')}</a><figcaption>The original protein counter</figcaption></figure>
          <figure class="ms-notes-detail"><a href="assets/milestone-notes-remainder.png" target="_blank" rel="noopener" aria-label="View the unfinished day and manually written remainder"><img src="assets/milestone-notes-remainder.png" alt="An unfinished day in Notes, with a manually written protein remainder and a possible next meal" loading="lazy" decoding="async"></a><figcaption>A day still in progress</figcaption></figure>
        </div>
        <div class="yg-body"><p>My protein log in Notes was quick and flexible. I could add a number and keep going. But that speed left gaps I had to make sense of later.</p>
          <div class="ms-notes-problems">
            <div><h3>Days weren’t clearly separated</h3><p>The note had a creation timestamp, but individual days had no dates. Looking back meant working out which table belonged to when.</p></div>
            <div><h3>Numbers lost their context</h3><p>I wrote quickly and often skipped meal names. Later, I couldn’t reliably tell what a row of numbers referred to.</p></div>
            <div><h3>Progress depended on manual math</h3><p>I added protein totals and calculated the remainder myself. Any change to the log meant updating those numbers again.</p></div>
            <div><h3>Feedback needed a clearer meaning</h3><p>Emoji ratings were a quick shorthand, but there was no visible explanation of what each rating meant.</p></div>
          </div>
          <p class="ms-pullquote">Keep the ease of a note. Add the context and calculations it was missing.</p>
        </div>
      </div>
    </section>
    <section class="yg-chapter yg-wrap" id="ms-progress">
      <div class="ms-section-heading yg-reveal"><p class="yg-kicker">01 / DAILY PROGRESS</p><h2>Know where you stand.<br><em>Not where you fall short.</em></h2></div>
      <div class="ms-split"><figure class="ms-stage yg-reveal">${milestonePhone(milestoneAssets.progress,'Daily protein intake, remaining grams, and a flexible target range')}<figcaption>DAILY INTAKE → REMAINING GRAMS → TARGET RANGE</figcaption></figure><div class="yg-decisions yg-reveal"><div class="yg-decision"><p class="yg-kicker">MAKE THE NEXT STEP OBVIOUS</p><h3>Lead with daily progress</h3><p>Protein intake sits at the top of the tracker. A progress bar and remaining grams make the current day easy to understand before users reach the meal log.</p></div><div class="yg-decision"><p class="yg-kicker">SUPPORT CONSISTENCY</p><h3>A range instead of an exact finish line</h3><p>A flexible target acknowledges that nutrition varies day to day. The range keeps the goal achievable without treating a few missing grams as failure.</p></div><div class="yg-decision"><p class="yg-kicker">ENCOURAGE WITHOUT JUDGMENT</p><h3>Motivation in the small moments</h3><p>Short, supportive messages acknowledge progress without turning daily tracking into a pass-or-fail experience. The goal is to keep users moving forward, not focused on what they missed.</p></div></div></div>
    </section>
    <section class="yg-chapter yg-wrap" id="ms-logging">
      <div class="ms-section-heading yg-reveal"><p class="yg-kicker">02 / QUICK LOG</p><h2>Make logging easier.<br><em>Keep the user in control.</em></h2></div>
      <div class="ms-scan yg-reveal">
        <div class="ms-scan-visual">${milestonePhone(milestoneAssets.scan,'Step 1: Milestone Quick Log camera entry')}<span class="ms-scan-counter">01 / 06</span></div>
        <div class="ms-scan-copy"><p class="yg-kicker">THE LOGGING EXPERIENCE</p><div class="ms-scan-steps" role="group" aria-label="Explore the food scanning flow">${milestoneScanSteps.map((step,i)=>`<button type="button" class="ms-scan-step" data-scan-step="${i}" aria-pressed="${i===0}" aria-label="Step ${i+1}: ${step.title}">${String(i+1).padStart(2,'0')}</button>`).join('')}</div><div class="ms-scan-text" aria-live="polite"><h3>${milestoneScanSteps[0].title}</h3><p>${milestoneScanSteps[0].text}</p></div><div class="ms-scan-controls"><button type="button" data-scan-direction="-1" disabled>← Previous</button><button type="button" data-scan-direction="1">Next step →</button></div><p class="ms-scan-principle">A quicker way to log.<br><em>With the final say.</em></p></div>
      </div>
    </section>
    <section class="yg-chapter yg-wrap" id="ms-feedback">
      
      <div class="ms-split ms-split-reverse"><div class="ms-feedback-copy"><div class="ms-section-heading yg-reveal"><p class="yg-kicker">03 / PROTEIN FEEDBACK</p><h2>Give context.<br><em>Skip the food judgment.</em></h2></div><div class="yg-decisions yg-reveal"><div class="yg-decision"><p class="yg-kicker">EXPLAIN ONE RELEVANT METRIC</p><h3>Protein efficiency, not a health score</h3><p>Feedback describes how much protein a food provides relative to its calories. Low, okay, good, and excellent source labels offer a quick reference alongside the numbers.</p></div><div class="yg-decision"><p class="yg-kicker">LEAVE THE CHOICE WITH THE USER</p><h3>Every meal can still count</h3><p>A less protein-efficient food still contributes to the daily goal. The interface provides context without turning individual meals into a good-or-bad decision.</p></div></div></div><figure class="ms-stage ms-stage-dark yg-reveal">${milestonePhone(milestoneAssets.meals,'Milestone meal log with protein totals and source labels')}<div class="ms-source-labels" aria-label="Protein source categories"><span>Low</span><span>Okay</span><span>Good</span><span>Excellent</span></div><figcaption>CONTEXT FOR THE MEAL, NOT A VERDICT ON IT</figcaption></figure></div>
    </section>
    <section class="yg-chapter yg-wrap" id="ms-product">
      <div class="ms-product-copy yg-reveal"><div><p class="yg-kicker">PART OF A LARGER PRODUCT</p><h2>Thinking beyond protein.<br><em>Designing for the whole.</em></h2></div><div class="yg-body"><p>I worked with the developer to make the tracker feel at home in the existing workout app. I also contributed to macro and account screens, spacing, color, friend streaks, and notification timing.</p><p>The App Store visuals carried that same story beyond the app: logging workouts, seeing progress, tracking protein, and staying accountable with friends.</p></div></div>
      <div class="ms-store-gallery yg-reveal"><div class="ms-gallery-toolbar"><span>APP STORE VISUALS</span></div><div class="ms-store-track" role="region" aria-label="App Store promotional image gallery">${[['milestone-store-workouts.png','Workout logging'],['milestone-store-progress.png','Workout progress'],['milestone-store-protein.png','Protein tracking'],['milestone-store-friends.png','Friend streaks']].map(([file,label])=>`<figure><img src="assets/${file}" alt="Milestone App Store artwork: ${label}" loading="lazy" decoding="async" width="946" height="2048"><figcaption>${label}</figcaption></figure>`).join('')}</div></div>
    </section>
    <section class="ms-outcome yg-wrap yg-reveal"><div><p class="yg-kicker">OUTCOME</p><h2>Built for<br><em>everyday use.</em></h2><span class="ms-status">Implemented · Awaiting App Store approval</span></div><div class="yg-body"><p>The protein tracker is now part of Milestone, making it easier to see how much protein you've had, quickly log meals, and keep up with your daily target.</p><p>With the app awaiting App Store approval, I'm excited to see how people use it and what can be improved along the way.</p></div></section>
    <section class="yg-reflection" id="ms-reflection"><div class="yg-wrap yg-reveal"><div><p class="yg-kicker">THE TAKEAWAY</p><h2>Better design can<br><em>ask for less.</em></h2></div><div class="yg-body"><p>Keeping Milestone simple was harder than I expected. I wanted users to have everything they needed without adding unnecessary steps.</p><p>I'm proud of how approachable the tracker feels, especially the goal range and encouraging feedback. But I'm also realizing that some decisions, like categorizing meals, might not be necessary at all.</p><p>That's something I'd revisit in the next version. The more I worked on this, the more I realized that good design is just as much about what you leave out.</p></div></div></section>
    <div class="yg-wrap yg-end"><p>Less to manage. More room to keep going.</p><button data-next="yogger">Explore Yogger ↗</button></div>
  </article>`;
}
function setMilestoneScan(index) {
  const scan=content.querySelector('.ms-scan');if(!scan)return;
  const next=Math.max(0,Math.min(milestoneScanSteps.length-1,index));
  const step=milestoneScanSteps[next];scan.dataset.currentStep=String(next);
  const img=scan.querySelector('.ms-phone img');img.src=milestoneAssets[step.image];img.alt=`Step ${next+1}: ${step.title}`;
  scan.querySelector('.ms-scan-counter').textContent=`${String(next+1).padStart(2,'0')} / 06`;
  scan.querySelector('.ms-scan-text h3').textContent=step.title;scan.querySelector('.ms-scan-text p').textContent=step.text;
  scan.querySelectorAll('[data-scan-step]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.scanStep)===next)));
  scan.querySelector('[data-scan-direction="-1"]').disabled=next===0;
  scan.querySelector('[data-scan-direction="1"]').disabled=next===milestoneScanSteps.length-1;
}
content.addEventListener('click',event=>{
  const step=event.target.closest('[data-scan-step]');if(step){setMilestoneScan(Number(step.dataset.scanStep));return;}
  const direction=event.target.closest('[data-scan-direction]');if(direction){setMilestoneScan(Number(direction.closest('.ms-scan').dataset.currentStep||0)+Number(direction.dataset.scanDirection));return;}
});
const milestoneStyles=document.createElement('style');
milestoneStyles.textContent=`
  .yg.ms { --yg-ink:#2c3944; --yg-green:#9e2f50; --yg-sage:#e4e7eb; --yg-paper:#f7f4ef; background:var(--yg-paper); }
  #case-dialog:has(.ms),#case-content:has(.ms) { background:#f7f4ef; }
  .yg.ms em { color:#9e2f50; }
  .yg.ms .yg-nav a:hover,.yg.ms .yg-nav a[aria-current="location"] { color:#9e2f50; }
  .yg.ms .ms-phone { background:#141a21; border-color:#7b8794; }
  .yg.ms .ms-phone img { background:#111; }
  .yg.ms .ms-phone::before { display:none; }
  .yg.ms .ms-hero { padding:30px 45px 38px; border-radius:4px; background:linear-gradient(135deg,#e4e7eb,#b8c1ca); overflow:hidden; position:relative; }
  .yg.ms .ms-hero::after { content:''; position:absolute; width:350px; height:350px; border-radius:50%; right:-160px; top:100px; background:#f2b6c44d; pointer-events:none; }
  .yg.ms .ms-hero-label { display:flex; justify-content:space-between; gap:20px; font-size:9px; letter-spacing:1px; color:#3e4a56; margin-bottom:25px; }
  .yg.ms .ms-hero-phones { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:65px; align-items:start; max-width:850px; margin:auto; position:relative; z-index:1; }
  .yg.ms .ms-hero-phones figure { margin:0; transition:transform .45s; }
  .yg.ms .ms-hero-phones figure:nth-child(1) { transform:rotate(-5deg) translateY(16px); }
  .yg.ms .ms-hero-phones figure:nth-child(3) { transform:rotate(5deg) translateY(16px); }
  .yg.ms .ms-hero-phones figure:hover { transform:rotate(0) translateY(-4px); }
  .yg.ms .ms-hero-phones figcaption { text-align:center; font-size:11px; line-height:1.5; margin-top:24px; color:#2c3944; }
  .yg.ms .ms-hero-phones figcaption span { color:#9e2f50; margin-right:10px; }
  .yg.ms .ms-overview,.yg.ms .ms-product-copy,.yg.ms .ms-outcome { display:grid; grid-template-columns:1fr 1.2fr; gap:75px; padding-block:70px; }
  .yg.ms .ms-section-heading { margin-bottom:32px; }
  .yg.ms .ms-section-heading h2 { margin-bottom:0; max-width:850px; }
  .yg.ms .ms-inspiration-grid { display:grid; grid-template-columns:1.1fr 1fr; gap:60px; align-items:center; }
  .yg.ms .ms-notes-pair { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .yg.ms .ms-note-slot { margin:0; min-height:270px; background:#fbf8f4; border:1px dashed #b8c1ca; border-radius:14px; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:20px; text-align:center; }
  .yg.ms .ms-note-symbol { font:italic 55px Georgia,serif; color:#b8c1ca; margin-bottom:25px; }
  .yg.ms .ms-note-slot figcaption { font-size:12px; color:#3e4a56; }
  .yg.ms .ms-note-slot figcaption span { display:block; font-size:10px; color:#7b8794; margin-top:8px; }
  .yg.ms .ms-pullquote { border-left:2px solid #c44569; padding-left:20px; margin-top:25px; font:italic 23px/1.5 Georgia,serif; color:#9e2f50; }
  .yg.ms .ms-split { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; }
  .yg.ms .ms-stage { display:flex; flex-direction:column; justify-content:center; align-items:center; gap:30px; padding:40px 28px; margin:0; border-radius:4px; background:linear-gradient(140deg,#e4e7eb,#b8c1ca); }
  .yg.ms .ms-stage .ms-phone { width:245px; max-width:85%; transform:rotate(-3deg); transition:transform .45s; }
  .yg.ms .ms-stage:hover .ms-phone { transform:rotate(0deg); }
  .yg.ms .ms-stage figcaption { font-size:9px; line-height:1.6; letter-spacing:.6px; text-align:center; color:#3e4a56; }
  .yg.ms .ms-stage-dark { background:linear-gradient(140deg,#3e4a56,#1f2933); }
  .yg.ms .ms-stage-dark figcaption { color:#f1f3f5; }
  .yg.ms .ms-stage-dark .ms-phone { transform:rotate(3deg); }
  .yg.ms .ms-section-lead { max-width:680px; font-size:15px; line-height:1.8; color:#52606d; margin-bottom:30px; }
  .yg.ms .ms-scan { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; padding:40px; background:#1f2933; color:#f1f3f5; border-radius:6px; }
  .yg.ms .ms-scan-visual { text-align:center; min-width:0; }
  .yg.ms .ms-scan-visual .ms-phone { width:250px; max-width:100%; margin:auto; box-shadow:0 20px 50px #0004; }
  .yg.ms .ms-scan-counter { display:block; font-size:10px; letter-spacing:1.5px; color:#b8c1ca; margin-top:20px; }
  .yg.ms .ms-scan .yg-kicker { color:#f2b6c4; }
  .yg.ms .ms-scan-steps { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:30px; }
  .yg.ms .ms-scan-step { width:40px; height:40px; border:1px solid #7b879466; border-radius:50%; background:transparent; color:#b8c1ca; font:inherit; font-size:11px; transition:background .2s,color .2s; }
  .yg.ms .ms-scan-step[aria-pressed="true"] { background:#f2b6c4; color:#1f2933; border-color:#f2b6c4; }
  .yg.ms .ms-scan-text { min-height:145px; }
  .yg.ms .ms-scan-text h3 { font-size:25px; line-height:1.3; color:#fff; }
  .yg.ms .ms-scan-text p { font-size:14px; line-height:1.8; color:#b8c1ca; }
  .yg.ms .ms-scan-controls { display:flex; gap:24px; margin-top:15px; }
  .yg.ms .ms-scan-controls button { border:0; background:transparent; padding:10px 0; color:#f2b6c4; font:inherit; font-size:12px; }
  .yg.ms .ms-scan-controls button:disabled { opacity:.3; cursor:default; }
  .yg.ms .ms-scan-principle { font-size:13px; color:#b8c1ca; border-top:1px solid #7b879433; margin-top:35px; padding-top:24px; line-height:1.8; }
  .yg.ms .ms-scan-principle em { color:#f2b6c4; font:italic 21px Georgia,serif; }
  .yg.ms .ms-source-labels { display:flex; flex-wrap:wrap; gap:8px; }
  .yg.ms .ms-source-labels span { font-size:11px; background:#e4e7eb; border-radius:8px; padding:8px 11px; color:#3e4a56; }
  .yg.ms .ms-product-copy { padding-top:0; padding-bottom:35px; }
  .yg.ms .ms-gallery-toolbar { display:flex; justify-content:space-between; align-items:center; font-size:9px; letter-spacing:1.3px; color:#52606d; margin-bottom:15px; }
  .yg.ms .ms-gallery-toolbar>div { display:flex; gap:9px; }
  .yg.ms .ms-gallery-toolbar button { border:1px solid #d6d3cf; border-radius:50%; width:34px; height:34px; background:transparent; color:#2c3944; }
  .yg.ms .ms-store-track { display:flex; overflow-x:auto; gap:20px; scroll-snap-type:x mandatory; padding:10px 0 20px; scrollbar-width:thin; }
  .yg.ms .ms-store-track figure { width:230px; flex:0 0 230px; margin:0; scroll-snap-align:start; }
  .yg.ms .ms-store-track img { width:100%; height:auto; max-width:100%; object-fit:contain; display:block; border-radius:10px; transition:transform .3s; }
  .yg.ms .ms-store-track img:hover { transform:translateY(-4px); }
  .yg.ms .ms-store-track figcaption { font-size:11px; color:#52606d; margin-top:14px; }
  .yg.ms .ms-outcome { border-top:1px solid #d6d3cf; }
  .yg.ms .ms-status { display:inline-block; color:#9e2f50; background:#f2b6c433; border-radius:24px; font-size:11px; line-height:1.6; padding:8px 13px; margin-top:8px; }
  .yg.ms .yg-reflection { background:#e4e7eb; }
  .yg.ms .yg-end button { background:#2c3944; color:#f7f4ef; }
  @media(max-width:1000px) { .yg.ms .ms-hero-phones { gap:35px; } .yg.ms .ms-overview,.yg.ms .ms-product-copy,.yg.ms .ms-outcome { gap:45px; } .yg.ms .ms-split,.yg.ms .ms-inspiration-grid,.yg.ms .ms-scan { gap:40px; } }
  @media(max-width:700px) {
    .yg.ms .ms-hero { padding:24px 14px 28px; }
    .yg.ms .ms-hero-label { font-size:8px; gap:10px; }
    .yg.ms .ms-hero-label span:last-child { display:none; }
    .yg.ms .ms-hero-phones { display:flex; gap:18px; overflow-x:auto; scroll-snap-type:x mandatory; padding:10px 8px 20px; }
    .yg.ms .ms-hero-phones figure { flex:0 0 165px; scroll-snap-align:center; }
    .yg.ms .ms-hero-phones .ms-phone { border-radius:20px; padding:3px; }
    .yg.ms .ms-hero-phones .ms-phone img { border-radius:15px; }
    .yg.ms .ms-hero-phones figure:nth-child(1),.yg.ms .ms-hero-phones figure:nth-child(3) { transform:rotate(0); }
    .yg.ms .ms-hero-phones figcaption { font-size:9px; margin-top:14px; }
    .yg.ms .ms-hero-phones figcaption span { display:block; margin:0 0 3px; }
    .yg.ms .ms-overview,.yg.ms .ms-product-copy,.yg.ms .ms-outcome,.yg.ms .ms-split,.yg.ms .ms-inspiration-grid,.yg.ms .ms-scan { grid-template-columns:1fr; gap:28px; }
    .yg.ms .ms-overview,.yg.ms .ms-outcome { padding-block:45px; }
    .yg.ms .ms-section-heading { margin-bottom:25px; }
    .yg.ms .ms-note-slot { min-height:210px; padding:12px; }
    .yg.ms .ms-stage { padding:30px 20px; }
    .yg.ms .ms-stage .ms-phone { width:220px; }
    .yg.ms .ms-scan { padding:28px 20px; }
    .yg.ms .ms-scan-text { min-height:120px; }
    .yg.ms .ms-scan-step { width:38px; height:38px; }
    .yg.ms .ms-store-track figure { width:190px; flex-basis:190px; }
    .yg.ms .yg-reflection .yg-wrap { grid-template-columns:1fr; gap:25px; }
  }

  /* Component-led third hero visual and real Notes evidence. */
  .yg.ms .ms-hero-phones { grid-template-columns:1fr 1fr 1.25fr; gap:45px; align-items:center; max-width:900px; }
  .yg.ms .ms-hero-phones .ms-hero-fragments { transform:none; position:relative; align-self:center; }
  .yg.ms .ms-fragment-stack { display:flex; flex-direction:column; gap:17px; position:relative; padding:20px 0; }
  .yg.ms .ms-fragment-stack::before { content:''; position:absolute; inset:10% -10% 7%; border-radius:50%; background:#f2b6c447; filter:blur(30px); pointer-events:none; }
  .yg.ms .ms-fragment-stack img { position:relative; z-index:1; display:block; width:100%; height:auto; border-radius:18px; box-shadow:0 15px 28px #1f293326; transition:transform .4s ease; }
  .yg.ms .ms-fragment-progress { transform:rotate(-3deg) translateX(-6px); }
  .yg.ms .ms-fragment-meals { transform:rotate(3deg) translateX(8px); }
  .yg.ms .ms-fragment-stack:hover img { transform:rotate(0) translateX(0); }
  .yg.ms .ms-hero-fragments figcaption { margin-top:14px; }
  .yg.ms .ms-notes-evidence { display:block; position:relative; padding:8px 0 0; }
  .yg.ms .ms-notes-evidence figure { margin:0; }
  .yg.ms .ms-notes-main { width:62%; max-width:250px; transform:rotate(-3deg); }
  .yg.ms .ms-notes-main a { display:block; height:390px; overflow:hidden; border-radius:18px; background:#fff; box-shadow:0 14px 35px #2c394414; }
  .yg.ms .ms-notes-main img { display:block; width:100%; height:auto; }
  .yg.ms .ms-notes-detail { position:relative; width:76%; margin:-75px 0 0 auto!important; z-index:2; transform:rotate(2deg); }
  .yg.ms .ms-notes-detail a { display:block; padding:10px; background:#fff; border-radius:15px; box-shadow:0 15px 35px #2c394418; }
  .yg.ms .ms-notes-detail img { display:block; width:100%; height:auto; border-radius:8px; }
  .yg.ms .ms-notes-evidence figcaption { font-size:10px; color:#52606d; margin-top:12px; text-align:center; }
  .yg.ms .ms-notes-problems { display:grid; grid-template-columns:1fr 1fr; column-gap:22px; row-gap:18px; margin-top:24px; }
  .yg.ms .ms-notes-problems h3 { font-size:14px; line-height:1.4; margin-bottom:7px; letter-spacing:-.2px; }
  .yg.ms .ms-notes-problems p { font-size:12px; line-height:1.7; margin:0; color:#52606d; }
  .yg.ms .ms-inspiration-grid { grid-template-columns:1fr 1.2fr; gap:60px; align-items:center; }
  @media(max-width:1000px) { .yg.ms .ms-hero-phones { gap:30px; } .yg.ms .ms-inspiration-grid { gap:38px; } }
  @media(max-width:700px) {
    .yg.ms .ms-hero-phones { display:flex; gap:18px; align-items:center; }
    .yg.ms .ms-hero-phones .ms-hero-fragments { flex-basis:210px; }
    .yg.ms .ms-fragment-stack { padding:15px 4px; gap:12px; }
    .yg.ms .ms-fragment-stack img { border-radius:14px; }
    .yg.ms .ms-inspiration-grid { grid-template-columns:1fr; gap:35px; }
    .yg.ms .ms-notes-evidence { max-width:420px; width:100%; margin:auto; }
    .yg.ms .ms-notes-main a { height:340px; }
    .yg.ms .ms-notes-detail { margin-top:-55px!important; }
    .yg.ms .ms-notes-problems { column-gap:18px; row-gap:20px; }
  }
  @media(max-width:380px) { .yg.ms .ms-notes-problems { grid-template-columns:1fr; } }

  /* Final Milestone alignment and presentation. */
  .yg.ms .ms-hero { padding-top:45px; }
  .yg.ms .ms-hero::after,.yg.ms .ms-fragment-stack::before { content:none; }
  .yg.ms .ms-hero-phones { align-items:stretch; }
  .yg.ms .ms-hero-phones figure { display:flex; flex-direction:column; justify-content:flex-end; transform:none; }
  .yg.ms .ms-hero-phones figure:nth-child(1),.yg.ms .ms-hero-phones figure:nth-child(3),.yg.ms .ms-hero-phones figure:hover { transform:none; }
  .yg.ms .ms-hero-phones figure:first-child .ms-phone { transform:rotate(-4deg); transition:transform .4s; }
  .yg.ms .ms-hero-phones figure:first-child:hover .ms-phone { transform:rotate(0); }
  .yg.ms .ms-hero-phones .ms-hero-fragments { align-self:stretch; }
  .yg.ms .ms-hero-phones figcaption { margin-top:24px; }
  .yg.ms .ms-fragment-stack { flex:1; justify-content:center; gap:18px; padding:24px 0; }
  .yg.ms .ms-fragment-stack img { transform:none; }
  .yg.ms .ms-fragment-progress { transition:transform .4s ease; }
  .yg.ms .ms-fragment-progress:hover { transform:scale(1.035); }
  .yg.ms .ms-fragment-meal-frame { padding:16px; border-radius:18px; background:#111; box-shadow:0 15px 28px #1f293326; transition:transform .4s ease; }
  .yg.ms .ms-fragment-meal-frame:hover { transform:scale(1.035); }
  .yg.ms .ms-fragment-meal-frame img { border-radius:7px; box-shadow:none; }
  .yg.ms .ms-fragment-stack:hover img { transform:none; }
  .yg.ms .ms-fragment-stack .ms-fragment-progress:hover { transform:scale(1.035); }
  .yg.ms .ms-notes-evidence { display:flex; flex-direction:column; align-items:center; gap:28px; padding:0; }
  .yg.ms .ms-notes-main { width:245px; max-width:85%; transform:none; }
  .yg.ms .ms-notes-main a { height:auto; overflow:visible; background:transparent; border-radius:0; box-shadow:none; }
  .yg.ms .ms-notes-main .ms-phone { width:100%; }
  .yg.ms .ms-notes-main img { border-radius:27px; }
  .yg.ms .ms-notes-detail { width:90%; max-width:340px; margin:0!important; transform:none; }
  .yg.ms .ms-notes-evidence figcaption { margin-top:16px; line-height:1.6; }
  .yg.ms #ms-progress .yg-decisions { gap:24px; }
  .yg.ms .ms-scan,.yg.ms .ms-stage-dark { background:linear-gradient(140deg,#e4e7eb,#b8c1ca); color:#2c3944; }
  .yg.ms .ms-stage-dark figcaption,.yg.ms .ms-scan .yg-kicker,.yg.ms .ms-scan-counter { color:#3e4a56; }
  .yg.ms .ms-scan-step { color:#3e4a56; border-color:#52606d80; }
  .yg.ms .ms-scan-step[aria-pressed="true"] { background:#2c3944; color:#fff; border-color:#2c3944; }
  .yg.ms .ms-scan-step:hover:not([aria-pressed="true"]) { background:#ffffff50; }
  .yg.ms .ms-scan-text h3,.yg.ms .ms-scan-controls button,.yg.ms .ms-scan-principle em { color:#2c3944; }
  .yg.ms .ms-scan-text p,.yg.ms .ms-scan-principle { color:#3e4a56; }
  .yg.ms .ms-scan-controls button:disabled { opacity:.45; }
  .yg.ms .ms-source-labels span { padding:5px 10px; border-radius:7px; font-size:11px; font-weight:600; line-height:1.4; }
  .yg.ms .ms-source-labels span:nth-child(1) { background:#2c2c2c; color:#b2b2b2; }
  .yg.ms .ms-source-labels span:nth-child(2) { background:#464323; color:#e9e39a; }
  .yg.ms .ms-source-labels span:nth-child(3),.yg.ms .ms-source-labels span:nth-child(4) { background:#153522; color:#4cdb70; }
  .yg.ms .ms-gallery-toolbar { max-width:1000px; margin-inline:auto; }
  .yg.ms .ms-store-track { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:20px; max-width:1000px; margin-inline:auto; overflow:visible; }
  .yg.ms .ms-store-track figure { width:auto; min-width:0; }
  .yg.ms .ms-store-track figcaption { text-align:center; }
  @media(max-width:700px) {
    .yg.ms .ms-hero { padding-top:28px; }
    .yg.ms .ms-hero-phones { align-items:stretch; }
    .yg.ms .ms-hero-phones figure:first-child .ms-phone { transform:none; }
    .yg.ms .ms-hero-phones figcaption { margin-top:18px; min-height:31px; }
    .yg.ms .ms-fragment-meal-frame { padding:12px; border-radius:14px; }
    .yg.ms .ms-notes-main { width:245px; }
    .yg.ms .ms-notes-main a { height:auto; }
    .yg.ms .ms-notes-main img { border-radius:18px; }
    .yg.ms .ms-notes-detail { margin-top:0!important; }
    .yg.ms .ms-store-track { grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px 16px; }
    .yg.ms .ms-store-track figure { width:auto; }
  }
  @media(prefers-reduced-motion:reduce) {
    .yg.ms .ms-fragment-stack img,.yg.ms .ms-fragment-meal-frame,.yg.ms .ms-hero-phones figure:first-child .ms-phone { transition:none; }
    .yg.ms .ms-fragment-stack .ms-fragment-progress:hover,.yg.ms .ms-fragment-meal-frame:hover { transform:none; }
  }

  /* Compact overlapping Notes evidence and feedback legend. */
  .yg.ms .ms-notes-evidence { display:block; padding:0 8px 0 0; }
  .yg.ms .ms-notes-main { display:flex; flex-direction:column; margin:0; width:245px; max-width:75%; }
  .yg.ms .ms-notes-main figcaption { order:-1; margin:0 0 14px; }
  .yg.ms .ms-notes-detail { position:relative; z-index:3; width:78%; max-width:340px; margin:-125px 0 0 auto!important; }
  .yg.ms .ms-notes-detail a { padding:12px; }
  .yg.ms #ms-feedback .ms-split { align-items:start; gap:48px; }
  .yg.ms #ms-feedback .yg-decisions { padding-top:30px; gap:22px; }
  .yg.ms #ms-feedback .ms-stage { padding:30px 24px 24px; gap:22px; }
  .yg.ms #ms-feedback .ms-source-labels { justify-content:center; gap:8px; margin:0; }
  .yg.ms #ms-feedback .ms-stage figcaption { margin:0; }
  @media(max-width:1000px) {
    .yg.ms #ms-feedback .ms-split { gap:32px; }
    .yg.ms .ms-notes-detail { margin-top:-100px!important; }
  }
  @media(max-width:700px) {
    .yg.ms .ms-notes-evidence { max-width:390px; padding-right:0; }
    .yg.ms .ms-notes-main { max-width:72%; }
    .yg.ms .ms-notes-detail { width:76%; margin-top:-115px!important; }
    .yg.ms #ms-feedback .ms-split { gap:24px; }
    .yg.ms #ms-feedback .yg-decisions { padding-top:0; }
    .yg.ms #ms-feedback .ms-stage { padding:28px 20px 22px; gap:20px; }
  }

  /* Notes overlap at the phone midpoint; feedback begins with its heading. */
  .yg.ms .ms-notes-detail { margin-top:-300px!important; }
  .yg.ms #ms-feedback .ms-split { align-items:start; }
  .yg.ms #ms-feedback .ms-section-heading { margin-bottom:32px; }
  .yg.ms #ms-feedback .yg-decisions { padding-top:0; }
  .yg.ms #ms-feedback .ms-stage { margin-top:0; }
  .yg.ms .ms-fragment-progress-frame { padding:14px; background:#111; border-radius:18px; box-shadow:0 15px 28px #1f293326; transition:transform .4s ease; }
  .yg.ms .ms-fragment-progress-frame img { border-radius:10px; box-shadow:none; }
  .yg.ms .ms-fragment-progress-frame:hover { transform:scale(1.035); }
  .yg.ms .ms-fragment-stack .ms-fragment-progress:hover { transform:none; }
  .yg.ms .ms-fragment-meal-frame { padding-bottom:25px; }
  @media(max-width:700px) {
    .yg.ms .ms-notes-detail { margin-top:-290px!important; }
    .yg.ms #ms-feedback .ms-section-heading { margin-bottom:25px; }
    .yg.ms .ms-fragment-progress-frame { padding:12px; border-radius:14px; }
    .yg.ms .ms-fragment-meal-frame { padding-bottom:20px; }
  }
  @media(prefers-reduced-motion:reduce) {
    .yg.ms .ms-fragment-progress-frame { transition:none; }
    .yg.ms .ms-fragment-progress-frame:hover { transform:none; }
  }

  /* Restrained layered Notes composition, with readable captions. */
  .yg.ms .ms-notes-evidence { position:relative; display:block; width:100%; max-width:460px; margin-inline:auto; padding:34px 12px 22px; box-sizing:border-box; }
  .yg.ms .ms-notes-main { position:relative; display:flex; flex-direction:column; width:54%; max-width:245px; margin:0; transform:none; }
  .yg.ms .ms-notes-main a { transform:rotate(-3deg); transform-origin:center; }
  .yg.ms .ms-notes-main .ms-phone { padding:3px; border:1px solid #75818b; border-radius:30px; box-shadow:0 14px 28px #2c39441c; }
  .yg.ms .ms-notes-main img { border-radius:25px; }
  .yg.ms .ms-notes-main figcaption { order:-1; margin:0 0 18px; font-size:10px; line-height:1.6; }
  .yg.ms .ms-notes-detail { position:absolute; top:50%; right:0; z-index:3; width:62%; max-width:300px; margin:0!important; transform:translateY(-50%); display:flex; flex-direction:column; }
  .yg.ms .ms-notes-detail a { padding:6px; border-radius:15px; transform:rotate(2deg); transform-origin:center; box-shadow:0 16px 30px #2c394418; }
  .yg.ms .ms-notes-detail img { border-radius:10px; }
  .yg.ms .ms-notes-detail figcaption { order:-1; position:relative; margin:0 0 14px; font-size:10px; line-height:1.6; text-align:center; color:#52606d; }
  @media(max-width:700px) {
    .yg.ms .ms-notes-evidence { max-width:390px; padding:32px 10px 20px; }
    .yg.ms .ms-notes-main { width:54%; max-width:245px; }
    .yg.ms .ms-notes-main .ms-phone { border-radius:24px; }
    .yg.ms .ms-notes-main img { border-radius:20px; }
    .yg.ms .ms-notes-detail { width:62%; margin:0!important; }
  }
`;
document.head.appendChild(milestoneStyles);

function renderTide() {
  return `<article class="yg td" aria-labelledby="td-title">
    <section class="yg-intro yg-wrap"><div class="yg-topline"><p class="yg-kicker">TIDE / THE ZEN CYCLE</p><span class="yg-project-type">Student campaign · AAF NSAC · Experiential design</span></div><h1 id="td-title">Stay cool.<br><em>Choose cold.</em></h1><p class="yg-lead">An immersive campaign concept encouraging students to wash their laundry in cold water, turning an everyday chore into an opportunity to cool down.</p><div class="yg-facts"><p><span>MY CONTRIBUTION</span>Signage · Wayfinding<br>Experiential touchpoints</p><p><span>THE PROJECT</span>The Zen Cycle<br>20-person student campaign team</p><p><span>RECOGNITION</span>2025 AAF Lansing Gold ADDY<br>2024 AAF NSAC District 6 First Place</p><p><span>THE IDEA</span>Make washing in cold water feel like the obvious choice</p></div></section>
    <figure class="td-hero yg-wrap yg-reveal"><a href="assets/tide-activation.png" target="_blank" rel="noopener" aria-label="View The Zen Cycle activation mockup at full size"><img src="assets/tide-activation.png" alt="The Zen Cycle concept: an oversized orange Tide washing machine with a walk-through entrance and the cold temperature setting highlighted" width="2048" height="1308" decoding="async" fetchpriority="high"></a><figcaption><span>THE ZEN CYCLE / ACTIVATION CONCEPT</span><span>A larger-than-life invitation to cool down</span></figcaption></figure>
    <nav class="yg-nav" aria-label="Tide case study sections"><div class="yg-wrap"><a href="#td-overview">The idea</a><a href="#td-wayfinding">Wayfinding</a><a href="#td-touchpoints">Touchpoints</a><a href="#td-reflection">Reflection</a></div></nav>
    <section class="case-editorial yg-reveal yg-wrap" id="td-overview"><div><p class="yg-kicker">THE OPPORTUNITY</p><h2>Make cold water.<br><em>Feel worth choosing.</em></h2></div><div class="yg-body"><p>For the AAF National Student Advertising Competition, our team was challenged to encourage students to wash their laundry in cold water.</p><p>Through brainstorming and focus groups, we explored the stress surrounding laundry and how we could make the idea of washing cold more appealing.</p><p>That led to The Zen Cycle, an oversized washing machine experience designed to help students cool down and connect that feeling back to choosing cold water.</p><p>As part of the experience team, I designed the signage, hydration station, wristbands, and portable fan that helped bring the larger concept together.</p></div></section>
    <section class="td-concept yg-reveal"><div class="yg-wrap"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE DESIGN DIRECTION</p><h2>A familiar brand.<br><em>A different feeling.</em></h2></div><div class="yg-body"><p>I actually enjoyed working within Tide's established brand guidelines. The challenge was finding a way to make the experience feel relaxing while still looking unmistakably Tide.</p><p>I paired the familiar orange with icy blues and frosted details to connect the feeling of cooling down with washing in cold water.</p></div></section><div class="td-route" aria-label="The proposed experience"><span><small>01 / ARRIVE</small>Find the chill zone</span><span><small>02 / EXPERIENCE</small>Cool down</span><span><small>03 / REMEMBER</small>Take the message with you</span></div></div></section>
    <section class="yg-chapter yg-wrap" id="td-wayfinding">
      <div class="td-section-head yg-reveal"><p class="yg-kicker">01 / WAYFINDING</p><h2>Point the way.<br><em>Set the tone.</em></h2></div>
      <div class="td-signage-layout yg-reveal"><figure class="td-figure td-signage"><a href="assets/tide-wayfinding.jpg" target="_blank" rel="noopener" aria-label="View the directional signage mockup"><img src="assets/tide-wayfinding.jpg" alt="Orange and icy-blue A-frame signs with frosted arrows, Chill Zone Ahead, Cool, and The Zen Cycle messaging" width="2048" height="1536" loading="lazy" decoding="async"></a><figcaption>WAYFINDING THAT INTRODUCES THE CAMPAIGN BEFORE ENTRY</figcaption></figure><div class="yg-body"><h3>Useful first. On-brand throughout.</h3><p>I designed A-frame signs to help people find the activation while introducing the campaign's visual direction.</p><p>Large arrows, short headlines, and icy details made the signs easy to recognize. I wanted them to feel like part of the experience rather than something purely informational.</p><p>Tide's orange kept the branding familiar, while the blue brought in the cooler, calmer feeling of The Zen Cycle.</p><div class="td-color-notes"><p><span class="td-color-orange" aria-hidden="true"></span><strong>Tide orange</strong><small>Brand recognition</small></p><p><span class="td-color-blue" aria-hidden="true"></span><strong>Icy blue</strong><small>The cold-water idea</small></p></div></div></div>
    </section>
    <section class="yg-chapter yg-wrap" id="td-touchpoints">
      <section class="case-editorial yg-reveal "><div><p class="yg-kicker">02 / A CONNECTED EXPERIENCE</p><h2>One idea.<br><em>Every touchpoint.</em></h2></div><div class="yg-body"><p>Working on a 20-person campaign meant my designs were just one piece of a much bigger idea.</p><p>I created a hydration station, wristbands, and a portable fan to carry the cold-water message into different parts of the experience.</p><p>Each piece had its own purpose, but they all needed to feel connected to the campaign.</p></div></section>
      <div class="td-touchpoint-grid">
        <figure class="td-figure td-water yg-reveal"><a href="assets/tide-hydration.png" target="_blank" rel="noopener" aria-label="View the hydration station mockup"><img src="assets/tide-hydration.png" alt="Tide hydration station with an orange header, blue counter, and Cold Water lettering" width="2048" height="1638" loading="lazy" decoding="async"></a><figcaption><span>HYDRATION STATION</span>A place to cool down during the experience</figcaption></figure>
        <div class="td-takehomes">
          <figure class="td-figure td-bands yg-reveal"><a href="assets/tide-wristbands.png" target="_blank" rel="noopener" aria-label="View the branded wristbands"><img src="assets/tide-wristbands.png" alt="Orange and blue wristbands featuring Stay cool Choose cold messaging, mountain graphics, clouds, and a snowflake" width="2048" height="1536" loading="lazy" decoding="async"></a><figcaption><span>WRISTBANDS</span>A wearable reminder to stay cool and choose cold</figcaption></figure>
          <figure class="td-figure td-fan yg-reveal"><a href="assets/tide-fan.png" target="_blank" rel="noopener" aria-label="View the Tide portable fan"><img src="assets/tide-fan.png" alt="Orange portable phone fan with a cold-themed Tide logo and phone connectors" width="1000" height="1000" loading="lazy" decoding="async"></a><figcaption><span>PORTABLE FAN</span>A useful take-home piece that brings the message to life</figcaption></figure>
        </div>
      </div>
    </section>
    <section class="case-editorial yg-reveal yg-wrap td-outcome" id="td-result"><div><p class="yg-kicker">THE RESULT</p><h2>A campaign built<br><em>from a lot of moving pieces.</em></h2></div><div class="yg-body"><p>The final concept brought together the work of our 20-person team, from campaign strategy and the activation itself to the smaller details that made the experience feel complete.</p><p>Our Tide campaign earned First Place in District 6 at the 2024 AAF National Student Advertising Competition and a Gold ADDY at the 2025 American Advertising Awards in Lansing.</p><p>I'm especially proud of the individual pieces I created and how they contributed to something much larger than my own work.</p></div></section>
    <section class="yg-reflection" id="td-reflection"><div class="yg-wrap"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE TAKEAWAY</p><h2>A good idea is one thing.<br><em>Bringing it to life is another.</em></h2></div><div class="yg-body"><p>This project taught me how much collaboration goes into building one connected experience. My designs had to work individually, but they also had to make sense alongside everything the rest of the team was creating.</p><p>Looking back, I'd push the experience itself even further. I love the idea of walking through a misting washing machine after a marathon or in a busy outdoor space on a hot day.</p><p>I'd also spend more time showing exactly what that experience would look and feel like, so people could better imagine themselves in it.</p></div></section></div></section>
    <div class="yg-wrap yg-end"><p>More visual design with a clear purpose</p><button data-next="reports">Explore Yogger Visual Design ↗</button></div>
  </article>`;
}

const tideStyles = document.createElement('style');
tideStyles.textContent = `
  .yg.td { --yg-green:#26418c; --yg-ink:#21304d; }
  .yg.td h1 em,.yg.td h2 em { color:#be4a18; }
  .yg.td .yg-intro { padding-bottom:34px; }
  .yg.td .td-intro-bottom { display:flex; justify-content:space-between; align-items:center; gap:38px; }
  .yg.td .td-intro-bottom .yg-lead { max-width:700px; }
  .yg.td .td-award { flex-shrink:0; padding-left:18px; border-left:1px solid #d6d3cf; color:#26418c; font-size:10px; line-height:1.8; }
  .yg.td .td-award>span { float:left; font-size:26px; margin-right:13px; color:#be4a18; }
  .yg.td .td-award strong { font-size:13px; font-weight:600; }
  .yg.td .td-hero { margin-block:0 34px; }
  .yg.td .td-hero a { display:block; border-radius:12px; overflow:hidden; }
  .yg.td .td-hero img { display:block; width:100%; height:auto; }
  .yg.td .td-hero figcaption { display:flex; justify-content:space-between; gap:20px; padding-top:16px; font-size:10px; line-height:1.6; color:#52606d; }
  .yg.td .td-hero figcaption>span:first-child { font-size:9px; letter-spacing:1px; }
  .yg.td .td-editorial { display:grid; grid-template-columns:1fr 1.2fr; gap:70px; padding-block:70px; align-items:start; }
  .yg.td .td-editorial h2 { margin:0; }
  .yg.td .td-concept { background:#213775; color:#fff; padding:65px 0 38px; }
  .yg.td .td-concept .yg-kicker { color:#bfdfee; }
  .yg.td .td-concept h2 { color:#fff; font-size:clamp(40px,5vw,67px); }
  .yg.td .td-concept h2 em { color:#bfdfee; }
  .yg.td .td-concept .yg-wrap>p:last-of-type { max-width:600px; font-size:15px; line-height:1.8; color:#d6e4f1; margin:26px 0 38px; }
  .yg.td .td-route { display:grid; grid-template-columns:1fr 1fr 1.2fr; gap:25px; border-top:1px solid #ffffff30; padding-top:24px; }
  .yg.td .td-route span { font-size:14px; line-height:1.5; }
  .yg.td .td-route small { display:block; font-size:9px; letter-spacing:1px; color:#bfdfee; margin-bottom:8px; }
  .yg.td #td-wayfinding { border-top:0; }
  .yg.td .td-section-head { margin-bottom:32px; }
  .yg.td .td-section-head h2 { margin:0; }
  .yg.td .td-signage-layout { display:grid; grid-template-columns:1.2fr 1fr; gap:60px; align-items:center; }
  .yg.td .td-figure { margin:0; min-width:0; }
  .yg.td .td-figure a { display:block; overflow:hidden; border-radius:12px; background:white; }
  .yg.td .td-figure img { display:block; width:100%; height:auto; transition:transform .45s ease; }
  .yg.td .td-figure a:hover img { transform:scale(1.025); }
  .yg.td .td-figure figcaption { margin-top:15px; font-size:11px; color:#52606d; text-align:center; line-height:1.7; }
  .yg.td .td-signage figcaption { font-size:9px; letter-spacing:.6px; }
  .yg.td .td-signage-layout .yg-body h3 { font-size:26px; letter-spacing:-.7px; line-height:1.3; margin-bottom:20px; }
  .yg.td .td-color-notes { display:flex; gap:34px; margin-top:28px; }
  .yg.td .td-color-notes p { display:grid; grid-template-columns:25px 1fr; column-gap:10px; margin:0; }
  .yg.td .td-color-notes p>span { grid-row:1/3; width:25px; height:38px; border-radius:3px; }
  .yg.td .td-color-orange { background:#f56621; }
  .yg.td .td-color-blue { background:#b5def1; }
  .yg.td .td-color-notes strong { font-size:11px; line-height:1.4; font-weight:500; color:#21304d; }
  .yg.td .td-color-notes small { font-size:10px; line-height:1.4; color:#52606d; }
  .yg.td .td-section-intro { max-width:650px; font-size:15px; line-height:1.8; color:#52606d; margin-top:24px; }
  .yg.td .td-touchpoint-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:35px; align-items:start; }
  .yg.td .td-water a { aspect-ratio:4/5; background:#e1e1e1; }
  .yg.td .td-water img { width:100%; height:100%; object-fit:cover; }
  .yg.td .td-takehomes { display:grid; gap:30px; }
  .yg.td .td-bands a { aspect-ratio:2.05; background:#faf7f0; }
  .yg.td .td-bands img { width:100%; height:100%; object-fit:cover; }
  .yg.td .td-fan a { aspect-ratio:2.05; background:#fff; }
  .yg.td .td-fan img { width:100%; height:100%; object-fit:contain; }
  .yg.td .td-touchpoint-grid figcaption span { display:block; color:#26418c; font-size:9px; letter-spacing:1px; margin-bottom:4px; }
  .yg.td .td-outcome { border-top:1px solid #d6d3cf; }
  .yg.td .yg-reflection { background:#e2edf2; }
  .yg.td .yg-end button { background:#213775; }
  @media(max-width:1000px) { .yg.td .td-editorial,.yg.td .td-signage-layout { gap:38px; } .yg.td .td-touchpoint-grid { gap:25px; } }
  @media(max-width:700px) {
    .yg.td .td-intro-bottom { flex-direction:column; gap:20px; align-items:flex-start; }
    .yg.td .td-award { padding-left:0; border-left:0; }
    .yg.td .td-hero figcaption { flex-direction:column; gap:4px; text-align:center; }
    .yg.td .td-editorial,.yg.td .td-signage-layout { grid-template-columns:1fr; gap:26px; }
    .yg.td .td-editorial { padding-block:42px; }
    .yg.td .td-concept { padding:42px 0 32px; }
    .yg.td .td-route { grid-template-columns:1fr; gap:19px; }
    .yg.td .td-route span { font-size:15px; }
    .yg.td .td-color-notes { gap:22px; }
    .yg.td .td-touchpoint-grid { grid-template-columns:1fr; gap:30px; }
    .yg.td .td-water a { aspect-ratio:1.05; }
    .yg.td .td-bands a { aspect-ratio:1.6; }
    .yg.td .td-fan a { aspect-ratio:1.6; }
    .yg.td .yg-reflection h2 { font-size:36px; }
  }
  @media(prefers-reduced-motion:reduce) { .yg.td .td-figure img { transition:none; } .yg.td .td-figure a:hover img { transform:none; } }
`;
document.head.appendChild(tideStyles);

function portfolioImage(file, alt, caption, classes='') {
  return `<figure class="vp-figure ${classes}"><a href="assets/${file}" target="_blank" rel="noopener" aria-label="View ${alt}"><img src="assets/${file}" alt="${alt}" loading="lazy" decoding="async"></a>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

const marketplaceScenes = [
  {file:'marketplace-garage.jpg',alt:'Marketplace campaign in a garage, with white silhouettes of a bicycle, garden tools, and a ladder',label:'The garage'},
  {file:'marketplace-living-room.jpg',alt:'Marketplace campaign in a living room, with white silhouettes of a television, plant, console, and floor lamp',label:'The living room'}
];
const chanelLayouts = [
  {file:'chanel-spread-01-02.jpg',alt:'Chanel editorial spread featuring Coco Mademoiselle imagery, a graphic frame, and a structured text column',label:'Pages 01–02'},
  {file:'chanel-spread-03-04.jpg',alt:'Chanel editorial spread featuring No. 5 and Chance fragrances with product imagery and multiple text columns',label:'Pages 03–04'}
];

function renderMarketplace() {
  return `<article class="yg fm vp" aria-labelledby="fm-title">
    <section class="yg-intro yg-wrap"><div class="yg-topline"><p class="yg-kicker">FACEBOOK MARKETPLACE</p><span class="yg-project-type">Student campaign · Art direction · Visual design</span></div><h1 id="fm-title">Notice something<br><em>missing?</em></h1><p class="yg-lead">A student advertising campaign inspired by the familiar question: Have you checked Facebook Marketplace?</p><div class="yg-facts"><p><span>MY ROLE</span>Campaign visual design<br>Art direction · Brand applications</p><p><span>COLLABORATION</span>Created with Abby Deibis</p><p><span>RECOGNITION</span>Best in Category, Student Social<br>The D Show 2024</p><p><span>THE CONCEPT</span>Marketplace has everything, even a bag to carry it home</p></div></section>
    <figure class="fm-scene yg-wrap yg-reveal"><div class="vp-switch" role="group" aria-label="View campaign settings"><button type="button" data-market-scene="0" aria-pressed="true">The garage</button><button type="button" data-market-scene="1" aria-pressed="false">The living room</button></div><a class="fm-scene-link" href="assets/${marketplaceScenes[0].file}" target="_blank" rel="noopener" aria-label="View the campaign graphic at full size"><img class="fm-scene-image" src="assets/${marketplaceScenes[0].file}" alt="${marketplaceScenes[0].alt}" width="1565" height="1019" decoding="async" fetchpriority="high"></a><figcaption class="fm-scene-label" aria-live="polite">THE GARAGE / CAMPAIGN KEY VISUAL</figcaption></figure>
    <nav class="yg-nav" aria-label="Marketplace case study sections"><div class="yg-wrap"><a href="#fm-idea">The idea</a><a href="#fm-display">In context</a><a href="#fm-merch">Beyond the ad</a><a href="#fm-reflection">Reflection</a></div></nav>
    <section class="case-editorial yg-reveal yg-wrap" id="fm-idea"><div><p class="yg-kicker">THE IDEA</p><h2>Let the missing pieces<br><em>tell the story.</em></h2></div><div class="yg-body"><p>This campaign came from something I knew pretty well: being a college student and not wanting to spend money on brand-new furniture every time I needed something.</p><p>My roommates and I were always finding couches, furniture, and random things for our place on Facebook Marketplace. Whenever someone needed something, the first question was usually, "Did you check Facebook Marketplace?"</p><p>Working with Abby Deibis, we turned that familiar experience into a campaign built around the idea that Marketplace has just about everything.</p><p>The white silhouettes became our way of asking viewers to fill in the blank and imagine what they could find.</p></div></section>
    <section class="yg-chapter yg-wrap" id="fm-display"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE VISUAL SYSTEM</p><h2>One idea.<br><em>Room to adapt.</em></h2></div><div class="yg-body"><p>I created the garage and living room visuals using white silhouettes to show the objects that could be found on Marketplace.</p><p>The biggest challenge was making the concept immediately understandable. The silhouettes needed to be recognizable enough that people could identify what was missing without much explanation.</p><p>Keeping the same visual treatment and simple headline across different spaces helped the campaign feel connected while showing the variety of things people could find.</p></div></section><figure class="fm-display yg-reveal"><div class="fm-monitor"><img src="assets/marketplace-living-room.jpg" alt="Living-room campaign shown within a digital display mockup" width="1322" height="768" loading="lazy" decoding="async"></div><div class="fm-monitor-stand" aria-hidden="true"></div><figcaption>DIGITAL DISPLAY / THE SAME IDEA AT A DIFFERENT SCALE</figcaption></figure></section>
    <section class="yg-chapter yg-wrap" id="fm-merch"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">BEYOND THE AD</p><h2>Something to find.<br><em>Something to keep.</em></h2></div><div class="yg-body"><p>I extended the campaign into digital displays and branded merchandise, including a tote bag and notepad.</p><p>The tote played directly into our campaign line about finding everything on Marketplace, even a bag to carry it home.</p><p>The notepad gave the idea another use: a place to write down everything you might be looking for next.</p><p>I wanted the supporting pieces to feel like natural extensions of the campaign rather than just putting a logo on more objects.</p></div></section><div class="fm-merch-grid yg-reveal">${portfolioImage('marketplace-tote.jpg','Marketplace canvas tote with blue campaign lettering','A BAG TO CARRY THE IDEA HOME','fm-tote')}${portfolioImage('marketplace-notepad.jpg','Marketplace notepad and pencil on a blue background','A PLACE FOR THE NEXT FIND','fm-notepad')}</div></section>
    <section class="yg-reflection" id="fm-reflection"><div class="yg-wrap"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE TAKEAWAY</p><h2>A simple idea<br><em>can go a long way.</em></h2></div><div class="yg-body"><p>This project showed me how much you can communicate with one recognizable visual idea. Once we had the silhouettes and the headline, we could carry the concept into different settings without changing what made it work.</p><p>Our campaign won Best in Category for Student Social at The D Show in 2024, which was an exciting result for something inspired by our everyday college experience.</p><p>If I revisited it today, I'd push the storytelling further. I can imagine a newly empty apartment waiting to be furnished or a pet looking for its missing toy. I'd want the visuals to make people feel something, not just recognize what's missing.</p></div></section></div></section><div class="yg-wrap yg-end"><p>Explore another campaign experience</p><button data-next="tide">View The Zen Cycle ↗</button></div>
  </article>`;
}

function renderChanel() {
  return `<article class="yg cn vp" aria-labelledby="cn-title">
    <section class="yg-intro yg-wrap"><div class="yg-topline"><p class="yg-kicker">CHANEL / EDITORIAL DESIGN</p><span class="yg-project-type">Student project · Editorial design · Visual identity</span></div><h1 id="cn-title">Room for<br><em>the details.</em></h1><p class="yg-lead">A coffee-table publication exploring Chanel fragrances through bold imagery, typography, and a collection of supporting brand pieces.</p><div class="yg-facts"><p><span>MY ROLE</span>Editorial design<br>Typography · Composition</p><p><span>THE PROJECT</span>Student publication<br>Adobe InDesign</p><p><span>MY CONTRIBUTION</span>Page layouts · Image selection<br>Supporting mockups</p><p><span>THE FOCUS</span>Luxury branding<br>Visual hierarchy · White space</p></div></section>
    <figure class="cn-hero yg-wrap yg-reveal"><a href="assets/chanel-cover.jpg" target="_blank" rel="noopener" aria-label="View the Chanel publication cover"><img src="assets/chanel-cover.jpg" alt="Chanel fragrance publication cover featuring No. 5 perfume on a softly textured white surface" width="1408" height="957" decoding="async" fetchpriority="high"></a><figcaption>THE PUBLICATION / COVER DESIGN</figcaption></figure>
    <nav class="yg-nav" aria-label="Chanel case study sections"><div class="yg-wrap"><a href="#cn-overview">Overview</a><a href="#cn-spreads">The publication</a><a href="#cn-applications">Beyond the page</a><a href="#cn-reflection">Reflection</a></div></nav>
    <section class="case-editorial yg-reveal yg-wrap" id="cn-overview"><div><p class="yg-kicker">THE DIRECTION</p><h2>Let imagery lead.<br><em>Give the story structure.</em></h2></div><div class="yg-body"><p>This project started as a school assignment to learn Adobe InDesign and explore magazine layouts.</p><p>I chose Chanel's fragrances because I wanted to create something that felt bold, sleek, and editorial.</p><p>Using provided copy, I selected the imagery and designed the page layouts, focusing on how typography, photography, and white space could work together to create a luxury feel.</p></div></section>
    <section class="yg-chapter yg-wrap" id="cn-spreads"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE PUBLICATION</p><h2>A little space.<br><em>A stronger impression.</em></h2></div><div class="yg-body"><p>One of my biggest goals was making the publication feel different without overdesigning it.</p><p>I experimented with large product imagery, typography, and page composition to give each spread its own personality while keeping everything connected.</p><p>My favorite part is the opening spread. I love how the white space lets the imagery stand out without needing to fill every corner of the page.</p></div></section><div class="cn-spread-header yg-reveal"><div class="vp-switch" role="group" aria-label="Explore editorial spreads"><button type="button" data-chanel-spread="0" aria-pressed="true">Pages 01–02</button><button type="button" data-chanel-spread="1" aria-pressed="false">Pages 03–04</button></div></div><figure class="cn-spread yg-reveal"><a class="cn-spread-link" href="assets/${chanelLayouts[0].file}" target="_blank" rel="noopener" aria-label="View the editorial spread at full size"><img class="cn-spread-image" src="assets/${chanelLayouts[0].file}" alt="${chanelLayouts[0].alt}" loading="lazy" decoding="async"></a><figcaption class="cn-spread-label" aria-live="polite">PAGES 01–02 / COCO MADEMOISELLE</figcaption></figure><div class="cn-detail-notes yg-reveal"><p><span>IMAGE</span>Let the fragrance photography make the first impression</p><p><span>TYPE</span>Use typography to give the layouts structure</p><p><span>SPACE</span>Give the important details room to stand out</p></div></section>
    <section class="yg-chapter yg-wrap" id="cn-applications"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">BEYOND THE PAGE</p><h2>More than<br><em>just a publication.</em></h2></div><div class="yg-body"><p>I wanted to imagine how the publication could exist as part of a larger coffee-table collection.</p><p>I designed an envelope to hold the magazine, along with Chanel-inspired candles and coasters that carried the visual direction into physical objects.</p><p>These weren't required parts of the publication itself, but I liked the idea of creating a collection that felt connected beyond the pages.</p></div></section>${portfolioImage('chanel-envelope.jpg','White Chanel envelope with a fragrance publication partially revealed','PRINT APPLICATION / A CONSIDERED PRESENTATION','cn-envelope yg-reveal')}<div class="cn-objects yg-reveal">${portfolioImage('chanel-candles.jpg','Green and pink Chanel Chance candle mockups with gold lids','CANDLE CONCEPTS / SOFT COLOR, GOLD DETAIL')}${portfolioImage('chanel-coasters.jpg','Stacked pastel Chanel Chance coaster mockups','COASTER CONCEPTS / THE SAME PALETTE IN EVERYDAY USE')}</div></section>
    <section class="yg-reflection" id="cn-reflection"><div class="yg-wrap"><section class="case-editorial yg-reveal "><div><p class="yg-kicker">THE TAKEAWAY</p><h2>Sometimes less<br><em>really does look better.</em></h2></div><div class="yg-body"><p>This project helped me understand how much of editorial design comes down to the little decisions: where an image sits, how large the type feels, and when to leave something alone.</p><p>I'm still really happy with the opening spread. It has the bold, sleek feeling I was going for, and I think the white space does a lot of the work.</p><p>If I revisited the project today, I'd refine the coffee-table accessories to feel more sleek and editorial, bringing them closer to the look of the publication itself.</p></div></section></div></section><div class="yg-wrap yg-end"><p>More visual systems in everyday contexts</p><button data-next="marketplace">Explore Marketplace ↗</button></div>
  </article>`;
}

function setMarketplaceScene(index) {
  const next=Math.max(0,Math.min(marketplaceScenes.length-1,index));const scene=marketplaceScenes[next];
  const root=content.querySelector('.fm');if(!root)return;
  root.querySelector('.fm-scene-image').src='assets/'+scene.file;root.querySelector('.fm-scene-image').alt=scene.alt;
  root.querySelector('.fm-scene-link').href='assets/'+scene.file;
  root.querySelector('.fm-scene-label').textContent=scene.label.toUpperCase()+' / CAMPAIGN KEY VISUAL';
  root.querySelectorAll('[data-market-scene]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.marketScene)===next)));
}
function setChanelSpread(index) {
  const next=Math.max(0,Math.min(chanelLayouts.length-1,index));const spread=chanelLayouts[next];
  const root=content.querySelector('.cn');if(!root)return;
  root.querySelector('.cn-spread-image').src='assets/'+spread.file;root.querySelector('.cn-spread-image').alt=spread.alt;
  root.querySelector('.cn-spread-link').href='assets/'+spread.file;
  root.querySelector('.cn-spread-label').textContent=next===0?'PAGES 01–02 / COCO MADEMOISELLE':'PAGES 03–04 / NO. 5 & CHANCE';
  root.querySelectorAll('[data-chanel-spread]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.chanelSpread)===next)));
}
content.addEventListener('click',event=>{
  const scene=event.target.closest('[data-market-scene]');if(scene){setMarketplaceScene(Number(scene.dataset.marketScene));return;}
  const spread=event.target.closest('[data-chanel-spread]');if(spread){setChanelSpread(Number(spread.dataset.chanelSpread));}
});

const visualProjectStyles=document.createElement('style');
visualProjectStyles.textContent=`
  .yg.vp .vp-editorial { display:grid; grid-template-columns:1fr 1.2fr; gap:70px; padding-block:65px; align-items:start; }
  .yg.vp .yg-chapter>.vp-editorial { padding:0 0 30px; }
  .yg.vp .vp-section-heading { margin-bottom:30px; }
  .yg.vp .vp-section-heading>p:last-child { font-size:15px; line-height:1.8; color:#52606d; max-width:700px; margin:24px 0 0; }
  .yg.vp .vp-figure { margin:0; min-width:0; }
  .yg.vp .vp-figure a { display:block; overflow:hidden; border-radius:10px; }
  .yg.vp .vp-figure img { display:block; width:100%; height:auto; transition:transform .4s; }
  .yg.vp .vp-figure a:hover img { transform:scale(1.015); }
  .yg.vp figcaption { font-size:9px; line-height:1.7; letter-spacing:.7px; color:#52606d; text-align:center; margin-top:16px; }
  .yg.vp .vp-switch { display:flex; gap:8px; flex-wrap:wrap; }
  .yg.vp .vp-switch button { border:1px solid #cad2d8; color:#425263; background:transparent; border-radius:24px; padding:10px 16px; font:inherit; font-size:12px; }
  .yg.vp .vp-switch button[aria-pressed="true"] { background:#263f68; color:#fff; border-color:#263f68; }
  .yg.fm { --yg-green:#315a9c; }
  .yg.fm h1 em,.yg.fm h2 em { color:#315a9c; }
  .yg.fm .fm-scene { margin-block:12px 35px; }
  .yg.fm .fm-scene .vp-switch { margin-bottom:16px; }
  .yg.fm .fm-scene-link { display:block; aspect-ratio:1.58; border-radius:12px; overflow:hidden; }
  .yg.fm .fm-scene-image { width:100%; height:100%; object-fit:cover; display:block; }
  .yg.fm .fm-display { margin:5px 0 0; padding:35px 12% 22px; background:#e2e8ed; border-radius:12px; }
  .yg.fm .fm-monitor { padding:10px 10px 18px; border-radius:15px; background:#27343e; box-shadow:0 16px 30px #2c394429; }
  .yg.fm .fm-monitor img { display:block; width:100%; height:auto; border-radius:6px; }
  .yg.fm .fm-monitor-stand { width:25%; height:45px; background:linear-gradient(90deg,#75818b,#a0acb5,#75818b); margin:auto; clip-path:polygon(25% 0,75% 0,85% 80%,100% 90%,100% 100%,0 100%,0 90%,15% 80%); }
  .yg.fm .fm-merch-grid { display:grid; grid-template-columns:.9fr 1.15fr; gap:30px; align-items:start; }
  .yg.fm .fm-merch-grid img { width:100%; height:auto; }
  .yg.fm .fm-notepad { padding-top:65px; }
  .yg.fm .yg-reflection { background:#e3eaf2; }
  .yg.cn { --yg-green:#665b50; --yg-ink:#302c29; }
  .yg.cn h1,.yg.cn h2 { font-family:Georgia,serif; font-weight:400; }
  .yg.cn h1 em,.yg.cn h2 em { color:#7c6958; }
  .yg.cn .cn-hero { margin-block:10px 35px; }
  .yg.cn .cn-hero a { display:block; overflow:hidden; border-radius:4px; }
  .yg.cn .cn-hero img { display:block; width:100%; height:auto; }
  .yg.cn .cn-spread-header { display:flex; align-items:end; justify-content:space-between; gap:30px; margin-bottom:30px; }
  .yg.cn .vp-switch button[aria-pressed="true"] { background:#39322d; border-color:#39322d; }
  .yg.cn .cn-spread { margin:0; }
  .yg.cn .cn-spread a { display:block; aspect-ratio:1.39; overflow:hidden; background:#eee; }
  .yg.cn .cn-spread img { display:block; width:100%; height:100%; object-fit:contain; }
  .yg.cn .cn-detail-notes { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; border-top:1px solid #d6d3cf; padding-top:24px; margin-top:28px; }
  .yg.cn .cn-detail-notes p { font-size:13px; line-height:1.8; color:#52606d; margin:0; }
  .yg.cn .cn-detail-notes span { display:block; font-size:9px; color:#665b50; letter-spacing:1px; margin-bottom:6px; }
  .yg.cn .cn-envelope { margin-bottom:35px; }
  .yg.cn .cn-objects { display:grid; grid-template-columns:1.1fr 1fr; gap:28px; align-items:start; }
  .yg.cn .cn-objects .vp-figure:last-child { padding-top:65px; }
  .yg.cn .yg-reflection { background:#ebe6df; }
  @media(max-width:700px) {
    .yg.vp .vp-editorial { grid-template-columns:1fr; gap:26px; padding-block:42px; }
    .yg.fm .fm-display { padding:22px 6% 20px; }
    .yg.fm .fm-monitor { padding:5px 5px 10px; border-radius:9px; }
    .yg.fm .fm-monitor-stand { height:30px; }
    .yg.fm .fm-merch-grid { grid-template-columns:1fr; gap:28px; }
    .yg.fm .fm-notepad { padding-top:0; }
    .yg.cn .cn-spread-header { align-items:start; flex-direction:column; }
    .yg.cn .cn-detail-notes { grid-template-columns:1fr; gap:20px; }
    .yg.cn .cn-objects { grid-template-columns:1fr; gap:28px; }
    .yg.cn .cn-objects .vp-figure:last-child { padding-top:0; }
    .yg.vp .yg-reflection h2 { font-size:36px; }
  }
  @media(prefers-reduced-motion:reduce) { .yg.vp .vp-figure img { transition:none; } .yg.vp .vp-figure a:hover img { transform:none; } }
`;
document.head.appendChild(visualProjectStyles);

function relaxPhone(file,alt) {
  return `<div class="rx-phone"><img src="assets/${file}" alt="${alt}" width="592" height="1280" loading="lazy" decoding="async"></div>`;
}
function renderRelax() {
  return `<article class="yg rx vp" aria-labelledby="rx-title">
    <section class="yg-intro yg-wrap"><div class="yg-topline"><p class="yg-kicker">RELAX / MEDITATION APP CONCEPT</p><span class="yg-project-type">Product Design · UX/UI · Visual Identity</span></div><h1 id="rx-title">A little less effort.<br><em>A little more calm.</em></h1><p class="yg-lead">A meditation app concept designed to make calming audio, daily check-ins, and personal progress feel easy and approachable.</p><div class="yg-facts"><p><span>MY ROLE</span>Product Designer<br>Concept to prototype</p><p><span>THE FOCUS</span>Content discovery · Listening<br>Mood tracking · Personal reflection</p><p><span>RECOGNITION</span>AAF Gold ADDY Award</p></div></section>
    <div class="rx-hero yg-wrap yg-reveal"><div class="rx-hero-screens"><figure>${relaxPhone('relax-screen-discover.png','Relax content discovery screen with playlists and mood categories')}<figcaption>DISCOVER</figcaption></figure><figure>${relaxPhone('relax-screen-listening.png','Relax listening screen with familiar playback controls')}<figcaption>LISTEN</figcaption></figure><figure>${relaxPhone('relax-screen-progress.png','Relax profile screen with progress and daily check-ins')}<figcaption>REFLECT</figcaption></figure></div></div>
    <nav class="yg-nav" aria-label="Relax case study sections"><div class="yg-wrap"><a href="#rx-overview">Overview</a><a href="#rx-decisions">Design decisions</a><a href="#rx-prototype">The prototype</a><a href="#rx-identity">Visual identity</a><a href="#rx-reflection">Reflection</a></div></nav>
    <section class="vp-editorial yg-wrap yg-reveal" id="rx-overview"><div><p class="yg-kicker">01 / THE OPPORTUNITY</p><h2>Finding calm shouldn’t<br><em>feel complicated.</em></h2></div><div class="yg-body"><p>Relax started as a school assignment and my first experience designing a mobile app. I’ve always been interested in wellness, meditation, and how sound can affect the way we feel.</p><p>I wanted to create something for people dealing with anxiety or simply looking to bring more calm and positivity into their daily lives, especially beginners who might not know where to start.</p><p>My goal was to organize a large variety of content without making the experience overwhelming, while giving people a simple way to check in with themselves and see how they’re feeling over time.</p></div></section>
    <section class="yg-chapter yg-wrap" id="rx-decisions"><div class="vp-section-heading yg-reveal"><p class="yg-kicker">02 / KEY DESIGN DECISIONS</p><h2>Make it easy to start.<br><em>Make it worth coming back to.</em></h2></div><div class="rx-decisions">
      <div class="rx-decision yg-reveal"><figure>${relaxLayeredPhones('relax-screen-home.png','Relax home screen with personalized recommendations and a gratitude prompt','relax-screen-recommendations.png','Purple Relax recommendations screen with audio categories and recommended sessions')}</figure><div class="yg-body"><p class="yg-kicker">01 / CONTENT DISCOVERY</p><h3>Less searching, more listening.</h3><p>With so many different types of audio content, I wanted people to find something that felt right without endless scrolling.</p><p>I explored personalized recommendations, content categories, and visual cards to help users make quick decisions based on their interests or how they were feeling.</p></div></div>
      <div class="rx-decision rx-decision-reverse yg-reveal"><figure>${relaxPhone('relax-screen-listening.png','Relax playback screen with pause, previous, and next controls')}</figure><div class="yg-body"><p class="yg-kicker">02 / LISTENING EXPERIENCE</p><h3>Keep the focus on the sound.</h3><p>I wanted the listening experience to feel simple and familiar. Large imagery gives each session its own personality, while recognizable playback controls make it easy to listen without much thought.</p><p>The goal was to let people enjoy the content without constantly interacting with the app.</p></div></div>
      <div class="rx-decision yg-reveal"><figure>${relaxLayeredPhones('relax-screen-check-in.png','Relax daily check-in with six mood options','relax-screen-progress.png','Relax profile showing a progress chart with week, month, and year views')}</figure><div class="yg-body"><p class="yg-kicker">03 / MOOD &amp; PROGRESS</p><h3>Every mood deserves a check-in.</h3><p>One feature I really cared about was making it okay to record any mood, not just the good ones.</p><p>I designed quick daily check-ins so users could acknowledge how they were feeling without overthinking it. The progress view gave them a way to look back and notice whether their moods were changing over time.</p><p>I wanted the experience to encourage self-awareness and positive habits without making people feel pressured to always be improving.</p></div></div>
    </div></section>
    <section class="yg-chapter yg-wrap" id="rx-prototype"><div class="rx-prototype-layout yg-reveal"><div><p class="yg-kicker">03 / THE PROTOTYPE</p><h2>From sketches<br><em>to something interactive.</em></h2><div class="yg-body"><p>This was my first time figuring out how to design an actual app. I started with sketches and wireframes, explored how other apps organized their interfaces, and gradually learned the basics of navigation, usability, and interaction design.</p><p>I built and tested the interactive prototype in Adobe XD, experimenting with how the screens connected and how someone would move through the experience.</p><p>Looking back, some of those interactions make me laugh, especially designing hover effects for a mobile app. But figuring things out as I went was one of my favorite parts of the project.</p></div></div><figure class="rx-video-figure"><div class="rx-video-phone"><video controls playsinline preload="metadata" poster="assets/relax-screen-home.png" width="592" height="1280" aria-label="Relax mobile app prototype walkthrough"><source src="assets/relax-prototype.mp4" type="video/mp4"><p>Your browser does not support this video. <a href="assets/relax-prototype.mp4">Open the walkthrough</a>.</p></video></div><figcaption>PROTOTYPE WALKTHROUGH / PLAY TO EXPLORE</figcaption></figure></div></section>
    <section class="yg-chapter yg-wrap" id="rx-identity"><div class="rx-identity-header yg-reveal"><div><p class="yg-kicker">04 / THE VISUAL IDENTITY</p><h2>Colorful enough to feel fun.<br><em>Soft enough to feel calm.</em></h2></div><img class="rx-app-icon" src="assets/relax-icon.png" alt="Relax app icon with a teal gradient and pale green wordmark" width="1600" height="1600" loading="lazy" decoding="async"></div><div class="rx-identity-copy yg-reveal"><p>Color was one of my favorite parts of designing Relax. I didn’t want another wellness app that felt overly serious or completely neutral.</p><p>I explored teals, greens, purples, and softer tones to give the experience some personality without making it visually overwhelming.</p><p>Rounded shapes, nature photography, and playful details helped create a visual identity that felt positive and welcoming. I carried that direction into the app icon and supporting brand mockups.</p></div><div class="rx-brand-row yg-reveal">${portfolioImage('relax-notebook.jpg','Relax branded notebook and pencil','A PLACE TO PAUSE AND REFLECT')}${portfolioImage('relax-yoga-mat.jpg','Relax yoga mat and packaging mockup','THE IDENTITY IN A PHYSICAL ROUTINE')}${portfolioImage('relax-bottle.jpg','Teal Relax water bottle with a pale green wordmark','A SIMPLE, RECOGNIZABLE BRAND APPLICATION','rx-bottle')}</div></section>
    <section class="yg-reflection" id="rx-reflection"><div class="yg-wrap yg-reveal"><div><p class="yg-kicker">05 / THE REFLECTION</p><h2>My first app.<br><em>Definitely not my last.</em></h2></div><div class="yg-body"><p>This project was where I started learning what product design actually involved. Before Relax, I hadn’t designed an app, and suddenly I was figuring out everything from navigation and usability to wireframes and prototyping.</p><p>Looking at it today, there’s so much I would change. I’d simplify the user flows, tighten the spacing, improve accessibility, and make the interactions more intuitive. Some decisions, like adding hover effects to a mobile app, are funny to look back on now.</p><p>But that’s also why I love this project. I can see how much I’ve learned since then.</p><p>Winning an AAF Gold ADDY Award for something I’d never done before was a pretty exciting way to start. More than anything, I’m proud that I challenged myself to learn something completely new and ended up finding a field I really enjoy.</p></div></div></section><div class="yg-wrap yg-end"><p>Another approach to everyday consistency</p><button data-next="milestone">Explore Milestone ↗</button></div>
  </article>`;
}

const relaxStyles=document.createElement('style');
relaxStyles.textContent=`
  .yg.rx { --yg-green:#38696b; --yg-ink:#203e46; }
  .yg.rx h1 em,.yg.rx h2 em { color:#38696b; }
  .yg.rx .rx-hero { background:linear-gradient(135deg,#ecd3dd,#d48da8); border-radius:12px; padding:38px 7% 24px; margin-block:8px 36px; }
  .yg.rx .rx-hero-screens { display:grid; grid-template-columns:repeat(3,1fr); gap:38px; max-width:760px; margin:auto; align-items:center; }
  .yg.rx .rx-hero-screens figure { margin:0; }
  .yg.rx .rx-phone { width:100%; padding:3px; border:1px solid #60747a; border-radius:26px; background:#17353d; box-shadow:0 16px 26px #14303926; }
  .yg.rx .rx-phone img { display:block; width:100%; height:auto; border-radius:21px; }
  .yg.rx .rx-hero-screens figure:first-child .rx-phone { transform:rotate(-3deg); }
  .yg.rx .rx-hero-screens figure:last-child .rx-phone { transform:rotate(3deg); }
  .yg.rx .rx-hero-screens figcaption { font-size:9px; letter-spacing:1px; color:#203e46; text-align:center; margin-top:20px; }
  .yg.rx .rx-decisions { display:grid; gap:65px; }
  .yg.rx .rx-decision { display:grid; grid-template-columns:1fr 1.2fr; gap:75px; align-items:center; }
  .yg.rx .rx-decision figure { margin:0; padding:28px; border-radius:12px; background:#dce9e7; }
  .yg.rx .rx-decision .rx-phone { width:210px; max-width:100%; margin:auto; }
  .yg.rx .rx-decision .yg-body h3 { font-size:28px; letter-spacing:-.7px; line-height:1.25; margin-bottom:20px; }
  .yg.rx .rx-decision-reverse { grid-template-columns:1.2fr 1fr; }
  .yg.rx .rx-decision-reverse figure { grid-column:2; grid-row:1; background:#d4e1e7; }
  .yg.rx .rx-decision-reverse .yg-body { grid-column:1; grid-row:1; }
  .yg.rx .rx-prototype-layout { display:grid; grid-template-columns:1.2fr 1fr; gap:70px; align-items:center; }
  .yg.rx .rx-prototype-layout .yg-body { max-width:560px; margin-top:28px; }
  .yg.rx .rx-video-figure { margin:0; }
  .yg.rx .rx-video-phone { max-width:300px; margin:auto; padding:5px; border-radius:28px; background:#17353d; box-shadow:0 18px 30px #14303920; }
  .yg.rx .rx-video-phone video { display:block; width:100%; height:auto; border-radius:23px; background:#17353d; }
  .yg.rx .rx-identity-header { display:flex; align-items:center; justify-content:space-between; gap:35px; margin-bottom:26px; }
  .yg.rx .rx-app-icon { width:90px; height:90px; object-fit:contain; flex-shrink:0; }
  .yg.rx .rx-identity-copy { font-size:15px; line-height:1.8; color:#52606d; max-width:780px; margin-bottom:32px; }
  .yg.rx .rx-brand-pair { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-bottom:35px; }
  .yg.rx .rx-brand-pair img { aspect-ratio:1.3; object-fit:cover; }
  .yg.rx .rx-bottle { max-width:800px; margin-inline:auto; }
  .yg.rx .rx-bottle a { aspect-ratio:1.6; }
  .yg.rx .rx-bottle img { width:100%; height:100%; object-fit:cover; }
  .yg.rx .yg-reflection { background:#dce9e7; }
  @media(max-width:1000px) { .yg.rx .rx-hero-screens { gap:25px; } .yg.rx .rx-decision,.yg.rx .rx-prototype-layout { gap:38px; } }
  @media(max-width:700px) {
    .yg.rx .rx-hero { padding:26px 6% 20px; }
    .yg.rx .rx-hero-screens { gap:13px; }
    .yg.rx .rx-phone { border-radius:17px; padding:2px; }
    .yg.rx .rx-phone img { border-radius:13px; }
    .yg.rx .rx-hero-screens figcaption { font-size:8px; letter-spacing:.6px; margin-top:14px; }
    .yg.rx .rx-decision,.yg.rx .rx-prototype-layout { grid-template-columns:1fr; gap:26px; }
    .yg.rx .rx-decision-reverse figure,.yg.rx .rx-decision-reverse .yg-body { grid-column:auto; grid-row:auto; }
    .yg.rx .rx-decisions { gap:45px; }
    .yg.rx .rx-brand-pair { grid-template-columns:1fr; gap:26px; }
    .yg.rx .rx-app-icon { width:65px; height:65px; }
    .yg.rx .rx-identity-header h2 { font-size:32px; }
  }
`;
relaxStyles.textContent += `
.yg.rx .rx-screen-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:center;max-width:440px;margin:auto}
.yg.rx .rx-screen-pair .rx-phone{width:100%;max-width:100%;border-radius:21px;padding:2px}
.yg.rx .rx-screen-pair .rx-phone img{border-radius:17px}
@media(max-width:700px){.yg.rx .rx-screen-pair{gap:14px;max-width:380px}.yg.rx .rx-screen-pair .rx-phone{border-radius:17px}.yg.rx .rx-screen-pair .rx-phone img{border-radius:13px}}
`;
relaxStyles.textContent += `
.yg.rx .rx-brand-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;align-items:start}
.yg.rx .rx-brand-row .vp-figure{margin:0;width:100%;max-width:none;padding:0}
.yg.rx .rx-brand-row .vp-figure a{display:block;width:100%;aspect-ratio:1.15;background:#e4e9e6;border-radius:10px;overflow:hidden}
.yg.rx .rx-brand-row .vp-figure img{display:block;width:100%;height:100%;aspect-ratio:auto;object-fit:contain}
.yg.rx .rx-brand-row figcaption{margin-top:16px;text-align:center;font-size:9px;letter-spacing:.7px;line-height:1.6}
.portfolio-home .home-work-grid .home-relax{background:linear-gradient(135deg,#d9e8e2,#a3c4c0)}
.portfolio-home .home-relax .rx-home-phones{width:68%;left:16%;top:55%;gap:13px;align-items:center}
.portfolio-home .home-relax .rx-cover-device{width:30%;max-width:125px;transform:none;border-radius:17px;padding:3px;background:#17353d;box-shadow:0 14px 24px #14303924}
.portfolio-home .home-relax .rx-cover-device img{border-radius:14px}
.portfolio-home .home-relax:hover .rx-cover-device{transform:translateY(-3px)}
@media(max-width:700px){.yg.rx .rx-brand-row{gap:12px}.yg.rx .rx-brand-row figcaption{font-size:8px;letter-spacing:.2px}.portfolio-home .home-relax .rx-home-phones{gap:10px}}
@media(max-width:420px){.yg.rx .rx-brand-row{grid-template-columns:1fr;gap:25px}.yg.rx .rx-brand-row .vp-figure a{aspect-ratio:1.15}}
@media(prefers-reduced-motion:reduce){.portfolio-home .home-relax:hover .rx-cover-device{transform:none}}
`;
relaxStyles.textContent += `
.yg.rx .rx-brand-row .vp-figure a{aspect-ratio:1.3;background:transparent}
.yg.rx .rx-brand-row .vp-figure img{width:100%;height:100%;object-fit:cover;object-position:center;background:transparent}
.yg.rx .rx-identity-copy p{margin-bottom:16px}
.yg.rx .rx-identity-copy p:last-child{margin-bottom:0}
`;
relaxStyles.textContent += `
.yg.rx .rx-mood-overlap{position:relative;width:100%;max-width:360px;aspect-ratio:.68;margin:10px auto;isolation:isolate}
.yg.rx .rx-mood-overlap .rx-phone{position:absolute;max-width:none;margin:0;padding:3px;border-radius:24px;box-shadow:0 16px 25px #14303925}
.yg.rx .rx-mood-overlap .rx-phone img{border-radius:19px}
.yg.rx .rx-mood-overlap .rx-phone:first-child{width:62%;left:3%;top:3%;z-index:2;transform:rotate(-4deg)}
.yg.rx .rx-mood-overlap .rx-phone:last-child{width:56%;right:1%;top:8%;z-index:1;transform:rotate(7deg);box-shadow:0 10px 20px #1430391f}
@media(max-width:700px){.yg.rx .rx-mood-overlap{max-width:330px}.yg.rx .rx-mood-overlap .rx-phone{padding:2px;border-radius:20px}.yg.rx .rx-mood-overlap .rx-phone img{border-radius:16px}}
`;
document.head.appendChild(relaxStyles);

const yoggerWebSlides=[
 {"file": "yogger-web-overview.png", "label": "Product overview", "alt": "Yogger website introduction with squat assessment and advanced analysis tools", "laptop": true},
 {"file": "yogger-web-library.png", "label": "Assessment library", "alt": "Yogger assessment library grouped into lower body, upper body, spine and trunk, and neck mobility", "laptop": true},
 {"file": "yogger-web-video-review.png", "label": "Video analysis", "alt": "Yogger website graphic showing frame-by-frame tennis movement analysis", "laptop": true},
 {"file": "yogger-web-automated.png", "label": "Automated assessment", "alt": "Yogger website graphic showing automated lunge analysis and a 79 percent overall score", "laptop": true}
];
function yoggerWebMedia(index){
 const slide=yoggerWebSlides[index];
 const artwork=`<a href="assets/${slide.file}" target="_blank" rel="noopener" aria-label="View ${slide.label} artwork at full size"><img src="assets/${slide.file}" alt="${slide.alt}" decoding="async"></a>`;
 return slide.laptop?`<div class="vd-gallery-laptop"><div class="vd-gallery-screen">${artwork}</div><div class="vd-gallery-base" aria-hidden="true"></div></div>`:`<div class="vd-gallery-art">${artwork}</div>`;
}
function renderYoggerWebGallery(){return `<div class="vd-web-spotlight yg-reveal"><div class="vd-spotlight-stage"><div class="vd-spotlight-media" id="vd-selected-graphic" role="region" aria-label="Selected website graphic" aria-live="polite">${yoggerWebMedia(0)}</div></div><div class="vd-spotlight-picks" role="group" aria-label="Choose a website graphic">${yoggerWebSlides.map((slide,i)=>`<button type="button" data-vd-web-slide="${i}" aria-pressed="${i===0}" aria-controls="vd-selected-graphic"><span class="vd-pick-preview"><img src="assets/${slide.file}" alt="" loading="lazy"></span><span>${slide.label}</span></button>`).join('')}</div></div>`;}
function setYoggerWebSlide(index){
 if(!Number.isInteger(index)||!yoggerWebSlides[index])return;
 const root=content.querySelector('.vd-web-spotlight');if(!root)return;
 const media=root.querySelector('.vd-spotlight-media');if(!media)return;
 media.innerHTML=yoggerWebMedia(index);
 root.querySelectorAll('[data-vd-web-slide]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.vdWebSlide)===index)));
}
content.addEventListener('click',event=>{const pick=event.target.closest('[data-vd-web-slide]');if(pick)setYoggerWebSlide(Number(pick.dataset.vdWebSlide));});

const yoggerSpotlightStyles=document.createElement('style');
yoggerSpotlightStyles.textContent=`
.yg.vd .vd-spotlight-stage{height:590px;padding:38px 45px;border-radius:9px;background:radial-gradient(ellipse at 40% 20%,#e7eddf,#d2ddc9);display:flex;align-items:center;justify-content:center;overflow:hidden}
.yg.vd .vd-spotlight-media{width:100%;height:100%;display:flex;align-items:center;justify-content:center}
.yg.vd .vd-gallery-laptop{width:min(78%,660px);animation:vd-gallery-arrive .28s ease-out}
.yg.vd .vd-gallery-screen{padding:7px;background:#263038;border:1px solid #6e7c83;border-radius:13px 13px 3px 3px;box-shadow:0 16px 28px #2c394426}
.yg.vd .vd-gallery-screen a{display:block;aspect-ratio:1.4;overflow:hidden;border-radius:5px;background:#fff}
.yg.vd .vd-gallery-screen img{width:100%;height:100%;object-fit:contain}
.yg.vd .vd-gallery-base{position:relative;width:110%;left:-5%;height:12px;border-radius:2px 2px 45% 45%;background:linear-gradient(#d2d9dc,#8d9aa1);box-shadow:0 10px 18px #2c394420}
.yg.vd .vd-gallery-base:before{content:'';position:absolute;left:43%;top:0;width:14%;height:3px;border-radius:0 0 5px 5px;background:#859198}
.yg.vd .vd-gallery-art{width:100%;height:100%;animation:vd-gallery-arrive .28s ease-out}
.yg.vd .vd-gallery-art a{display:flex;width:100%;height:100%;align-items:center;justify-content:center}
.yg.vd .vd-gallery-art img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:7px}
.yg.vd .vd-spotlight-picks{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:20px}
.yg.vd .vd-spotlight-picks button{display:flex;flex-direction:column;align-items:center;gap:12px;min-width:0;padding:13px 13px 14px;background:#ebece7;border:1px solid transparent;border-radius:7px;font-size:11px;font-weight:500;line-height:1.5;color:#52606d;cursor:pointer;transition:background .2s,border-color .2s}
.yg.vd .vd-spotlight-picks button:hover{background:#e0e6da}
.yg.vd .vd-spotlight-picks button[aria-pressed="true"]{background:#e0e7d9;border-color:#8c9e81;color:#2c3944}
.yg.vd .vd-pick-preview{display:flex;align-items:center;justify-content:center;width:100%;height:92px;overflow:hidden}
.yg.vd .vd-pick-preview img{width:100%;height:100%;object-fit:contain;border-radius:3px}
@keyframes vd-gallery-arrive{from{opacity:.5;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:900px){.yg.vd .vd-spotlight-stage{height:490px;padding:30px}.yg.vd .vd-gallery-laptop{width:87%}.yg.vd .vd-spotlight-picks{gap:12px}.yg.vd .vd-pick-preview{height:78px}}
@media(max-width:600px){.yg.vd .vd-spotlight-stage{height:390px;padding:24px 20px}.yg.vd .vd-gallery-laptop{width:92%}.yg.vd .vd-gallery-screen{padding:4px;border-radius:8px 8px 2px 2px}.yg.vd .vd-gallery-base{height:8px}.yg.vd .vd-spotlight-picks{gap:8px;margin-top:14px}.yg.vd .vd-spotlight-picks button{padding:8px 5px 10px;font-size:10px;gap:8px}.yg.vd .vd-pick-preview{height:60px}}
@media(prefers-reduced-motion:reduce){.yg.vd .vd-gallery-laptop,.yg.vd .vd-gallery-art{animation:none}.yg.vd .vd-spotlight-picks button{transition:none}}
`;
document.head.appendChild(yoggerSpotlightStyles);


Object.assign(projects.reports,{pending:false,label:'YOGGER / VISUAL DESIGN',name:'Yogger visual design',role:'Visual design · Information design · Print & digital'});

function renderYoggerVisual(){
 const storeTitles=['Measure movement in seconds','Measure. Track. Report.','Make progress impossible to miss','Explain movement visually','Turn movement into measurable data','Meet Movement Age','Generate professional reports','Built for movement professionals'];
 const storeGallery=storeTitles.map((title,i)=>`<figure class="vd-store-card"><a href="assets/yogger-store-${i+1}.png" target="_blank" rel="noopener" aria-label="View App Store cover ${i+1}: ${title}"><img src="assets/yogger-store-${i+1}.png" alt="Yogger App Store artwork: ${title}" loading="lazy" decoding="async"></a><figcaption><span>${String(i+1).padStart(2,'0')}</span>${title}</figcaption></figure>`).join('');
 return `<article class="yg vd">
 <section class="yg-intro yg-wrap"><div class="yg-topline"><p class="yg-kicker">YOGGER / VISUAL DESIGN</p><span class="yg-project-type">Print · Digital · Information design</span></div><h1>Helping people<br><em>see what Yogger can do.</em></h1><p class="yg-lead">From first impressions to final reports, making Yogger easier to understand.</p><div class="yg-facts"><p><span>MY ROLE</span>Visual design<br>Information design<br>Print &amp; digital</p><p><span>DELIVERABLES</span>Print materials<br>Website &amp; App Store graphics<br>Assessment reports</p><p><span>THE GOAL</span>Make Yogger easier to discover, understand,<br>and use across every touchpoint.</p></div></section>
 <figure class="vd-hero yg-wrap"><div class="vd-print-stage"><button class="vd-brochure" type="button" aria-expanded="false" aria-controls="vd-paper" aria-label="Unfold the Yogger brochure"><span class="vd-paper" id="vd-paper" aria-hidden="true"><span class="vd-leaf vd-center"><span class="vd-face vd-inside"></span><span class="vd-face vd-outside"></span></span><span class="vd-leaf vd-left"><span class="vd-face vd-inside"></span><span class="vd-face vd-outside"></span></span><span class="vd-leaf vd-right"><span class="vd-face vd-inside"></span><span class="vd-face vd-outside"></span></span></span></button><span class="vd-fold-hint" aria-live="polite">Scroll to unfold · Click to open</span></div><figcaption>A PATIENT-FACING INTRODUCTION TO MOVEMENT ASSESSMENTS.</figcaption></figure>
 <nav class="yg-nav" aria-label="Yogger visual design sections"><div class="yg-wrap"><a href="#vd-overview">Overview</a><a href="#vd-print">01 / Print</a><a href="#vd-website">02 / Website</a><a href="#vd-store">03 / App Store</a><a href="#vd-reports">04 / Reports</a><a href="#vd-reflection">Reflection</a></div></nav>
 <section id="vd-overview" class="yg-overview yg-wrap yg-reveal"><div><p class="yg-kicker">THE CHALLENGE</p><h2>A lot to explain.<br><em>Not all at once.</em></h2></div><div class="yg-body"><p>Yogger does a lot, but not everyone needs to see everything at once. Someone discovering the product needs a quick introduction, while someone reviewing their results needs more detail.</p><p>My job was to make both feel simple. I used Yogger’s existing brand to create print materials, website graphics, App Store visuals, and reports, giving each one the right amount of information.</p></div></section>
 <section id="vd-print" class="yg-chapter yg-wrap"><div class="yg-chapter-head yg-reveal"><div><p class="yg-kicker">01 / PRINT COMMUNICATION</p><h2>Helping clinics explain<br><em>the value of movement.</em></h2></div><div class="yg-body"><p>I designed and wrote this trifold pamphlet for clinics to share with patients. The goal was to make movement assessments feel approachable, show patients what they could learn, and encourage them to ask their provider about getting assessed.</p><p>With only three panels per side, I focused on keeping the message simple and giving the visuals room to do some of the explaining.</p></div></div><div class="vd-spreads yg-reveal">${portfolioImage('yogger-pamphlet-2.png','Outside of the Yogger trifold: baseline overview, contact panel, and front cover','OUTSIDE / INTRODUCE THE PRODUCT')}${portfolioImage('yogger-pamphlet-1.png','Inside of the Yogger trifold: sports-specific analysis, digital movement screening, and Movement Age','INSIDE / MAKE THE BENEFITS TANGIBLE')}</div><p class="vd-small"><a href="assets/yogger-pamphlet.pdf" target="_blank" rel="noopener">Explore the complete pamphlet ↗</a></p></section>
 <section id="vd-website" class="yg-chapter yg-wrap"><div class="yg-chapter-head yg-reveal"><div><p class="yg-kicker">02 / WEBSITE GRAPHICS</p><h2>Less explaining.<br><em>More showing.</em></h2></div><div class="yg-body"><p>The website was still showing an older version of Yogger, so I created updated graphics using Figma mockups of the upcoming app.</p><p>I created graphics that introduced Yogger, showed the range of assessments, and explained video analysis and automated results. Each composition pairs a clear message with the part of the product that helps explain it.</p></div></div>
 ${renderYoggerWebGallery()}
 <div class="vd-decision"><div><p class="yg-kicker">THE APPROACH</p><h3>Give each graphic a clear job.</h3></div><p>The overview shows the product in action. The library makes its range visible, while the analysis graphics bring specific tools and results forward. I adjusted the composition to suit the feature, keeping the visual language consistent across the website.</p></div></section>
 <section id="vd-store" class="yg-chapter yg-wrap"><div class="yg-chapter-head yg-reveal"><div><p class="yg-kicker">03 / APP STORE PRESENTATION</p><h2>Make every cover<br><em>count.</em></h2></div><p>I designed eight App Store screenshots to highlight Yogger’s key features, from recording movement to tracking progress. Each cover focuses on one benefit, making it easy to understand what the app can do at a glance.</p></div><div class="vd-gallery-tools"><p>Eight covers, one connected sequence.</p><div><button data-vd-scroll="-1" aria-label="Previous App Store covers">←</button><button data-vd-scroll="1" aria-label="Next App Store covers">→</button></div></div><div class="vd-store-gallery" tabindex="0" role="region" aria-label="Scrollable Yogger App Store cover gallery">${storeGallery}</div><p class="vd-small">Scroll to explore</p></section>
 <section id="vd-reports" class="yg-chapter yg-wrap"><div class="yg-chapter-head yg-reveal"><div><p class="yg-kicker">04 / REPORT DESIGN</p><h2>Make the results clear.<br><em>Keep the details easy to find.</em></h2></div><p>I designed reports that make movement data easier to understand. The Movement Age report starts with an overall result, then breaks down the individual scores. The comparison report puts two assessments side by side so it’s easy to see what’s changed.</p></div>
 <div class="vd-report-pair yg-reveal"><div class="vd-report-copy"><p class="yg-kicker">MOVEMENT AGE / TWO-PAGE REPORT</p><h3>The big picture,<br>then the breakdown.</h3><p>The summary leads into functional movement, strength, and daily habits, with the detail carried onto a second page.</p></div><div class="vd-age-pages">${portfolioImage('yogger-report-age-1.png','Movement Age report page one with overall age and functional movement scores','01 / OVERVIEW')}${portfolioImage('yogger-report-age-2.png','Movement Age report page two with strength and daily habits scores','02 / SUPPORTING DETAIL')}</div></div>
 <div class="vd-comparison-block yg-reveal"><div class="vd-report-copy"><p class="yg-kicker">COMPARISON / SINGLE-PAGE REPORT</p><h3>See what’s changed.</h3><p>Two dated assessments sit side by side, keeping the overall scores and individual measurements together.</p></div>${portfolioImage('yogger-report-comparison.png','Lunge comparison report with two dated scores and a detailed measurement comparison','COMPARE THE RESULT. FOLLOW THE DETAIL.','vd-comparison-page')}</div></section>
 <section id="vd-reflection" class="yg-overview yg-wrap yg-reveal"><div><p class="yg-kicker">THE TAKEAWAY</p><h2>Same product.<br><em>Different people,<br>different needs.</em></h2></div><div class="yg-body"><p>One of the biggest things I learned at Yogger was how much the audience shapes the design. I was constantly switching between clinicians, their patients, and people at different stages of discovering the product. Each needed something different, and I learned to focus less on how much information I could fit and more on what someone actually needed to understand.</p><p>Looking back, I would have loved to push the website graphics further with more interactive elements that let people explore the product for themselves. It’s something I’d like to bring into future projects.</p></div></section><div class="yg-end yg-wrap"><p>Explore the experience behind the visuals</p><button data-next="yogger">Yogger mobile redesign ↗</button></div></article>`;
}

const yoggerVisualStyles=document.createElement('style');
yoggerVisualStyles.textContent=`
.yg.vd{--yg-paper:#f7f5ef;--yg-green:#526852;background:var(--yg-paper)}
.yg.vd figure{margin:0}.yg.vd img{display:block;width:100%;height:auto}.yg.vd figcaption{font-size:9px;letter-spacing:1px;text-align:center;line-height:1.6;margin-top:16px;color:#586772}.yg.vd a:focus-visible,.yg.vd button:focus-visible,.yg.vd [tabindex]:focus-visible{outline:2px solid #526852;outline-offset:5px}.yg.vd .yg-intro h1{font-size:clamp(42px,6vw,82px);line-height:1.1;letter-spacing:-.05em}.yg.vd .yg-lead{max-width:610px}.yg.vd .yg-facts{gap:35px}.yg.vd .yg-nav{background:#f7f5eff5}.yg.vd .yg-nav a{font-weight:600}.yg.vd .yg-nav .yg-wrap{gap:22px}.yg.vd .yg-chapter,.yg.vd .yg-overview{padding:65px 0}.yg.vd .yg-chapter-head{gap:65px;align-items:start}.yg.vd .yg-chapter-head .yg-body p:first-child{margin-top:0}.yg.vd .yg-chapter-head .yg-body{font-size:15px}.yg.vd .yg-chapter-head h2{font-size:clamp(30px,3.65vw,49px)}
.yg.vd .vd-hero{margin:30px auto 40px}.yg.vd .vd-print-stage{position:relative;isolation:isolate;display:grid;place-items:center;height:520px;border-radius:8px;background:radial-gradient(ellipse at 40% 20%,#e7eddf,#cbd8bf);overflow:hidden}.yg.vd .vd-brochure{display:grid;place-items:center;width:100%;height:100%;position:relative;border:0;padding:0;background:transparent;perspective:1800px;cursor:pointer;touch-action:manipulation}.yg.vd .vd-paper{position:relative;width:190px;aspect-ratio:264/612;transform:translateY(-7px) rotateX(22deg) rotateY(-11deg) rotateZ(-9deg);transform-style:preserve-3d;transition:transform 1s cubic-bezier(.22,.65,.2,1)}.yg.vd .vd-leaf{position:absolute;inset:0;transform-style:preserve-3d;box-shadow:0 14px 26px #263d2626;transition:transform .8s cubic-bezier(.22,.65,.2,1)}.yg.vd .vd-face{display:block;position:absolute;inset:0;background-size:300% 100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;background-color:#fff;outline:1px solid #cbd2c5;box-shadow:inset 1px 0 #fff8,inset -1px 0 #79847335}.yg.vd .vd-inside{background-image:url('assets/yogger-pamphlet-1.png')}.yg.vd .vd-outside{background-image:url('assets/yogger-pamphlet-2.png');transform:rotateY(180deg)}.yg.vd .vd-center .vd-inside,.yg.vd .vd-center .vd-outside{background-position:50% 0}.yg.vd .vd-left{left:-100%;right:100%;transform-origin:right center;transform:translateZ(.7px) rotateY(180deg);transition-delay:0s}.yg.vd .vd-left .vd-face{background-position:0% 0}.yg.vd .vd-right{left:100%;right:-100%;transform-origin:left center;transform:translateZ(1.5px) rotateY(-180deg);transition-delay:.15s}.yg.vd .vd-right .vd-face{background-position:100% 0}.yg.vd .vd-brochure[aria-expanded="true"] .vd-paper{transform:translateY(-7px) rotateX(19deg) rotateY(-5deg) rotateZ(-7deg)}.yg.vd .vd-brochure[aria-expanded="true"] .vd-left{transform:rotateY(0deg);transition-delay:.15s}.yg.vd .vd-brochure[aria-expanded="true"] .vd-right{transform:rotateY(0deg);transition-delay:0s}.yg.vd .vd-fold-hint{position:absolute;bottom:22px;left:0;right:0;text-align:center;font-size:11px;letter-spacing:.4px;color:#486044;pointer-events:none}.yg.vd .vd-fold-hint span{margin-left:10px}.yg.vd .vd-spreads{display:grid;grid-template-columns:1fr 1fr;gap:25px}.yg.vd .vd-spreads a{display:block;box-shadow:0 12px 30px #2c394410}.yg.vd .vd-small{font-size:11px;text-align:center;color:#65716d;margin:24px 0 0}
.yg.vd .vd-web-editorial{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:34px 30px;align-items:center}.yg.vd .vd-web-laptop{grid-column:span 8;padding:35px 22px 0;background:#e4e9df;border-radius:8px;align-self:stretch;display:flex;flex-direction:column;justify-content:center;min-width:0}.yg.vd .vd-laptop{width:92%;margin:auto}.yg.vd .vd-laptop-screen{background:#263038;padding:7px;border-radius:12px 12px 3px 3px;border:1px solid #657079;box-shadow:0 15px 25px #2c394423}.yg.vd .vd-laptop-screen a{display:block;background:#fff;overflow:hidden;border-radius:4px}.yg.vd .vd-laptop-screen img{width:100%;height:auto}.yg.vd .vd-laptop-base{height:12px;width:110%;position:relative;left:-5%;background:linear-gradient(#d3d9dc,#8b969e);border-radius:2px 2px 45% 45%;box-shadow:0 8px 15px #2c394420}.yg.vd .vd-web-laptop figcaption{margin:24px 0 20px}.yg.vd .vd-web-balance{grid-column:span 4}.yg.vd .vd-web-tennis{grid-column:span 4}.yg.vd .vd-web-tools{grid-column:span 8}.yg.vd .vd-web-editorial .vp-figure a{display:block;overflow:hidden;border-radius:8px}.yg.vd .vd-web-tools a{background:#eef1f2;padding:18px 0}.yg.vd .vd-web-editorial .vp-figure img{width:100%;height:auto}.yg.vd .vd-decision{display:grid;grid-template-columns:1fr 1fr;gap:65px;border-top:1px solid #d6d3cf;margin-top:35px;padding-top:26px}.yg.vd .vd-decision .yg-kicker{margin-bottom:10px}.yg.vd .vd-decision h3{font-size:24px}.yg.vd .vd-decision>p{font-size:14px;color:#52606d;line-height:1.8;margin:0}
.yg.vd .vd-gallery-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.yg.vd .vd-gallery-tools p{font-size:12px;margin:0;color:#64716b}.yg.vd .vd-gallery-tools>div{display:flex;gap:8px}.yg.vd .vd-gallery-tools button{width:36px;height:36px;background:transparent;border:1px solid #bbc5b8;border-radius:50%;font-size:18px;color:#2c3944;cursor:pointer}.yg.vd .vd-gallery-tools button:hover{background:#e0e8db}.yg.vd .vd-store-gallery{display:flex;gap:18px;overflow-x:auto;padding:4px 0 18px;scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:#94a28c transparent;overscroll-behavior-x:contain}.yg.vd .vd-store-card{flex:0 0 calc((100% - 72px)/5);min-width:0;scroll-snap-align:start}.yg.vd .vd-store-card a{display:block;border:1px solid #dce2d9;border-radius:9px;overflow:hidden;background:#fff;transition:transform .25s}.yg.vd .vd-store-card a:hover{transform:translateY(-3px)}.yg.vd .vd-store-card figcaption{text-align:left;letter-spacing:0;font-size:10px;display:flex;gap:9px;margin-top:12px}.yg.vd .vd-store-card figcaption span{color:#75816e;font-size:9px;padding-top:1px}
.yg.vd .vd-report-pair{padding:32px;background:#e2e9dc;border-radius:8px}.yg.vd .vd-report-copy .yg-kicker{margin-bottom:10px}.yg.vd .vd-report-copy h3{font-size:25px;line-height:1.25}.yg.vd .vd-report-copy>p:last-child{font-size:13px;color:#52606d;line-height:1.8;max-width:430px;margin-bottom:0}.yg.vd .vd-report-pair>.vd-report-copy{display:grid;grid-template-columns:1fr 1fr;gap:6px 40px;margin-bottom:26px}.yg.vd .vd-report-pair>.vd-report-copy .yg-kicker{grid-column:1/-1}.yg.vd .vd-age-pages{display:grid;grid-template-columns:1fr 1fr;gap:25px;max-width:830px;margin:auto}.yg.vd .vd-age-pages a,.yg.vd .vd-comparison-page a{display:block;box-shadow:0 10px 24px #34433117;transition:transform .25s}.yg.vd .vd-age-pages a:hover,.yg.vd .vd-comparison-page a:hover{transform:translateY(-3px)}.yg.vd .vd-comparison-block{display:grid;grid-template-columns:.8fr 1.2fr;align-items:center;gap:60px;padding:38px 7%;margin-top:28px;background:#e6eae8;border-radius:8px}.yg.vd .vd-comparison-page{width:100%;max-width:460px;justify-self:end}.yg.vd .yg-end{padding-bottom:65px}
@media(max-width:900px){.yg.vd .yg-chapter-head{gap:35px}.yg.vd .vd-paper{width:170px}.yg.vd .vd-print-stage{height:460px}.yg.vd .vd-web-editorial{gap:25px 20px}.yg.vd .vd-laptop-screen{padding:5px}.yg.vd .vd-web-laptop{padding:28px 12px 0}.yg.vd .vd-store-card{flex-basis:calc((100% - 36px)/3)}.yg.vd .vd-report-pair{padding:24px}.yg.vd .vd-comparison-block{gap:30px;padding:30px}.yg.vd .vd-decision{gap:35px}}
@media(max-width:600px){.yg.vd .yg-intro h1{font-size:clamp(37px,8vw,48px)}.yg.vd .yg-topline{align-items:flex-start}.yg.vd .yg-project-type{max-width:120px;text-align:right}.yg.vd .yg-facts{grid-template-columns:1fr 1fr;gap:20px}.yg.vd .yg-facts p:last-child{grid-column:1/-1}.yg.vd .yg-nav .yg-wrap{overflow-x:auto;justify-content:flex-start;gap:24px}.yg.vd .yg-chapter-head,.yg.vd .yg-overview{grid-template-columns:1fr;gap:22px}.yg.vd .yg-overview,.yg.vd .yg-chapter{padding:45px 0}.yg.vd .vd-print-stage{height:360px}.yg.vd .vd-paper{width:clamp(80px,23vw,125px);transform:translateY(-4px) rotateX(22deg) rotateY(-11deg) rotateZ(-9deg)}.yg.vd .vd-brochure:not([aria-expanded="true"]) .vd-paper{transform:translateY(-5px) rotateX(22deg) rotateY(-11deg) rotateZ(-9deg) scale(1.1)}.yg.vd .vd-brochure[aria-expanded="true"] .vd-paper{transform:translateY(-7px) rotateX(19deg) rotateY(-5deg) rotateZ(-7deg)}.yg.vd .vd-spreads{grid-template-columns:1fr;gap:26px}.yg.vd .vd-web-editorial{grid-template-columns:1fr 1fr;gap:25px 16px}.yg.vd .vd-web-laptop,.yg.vd .vd-web-tools{grid-column:1/-1}.yg.vd .vd-web-balance,.yg.vd .vd-web-tennis{grid-column:span 1}.yg.vd .vd-web-balance{grid-row:2}.yg.vd .vd-web-tennis{grid-row:2}.yg.vd .vd-web-tools{grid-row:3}.yg.vd .vd-web-editorial figcaption{font-size:8px;letter-spacing:.6px}.yg.vd .vd-decision{grid-template-columns:1fr;gap:12px}.yg.vd .vd-decision h3{margin-bottom:0}.yg.vd .vd-store-card{flex-basis:calc((100% - 18px)/2)}.yg.vd .vd-gallery-tools p{max-width:180px}.yg.vd .vd-report-pair{padding:20px 16px}.yg.vd .vd-report-pair>.vd-report-copy{grid-template-columns:1fr;gap:8px}.yg.vd .vd-age-pages{gap:12px}.yg.vd .vd-age-pages figcaption{font-size:8px;letter-spacing:.5px}.yg.vd .vd-comparison-block{grid-template-columns:1fr;gap:25px;padding:25px 20px}.yg.vd .vd-comparison-page{max-width:360px;justify-self:center}.yg.vd .vd-report-copy h3{font-size:23px}}
@media(prefers-reduced-motion:reduce){.yg.vd .vd-paper,.yg.vd .vd-leaf,.yg.vd .vd-store-card a,.yg.vd .vd-age-pages a,.yg.vd .vd-comparison-page a{transition:none!important;transition-delay:0s!important}}
`;
yoggerVisualStyles.textContent += `
/* Alignment, paper depth, and a sequential three-panel roll fold. */
.yg.vd .yg-overview,.yg.vd .yg-chapter-head,.yg.vd .vd-decision{grid-template-columns:1fr 1fr;column-gap:65px;align-items:start}
.yg.vd .yg-overview .yg-body>p:first-child,.yg.vd .yg-chapter-head .yg-body>p:first-child{margin-top:0}
.yg.vd .vd-leaf{transition:transform .52s cubic-bezier(.4,0,.2,1)}
.yg.vd .vd-left{transform:translateZ(.8px) rotateY(180deg);transition-delay:0s}
.yg.vd .vd-right{transform:translateZ(2px) rotateY(-180deg);transition-delay:.54s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-right{transform:translateZ(2px) rotateY(0deg);transition-delay:0s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-left{transform:translateZ(.8px) rotateY(0deg);transition-delay:.54s}
.yg.vd .vd-paper{transition:transform 1.06s cubic-bezier(.4,0,.2,1)}
.yg.vd .vd-spreads{gap:30px;padding:6px 0 12px}
.yg.vd .vd-spreads a{position:relative;background:#fff;box-shadow:0 3px 5px #2c394415,0 18px 28px #2c394426,0 35px 48px -18px #2c394427}
.yg.vd .vd-spreads a:after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,transparent 32.9%,#2c39440a 33.25%,#fff6 33.45%,transparent 33.7%,transparent 66.2%,#2c39440a 66.55%,#fff6 66.75%,transparent 67%)}
.yg.vd .vd-web-tools a{background:#fff}
.yg.vd .vd-web-laptop{padding-bottom:28px}
.yg.vd .vd-decision{border-top:0;padding-top:10px;margin-top:32px}
@media(max-width:900px){.yg.vd .yg-overview,.yg.vd .yg-chapter-head,.yg.vd .vd-decision{column-gap:35px}}
@media(max-width:600px){.yg.vd .yg-overview,.yg.vd .yg-chapter-head,.yg.vd .vd-decision{grid-template-columns:1fr;gap:22px}.yg.vd .vd-spreads{gap:32px}.yg.vd .vd-web-laptop{padding-bottom:25px}}
@media(prefers-reduced-motion:reduce){.yg.vd .vd-leaf,.yg.vd .vd-paper{transition:none!important;transition-delay:0s!important}}
`;
yoggerVisualStyles.textContent += `
/* Cover opens to the left; the tucked baseline flap opens to the right. */
.yg.vd .vd-left .vd-outside{background-position:100% 0}
.yg.vd .vd-right .vd-outside{background-position:0% 0}
.yg.vd .vd-left{transform:translateZ(2px) rotateY(180deg);transition-delay:.54s}
.yg.vd .vd-right{transform:translateZ(.8px) rotateY(-180deg);transition-delay:0s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-left{transform:translateZ(2px) rotateY(0deg);transition-delay:0s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-right{transform:translateZ(.8px) rotateY(0deg);transition-delay:.54s}
@media(prefers-reduced-motion:reduce){.yg.vd .vd-leaf{transition:none!important;transition-delay:0s!important}}
`;
yoggerVisualStyles.textContent += `
/* Upright paper, soft depth, and a calmer continuous fold. */
.yg.vd .vd-paper,
.yg.vd .vd-brochure[aria-expanded="true"] .vd-paper,
.yg.vd .vd-brochure:not([aria-expanded="true"]) .vd-paper{transform:translateY(-8px);transition:none}
.yg.vd .vd-leaf{transition:transform .72s cubic-bezier(.25,.65,.25,1);box-shadow:0 4px 8px #263d2610,0 16px 28px #263d261b}
.yg.vd .vd-face{outline-color:#cbd2c580;box-shadow:inset 1px 0 #fff9,inset -1px 0 #79847322}
.yg.vd .vd-left{transition-delay:.52s}
.yg.vd .vd-right{transition-delay:0s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-left{transition-delay:0s}
.yg.vd .vd-brochure[aria-expanded="true"] .vd-right{transition-delay:.52s}
.yg.vd .vd-fold-hint{font-size:10px;letter-spacing:.5px;color:#52654c}
@media(prefers-reduced-motion:reduce){.yg.vd .vd-leaf{transition:none!important;transition-delay:0s!important}}
`;
document.head.appendChild(yoggerVisualStyles);
content.addEventListener('click',event=>{
 const brochure=event.target.closest('.vd-brochure');
 if(brochure){brochure.setAttribute('data-vd-manual','true');const open=brochure.getAttribute('aria-expanded')!=='true';brochure.setAttribute('aria-expanded',String(open));brochure.setAttribute('aria-label',open?'Fold the Yogger brochure closed':'Unfold the Yogger brochure');const hint=content.querySelector('.vd-fold-hint');if(hint)hint.textContent=open?'Click to close ↙':'Click to unfold ↗';return;}
 const button=event.target.closest('[data-vd-scroll]');if(!button)return;const gallery=content.querySelector('.vd-store-gallery');if(gallery)gallery.scrollBy({left:Number(button.dataset.vdScroll)*gallery.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
});



function relaxLayeredPhones(frontFile,frontAlt,backFile,backAlt){
 return `<button class="rx-depth-pair" type="button" aria-pressed="false" aria-label="Switch the front phone screen"><span class="rx-phone"><img src="assets/${frontFile}" alt="${frontAlt}" loading="lazy" decoding="async"></span><span class="rx-phone"><img src="assets/${backFile}" alt="${backAlt}" loading="lazy" decoding="async"></span></button>`;
}
content.addEventListener('click',event=>{const pair=event.target.closest('.rx-depth-pair');if(pair)pair.setAttribute('aria-pressed',String(pair.getAttribute('aria-pressed')!=='true'));});
const relaxSquareStyles=document.createElement('style');
relaxSquareStyles.textContent=`
.yg.rx .rx-decision,.yg.rx .rx-decision-reverse{column-gap:60px;grid-template-columns:1fr 1.2fr}
.yg.rx .rx-decision-reverse{grid-template-columns:1.2fr 1fr}
.yg.rx .rx-decision>figure{position:relative;aspect-ratio:1;padding:0;display:grid;place-items:center;isolation:isolate;overflow:hidden;border-radius:12px;background:radial-gradient(ellipse at 48% 42%,#edf3ee 0%,#e1ece6 50%,#d7e6e2 100%)}
.yg.rx .rx-decision>figure>.rx-phone{width:40%;max-width:220px;margin:0;padding:2px;border:1px solid #31586160;border-radius:22px;box-shadow:0 7px 12px #14303912,0 18px 27px #1430391e}
.yg.rx .rx-decision>figure>.rx-phone img{border-radius:18px}
.yg.rx .rx-depth-pair{position:absolute;inset:0;display:block;width:100%;height:100%;padding:0;border:0;border-radius:inherit;background:transparent;cursor:pointer;color:inherit}
.yg.rx .rx-depth-pair:focus-visible{outline:2px solid #38696b;outline-offset:-5px}
.yg.rx .rx-depth-pair .rx-phone{position:absolute;display:block;max-width:none;margin:0;padding:2px;border:1px solid #31586160;border-radius:22px;background:#17353d;box-shadow:0 7px 12px #14303912,0 18px 27px #1430391e;transition:width .55s cubic-bezier(.2,.7,.2,1),left .55s cubic-bezier(.2,.7,.2,1),right .55s cubic-bezier(.2,.7,.2,1),top .55s cubic-bezier(.2,.7,.2,1),transform .55s cubic-bezier(.2,.7,.2,1),box-shadow .55s,z-index 0s .24s}
.yg.rx .rx-depth-pair .rx-phone img{width:100%;height:auto;border-radius:18px;display:block}
.yg.rx .rx-depth-pair .rx-phone:first-child{width:40%;left:15%;top:7%;transform:rotate(-4deg);z-index:2}
.yg.rx .rx-depth-pair .rx-phone:last-child{width:36%;right:15%;top:13%;transform:rotate(6deg);z-index:1;box-shadow:0 9px 18px #14303918}
.yg.rx .rx-depth-pair[aria-pressed="true"] .rx-phone:first-child{width:36%;left:15%;top:13%;transform:rotate(-6deg);z-index:1;box-shadow:0 9px 18px #14303918}
.yg.rx .rx-depth-pair[aria-pressed="true"] .rx-phone:last-child{width:40%;right:15%;top:7%;transform:rotate(4deg);z-index:2;box-shadow:0 7px 12px #14303912,0 18px 27px #1430391e}
@media(hover:hover) and (pointer:fine){.yg.rx .rx-depth-pair:hover .rx-phone:first-child{width:36%;left:15%;top:13%;transform:rotate(-6deg);z-index:1;box-shadow:0 9px 18px #14303918}.yg.rx .rx-depth-pair:hover .rx-phone:last-child{width:40%;right:15%;top:7%;transform:rotate(4deg);z-index:2;box-shadow:0 7px 12px #14303912,0 18px 27px #1430391e}}
@media(max-width:1000px){.yg.rx .rx-decision,.yg.rx .rx-decision-reverse{column-gap:48px}}
@media(max-width:700px){.yg.rx .rx-decision,.yg.rx .rx-decision-reverse{grid-template-columns:1fr;gap:26px}.yg.rx .rx-decision>figure{width:100%;max-width:500px;justify-self:center}.yg.rx .rx-depth-pair .rx-phone,.yg.rx .rx-decision>figure>.rx-phone{border-radius:18px}.yg.rx .rx-depth-pair .rx-phone img,.yg.rx .rx-decision>figure>.rx-phone img{border-radius:14px}}
@media(prefers-reduced-motion:reduce){.yg.rx .rx-depth-pair .rx-phone{transition:none}}
`;
document.head.appendChild(relaxSquareStyles);


let brochureScrollCleanup;
function setupBrochureScroll(){
 brochureScrollCleanup?.();brochureScrollCleanup=undefined;
 const brochure=content.querySelector('.vd-brochure');
 const stage=content.querySelector('.vd-print-stage');
 if(!brochure||!stage)return;
 let previousTop=dialog.scrollTop;
 const stop=()=>dialog.removeEventListener('scroll',onScroll);
 function onScroll(){
  if(brochure.getAttribute('data-vd-manual')==='true'){stop();return;}
  const top=dialog.scrollTop,down=top>previousTop;previousTop=top;
  if(!down)return;
  const bounds=stage.getBoundingClientRect(),viewport=dialog.getBoundingClientRect();
  const visible=Math.min(bounds.bottom,viewport.bottom)-Math.max(bounds.top,viewport.top+90);
  if(visible<Math.min(bounds.height*.35,180))return;
  brochure.setAttribute('aria-expanded','true');
  brochure.setAttribute('aria-label','Fold the Yogger brochure closed');
  const hint=content.querySelector('.vd-fold-hint');if(hint)hint.textContent='Click to close ↙';
  stop();
 }
 dialog.addEventListener('scroll',onScroll,{passive:true});
 brochureScrollCleanup=stop;
}

let yoggerObserver;
function setupYogger() {
  setupBrochureScroll();
  yoggerObserver?.disconnect();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  yoggerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('yg-pending');
        yoggerObserver.unobserve(entry.target);
      }
    });
  }, { root: dialog, threshold: 0.04 });
  content.querySelectorAll('.yg-reveal').forEach(element => {
    element.classList.add('yg-pending');
    yoggerObserver.observe(element);
  });
}

function visualFor(project){
 const source=document.querySelector(project.visual==='milestone'?'.milestone-phone':'.browser-mock').outerHTML;
 return '<div class="case-demo" style="'+(project.visual==='website'?'background:#2c3944':'')+'"><span class="demo-label" style="'+(project.visual==='website'?'color:white':'')+'">ILLUSTRATIVE INTERFACE DIRECTION</span>'+source+'</div>';
}
function openProject(key,trigger){if(key==='website')key='reports';const p=projects[key];if(!p)return;content.querySelectorAll('video').forEach(video=>video.pause());lastTrigger=trigger;
 yoggerObserver?.disconnect();
 if(key==='yogger'){content.innerHTML=renderYogger();}else if(key==='milestone'){content.innerHTML=renderMilestone();}else if(key==='tide'){content.innerHTML=renderTide();}else if(key==='marketplace'){content.innerHTML=renderMarketplace();}else if(key==='relax'){content.innerHTML=renderRelax();}else if(key==='chanel'){content.innerHTML=renderChanel();}else if(key==='reports'){content.innerHTML=renderYoggerVisual();}else if(p.pending){content.innerHTML=renderUpcomingProject(key);}else{
 content.innerHTML='<section class="case-intro"><p class="eyebrow">'+p.label+'</p><h1>'+p.title+'</h1><p class="lead">'+p.lead+'</p><div class="case-facts"><p><small>CONTRIBUTION</small>'+p.role+'</p><p><small>PLATFORM</small>'+p.type+'</p><p><small>FOCUS</small>Clarity · Hierarchy · Visual craft</p></div></section>'+visualFor(p)+p.sections.map(s=>'<section class="case-section"><div><p class="eyebrow">'+s[0]+'</p><h2>'+s[1]+'</h2></div><div><p>'+s[2]+'</p><h3>'+s[3]+'</h3><p>'+s[4]+'</p></div></section>').join('')+'<div class="case-end"><p class="eyebrow">KEEP EXPLORING</p><button data-next="'+(key==='yogger'?'milestone':key==='milestone'?'reports':'yogger')+'">Next project ↗</button></div>';
 }
 if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');dialog.scrollTop=0;document.querySelector('#close-case').focus();if(key==='yogger'||key==='milestone'){setupYogger();enablePreviewDragging();}else if(['tide','marketplace','relax','chanel','reports'].includes(key)){setupYogger();}history.replaceState(null,'','#project-'+key);
}
function closeProject(){brochureScrollCleanup?.();content.querySelectorAll('video').forEach(video=>video.pause());yoggerObserver?.disconnect();dialog.close();document.body.classList.remove('dialog-open');history.replaceState(null,'','#work');lastTrigger?.focus();}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project,b)));
document.querySelector('#close-case').addEventListener('click',closeProject);
document.querySelector('#dialog-home').addEventListener('click',e=>{e.preventDefault();closeProject()});
dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject()});
content.addEventListener('click',e=>{
 const sectionLink=e.target.closest('.yg-nav a');
 if(sectionLink){e.preventDefault();const target=content.querySelector(sectionLink.getAttribute('href'));if(target){target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});content.querySelectorAll('.yg-nav a').forEach(a=>a.removeAttribute('aria-current'));sectionLink.setAttribute('aria-current','location');}return;}
 const next=e.target.closest('[data-next]');if(next)openProject(next.dataset.next,lastTrigger);
});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!reduce){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pending');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section-head,.project,.about-copy,.approach>div').forEach(el=>{el.classList.add('reveal','pending');io.observe(el)})}
let ticking=false;window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{const total=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(total>0?scrollY/total*100:0)+'%';ticking=false});ticking=true}},{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();
const initial=location.hash.replace('#project-','');if(projects[initial]||initial==='website')openProject(initial);

// Editorial rhythm shared by the three campaign and publication case studies.
const remainingCaseStyles = document.createElement('style');
remainingCaseStyles.textContent = `
.yg:is(.td,.fm,.cn){--yg-ink:#2c3944;--yg-green:#7f8f6a;--yg-paper:#f7f4ef;background:var(--yg-paper)}
.yg:is(.td,.fm,.cn) h1 em,.yg:is(.td,.fm,.cn) h2 em{color:#7f8f6a}
.yg.cn h1,.yg.cn h2{font-family:Manrope,Arial,sans-serif;font-weight:500}
.yg.cn h1 em,.yg.cn h2 em{color:#9e2f50}
.yg:is(.td,.fm,.cn) .yg-intro{padding-bottom:38px}
.yg:is(.td,.fm,.cn) .yg-topline{align-items:flex-start}
.yg:is(.td,.fm,.cn) .yg-project-type{text-align:right;max-width:45%;line-height:1.7}
.yg:is(.td,.fm,.cn) .yg-facts{grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;padding-top:26px;margin-top:38px}
.yg:is(.td,.fm,.cn) .yg-facts p:last-child{grid-column:auto}
.yg:is(.td,.fm,.cn) .case-editorial{display:grid;grid-template-columns:1fr 1.2fr;align-items:start;gap:64px;padding-block:72px}
.yg:is(.td,.fm,.cn) .case-editorial>div{min-width:0}
.yg:is(.td,.fm,.cn) .case-editorial h2{font-size:clamp(30px,3.65vw,48px);line-height:1.16;margin:0;text-wrap:balance}
.yg:is(.td,.fm,.cn) .case-editorial .yg-body p{margin:0 0 18px}
.yg:is(.td,.fm,.cn) .case-editorial .yg-body p:last-child{margin-bottom:0}
.yg:is(.td,.fm,.cn) .yg-chapter{padding-block:64px;border-color:#d6d3cf}
.yg:is(.td,.fm,.cn) .yg-chapter>.case-editorial{padding-top:0;padding-bottom:36px}
.yg:is(.td,.fm,.cn) .yg-reflection{background:#e8ecdf;padding-block:0}
.yg:is(.td,.fm,.cn) .yg-reflection>.yg-wrap{display:block}
.yg.cn .yg-reflection{background:#f0e7e5}
.yg:is(.td,.fm,.cn) .yg-nav a{font-weight:600}
.yg:is(.td,.fm,.cn) .yg-end button{background:#2c3944}
.yg:is(.fm,.cn) .vp-switch button{border-color:#b8c1ca;color:#52606d}
.yg:is(.fm,.cn) .vp-switch button[aria-pressed="true"]{background:#2c3944;border-color:#2c3944;color:#fff}
.yg.td .td-concept{padding:0 0 36px;background:#e8ecdf;color:#2c3944}
.yg.td .td-concept h2,.yg.td .td-route span{color:#2c3944}
.yg.td .td-concept h2 em,.yg.td .td-concept .yg-kicker,.yg.td .td-route small{color:#526447}
.yg.td .td-concept .case-editorial{padding-bottom:36px}
.yg.td .td-route{border-color:#c4ccb7;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}
.yg.td .td-hero figcaption{display:block;text-align:center}
.yg.td .td-hero figcaption>span{display:block}
.yg.td .td-hero figcaption>span+span{margin-top:4px}
.yg.td .td-touchpoint-grid figcaption span{color:#526447}
.yg.td .td-signage-layout{grid-template-columns:1fr 1.2fr;gap:64px;align-items:center}
.yg.td .td-outcome{border-top:1px solid #d6d3cf}
.yg.fm .fm-display{background:#e4e7eb}
.yg.fm .fm-merch-grid,.yg.cn .cn-objects{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
.yg.fm .fm-notepad,.yg.cn .cn-objects .vp-figure:last-child{padding-top:0}
.yg.fm .fm-merch-grid a{aspect-ratio:1.1;background:#f1f3f5}
.yg.fm .fm-merch-grid img{width:100%;height:100%;object-fit:cover}
.yg.cn .cn-spread-header{justify-content:flex-end;margin-bottom:20px}
.yg.cn .cn-spread a{border-radius:10px}
.yg.cn .cn-detail-notes{gap:28px}
.yg.cn .cn-objects a{aspect-ratio:1.1;background:#f1f3f5}
.yg.cn .cn-objects img{width:100%;height:100%;object-fit:cover}
@media(max-width:900px){
.yg:is(.td,.fm,.cn) .case-editorial,.yg.td .td-signage-layout{gap:36px}
.yg:is(.td,.fm,.cn) .yg-facts{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 32px}
}
@media(max-width:700px){
.yg:is(.td,.fm,.cn) .yg-topline{display:block}
.yg:is(.td,.fm,.cn) .yg-project-type{display:block;text-align:left;max-width:100%;margin-top:12px}
.yg:is(.td,.fm,.cn) .yg-intro{padding-top:42px;padding-bottom:28px}
.yg:is(.td,.fm,.cn) .case-editorial,.yg.td .td-signage-layout{grid-template-columns:1fr;gap:24px}
.yg:is(.td,.fm,.cn) .case-editorial{padding-block:44px}
.yg:is(.td,.fm,.cn) .case-editorial h2{font-size:34px}
.yg:is(.td,.fm,.cn) .yg-chapter{padding-block:44px}
.yg:is(.td,.fm,.cn) .yg-chapter>.case-editorial{padding-bottom:28px}
.yg.td .td-route{grid-template-columns:1fr;gap:20px}
.yg.fm .fm-merch-grid,.yg.cn .cn-objects{grid-template-columns:1fr}
.yg.cn .cn-spread-header{align-items:flex-start}
.yg.cn .cn-detail-notes{grid-template-columns:1fr;gap:20px}
}

/* Tide and Marketplace: Nicole's blue-grey and light-grey palette. */
.yg:is(.td,.fm){--yg-green:#3e4a56;--yg-sage:#e4e7eb}
.yg:is(.td,.fm) h1 em,.yg:is(.td,.fm) h2 em{color:#3e4a56}
.yg:is(.td,.fm) .yg-kicker{color:#52606d}
.yg:is(.td,.fm) .yg-reflection{background:#f1f3f5}
.yg:is(.td,.fm) .yg-facts,.yg:is(.td,.fm) .yg-chapter{border-color:#e4e7eb}
.yg:is(.td,.fm) .yg-nav a:hover,.yg:is(.td,.fm) .yg-nav a[aria-current="location"]{color:#3e4a56}
.yg.td .td-concept{background:#f1f3f5}
.yg.td .td-concept h2 em{color:#3e4a56}
.yg.td .td-concept .yg-kicker,.yg.td .td-route small{color:#52606d}
.yg.td .td-route{border-color:#e4e7eb}
.yg.td .td-touchpoint-grid figcaption span{color:#52606d}
.yg.td .td-color-notes strong{color:#3e4a56}
.yg.td .td-outcome{border-color:#e4e7eb}
.yg.fm .fm-display{background:#f1f3f5}
.yg:is(.td,.fm) .vp-switch button{border-color:#b8c1ca;color:#52606d}
.yg:is(.td,.fm) .vp-switch button[aria-pressed="true"]{background:#3e4a56;border-color:#3e4a56;color:#fff}
`;
document.head.appendChild(remainingCaseStyles);
