const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./labs-cs5JRE3v.js","./compiler-core-CJAOg_gs.js","./dsp-circuits-Bh-KoKj1.js","./studio-patchbay-Cckckk0A.js","./presets-catalog-CyVabtAz.js","./inverseDeck-DAGJmhdy.js","./features-B0RuKLvA.js","./stageshow-CiHySH72.js"])))=>i.map(i=>d[i]);
import{A as tt}from"./presets-catalog-CyVabtAz.js";import{g as O,M as V,c as ve,b as Se,i as we}from"./compiler-core-CJAOg_gs.js";import{N as xe,D as At,b as re,S as ce,p as le,s as mt,P as Me}from"./studio-patchbay-Cckckk0A.js";import{aY as lt,a$ as Ce,aP as Le,bj as Ie,bm as Te,b4 as Rt,aQ as Ee,aR as Pe}from"./dsp-circuits-Bh-KoKj1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const Ae="modulepreload",Re=function(c,t){return new URL(c,t).href},Nt={},it=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");i=a(e.map(h=>{if(h=Re(h,s),h in Nt)return;Nt[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const g=o[f];if(g.href===h&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Ae,u||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};function Ne(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function ft(c){return{patch:Ne(c.patch),sceneId:c.sceneId,sceneName:c.sceneName,dirty:c.dirty}}function De(c,t){if(c.modules.length!==t.modules.length||c.cables.length!==t.cables.length)return!1;for(let e=0;e<c.modules.length;e++)if(c.modules[e].id!==t.modules[e].id||c.modules[e].kind!==t.modules[e].kind)return!1;for(let e=0;e<c.cables.length;e++){const s=c.cables[e],i=t.cables[e];if(s.id!==i.id||s.fromModule!==i.fromModule||s.fromPort!==i.fromPort||s.toModule!==i.toModule||s.toPort!==i.toPort)return!1}return!0}class Be{constructor(t=200,e=700){this.limit=t,this.coalesceMs=e}undoStack=[];redoStack=[];lastKey="";lastAt=0;get undoDepth(){return this.undoStack.length}get redoDepth(){return this.redoStack.length}record(t,e="",s=performance.now()){if(e&&e===this.lastKey&&s-this.lastAt<this.coalesceMs&&this.undoStack.length>0){this.lastAt=s;return}this.undoStack.push(ft(t)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack.length=0,this.lastKey=e,this.lastAt=s}undo(t){const e=this.undoStack.pop();return e?(this.redoStack.push(ft(t)),this.lastKey="",e):null}redo(t){const e=this.redoStack.pop();return e?(this.undoStack.push(ft(t)),this.lastKey="",e):null}clear(){this.undoStack.length=0,this.redoStack.length=0,this.lastKey=""}}const Oe=232,Fe={bpm:120,swing:0,width:0,run:1},He=[{kind:"moog904a",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"ms20wdf",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"svf",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"poly4",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"plate2d",port:"nlCV",gain:.5,what:"tension"},{kind:"transducer",port:"blCV",gain:1.5,what:"force factor"},{kind:"vactrol",port:"cv",gain:.5,what:"level"},{kind:"vca",port:"cv",gain:.4,what:"level"},{kind:"wavefolder",port:"driveCV",gain:.6,what:"drive"}],$e=[{kind:"wavefolder",port:"driveCV",gain:.9,what:"drive"},{kind:"osc",port:"shapeCV",gain:.4,what:"shape"},{kind:"binaural",port:"aiMod",gain:.75,what:"orbit"},{kind:"moog904a",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"ms20wdf",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"svf",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"poly4",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"poly4",port:"resCV",gain:.2,what:"resonance"},{kind:"plate2d",port:"nlCV",gain:.6,what:"tension"},{kind:"transducer",port:"blCV",gain:2,what:"force factor"},{kind:"reverb",port:"mixCV",gain:.25,what:"mix"},{kind:"moog904a",port:"resCV",gain:.2,what:"resonance"},{kind:"ms20wdf",port:"resCV",gain:.2,what:"peak"},{kind:"bbd",port:"fbCV",gain:.12,what:"feedback"}];function j(c){return c.label||c.id}function Dt(c){const t={};for(const e of V[c].params)t[e.id]=e.defaultValue;return t}function gt(c,t){let e=c;for(let s=2;t.has(e);s++)e=`${c}${s}`;return t.add(e),e}function qe(c){const t=new Map;for(const i of c.cables){const n=t.get(i.toModule);n?n.push(i.fromModule):t.set(i.toModule,[i.fromModule])}const e=new Set,s=c.modules.filter(i=>i.kind==="output").map(i=>i.id);for(const i of s)e.add(i);for(;s.length>0;){const i=s.shift();for(const n of t.get(i)??[])e.has(n)||(e.add(n),s.push(n))}return e}function Ge(c,t){const e={...c,modules:c.modules.map(v=>({...v,params:{...v.params}})),cables:c.cables.map(v=>({...v}))},s=new Map(e.modules.map(v=>[v.id,v])),i=new Set(e.modules.map(v=>v.id)),n=new Set(e.cables.map(v=>v.id)),a=qe(e),o=new Set(e.cables.map(v=>`${v.toModule}:${v.toPort}`)),r=[],l=[];let h="",u="eoc",p=null;const b=new Map;for(const v of e.cables){if(v.toPort!=="clk"||!s.has(v.fromModule))continue;const y=`${v.fromModule}
${v.fromPort}`;b.set(y,(b.get(y)??0)+1)}let d=0;for(const[v,y]of b)y>d&&(d=y,[h,u]=v.split(`
`));if(!h){const v=e.modules.find(y=>y.kind==="clock");v&&(h=v.id,u="x16")}if(!h){let v=1/0;for(const y of e.modules){if(y.kind!=="dusg"||O(y,"cycle")<.5)continue;const E=O(y,"riseMs")+O(y,"fallMs");if(E<30||E>2e3)continue;const C=Math.abs(Math.log(E/125));C<v&&(v=C,h=y.id,u="eoc")}}let f=t.x;if(!h){p=gt("aiClock",i),h=p,u="x16";const v={id:p,kind:"clock",label:"AI Clock · 120 BPM",x:t.x,y:t.y,params:{...Dt("clock"),...Fe}};e.modules.push(v),s.set(v.id,v),f=t.x+Oe}const g=gt("aiTeammate",i),k=Dt("neural");for(const v of xe)k[v]=At.params[v];k.brain=1;const m={id:g,kind:"neural",label:"AI Teammate",x:f,y:t.y,params:k};e.modules.push(m),s.set(g,m);const L=(v,y,E,C,x)=>{const A={id:gt(`ai_${E===g?C:y}`,n),fromModule:v,fromPort:y,toModule:E,toPort:C,gain:x};e.cables.push(A),o.add(`${E}:${C}`)},M=j(s.get(h));L(h,u,g,"clk",1),r.push(`CLK ← ${M}`);const P=e.modules.find(v=>v.kind==="output");if(P){let v=c.cables.find(y=>y.toModule===P.id&&y.toPort==="inL")??c.cables.find(y=>y.toModule===P.id);for(let y=0;v&&y<4;y++){const E=s.get(v.fromModule)?.kind;if(E!=="mastering"&&E!=="monitor"&&E!=="binaural")break;const C=v.fromModule;v=c.cables.find(x=>x.toModule===C&&(x.toPort==="inL"||x.toPort==="in"))}v&&s.has(v.fromModule)&&(L(v.fromModule,v.fromPort,g,"in",.85),r.push(`LISTEN ← ${j(s.get(v.fromModule))}`))}const S=c.modules.find(v=>v.kind==="osc"&&a.has(v.id)&&O(v,"freq")>=20&&!o.has(`${v.id}:expFM`));if(S){const v=s.get(S.id);O(v,"expDepth")<.05&&(v.params.expDepth=1),L(g,"pitch",S.id,"expFM",1),r.push(`PITCH → ${j(S)}`)}else l.push("PITCH");const T=c.modules.find(v=>v.kind==="dusg"&&a.has(v.id)&&v.id!==h&&O(v,"cycle")<.5&&!o.has(`${v.id}:trig`)),w=c.modules.find(v=>v.kind==="vactrol"&&a.has(v.id)&&!o.has(`${v.id}:cv`));T?(L(g,"gate",T.id,"trig",1),r.push(`GATE → ${j(T)}`)):w?(L(g,"gate",w.id,"cv",1.25),r.push(`GATE → ${j(w)}`)):l.push("GATE");const R=new Set,I=(v,y,E)=>{for(const C of E){const x=c.modules.find(A=>A.kind===C.kind&&a.has(A.id)&&!R.has(`${A.id}:${C.port}`)&&(C.kind!=="osc"||O(A,"freq")>=20));if(x){R.add(`${x.id}:${C.port}`),L(g,v,x.id,C.port,C.gain),r.push(`${y} → ${j(x)} ${C.what}`);return}}l.push(y)};return I("accent","ACC",He),I("mod","MOD",$e),{patch:e,aiModuleId:g,addedClockId:p,characterLabel:At.label,clockName:M,links:r,leftFree:l}}const _e=Math.SQRT1_2,at=5,bt=2049;function Bt(){return lt.map(c=>({id:c.id,label:c.label,hint:c.hint}))}function Ot(c){return typeof c=="string"&&lt.some(t=>t.id===c)}function Ft(c){return lt.find(t=>t.id===c)??lt[0]}function D(c,t,e,s){c.cancelScheduledValues(e),s<=0?c.setValueAtTime(t,e):c.setTargetAtTime(t,e,s)}function Ve(){const c=new Float32Array(new ArrayBuffer(bt*4));for(let t=0;t<bt;t++){const e=t/(bt-1)*2-1,s=Math.abs(e);c[t]=Ee*e*s+Pe*s}return c}class Ue{input;output;ctx;dryGain;wetGain;hp;lowShelf;bell;highShelf;splitter;midSum;sideSum;sideInvertIn;sideHp;sideWidth;sideInvertOut;busL;busR;enhLp;enhShaper;enhHp;enhGain;xfLpL;xfLpR;xfSelfL;xfSelfR;xfCrossL;xfCrossR;merger;trim;currentTarget;amount=1;crossfeed=.5;listeners=new Set;disposed=!1;constructor(t,e="flat"){this.ctx=t,this.currentTarget=e;const s=()=>{const a=t.createGain();return a.channelCount=2,a.channelCountMode="explicit",a},i=(a=1)=>{const o=t.createGain();return o.channelCount=1,o.channelCountMode="explicit",o.gain.value=a,o},n=(a,o,r=_e)=>{const l=t.createBiquadFilter();return l.type=a,l.frequency.value=o,l.Q.value=r,l};this.input=s(),this.output=s(),this.dryGain=t.createGain(),this.wetGain=t.createGain(),this.hp=n("highpass",at),this.lowShelf=n("lowshelf",100),this.bell=n("peaking",1e3,1),this.highShelf=n("highshelf",8e3),this.splitter=t.createChannelSplitter(2),this.midSum=i(.5),this.sideSum=i(.5),this.sideInvertIn=i(-1),this.sideHp=n("highpass",at),this.sideWidth=i(1),this.sideInvertOut=i(-1),this.busL=i(1),this.busR=i(1),this.enhLp=n("lowpass",Ie),this.enhShaper=t.createWaveShaper(),this.enhShaper.curve=Ve(),this.enhShaper.oversample="none",this.enhHp=n("highpass",Te),this.enhGain=i(0),this.xfLpL=n("lowpass",Rt,.5),this.xfLpR=n("lowpass",Rt,.5),this.xfSelfL=i(0),this.xfSelfR=i(0),this.xfCrossL=i(0),this.xfCrossR=i(0),this.merger=t.createChannelMerger(2),this.trim=t.createGain(),this.input.connect(this.dryGain),this.dryGain.connect(this.output),this.input.connect(this.hp),this.hp.connect(this.lowShelf),this.lowShelf.connect(this.bell),this.bell.connect(this.highShelf),this.highShelf.connect(this.splitter),this.splitter.connect(this.midSum,0),this.splitter.connect(this.midSum,1),this.splitter.connect(this.sideSum,0),this.splitter.connect(this.sideInvertIn,1),this.sideInvertIn.connect(this.sideSum),this.sideSum.connect(this.sideHp),this.sideHp.connect(this.sideWidth),this.midSum.connect(this.busL),this.midSum.connect(this.busR),this.sideWidth.connect(this.busL),this.sideWidth.connect(this.sideInvertOut),this.sideInvertOut.connect(this.busR),this.midSum.connect(this.enhLp),this.enhLp.connect(this.enhShaper),this.enhShaper.connect(this.enhHp),this.enhHp.connect(this.enhGain),this.enhGain.connect(this.busL),this.enhGain.connect(this.busR),this.busL.connect(this.merger,0,0),this.busR.connect(this.merger,0,1),this.busL.connect(this.xfLpL),this.busR.connect(this.xfLpR),this.xfLpL.connect(this.xfSelfL),this.xfSelfL.connect(this.merger,0,0),this.xfLpR.connect(this.xfSelfR),this.xfSelfR.connect(this.merger,0,1),this.xfLpL.connect(this.xfCrossL),this.xfCrossL.connect(this.merger,0,1),this.xfLpR.connect(this.xfCrossR),this.xfCrossR.connect(this.merger,0,0),this.merger.connect(this.trim),this.trim.connect(this.wetGain),this.wetGain.connect(this.output),this.applyVoicing(0)}get target(){return this.currentTarget}get active(){return this.currentTarget!=="flat"&&this.amount>0}getStatus(){const t=Ft(this.currentTarget);return{target:t.id,label:t.label,hint:t.hint,active:this.active,amount:this.amount,crossfeed:this.crossfeed}}setTarget(t,e=.02){if(this.disposed)return;const s=this.currentTarget;this.currentTarget=t,this.applyVoicing(Math.max(0,e)),s!==t&&this.emitChange()}setAmount(t,e=.02){this.disposed||!Number.isFinite(t)||(this.amount=Math.max(0,Math.min(1,t)),this.applyVoicing(Math.max(0,e)),this.emitChange())}setCrossfeed(t,e=.02){this.disposed||!Number.isFinite(t)||(this.crossfeed=Math.max(0,Math.min(1,t)),this.applyVoicing(Math.max(0,e)),this.emitChange())}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){if(this.disposed)return;this.disposed=!0,this.listeners.clear();const t=[this.input,this.dryGain,this.wetGain,this.hp,this.lowShelf,this.bell,this.highShelf,this.splitter,this.midSum,this.sideSum,this.sideInvertIn,this.sideHp,this.sideWidth,this.sideInvertOut,this.busL,this.busR,this.enhLp,this.enhShaper,this.enhHp,this.enhGain,this.xfLpL,this.xfLpR,this.xfSelfL,this.xfSelfR,this.xfCrossL,this.xfCrossR,this.merger,this.trim,this.output];for(const e of t)try{e.disconnect()}catch{}}applyVoicing(t){const e=Ft(this.currentTarget),s=this.amount,i=this.ctx.currentTime,n=this.active?1:0;D(this.dryGain.gain,1-n,i,t),D(this.wetGain.gain,n,i,t),D(this.hp.frequency,e.hpHz>0?e.hpHz:at,i,t),D(this.lowShelf.frequency,e.lsHz,i,t),D(this.lowShelf.gain,e.lsDb*s,i,t),D(this.bell.frequency,e.bellHz,i,t),D(this.bell.Q,e.bellQ,i,t),D(this.bell.gain,e.bellDb*s,i,t),D(this.highShelf.frequency,e.hsHz,i,t),D(this.highShelf.gain,e.hsDb*s,i,t),D(this.sideHp.frequency,e.monoHz>0&&s>0?e.monoHz:at,i,t),D(this.sideWidth.gain,1+(e.width-1)*s,i,t),D(this.enhGain.gain,Ce*e.enh*s,i,t);const a=Le*this.crossfeed*e.xfeed*s,o=1/(1+a);D(this.xfSelfL.gain,-(1-o),i,t),D(this.xfSelfR.gain,-(1-o),i,t),D(this.xfCrossL.gain,o*a,i,t),D(this.xfCrossR.gain,o*a,i,t),D(this.trim.gain,Math.pow(10,e.trimDb*s/20),i,t)}emitChange(){const t=this.getStatus();for(const e of this.listeners)try{e(t)}catch{}}}const yt="kirchhoff_user_scenes_v1",kt="kirchhoff_draft_scene_v1",vt="kirchhoff_scene",We=3600*24*365;function nt(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function Ht(c,t,e=We){if(!(typeof document>"u"))try{document.cookie=`${encodeURIComponent(c)}=${encodeURIComponent(t)}; Max-Age=${e}; Path=/; SameSite=Lax`}catch{}}function ze(c){if(typeof document>"u"||!document.cookie)return null;const t=`${encodeURIComponent(c)}=`,e=document.cookie.split(";");for(const s of e){const i=s.trim();if(i.startsWith(t))try{return decodeURIComponent(i.slice(t.length))}catch{return null}}return null}function $t(c){try{return typeof localStorage<"u"?localStorage.getItem(c):null}catch{return null}}function St(c,t){try{return typeof localStorage>"u"?!1:(localStorage.setItem(c,t),!0)}catch{return!1}}function Ke(c){try{typeof localStorage<"u"&&localStorage.removeItem(c)}catch{}}function Ct(c){let t;try{t=JSON.parse(c)}catch(l){return{ok:!1,error:`Invalid JSON: ${l instanceof Error?l.message:String(l)}`}}if(!t||typeof t!="object")return{ok:!1,error:"Scene file must contain a JSON object."};const e="scene"in t&&t.scene&&typeof t.scene=="object"?t.scene:t;if(!Array.isArray(e.modules)||!Array.isArray(e.cables))return{ok:!1,error:'Scene JSON must include "modules" and "cables" arrays.'};const s=new Set(Object.keys(V)),i=new Set,n=[];for(const l of e.modules){if(!l||typeof l!="object")return{ok:!1,error:"Invalid module entry in scene JSON."};const h=l,u=typeof h.id=="string"&&h.id.trim()?h.id.trim():"",p=typeof h.kind=="string"?h.kind:"";if(!u||i.has(u))return{ok:!1,error:`Missing or duplicate module id "${u}".`};if(!s.has(p))return{ok:!1,error:`Unknown module kind "${p}" in module "${u}".`};i.add(u);const b={};if(h.params&&typeof h.params=="object")for(const[d,f]of Object.entries(h.params))typeof f=="number"&&Number.isFinite(f)&&(b[d]=f);n.push({id:u,kind:p,label:typeof h.label=="string"&&h.label.trim()?h.label.trim():u,x:typeof h.x=="number"&&Number.isFinite(h.x)?h.x:40,y:typeof h.y=="number"&&Number.isFinite(h.y)?h.y:40,params:b})}if(!n.some(l=>l.kind==="output"))return{ok:!1,error:'Scene must include an "output" module.'};const a=[];for(let l=0;l<e.cables.length;l++){const h=e.cables[l];if(!h||typeof h!="object")continue;const u=h,p=typeof u.fromModule=="string"?u.fromModule:"",b=typeof u.toModule=="string"?u.toModule:"",d=typeof u.fromPort=="string"?u.fromPort:"",f=typeof u.toPort=="string"?u.toPort:"";!i.has(p)||!i.has(b)||!d||!f||a.push({id:typeof u.id=="string"&&u.id.trim()?u.id.trim():`c${l+1}`,fromModule:p,fromPort:d,toModule:b,toPort:f,gain:typeof u.gain=="number"&&Number.isFinite(u.gain)?u.gain:1})}const o=typeof e.name=="string"&&e.name.trim()?e.name.trim():"Imported Scene";return{ok:!0,patch:{id:typeof e.id=="string"&&e.id.trim()?e.id.trim():`user-${Date.now().toString(36)}`,name:o,description:typeof e.description=="string"?e.description:"User scene",sampleRate:typeof e.sampleRate=="number"&&e.sampleRate>=22050?e.sampleRate:48e3,modules:n,cables:a}}}class je{draftTimer=null;listUserScenes(){const t=$t(yt);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.filter(s=>!!(s&&typeof s.id=="string"&&s.patch&&Array.isArray(s.patch.modules))).sort((s,i)=>i.savedAt-s.savedAt):[]}catch{return[]}}saveUserScene(t,e,s){const i=this.listUserScenes(),n=(e??t.name??"Untitled Scene").trim()||"Untitled Scene",a=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,32),o=s||`user-${a||"scene"}-${Date.now().toString(36).slice(-4)}`,r=nt(t);r.id=o,r.name=n;const l={id:o,name:n,savedAt:Date.now(),patch:r},h=i.filter(u=>u.id!==o);return h.unshift(l),St(yt,JSON.stringify(h.slice(0,64))),this.rememberActiveSceneId(o),this.saveDraftImmediate(r,o,!1),l}deleteUserScene(t){const e=this.listUserScenes().filter(s=>s.id!==t);St(yt,JSON.stringify(e)),this.getRememberedSceneId()===t&&Ht(vt,"",0)}rememberActiveSceneId(t){Ht(vt,t)}getRememberedSceneId(){const t=ze(vt);return t||(this.loadDraft()?.basePresetId??null)}scheduleDraftSave(t,e,s){this.draftTimer!==null&&clearTimeout(this.draftTimer);const i=nt(t);this.draftTimer=setTimeout(()=>{this.draftTimer=null,this.saveDraftImmediate(i,e,s)},320)}saveDraftImmediate(t,e,s){const i={basePresetId:e,savedAt:Date.now(),dirty:s,patch:nt(t)};St(kt,JSON.stringify(i)),e&&this.rememberActiveSceneId(e)}loadDraft(){const t=$t(kt);if(!t)return null;try{const e=JSON.parse(t);if(!e||!e.patch||!Array.isArray(e.patch.modules))return null;const s=Ct(JSON.stringify(e.patch));return s.ok?{basePresetId:typeof e.basePresetId=="string"?e.basePresetId:"",savedAt:typeof e.savedAt=="number"?e.savedAt:Date.now(),dirty:!!e.dirty,patch:s.patch}:null}catch{return null}}clearDraft(){this.draftTimer!==null&&(clearTimeout(this.draftTimer),this.draftTimer=null),Ke(kt)}exportSceneToFile(t,e){const s={format:"kirchhoff-scene",version:1,exportedAt:new Date().toISOString(),scene:nt(t)},n=`${(e??t.name??t.id??"scene").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"kirchhoff-scene"}.kirchhoff.json`,a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),o=URL.createObjectURL(a),r=document.createElement("a");return r.href=o,r.download=n,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3),n}async importSceneFromFile(t){try{const e=await t.text();return Ct(e)}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}}const ht="scene",Ye=1;function qt(c){let t="";for(let s=0;s<c.length;s+=32768)t+=String.fromCharCode(...c.subarray(s,s+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Xe(c){const t=c.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t+"=".repeat((4-t.length%4)%4)),s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}async function he(c,t){const e=new Blob([c]).stream(),s=await new Response(e.pipeThrough(t)).arrayBuffer();return new Uint8Array(s)}function de(c){const t=c.startsWith("#")?c.slice(1):c;for(const e of t.split("&"))if(e.startsWith(`${ht}=`))return e.slice(ht.length+1);return null}function ue(c){return de(c)!==null}async function Gt(c){const t=new TextEncoder().encode(JSON.stringify({v:Ye,scene:c}));if(typeof CompressionStream<"u")try{const e=new CompressionStream("deflate-raw");return`${ht}=z.${qt(await he(t,e))}`}catch{}return`${ht}=j.${qt(t)}`}async function Qe(c){const t=de(c);if(t===null)return null;const e=t.indexOf("."),s=e>0?t.slice(0,e):"",i=e>0?t.slice(e+1):"";try{let n=Xe(i);if(s==="z"){if(typeof DecompressionStream>"u")return{ok:!1,error:"This browser cannot open compressed scene links."};const a=new DecompressionStream("deflate-raw");n=await he(n,a)}else if(s!=="j")return{ok:!1,error:"Unrecognised scene link format."};return Ct(new TextDecoder().decode(n))}catch{return{ok:!1,error:"the link is damaged or incomplete."}}}function Je(c){const t=new URL(window.location.href);return t.hash=c,t.toString()}function Ze(c){window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${c}`)}function _t(){ue(window.location.hash)&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`)}class ts{jamBias=0;lastTweakMs=0;timer=null;getPatch;applyJamBias;onStatus;constructor(t){this.getPatch=t.getPatch,this.applyJamBias=t.applyJamBias,this.onStatus=t.onStatus}notifyParamEdit(t,e,s,i){if(e==="jamBias"||e==="teammate")return;const a=this.getPatch().modules.find(u=>u.id===t);if(!a)return;const r=V[a.kind]?.params.find(u=>u.id===e),l=r?Math.max(1e-6,r.max-r.min):1;let h=(i-s)/l;if(r?.scale==="log"&&r.min>0&&s>0&&i>0){const u=Math.log(r.max/r.min);u>1e-6&&(h=Math.log(i/s)/u)}Math.abs(h)<1e-4||(r?.scale==="discrete"&&(h=h>0?.25:-.18),this.injectImpulse(h*1.45))}notifyCableEdit(t,e){const s=(e-t)*.5;Math.abs(s)<.001||this.injectImpulse(s)}reset(){this.jamBias=0,this.stopTimer(),this.broadcast()}getStatus(){const t=this.getPatch().modules.filter(i=>i.kind==="neural").length,e=Math.abs(this.jamBias);let s="Holding pocket";return e>.55?s=this.jamBias>0?"Counter-groove":"Breakdown space":e>.14&&(s=this.jamBias>0?"Building with you":"Pulling back"),{active:t>0&&e>.04,jamBias:this.jamBias,modeLabel:s,neuralCount:t}}dispose(){this.stopTimer()}injectImpulse(t){if(!this.getPatch().modules.some(n=>n.kind==="neural"))return;const i=Math.max(-.45,Math.min(.45,t));this.jamBias=Math.max(-1,Math.min(1,this.jamBias*.88+i)),this.lastTweakMs=performance.now(),this.pushToNeuralNodes(),this.ensureTimer()}ensureTimer(){this.timer===null&&(this.timer=setInterval(()=>{if(performance.now()-this.lastTweakMs>700){if(this.jamBias*=.9,Math.abs(this.jamBias)<.01){this.jamBias=0,this.pushToNeuralNodes(),this.stopTimer();return}this.pushToNeuralNodes()}},120))}stopTimer(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}pushToNeuralNodes(){const t=this.getPatch();for(const e of t.modules)e.kind==="neural"&&this.applyJamBias(e.id,this.jamBias);this.broadcast()}broadcast(){this.onStatus&&this.onStatus(this.getStatus())}}const wt={off:{dryGain:1,wetGain:0,directGain:.84,presenceGainDb:0,presenceFreqHz:2200,crossfeedItdSec:28e-5,headShadowHz:700,headShadowQ:.65,crossfeedGain:.32,roomDelayLSec:.0049,roomDelayRSec:.0064,roomLpfHz:3e3,roomGain:.06,sideLiftGain:0},headphones:{dryGain:0,wetGain:1,directGain:.84,presenceGainDb:1.2,presenceFreqHz:2200,crossfeedItdSec:28e-5,headShadowHz:700,headShadowQ:.65,crossfeedGain:.32,roomDelayLSec:.0049,roomDelayRSec:.0064,roomLpfHz:3e3,roomGain:.06,sideLiftGain:0},"wide-3d":{dryGain:0,wetGain:1,directGain:.9,presenceGainDb:1.8,presenceFreqHz:2400,crossfeedItdSec:38e-5,headShadowHz:950,headShadowQ:.7,crossfeedGain:.24,roomDelayLSec:.0056,roomDelayRSec:.0074,roomLpfHz:2600,roomGain:.115,sideLiftGain:-.16}};function N(c,t,e,s){c.cancelScheduledValues(e),s<=0?c.setValueAtTime(t,e):c.setTargetAtTime(t,e,s)}class es{input;output;ctx;dryGain;wetGain;splitter;merger;presenceL;presenceR;directGainL;directGainR;xDelayL;xDelayR;xLpfL;xLpfR;xGainL;xGainR;roomDelayL;roomDelayR;roomLpfL;roomLpfR;roomGainL;roomGainR;sideHpL;sideHpR;sideGainL;sideGainR;currentMode;activeModeMemory;listeners=new Set;disposed=!1;constructor(t,e="off"){this.ctx=t,this.currentMode=e,this.activeModeMemory=e==="off"?"headphones":e,this.input=t.createGain(),this.input.channelCount=2,this.input.channelCountMode="explicit",this.output=t.createGain(),this.output.channelCount=2,this.output.channelCountMode="explicit",this.dryGain=t.createGain(),this.wetGain=t.createGain(),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.presenceL=t.createBiquadFilter(),this.presenceL.type="highshelf",this.presenceR=t.createBiquadFilter(),this.presenceR.type="highshelf",this.directGainL=t.createGain(),this.directGainR=t.createGain(),this.xDelayL=t.createDelay(.05),this.xDelayR=t.createDelay(.05),this.xLpfL=t.createBiquadFilter(),this.xLpfL.type="lowpass",this.xLpfR=t.createBiquadFilter(),this.xLpfR.type="lowpass",this.xGainL=t.createGain(),this.xGainR=t.createGain(),this.roomDelayL=t.createDelay(.05),this.roomDelayR=t.createDelay(.05),this.roomLpfL=t.createBiquadFilter(),this.roomLpfL.type="lowpass",this.roomLpfL.Q.value=.65,this.roomLpfR=t.createBiquadFilter(),this.roomLpfR.type="lowpass",this.roomLpfR.Q.value=.65,this.roomGainL=t.createGain(),this.roomGainR=t.createGain(),this.sideHpL=t.createBiquadFilter(),this.sideHpL.type="highpass",this.sideHpL.frequency.value=380,this.sideHpL.Q.value=.707,this.sideHpR=t.createBiquadFilter(),this.sideHpR.type="highpass",this.sideHpR.frequency.value=380,this.sideHpR.Q.value=.707,this.sideGainL=t.createGain(),this.sideGainR=t.createGain(),this.input.connect(this.dryGain),this.dryGain.connect(this.output),this.input.connect(this.splitter),this.splitter.connect(this.presenceL,0),this.presenceL.connect(this.directGainL),this.directGainL.connect(this.merger,0,0),this.splitter.connect(this.presenceR,1),this.presenceR.connect(this.directGainR),this.directGainR.connect(this.merger,0,1),this.splitter.connect(this.xDelayL,0),this.xDelayL.connect(this.xLpfL),this.xLpfL.connect(this.xGainL),this.xGainL.connect(this.merger,0,1),this.splitter.connect(this.xDelayR,1),this.xDelayR.connect(this.xLpfR),this.xLpfR.connect(this.xGainR),this.xGainR.connect(this.merger,0,0),this.splitter.connect(this.roomDelayL,0),this.roomDelayL.connect(this.roomLpfL),this.roomLpfL.connect(this.roomGainL),this.roomGainL.connect(this.merger,0,1),this.splitter.connect(this.roomDelayR,1),this.roomDelayR.connect(this.roomLpfR),this.roomLpfR.connect(this.roomGainR),this.roomGainR.connect(this.merger,0,0),this.splitter.connect(this.sideHpL,0),this.sideHpL.connect(this.sideGainL),this.sideGainL.connect(this.merger,0,1),this.splitter.connect(this.sideHpR,1),this.sideHpR.connect(this.sideGainR),this.sideGainR.connect(this.merger,0,0),this.merger.connect(this.wetGain),this.wetGain.connect(this.output),this.applyProfile(wt[e],0)}get enabled(){return this.currentMode!=="off"}get mode(){return this.currentMode}get lastActiveMode(){return this.activeModeMemory}getStatus(){const t=wt[this.currentMode],e=t.roomGain>1e-6?20*Math.log10(t.roomGain):-96;return{enabled:this.currentMode!=="off",mode:this.currentMode,lastActiveMode:this.activeModeMemory,crossfeedItdMs:this.currentMode==="off"?0:t.crossfeedItdSec*1e3,headShadowHz:this.currentMode==="off"?0:t.headShadowHz,crossfeedMix:this.currentMode==="off"?0:t.crossfeedGain,roomDepthDb:this.currentMode==="off"?-96:Math.round(e*10)/10}}setEnabled(t,e=.015){this.disposed||(t?this.setMode(this.activeModeMemory,e):this.setMode("off",e))}setMode(t,e=.015){if(this.disposed)return;const s=this.currentMode;this.currentMode=t,t!=="off"&&(this.activeModeMemory=t),this.applyProfile(wt[t],Math.max(0,e)),s!==t&&this.emitChange()}cycleMode(t=.015){const e=this.currentMode==="off"?"headphones":this.currentMode==="headphones"?"wide-3d":"off";return this.setMode(e,t),e}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){if(this.disposed)return;this.disposed=!0,this.listeners.clear();const t=[this.input,this.dryGain,this.wetGain,this.splitter,this.merger,this.presenceL,this.presenceR,this.directGainL,this.directGainR,this.xDelayL,this.xDelayR,this.xLpfL,this.xLpfR,this.xGainL,this.xGainR,this.roomDelayL,this.roomDelayR,this.roomLpfL,this.roomLpfR,this.roomGainL,this.roomGainR,this.sideHpL,this.sideHpR,this.sideGainL,this.sideGainR,this.output];for(const e of t)try{e.disconnect()}catch{}}applyProfile(t,e){const s=this.ctx.currentTime;N(this.dryGain.gain,t.dryGain,s,e),N(this.wetGain.gain,t.wetGain,s,e),N(this.directGainL.gain,t.directGain,s,e),N(this.directGainR.gain,t.directGain,s,e),N(this.presenceL.frequency,t.presenceFreqHz,s,e),N(this.presenceR.frequency,t.presenceFreqHz,s,e),N(this.presenceL.gain,t.presenceGainDb,s,e),N(this.presenceR.gain,t.presenceGainDb,s,e),N(this.xDelayL.delayTime,t.crossfeedItdSec,s,e),N(this.xDelayR.delayTime,t.crossfeedItdSec,s,e),N(this.xLpfL.frequency,t.headShadowHz,s,e),N(this.xLpfR.frequency,t.headShadowHz,s,e),N(this.xLpfL.Q,t.headShadowQ,s,e),N(this.xLpfR.Q,t.headShadowQ,s,e),N(this.xGainL.gain,t.crossfeedGain,s,e),N(this.xGainR.gain,t.crossfeedGain,s,e),N(this.roomDelayL.delayTime,t.roomDelayLSec,s,e),N(this.roomDelayR.delayTime,t.roomDelayRSec,s,e),N(this.roomLpfL.frequency,t.roomLpfHz,s,e),N(this.roomLpfR.frequency,t.roomLpfHz,s,e),N(this.roomGainL.gain,t.roomGain,s,e),N(this.roomGainR.gain,t.roomGain,s,e),N(this.sideGainL.gain,t.sideLiftGain,s,e),N(this.sideGainR.gain,t.sideLiftGain,s,e)}emitChange(){const t=this.getStatus();for(const e of this.listeners)try{e(t)}catch{}}}const F=64,H=4096,Y=256,It=64,et=128,X=64,pe=new Float64Array(F),Tt=new Float64Array(F);for(let c=0;c<F;c++){const t=.5*Math.PI*(c+1)/(F+1);pe[c]=Math.cos(t),Tt[c]=Math.sin(t)}const me=new Float64Array(F);for(let c=0;c<F;c++){const t=Tt[c];me[c]=t*t}const fe=typeof performance<"u"&&typeof performance.now=="function",Vt=fe?()=>performance.now():()=>Date.now();class Ut{active=!1;patchId="";exports=null;header=null;params=null;probes=null;newtonIters=null;outL=null;outR=null;paramCount=0;probeCount=0;sampleRate=48e3;carryMap=null;carryIndex=null;bind(t,e,s,i,n,a=null){const o=t.exports,r=o.memory.buffer,l=o.get_header_offset(),h=o.get_params_offset(),u=o.get_probes_offset(),p=o.get_newton_iters_offset(),b=o.get_out_l_offset(),d=o.get_out_r_offset(),f=s.length;if(this.exports=o,this.header=new Float64Array(r,l,8),this.params=new Float64Array(r,h,Math.max(1,f)),this.probes=new Float64Array(r,u,Math.max(1,i)),this.newtonIters=new Int32Array(r,p,et),this.outL=new Float64Array(r,b,et),this.outR=new Float64Array(r,d,et),this.paramCount=f,this.probeCount=Math.min(i,It),this.sampleRate=e,this.patchId=n,this.carryMap=a,this.carryIndex=null,a){const g=new Map;for(let k=0;k<a.keys.length;k++)g.set(a.keys[k],k);this.carryIndex=g}for(let g=0;g<f;g++)this.params[g]=s[g];o.init(e),this.active=!0}reset(){this.exports&&this.exports.init(this.sampleRate)}}function ss(c,t){const e=c.carryMap,s=c.carryIndex,i=t.carryMap;if(!e||!s||!i||!c.exports||!t.exports)return 0;const n=new Float64Array(c.exports.memory.buffer),a=new Float64Array(t.exports.memory.buffer);let o=0;for(let r=0;r<i.keys.length;r++){const l=s.get(i.keys[r]);if(l===void 0)continue;const h=i.f64Counts[r];if(e.f64Counts[l]!==h)continue;const u=e.f64Offsets[l],p=i.f64Offsets[r];if(!(u<0||p<0||u+h>n.length||p+h>a.length)){for(let b=0;b<h;b++)a[p+b]=n[u+b];o++}}return o}class is{slotA=new Ut;slotB=new Ut;activeIndex=-1;prevIndex=-1;crossfadePos=F;crossfadeCarried=!1;lastCarriedRegions=0;masterGainTarget=.85;masterGainSmooth=.85;rampIndex=new Int32Array(X);rampFrom=new Float64Array(X);rampTo=new Float64Array(X);rampBlocks=new Int32Array(X);rampDone=new Int32Array(X);rampCount=0;scopeL=new Float32Array(H);scopeR=new Float32Array(H);scopeWriteIdx=0;latestProbes=new Float64Array(It);latestProbeCount=0;cpuUsRing=new Float64Array(Y);cpuWriteIdx=0;cpuSampleCount=0;coarseAccumUs=0;coarseBlocks=0;lastBlockCpuUs=0;lastMaxNewtonIters=0;lastAvgNewtonIters=0;lastMaxSccResidual=0;swapCount=0;nanGuardHits=0;blocksProcessed=0;cpuSortScratch=new Float64Array(Y);getSlot(t){return t===0?this.slotA:this.slotB}get activePatchId(){return this.activeIndex>=0?this.getSlot(this.activeIndex).patchId:""}get isCrossfading(){return this.crossfadePos<F}installInstance(t,e,s,i,n,a={}){const o=a.carryMap??null;if(this.activeIndex<0){this.slotA.bind(t,e,s,i,n,o),this.activeIndex=0,this.prevIndex=-1,this.crossfadePos=F,this.crossfadeCarried=!1,this.lastCarriedRegions=0,this.latestProbeCount=this.slotA.probeCount,this.swapCount++;return}this.prevIndex>=0&&this.prevIndex!==this.activeIndex&&(this.getSlot(this.prevIndex).active=!1);const r=1-this.activeIndex,l=this.getSlot(r);l.bind(t,e,s,i,n,o),this.lastCarriedRegions=a.keepState?ss(this.getSlot(this.activeIndex),l):0,this.crossfadeCarried=this.lastCarriedRegions>0,this.prevIndex=this.activeIndex,this.activeIndex=r,this.crossfadePos=0,this.latestProbeCount=l.probeCount,this.swapCount++}setParam(t,e){if(this.activeIndex<0)return;const s=this.getSlot(this.activeIndex);s.exports&&t>=0&&t<s.paramCount&&s.exports.set_param(t,e)}rampParam(t,e,s,i){if(!Number.isFinite(e)||!Number.isFinite(s))return;const n=i<1?1:i>64?64:Math.round(i);let a=-1;for(let o=0;o<this.rampCount;o++)if(this.rampIndex[o]===t){a=o;break}if(a<0){if(this.rampCount>=X){this.setParam(t,s);return}a=this.rampCount++}this.rampIndex[a]=t,this.rampFrom[a]=e,this.rampTo[a]=s,this.rampBlocks[a]=n,this.rampDone[a]=0}advanceRamps(){let t=0;for(;t<this.rampCount;){const e=this.rampDone[t]+1,s=this.rampBlocks[t],i=this.rampTo[t],n=e>=s?i:this.rampFrom[t]+(i-this.rampFrom[t])*e/s;if(this.setParam(this.rampIndex[t],n),e>=s){const a=--this.rampCount;this.rampIndex[t]=this.rampIndex[a],this.rampFrom[t]=this.rampFrom[a],this.rampTo[t]=this.rampTo[a],this.rampBlocks[t]=this.rampBlocks[a],this.rampDone[t]=this.rampDone[a]}else this.rampDone[t]=e,t++}}setParamsBatch(t){if(this.activeIndex<0)return;const e=this.getSlot(this.activeIndex);if(!e.exports)return;const s=Math.min(t.length,e.paramCount);for(let i=0;i<s;i++)e.exports.set_param(i,t[i])}setMasterGain(t){Number.isFinite(t)&&(this.masterGainTarget=t<0?0:t>2?2:t)}resetActive(){this.activeIndex>=0&&this.getSlot(this.activeIndex).reset()}process(t,e,s=128){const i=s>et?et:s;if(this.activeIndex<0){for(let M=0;M<i;M++)t[M]=0,e[M]=0;return}this.rampCount>0&&this.advanceRamps();const n=Vt(),a=this.getSlot(this.activeIndex),o=a.exports,r=a.outL,l=a.outR;if(!o||!r||!l){for(let M=0;M<i;M++)t[M]=0,e[M]=0;return}let h=this.masterGainSmooth;const u=this.masterGainTarget;let p=this.scopeWriteIdx;const b=this.scopeL,d=this.scopeR;if(this.crossfadePos<F&&this.prevIndex>=0){const M=this.getSlot(this.prevIndex),P=M.exports,S=M.outL,T=M.outR;if(o.process_block(i),P&&S&&T&&M.active){P.process_block(i);let w=this.crossfadePos;const R=this.crossfadeCarried;for(let I=0;I<i;I++){h+=.008*(u-h);let v,y;if(w<F){if(R){const x=me[w];v=S[I]+(r[I]-S[I])*x,y=T[I]+(l[I]-T[I])*x}else{const x=pe[w],A=Tt[w];v=S[I]*x+r[I]*A,y=T[I]*x+l[I]*A}w++}else v=r[I],y=l[I];v===v&&v>-1e4&&v<1e4||(v=0,this.nanGuardHits++),y===y&&y>-1e4&&y<1e4||(y=0,this.nanGuardHits++);const E=v*h,C=y*h;t[I]=E,e[I]=C,b[p]=E,d[p]=C,p=p+1&H-1}this.crossfadePos=w,w>=F&&(M.active=!1,this.prevIndex=-1)}else{this.crossfadePos=F,this.prevIndex=-1;for(let w=0;w<i;w++){h+=.008*(u-h);let R=r[w],I=l[w];R===R&&R>-1e4&&R<1e4||(R=0,this.nanGuardHits++),I===I&&I>-1e4&&I<1e4||(I=0,this.nanGuardHits++);const v=R*h,y=I*h;t[w]=v,e[w]=y,b[p]=v,d[p]=y,p=p+1&H-1}}}else{o.process_block(i);for(let M=0;M<i;M++){h+=.008*(u-h);let P=r[M],S=l[M];P===P&&P>-1e4&&P<1e4||(P=0,this.nanGuardHits++),S===S&&S>-1e4&&S<1e4||(S=0,this.nanGuardHits++);const T=P*h,w=S*h;t[M]=T,e[M]=w,b[p]=T,d[p]=w,p=p+1&H-1}}this.masterGainSmooth=h,this.scopeWriteIdx=p;const g=a.probes,k=a.probeCount;if(g&&k>0){const M=this.latestProbes;for(let P=0;P<k;P++)M[P]=g[P];this.latestProbeCount=k}const m=a.newtonIters;if(m){let M=0,P=0;for(let S=0;S<i;S++){const T=m[S];T>M&&(M=T),P+=T}this.lastMaxNewtonIters=M,this.lastAvgNewtonIters=P/i}a.header&&(this.lastMaxSccResidual=a.header[3]);const L=(Vt()-n)*1e3;if(fe)this.lastBlockCpuUs=L,this.cpuUsRing[this.cpuWriteIdx]=L,this.cpuWriteIdx=this.cpuWriteIdx+1&Y-1,this.cpuSampleCount<Y&&this.cpuSampleCount++;else if(this.coarseAccumUs+=L,this.coarseBlocks++,this.coarseBlocks>=16){const M=this.coarseAccumUs/this.coarseBlocks;this.lastBlockCpuUs=M,this.cpuUsRing[this.cpuWriteIdx]=M,this.cpuWriteIdx=this.cpuWriteIdx+1&Y-1,this.cpuSampleCount<Y&&this.cpuSampleCount++,this.coarseAccumUs=0,this.coarseBlocks=0}this.blocksProcessed++}computeCpuP99Us(){const t=this.cpuSampleCount;if(t===0)return 0;const e=this.cpuSortScratch;for(let i=0;i<t;i++)e[i]=this.cpuUsRing[i];for(let i=1;i<t;i++){const n=e[i];let a=i-1;for(;a>=0&&e[a]>n;)e[a+1]=e[a],a--;e[a+1]=n}const s=Math.min(t-1,Math.floor(t*.99));return e[s]}copyScopeChronological(t,e){const s=Math.min(t.length,H),i=this.scopeWriteIdx-s+H&H-1;for(let n=0;n<s;n++){const a=i+n&H-1;t[n]=this.scopeL[a],e[n]=this.scopeR[a]}}}const as=""+new URL("kirchhoff.worklet-CKlsVnlg.js",import.meta.url).href;class ns{ctx=null;workletNode=null;compiled=null;currentPatch=null;audioRunning=!1;workletReady=!1;masterGain=.85;masterGainNode=null;playbackMonitor=null;binauralMaster=null;limiterNode=null;limiterReductionDb=0;playbackTarget="flat";binauralMode="off";latencyHint="interactive";preferredSinkId="";inputStream=null;inputSourceNode=null;inputGainNode=null;inputAnalyser=null;inputMeterBuf=null;inputGain=1;inputActive=!1;inputLabel="";inputDeviceId=null;previewEngine=new is;previewOutL=new Float32Array(128);previewOutR=new Float32Array(128);previewScopeL=new Float32Array(H);previewScopeR=new Float32Array(H);previewProbes=new Float64Array(It);rafId=null;listeners=new Set;swapListeners=new Set;hardwareListeners=new Set;recChunkListeners=new Set;recStoppedListeners=new Set;isRecordingFlag=!1;get lastCompiled(){return this.compiled}get isAudioRunning(){return this.audioRunning}get isWorkletReady(){return this.workletReady}get sampleRate(){return this.ctx?this.ctx.sampleRate:48e3}getAudioContext(){return this.ctx}onTelemetry(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSwap(t){return this.swapListeners.add(t),()=>this.swapListeners.delete(t)}onHardwareStatusChange(t){return this.hardwareListeners.add(t),()=>this.hardwareListeners.delete(t)}onRecorderChunk(t){return this.recChunkListeners.add(t),()=>this.recChunkListeners.delete(t)}onRecorderStopped(t){return this.recStoppedListeners.add(t),()=>this.recStoppedListeners.delete(t)}get isRecording(){return this.isRecordingFlag}async startRecording(){return(!this.audioRunning||!this.limiterNode)&&await this.startAudio(),this.limiterNode?(this.isRecordingFlag=!0,this.limiterNode.port.postMessage({type:"recStart"}),!0):!1}stopRecording(){if(this.isRecordingFlag)if(this.isRecordingFlag=!1,this.limiterNode)this.limiterNode.port.postMessage({type:"recStop"});else for(const t of this.recStoppedListeners)t()}setPlaybackTarget(t){this.playbackTarget=t,this.playbackMonitor?.setTarget(t)}setBinauralMode(t){this.binauralMode=t,this.binauralMaster?.setMode(t)}getOutputStageStatus(){return{playbackTarget:this.playbackTarget,binauralMode:this.binauralMode,limiterReductionDb:this.limiterReductionDb}}setLatencyHint(t){this.latencyHint=t,this.emitHardwareStatus()}getAudioHardwareStatus(){const t=this.ctx,e=typeof AudioContext<"u"&&typeof AudioContext.prototype.setSinkId=="function",s=!!(t&&typeof t.setSinkId=="function"||e),i=t?.sinkId,n=typeof i=="string"?i:this.preferredSinkId,a=t&&typeof t.baseLatency=="number"&&Number.isFinite(t.baseLatency)?t.baseLatency*1e3:0,o=t&&typeof t.outputLatency=="number"&&Number.isFinite(t.outputLatency)?t.outputLatency*1e3:0;return{sampleRate:this.sampleRate,baseLatencyMs:a,outputLatencyMs:o,sinkId:n,inputActive:this.inputActive,inputLabel:this.inputLabel,inputGain:this.inputGain,sinkSelectionSupported:s,latencyHint:this.latencyHint,contextState:this.ctx?this.ctx.state:"uninitialized"}}async setOutputDevice(t){const e=t==="default"?"":t,s=typeof AudioContext<"u"&&typeof AudioContext.prototype.setSinkId=="function";if(!this.ctx)return s?(this.preferredSinkId=e,this.emitHardwareStatus(),{ok:!0}):{ok:!1,error:"Output device selection (AudioContext.setSinkId) is not supported in this browser."};const i=this.ctx;if(typeof i.setSinkId!="function")return{ok:!1,error:"Output device selection (AudioContext.setSinkId) is not supported in this browser."};try{return await i.setSinkId(e),this.preferredSinkId=e,this.emitHardwareStatus(),{ok:!0}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}}async setInputDevice(t,e=1){if(this.teardownInput(),this.inputGain=Number.isFinite(e)?Math.max(0,Math.min(4,e)):1,this.inputDeviceId=t,t===null)return this.emitHardwareStatus(),{ok:!0};if(typeof navigator>"u"||!navigator.mediaDevices||typeof navigator.mediaDevices.getUserMedia!="function")return this.emitHardwareStatus(),{ok:!1,error:"External audio capture requires navigator.mediaDevices.getUserMedia (HTTPS or localhost)."};try{if((!this.ctx||!this.workletNode)&&await this.startAudio(),!this.ctx||!this.workletNode)return{ok:!1,error:"AudioWorklet failed to initialize before opening audio input."};const s=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t&&t!=="default"?{exact:t}:void 0,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,channelCount:1}}),i=this.ctx.createMediaStreamSource(s),n=this.ctx.createGain();n.gain.value=this.inputGain;const a=this.ctx.createAnalyser();a.fftSize=256,a.smoothingTimeConstant=.45;const o=new Float32Array(new ArrayBuffer(a.fftSize*4));i.connect(n),n.connect(this.workletNode),n.connect(a);const r=s.getAudioTracks()[0],l=r?.label||"External Audio Input";return r&&(r.onended=()=>{this.inputStream===s&&(this.teardownInput(),this.emitHardwareStatus())}),this.inputStream=s,this.inputSourceNode=i,this.inputGainNode=n,this.inputAnalyser=a,this.inputMeterBuf=o,this.inputActive=!0,this.inputLabel=l,this.emitHardwareStatus(),{ok:!0,label:l}}catch(s){return this.teardownInput(),this.emitHardwareStatus(),{ok:!1,error:s instanceof Error?s.message:String(s)}}}setInputGain(t){if(!Number.isFinite(t))return;const e=Math.max(0,Math.min(4,t));this.inputGain=e,this.inputGainNode&&this.ctx?this.inputGainNode.gain.setTargetAtTime(e,this.ctx.currentTime,.008):this.inputGainNode&&(this.inputGainNode.gain.value=e)}getInputLevelDb(){if(!this.inputActive||!this.inputAnalyser||!this.inputMeterBuf)return-96;this.inputAnalyser.getFloatTimeDomainData(this.inputMeterBuf);let t=0;const e=this.inputMeterBuf;for(let i=0;i<e.length;i++){const n=e[i];t+=n*n}const s=Math.sqrt(t/e.length);return s<=1e-5?-96:Math.max(-96,Math.min(6,20*Math.log10(s)))}teardownInput(){if(this.inputSourceNode){try{this.inputSourceNode.disconnect()}catch{}this.inputSourceNode=null}if(this.inputGainNode){try{this.inputGainNode.disconnect()}catch{}this.inputGainNode=null}if(this.inputAnalyser){try{this.inputAnalyser.disconnect()}catch{}this.inputAnalyser=null}if(this.inputStream){for(const t of this.inputStream.getTracks())t.onended=null,t.stop();this.inputStream=null}this.inputMeterBuf=null,this.inputActive=!1,this.inputLabel=""}emitHardwareStatus(){if(this.hardwareListeners.size===0)return;const t=this.getAudioHardwareStatus();for(const e of this.hardwareListeners)e(t)}async startAudio(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(this.ctx=new t({sampleRate:48e3,latencyHint:this.latencyHint}),this.preferredSinkId){const e=this.ctx;if(typeof e.setSinkId=="function")try{await e.setSinkId(this.preferredSinkId)}catch(s){console.warn("[KIRCHHOFF AudioHost] Failed to apply preferred sinkId:",s)}}await this.ctx.audioWorklet.addModule(as),this.workletNode=new AudioWorkletNode(this.ctx,"kirchhoff-jit-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2]}),this.masterGainNode=this.ctx.createGain(),this.playbackMonitor=new Ue(this.ctx,this.playbackTarget),this.binauralMaster=new es(this.ctx,this.binauralMode),this.limiterNode=new AudioWorkletNode(this.ctx,"kirchhoff-limiter",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCount:2,channelCountMode:"explicit"}),this.limiterNode.port.onmessage=e=>{const s=e.data;if(s){if(s.type==="limiter"&&s.minGain>0)this.limiterReductionDb=Math.min(0,20*Math.log10(s.minGain));else if(s.type==="recChunk"&&s.frames>0){const i=this.sampleRate;for(const n of this.recChunkListeners)n(s.left,s.right,s.frames,i)}else if(s.type==="recStopped"){this.isRecordingFlag=!1;for(const i of this.recStoppedListeners)i()}}},this.workletNode.connect(this.masterGainNode),this.masterGainNode.connect(this.playbackMonitor.input),this.playbackMonitor.output.connect(this.binauralMaster.input),this.binauralMaster.output.connect(this.limiterNode),this.limiterNode.connect(this.ctx.destination),this.workletNode.onprocessorerror=e=>{console.error("[KIRCHHOFF Worklet processorerror]",e)},this.workletNode.port.onmessageerror=e=>{console.error("[KIRCHHOFF Worklet messageerror]",e)},this.workletNode.port.onmessage=e=>{const s=e.data;if(s)if(s.type==="telemetry")this.emitTelemetry({patchId:s.patchId,scopeL:s.scopeL,scopeR:s.scopeR,probes:s.probes,probeCount:s.probeCount,probeMeta:this.compiled?this.compiled.ir.probes:[],cpuUs:s.cpuUs,cpuP99Us:s.cpuP99Us,maxNewtonIters:s.maxNewtonIters,avgNewtonIters:s.avgNewtonIters,maxSccResidual:s.maxSccResidual,swapCount:s.swapCount,nanGuardHits:s.nanGuardHits,blocksProcessed:s.blocksProcessed,sampleRate:this.ctx?this.ctx.sampleRate:48e3,audioRunning:this.audioRunning,workletActive:!0});else if(s.type==="swapped"&&this.compiled)for(const i of this.swapListeners)i(this.compiled,s.swapCount);else s.type==="error"&&console.error("[KIRCHHOFF Worklet]",s.message)},this.workletNode.port.postMessage({type:"masterGain",value:this.masterGain}),this.workletReady=!0}this.ctx.state!=="running"&&await this.ctx.resume(),this.audioRunning=this.ctx.state==="running",this.emitHardwareStatus(),this.currentPatch&&await this.loadPatch(this.currentPatch)}async stopAudio(){this.ctx&&this.ctx.state==="running"&&await this.ctx.suspend(),this.audioRunning=!1,this.emitHardwareStatus(),this.ensurePreviewLoop()}async loadPatch(t,e={}){const s=this.sampleRate,i={...t,sampleRate:s};this.currentPatch=i;const n=ve(i);this.compiled=n;const a=Se(n.ir),o=e.keepState===!0,r=await WebAssembly.instantiate(n.wasmBytes,{}),l=r instanceof WebAssembly.Instance?r:r.instance;if(this.previewEngine.installInstance(l,s,n.ir.initialParams,n.ir.probes.length,i.id,{carryMap:a,keepState:o}),this.workletNode&&this.workletReady){const h=n.wasmBytes.slice();this.workletNode.port.postMessage({type:"swap",patchId:i.id,wasmBytes:h,initialParams:n.ir.initialParams,numProbes:n.ir.probes.length,carryMap:a,keepState:o},[h.buffer])}else{for(const h of this.swapListeners)h(n,this.previewEngine.swapCount);this.ensurePreviewLoop()}return n}setParam(t,e,s){if(!this.compiled)return;const i=`${t}:${e}`,n=this.compiled.ir.paramMap[i];n!==void 0&&(this.compiled.ir.initialParams[n]=s,this.previewEngine.setParam(n,s),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"param",index:n,value:s}))}rampParam(t,e,s,i=5){if(!this.compiled)return;const n=this.compiled.ir.paramMap[`${t}:${e}`];if(n===void 0)return;const a=this.compiled.ir.initialParams[n];this.compiled.ir.initialParams[n]=s,this.previewEngine.rampParam(n,a,s,i),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"paramRamp",index:n,from:a,to:s,blocks:i})}getParam(t,e){if(!this.compiled)return;const s=this.compiled.ir.paramMap[`${t}:${e}`];return s===void 0?void 0:this.compiled.ir.initialParams[s]}setMasterGain(t){this.masterGain=t,this.previewEngine.setMasterGain(t),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"masterGain",value:t})}setAuditionMute(t){if(!this.masterGainNode||!this.ctx)return;const e=this.ctx.currentTime;this.masterGainNode.gain.cancelScheduledValues(e),this.masterGainNode.gain.setTargetAtTime(t?0:1,e,.008)}resetPatchState(){this.previewEngine.resetActive(),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"reset"})}renderCurrentPatchOffline(t){if(!this.compiled)return null;const e=we(this.compiled),s=new Float64Array(t),i=new Float64Array(t);let n=0;for(;n<t;){const a=Math.min(128,t-n);e.processBlock(a);for(let o=0;o<a;o++)s[n+o]=e.outL[o],i[n+o]=e.outR[o];n+=a}return{left:s,right:i}}ensurePreviewLoop(){if(this.rafId!==null||typeof requestAnimationFrame>"u")return;const t=()=>{if(this.rafId=null,!(this.audioRunning&&this.workletReady)){if(this.compiled){for(let s=0;s<6;s++)this.previewEngine.process(this.previewOutL,this.previewOutR,128);this.previewEngine.copyScopeChronological(this.previewScopeL,this.previewScopeR);const e=this.previewEngine.latestProbeCount;for(let s=0;s<e;s++)this.previewProbes[s]=this.previewEngine.latestProbes[s];this.emitTelemetry({patchId:this.previewEngine.activePatchId,scopeL:this.previewScopeL,scopeR:this.previewScopeR,probes:this.previewProbes,probeCount:e,probeMeta:this.compiled.ir.probes,cpuUs:this.previewEngine.lastBlockCpuUs,cpuP99Us:this.previewEngine.computeCpuP99Us(),maxNewtonIters:this.previewEngine.lastMaxNewtonIters,avgNewtonIters:this.previewEngine.lastAvgNewtonIters,maxSccResidual:this.previewEngine.lastMaxSccResidual,swapCount:this.previewEngine.swapCount,nanGuardHits:this.previewEngine.nanGuardHits,blocksProcessed:this.previewEngine.blocksProcessed,sampleRate:this.sampleRate,audioRunning:!1,workletActive:!1})}this.rafId=requestAnimationFrame(t)}};this.rafId=requestAnimationFrame(t)}emitTelemetry(t){for(const e of this.listeners)e(t)}dispose(){this.teardownInput(),this.rafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.workletNode&&(this.workletNode.disconnect(),this.workletNode=null),this.masterGainNode&&(this.masterGainNode.disconnect(),this.masterGainNode=null),this.limiterNode&&(this.limiterNode.disconnect(),this.limiterNode=null),this.playbackMonitor?.dispose(),this.playbackMonitor=null,this.binauralMaster?.dispose(),this.binauralMaster=null,this.ctx&&(this.ctx.close(),this.ctx=null),this.hardwareListeners.clear()}}class os{inputs=[];outputs=[];permissionGranted=!1;listeners=new Set;disposed=!1;handleDeviceChange=()=>{this.disposed||this.enumerateDevices().then(t=>{this.disposed||this.emitChange(t)})};constructor(){this.hasMediaDevices()&&typeof navigator.mediaDevices.addEventListener=="function"&&navigator.mediaDevices.addEventListener("devicechange",this.handleDeviceChange)}get supported(){return this.hasMediaDevices()&&typeof navigator.mediaDevices.enumerateDevices=="function"}get hasPermission(){return this.permissionGranted}getDevices(){return{inputs:this.inputs.slice(),outputs:this.outputs.slice()}}async enumerateDevices(){if(!this.supported)return this.inputs=[],this.outputs=[],{inputs:[],outputs:[]};try{const t=await navigator.mediaDevices.enumerateDevices(),e=[],s=[];let i=!1,n=0,a=0;for(const o of t){if(o.kind!=="audioinput"&&o.kind!=="audiooutput")continue;const r=(o.label||"").trim();if(r.length>0&&(i=!0),o.kind==="audioinput"){n++;const l=o.deviceId==="default"?"Default Audio Input":o.deviceId==="communications"?"Communications Input":`Audio Input ${n}`;e.push({deviceId:o.deviceId,kind:"audioinput",label:r||l,groupId:o.groupId||""})}else{a++;const l=o.deviceId==="default"?"Default Audio Output":o.deviceId==="communications"?"Communications Output":`Audio Output ${a}`;s.push({deviceId:o.deviceId,kind:"audiooutput",label:r||l,groupId:o.groupId||""})}}return i&&(this.permissionGranted=!0),this.inputs=e,this.outputs=s,this.getDevices()}catch{return this.getDevices()}}async requestPermissionAndRefresh(){if(!this.hasMediaDevices()||typeof navigator.mediaDevices.getUserMedia!="function"){const s=await this.enumerateDevices();return{ok:!1,inputs:s.inputs,outputs:s.outputs,error:"MediaDevices API unavailable (requires HTTPS or localhost)."}}let t=null;try{t=await navigator.mediaDevices.getUserMedia({audio:!0}),this.permissionGranted=!0}catch(s){const i=await this.enumerateDevices();return this.emitChange(i),{ok:!1,inputs:i.inputs,outputs:i.outputs,error:s instanceof Error?s.message:String(s)}}finally{if(t)for(const s of t.getTracks())s.stop()}const e=await this.enumerateDevices();return this.emitChange(e),{ok:!0,inputs:e.inputs,outputs:e.outputs}}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){this.disposed=!0,this.hasMediaDevices()&&typeof navigator.mediaDevices.removeEventListener=="function"&&navigator.mediaDevices.removeEventListener("devicechange",this.handleDeviceChange),this.listeners.clear()}hasMediaDevices(){return typeof navigator<"u"&&!!navigator.mediaDevices}emitChange(t){for(const e of this.listeners)e(t)}}const Wt="kirchhoff_midi_cc_v1",rs=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function W(c){const t=Math.max(0,Math.min(127,Math.round(c))),e=Math.floor(t/12)-1;return`${rs[t%12]}${e}`}function J(c,t=0){return 440*Math.pow(2,(c-69+t)/12)}function Z(c,t=0){return(c-36+t)/12}const xt=24;class cs{access=null;connected=!1;inputs=[];outputs=[];boundInputs=new Map;selectedInputId="all";selectedOutputId="";channelFilter=0;pitchBendRangeSemitones=2;noteStack=[];lastNote=60;lastChannel=1;pitchBendNorm=0;pitchBendSemitones=0;mappings=[];learnTarget=null;lastCcNorm=new Map;clockSyncEnabled=!1;clockRunning=!1;clockPulseCount=0;lastClockPulseMs=0;clockBpm=0;lastEmittedBpm=0;clockDtRing=new Float64Array(xt);clockDtIdx=0;clockDtCount=0;noteOffTimers=new Set;noteListeners=new Set;polyNoteListeners=new Set;paramListeners=new Set;clockListeners=new Set;activityListeners=new Set;deviceListeners=new Set;mappingListeners=new Set;learnListeners=new Set;constructor(){this.mappings=this.loadPersistedMappings()}get isSupported(){return typeof navigator>"u"?!1:typeof navigator.requestMIDIAccess=="function"}get isConnected(){return this.connected&&this.access!==null}getInputs(){return this.inputs.slice()}getOutputs(){return this.outputs.slice()}getSelectedInput(){return this.selectedInputId}setSelectedInput(t){this.selectedInputId=t||"all"}getSelectedOutput(){return this.selectedOutputId}setSelectedOutput(t){this.selectedOutputId=t||""}getChannelFilter(){return this.channelFilter}setChannelFilter(t){const e=Math.round(t);this.channelFilter=e>=1&&e<=16?e:0}setPitchBendRange(t){Number.isFinite(t)&&t>0&&t<=24&&(this.pitchBendRangeSemitones=t)}async connect(){if(!this.isSupported)return{ok:!1,error:"Web MIDI API is unavailable in this browser (supported in Chromium/Chrome/Edge/Firefox).",inputs:[],outputs:[]};if(this.access)return this.refreshPorts(),{ok:!0,inputs:this.getInputs(),outputs:this.getOutputs()};try{const e=await navigator.requestMIDIAccess({sysex:!1});return this.access=e,this.connected=!0,e.onstatechange=()=>{this.refreshPorts()},this.refreshPorts(),{ok:!0,inputs:this.getInputs(),outputs:this.getOutputs()}}catch(t){return this.connected=!1,{ok:!1,error:t instanceof Error?t.message:String(t),inputs:[],outputs:[]}}}startLearn(t,e,s,i,n,a){this.learnTarget={moduleId:t,paramId:e,min:s,max:i,label:n,scale:a};for(const o of this.learnListeners)o(this.learnTarget)}cancelLearn(){if(this.learnTarget){this.learnTarget=null;for(const t of this.learnListeners)t(null)}}getLearnTarget(){return this.learnTarget?{...this.learnTarget}:null}getMappings(){return this.mappings.map(t=>({...t}))}addMapping(t){this.mappings=this.mappings.filter(e=>!(e.cc===t.cc&&e.channel===t.channel)&&!(e.moduleId===t.moduleId&&e.paramId===t.paramId)),this.mappings.push({...t}),this.persistMappings(),this.emitMappings()}removeMapping(t,e,s,i){this.mappings=this.mappings.filter(n=>s!==void 0&&i!==void 0?!(n.cc===t&&n.channel===e&&n.moduleId===s&&n.paramId===i):!(n.cc===t&&n.channel===e)),this.persistMappings(),this.emitMappings()}clearMappings(){this.mappings=[],this.persistMappings(),this.emitMappings()}setClockSyncEnabled(t){if(this.clockSyncEnabled=t,t&&this.clockBpm>0){const e=this.getClockState();for(const s of this.clockListeners)s(this.clockBpm,e)}}getClockState(){return{running:this.clockRunning,bpm:this.clockBpm,pulseCount:this.clockPulseCount,syncEnabled:this.clockSyncEnabled,lastPulseMs:this.lastClockPulseMs}}sendClockPulse(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([248]),!0}catch{return!1}}sendClockStart(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([250]),!0}catch{return!1}}sendClockStop(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([252]),!0}catch{return!1}}sendNote(t,e,s,i){const n=this.resolveOutputPort();if(!n)return!1;const a=Math.max(0,Math.min(15,Math.round(t)-1)),o=Math.max(0,Math.min(127,Math.round(e))),r=Math.max(0,Math.min(127,Math.round(s)));try{if(r<=0)n.send([128|a,o,0]);else if(n.send([144|a,o,r]),i&&i>0&&typeof window<"u"){const l=window.setTimeout(()=>{this.noteOffTimers.delete(l);const h=this.resolveOutputPort();if(h)try{h.send([128|a,o,0])}catch{}},i);this.noteOffTimers.add(l)}return!0}catch{return!1}}sendCC(t,e,s){const i=this.resolveOutputPort();if(!i)return!1;const n=Math.max(0,Math.min(15,Math.round(t)-1)),a=Math.max(0,Math.min(127,Math.round(e))),o=Math.max(0,Math.min(127,Math.round(s)));try{return i.send([176|n,a,o]),!0}catch{return!1}}onNote(t){return this.noteListeners.add(t),()=>this.noteListeners.delete(t)}onPolyNote(t){return this.polyNoteListeners.add(t),()=>this.polyNoteListeners.delete(t)}onParamChange(t){return this.paramListeners.add(t),()=>this.paramListeners.delete(t)}onClockBpm(t){return this.clockListeners.add(t),()=>this.clockListeners.delete(t)}onActivity(t){return this.activityListeners.add(t),()=>this.activityListeners.delete(t)}onDevicesChange(t){return this.deviceListeners.add(t),()=>this.deviceListeners.delete(t)}onMappingsChange(t){return this.mappingListeners.add(t),()=>this.mappingListeners.delete(t)}onLearnChange(t){return this.learnListeners.add(t),()=>this.learnListeners.delete(t)}dispose(){for(const t of this.noteOffTimers)clearTimeout(t);this.noteOffTimers.clear();for(const t of this.boundInputs.values())t.onmidimessage=null;this.boundInputs.clear(),this.access&&(this.access.onstatechange=null,this.access=null),this.connected=!1,this.noteStack=[],this.noteListeners.clear(),this.polyNoteListeners.clear(),this.paramListeners.clear(),this.clockListeners.clear(),this.activityListeners.clear(),this.deviceListeners.clear(),this.mappingListeners.clear(),this.learnListeners.clear()}refreshPorts(){if(!this.access)return;const t=[],e=[],s=new Set;this.access.inputs.forEach((a,o)=>{a.state==="connected"&&(s.add(o),t.push({id:o,name:(a.name||"").trim()||`MIDI Input ${t.length+1}`,manufacturer:(a.manufacturer||"").trim(),direction:"input",state:a.state,connection:a.connection}),this.boundInputs.has(o)||(a.onmidimessage=r=>this.handleMidiMessage(o,r),this.boundInputs.set(o,a)))});for(const[a,o]of this.boundInputs.entries())s.has(a)||(o.onmidimessage=null,this.boundInputs.delete(a));this.access.outputs.forEach((a,o)=>{a.state==="connected"&&e.push({id:o,name:(a.name||"").trim()||`MIDI Output ${e.length+1}`,manufacturer:(a.manufacturer||"").trim(),direction:"output",state:a.state,connection:a.connection})}),this.selectedInputId!=="all"&&!t.some(a=>a.id===this.selectedInputId)&&(this.selectedInputId="all"),this.selectedOutputId&&!e.some(a=>a.id===this.selectedOutputId)&&(this.selectedOutputId=""),this.inputs=t,this.outputs=e;const i=this.getInputs(),n=this.getOutputs();for(const a of this.deviceListeners)a(i,n)}resolveOutputPort(){if(!this.access||!this.selectedOutputId)return null;const t=this.access.outputs.get(this.selectedOutputId);return!t||t.state!=="connected"?null:t}handleMidiMessage(t,e){if(this.selectedInputId!=="all"&&t!==this.selectedInputId)return;const s=e.data;if(!s||s.length===0)return;const i=s[0],n=typeof performance<"u"?performance.now():Date.now();if(i>=248){this.handleRealtimeMessage(i,n);return}if(i>=240)return;const a=i&240,o=(i&15)+1;if(this.channelFilter!==0&&o!==this.channelFilter)return;const r=s.length>1?s[1]&127:0,l=s.length>2?s[2]&127:0;a===144&&l>0?this.handleNoteOn(o,r,l,n):a===128||a===144&&l===0?this.handleNoteOff(o,r,n):a===176?this.handleControlChange(o,r,l,n):a===224&&this.handlePitchBend(o,r,l,n)}handleRealtimeMessage(t,e){if(t===248){if(this.lastClockPulseMs>0){const s=e-this.lastClockPulseMs;if(s>=4&&s<=500){this.clockDtRing[this.clockDtIdx]=s,this.clockDtIdx=(this.clockDtIdx+1)%xt,this.clockDtCount<xt&&this.clockDtCount++;let i=0;for(let r=0;r<this.clockDtCount;r++)i+=this.clockDtRing[r];const a=6e4/(i/this.clockDtCount*24),o=Math.max(20,Math.min(300,a));this.clockBpm=this.clockBpm<=0?o:this.clockBpm*.72+o*.28}else s>1e3&&(this.clockDtCount=0,this.clockDtIdx=0)}if(this.lastClockPulseMs=e,this.clockPulseCount++,this.clockRunning=!0,this.clockSyncEnabled&&this.clockBpm>0&&(this.clockPulseCount%6===0||Math.abs(this.clockBpm-this.lastEmittedBpm)>=.2)){this.lastEmittedBpm=this.clockBpm;const s=this.getClockState();for(const i of this.clockListeners)i(this.clockBpm,s)}if(this.clockPulseCount%24===1){const s=this.clockBpm>0?`${this.clockBpm.toFixed(1)} BPM`:"SYNCING";this.emitActivity({kind:"clock",channel:0,summary:`MIDI CLK · ${s}`,timestampMs:e})}}else t===250?(this.clockRunning=!0,this.clockPulseCount=0,this.clockDtCount=0,this.clockDtIdx=0,this.lastClockPulseMs=0,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK START",timestampMs:e})):t===251?(this.clockRunning=!0,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK CONTINUE",timestampMs:e})):t===252&&(this.clockRunning=!1,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK STOP",timestampMs:e}))}handleNoteOn(t,e,s,i){const n=s/127;this.noteStack=this.noteStack.filter(r=>r.note!==e),this.noteStack.push({note:e,velocity:n,channel:t}),this.lastNote=e,this.lastChannel=t;const a=W(e),o={type:"noteon",channel:t,note:e,noteName:a,freqHz:J(e,this.pitchBendSemitones),vOct:Z(e,this.pitchBendSemitones),velocity:n,gate:1,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const r of this.noteListeners)r(o);for(const r of this.polyNoteListeners)r(o);this.emitActivity({kind:"note",channel:t,summary:`CH${t} NOTE ${a} v${s}`,timestampMs:i})}handleNoteOff(t,e,s){this.noteStack=this.noteStack.filter(o=>o.note!==e);const i=this.noteStack.length>0?this.noteStack[this.noteStack.length-1]:null,n=W(e),a={type:"noteoff",channel:t,note:e,noteName:n,freqHz:J(e,this.pitchBendSemitones),vOct:Z(e,this.pitchBendSemitones),velocity:0,gate:0,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const o of this.polyNoteListeners)o(a);if(i){this.lastNote=i.note,this.lastChannel=i.channel;const o={type:"noteon",channel:i.channel,note:i.note,noteName:W(i.note),freqHz:J(i.note,this.pitchBendSemitones),vOct:Z(i.note,this.pitchBendSemitones),velocity:i.velocity,gate:1,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const r of this.noteListeners)r(o)}else for(const o of this.noteListeners)o(a);this.emitActivity({kind:"note",channel:t,summary:`CH${t} OFF ${n}`,timestampMs:s})}handlePitchBend(t,e,s,i){const n=s<<7|e,a=Math.max(-1,Math.min(1,(n-8192)/8192)),o=a*this.pitchBendRangeSemitones;this.pitchBendNorm=a,this.pitchBendSemitones=o;const r=this.noteStack.length>0?this.noteStack[this.noteStack.length-1]:null,l=r?r.note:this.lastNote,h={type:"pitchbend",channel:r?r.channel:this.lastChannel||t,note:l,noteName:W(l),freqHz:J(l,o),vOct:Z(l,o),velocity:r?r.velocity:0,gate:r?1:0,pitchBend:a,pitchBendSemitones:o,activeNotesCount:this.noteStack.length};for(const p of this.noteListeners)p(h);const u=o>=0?"+":"";this.emitActivity({kind:"pitchbend",channel:t,summary:`CH${t} BEND ${u}${o.toFixed(2)}st`,timestampMs:i})}handleControlChange(t,e,s,i){if(e===120||e===123){if(this.noteStack.length>0){const l=this.noteStack[this.noteStack.length-1];this.noteStack=[];const h={type:"noteoff",channel:t,note:l.note,noteName:W(l.note),freqHz:J(l.note,this.pitchBendSemitones),vOct:Z(l.note,this.pitchBendSemitones),velocity:0,gate:0,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:0};for(const u of this.noteListeners)u(h)}this.emitActivity({kind:"cc",channel:t,summary:`CH${t} ALL NOTES OFF`,timestampMs:i});return}if(this.learnTarget){const l=this.learnTarget;this.learnTarget=null,this.addMapping({cc:e,channel:t,moduleId:l.moduleId,paramId:l.paramId,min:l.min,max:l.max,label:l.label,scale:l.scale});for(const h of this.learnListeners)h(null)}const n=s/127,a=`${t}:${e}`,o=this.lastCcNorm.get(a),r=o!==void 0?n-o:0;this.lastCcNorm.set(a,n);for(const l of this.mappings){if(l.cc!==e||l.channel!==0&&l.channel!==t)continue;let h;l.scale==="log"&&l.min>0&&l.max>l.min?h=l.min*Math.pow(l.max/l.min,n):l.scale==="discrete"?h=Math.round(l.min+n*(l.max-l.min)):h=l.min+n*(l.max-l.min);for(const u of this.paramListeners)u(l.moduleId,l.paramId,h,r)}this.emitActivity({kind:"cc",channel:t,summary:`CH${t} CC${e} = ${s}`,timestampMs:i})}emitActivity(t){for(const e of this.activityListeners)e(t)}emitMappings(){const t=this.getMappings();for(const e of this.mappingListeners)e(t)}loadPersistedMappings(){if(typeof localStorage>"u")return[];try{const t=localStorage.getItem(Wt);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return[];const s=[];for(const i of e)i&&typeof i.cc=="number"&&typeof i.channel=="number"&&typeof i.moduleId=="string"&&typeof i.paramId=="string"&&typeof i.min=="number"&&typeof i.max=="number"&&typeof i.label=="string"&&s.push({cc:Math.max(0,Math.min(127,Math.round(i.cc))),channel:Math.max(0,Math.min(16,Math.round(i.channel))),moduleId:i.moduleId,paramId:i.paramId,min:i.min,max:i.max,label:i.label,scale:i.scale==="log"||i.scale==="discrete"||i.scale==="linear"?i.scale:void 0});return s}catch{return[]}}persistMappings(){if(!(typeof localStorage>"u"))try{localStorage.setItem(Wt,JSON.stringify(this.mappings))}catch{}}}const zt={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11,KeyQ:12,Digit2:13,KeyW:14,Digit3:15,KeyE:16,KeyR:17,Digit5:18,KeyT:19,Digit6:20,KeyY:21,Digit7:22,KeyU:23,KeyI:24},Kt={z:0,s:1,x:2,d:3,c:4,v:5,g:6,b:7,h:8,n:9,j:10,m:11,q:12,2:13,w:14,3:15,e:16,r:17,5:18,t:19,6:20,y:21,7:22,u:23,i:24},ls=new Set(["BracketLeft","Minus"]),hs=new Set(["BracketRight","Equal"]),ds=new Set(["[","-"]),us=new Set(["]","="]),jt=1,Yt=6,ps=3;function Xt(c){if(!c||typeof c!="object")return!1;const t=c,e=typeof t.tagName=="string"?t.tagName.toLowerCase():"";return!!(e==="input"||e==="textarea"||e==="select"||t.isContentEditable||typeof t.closest=="function"&&t.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'))}function ms(c){if(c.code&&c.code in zt)return zt[c.code];const t=typeof c.key=="string"?c.key.toLowerCase():"";if(t&&t in Kt)return Kt[t]}function fs(c){if(c.code){if(ls.has(c.code))return-1;if(hs.has(c.code))return 1}if(c.key){if(ds.has(c.key))return-1;if(us.has(c.key))return 1}return 0}class gs{enabled;baseOctave;velocity;lastNoteName="";isTargetAvailable;heldStack=[];noteListeners=new Set;polyNoteListeners=new Set;stateListeners=new Set;attached=!1;constructor(t={}){this.enabled=t.initialEnabled??!0,this.baseOctave=Math.max(jt,Math.min(Yt,t.initialOctave??ps)),this.velocity=Math.max(.05,Math.min(1,t.velocity??.85)),this.isTargetAvailable=t.isTargetAvailable??(()=>!0)}attach(){this.attached||typeof window>"u"||(this.attached=!0,window.addEventListener("keydown",this.onKeyDown,!0),window.addEventListener("keyup",this.onKeyUp,!0),window.addEventListener("blur",this.onBlur),typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChange))}detach(){!this.attached||typeof window>"u"||(this.releaseAll(),this.attached=!1,window.removeEventListener("keydown",this.onKeyDown,!0),window.removeEventListener("keyup",this.onKeyUp,!0),window.removeEventListener("blur",this.onBlur),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChange))}dispose(){this.detach(),this.noteListeners.clear(),this.polyNoteListeners.clear(),this.stateListeners.clear()}get isEnabled(){return this.enabled}get octave(){return this.baseOctave}getRangeLabel(){return`C${this.baseOctave}–C${this.baseOctave+2}`}getState(){return{enabled:this.enabled,baseOctave:this.baseOctave,velocity:this.velocity,activeNotesCount:this.heldStack.length,lastNoteName:this.lastNoteName}}setEnabled(t){this.enabled!==t&&(this.enabled=t,t||this.releaseAll(),this.emitState())}toggle(){return this.setEnabled(!this.enabled),this.enabled}shiftOctave(t){const e=Math.max(jt,Math.min(Yt,this.baseOctave+t));e!==this.baseOctave&&(this.baseOctave=e,this.emitState())}releaseAll(){if(this.heldStack.length===0)return;const t=this.heldStack.slice(),e=t[t.length-1];this.heldStack.length=0;for(const s of t)this.emitPolyNote("noteoff",s.note,0,0);this.emitNote("noteoff",e.note,0,0),this.emitState()}onNote(t){return this.noteListeners.add(t),()=>this.noteListeners.delete(t)}onPolyNote(t){return this.polyNoteListeners.add(t),()=>this.polyNoteListeners.delete(t)}onStateChange(t){return this.stateListeners.add(t),()=>this.stateListeners.delete(t)}onBlur=()=>{this.releaseAll()};onVisibilityChange=()=>{typeof document<"u"&&document.hidden&&this.releaseAll()};shouldIgnoreEvent(t){return!!(t.metaKey||t.ctrlKey||t.altKey||Xt(t.target)||typeof document<"u"&&Xt(document.activeElement))}onKeyDown=t=>{if(!this.enabled||!this.isTargetAvailable()||this.shouldIgnoreEvent(t))return;const e=fs(t);if(e!==0){t.preventDefault(),t.stopPropagation(),t.repeat||this.shiftOctave(e);return}const s=ms(t);if(s===void 0||(t.preventDefault(),t.stopPropagation(),t.repeat))return;const i=t.code||t.key.toLowerCase(),n=Math.max(0,Math.min(127,(this.baseOctave+1)*12+s)),a=this.heldStack.findIndex(o=>o.id===i);a>=0&&this.heldStack.splice(a,1),this.heldStack.push({id:i,note:n}),this.lastNoteName=W(n),this.emitPolyNote("noteon",n,this.velocity,1),this.emitNote("noteon",n,this.velocity,1),this.emitState()};onKeyUp=t=>{const e=t.code||t.key.toLowerCase(),s=this.heldStack.findIndex(n=>n.id===e);if(s<0)return;const[i]=this.heldStack.splice(s,1);if(this.emitPolyNote("noteoff",i.note,0,0),!this.enabled||!this.isTargetAvailable()){this.heldStack.length===0&&(this.emitNote("noteoff",i.note,0,0),this.emitState());return}if(this.heldStack.length>0){const n=this.heldStack[this.heldStack.length-1];this.lastNoteName=W(n.note),this.emitNote("noteon",n.note,this.velocity,1)}else this.emitNote("noteoff",i.note,0,0);this.emitState()};buildNoteEvent(t,e,s,i){return{type:t,channel:1,note:e,noteName:W(e),freqHz:J(e,0),vOct:Z(e,0),velocity:s,gate:i,pitchBend:0,pitchBendSemitones:0,activeNotesCount:this.heldStack.length}}emitNote(t,e,s,i){const n=this.buildNoteEvent(t,e,s,i);for(const a of this.noteListeners)a(n)}emitPolyNote(t,e,s,i){if(this.polyNoteListeners.size===0)return;const n=this.buildNoteEvent(t,e,s,i);for(const a of this.polyNoteListeners)a(n)}emitState(){const t=this.getState();for(const e of this.stateListeners)e(t)}}class bs{voiceNote=new Int16Array(4).fill(-1);voiceHeld=new Uint8Array(4);allocOrder=new Uint32Array(4);releaseOrder=new Uint32Array(4);allocSeq=0;releaseSeq=0;rrCursor=0;noteOn(t,e){const s=Math.max(0,Math.min(127,Math.round(t))),i=Math.max(0,Math.min(1,e));let n=-1;for(let a=0;a<4;a++)if(this.voiceHeld[a]&&this.voiceNote[a]===s){n=a;break}if(n<0){let a=1/0;for(let o=0;o<4;o++){const r=this.rrCursor+o&3;!this.voiceHeld[r]&&this.releaseOrder[r]<a&&(a=this.releaseOrder[r],n=r)}}if(n<0){let a=1/0;for(let o=0;o<4;o++)this.allocOrder[o]<a&&(a=this.allocOrder[o],n=o)}return this.voiceNote[n]=s,this.voiceHeld[n]=1,this.allocOrder[n]=++this.allocSeq,this.rrCursor=n+1&3,{voice:n,note:s,velocity:i}}noteOff(t){const e=Math.max(0,Math.min(127,Math.round(t)));for(let s=0;s<4;s++)if(this.voiceHeld[s]&&this.voiceNote[s]===e)return this.voiceHeld[s]=0,this.releaseOrder[s]=++this.releaseSeq,s;return-1}releaseAll(){const t=[];for(let e=0;e<4;e++)this.voiceHeld[e]&&(this.voiceHeld[e]=0,this.releaseOrder[e]=++this.releaseSeq,t.push(e));return t}reset(){this.voiceNote.fill(-1),this.voiceHeld.fill(0),this.allocOrder.fill(0),this.releaseOrder.fill(0),this.allocSeq=0,this.releaseSeq=0,this.rrCursor=0}}const Qt="data-kirchhoff-io-styles",Mt=20,ys=`
.kio-backdrop {
  position: fixed;
  inset: 0;
  z-index: 940;
  background: rgba(22, 24, 28, 0.56);
  backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms cubic-bezier(0.22, 1, 0.36, 1);
}
.kio-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.kio-drawer {
  position: fixed;
  top: 12px;
  right: 12px;
  bottom: 12px;
  width: min(468px, calc(100vw - 24px));
  z-index: 950;
  display: flex;
  flex-direction: column;
  background: #1d2026;
  border: 1px solid rgba(226, 232, 240, 0.2);
  border-radius: 7px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.78), 0 0 0 1px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  color: var(--ink-primary, #eceef2);
  font-family: var(--font-mono, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace);
  font-size: 11px;
  line-height: 1.4;
  transform: translateX(calc(100% + 24px));
  opacity: 0;
  pointer-events: none;
  transition:
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
}
.kio-drawer.open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.kio-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 11px 14px;
  background: linear-gradient(180deg, #23272f 0%, #1d2026 100%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.14);
  flex-shrink: 0;
}
.kio-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.kio-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #eceef2;
}
.kio-chip {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 2px;
  border: 1px solid rgba(126, 168, 154, 0.38);
  background: rgba(126, 168, 154, 0.12);
  color: #7ea89a;
  white-space: nowrap;
}
.kio-chip.warn {
  border-color: rgba(217, 119, 87, 0.48);
  background: rgba(217, 119, 87, 0.14);
  color: #d97757;
}
.kio-chip.good {
  border-color: rgba(126, 168, 154, 0.42);
  background: rgba(126, 168, 154, 0.11);
  color: #7ea89a;
}
.kio-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 3px;
  border: 1px solid rgba(226, 232, 240, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: #9aa2b1;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 120ms ease, color 120ms ease, background 120ms ease;
}
.kio-close:hover {
  border-color: rgba(217, 119, 87, 0.55);
  color: #eceef2;
  background: rgba(217, 119, 87, 0.16);
}

.kio-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(154, 162, 177, 0.3) transparent;
}

.kio-section {
  background: #1d2026;
  border: 1px solid rgba(226, 232, 240, 0.12);
  border-radius: 5px;
  padding: 11px 12px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.kio-sec-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(226, 232, 240, 0.09);
}
.kio-sec-title {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #eceef2;
}
.kio-accent-bar {
  width: 3px;
  height: 12px;
  border-radius: 1px;
  background: #7ea89a;
  box-shadow: none;
}
.kio-accent-bar.vermilion {
  background: #d97757;
  box-shadow: none;
}

.kio-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kio-field-row {
  display: flex;
  align-items: center;
  gap: 7px;
}
.kio-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.kio-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #9aa2b1;
}

.kio-select {
  width: 100%;
  min-width: 0;
  height: 28px;
  padding: 0 8px;
  border-radius: 3px;
  border: 1px solid rgba(226, 232, 240, 0.18);
  background: #16181c;
  color: #eceef2;
  font-family: inherit;
  font-size: 10.5px;
  cursor: pointer;
  outline: none;
  transition: border-color 120ms ease;
}
.kio-select:hover:not(:disabled) {
  border-color: rgba(126, 168, 154, 0.5);
}
.kio-select:focus {
  border-color: #7ea89a;
}
.kio-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.kio-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid rgba(226, 232, 240, 0.22);
  background: linear-gradient(180deg, #23272f 0%, #1d2026 100%);
  color: #eceef2;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease, box-shadow 140ms ease;
}
.kio-btn:hover:not(:disabled) {
  border-color: rgba(226, 232, 240, 0.45);
  background: #23272f;
}
.kio-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.kio-btn-sm {
  height: 24px;
  padding: 0 8px;
  font-size: 9.5px;
}
.kio-btn-cyan {
  border-color: rgba(126, 168, 154, 0.52);
  background: rgba(126, 168, 154, 0.15);
  color: #7ea89a;
}
.kio-btn-cyan:hover:not(:disabled) {
  border-color: #7ea89a;
  box-shadow: none;
}
.kio-btn-active {
  border-color: rgba(126, 168, 154, 0.62);
  background: rgba(126, 168, 154, 0.16);
  color: #7ea89a;
  box-shadow: none;
}
.kio-btn-arm {
  border-color: rgba(217, 119, 87, 0.72);
  background: rgba(217, 119, 87, 0.16);
  color: #d97757;
  box-shadow: none;
  animation: kio-pulse 1.05s ease-in-out infinite;
}
.kio-btn-danger {
  border-color: rgba(217, 119, 87, 0.38);
  color: #d97757;
}
.kio-btn-danger:hover:not(:disabled) {
  border-color: #d97757;
  background: rgba(217, 119, 87, 0.18);
  color: #eceef2;
}

@keyframes kio-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(217, 119, 87, 0.0); }
  50% { box-shadow: 0 0 0 3px rgba(217, 119, 87, 0.22); }
}

.kio-slider-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.kio-slider {
  flex: 1;
  accent-color: #7ea89a;
  height: 4px;
  cursor: pointer;
}
.kio-val {
  min-width: 44px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: #7ea89a;
  font-weight: 600;
}

/* Segmented Studio LED Input Meter */
.kio-meter-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 7px;
  border-radius: 3px;
  background: #16181c;
  border: 1px solid rgba(226, 232, 240, 0.1);
}
.kio-meter-bars {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 2px;
  height: 10px;
}
.kio-meter-seg {
  border-radius: 1px;
  background: rgba(154, 162, 177, 0.13);
  transition: background 45ms linear, box-shadow 45ms linear;
}
.kio-meter-seg.lit-low {
  background: #7ea89a;
  box-shadow: none;
}
.kio-meter-seg.lit-mid {
  background: rgba(217, 119, 87, 0.55);
  box-shadow: none;
}
.kio-meter-seg.lit-hot {
  background: #d97757;
  box-shadow: none;
}
.kio-meter-db {
  min-width: 56px;
  text-align: right;
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
  color: #9aa2b1;
}

.kio-tip {
  padding: 7px 9px;
  border-radius: 3px;
  background: rgba(126, 168, 154, 0.06);
  border: 1px solid rgba(126, 168, 154, 0.22);
  color: #9aa2b1;
  font-size: 10px;
  line-height: 1.42;
}
.kio-tip code {
  color: #7ea89a;
  background: rgba(126, 168, 154, 0.14);
  padding: 0 4px;
  border-radius: 2px;
}
.kio-tip.present {
  background: rgba(126, 168, 154, 0.06);
  border-color: rgba(126, 168, 154, 0.28);
  color: #7ea89a;
}

.kio-hw-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5px;
}
.kio-hw-cell {
  background: #16181c;
  border: 1px solid rgba(226, 232, 240, 0.1);
  border-radius: 3px;
  padding: 5px 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.kio-hw-k {
  font-size: 8.5px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #9aa2b1;
}
.kio-hw-v {
  font-size: 10.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #eceef2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.kio-hw-v.ok { color: #7ea89a; }
.kio-hw-v.cyan { color: #7ea89a; }
.kio-hw-v.warn { color: #d97757; }

.kio-status-line {
  min-height: 14px;
  font-size: 10px;
  color: #9aa2b1;
}
.kio-status-line.err { color: #d97757; }
.kio-status-line.ok { color: #7ea89a; }

/* MIDI Monitor Strip */
.kio-midi-monitor {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 9px;
  border-radius: 3px;
  background: #16181c;
  border: 1px solid rgba(226, 232, 240, 0.12);
}
.kio-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #23272f;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.65);
  flex-shrink: 0;
  transition: background 90ms ease, box-shadow 90ms ease;
}
.kio-led.flash-cyan {
  background: #eceef2;
  box-shadow: none;
}
.kio-led.flash-hot {
  background: #d97757;
  box-shadow: none;
}
.kio-led.flash-green {
  background: #7ea89a;
  box-shadow: none;
}
.kio-midi-msg {
  flex: 1;
  min-width: 0;
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
  color: #eceef2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.kio-note-pill {
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
  color: #7ea89a;
  white-space: nowrap;
}

/* Toggle Switch Row */
.kio-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 7px 9px;
  border-radius: 3px;
  background: #16181c;
  border: 1px solid rgba(226, 232, 240, 0.11);
}
.kio-toggle-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.kio-toggle-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #eceef2;
}
.kio-toggle-sub {
  font-size: 9.5px;
  color: #9aa2b1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.kio-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}
.kio-switch input {
  accent-color: #d97757;
  width: 14px;
  height: 14px;
  cursor: pointer;
}

/* QWERTY Playable Keyboard Controls */
.kio-qwerty-controls {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}
.kio-qwerty-oct {
  min-width: 44px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.kio-qwerty-pill {
  min-width: 72px;
  height: 22px;
  padding: 0 7px;
  border-radius: 3px;
  border: 1px solid rgba(226, 232, 240, 0.18);
  background: #1d2026;
  color: #9aa2b1;
  font-family: inherit;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 120ms ease, background 120ms ease, color 120ms ease;
}
.kio-qwerty-pill:hover {
  border-color: rgba(126, 168, 154, 0.55);
  color: #eceef2;
}
.kio-qwerty-pill.active {
  border-color: rgba(126, 168, 154, 0.62);
  background: rgba(126, 168, 154, 0.16);
  color: #7ea89a;
}
.kio-qwerty-pill.standby {
  border-color: rgba(226, 232, 240, 0.14);
  background: rgba(255, 255, 255, 0.03);
  color: #9aa2b1;
}

/* CC Learn List */
.kio-cc-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 168px;
  overflow-y: auto;
}
.kio-cc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  padding: 5px 7px;
  border-radius: 3px;
  background: #16181c;
  border: 1px solid rgba(226, 232, 240, 0.1);
}
.kio-cc-item.inactive {
  opacity: 0.56;
  border-style: dashed;
}
.kio-cc-badge {
  font-size: 9.5px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 2px;
  background: rgba(217, 119, 87, 0.16);
  border: 1px solid rgba(217, 119, 87, 0.42);
  color: #d97757;
  white-space: nowrap;
}
.kio-cc-target {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  color: #eceef2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.kio-cc-range {
  font-size: 9px;
  color: #9aa2b1;
  white-space: nowrap;
}
.kio-cc-del {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid rgba(226, 232, 240, 0.16);
  background: transparent;
  color: #9aa2b1;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
}
.kio-cc-del:hover {
  border-color: #d97757;
  color: #eceef2;
  background: rgba(217, 119, 87, 0.22);
}
.kio-cc-empty {
  padding: 8px;
  text-align: center;
  border: 1px dashed rgba(226, 232, 240, 0.14);
  border-radius: 3px;
  color: #9aa2b1;
  font-size: 10px;
}

/* Top-bar Status Pill Helper */
.kio-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: var(--radius-sm, 3px);
  border: 1px solid rgba(226, 232, 240, 0.16);
  background: #23272f;
  color: #eceef2;
  font-family: var(--font-sans, sans-serif);
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transition: border-color 130ms ease, color 130ms ease, box-shadow 150ms ease;
}
.kio-status-pill:hover {
  border-color: #7ea89a;
  color: #eceef2;
}
.kio-status-pill.active {
  border-color: rgba(126, 168, 154, 0.72);
  color: #7ea89a;
  box-shadow: none;
}
.kio-status-pill {
  height: 28px;
  box-sizing: border-box;
}
.kio-status-pill .kio-pill-tags {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-left: 2px;
}
.kio-status-pill .kio-pill-tag {
  font-family: var(--font-mono, monospace);
  font-size: 9px;
  line-height: 1;
  letter-spacing: 0.03em;
  padding: 2px 4px;
  border-radius: 3px;
  border: 1px solid rgba(226, 232, 240, 0.09);
  color: rgba(154, 162, 177, 0.5);
  white-space: pre;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
}
.kio-status-pill .kio-pill-tag.bpm {
  min-width: 3ch;
  text-align: center;
}
/* Narrow windows: keep the top bar to two rows; the dot still shows the active state */
@media (max-width: 1100px) {
  .kio-status-pill .kio-pill-tags {
    display: none;
  }
}
.kio-status-pill .kio-pill-tag.lit {
  color: #7ea89a;
  border-color: rgba(126, 168, 154, 0.45);
  background: rgba(126, 168, 154, 0.1);
}
.kio-status-pill .kio-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(154, 162, 177, 0.4);
  transition: background 140ms ease, box-shadow 140ms ease;
}
.kio-status-pill.active .kio-pill-dot {
  background: #7ea89a;
  box-shadow: none;
}
`;function ks(){if(typeof document>"u"||document.head.querySelector(`style[${Qt}]`))return;const c=document.createElement("style");c.setAttribute(Qt,"1"),c.textContent=ys,document.head.appendChild(c)}function ot(c){return Math.abs(c)>=1e3?`${(c/1e3).toFixed(1)}k`:Math.abs(c)>=100?`${Math.round(c)}`:Number.isInteger(c)?String(c):c.toFixed(2).replace(/\.?0+$/,"")}function Jt(c){const t=c.modules.find(a=>a.kind==="clock");if(t)return t;const e=c.modules.filter(a=>a.kind==="dusg"&&O(a,"cycle")>=.5);if(e.length===0)return null;const s=e.find(a=>/clk|clock|bpm|16th|tempo|pulse/i.test(`${a.id} ${a.label??""}`));if(s)return s;const i=new Set(["logic","neural"]),n=new Set(c.modules.filter(a=>i.has(a.kind)).map(a=>a.id));for(const a of e)if(c.cables.some(r=>r.fromModule===a.id&&(r.fromPort==="out"||r.fromPort==="eoc")&&n.has(r.toModule)&&r.toPort==="clk"))return a;return e[0]}class vs{audioDevices;midi;qwerty;host;callbacks;backdrop;drawer;scanBtn;outSelect;inSelect;inToggleBtn;inGainSlider;inGainVal;meterSegs=[];meterDbEl;extInTipEl;audioStatusEl;hwRateEl;hwBaseLatEl;hwOutLatEl;hwSinkEl;midiConnectBtn;midiLedEl;midiMsgEl;midiNotePillEl;midiInSelect;midiOutSelect;midiTestNoteBtn;midiChannelSelect;noteTargetSelect;gateTargetSelect;clockSyncCheckbox;clockBpmChip;clockTargetSub;ccModSelect;ccParamSelect;ccLearnBtn;ccClearBtn;ccListEl;midiStatusEl;headerBadgeEl;qwertySubEl;qwertyOctChip;qwertyToggleBtn;statusButton=null;statusButtonText=null;statusTags=null;openState=!1;selectedOutputId="";selectedInputId="default";noteTargetValue="auto";keysPlaying=null;poly4Playing=null;poly4Allocator=new bs;gateTargetValue="none";meterRafId=null;lastMeterPaintMs=0;hwPollTimer=null;ledDecayTimer=null;unsubscribers=[];handleKeyDown=t=>{t.key==="Escape"&&this.openState&&(t.preventDefault(),this.close())};constructor(t,e,s){ks(),this.host=t,this.callbacks=e,this.audioDevices=new os,this.midi=new cs,this.qwerty=new gs({isTargetAvailable:()=>this.hasActiveKeysNode(),initialEnabled:!0});const i=s??document.body;this.backdrop=document.createElement("div"),this.backdrop.className="kio-backdrop",this.backdrop.addEventListener("click",()=>this.close()),this.drawer=document.createElement("aside"),this.drawer.className="kio-drawer",this.drawer.setAttribute("role","dialog"),this.drawer.setAttribute("aria-label","Kirchhoff Studio Audio & MIDI I/O"),this.drawer.setAttribute("aria-hidden","true"),this.drawer.innerHTML=`
      <header class="kio-header">
        <div class="kio-title-group">
          <span class="kio-title">STUDIO I/O // AUDIO &amp; MIDI</span>
          <span class="kio-chip" data-kio-header-badge>STANDBY</span>
        </div>
        <button type="button" class="kio-close" data-kio-close title="Close Studio I/O (Esc)" aria-label="Close Studio I/O">&times;</button>
      </header>

      <div class="kio-body">
        <!-- AUDIO INTERFACE / SOUNDCARD -->
        <section class="kio-section">
          <div class="kio-sec-head">
            <div class="kio-sec-title">
              <span class="kio-accent-bar"></span>
              <span>AUDIO INTERFACE / SOUNDCARD</span>
            </div>
            <button type="button" class="kio-btn kio-btn-sm kio-btn-cyan" data-kio-scan title="Request brief audio permission to reveal full soundcard names">SCAN DEVICES</button>
          </div>

          <div class="kio-field">
            <label class="kio-label">
              <span>SOUNDCARD / OUTPUT</span>
              <span data-kio-sink-note>setSinkId</span>
            </label>
            <select class="kio-select" data-kio-out-select></select>
          </div>

          <div class="kio-field">
            <label class="kio-label">
              <span>EXTERNAL AUDIO IN &rarr; EXT-IN</span>
              <span>RAW STUDIO CAPTURE</span>
            </label>
            <div class="kio-field-row">
              <select class="kio-select" data-kio-in-select></select>
              <button type="button" class="kio-btn" data-kio-in-toggle>ENABLE IN</button>
            </div>
          </div>

          <div class="kio-field">
            <label class="kio-label">
              <span>INPUT PREAMP GAIN</span>
              <span class="kio-val" data-kio-in-gain-val>1.00&times;</span>
            </label>
            <div class="kio-slider-row">
              <input type="range" class="kio-slider" min="0" max="4" step="0.05" value="1" data-kio-in-gain title="External input gain (0..4x) · double-click to reset to 1.00x" />
            </div>
          </div>

          <div class="kio-meter-wrap" title="Post-gain external audio input RMS level">
            <div class="kio-meter-bars" data-kio-meter-bars></div>
            <span class="kio-meter-db" data-kio-meter-db>-&infin; dB</span>
          </div>

          <div class="kio-tip" data-kio-extin-tip>
            TIP: Click <code>+ EXT-IN</code> in the Patchbay and cable <code>OUT</code> into any filter, wavefolder, BBD, or Neural AI <code>LISTEN</code> port.
          </div>

          <div class="kio-hw-grid">
            <div class="kio-hw-cell">
              <span class="kio-hw-k">SAMPLE RATE</span>
              <span class="kio-hw-v cyan" data-kio-hw-rate>48.0 kHz</span>
            </div>
            <div class="kio-hw-cell">
              <span class="kio-hw-k">BASE LAT</span>
              <span class="kio-hw-v" data-kio-hw-base>&mdash;</span>
            </div>
            <div class="kio-hw-cell">
              <span class="kio-hw-k">OUT LAT</span>
              <span class="kio-hw-v" data-kio-hw-out>&mdash;</span>
            </div>
            <div class="kio-hw-cell">
              <span class="kio-hw-k">SINK API</span>
              <span class="kio-hw-v" data-kio-hw-sink>&mdash;</span>
            </div>
          </div>

          <div class="kio-status-line" data-kio-audio-status></div>
        </section>

        <!-- WEB MIDI & HARDWARE SYNC -->
        <section class="kio-section">
          <div class="kio-sec-head">
            <div class="kio-sec-title">
              <span class="kio-accent-bar vermilion"></span>
              <span>MIDI CONTROLLER &amp; CLOCK SYNC</span>
            </div>
            <button type="button" class="kio-btn kio-btn-sm kio-btn-cyan" data-kio-midi-connect>ENABLE WEB MIDI</button>
          </div>

          <div class="kio-midi-monitor">
            <span class="kio-led" data-kio-midi-led title="MIDI Activity LED"></span>
            <span class="kio-midi-msg" data-kio-midi-msg>WEB MIDI STANDBY</span>
            <span class="kio-note-pill" data-kio-note-pill></span>
          </div>

          <div class="kio-toggle-row" title="Play any KEYS node directly from your computer keyboard (Z–M lower octave, Q–I upper octave, [ / ] or - / = octave shift)">
            <div class="kio-toggle-meta">
              <span class="kio-toggle-title">QWERTY PLAYABLE KEYBOARD</span>
              <span class="kio-toggle-sub" data-kio-qwerty-sub>Z–M / Q–I · [ ] octave</span>
            </div>
            <div class="kio-qwerty-controls">
              <span class="kio-chip kio-qwerty-oct" data-kio-qwerty-oct title="Active QWERTY pitch range (shift with [ / ] or - / =)">C3–C5</span>
              <button type="button" class="kio-qwerty-pill" data-kio-qwerty-toggle title="Toggle QWERTY keyboard playback for KEYS nodes">QWERTY ON</button>
            </div>
          </div>

          <div class="kio-grid-2">
            <div class="kio-field">
              <label class="kio-label"><span>MIDI INPUT</span></label>
              <select class="kio-select" data-kio-midi-in></select>
            </div>
            <div class="kio-field">
              <label class="kio-label"><span>CHANNEL</span></label>
              <select class="kio-select" data-kio-midi-ch></select>
            </div>
          </div>

          <div class="kio-field">
            <label class="kio-label">
              <span>MIDI OUTPUT (HARDWARE SYNTH)</span>
              <span>OPTIONAL</span>
            </label>
            <div class="kio-field-row">
              <select class="kio-select" data-kio-midi-out></select>
              <button type="button" class="kio-btn kio-btn-sm" data-kio-midi-test disabled title="Send C3 test note to selected MIDI output">PING C3</button>
            </div>
          </div>

          <div class="kio-grid-2">
            <div class="kio-field">
              <label class="kio-label"><span>NOTE &rarr; SYNTH TARGET</span></label>
              <select class="kio-select" data-kio-note-target></select>
            </div>
            <div class="kio-field">
              <label class="kio-label"><span>GATE / VELOCITY</span></label>
              <select class="kio-select" data-kio-gate-target></select>
            </div>
          </div>

          <div class="kio-toggle-row">
            <div class="kio-toggle-meta">
              <span class="kio-toggle-title">EXT MIDI CLOCK SYNC (24 PPQN)</span>
              <span class="kio-toggle-sub" data-kio-clk-sub>Waiting for patch clock DUSG</span>
            </div>
            <span class="kio-chip" data-kio-clk-bpm>&mdash; BPM</span>
            <label class="kio-switch" title="Sync external 24-PPQN MIDI Clock BPM to active patch 16th-note clock DUSG fallMs">
              <input type="checkbox" data-kio-clk-sync />
            </label>
          </div>

          <!-- MIDI CC LEARN -->
          <div class="kio-field">
            <label class="kio-label">
              <span>MIDI CC LEARN (PERSISTED)</span>
              <button type="button" class="kio-btn kio-btn-sm kio-btn-danger" data-kio-cc-clear style="display:none">CLEAR ALL</button>
            </label>
            <div class="kio-grid-2">
              <select class="kio-select" data-kio-cc-mod></select>
              <select class="kio-select" data-kio-cc-param></select>
            </div>
            <div class="kio-field-row">
              <button type="button" class="kio-btn kio-btn-cyan" style="width:100%" data-kio-cc-learn>LEARN CC &mdash; TWIST HARDWARE KNOB</button>
            </div>
            <div class="kio-cc-list" data-kio-cc-list></div>
          </div>

          <div class="kio-status-line" data-kio-midi-status></div>
        </section>
      </div>
    `,i.appendChild(this.backdrop),i.appendChild(this.drawer),this.headerBadgeEl=this.drawer.querySelector("[data-kio-header-badge]"),this.scanBtn=this.drawer.querySelector("[data-kio-scan]"),this.outSelect=this.drawer.querySelector("[data-kio-out-select]"),this.inSelect=this.drawer.querySelector("[data-kio-in-select]"),this.inToggleBtn=this.drawer.querySelector("[data-kio-in-toggle]"),this.inGainSlider=this.drawer.querySelector("[data-kio-in-gain]"),this.inGainVal=this.drawer.querySelector("[data-kio-in-gain-val]"),this.meterDbEl=this.drawer.querySelector("[data-kio-meter-db]"),this.extInTipEl=this.drawer.querySelector("[data-kio-extin-tip]"),this.audioStatusEl=this.drawer.querySelector("[data-kio-audio-status]"),this.hwRateEl=this.drawer.querySelector("[data-kio-hw-rate]"),this.hwBaseLatEl=this.drawer.querySelector("[data-kio-hw-base]"),this.hwOutLatEl=this.drawer.querySelector("[data-kio-hw-out]"),this.hwSinkEl=this.drawer.querySelector("[data-kio-hw-sink]"),this.midiConnectBtn=this.drawer.querySelector("[data-kio-midi-connect]"),this.midiLedEl=this.drawer.querySelector("[data-kio-midi-led]"),this.midiMsgEl=this.drawer.querySelector("[data-kio-midi-msg]"),this.midiNotePillEl=this.drawer.querySelector("[data-kio-note-pill]"),this.midiInSelect=this.drawer.querySelector("[data-kio-midi-in]"),this.midiOutSelect=this.drawer.querySelector("[data-kio-midi-out]"),this.midiTestNoteBtn=this.drawer.querySelector("[data-kio-midi-test]"),this.midiChannelSelect=this.drawer.querySelector("[data-kio-midi-ch]"),this.noteTargetSelect=this.drawer.querySelector("[data-kio-note-target]"),this.gateTargetSelect=this.drawer.querySelector("[data-kio-gate-target]"),this.clockSyncCheckbox=this.drawer.querySelector("[data-kio-clk-sync]"),this.clockBpmChip=this.drawer.querySelector("[data-kio-clk-bpm]"),this.clockTargetSub=this.drawer.querySelector("[data-kio-clk-sub]"),this.ccModSelect=this.drawer.querySelector("[data-kio-cc-mod]"),this.ccParamSelect=this.drawer.querySelector("[data-kio-cc-param]"),this.ccLearnBtn=this.drawer.querySelector("[data-kio-cc-learn]"),this.ccClearBtn=this.drawer.querySelector("[data-kio-cc-clear]"),this.ccListEl=this.drawer.querySelector("[data-kio-cc-list]"),this.midiStatusEl=this.drawer.querySelector("[data-kio-midi-status]"),this.qwertySubEl=this.drawer.querySelector("[data-kio-qwerty-sub]"),this.qwertyOctChip=this.drawer.querySelector("[data-kio-qwerty-oct]"),this.qwertyToggleBtn=this.drawer.querySelector("[data-kio-qwerty-toggle]");const n=this.drawer.querySelector("[data-kio-meter-bars]");for(let o=0;o<Mt;o++){const r=document.createElement("span");r.className="kio-meter-seg",n.appendChild(r),this.meterSegs.push(r)}const a=document.createElement("option");a.value="0",a.textContent="Omni (All 1..16)",this.midiChannelSelect.appendChild(a);for(let o=1;o<=16;o++){const r=document.createElement("option");r.value=String(o),r.textContent=`Channel ${o}`,this.midiChannelSelect.appendChild(r)}this.bindDomEvents(),this.bindManagerEvents(),this.qwerty.attach(),window.addEventListener("keydown",this.handleKeyDown),this.renderMidiDevices([],[]),this.renderMappings(this.midi.getMappings()),this.refreshPatchTargets(),this.renderQwertyState(),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.audioDevices.enumerateDevices().then(o=>this.renderAudioDevices(o)),this.syncStatusBadge()}get isOpen(){return this.openState}open(){this.openState||(this.openState=!0,this.backdrop.classList.add("open"),this.drawer.classList.add("open"),this.drawer.setAttribute("aria-hidden","false"),this.refreshPatchTargets(),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.audioDevices.enumerateDevices().then(t=>this.renderAudioDevices(t)),this.syncMeterLoop(),this.hwPollTimer===null&&(this.hwPollTimer=window.setInterval(()=>{this.openState&&this.renderHardwareStatus(this.host.getAudioHardwareStatus())},600)))}close(){this.openState&&(this.openState=!1,this.backdrop.classList.remove("open"),this.drawer.classList.remove("open"),this.drawer.setAttribute("aria-hidden","true"),this.stopMeterLoop(),this.hwPollTimer!==null&&(clearInterval(this.hwPollTimer),this.hwPollTimer=null))}toggle(){this.openState?this.close():this.open()}notifyPatchChanged(){this.refreshPatchTargets()}refreshPatchTargets(){const t=this.callbacks.getPatch(),e=t.modules.some(m=>m.kind==="extin");this.extInTipEl.classList.toggle("present",e),this.extInTipEl.innerHTML=e?"<code>EXT-IN</code> MODULE DETECTED IN ACTIVE PATCH &mdash; arm <strong>ENABLE IN</strong> above to feed live hardware audio into the analog circuit.":"TIP: Click <code>+ EXT-IN</code> in the Patchbay and cable its <code>OUT</code> jack into any filter, wavefolder, BBD, or Neural AI <code>LISTEN</code> port.";const s=t.modules.filter(m=>m.kind==="poly4"),i=t.modules.filter(m=>m.kind==="keys"),n=t.modules.filter(m=>m.kind==="osc"),a=t.modules.filter(m=>m.kind==="neural"),o=this.noteTargetValue;this.noteTargetSelect.innerHTML="";const r=(m,L,M)=>{const P=document.createElement("option");P.value=L,P.textContent=M,m.appendChild(P)};r(this.noteTargetSelect,"off","Off (Ignore Notes)");for(const m of s)r(this.noteTargetSelect,`poly4:${m.id}`,`POLY4 · ${m.label||m.id} → 4-voice poly`);for(const m of i)r(this.noteTargetSelect,`keys:${m.id}`,`KEYS · ${m.label||m.id} → pitch + gate`);n.length>1&&r(this.noteTargetSelect,"all-osc",`All Oscillators (${n.length}× Unison)`);for(const m of n)r(this.noteTargetSelect,`osc:${m.id}`,`OSC · ${m.label||m.id} → freq`);for(const m of a)r(this.noteTargetSelect,`neural:${m.id}`,`AI · ${m.label||m.id} → jam bias`);const l=new Set(Array.from(this.noteTargetSelect.options).map(m=>m.value));o!=="auto"&&l.has(o)?this.noteTargetValue=o:s.length>0?this.noteTargetValue=`poly4:${s[0].id}`:i.length>0?this.noteTargetValue=`keys:${i[0].id}`:n.length>0?this.noteTargetValue=`osc:${n[0].id}`:a.length>0?this.noteTargetValue=`neural:${a[0].id}`:this.noteTargetValue="off",this.noteTargetSelect.value=this.noteTargetValue;const h=t.modules.filter(m=>m.kind==="vactrol"),u=t.modules.filter(m=>m.kind==="dusg"),p=this.gateTargetValue;this.gateTargetSelect.innerHTML="",r(this.gateTargetSelect,"none","Pitch Only (Keep Patch Gate)"),n.length>0&&r(this.gateTargetSelect,"osc-amp","Target OSC Amp (Gate + Vel)");for(const m of h)r(this.gateTargetSelect,`vactrol:${m.id}`,`LPG · ${m.label||m.id} → bias`);for(const m of u)r(this.gateTargetSelect,`dusg:${m.id}`,`DUSG · ${m.label||m.id} → cycle`);const b=new Set(Array.from(this.gateTargetSelect.options).map(m=>m.value));this.gateTargetValue=b.has(p)?p:"none",this.gateTargetSelect.value=this.gateTargetValue;const d=Jt(t);this.clockTargetSub.textContent=d?`Target: ${d.label||d.id} (${d.id}.${d.kind==="clock"?"bpm":"fallMs"})`:"No clock in active patch";const f=this.ccModSelect.value,g=this.ccParamSelect.value;this.ccModSelect.innerHTML="";const k=t.modules.filter(m=>V[m.kind].params.length>0);for(const m of k){const L=V[m.kind];r(this.ccModSelect,m.id,`${L.shortName} · ${m.label||m.id}`)}k.some(m=>m.id===f)&&(this.ccModSelect.value=f),this.populateCcParams(g),this.renderMappings(this.midi.getMappings()),s.length===0&&i.length===0?(this.qwerty.releaseAll(),this.keysPlaying=null,this.releasePoly4Voices()):this.poly4Playing&&!s.some(m=>m.id===this.poly4Playing)&&(this.poly4Allocator.reset(),this.poly4Playing=null),this.renderQwertyState(),this.syncStatusBadge()}createStatusButton(){const t=document.createElement("button");t.type="button",t.className="kio-status-pill",t.title="Open Studio Audio Interface & Web MIDI I/O drawer";const e=document.createElement("span");e.className="kio-pill-dot";const s=document.createElement("span");s.textContent="I/O";const i=document.createElement("span");i.className="kio-pill-tags";const n=(a,o="")=>{const r=document.createElement("span");return r.className=`kio-pill-tag${o?` ${o}`:""}`,r.textContent=a,i.appendChild(r),r};return this.statusTags={keys:n("KEYS"),midi:n("MIDI"),ext:n("IN"),bpm:n("---","bpm")},t.appendChild(e),t.appendChild(s),t.appendChild(i),t.addEventListener("click",()=>this.toggle()),this.statusButton=t,this.statusButtonText=s,this.syncStatusBadge(),t}getStatusBadge(){const t=this.host.getAudioHardwareStatus(),e=this.midi.isConnected,s=this.midi.getClockState(),i=this.qwerty.isEnabled&&this.hasActiveKeysNode(),n=["I/O"];if(i&&n.push(`KEYS ${this.qwerty.getRangeLabel()}`),e){const o=this.midi.getInputs().length;n.push(o>0?`MIDI(${o})`:"MIDI")}t.inputActive&&n.push("EXT-IN"),s.syncEnabled&&s.bpm>0&&s.running&&n.push(`${Math.round(s.bpm)} BPM`);const a=i||e||t.inputActive||s.syncEnabled&&s.running;return{text:n.join(" · "),active:a}}dispose(){this.close(),window.removeEventListener("keydown",this.handleKeyDown),this.ledDecayTimer!==null&&(clearTimeout(this.ledDecayTimer),this.ledDecayTimer=null);for(const t of this.unsubscribers)t();this.unsubscribers=[],this.audioDevices.dispose(),this.midi.dispose(),this.qwerty.dispose(),this.backdrop.remove(),this.drawer.remove()}bindDomEvents(){this.drawer.querySelector("[data-kio-close]").addEventListener("click",()=>this.close()),this.scanBtn.addEventListener("click",async()=>{this.scanBtn.disabled=!0,this.scanBtn.textContent="SCANNING…",this.setAudioStatus("Requesting brief OS permission to reveal soundcard names…","neutral");const t=await this.audioDevices.requestPermissionAndRefresh();this.renderAudioDevices({inputs:t.inputs,outputs:t.outputs}),this.scanBtn.disabled=!1,this.scanBtn.textContent="SCAN DEVICES",t.ok?this.setAudioStatus(`Detected ${t.outputs.length} output(s) and ${t.inputs.length} input(s).`,"ok"):this.setAudioStatus(t.error||"Could not scan audio interfaces.","err")}),this.outSelect.addEventListener("change",async()=>{const t=this.outSelect.value;this.selectedOutputId=t;const e=await this.host.setOutputDevice(t);if(e.ok){const s=this.outSelect.selectedOptions[0]?.textContent||"Default Output";this.setAudioStatus(`Output routed → ${s}`,"ok")}else this.setAudioStatus(e.error||"Output routing unsupported.","err");this.renderHardwareStatus(this.host.getAudioHardwareStatus())}),this.inSelect.addEventListener("change",async()=>{this.selectedInputId=this.inSelect.value||"default",this.host.getAudioHardwareStatus().inputActive&&await this.armExternalInput()}),this.inToggleBtn.addEventListener("click",async()=>{this.host.getAudioHardwareStatus().inputActive?(await this.host.setInputDevice(null),this.setAudioStatus("External audio input disconnected.","neutral"),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.syncMeterLoop(),this.syncStatusBadge()):await this.armExternalInput()}),this.inGainSlider.addEventListener("input",()=>{const t=parseFloat(this.inGainSlider.value);this.inGainVal.textContent=`${t.toFixed(2)}×`,this.host.setInputGain(t)}),re(this.inGainSlider,()=>{this.inGainSlider.value="1",this.inGainVal.textContent="1.00×",this.host.setInputGain(1)}),this.midiConnectBtn.addEventListener("click",async()=>{this.midiConnectBtn.disabled=!0,this.midiConnectBtn.textContent="CONNECTING…";const t=await this.midi.connect();this.midiConnectBtn.disabled=!1,t.ok?(this.midiConnectBtn.textContent="MIDI CONNECTED",this.midiConnectBtn.classList.remove("kio-btn-cyan"),this.midiConnectBtn.classList.add("kio-btn-active"),this.midiMsgEl.textContent=t.inputs.length>0?`LISTENING ON ${t.inputs.length} MIDI INPUT(S)`:"CONNECTED · PLUG IN A MIDI CONTROLLER",this.renderMidiDevices(t.inputs,t.outputs),this.setMidiStatus(`Web MIDI active · ${t.inputs.length} in / ${t.outputs.length} out (hot-plug enabled).`,"ok")):(this.midiConnectBtn.textContent="ENABLE WEB MIDI",this.setMidiStatus(t.error||"Web MIDI connection failed.","err")),this.syncStatusBadge()}),this.midiInSelect.addEventListener("change",()=>{this.midi.setSelectedInput(this.midiInSelect.value||"all")}),this.midiOutSelect.addEventListener("change",()=>{const t=this.midiOutSelect.value||"";this.midi.setSelectedOutput(t),this.midiTestNoteBtn.disabled=!t}),this.midiTestNoteBtn.addEventListener("click",()=>{const t=this.midi.getChannelFilter()||1;this.midi.sendNote(t,60,100,180)&&(this.flashLed("cyan"),this.midiMsgEl.textContent=`TX CH${t} NOTE C4 v100`)}),this.midiChannelSelect.addEventListener("change",()=>{this.midi.setChannelFilter(parseInt(this.midiChannelSelect.value,10)||0)}),this.noteTargetSelect.addEventListener("change",()=>{this.noteTargetValue!==this.noteTargetSelect.value&&this.releasePoly4Voices(),this.noteTargetValue=this.noteTargetSelect.value,this.renderQwertyState()}),this.gateTargetSelect.addEventListener("change",()=>{this.gateTargetValue=this.gateTargetSelect.value}),this.clockSyncCheckbox.addEventListener("change",()=>{const t=this.clockSyncCheckbox.checked;this.midi.setClockSyncEnabled(t),t&&!this.midi.isConnected&&this.midiConnectBtn.click(),this.syncStatusBadge()}),this.ccModSelect.addEventListener("change",()=>{this.populateCcParams()}),this.ccLearnBtn.addEventListener("click",async()=>{if(this.midi.getLearnTarget()){this.midi.cancelLearn();return}if(!this.midi.isConnected){const r=await this.midi.connect();if(!r.ok){this.setMidiStatus(r.error||"Enable Web MIDI before learning CC.","err");return}this.midiConnectBtn.textContent="MIDI CONNECTED",this.midiConnectBtn.classList.remove("kio-btn-cyan"),this.midiConnectBtn.classList.add("kio-btn-active"),this.renderMidiDevices(r.inputs,r.outputs),this.syncStatusBadge()}const t=this.callbacks.getPatch(),e=this.ccModSelect.value,s=this.ccParamSelect.value,i=t.modules.find(r=>r.id===e);if(!i)return;const n=V[i.kind],a=n.params.find(r=>r.id===s);if(!a)return;const o=`${i.label||n.shortName} · ${a.label}`;this.midi.startLearn(i.id,a.id,a.min,a.max,o,a.scale),this.setMidiStatus(`MIDI Learn armed for ${o} — twist any hardware knob/fader…`,"neutral")}),this.ccClearBtn.addEventListener("click",()=>{this.midi.clearMappings(),this.setMidiStatus("Cleared all MIDI CC mappings.","neutral")}),this.qwertyToggleBtn.addEventListener("click",()=>{this.qwerty.toggle(),this.renderQwertyState(),this.syncStatusBadge()})}bindManagerEvents(){this.unsubscribers.push(this.audioDevices.onChange(t=>{this.renderAudioDevices(t)})),this.unsubscribers.push(this.host.onHardwareStatusChange(t=>{this.renderHardwareStatus(t),this.syncMeterLoop(),this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onDevicesChange((t,e)=>{this.renderMidiDevices(t,e),this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onActivity(t=>{this.handleMidiActivity(t)})),this.unsubscribers.push(this.midi.onNote(t=>{this.handleMidiNote(t)})),this.unsubscribers.push(this.midi.onPolyNote(t=>{this.handlePolyMidiNote(t)})),this.unsubscribers.push(this.midi.onParamChange((t,e,s,i)=>{this.callbacks.getPatch().modules.some(a=>a.id===t)&&this.callbacks.onParamChange(t,e,s,"midi-cc",i)})),this.unsubscribers.push(this.midi.onClockBpm(t=>{this.clockBpmChip.textContent=`${t.toFixed(1)} BPM`,this.clockBpmChip.classList.add("good");const e=this.callbacks.getPatch(),s=Jt(e);if(s&&s.kind==="clock")this.callbacks.onParamChange(s.id,"bpm",Math.max(30,Math.min(300,t)),"midi-clock");else if(s){const i=O(s,"riseMs"),n=15e3/t,a=Math.max(.12,Math.min(4e3,n-i));this.callbacks.onParamChange(s.id,"fallMs",a,"midi-clock")}this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onMappingsChange(t=>{this.renderMappings(t)})),this.unsubscribers.push(this.midi.onLearnChange(t=>{this.renderLearnState(t)})),this.unsubscribers.push(this.qwerty.onNote(t=>{this.handleQwertyNote(t)})),this.unsubscribers.push(this.qwerty.onPolyNote(t=>{this.handlePolyQwertyNote(t)})),this.unsubscribers.push(this.qwerty.onStateChange(()=>{this.renderQwertyState(),this.syncStatusBadge()}))}async armExternalInput(){this.inToggleBtn.disabled=!0,this.inToggleBtn.textContent="OPENING…";const t=parseFloat(this.inGainSlider.value)||1,e=await this.host.setInputDevice(this.selectedInputId||"default",t);this.inToggleBtn.disabled=!1,e.ok?(this.setAudioStatus(`Live studio input armed: ${e.label||"Audio Input"} → WASM EXT-IN`,"ok"),this.audioDevices.enumerateDevices().then(s=>this.renderAudioDevices(s))):this.setAudioStatus(e.error||"Failed to open audio input device.","err"),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.syncMeterLoop(),this.syncStatusBadge()}renderAudioDevices(t){const e=this.selectedOutputId;if(this.outSelect.innerHTML="",!t.outputs.some(a=>a.deviceId==="default"||a.deviceId==="")){const a=document.createElement("option");a.value="",a.textContent="System Default Output",this.outSelect.appendChild(a)}for(const a of t.outputs){const o=document.createElement("option");o.value=a.deviceId==="default"?"":a.deviceId,o.textContent=a.label,this.outSelect.appendChild(o)}Array.from(this.outSelect.options).some(a=>a.value===e)&&(this.outSelect.value=e);const i=this.selectedInputId;if(this.inSelect.innerHTML="",!t.inputs.some(a=>a.deviceId==="default")){const a=document.createElement("option");a.value="default",a.textContent="System Default Input",this.inSelect.appendChild(a)}for(const a of t.inputs){const o=document.createElement("option");o.value=a.deviceId||"default",o.textContent=a.label,this.inSelect.appendChild(o)}Array.from(this.inSelect.options).some(a=>a.value===i)?this.inSelect.value=i:this.inSelect.options.length>0&&(this.selectedInputId=this.inSelect.options[0].value,this.inSelect.value=this.selectedInputId)}renderHardwareStatus(t){this.hwRateEl.textContent=`${(t.sampleRate/1e3).toFixed(1)} kHz`,this.hwBaseLatEl.textContent=t.baseLatencyMs>0?`${t.baseLatencyMs.toFixed(1)} ms`:"—",this.hwOutLatEl.textContent=t.outputLatencyMs>0?`${t.outputLatencyMs.toFixed(1)} ms`:"—",this.hwSinkEl.textContent=t.sinkSelectionSupported?"SUPPORTED":"DEFAULT ONLY",this.hwSinkEl.className=`kio-hw-v ${t.sinkSelectionSupported?"ok":"warn"}`,this.outSelect.disabled=!t.sinkSelectionSupported,this.inToggleBtn.textContent=t.inputActive?"LIVE · ON":"ENABLE IN",this.inToggleBtn.classList.toggle("kio-btn-active",t.inputActive),t.inputActive||this.paintMeter(-96)}syncMeterLoop(){const t=this.openState&&this.host.getAudioHardwareStatus().inputActive;if(t&&this.meterRafId===null){this.lastMeterPaintMs=0;const e=s=>{if(this.meterRafId=null,!this.openState||!this.host.getAudioHardwareStatus().inputActive){this.paintMeter(-96);return}s-this.lastMeterPaintMs>=50&&(this.lastMeterPaintMs=s,this.paintMeter(this.host.getInputLevelDb())),this.meterRafId=requestAnimationFrame(e)};this.meterRafId=requestAnimationFrame(e)}else t||this.stopMeterLoop()}stopMeterLoop(){this.meterRafId!==null&&(cancelAnimationFrame(this.meterRafId),this.meterRafId=null),this.paintMeter(-96)}paintMeter(t){const e=Math.max(0,Math.min(1,(t+60)/60)),s=t<=-60?0:Math.round(e*Mt);for(let i=0;i<Mt;i++){const n=this.meterSegs[i];i<s?i>=17?n.className="kio-meter-seg lit-hot":i>=13?n.className="kio-meter-seg lit-mid":n.className="kio-meter-seg lit-low":n.className="kio-meter-seg"}this.meterDbEl.textContent=t<=-60?"-∞ dB":`${t>=0?"+":""}${t.toFixed(1)} dB`}handleMidiActivity(t){const e=t.kind==="cc"?"hot":t.kind==="clock"?"green":"cyan";this.flashLed(e),this.midiMsgEl.textContent=t.summary;const s=this.midi.getClockState();s.bpm>0&&s.running&&(this.clockBpmChip.textContent=`${s.bpm.toFixed(1)} BPM`,this.clockBpmChip.classList.toggle("good",s.syncEnabled))}handleMidiNote(t){t.gate===1?this.midiNotePillEl.textContent=`${t.noteName} · ${t.freqHz.toFixed(1)} Hz`:this.midiNotePillEl.textContent=`${t.noteName} OFF`;const e=this.callbacks.getPatch(),s=this.noteTargetValue;if(s.startsWith("poly4:"))return;if(s.startsWith("keys:")){const n=s.slice(5);if(!e.modules.some(a=>a.id===n))return;t.type==="pitchbend"?this.callbacks.onParamChange(n,"bend",t.pitchBendSemitones,"midi-note"):t.gate===1?(this.keysPlaying=n,this.callbacks.onParamChange(n,"note",t.note,"midi-note"),this.callbacks.onParamChange(n,"velocity",t.velocity,"midi-note"),this.callbacks.onParamChange(n,"gate",1,"midi-note")):(this.callbacks.onParamChange(this.keysPlaying??n,"gate",0,"midi-note"),this.keysPlaying=null);return}if(s==="all-osc"){const n=Math.max(15,Math.min(8e3,t.freqHz));if(t.gate===1||t.type==="pitchbend")for(const a of e.modules)a.kind==="osc"&&this.callbacks.onParamChange(a.id,"freq",n,"midi-note")}else if(s.startsWith("osc:")){const n=s.slice(4),a=Math.max(15,Math.min(8e3,t.freqHz));(t.gate===1||t.type==="pitchbend")&&e.modules.some(o=>o.id===n)&&this.callbacks.onParamChange(n,"freq",a,"midi-note")}else if(s.startsWith("neural:")){const n=s.slice(7);if(t.type==="noteon"&&e.modules.some(a=>a.id===n)){const a=Math.max(0,Math.min(1,(t.note-36)/48)),o=Math.max(.15,Math.min(.95,.2+t.velocity*.75)),r=Math.max(.08,Math.min(.92,.1+a*.8));this.callbacks.onParamChange(n,"density",o,"midi-note"),this.callbacks.onParamChange(n,"creativity",r,"midi-note")}}if(t.type==="pitchbend")return;const i=this.gateTargetValue;if(i==="osc-amp"){const n=t.gate===1?Math.max(.15,Math.min(2,t.velocity*1.4)):0;if(s==="all-osc")for(const a of e.modules)a.kind==="osc"&&this.callbacks.onParamChange(a.id,"amp",n,"midi-note");else if(s.startsWith("osc:")){const a=s.slice(4);e.modules.some(o=>o.id===a)&&this.callbacks.onParamChange(a,"amp",n,"midi-note")}}else if(i.startsWith("vactrol:")){const n=i.slice(8);if(e.modules.some(a=>a.id===n)){const a=t.gate===1?Math.max(.12,Math.min(1,t.velocity*.95)):0;this.callbacks.onParamChange(n,"offset",a,"midi-note")}}else if(i.startsWith("dusg:")){const n=i.slice(5);e.modules.some(a=>a.id===n)&&this.callbacks.onParamChange(n,"cycle",t.gate,"midi-note")}}renderMidiDevices(t,e){const s=this.midi.getSelectedInput();this.midiInSelect.innerHTML="";const i=document.createElement("option");i.value="all",i.textContent=t.length>0?`All MIDI Inputs (${t.length})`:"All MIDI Inputs (None Detected)",this.midiInSelect.appendChild(i);for(const o of t){const r=document.createElement("option");r.value=o.id,r.textContent=o.manufacturer?`${o.name} (${o.manufacturer})`:o.name,this.midiInSelect.appendChild(r)}this.midiInSelect.value=s;const n=this.midi.getSelectedOutput();this.midiOutSelect.innerHTML="";const a=document.createElement("option");a.value="",a.textContent=e.length>0?"None (Output Disabled)":"No MIDI Outputs Detected",this.midiOutSelect.appendChild(a);for(const o of e){const r=document.createElement("option");r.value=o.id,r.textContent=o.manufacturer?`${o.name} (${o.manufacturer})`:o.name,this.midiOutSelect.appendChild(r)}this.midiOutSelect.value=n,this.midiTestNoteBtn.disabled=!n}populateCcParams(t){const s=this.callbacks.getPatch().modules.find(n=>n.id===this.ccModSelect.value);if(this.ccParamSelect.innerHTML="",!s)return;const i=V[s.kind];for(const n of i.params){const a=document.createElement("option");a.value=n.id;const o=n.unit?` ${n.unit}`:"";a.textContent=`${n.label} (${ot(n.min)}..${ot(n.max)}${o})`,this.ccParamSelect.appendChild(a)}t&&i.params.some(n=>n.id===t)&&(this.ccParamSelect.value=t)}renderLearnState(t){t?(this.ccLearnBtn.textContent=`LISTENING (${t.label}) · CANCEL`,this.ccLearnBtn.classList.remove("kio-btn-cyan"),this.ccLearnBtn.classList.add("kio-btn-arm")):(this.ccLearnBtn.textContent="LEARN CC — TWIST HARDWARE KNOB",this.ccLearnBtn.classList.remove("kio-btn-arm"),this.ccLearnBtn.classList.add("kio-btn-cyan"))}renderMappings(t){const e=this.callbacks.getPatch(),s=new Set(e.modules.map(i=>i.id));if(this.ccClearBtn.style.display=t.length>0?"inline-flex":"none",this.ccListEl.innerHTML="",t.length===0){const i=document.createElement("div");i.className="kio-cc-empty",i.textContent="No CC knobs mapped yet · pick a module + param and click LEARN CC.",this.ccListEl.appendChild(i);return}for(const i of t){const n=s.has(i.moduleId),a=document.createElement("div");a.className=`kio-cc-item${n?"":" inactive"}`;const o=document.createElement("span");o.className="kio-cc-badge",o.textContent=`${i.channel>0?`CH${i.channel}`:"OMNI"} CC${i.cc}`;const r=document.createElement("span");r.className="kio-cc-target",r.textContent=n?i.label:`${i.label} (other patch)`,r.title=`${i.moduleId}:${i.paramId}`;const l=document.createElement("span");l.className="kio-cc-range",l.textContent=`${ot(i.min)}..${ot(i.max)}`;const h=document.createElement("button");h.type="button",h.className="kio-cc-del",h.textContent="×",h.title=`Remove CC${i.cc} mapping`,h.addEventListener("click",()=>{this.midi.removeMapping(i.cc,i.channel,i.moduleId,i.paramId)}),a.appendChild(o),a.appendChild(r),a.appendChild(l),a.appendChild(h),this.ccListEl.appendChild(a)}}flashLed(t){this.midiLedEl.className=`kio-led flash-${t}`,this.ledDecayTimer!==null&&clearTimeout(this.ledDecayTimer),this.ledDecayTimer=window.setTimeout(()=>{this.midiLedEl.className="kio-led",this.ledDecayTimer=null},135)}setAudioStatus(t,e){this.audioStatusEl.textContent=t,this.audioStatusEl.className=`kio-status-line${e==="neutral"?"":` ${e}`}`}setMidiStatus(t,e){this.midiStatusEl.textContent=t,this.midiStatusEl.className=`kio-status-line${e==="neutral"?"":` ${e}`}`}hasActiveKeysNode(){return this.findActivePoly4ModuleId()!==null||this.findActiveKeysModuleId()!==null}findActivePoly4ModuleId(){const t=this.callbacks.getPatch();if(this.noteTargetValue.startsWith("poly4:")){const s=this.noteTargetValue.slice(6);if(t.modules.some(i=>i.id===s&&i.kind==="poly4"))return s}if(this.noteTargetValue.startsWith("keys:")){const s=this.noteTargetValue.slice(5);if(t.modules.some(i=>i.id===s&&i.kind==="keys"))return null}const e=t.modules.find(s=>s.kind==="poly4");return e?e.id:null}findActiveKeysModuleId(){const t=this.callbacks.getPatch();if(this.noteTargetValue.startsWith("keys:")){const s=this.noteTargetValue.slice(5);if(t.modules.some(i=>i.id===s&&i.kind==="keys"))return s}const e=t.modules.find(s=>s.kind==="keys");return e?e.id:null}releasePoly4Voices(){const t=this.poly4Allocator.releaseAll(),e=this.poly4Playing;if(e&&t.length>0&&this.callbacks.getPatch().modules.some(i=>i.id===e&&i.kind==="poly4"))for(const i of t)this.callbacks.onParamChange(e,`gate${i}`,0,"midi-note");this.poly4Allocator.reset(),this.poly4Playing=null}dispatchPoly4Note(t,e,s){if(this.poly4Playing&&this.poly4Playing!==t&&this.releasePoly4Voices(),e.type==="noteon"&&e.gate===1){this.poly4Playing=t;const i=this.poly4Allocator.noteOn(e.note,e.velocity);this.callbacks.onParamChange(t,`note${i.voice}`,i.note,"midi-note"),this.callbacks.onParamChange(t,`vel${i.voice}`,i.velocity,"midi-note"),this.callbacks.onParamChange(t,`gate${i.voice}`,1,"midi-note"),this.midiNotePillEl.textContent=`V${i.voice+1} ${e.noteName} · ${e.freqHz.toFixed(1)} Hz`,s==="QWERTY"&&(this.flashLed("cyan"),this.midiMsgEl.textContent=`QWERTY POLY4 V${i.voice+1} ${e.noteName} (${this.qwerty.getRangeLabel()})`)}else if(e.type==="noteoff"||e.gate===0){const i=this.poly4Allocator.noteOff(e.note);i>=0&&(this.callbacks.onParamChange(t,`gate${i}`,0,"midi-note"),this.midiNotePillEl.textContent=`V${i+1} ${e.noteName} OFF`)}}handlePolyMidiNote(t){const e=this.noteTargetValue;if(!e.startsWith("poly4:"))return;const s=e.slice(6);this.callbacks.getPatch().modules.some(n=>n.id===s&&n.kind==="poly4")&&this.dispatchPoly4Note(s,t,"MIDI")}handlePolyQwertyNote(t){const e=this.findActivePoly4ModuleId();e&&this.dispatchPoly4Note(e,t,"QWERTY")}handleQwertyNote(t){if(this.findActivePoly4ModuleId()!==null)return;const e=this.findActiveKeysModuleId();e&&(this.flashLed("cyan"),t.gate===1?(this.keysPlaying=e,this.midiMsgEl.textContent=`QWERTY NOTE ${t.noteName} (${this.qwerty.getRangeLabel()})`,this.midiNotePillEl.textContent=`${t.noteName} · ${t.freqHz.toFixed(1)} Hz`,this.callbacks.onParamChange(e,"note",t.note,"midi-note"),this.callbacks.onParamChange(e,"velocity",t.velocity,"midi-note"),this.callbacks.onParamChange(e,"gate",1,"midi-note")):(this.midiNotePillEl.textContent=`${t.noteName} OFF`,this.callbacks.onParamChange(this.keysPlaying??e,"gate",0,"midi-note"),this.keysPlaying=null))}renderQwertyState(){const t=this.findActivePoly4ModuleId()!==null,e=t||this.findActiveKeysModuleId()!==null,s=this.qwerty.isEnabled,i=e&&s;this.qwertyOctChip.textContent=this.qwerty.getRangeLabel(),this.qwertyOctChip.classList.toggle("good",i),s?t?(this.qwertyToggleBtn.textContent="POLY4 ON",this.qwertyToggleBtn.className="kio-qwerty-pill active",this.qwertySubEl.textContent="Active on POLY4 (4-voice) · Z–M / Q–I · [ ] octave"):e?(this.qwertyToggleBtn.textContent="QWERTY ON",this.qwertyToggleBtn.className="kio-qwerty-pill active",this.qwertySubEl.textContent="Active on KEYS · Z–M / Q–I · [ ] octave"):(this.qwertyToggleBtn.textContent="NO KEYS",this.qwertyToggleBtn.className="kio-qwerty-pill standby",this.qwertySubEl.textContent="Auto-activates when scene has POLY4 or KEYS"):(this.qwertyToggleBtn.textContent="QWERTY OFF",this.qwertyToggleBtn.className="kio-qwerty-pill",this.qwertySubEl.textContent="Disabled · click to enable Z–M / Q–I play")}syncStatusBadge(){const{text:t,active:e}=this.getStatusBadge();if(this.headerBadgeEl.textContent=e?t.replace(/^I\/O · /,""):"STANDBY",this.headerBadgeEl.className=`kio-chip${e?" good":""}`,this.statusButton&&this.statusButtonText&&(this.statusButton.classList.toggle("active",e),this.statusButton.title=`${e?t:"I/O · standby"} — open the audio interface & Web MIDI drawer`,this.statusTags)){const s=this.midi.getClockState(),i=s.syncEnabled&&s.bpm>0&&s.running,n=this.qwerty.isEnabled&&this.hasActiveKeysNode();this.statusTags.keys.classList.toggle("lit",n),this.statusTags.midi.classList.toggle("lit",this.midi.isConnected),this.statusTags.ext.classList.toggle("lit",this.host.getAudioHardwareStatus().inputActive),this.statusTags.bpm.classList.toggle("lit",i),this.statusTags.bpm.textContent=i?String(Math.min(999,Math.round(s.bpm))).padStart(3," "):"---"}this.callbacks.onStatusBadgeChange?.(t,e)}}function Ss(c,t,e){const s=t?2:1,i=c.length,a=s*3,o=i*a,r=new ArrayBuffer(44+o),l=new DataView(r),h=new Uint8Array(r),u=(d,f)=>{for(let g=0;g<f.length;g++)h[d+g]=f.charCodeAt(g)};u(0,"RIFF"),l.setUint32(4,36+o,!0),u(8,"WAVE"),u(12,"fmt "),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,s,!0),l.setUint32(24,e,!0),l.setUint32(28,e*a,!0),l.setUint16(32,a,!0),l.setUint16(34,24,!0),u(36,"data"),l.setUint32(40,o,!0);let p=44;const b=8388607;for(let d=0;d<i;d++){const f=Math.max(-1,Math.min(1,c[d]));let g=Math.round(f*b);if(g<0&&(g+=16777216),h[p++]=g&255,h[p++]=g>>8&255,h[p++]=g>>16&255,t){const k=Math.max(-1,Math.min(1,t[d]));let m=Math.round(k*b);m<0&&(m+=16777216),h[p++]=m&255,h[p++]=m>>8&255,h[p++]=m>>16&255}}return h}function Zt(c){const t=c.length,e=new Float64Array(t),s=1.53512485958697,i=-2.69169618940638,n=1.19839281085285,a=-1.69065929318241,o=.73248077421585,r=1,l=-2,h=1,u=-1.99004745483398,p=.99007225036621;let b=0,d=0,f=0,g=0;for(let k=0;k<t;k++){const m=c[k],L=s*m+b;b=i*m-a*L+d,d=n*m-o*L;const M=r*L+f;f=l*L-u*M+g,g=h*L-p*M,e[k]=M}return e}function ws(c,t,e=48e3){const s=Zt(c),i=Zt(t),n=Math.round(.4*e),a=Math.round(.1*e),o=[];for(let p=0;p+n<=s.length;p+=a){let b=0,d=0;for(let k=0;k<n;k++){const m=s[p+k],L=i[p+k];b+=m*m,d+=L*L}const f=(b+d)/n;-.691+10*Math.log10(Math.max(f,1e-18))>-70&&o.push(f)}if(o.length===0)return-100;const r=o.reduce((p,b)=>p+b,0)/o.length,l=-.691+10*Math.log10(Math.max(r,1e-18))-10,h=o.filter(p=>-.691+10*Math.log10(Math.max(p,1e-18))>=l),u=h.length>0?h.reduce((p,b)=>p+b,0)/h.length:r;return-.691+10*Math.log10(Math.max(u,1e-18))}function xs(c,t){let e=1e-12;const s=i=>{const n=i.length;for(let a=1;a<n-2;a++){const o=i[a-1],r=i[a],l=i[a+1],h=i[a+2],u=Math.abs(r);u>e&&(e=u);for(let p=1;p<=3;p++){const b=p*.25,d=b*b,f=d*b,g=.5*(2*r+(-o+l)*b+(2*o-5*r+4*l-h)*d+(-o+3*r-3*l+h)*f),k=Math.abs(g);k>e&&(e=k)}}};return s(c),s(t),20*Math.log10(e)}const ge=128,Ms=900;class Cs{chunksL=[];chunksR=[];totalFrames=0;sampleRate=48e3;envCapacity=4096;envCount=0;envPeakL=new Float32Array(this.envCapacity);envPeakR=new Float32Array(this.envCapacity);envRmsL=new Float32Array(this.envCapacity);envRmsR=new Float32Array(this.envCapacity);accCount=0;accPeakL=0;accPeakR=0;accSqL=0;accSqR=0;markers=[];trimStartFrame=0;trimEndFrame=0;trimEndPinned=!1;playbackSource=null;playbackCtx=null;playbackStartCtxTime=0;playbackStartFrame=0;playbackEndFrame=0;playing=!1;playheadFrame=0;cachedMetrics=null;get frames(){return this.totalFrames}get fs(){return this.sampleRate}get durationSec(){return this.totalFrames/Math.max(1,this.sampleRate)}get envelopeCount(){return this.envCount}get peakL(){return this.envPeakL}get peakR(){return this.envPeakR}get rmsL(){return this.envRmsL}get rmsR(){return this.envRmsR}get timelineMarkers(){return this.markers}get trimStart(){return this.trimStartFrame}get trimEnd(){return this.trimEndPinned?Math.min(this.trimEndFrame,this.totalFrames):this.totalFrames}get isTrimmed(){return this.totalFrames>0&&(this.trimStartFrame>0||this.trimEndPinned&&this.trimEndFrame<this.totalFrames)}get isPlaying(){return this.playing}get currentPlayheadFrame(){if(this.playing&&this.playbackCtx){const t=Math.max(0,this.playbackCtx.currentTime-this.playbackStartCtxTime),e=this.playbackStartFrame+Math.round(t*this.sampleRate);return Math.min(this.playbackEndFrame,e)}return Math.min(this.totalFrames,Math.max(0,this.playheadFrame))}clear(t=48e3){this.stopPlayback(),this.chunksL=[],this.chunksR=[],this.totalFrames=0,this.sampleRate=t,this.envCount=0,this.accCount=0,this.accPeakL=0,this.accPeakR=0,this.accSqL=0,this.accSqR=0,this.markers=[],this.trimStartFrame=0,this.trimEndFrame=0,this.trimEndPinned=!1,this.playheadFrame=0,this.cachedMetrics=null}appendChunk(t,e,s,i){if(s<=0)return!0;const a=Math.round(Ms*i)-this.totalFrames;if(a<=0)return!1;const o=Math.min(s,a);this.totalFrames===0&&(this.sampleRate=i);const r=new Float32Array(o),l=new Float32Array(o);for(let h=0;h<o;h++){const u=t[h],p=e[h];r[h]=u,l[h]=p;const b=Math.abs(u),d=Math.abs(p);b>this.accPeakL&&(this.accPeakL=b),d>this.accPeakR&&(this.accPeakR=d),this.accSqL+=u*u,this.accSqR+=p*p,this.accCount++,this.accCount>=ge&&this.pushEnvelopeBin()}return this.chunksL.push(r),this.chunksR.push(l),this.totalFrames+=o,this.trimEndPinned||(this.trimEndFrame=this.totalFrames),this.playheadFrame=this.totalFrames,this.cachedMetrics=null,o===s}finalizeRecording(){this.accCount>0&&this.pushEnvelopeBin(),this.trimEndPinned||(this.trimEndFrame=this.totalFrames),this.playheadFrame=this.trimStartFrame,this.cachedMetrics=null}addMarker(t,e,s){const i=s!==void 0?Math.max(0,Math.min(this.totalFrames,Math.round(s))):this.totalFrames;this.markers.push({frame:i,label:t,kind:e})}setTrim(t,e){if(this.totalFrames<=0)return;const s=Math.min(this.totalFrames,Math.round(.05*this.sampleRate));let i=Math.max(0,Math.min(this.totalFrames-s,Math.round(t))),n=Math.max(i+s,Math.min(this.totalFrames,Math.round(e)));i<0&&(i=0),n>this.totalFrames&&(n=this.totalFrames),this.trimStartFrame=i,this.trimEndFrame=n,this.trimEndPinned=n<this.totalFrames,(this.playheadFrame<i||this.playheadFrame>n)&&(this.playheadFrame=i),this.cachedMetrics=null}resetTrim(){this.trimStartFrame=0,this.trimEndFrame=this.totalFrames,this.trimEndPinned=!1,this.cachedMetrics=null}seek(t){this.playheadFrame=Math.max(0,Math.min(this.totalFrames,Math.round(t))),this.playing&&this.playbackCtx&&this.startPlayback(this.playbackCtx,this.playheadFrame)}extractRange(t=this.trimStart,e=this.trimEnd){const s=Math.max(0,Math.min(this.totalFrames,Math.floor(t))),i=Math.max(s,Math.min(this.totalFrames,Math.floor(e))),n=i-s,a=new Float64Array(n),o=new Float64Array(n);if(n===0)return{left:a,right:o};let r=0,l=0;for(let h=0;h<this.chunksL.length&&l<n;h++){const u=this.chunksL[h],p=this.chunksR[h],b=u.length,d=r+b;if(d>s&&r<i){const f=Math.max(0,s-r),g=Math.min(b,i-r);for(let k=f;k<g;k++)a[l]=u[k],o[l]=p[k],l++}r=d}return{left:a,right:o}}computeMetrics(){if(this.cachedMetrics)return this.cachedMetrics;const t=this.trimStart,e=this.trimEnd,s=Math.max(0,e-t);if(s<16)return this.cachedMetrics={lufs:-100,truePeakDbtp:-100,frames:s,durationSec:s/Math.max(1,this.sampleRate)},this.cachedMetrics;const{left:i,right:n}=this.extractRange(t,e),a=ws(i,n,this.sampleRate),o=xs(i,n);return this.cachedMetrics={lufs:a,truePeakDbtp:o,frames:s,durationSec:s/Math.max(1,this.sampleRate)},this.cachedMetrics}exportWavBytes(){const{left:t,right:e}=this.extractRange(this.trimStart,this.trimEnd);return Ss(t,e,this.sampleRate)}async startPlayback(t,e,s){this.stopPlayback();const i=this.trimStart,n=this.trimEnd;if(n-i<8)return!1;t.state!=="running"&&await t.resume();const a=e!==void 0&&e>=i&&e<n-8?Math.floor(e):this.playheadFrame>=i&&this.playheadFrame<n-8?Math.floor(this.playheadFrame):i,{left:o,right:r}=this.extractRange(a,n),l=t.createBuffer(2,o.length,this.sampleRate),h=l.getChannelData(0),u=l.getChannelData(1);for(let b=0;b<o.length;b++)h[b]=o[b],u[b]=r[b];const p=t.createBufferSource();return p.buffer=l,p.connect(t.destination),p.onended=()=>{this.playbackSource===p&&(this.playbackSource=null,this.playing=!1,this.playheadFrame=this.trimStart,s?.())},this.playbackCtx=t,this.playbackSource=p,this.playbackStartFrame=a,this.playbackEndFrame=n,this.playbackStartCtxTime=t.currentTime,this.playing=!0,p.start(),!0}stopPlayback(){if(this.playbackSource){const t=this.currentPlayheadFrame;this.playbackSource.onended=null;try{this.playbackSource.stop(),this.playbackSource.disconnect()}catch{}this.playbackSource=null,this.playing=!1,this.playheadFrame=t}else this.playing=!1}pushEnvelopeBin(){if(this.envCount>=this.envCapacity){const s=this.envCapacity*2,i=n=>{const a=new Float32Array(s);return a.set(n),a};this.envPeakL=i(this.envPeakL),this.envPeakR=i(this.envPeakR),this.envRmsL=i(this.envRmsL),this.envRmsR=i(this.envRmsR),this.envCapacity=s}const t=this.envCount++,e=1/Math.max(1,this.accCount);this.envPeakL[t]=this.accPeakL,this.envPeakR[t]=this.accPeakR,this.envRmsL[t]=Math.sqrt(this.accSqL*e),this.envRmsR[t]=Math.sqrt(this.accSqR*e),this.accCount=0,this.accPeakL=0,this.accPeakR=0,this.accSqL=0,this.accSqR=0}}function U(c,t=!0){const e=Math.max(0,Number.isFinite(c)?c:0),s=Math.floor(e/60),i=e-s*60,n=Math.floor(i),a=Math.floor((i-n)*10),o=String(s).padStart(2,"0"),r=String(n).padStart(2,"0");return t?`${o}:${r}.${a}`:`${o}:${r}`}function Ls(c){return c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,36)||"take"}class Is{host;callbacks;recorder=new Cs;topBtn;topDot;topLabel;panelEl;recBtn;playBtn;pinBtn;resetTrimBtn;exportBtn;clearBtn;closeBtn;timeReadout;trimReadout;meterReadout;canvas;open=!1;recording=!1;rafId=0;dragMode="none";dragAnchorFrame=0;hoverFrame=null;resizeObserver=null;pinCounter=0;constructor(t,e,s,i){this.host=s,this.callbacks=i,this.topBtn=document.createElement("button"),this.topBtn.type="button",this.topBtn.className="btn btn-rec",this.topBtn.title="Open the 24-bit WAV recorder & timeline (starts recording if empty)",this.topBtn.innerHTML='<span class="rec-dot" data-top-rec-dot></span><span class="rec-btn-text mono" data-top-rec-label>Rec</span>',this.topDot=this.topBtn.querySelector("[data-top-rec-dot]"),this.topLabel=this.topBtn.querySelector("[data-top-rec-label]"),t.appendChild(this.topBtn),e.innerHTML=`
      <section class="recorder-strip" data-rec-strip aria-label="24-bit WAV Recorder and Timeline">
        <div class="recorder-bar">
          <div class="recorder-transport">
            <button type="button" class="btn btn-sm btn-rec-action" data-rec-toggle title="Record / stop capturing 48 kHz post-limiter stereo audio">● Rec</button>
            <button type="button" class="btn btn-sm" data-rec-play disabled title="Audition recorded take (solos take over live synth)">▶ Play</button>
            <button type="button" class="btn btn-sm" data-rec-pin disabled title="Drop a timestamp marker pin on the timeline">+ Pin</button>
            <span class="rec-time-slot mono" data-rec-time>00:00.0 / 00:00.0</span>
            <span class="rec-trim-slot mono" data-rec-trim title="Selected export window (drag on waveform to trim, double-click to reset)">SEL 00:00.0</span>
            <span class="rec-meter-slot mono" data-rec-meter title="Integrated loudness & 4x oversampled true peak of selection">— LUFS · — dBTP</span>
          </div>
          <div class="recorder-actions">
            <button type="button" class="btn btn-sm" data-rec-reset-trim hidden title="Reset trim handles to full take">Full</button>
            <button type="button" class="btn btn-sm btn-primary" data-rec-export disabled title="Download 24-bit / 48 kHz stereo PCM WAV">↓ Export 24-bit WAV</button>
            <button type="button" class="btn btn-sm" data-rec-clear disabled title="Clear current take">Clear</button>
            <button type="button" class="btn btn-sm rec-close-btn" data-rec-close aria-label="Collapse recorder timeline" title="Hide recorder timeline">×</button>
          </div>
        </div>
        <div class="recorder-canvas-wrap">
          <canvas class="recorder-canvas" data-rec-canvas></canvas>
        </div>
      </section>
    `,this.panelEl=e.querySelector("[data-rec-strip]"),this.recBtn=e.querySelector("[data-rec-toggle]"),this.playBtn=e.querySelector("[data-rec-play]"),this.pinBtn=e.querySelector("[data-rec-pin]"),this.resetTrimBtn=e.querySelector("[data-rec-reset-trim]"),this.exportBtn=e.querySelector("[data-rec-export]"),this.clearBtn=e.querySelector("[data-rec-clear]"),this.closeBtn=e.querySelector("[data-rec-close]"),this.timeReadout=e.querySelector("[data-rec-time]"),this.trimReadout=e.querySelector("[data-rec-trim]"),this.meterReadout=e.querySelector("[data-rec-meter]"),this.canvas=e.querySelector("[data-rec-canvas]"),this.host.onRecorderChunk((n,a,o,r)=>{if(!this.recording)return;this.recorder.appendChunk(n,a,o,r)||(this.stopRecording(),this.callbacks.onToast("Recorder reached 15-minute buffer limit and stopped cleanly.",3200))}),this.host.onRecorderStopped(()=>{this.recording=!1,this.recorder.finalizeRecording(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline()}),this.topBtn.addEventListener("click",()=>{this.recording?this.stopRecording():!this.open&&this.recorder.frames===0?(this.setOpen(!0),this.startRecording()):this.setOpen(!this.open)}),this.recBtn.addEventListener("click",()=>{this.recording?this.stopRecording():this.startRecording()}),this.playBtn.addEventListener("click",()=>{this.recorder.isPlaying?this.stopPlayback():this.startPlayback()}),this.pinBtn.addEventListener("click",()=>{if(this.recorder.frames===0&&!this.recording)return;this.pinCounter++;const n=this.recording?this.recorder.frames:this.recorder.currentPlayheadFrame;this.recorder.addMarker(`Pin ${this.pinCounter}`,"pin",n),this.drawTimeline()}),this.resetTrimBtn.addEventListener("click",()=>{this.recorder.resetTrim(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline()}),this.exportBtn.addEventListener("click",()=>{this.exportWav()}),this.clearBtn.addEventListener("click",()=>{this.recording&&this.stopRecording(),this.stopPlayback(),this.recorder.clear(this.host.sampleRate),this.pinCounter=0,this.refreshControls(),this.meterReadout.textContent="— LUFS · — dBTP",this.drawTimeline()}),this.closeBtn.addEventListener("click",()=>{this.setOpen(!1)}),this.bindTimelinePointer(),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.open&&this.drawTimeline()}),this.resizeObserver.observe(this.canvas)),this.refreshControls()}notifyEvent(t,e){if(!this.recording)return;const s=t.length>22?`${t.slice(0,20)}…`:t;this.recorder.addMarker(s,e)}setOpen(t){this.open=t,this.panelEl.classList.toggle("open",t),this.topBtn.classList.toggle("panel-open",t&&!this.recording),t&&requestAnimationFrame(()=>this.drawTimeline())}async startRecording(){if(this.recording)return!0;this.stopPlayback(),this.setOpen(!0),this.recorder.clear(this.host.sampleRate),this.pinCounter=0,this.meterReadout.textContent="Recording 48 kHz…";const t=await this.host.startRecording();if(this.callbacks.onSyncAudioStatus(),!t)return this.callbacks.onToast("Could not start AudioWorklet recorder.",2600),this.refreshControls(),!1;this.recording=!0;const e=this.callbacks.getSceneName();return e&&this.recorder.addMarker(e.length>22?`${e.slice(0,20)}…`:e,"scene",0),this.refreshControls(),this.startAnimLoop(),!0}stopRecording(){this.recording&&(this.recording=!1,this.host.stopRecording(),this.recorder.finalizeRecording(),this.stopAnimLoop(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline())}async startPlayback(){if(this.recording||this.recorder.frames<16)return;let t=this.host.getAudioContext();if(t||(await this.host.startAudio(),this.callbacks.onSyncAudioStatus(),t=this.host.getAudioContext()),!t)return;if(this.host.setAuditionMute(!0),!await this.recorder.startPlayback(t,void 0,()=>{this.host.setAuditionMute(!1),this.stopAnimLoop(),this.refreshControls(),this.drawTimeline()})){this.host.setAuditionMute(!1);return}this.refreshControls(),this.startAnimLoop()}stopPlayback(){this.recorder.isPlaying&&(this.recorder.stopPlayback(),this.host.setAuditionMute(!1),this.stopAnimLoop(),this.refreshControls(),this.drawTimeline())}exportWav(){if(this.recording&&this.stopRecording(),this.recorder.frames<8)return;const t=this.recorder.exportWavBytes(),e=new Blob([t],{type:"audio/wav"}),s=URL.createObjectURL(e),i=document.createElement("a"),n=new Date,a=`${String(n.getHours()).padStart(2,"0")}${String(n.getMinutes()).padStart(2,"0")}${String(n.getSeconds()).padStart(2,"0")}`,o=`kirchhoff-${Ls(this.callbacks.getSceneName())}-${a}.wav`;i.href=s,i.download=o,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3);const r=(this.recorder.trimEnd-this.recorder.trimStart)/Math.max(1,this.recorder.fs),l=(t.byteLength/(1024*1024)).toFixed(2);this.callbacks.onToast(`Exported ${o} (${U(r)}, 24-bit · ${l} MB)`,3e3)}getStatus(){return{open:this.open,recording:this.recording,playing:this.recorder.isPlaying,frames:this.recorder.frames,durationSec:Number(this.recorder.durationSec.toFixed(2)),trimStart:this.recorder.trimStart,trimEnd:this.recorder.trimEnd,markers:this.recorder.timelineMarkers.length}}startAnimLoop(){if(this.rafId)return;const t=()=>{this.rafId=0,this.refreshLiveTimecodes(),this.open&&this.drawTimeline(),(this.recording||this.recorder.isPlaying)&&(this.rafId=requestAnimationFrame(t))};this.rafId=requestAnimationFrame(t)}stopAnimLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}refreshControls(){const t=this.recorder.frames>0,e=this.recorder.isPlaying;this.topBtn.classList.toggle("recording",this.recording),this.topBtn.classList.toggle("panel-open",this.open&&!this.recording),this.topDot.classList.toggle("live",this.recording),this.topLabel.textContent=this.recording?U(this.recorder.durationSec):t?`Take ${U(this.recorder.durationSec,!1)}`:"Rec",this.recBtn.classList.toggle("recording",this.recording),this.recBtn.textContent=this.recording?"■ Stop":"● Rec",this.playBtn.disabled=this.recording||!t,this.playBtn.classList.toggle("active",e),this.playBtn.textContent=e?"■ Stop":"▶ Play",this.pinBtn.disabled=!this.recording&&!t,this.exportBtn.disabled=this.recording||!t,this.clearBtn.disabled=!this.recording&&!t,this.resetTrimBtn.hidden=!this.recorder.isTrimmed,this.refreshLiveTimecodes()}refreshLiveTimecodes(){const t=Math.max(1,this.recorder.fs),e=this.recorder.frames/t,s=this.recording?e:this.recorder.currentPlayheadFrame/t,i=Math.max(0,this.recorder.trimEnd-this.recorder.trimStart)/t;this.timeReadout.textContent=`${U(s)} / ${U(e)}`,this.trimReadout.textContent=`SEL ${U(i)}`,this.recording&&(this.topLabel.textContent=U(e))}refreshMetrics(){if(this.recorder.frames<16){this.meterReadout.textContent="— LUFS · — dBTP";return}const t=this.recorder.computeMetrics(),e=t.lufs<=-90?"—":t.lufs.toFixed(1),s=t.truePeakDbtp<=-90?"—":t.truePeakDbtp.toFixed(1);this.meterReadout.textContent=`${e} LUFS · ${s} dBTP`}bindTimelinePointer(){const t=i=>{const n=this.canvas.getBoundingClientRect(),a=10,o=Math.max(1,n.width-a*2),r=Math.max(0,Math.min(1,(i-n.left-a)/o));return Math.round(r*this.recorder.frames)},e=i=>{const n=this.canvas.getBoundingClientRect(),a=10,o=Math.max(1,n.width-a*2),r=Math.max(1,this.recorder.frames);return n.left+a+i/r*o};this.canvas.addEventListener("pointerdown",i=>{if(i.button!==0||this.recording||this.recorder.frames<16)return;this.canvas.setPointerCapture(i.pointerId);const n=e(this.recorder.trimStart),a=e(this.recorder.trimEnd),o=9;if(Math.abs(i.clientX-n)<=o)this.dragMode="trimStart";else if(Math.abs(i.clientX-a)<=o)this.dragMode="trimEnd";else if(i.shiftKey)this.dragMode="selectRange",this.dragAnchorFrame=t(i.clientX);else{const r=this.canvas.getBoundingClientRect();i.clientY-r.top<20?(this.dragMode="scrub",this.recorder.seek(t(i.clientX)),this.refreshLiveTimecodes(),this.drawTimeline()):(this.dragMode="selectRange",this.dragAnchorFrame=t(i.clientX))}}),this.canvas.addEventListener("pointermove",i=>{if(this.recorder.frames<16)return;const n=t(i.clientX);if(this.hoverFrame=n,this.dragMode==="none"){if(!this.recording){const a=e(this.recorder.trimStart),o=e(this.recorder.trimEnd),r=Math.abs(i.clientX-a)<=9||Math.abs(i.clientX-o)<=9;this.canvas.style.cursor=r?"ew-resize":"crosshair"}return}this.dragMode==="scrub"?(this.recorder.seek(n),this.refreshLiveTimecodes()):this.dragMode==="trimStart"?(this.recorder.setTrim(Math.min(n,this.recorder.trimEnd-1),this.recorder.trimEnd),this.refreshControls()):this.dragMode==="trimEnd"?(this.recorder.setTrim(this.recorder.trimStart,Math.max(n,this.recorder.trimStart+1)),this.refreshControls()):this.dragMode==="selectRange"&&Math.abs(n-this.dragAnchorFrame)>Math.round(.06*this.recorder.fs)&&(this.recorder.setTrim(Math.min(this.dragAnchorFrame,n),Math.max(this.dragAnchorFrame,n)),this.refreshControls()),this.drawTimeline()});const s=i=>{if(this.dragMode==="none")return;const n=this.dragMode;this.dragMode="none";try{this.canvas.releasePointerCapture(i.pointerId)}catch{}if(n==="selectRange"){const a=t(i.clientX);Math.abs(a-this.dragAnchorFrame)<=Math.round(.06*this.recorder.fs)?(this.recorder.seek(a),this.refreshLiveTimecodes()):this.refreshMetrics()}else(n==="trimStart"||n==="trimEnd")&&this.refreshMetrics();this.drawTimeline()};this.canvas.addEventListener("pointerup",s),this.canvas.addEventListener("pointercancel",s),this.canvas.addEventListener("pointerleave",()=>{this.hoverFrame=null,this.dragMode==="none"&&this.drawTimeline()}),this.canvas.addEventListener("dblclick",()=>{this.recording||this.recorder.frames===0||(this.recorder.resetTrim(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline())})}drawTimeline(){const t=this.canvas,e=t.getBoundingClientRect(),s=Math.max(240,Math.round(e.width||720)),i=Math.max(76,Math.round(e.height||88)),n=Math.min(2,window.devicePixelRatio||1);(t.width!==Math.round(s*n)||t.height!==Math.round(i*n))&&(t.width=Math.round(s*n),t.height=Math.round(i*n));const a=t.getContext("2d");if(!a)return;a.setTransform(n,0,0,n,0,0);const o=19,r=10,l=Math.max(1,s-r*2),h=o+2,u=i-h-4,p=h+u*.5,b=u*.44;a.fillStyle="#16181c",a.fillRect(0,0,s,i),a.fillStyle="#1b1e24",a.fillRect(0,0,s,o),a.strokeStyle="rgba(236, 238, 242, 0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(0,o+.5),a.lineTo(s,o+.5),a.moveTo(r,p+.5),a.lineTo(s-r,p+.5),a.stroke();const d=this.recorder.frames,f=Math.max(1,this.recorder.fs),g=d/f;if(d===0){a.font="10px SF Mono, Menlo, monospace",a.fillStyle="rgba(154, 162, 177, 0.7)",a.textAlign="center",a.fillText(this.recording?"Waiting for first audio buffer…":"Press ● Rec to capture 48 kHz post-limiter stereo audio · drag waveform to trim · export 24-bit WAV",s*.5,p+3),a.textAlign="left";return}const k=this.recording?Math.max(8,g*1.05):Math.max(.1,g),m=Math.max(d,Math.round(k*f)),L=k<=6?1:k<=18?2:k<=45?5:k<=120?10:30;a.font="9px SF Mono, Menlo, monospace",a.fillStyle="rgba(154, 162, 177, 0.75)",a.strokeStyle="rgba(236, 238, 242, 0.05)";for(let x=0;x<=k+.001;x+=L){const A=r+x/k*l;if(A>s-r+1)break;a.beginPath(),a.moveTo(A,o-5),a.lineTo(A,i-2),a.stroke(),A<s-r-28&&a.fillText(U(x,!1),A+3,12)}a.fillStyle="rgba(126, 168, 154, 0.65)",a.fillText("L",3,h+10),a.fillStyle="rgba(125, 158, 192, 0.65)",a.fillText("R",3,i-6);const M=this.recorder.envelopeCount,P=this.recorder.peakL,S=this.recorder.peakR,T=this.recorder.rmsL,w=this.recorder.rmsR,R=Math.max(1,m/ge),I=Math.floor(l);for(let x=0;x<I;x++){const A=Math.floor(x/l*R),B=Math.max(A+1,Math.floor((x+1)/l*R));if(A>=M)break;const $=Math.min(M,B);let q=0,z=0,dt=0,ut=0;for(let G=A;G<$;G++)P[G]>q&&(q=P[G]),S[G]>z&&(z=S[G]),T[G]>dt&&(dt=T[G]),w[G]>ut&&(ut=w[G]);const st=r+x,pt=Math.max(1,Math.min(1,q)*b),Et=Math.min(pt,Math.min(1,dt)*b),Pt=Math.max(1,Math.min(1,z)*b),ke=Math.min(Pt,Math.min(1,ut)*b);a.fillStyle="rgba(126, 168, 154, 0.34)",a.fillRect(st,p-pt,1,pt),a.fillStyle="rgba(126, 168, 154, 0.85)",a.fillRect(st,p-Et,1,Et),a.fillStyle="rgba(125, 158, 192, 0.34)",a.fillRect(st,p+1,1,Pt),a.fillStyle="rgba(125, 158, 192, 0.85)",a.fillRect(st,p+1,1,ke)}if(!this.recording&&d>0){const x=r+this.recorder.trimStart/m*l,A=r+this.recorder.trimEnd/m*l;a.fillStyle="rgba(12, 14, 18, 0.62)",x>r&&a.fillRect(r,h,x-r,u),A<s-r&&a.fillRect(A,h,s-r-A,u),a.strokeStyle="rgba(126, 168, 154, 0.85)",a.lineWidth=1.5,a.beginPath(),a.moveTo(x,h),a.lineTo(x,i-2),a.moveTo(A,h),a.lineTo(A,i-2),a.stroke(),a.fillStyle="#7ea89a",a.fillRect(x,h,6,4),a.fillRect(A-6,h,6,4)}const v=this.recorder.timelineMarkers;a.font="8.5px SF Mono, Menlo, monospace";let y=-100;for(let x=0;x<v.length;x++){const A=v[x],B=r+A.frame/m*l;if(B<r||B>s-r)continue;const $=A.kind==="scene"?"#e8cc74":A.kind==="pin"?"#d97757":"#9aa2b1";if(a.strokeStyle=$,a.globalAlpha=.6,a.lineWidth=1,a.beginPath(),a.moveTo(B,o),a.lineTo(B,i-2),a.stroke(),a.globalAlpha=1,a.fillStyle=$,a.beginPath(),a.arc(B,o-3,2.5,0,Math.PI*2),a.fill(),B>y+6&&B<s-r-44){const q=a.measureText(A.label).width;a.fillStyle="rgba(22, 24, 28, 0.86)",a.fillRect(B+3,h+2,q+6,12),a.fillStyle=$,a.fillText(A.label,B+6,h+11),y=B+q+12}}const E=this.recording?d:this.recorder.currentPlayheadFrame,C=r+E/m*l;if(a.strokeStyle="#d97757",a.lineWidth=1.6,a.beginPath(),a.moveTo(C,0),a.lineTo(C,i),a.stroke(),this.hoverFrame!==null&&!this.recording){const x=r+this.hoverFrame/m*l;a.strokeStyle="rgba(236, 238, 242, 0.2)",a.lineWidth=1,a.beginPath(),a.moveTo(x,o),a.lineTo(x,i),a.stroke()}}dispose(){this.stopAnimLoop(),this.stopPlayback(),this.resizeObserver?.disconnect()}}const Ts=[{id:"all",label:"All"},{id:"saved",label:"Saved"},{id:"techno",label:"Techno"},{id:"melodic",label:"Melodic"},{id:"binaural",label:"Binaural"},{id:"mastering",label:"Mastering"},{id:"ambient",label:"Ambient"},{id:"tutorials",label:"Tutorials"},{id:"classic",label:"Classic"}];function Es(c){const t=c.id.toLowerCase(),e=c.name.toLowerCase();return t.includes("mastering")||/^ma\d+/.test(e)?"mastering":t.includes("binaural")||/^b\d+/.test(e)?"binaural":t.includes("tutorial")||/^t\d+/.test(e)?"tutorials":t.includes("melodic")||t.includes("arp")||t.includes("berlin-school")||t.includes("braindance")||t.includes("buchla-ai")||/^m\d+/.test(e)?"melodic":t.includes("ambient")||t.includes("dub")||t.includes("krell")?"ambient":t.includes("techno")||t.includes("acid")||t.includes("tresor")||t.includes("detroit")||t.includes("halftime")||t.includes("logic")||t.includes("neural")?"techno":"classic"}const te="kirchhoff-scene-bar-styles";function Ps(){if(typeof document>"u"||document.getElementById(te))return;const c=document.createElement("style");c.id=te,c.textContent=`
    .scene-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
      position: relative;
      min-width: 0;
    }
    .scene-nav-group {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      background: #13161b;
      border: 1px solid rgba(226, 232, 240, 0.11);
      border-radius: 7px;
      overflow: hidden;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }
    .scene-step-btn {
      appearance: none;
      border: 0;
      background: transparent;
      color: #9aa2b1;
      flex: 0 0 26px;
      width: 26px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 11px;
      transition: background 120ms ease, color 120ms ease;
    }
    .scene-step-btn:hover {
      background: rgba(255, 255, 255, 0.06);
      color: #eceef2;
    }
    .scene-trigger {
      appearance: none;
      border: 0;
      border-left: 1px solid rgba(226, 232, 240, 0.08);
      border-right: 1px solid rgba(226, 232, 240, 0.08);
      background: transparent;
      color: #eceef2;
      height: 28px;
      padding: 0 10px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      /* Width follows the viewport only, never the scene name, so the bar cannot re-wrap */
      width: min(220px, calc(100vw - 110px));
      min-width: 0;
      transition: background 120ms ease;
    }
    .scene-trigger:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    .scene-trigger-name {
      flex: 1 1 auto;
      min-width: 0;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .scene-dirty-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #d97757;
      flex-shrink: 0;
      /* Keeps its slot when hidden so the name does not shift when the scene turns dirty */
      visibility: hidden;
    }
    .scene-dirty-dot.visible {
      visibility: visible;
    }
    .scene-chevron {
      color: #848d9e;
      font-size: 10px;
      flex-shrink: 0;
    }
    .scene-action-btn {
      appearance: none;
      border: 1px solid rgba(226, 232, 240, 0.11);
      background: #23272f;
      color: #d6dae2;
      height: 28px;
      padding: 0 9px;
      border-radius: 6px;
      font-family: inherit;
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);
      transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
    }
    .scene-action-btn:hover {
      background: #2b303a;
      border-color: rgba(226, 232, 240, 0.2);
      color: #f3f4f6;
    }
    .scene-popover {
      position: fixed;
      top: 92px;
      left: 16px;
      width: min(560px, calc(100vw - 32px));
      max-height: min(540px, calc(100vh - 120px));
      display: none;
      flex-direction: column;
      background: #1d2026;
      border: 1px solid rgba(226, 232, 240, 0.14);
      border-radius: 11px;
      box-shadow: 0 22px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.06);
      z-index: 1200;
      overflow: hidden;
    }
    .scene-popover.open {
      display: flex;
    }
    .scene-pop-head {
      padding: 10px 12px 8px;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #1a1d23;
    }
    .scene-pop-top {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .scene-search {
      flex: 1;
      height: 30px;
      padding: 0 10px;
      border-radius: 6px;
      border: 1px solid rgba(226, 232, 240, 0.12);
      background: #13161b;
      color: #eceef2;
      font-family: inherit;
      font-size: 12px;
      outline: none;
    }
    .scene-search:focus {
      border-color: rgba(229, 231, 235, 0.32);
    }
    .scene-cats {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .scene-cat-btn {
      appearance: none;
      border: 1px solid transparent;
      background: transparent;
      color: #9aa2b1;
      padding: 3px 8px;
      border-radius: 5px;
      font-size: 11px;
      cursor: pointer;
      transition: background 110ms ease, color 110ms ease;
    }
    .scene-cat-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #eceef2;
    }
    .scene-cat-btn.active {
      background: #2a2f39;
      border-color: rgba(226, 232, 240, 0.14);
      color: #f3f4f6;
    }
    .scene-list {
      overflow-y: auto;
      padding: 6px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .scene-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 7px;
      border: 1px solid transparent;
      background: transparent;
      cursor: pointer;
      text-align: left;
      width: 100%;
      transition: background 100ms ease, border-color 100ms ease;
    }
    .scene-row:hover {
      background: rgba(255, 255, 255, 0.045);
    }
    .scene-row.active {
      background: #262b34;
      border-color: rgba(229, 231, 235, 0.18);
    }
    .scene-row-main {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .scene-row-title {
      color: #eceef2;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .scene-row-desc {
      color: #848d9e;
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .scene-row-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .scene-tag {
      font-size: 10px;
      color: #9aa2b1;
      background: #13161b;
      border: 1px solid rgba(226, 232, 240, 0.08);
      border-radius: 4px;
      padding: 2px 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .scene-tag.saved {
      color: #7ea89a;
      border-color: rgba(126, 168, 154, 0.25);
    }
    .scene-del-btn {
      appearance: none;
      border: 0;
      background: transparent;
      color: #6c7484;
      width: 22px;
      height: 22px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .scene-del-btn:hover {
      background: rgba(217, 119, 87, 0.16);
      color: #d97757;
    }
    .scene-pop-foot {
      padding: 8px 12px;
      border-top: 1px solid rgba(226, 232, 240, 0.08);
      background: #171a20;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      color: #848d9e;
    }
    .scene-save-inline {
      display: none;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
      background: #20242c;
    }
    .scene-save-inline.open {
      display: flex;
    }
  `,document.head.appendChild(c)}class As{root;store;cb;triggerNameEl;dirtyDotEl;popoverEl;searchInput;catsEl;listEl;footMetaEl;saveRowEl;saveNameInput;fileInput;activeSceneId="";activeSceneName="";dirty=!1;category="all";searchText="";isOpen=!1;constructor(t,e,s){Ps(),this.root=t,this.store=e,this.cb=s,this.root.innerHTML=`
      <div class="scene-bar">
        <div class="scene-nav-group">
          <button type="button" class="scene-step-btn" data-scene-prev title="Previous scene">‹</button>
          <button type="button" class="scene-trigger" data-scene-trigger title="Browse scenes & saved presets">
            <span class="scene-dirty-dot" data-dirty-dot title="Unsaved changes (auto-cached in browser)"></span>
            <span class="scene-trigger-name" data-scene-name>Loading…</span>
            <span class="scene-chevron">▾</span>
          </button>
          <button type="button" class="scene-step-btn" data-scene-next title="Next scene">›</button>
        </div>
        <button type="button" class="scene-action-btn" data-scene-save title="Save current scene & parameters to browser storage">Save</button>
        <button type="button" class="scene-action-btn" data-scene-import title="Load a .kirchhoff.json scene file from disk">Load</button>
        <button type="button" class="scene-action-btn" data-scene-export title="Export current scene & parameters as a .kirchhoff.json file">Export</button>
        <button type="button" class="scene-action-btn" data-scene-link title="Copy a link that opens this exact scene (packed into the URL)">Link</button>
        <input type="file" accept=".json,.kirchhoff.json,application/json" style="display:none" data-scene-file />
      </div>
    `,this.triggerNameEl=this.root.querySelector("[data-scene-name]"),this.dirtyDotEl=this.root.querySelector("[data-dirty-dot]"),this.fileInput=this.root.querySelector("[data-scene-file]"),this.popoverEl=document.createElement("div"),this.popoverEl.className="scene-popover",this.popoverEl.innerHTML=`
      <div class="scene-pop-head">
        <div class="scene-pop-top">
          <input type="search" class="scene-search" placeholder="Search scenes, genres, or tutorials…" data-scene-search />
          <button type="button" class="scene-action-btn" data-pop-close>Close</button>
        </div>
        <div class="scene-cats" data-scene-cats></div>
      </div>
      <div class="scene-save-inline" data-save-row>
        <input type="text" class="scene-search" placeholder="Scene name…" data-save-name />
        <button type="button" class="scene-action-btn" data-save-confirm>Save Scene</button>
        <button type="button" class="scene-action-btn" data-save-cancel>Cancel</button>
      </div>
      <div class="scene-list" data-scene-list></div>
      <div class="scene-pop-foot">
        <span data-foot-meta>Auto-cached locally</span>
        <div style="display:flex;gap:6px;">
          <button type="button" class="scene-action-btn" data-foot-import>Load File…</button>
          <button type="button" class="scene-action-btn" data-foot-export>Export File</button>
        </div>
      </div>
    `,document.body.appendChild(this.popoverEl),this.searchInput=this.popoverEl.querySelector("[data-scene-search]"),this.catsEl=this.popoverEl.querySelector("[data-scene-cats]"),this.listEl=this.popoverEl.querySelector("[data-scene-list]"),this.footMetaEl=this.popoverEl.querySelector("[data-foot-meta]"),this.saveRowEl=this.popoverEl.querySelector("[data-save-row]"),this.saveNameInput=this.popoverEl.querySelector("[data-save-name]"),this.bindEvents(),this.renderCategories()}setActiveScene(t,e,s=!1){this.activeSceneId=t,this.activeSceneName=e,this.dirty=s,this.triggerNameEl.textContent=e,this.dirtyDotEl.classList.toggle("visible",s),this.isOpen&&this.renderList()}setDirty(t){this.dirty=t,this.dirtyDotEl.classList.toggle("visible",t)}open(t=!1){this.isOpen=!0;const e=this.root.getBoundingClientRect();if(this.popoverEl.style.top=`${Math.round(e.bottom+8)}px`,this.popoverEl.style.left=`${Math.max(12,Math.round(e.left))}px`,this.popoverEl.classList.add("open"),this.saveRowEl.classList.toggle("open",t),this.renderCategories(),this.renderList(),t){const s=this.cb.getCurrentPatch();this.saveNameInput.value=s.name||"My Scene",this.saveNameInput.focus(),this.saveNameInput.select()}else this.searchInput.focus()}close(){this.isOpen=!1,this.popoverEl.classList.remove("open"),this.saveRowEl.classList.remove("open")}dispose(){this.popoverEl.remove()}getAllItems(){const t=this.store.listUserScenes().map(s=>({id:s.id,name:s.name,description:`Saved ${new Date(s.savedAt).toLocaleString()} · ${s.patch.modules.length} modules`,patch:s.patch,saved:!0,cat:"saved"})),e=this.cb.getPresets().map(s=>({id:s.id,name:s.name,description:s.description??"",patch:s,saved:!1,cat:Es(s)}));return[...t,...e]}stepScene(t){const e=this.getAllItems();if(e.length===0)return;const s=e.findIndex(a=>a.id===this.activeSceneId),i=s<0?0:(s+t+e.length)%e.length,n=e[i];this.cb.onLoadScene(n.patch,n.id,n.saved?"saved":"preset")}bindEvents(){this.root.querySelector("[data-scene-trigger]").addEventListener("click",e=>{e.stopPropagation(),this.isOpen?this.close():this.open(!1)}),this.root.querySelector("[data-scene-prev]").addEventListener("click",()=>this.stepScene(-1)),this.root.querySelector("[data-scene-next]").addEventListener("click",()=>this.stepScene(1)),this.root.querySelector("[data-scene-save]").addEventListener("click",e=>{e.stopPropagation(),this.open(!0)}),this.root.querySelector("[data-scene-export]").addEventListener("click",()=>this.doExport()),this.root.querySelector("[data-scene-import]").addEventListener("click",()=>this.fileInput.click()),this.root.querySelector("[data-scene-link]").addEventListener("click",()=>this.cb.onCopyLink?.()),this.popoverEl.querySelector("[data-pop-close]").addEventListener("click",()=>this.close()),this.popoverEl.querySelector("[data-foot-import]").addEventListener("click",()=>this.fileInput.click()),this.popoverEl.querySelector("[data-foot-export]").addEventListener("click",()=>this.doExport()),this.popoverEl.querySelector("[data-save-cancel]").addEventListener("click",()=>{this.saveRowEl.classList.remove("open")});const t=()=>{const e=this.saveNameInput.value.trim()||this.cb.getCurrentPatch().name||"My Scene",s=this.store.listUserScenes().find(n=>n.id===this.activeSceneId&&n.name===e),i=this.store.saveUserScene(this.cb.getCurrentPatch(),e,s?.id);this.saveRowEl.classList.remove("open"),this.setActiveScene(i.id,i.name,!1),this.cb.onSceneSaved?.(i),this.category="saved",this.renderCategories(),this.renderList(),this.cb.onToast(`Saved "${i.name}" to browser storage`)};this.popoverEl.querySelector("[data-save-confirm]").addEventListener("click",t),this.saveNameInput.addEventListener("keydown",e=>{e.key==="Enter"&&t(),e.key==="Escape"&&this.saveRowEl.classList.remove("open")}),this.searchInput.addEventListener("input",()=>{this.searchText=this.searchInput.value.trim().toLowerCase(),this.renderList()}),this.fileInput.addEventListener("change",async()=>{const e=this.fileInput.files?.[0];if(this.fileInput.value="",!e)return;const s=await this.store.importSceneFromFile(e);if(!s.ok){this.cb.onToast(`Import failed: ${s.error}`);return}const i=this.store.saveUserScene(s.patch,s.patch.name);this.cb.onLoadScene(i.patch,i.id,"file"),this.close(),this.cb.onToast(`Loaded & cached "${i.name}" from ${e.name}`)}),document.addEventListener("pointerdown",e=>{if(!this.isOpen)return;const s=e.target;!this.popoverEl.contains(s)&&!this.root.contains(s)&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}doExport(){const t=this.cb.getCurrentPatch(),e=this.store.exportSceneToFile(t,this.activeSceneName||t.name);this.cb.onToast(`Exported ${e}`)}renderCategories(){const t=this.store.listUserScenes().length;this.catsEl.innerHTML="";for(const e of Ts){const s=document.createElement("button");s.type="button",s.className=`scene-cat-btn${this.category===e.id?" active":""}`,s.textContent=e.id==="saved"&&t>0?`${e.label} (${t})`:e.label,s.addEventListener("click",()=>{this.category=e.id,this.renderCategories(),this.renderList()}),this.catsEl.appendChild(s)}}renderList(){const e=this.getAllItems().filter(i=>!(this.category!=="all"&&i.cat!==this.category||this.searchText&&!`${i.name} ${i.description} ${i.id}`.toLowerCase().includes(this.searchText)));if(this.listEl.innerHTML="",e.length===0){const i=document.createElement("div");i.style.cssText="padding:18px 12px;text-align:center;color:#848d9e;font-size:12px;",i.textContent=this.category==="saved"?"No saved scenes yet. Click Save to keep your current patch & tweaks.":"No matching scenes.",this.listEl.appendChild(i)}else for(const i of e){const n=document.createElement("div");n.className=`scene-row${i.id===this.activeSceneId?" active":""}`,n.setAttribute("role","button"),n.tabIndex=0;const a=document.createElement("div");a.className="scene-row-main";const o=document.createElement("div");o.className="scene-row-title",o.textContent=i.name;const r=document.createElement("div");r.className="scene-row-desc",r.textContent=i.description,a.append(o,r);const l=document.createElement("div");l.className="scene-row-meta";const h=document.createElement("span");if(h.className=`scene-tag${i.saved?" saved":""}`,h.textContent=i.saved?"Saved":i.cat,l.appendChild(h),i.saved){const p=document.createElement("button");p.type="button",p.className="scene-del-btn",p.title=`Delete saved scene "${i.name}"`,p.textContent="×",p.addEventListener("click",b=>{b.stopPropagation(),this.store.deleteUserScene(i.id),this.renderCategories(),this.renderList(),this.cb.onToast(`Deleted saved scene "${i.name}"`)}),l.appendChild(p)}n.append(a,l);const u=()=>{this.cb.onLoadScene(i.patch,i.id,i.saved?"saved":"preset"),this.close()};n.addEventListener("click",u),n.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),u())}),this.listEl.appendChild(n)}const s=this.store.listUserScenes().length;this.footMetaEl.textContent=`${e.length} scenes · ${s} saved in browser`}}function Rs(c){let t=1;for(;t<c;)t<<=1;return t}function be(c){const t=new Float64Array(c),e=.35875,s=.48829,i=.14128,n=.01168,a=1/(c-1);for(let o=0;o<c;o++){const r=2*Math.PI*o*a;t[o]=e-s*Math.cos(r)+i*Math.cos(2*r)-n*Math.cos(3*r)}return t}function Vs(c){const t=new Float64Array(c),e=1/c;for(let s=0;s<c;s++)t[s]=.5*(1-Math.cos(2*Math.PI*s*e));return t}function ye(c,t,e=!1){const s=c.length;for(let n=1,a=0;n<s;n++){let o=s>>1;for(;a&o;o>>=1)a^=o;if(a^=o,n<a){const r=c[n];c[n]=c[a],c[a]=r;const l=t[n];t[n]=t[a],t[a]=l}}const i=e?1:-1;for(let n=2;n<=s;n<<=1){const a=n>>1,o=i*2*Math.PI/n,r=Math.cos(o),l=Math.sin(o);for(let h=0;h<s;h+=n){let u=1,p=0;for(let b=0;b<a;b++){const d=c[h+b],f=t[h+b],g=c[h+b+a]*u-t[h+b+a]*p,k=c[h+b+a]*p+t[h+b+a]*u;c[h+b]=d+g,t[h+b]=f+k,c[h+b+a]=d-g,t[h+b+a]=f-k;const m=u*r-p*l;p=u*l+p*r,u=m}}}if(e){const n=1/s;for(let a=0;a<s;a++)c[a]*=n,t[a]*=n}}function Ns(c,t,e,s=0){const i=e??Rs(Math.min(c.length-s,65536)),n=be(i),a=new Float64Array(i),o=new Float64Array(i);let r=0;for(let d=0;d<i;d++){const f=s+d,g=f<c.length?c[f]:0,k=n[d];a[d]=g*k,r+=k}ye(a,o,!1);const l=(i>>1)+1,h=new Float64Array(l),u=new Float64Array(l),p=new Float64Array(l),b=2/Math.max(r,1e-12);for(let d=0;d<l;d++){const f=Math.hypot(a[d],o[d])*(d===0||d===l-1?b*.5:b);h[d]=f,u[d]=20*Math.log10(Math.max(f,1e-15)),p[d]=d*t/i}return{bins:l,fftSize:i,sampleRate:t,mag:h,magDb:u,freqs:p}}function Us(c,t,e,s=16384,i=2048,n=2e4){const a=Ns(c,t,s,i),o=t/s,r=Math.min(a.bins-4,Math.floor(n/o)),l=new Uint8Array(a.bins);for(let g=0;g<=5;g++)l[g]=2;const h=[],u=5;let p=0;for(let g=1;g*e<Math.min(n,t*.495);g++){const k=Math.round(g*e/o);let m=0;for(let L=Math.max(6,k-u);L<=Math.min(r,k+u);L++)l[L]=1,m+=a.mag[L]*a.mag[L];p+=m,h.push(10*Math.log10(Math.max(m,1e-30)))}let b=0,d=0;for(let g=6;g<=r;g++)if(l[g]===0){const k=a.mag[g];b+=k*k,k>d&&(d=k)}return{snrDb:10*Math.log10(Math.max(p,1e-30)/Math.max(b,1e-30)),signalPower:p,aliasPower:b,harmonicsDb:h,peakAliasDb:20*Math.log10(Math.max(d,1e-15))}}const rt=["#7ea89a","#d97757","#9aa2b1","#c99e67"],Q=180,_=4096;function Ds(c){if(!Number.isFinite(c))return"—";const t=Math.abs(c);return t!==0&&(t<.001||t>=1e5)?c.toExponential(2):t>=100?c.toFixed(1):c.toFixed(4)}class Bs{phaseCanvas;fftCanvas;probeCanvas;phaseTag;fftTag;probeTitleSpan;probeSelect;probeReadoutStrip;probeReadoutKey="\0";probeValueEls=[];phaseMode="attractor";phaseModeIndicator=null;phaseNeedsHardClear=!0;fftHoverX=null;selectedModuleId=null;onSelectModuleCallback;fftWindow=be(_);fftRe=new Float64Array(_);fftIm=new Float64Array(_);fftMagDb=new Float32Array(_/2);fftPeakHold=new Float32Array(_/2).fill(-110);probeHist=[];probeHistHead=0;lastProbeMeta=[];constructor(t,e){this.onSelectModuleCallback=e;for(let r=0;r<64;r++)this.probeHist.push(new Float32Array(Q));t.innerHTML="",t.className="crt-stack";const s=document.createElement("div");s.className="panel-card",s.innerHTML=`
      <div class="panel-header">
        <div class="panel-title">PHASE PORTRAIT // ATTRACTOR</div>
        <div class="mode-toggle-group" data-phase-modes>
          <button type="button" class="mode-toggle-btn active" data-mode="attractor">x vs dx</button>
          <button type="button" class="mode-toggle-btn" data-mode="lissajous">L–R XY</button>
          <button type="button" class="mode-toggle-btn" data-mode="waveform">TIME</button>
        </div>
      </div>
      <div class="crt-frame">
        <canvas class="crt-canvas tall" data-phase-canvas></canvas>
        <div class="crt-overlay-tag" data-phase-tag>PEAK 0.000 · RMS -∞ dB</div>
      </div>
    `,this.phaseCanvas=s.querySelector("[data-phase-canvas]"),this.phaseTag=s.querySelector("[data-phase-tag]");const i=s.querySelector("[data-phase-modes]");this.phaseModeIndicator=new ce(i,"mode-slider-thumb","pill");const n=s.querySelectorAll("[data-mode]");n.forEach(r=>{r.addEventListener("click",()=>{this.phaseMode=r.dataset.mode,this.phaseNeedsHardClear=!0,n.forEach(l=>l.classList.toggle("active",l===r)),this.phaseModeIndicator?.setActive(r)})}),requestAnimationFrame(()=>{const r=i.querySelector(".mode-toggle-btn.active");this.phaseModeIndicator?.setActive(r,!0)}),t.appendChild(s);const a=document.createElement("div");a.className="panel-card",a.innerHTML=`
      <div class="panel-header">
        <div class="panel-title">LIVE FFT // 4096-PT SPECTRUM</div>
        <button type="button" class="btn btn-sm" data-fft-reset>CLR PEAK</button>
      </div>
      <div class="crt-frame">
        <canvas class="crt-canvas fft-interactive" data-fft-canvas></canvas>
        <div class="crt-overlay-tag" data-fft-tag>PEAK — Hz · FLOOR — dB</div>
      </div>
    `,this.fftCanvas=a.querySelector("[data-fft-canvas]"),this.fftTag=a.querySelector("[data-fft-tag]"),a.querySelector("[data-fft-reset]").addEventListener("click",()=>{this.fftPeakHold.fill(-110)}),this.fftCanvas.addEventListener("pointermove",r=>{const l=this.fftCanvas.getBoundingClientRect();this.fftHoverX=Math.max(0,Math.min(l.width,r.clientX-l.left))}),this.fftCanvas.addEventListener("pointerleave",()=>{this.fftHoverX=null}),t.appendChild(a);const o=document.createElement("div");o.className="panel-card",o.innerHTML=`
      <div class="panel-header">
        <div class="panel-title"><span>CIRCUIT NODE SCOPE</span> <span style="color:var(--phosphor);white-space:nowrap" data-probe-mod></span></div>
        <select class="wat-select" data-probe-select aria-label="Select circuit module to probe"></select>
      </div>
      <div class="crt-frame">
        <canvas class="crt-canvas" data-probe-canvas></canvas>
      </div>
      <div class="probe-readout-strip" data-probe-readouts></div>
    `,this.probeTitleSpan=o.querySelector("[data-probe-mod]"),this.probeSelect=o.querySelector("[data-probe-select]"),this.probeCanvas=o.querySelector("[data-probe-canvas]"),this.probeReadoutStrip=o.querySelector("[data-probe-readouts]"),this.probeSelect.addEventListener("change",()=>{this.selectedModuleId=this.probeSelect.value,this.onSelectModuleCallback(this.selectedModuleId)}),t.appendChild(o)}resetProbeHistory(t,e){this.lastProbeMeta=t,this.probeHistHead=0,this.phaseNeedsHardClear=!0;for(let i=0;i<this.probeHist.length;i++)this.probeHist[i].fill(0);this.fftPeakHold.fill(-110);const s=[];for(const i of t)s.includes(i.moduleId)||s.push(i.moduleId);this.probeSelect.innerHTML="";for(const i of s){const n=t.find(o=>o.moduleId===i),a=document.createElement("option");a.value=i,a.textContent=`${i} (${n.moduleKind})`,this.probeSelect.appendChild(a)}if(e&&s.includes(e))this.selectedModuleId=e;else{const i=["plate2d","transducer","poly4","tb303","triode12ax7","tubescreamer","fuzzface","pultec","comp1176","tapeecho","springrev","platerev","leslie","scannervib","junochorus","tr808bd","tr909bd","tr808metal","diodering","phase90","minimoogvco","ms20wdf","moog904a","vactrol","wavefolder","bbd","dusg","osc"];let n=s[0]??null;for(const a of i){const o=t.find(r=>r.moduleKind===a);if(o){n=o.moduleId;break}}this.selectedModuleId=n}this.selectedModuleId?(this.probeSelect.value=this.selectedModuleId,this.probeTitleSpan.textContent=this.selectedModuleId.toUpperCase()):this.probeTitleSpan.textContent="NONE"}setSelectedModule(t){this.lastProbeMeta.some(e=>e.moduleId===t)&&(this.selectedModuleId=t,this.probeSelect.value=t,this.probeTitleSpan.textContent=t.toUpperCase())}getSelectedModule(){return this.selectedModuleId}update(t){const e=Math.min(t.probeCount,this.probeHist.length);for(let s=0;s<e;s++){const i=t.probes[s];this.probeHist[s][this.probeHistHead]=Number.isFinite(i)?i:0}this.probeHistHead=(this.probeHistHead+1)%Q,this.drawPhaseCanvas(t.scopeL,t.scopeR),this.drawFftCanvas(t.scopeL,t.sampleRate),this.drawProbeCanvas(t)}sizeCanvas(t){const e=Math.min(2,window.devicePixelRatio||1),s=t.getBoundingClientRect(),i=Math.max(240,Math.round(s.width)),n=Math.max(120,Math.round(s.height)),a=Math.round(i*e),o=Math.round(n*e);(t.width!==a||t.height!==o)&&(t.width=a,t.height=o);const r=t.getContext("2d");return r?(r.setTransform(e,0,0,e,0,0),{ctx:r,w:i,h:n}):null}drawGraticule(t,e,s,i=8,n=4,a=1){t.fillStyle=a>=.99?"#111419":`rgba(17, 20, 25, ${a.toFixed(2)})`,t.fillRect(0,0,e,s),t.strokeStyle="rgba(236, 238, 242, 0.05)",t.lineWidth=1,t.beginPath();for(let o=1;o<i;o++){const r=o/i*e;t.moveTo(r,0),t.lineTo(r,s)}for(let o=1;o<n;o++){const r=o/n*s;t.moveTo(0,r),t.lineTo(e,r)}t.stroke(),t.strokeStyle="rgba(236, 238, 242, 0.1)",t.beginPath(),t.moveTo(0,s*.5),t.lineTo(e,s*.5),t.moveTo(e*.5,0),t.lineTo(e*.5,s),t.stroke()}drawPhaseCanvas(t,e){const s=this.sizeCanvas(this.phaseCanvas);if(!s)return;const{ctx:i,w:n,h:a}=s,o=!this.phaseNeedsHardClear&&this.phaseMode!=="waveform"&&!le();this.drawGraticule(i,n,a,8,4,o?.34:1),this.phaseNeedsHardClear=!1;const r=t.length;let l=0,h=0;const u=Math.min(2048,r),p=r-u;for(let S=p;S<r;S++){const T=t[S],w=Math.abs(T);w>l&&(l=w),h+=T*T}const b=Math.sqrt(h/u),d=b>1e-6?20*Math.log10(b):-120;this.phaseTag.textContent=`PK ${l.toFixed(3)} · RMS ${d>-100?d.toFixed(1):"-∞"} dB`;const f=Math.max(.25,l*1.15);if(this.phaseMode==="waveform"){let S=r-1024;for(let w=Math.max(1,r-1400);w<r-600;w++)if(t[w-1]<=0&&t[w]>0){S=w;break}const T=Math.min(600,r-S);i.strokeStyle="rgba(217, 119, 87, 0.55)",i.lineWidth=1.25,i.beginPath();for(let w=0;w<T;w++){const R=w/(T-1)*n,I=a*.5-e[S+w]/f*(a*.42);w===0?i.moveTo(R,I):i.lineTo(R,I)}i.stroke(),i.strokeStyle="#7ea89a",i.lineWidth=1.6,i.beginPath();for(let w=0;w<T;w++){const R=w/(T-1)*n,I=a*.5-t[S+w]/f*(a*.42);w===0?i.moveTo(R,I):i.lineTo(R,I)}i.stroke();return}const g=Math.min(1400,r-2),k=r-g;let m=.05;if(this.phaseMode==="attractor")for(let S=k+1;S<r;S++){const T=Math.abs(t[S]-t[S-1]);T>m&&(m=T)}const L=this.phaseMode==="attractor"?m*1.18:f,M=Math.min(n*.43,a*.45*1.45),P=a*.43;i.strokeStyle="rgba(126, 168, 154, 0.3)",i.lineWidth=3.2,i.beginPath();for(let S=k+1;S<r;S++){const T=t[S]/f,w=(this.phaseMode==="attractor"?t[S]-t[S-1]:e[S])/L,R=n*.5+T*M,I=a*.5-w*P;S===k+1?i.moveTo(R,I):i.lineTo(R,I)}i.stroke(),i.strokeStyle="#a9c9bd",i.lineWidth=1.15,i.beginPath();for(let S=k+1;S<r;S++){const T=t[S]/f,w=(this.phaseMode==="attractor"?t[S]-t[S-1]:e[S])/L,R=n*.5+T*M,I=a*.5-w*P;S===k+1?i.moveTo(R,I):i.lineTo(R,I)}i.stroke()}drawFftCanvas(t,e){const s=this.sizeCanvas(this.fftCanvas);if(!s)return;const{ctx:i,w:n,h:a}=s;this.drawGraticule(i,n,a,8,4);const o=t.length,r=Math.min(_,o),l=o-r;let h=0;for(let y=0;y<_;y++){const E=y<r?t[l+y]:0,C=this.fftWindow[y];h+=C,this.fftRe[y]=E*C,this.fftIm[y]=0}ye(this.fftRe,this.fftIm);const u=_/2,p=2/h;let b=1,d=-120,f=0,g=0;const k=e/_;for(let y=1;y<u;y++){const E=Math.hypot(this.fftRe[y],this.fftIm[y])*p,C=Math.max(-105,20*Math.log10(E+1e-12));this.fftMagDb[y]=C,C>this.fftPeakHold[y]?this.fftPeakHold[y]=C:this.fftPeakHold[y]=Math.max(C,this.fftPeakHold[y]-.35),C>d&&(d=C,b=y);const x=y*k;x>=14e3&&x<=2e4&&(f+=C,g++)}const m=25,L=e*.5,M=Math.log10(m),P=Math.log10(L)-M,S=y=>(Math.log10(Math.max(m,y))-M)/P*n,T=y=>a-(Math.max(-100,Math.min(0,y))+100)/100*(a-14)-8;i.strokeStyle="rgba(217, 119, 87, 0.45)",i.lineWidth=1,i.beginPath();let w=!1;for(let y=2;y<u;y++){const E=y*k;if(E<m)continue;const C=S(E),x=T(this.fftPeakHold[y]);w?i.lineTo(C,x):(i.moveTo(C,x),w=!0)}i.stroke(),i.beginPath(),w=!1;let R=0;for(let y=2;y<u;y++){const E=y*k;if(E<m)continue;const C=S(E),x=T(this.fftMagDb[y]);w?i.lineTo(C,x):(i.moveTo(C,a),i.lineTo(C,x),w=!0),R=C}w&&(i.lineTo(R,a),i.closePath(),i.fillStyle="rgba(126, 168, 154, 0.14)",i.fill()),i.strokeStyle="#7ea89a",i.lineWidth=1.4,i.beginPath(),w=!1;for(let y=2;y<u;y++){const E=y*k;if(E<m)continue;const C=S(E),x=T(this.fftMagDb[y]);w?i.lineTo(C,x):(i.moveTo(C,x),w=!0)}i.stroke(),i.font="9px SF Mono, Menlo, monospace";for(const y of[50,200,1e3,5e3,15e3]){const E=y>=1e3?`${y/1e3}k`:`${y}`,C=i.measureText(E).width,x=Math.min(n-C-4,S(y)+2);i.fillStyle="rgba(17, 20, 25, 0.78)",i.fillRect(x-2,a-12,C+4,11),i.fillStyle="rgba(176, 194, 208, 0.85)",i.fillText(E,x,a-3)}if(this.fftHoverX!==null&&this.fftHoverX>=2&&this.fftHoverX<=n-2){const y=this.fftHoverX,E=Math.pow(10,M+y/n*P),C=Math.max(2,Math.min(u-1,Math.round(E/k))),x=this.fftMagDb[C],A=T(x);i.save(),i.strokeStyle="rgba(217, 119, 87, 0.48)",i.lineWidth=1,i.setLineDash([3,3]),i.beginPath(),i.moveTo(y,0),i.lineTo(y,a),i.moveTo(0,A),i.lineTo(n,A),i.stroke(),i.setLineDash([]),i.fillStyle="#d97757",i.beginPath(),i.arc(y,A,3.2,0,Math.PI*2),i.fill();const B=`${E<1e3?`${E.toFixed(0)} Hz`:`${(E/1e3).toFixed(2)} kHz`} · ${x.toFixed(1)} dB`;i.font="600 9.5px SF Mono, Menlo, monospace";const $=i.measureText(B).width+10,q=y+$+10>n?y-$-8:y+8,z=Math.max(24,Math.min(a-24,A-18));i.fillStyle="rgba(10, 14, 17, 0.9)",i.strokeStyle="rgba(217, 119, 87, 0.55)",i.lineWidth=1,i.fillRect(q,z,$,16),i.strokeRect(q,z,$,16),i.fillStyle="#eceef2",i.fillText(B,q+5,z+11),i.restore()}const I=b*k,v=g>0?f/g:-100;this.fftTag.textContent=`PK ${I<1e3?I.toFixed(0)+" Hz":(I/1e3).toFixed(2)+" kHz"} (${d.toFixed(1)} dB) · 14–20k ${v.toFixed(0)} dB`}drawProbeCanvas(t){const e=this.sizeCanvas(this.probeCanvas);if(!e)return;const{ctx:s,w:i,h:n}=e;this.drawGraticule(s,i,n,8,4);const a=t.probeMeta.filter(o=>o.moduleId===this.selectedModuleId).slice(0,4);this.syncProbeReadouts(a,t),a.length!==0&&a.forEach((o,r)=>{const l=this.probeHist[o.index];if(!l)return;let h=1/0,u=-1/0;for(let m=0;m<Q;m++){const L=l[m];L<h&&(h=L),L>u&&(u=L)}const b=Math.max(1e-6,u-h)*.18,d=h-b,f=u+b,g=rt[r%rt.length];s.strokeStyle=g,s.lineWidth=1.6,s.beginPath();let k=n*.5;for(let m=0;m<Q;m++){const L=(this.probeHistHead+m)%Q,M=l[L],P=m/(Q-1)*i,S=(M-d)/(f-d),T=n-10-S*(n-20);m===0?s.moveTo(P,T):s.lineTo(P,T),k=T}s.stroke(),s.fillStyle=g,s.beginPath(),s.arc(i-2.5,k,2.3,0,Math.PI*2),s.fill()})}syncProbeReadouts(t,e){const s=t.map(i=>i.key).join("|");if(s!==this.probeReadoutKey){if(this.probeReadoutKey=s,this.probeValueEls=[],this.probeReadoutStrip.textContent="",t.length===0){const i=document.createElement("span");i.className="probe-empty",i.textContent="Click PRB on a patchbay module to inspect its internal circuit nodes.",this.probeReadoutStrip.appendChild(i)}t.forEach((i,n)=>{const a=V[i.moduleKind]?.probes.find(p=>p.id===i.probeId),o=document.createElement("span");o.className="probe-pill",o.title=`${i.label} (${i.unit})`;const r=document.createElement("span");r.className="probe-swatch",r.style.background=rt[n%rt.length];const l=document.createElement("span");l.className="probe-label",l.textContent=a?.label??i.probeId;const h=document.createElement("strong");h.className="probe-value";const u=document.createElement("span");u.className="probe-unit",u.textContent=i.unit,o.append(r,l,h,u),this.probeReadoutStrip.appendChild(o),this.probeValueEls.push(h)})}for(let i=0;i<t.length;i++){const n=this.probeValueEls[i];n&&(n.textContent=Ds(e.probes[t[i].index]??0))}}}const Os="mastering-tutorial-glue",ee="kirchhoff_playback_target_v1",se="kirchhoff_binaural_mode_v1",Lt=[{id:"off",label:"Off",hint:"Plain stereo"},{id:"headphones",label:"Crossfeed",hint:"Studio headphone crossfeed (0.28 ms ITD, 700 Hz head shadow)"},{id:"wide-3d",label:"Wide 3D",hint:"Out-of-head 3D headphone stage with room depth"}],Fs=.35;function K(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function ct(c){const t=K(c);for(let e=0;e<t.modules.length;e++){const s=t.modules[e];s.x!==void 0&&Number.isFinite(s.x)&&(s.x=Math.round(40+(s.x-40)*1.18)),s.y!==void 0&&Number.isFinite(s.y)&&(s.y=Math.round(48+(s.y-40)*1.44))}return t}function ie(c){try{return typeof localStorage<"u"?localStorage.getItem(c):null}catch{return null}}function ae(c,t){try{typeof localStorage<"u"&&localStorage.setItem(c,t)}catch{}}function ne(c){return Lt.some(t=>t.id===c)}class Hs{host=new ns;sceneStore=new je;currentPatch;activeSceneId;activeSceneName;sceneDirty;audioBtn;tourBtn;brandLed;metricWasm;metricCompile;metricCpu;metricNewton;metricScc;metricSwaps;swapChip;teammateChip;teammateLabel;teammateDot;teammateBiasEl;teammateAddBtn;teammatePulse=null;teammateJam=0;aiTaps=[];history=new Be;historyBusy=!1;linkHashShown=!1;toastEl;dockTabs=new Map;dockPanes=new Map;dockTabIndicator;tour=null;tourPromise=null;tourRunning=!1;sceneBar;ioPanel;recorderView;teammate;patchbay;scopes;activeDockTab="physics";physicsLab=null;compilerView=null;inverseDeck=null;jsonView=null;latestCompiled=null;pendingLabBank=null;pendingPhysicsAutoSelect=!1;labsModulePromise=null;inverseModulePromise=null;dockTabPromises=new Map;lastHudUpdate=0;toastTimer=0;swapFlashTimer=0;constructor(t){const e=this.resolveInitialScene();this.currentPatch=e.patch,this.activeSceneId=e.id,this.activeSceneName=e.name,this.sceneDirty=e.dirty;const s=ie(ee),i=Ot(s)?s:"flat",n=ie(se),a=ne(n)?n:"off";this.host.setPlaybackTarget(i),this.host.setBinauralMode(a);const o=Bt().map(d=>`<option value="${d.id}" title="${d.hint}">${d.label}</option>`).join(""),r=Lt.map(d=>`<option value="${d.id}" title="${d.hint}">${d.label}</option>`).join("");t.innerHTML=`
      <div class="studio-shell">
        <header class="top-bar">
          <div class="brand-cluster">
            <div class="brand-title">
              <span class="brand-led" data-brand-led></span>
              <span>KIRCHHOFF // JIT</span>
            </div>
            <span class="spec-pill spec-pill-a">WASM 1.0 · 0 imports</span>
            <span class="spec-pill spec-pill-b">Zero-delay Newton solver</span>
          </div>

          <div class="transport-cluster">
            <button type="button" class="btn btn-primary" data-audio-btn title="Start the 48 kHz AudioWorklet engine">▶ Start audio</button>
            <span class="rec-top-slot" data-rec-top-slot></span>
            <button type="button" class="btn btn-tour" data-tour-btn title="Guided walkthrough of the studio (shortcut: T)">✦ Live tour</button>
            <label class="gain-control" title="Master output level · double-click to reset to 85%">
              <span>Out</span>
              <input type="range" class="param-slider" min="0" max="1" step="0.01" value="0.85" data-master-gain />
              <span class="mono" data-gain-val>85%</span>
            </label>
            <label class="out-select" title="Voice the output for what you are listening on. Flat is an untouched bypass.">
              <span>Monitor</span>
              <select data-monitor-select aria-label="Playback monitor target">${o}</select>
            </label>
            <label class="out-select" title="Optional headphone stage after the monitor voicing. Leave Off on speakers.">
              <span>3D</span>
              <select data-binaural-select aria-label="Binaural headphone stage">${r}</select>
            </label>
            <span class="io-slot" data-io-slot></span>
            <button type="button" class="btn btn-sm" data-reset-btn title="Zero every circuit state and capacitor">Reset state</button>
          </div>
        </header>

        <section class="telemetry-bar">
          <div class="scene-cluster">
            <div class="scene-slot" data-scene-slot></div>
            <span class="teammate-chip" data-teammate-chip title="The LED flashes each time a neural node makes a decision. The chip lights up while the AI follows your knob and MIDI gestures.">
              <span class="teammate-dot" data-teammate-dot></span>
              <span>AI teammate ·</span>
              <span class="teammate-mode" data-teammate-label>Holding pocket</span>
              <span class="teammate-tail">
                <span class="teammate-bias" data-teammate-bias>0.00</span>
                <button type="button" class="teammate-add" data-teammate-add aria-label="Add an AI teammate and connect it" title="Add an AI node to this scene and connect it: clock in, listening to the mix, outputs to free pitch, gate and tone inputs">+</button>
              </span>
            </span>
          </div>
          <div class="telemetry-readouts">
            <span class="metric-chip good" title="Compiled .wasm size"><span class="k">WASM</span><span class="v" data-m-wasm>—</span></span>
            <span class="metric-chip metric-wide-only" title="Patch graph to .wasm compile time"><span class="k">JIT</span><span class="v" data-m-compile>—</span></span>
            <span class="metric-chip good" title="CPU per 128-sample block: latest / P99 (budget 2667 µs)"><span class="k">CPU · P99</span><span class="v" data-m-cpu>—</span></span>
            <span class="metric-chip" title="Newton iterations per sample: max / average"><span class="k">NEWTON</span><span class="v" data-m-newton>—</span></span>
            <span class="metric-chip scc" title="Zero-delay feedback loops solved every sample"><span class="k">ZDF SCC</span><span class="v" data-m-scc>—</span></span>
            <span class="metric-chip" data-swap-chip title="Lock-free hot-swaps so far"><span class="k">SWAPS</span><span class="v" data-m-swaps>0</span></span>
          </div>
        </section>

        <div data-recorder-slot></div>

        <main class="workspace-grid">
          <div data-patchbay-slot></div>
          <div data-scopes-slot></div>
        </main>

        <section class="workbench-dock">
          <div class="dock-tabs">
            <div class="dock-tab-list" data-dock-tab-list role="tablist">
              <button type="button" class="dock-tab active" data-tab="physics" role="tab" aria-selected="true">A/B physics lab</button>
              <button type="button" class="dock-tab" data-tab="compiler" role="tab" aria-selected="false">Compiler · SCC &amp; WAT</button>
              <button type="button" class="dock-tab" data-tab="inverse" role="tab" aria-selected="false">Inverse patch discovery</button>
              <button type="button" class="dock-tab" data-tab="json" role="tab" aria-selected="false">Patch graph JSON</button>
            </div>
            <span class="mono dock-caption">Edits hot-swap with a 64-sample equal-power crossfade</span>
          </div>

          <div class="dock-body">
            <div class="dock-pane active" data-pane="physics"></div>
            <div class="dock-pane" data-pane="compiler"></div>
            <div class="dock-pane" data-pane="inverse"></div>
            <div class="dock-pane" data-pane="json"></div>
          </div>
        </section>
      </div>
      <div class="studio-toast" data-studio-toast role="status" aria-live="polite"></div>
    `,this.audioBtn=t.querySelector("[data-audio-btn]"),this.tourBtn=t.querySelector("[data-tour-btn]"),this.brandLed=t.querySelector("[data-brand-led]"),this.metricWasm=t.querySelector("[data-m-wasm]"),this.metricCompile=t.querySelector("[data-m-compile]"),this.metricCpu=t.querySelector("[data-m-cpu]"),this.metricNewton=t.querySelector("[data-m-newton]"),this.metricScc=t.querySelector("[data-m-scc]"),this.metricSwaps=t.querySelector("[data-m-swaps]"),this.swapChip=t.querySelector("[data-swap-chip]"),this.teammateChip=t.querySelector("[data-teammate-chip]"),this.teammateLabel=t.querySelector("[data-teammate-label]"),this.teammateDot=t.querySelector("[data-teammate-dot]"),this.teammateBiasEl=t.querySelector("[data-teammate-bias]"),this.teammateAddBtn=t.querySelector("[data-teammate-add]"),this.teammateAddBtn.addEventListener("click",()=>void this.addAiTeammate()),this.toastEl=t.querySelector("[data-studio-toast]"),this.sceneBar=new As(t.querySelector("[data-scene-slot]"),this.sceneStore,{getPresets:()=>tt,getCurrentPatch:()=>this.currentPatch,onLoadScene:(d,f,g)=>{this.loadScene(d,f,d.name,g==="preset")},onSceneSaved:d=>{this.activeSceneId=d.id,this.activeSceneName=d.name,this.sceneDirty=!1,this.currentPatch.name=d.name,this.jsonView?.setPatch(this.currentPatch)},onCopyLink:()=>{this.copyShareLink()},onToast:d=>this.showToast(d)}),this.sceneBar.setActiveScene(this.activeSceneId,this.activeSceneName,this.sceneDirty),this.teammate=new ts({getPatch:()=>this.currentPatch,applyJamBias:(d,f)=>{this.host.setParam(d,"jamBias",f),this.patchbay.reflectParamValue(d,"jamBias",f,!1)},onStatus:d=>this.renderTeammate(d)}),this.audioBtn.addEventListener("click",async()=>{this.host.isAudioRunning?(await this.host.stopAudio(),this.showToast("Audio paused · scopes keep running on the local preview")):(await this.host.startAudio(),this.showToast("Audio live at 48 kHz")),this.syncAudioStatus()});const l=t.querySelector("[data-master-gain]"),h=t.querySelector("[data-gain-val]");mt(l),l.addEventListener("input",()=>{const d=parseFloat(l.value);h.textContent=`${Math.round(d*100)}%`,mt(l),this.host.setMasterGain(d)}),re(l,()=>{l.value="0.85",h.textContent="85%",mt(l),this.host.setMasterGain(.85),this.showToast("Master output reset to 85%")});const u=t.querySelector("[data-monitor-select]");u.value=i,u.addEventListener("change",()=>{const d=u.value;if(!Ot(d))return;this.host.setPlaybackTarget(d),ae(ee,d);const f=Bt().find(g=>g.id===d);f&&this.showToast(`Monitor · ${f.label} — ${f.hint}`)});const p=t.querySelector("[data-binaural-select]");p.value=a,p.addEventListener("change",()=>{const d=p.value;if(!ne(d))return;this.host.setBinauralMode(d),ae(se,d);const f=Lt.find(g=>g.id===d);f&&this.showToast(`3D · ${f.label} — ${f.hint}`)}),t.querySelector("[data-reset-btn]").addEventListener("click",()=>{this.host.resetPatchState(),this.showToast("All circuit states and capacitors zeroed")}),this.scopes=new Bs(t.querySelector("[data-scopes-slot]"),d=>this.patchbay.setSelectedProbeModule(d)),this.patchbay=new Me(t.querySelector("[data-patchbay-slot]"),{onGraphChange:(d,f)=>{this.recordHistory(),this.applyPatch(d,f),this.markSceneDirty()},onParamChange:(d,f,g)=>{this.recordHistory(`param:${d}:${f}`),this.host.setParam(d,f,g);const k=this.currentPatch.modules.find(m=>m.id===d);if(k){const m=O(k,f);k.params[f]=g,this.teammate.notifyParamEdit(d,f,m,g),this.physicsLab?.syncFromPatch(this.currentPatch,!1)}this.markSceneDirty()},onParamBatch:(d,f)=>{this.recordHistory();const g=this.currentPatch.modules.find(k=>k.id===d);for(const[k,m]of Object.entries(f))this.host.setParam(d,k,m),g&&(g.params[k]=m);this.markSceneDirty()},onCableGainChange:(d,f)=>{this.recordHistory(`cable:${d}`),this.host.setParam("cable",d,f);const g=this.currentPatch.cables.find(k=>k.id===d);g&&(this.teammate.notifyCableEdit(g.gain,f),g.gain=f),this.markSceneDirty()},onSelectProbeModule:d=>{this.scopes.setSelectedModule(d),this.patchbay.setSelectedProbeModule(d)},onLayoutChange:d=>{this.recordHistory("layout");for(const f of this.currentPatch.modules){const g=d[f.id];g&&(f.x=g.x,f.y=g.y)}this.jsonView?.setPatch(this.currentPatch),this.markSceneDirty()}}),this.ioPanel=new vs(this.host,{getPatch:()=>this.currentPatch,onParamChange:(d,f,g,k)=>{this.applyExternalParam(d,f,g,k)}}),t.querySelector("[data-io-slot]").appendChild(this.ioPanel.createStatusButton()),this.recorderView=new Is(t.querySelector("[data-rec-top-slot]"),t.querySelector("[data-recorder-slot]"),this.host,{getSceneName:()=>this.activeSceneName||this.currentPatch.name||"kirchhoff",onToast:(d,f)=>this.showToast(d,f),onSyncAudioStatus:()=>this.syncAudioStatus()});const b=t.querySelector("[data-dock-tab-list]");this.dockTabIndicator=new ce(b,"dock-tab-rail","underline"),t.querySelectorAll("[data-tab]").forEach(d=>{const f=d.dataset.tab;this.dockTabs.set(f,d),d.addEventListener("click",()=>this.switchTab(f))}),t.querySelectorAll("[data-pane]").forEach(d=>{this.dockPanes.set(d.dataset.pane,d)}),this.ensureDockTab("physics"),this.tourBtn.addEventListener("click",()=>void this.toggleTour()),window.addEventListener("keydown",d=>{const f=document.activeElement,g=(f?.tagName||"").toLowerCase(),k=g==="input"?(f.type||"text").toLowerCase():"",m=g==="textarea"||!!f?.isContentEditable||g==="input"&&!["range","checkbox","radio","button","file"].includes(k);if((d.metaKey||d.ctrlKey)&&!d.altKey){const L=d.key.toLowerCase();if(m||L!=="z"&&L!=="y")return;d.preventDefault(),L==="y"||d.shiftKey?this.redo():this.undo();return}d.altKey||m||g==="select"||(d.key==="t"||d.key==="T")&&(d.preventDefault(),this.toggleTour())}),window.addEventListener("hashchange",()=>{this.linkHashShown=!1,this.importSceneFromHash()}),this.host.onTelemetry(d=>this.handleTelemetry(d)),this.host.onSwap((d,f)=>{this.metricSwaps.textContent=String(f),this.swapChip.classList.remove("swap-flash"),this.swapChip.offsetWidth,this.swapChip.classList.add("swap-flash"),clearTimeout(this.swapFlashTimer),this.swapFlashTimer=window.setTimeout(()=>this.swapChip.classList.remove("swap-flash"),420),f>1&&this.showToast(`Hot-swapped ${(d.wasmByteLength/1024).toFixed(1)} KB .wasm in ${d.compileMs.toFixed(1)} ms · 64-sample crossfade`)}),window.addEventListener("pagehide",()=>{this.sceneDirty&&this.sceneStore.saveDraftImmediate(this.currentPatch,this.activeSceneId,!0)}),window.__KIRCHHOFF_DEBUG__={host:this.host,sceneStore:this.sceneStore,ioPanel:this.ioPanel,loadPreset:d=>this.loadPresetById(d),getScene:()=>({id:this.activeSceneId,name:this.activeSceneName,dirty:this.sceneDirty,modules:this.currentPatch.modules.length,cables:this.currentPatch.cables.length}),getPatch:()=>K(this.currentPatch),getTeammate:()=>this.teammate.getStatus(),getHistory:()=>({undo:this.history.undoDepth,redo:this.history.redoDepth}),undo:()=>this.undo(),redo:()=>this.redo(),copyLink:()=>this.copyShareLink(),encodeLink:()=>Gt(this.currentPatch),getOutputStages:()=>this.host.getOutputStageStatus(),setParamLive:(d,f,g)=>{this.host.setParam(d,f,g),this.patchbay.reflectParamValue(d,f,g,!1)},rampParam:(d,f,g,k=5)=>{this.host.rampParam(d,f,g,k),d!=="cable"&&this.patchbay.reflectParamValue(d,f,g,!1)},getParamLive:(d,f)=>this.host.getParam(d,f),startAudio:async()=>(await this.host.startAudio(),this.syncAudioStatus(),{audioRunning:this.host.isAudioRunning,workletReady:this.host.isWorkletReady}),startTour:()=>(this.ensureTour().then(d=>d.start()),{running:!0}),stopTour:()=>(this.tour?.stop(),{running:this.tourRunning}),setLabBank:d=>{this.pendingLabBank=d,this.switchTab("physics"),this.physicsLab&&(this.physicsLab.setBank(d),this.pendingLabBank=null)},recorder:{open:(d=!0)=>this.recorderView.setOpen(d),start:()=>this.recorderView.startRecording(),stop:()=>this.recorderView.stopRecording(),status:()=>this.recorderView.getStatus()}},requestAnimationFrame(()=>{this.dockTabIndicator.setActive(this.dockTabs.get("physics")??null,!0)}),this.applyPatch(this.currentPatch,"init").then(()=>this.importSceneFromHash())}resolveInitialScene(){const t=a=>{if(!a)return null;const o=this.sceneStore.listUserScenes().find(l=>l.id===a);if(o)return{patch:o.patch,name:o.name,builtIn:!1};const r=tt.find(l=>l.id===a);return r?{patch:r,name:r.name,builtIn:!0}:null},e=this.sceneStore.loadDraft();if(e&&e.dirty){const a=t(e.basePresetId);return{patch:K(e.patch),id:a?e.basePresetId:"",name:a?.name??e.patch.name,dirty:!0}}const s=this.sceneStore.getRememberedSceneId(),i=t(s);if(i&&s)return{patch:i.builtIn?ct(i.patch):K(i.patch),id:s,name:i.name,dirty:!1};const n=tt.find(a=>a.id===Os)??tt[0];return{patch:ct(n),id:n.id,name:n.name,dirty:!1}}async loadScene(t,e,s,i){this.recordHistory(),this.dropLinkHash(),this.activeSceneId=e,this.activeSceneName=s,this.sceneDirty=!1,this.sceneBar.setActiveScene(e,s,!1),this.teammate.reset();const n=i?ct(t):K(t);await this.applyPatch(n,i?`preset:${e}`:`scene:${e}`),this.sceneStore.saveDraftImmediate(this.currentPatch,e,!1)}async loadPresetById(t){const e=tt.find(s=>s.id===t);e&&await this.loadScene(e,e.id,e.name,!0)}markSceneDirty(){this.dropLinkHash(),this.sceneDirty||(this.sceneDirty=!0,this.sceneBar.setDirty(!0)),this.sceneStore.scheduleDraftSave(this.currentPatch,this.activeSceneId,!0)}applyExternalParam(t,e,s,i){const n=this.currentPatch.modules.find(o=>o.id===t);if(!n)return;const a=i==="midi-cc"||i==="io-panel";if(this.host.setParam(t,e,s),this.patchbay.reflectParamValue(t,e,s,a),a){this.recordHistory(`param:${t}:${e}`);const o=O(n,e);n.params[e]=s,this.teammate.notifyParamEdit(t,e,o,s),this.markSceneDirty()}}renderTeammate(t){const e=t.neuralCount>0,s=e?t.jamBias:0;this.teammateJam=s,this.teammateChip.classList.toggle("absent",!e),this.teammateChip.classList.toggle("active",e&&t.active),this.teammateLabel.textContent=e?t.modeLabel:"No AI node here",this.teammateAddBtn.disabled=e,this.teammateBiasEl.textContent=e?`${s>.004?"+":s<-.004?"−":" "}${Math.abs(s).toFixed(2)}`:"—",this.pushAiLevels()}pushAiLevels(){const t=Math.abs(this.teammateJam),e=t>.02;for(const s of this.aiTaps){const i=Math.round(Math.min(1,Math.max(t,s.lastAdapt*Fs))*20)/20;(i!==s.lastLevel||e!==s.lastTouching)&&(s.lastLevel=i,s.lastTouching=e,this.patchbay.setAiActivity(s.moduleId,i,e))}}trackAiActivity(t){if(this.aiTaps.length===0||t.patchId!==this.currentPatch.id)return;let e=!1;for(const s of this.aiTaps){if(s.stepIndex>=t.probeCount||s.adaptIndex>=t.probeCount)continue;const i=t.probes[s.stepIndex];i!==s.lastStep&&(s.lastStep===s.lastStep&&(e=!0),s.lastStep=i),s.lastAdapt=t.probes[s.adaptIndex]}this.pushAiLevels(),e&&this.pulseTeammateLed()}pulseTeammateLed(){if(!le()){if(!this.teammatePulse){this.teammatePulse=this.teammateDot.animate([{transform:"scale(1.75)",backgroundColor:"#f1dc93",boxShadow:"0 0 9px 2px rgba(232, 204, 116, 0.6)"},{transform:"scale(1)"}],{duration:260,easing:"cubic-bezier(0.22, 1, 0.36, 1)"});return}this.teammatePulse.cancel(),this.teammatePulse.play()}}historyState(){return{patch:this.currentPatch,sceneId:this.activeSceneId,sceneName:this.activeSceneName,dirty:this.sceneDirty}}recordHistory(t=""){this.historyBusy||this.history.record(this.historyState(),t)}undo(){return this.stepHistory(-1)}redo(){return this.stepHistory(1)}async stepHistory(t){if(this.historyBusy)return!1;const e=this.historyState(),s=t<0?this.history.undo(e):this.history.redo(e);if(!s)return!1;this.historyBusy=!0;try{await this.restoreHistoryState(s)}finally{this.historyBusy=!1}return!0}async restoreHistoryState(t){const e=this.currentPatch;this.activeSceneId=t.sceneId,this.activeSceneName=t.sceneName,this.sceneDirty=t.dirty,this.sceneBar.setActiveScene(t.sceneId,t.sceneName,t.dirty),this.dropLinkHash();const s=this.host.lastCompiled;if(s&&e.id===t.patch.id&&De(e,t.patch)){for(let i=0;i<t.patch.modules.length;i++){const n=t.patch.modules[i],a=e.modules[i];for(const o of V[n.kind].params){const r=O(n,o.id);r!==O(a,o.id)&&this.host.setParam(n.id,o.id,r)}}for(let i=0;i<t.patch.cables.length;i++){const n=t.patch.cables[i];n.gain!==e.cables[i].gain&&this.host.setParam("cable",n.id,n.gain)}this.currentPatch=K(t.patch),this.patchbay.setPatch(this.currentPatch,s,this.scopes.getSelectedModule(),{fitToView:!1,animateFit:!1}),this.jsonView?.setPatch(this.currentPatch)}else await this.applyPatch(t.patch,"history");this.sceneStore.scheduleDraftSave(this.currentPatch,this.activeSceneId,this.sceneDirty)}dropLinkHash(){this.linkHashShown&&(_t(),this.linkHashShown=!1)}async copyShareLink(){const t=await Gt(this.currentPatch),e=Je(t);Ze(t),this.linkHashShown=!0;const s=(e.length/1024).toFixed(1);try{await navigator.clipboard.writeText(e),this.showToast(`Scene link copied · ${s} KB · also in the address bar`)}catch{this.showToast(`Scene link is in the address bar · ${s} KB (clipboard was not available)`)}}async importSceneFromHash(){if(this.linkHashShown||!ue(window.location.hash))return;const t=await Qe(window.location.hash);if(_t(),!t)return;if(!t.ok){this.showToast(`Scene link not loaded: ${t.error}`);return}const e=t.patch.name||"Linked scene";this.recordHistory(),this.activeSceneId="",this.activeSceneName=e,this.sceneDirty=!1,this.sceneBar.setActiveScene("",e,!1),this.teammate.reset(),await this.applyPatch({...t.patch,name:e},"scene:link"),this.markSceneDirty(),this.showToast(`Opened linked scene: ${e}`)}loadLabsModule(){return this.labsModulePromise||(this.labsModulePromise=it(()=>import("./labs-cs5JRE3v.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),this.labsModulePromise}loadInverseModules(){return this.inverseModulePromise||(this.inverseModulePromise=Promise.all([it(()=>import("./inverseDeck-DAGJmhdy.js"),__vite__mapDeps([5,6,4,2,1,3]),import.meta.url),it(()=>import("./features-B0RuKLvA.js"),__vite__mapDeps([6,4,2,1,3]),import.meta.url)])),this.inverseModulePromise}ensureDockTab(t){const e=this.dockTabPromises.get(t);if(e)return e;const s=this.dockPanes.get(t);if(!s)return Promise.resolve();s.hasChildNodes()||(s.innerHTML='<div class="dock-loading mono">Loading workbench module…</div>');const i=(async()=>{if(t==="physics"){const{PhysicsLabView:n}=await this.loadLabsModule();if(this.physicsLab)return;const a=new n(s);this.physicsLab=a,a.setTabVisible(this.activeDockTab==="physics"),this.latestCompiled&&a.setCompiled(this.latestCompiled),a.syncFromPatch(this.currentPatch,this.pendingPhysicsAutoSelect),this.pendingPhysicsAutoSelect=!1,this.pendingLabBank&&(a.setBank(this.pendingLabBank),this.pendingLabBank=null)}else if(t==="compiler"){const{CompilerInspectorView:n}=await this.loadLabsModule();if(this.compilerView)return;const a=new n(s);this.compilerView=a,this.latestCompiled&&a.setCompiled(this.latestCompiled)}else if(t==="json"){const{PatchJsonView:n}=await this.loadLabsModule();if(this.jsonView)return;const a=new n(s,o=>{this.recordHistory(),this.applyPatch(o,"json-edit"),this.markSceneDirty(),this.showToast("Hot-swapped the edited patch graph")});this.jsonView=a,a.setPatch(this.currentPatch)}else if(t==="inverse"){const[{InverseDeckView:n},{INVERSE_CLIP_SAMPLES:a}]=await this.loadInverseModules();if(this.inverseDeck)return;const o=new n(s,(r,l)=>{const h=`Discovered · ${l}`;this.recordHistory(),this.activeSceneId="",this.activeSceneName=h,this.sceneDirty=!1,this.sceneBar.setActiveScene("",h,!1),this.teammate.reset(),this.applyPatch({...ct(r),name:h},`inverse:${l}`),this.markSceneDirty(),this.showToast(`Loaded discovered circuit: ${l}`)},()=>{const r=this.host.renderCurrentPatchOffline(a);return r?r.left:null});this.inverseDeck=o,o.setTabActive(this.activeDockTab==="inverse")}})().catch(n=>{this.dockTabPromises.delete(t),s.innerHTML=`<div class="dock-loading mono">Failed to load workbench module: ${n.message}</div>`});return this.dockTabPromises.set(t,i),i}switchTab(t){this.activeDockTab=t,this.dockTabs.forEach((e,s)=>{const i=s===t;e.classList.toggle("active",i),e.setAttribute("aria-selected",i?"true":"false")}),this.dockPanes.forEach((e,s)=>{const i=s===t;e.classList.toggle("active",i)}),this.dockTabIndicator.setActive(this.dockTabs.get(t)??null),this.inverseDeck?.setTabActive(t==="inverse"),this.physicsLab?.setTabVisible(t==="physics"),t==="physics"&&this.physicsLab&&this.physicsLab.refreshAll(),t==="json"&&this.jsonView&&this.jsonView.setPatch(this.currentPatch),this.ensureDockTab(t)}ensureTour(){return this.tourPromise||(this.tourPromise=it(async()=>{const{StageshowTour:t}=await import("./stageshow-CiHySH72.js");return{StageshowTour:t}},__vite__mapDeps([7,3,1,2]),import.meta.url).then(({StageshowTour:t})=>{const e=new t({loadPreset:async s=>{await this.loadPresetById(s)},switchTab:s=>{this.switchTab(s)},setActiveFlag:s=>{this.tourRunning=s,this.tourBtn.classList.toggle("active",s),this.tourBtn.textContent=s?"■ Stop tour":"✦ Live tour",s&&(clearTimeout(this.toastTimer),this.toastEl.classList.remove("visible"))}});return this.tour=e,e}).catch(t=>{throw this.tourPromise=null,t})),this.tourPromise}async toggleTour(){(await this.ensureTour()).toggle()}showToast(t,e=1800){this.tourRunning||(this.toastEl.textContent=t,this.toastEl.classList.add("visible"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.remove("visible")},e))}async addAiTeammate(){if(this.currentPatch.modules.some(i=>i.kind==="neural"))return;const t=Ge(this.currentPatch,this.patchbay.suggestCardSpot());this.recordHistory(),await this.applyPatch(t.patch,"add-ai"),this.markSceneDirty();const e=t.addedClockId?"its own 120 BPM clock":t.clockName,s=t.leftFree.length>0?` ${t.leftFree.join(" and ")} left free: those inputs are already sequenced.`:"";this.showToast(`AI teammate added as ${t.characterLabel}, clocked by ${e}, ${t.links.length} cables.${s}`,5200)}syncAudioStatus(){const t=this.host.isAudioRunning;this.brandLed.classList.toggle("live",t),this.audioBtn.classList.toggle("active",t),this.audioBtn.textContent=t?"● Audio live · 48 kHz":"▶ Start audio",this.audioBtn.title=t?"Pause the AudioWorklet engine":"Start the 48 kHz AudioWorklet engine"}async applyPatch(t,e){this.currentPatch=K(t),e==="json-edit"?this.currentPatch.name&&this.currentPatch.name!==this.activeSceneName&&(this.activeSceneName=this.currentPatch.name,this.sceneBar.setActiveScene(this.activeSceneId,this.activeSceneName,this.sceneDirty)):this.activeSceneId&&(this.currentPatch.name=this.activeSceneName);const s=e==="init"||e.startsWith("preset:")||e.startsWith("scene:")||e.startsWith("inverse:"),i=!s&&this.host.lastCompiled?.ir.patchId===this.currentPatch.id,n=await this.host.loadPatch(this.currentPatch,{keepState:i}),a=n.ir.stages.filter(h=>h.kind==="scc").length,o=n.ir.stages.reduce((h,u)=>h+(u.kind==="scc"?u.cutBindings.length:0),0);this.metricWasm.textContent=`${(n.wasmByteLength/1024).toFixed(1)} KB`,this.metricCompile.textContent=`${n.compileMs.toFixed(1)} ms`,this.metricScc.textContent=a>0?`${a} loop (${o} FVS)`:"0 (DAG)",this.metricScc.parentElement?.classList.toggle("scc",a>0);const r=s||e==="add-ai";this.scopes.resetProbeHistory(n.ir.probes,this.scopes.getSelectedModule());const l=this.scopes.getSelectedModule();this.patchbay.setPatch(this.currentPatch,n,l,{fitToView:r,animateFit:r&&e!=="init"}),this.latestCompiled=n,this.compilerView?.setCompiled(n),this.physicsLab?(this.physicsLab.setCompiled(n),this.physicsLab.syncFromPatch(this.currentPatch,s)):s&&(this.pendingPhysicsAutoSelect=!0),s&&e!=="init"?this.recorderView.notifyEvent(this.activeSceneName||this.currentPatch.name,"scene"):e!=="init"&&this.recorderView.notifyEvent("Swap","swap"),this.jsonView?.setPatch(this.currentPatch),this.ioPanel.notifyPatchChanged(),this.aiTaps=[];for(const h of this.currentPatch.modules){if(h.kind!=="neural")continue;const u=n.ir.probes.find(b=>b.moduleId===h.id&&b.probeId==="barStep"),p=n.ir.probes.find(b=>b.moduleId===h.id&&b.probeId==="adapt");u&&p&&this.aiTaps.push({moduleId:h.id,stepIndex:u.index,adaptIndex:p.index,lastStep:NaN,lastAdapt:0,lastLevel:0,lastTouching:!1})}this.renderTeammate(this.teammate.getStatus())}handleTelemetry(t){this.scopes.update(t),this.trackAiActivity(t);const e=performance.now();e-this.lastHudUpdate>90&&(this.lastHudUpdate=e,this.metricCpu.textContent=`${t.cpuUs.toFixed(0)} / ${t.cpuP99Us.toFixed(0)} µs`,this.metricNewton.textContent=`${t.maxNewtonIters} / ${t.avgNewtonIters.toFixed(1)}`,this.metricSwaps.textContent=String(t.swapCount),this.patchbay.updateTelemetry(t))}}const oe=document.getElementById("app");oe&&new Hs(oe);export{Ns as c,ye as f,Vs as h,Us as m};
