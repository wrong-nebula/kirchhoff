const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./labs-smPrg-DA.js","./compiler-core-CJAOg_gs.js","./dsp-circuits-Bh-KoKj1.js","./studio-patchbay-Cckckk0A.js","./presets-catalog-CyVabtAz.js","./inverseDeck-CKZb_AWM.js","./features-BkOsVByi.js","./stageshow-CiHySH72.js"])))=>i.map(i=>d[i]);
import{A as ut}from"./presets-catalog-CyVabtAz.js";import{g as W,M as J,c as He,b as Oe,i as Fe}from"./compiler-core-CJAOg_gs.js";import{N as $e,D as Wt,b as Se,S as we,p as Me,s as Tt,P as Ge}from"./studio-patchbay-Cckckk0A.js";import{aY as Mt,a$ as qe,aP as Ve,bj as _e,bm as Ue,b4 as zt,aQ as We,aR as ze}from"./dsp-circuits-Bh-KoKj1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Ke="modulepreload",je=function(c,t){return new URL(c,t).href},Kt={},xt=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){let n=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");i=n(e.map(h=>{if(h=je(h,s),h in Kt)return;Kt[h]=!0;const p=h.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const m=o[f];if(m.href===h&&(!p||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":Ke,p||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),p)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return i.then(n=>{for(const o of n||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};function Xe(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function Pt(c){return{patch:Xe(c.patch),sceneId:c.sceneId,sceneName:c.sceneName,dirty:c.dirty}}function Ye(c,t){if(c.modules.length!==t.modules.length||c.cables.length!==t.cables.length)return!1;for(let e=0;e<c.modules.length;e++)if(c.modules[e].id!==t.modules[e].id||c.modules[e].kind!==t.modules[e].kind)return!1;for(let e=0;e<c.cables.length;e++){const s=c.cables[e],i=t.cables[e];if(s.id!==i.id||s.fromModule!==i.fromModule||s.fromPort!==i.fromPort||s.toModule!==i.toModule||s.toPort!==i.toPort)return!1}return!0}class Qe{constructor(t=200,e=700){this.limit=t,this.coalesceMs=e}undoStack=[];redoStack=[];lastKey="";lastAt=0;get undoDepth(){return this.undoStack.length}get redoDepth(){return this.redoStack.length}record(t,e="",s=performance.now()){if(e&&e===this.lastKey&&s-this.lastAt<this.coalesceMs&&this.undoStack.length>0){this.lastAt=s;return}this.undoStack.push(Pt(t)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack.length=0,this.lastKey=e,this.lastAt=s}undo(t){const e=this.undoStack.pop();return e?(this.redoStack.push(Pt(t)),this.lastKey="",e):null}redo(t){const e=this.redoStack.pop();return e?(this.undoStack.push(Pt(t)),this.lastKey="",e):null}clear(){this.undoStack.length=0,this.redoStack.length=0,this.lastKey=""}}const Je=232,Ze={bpm:120,swing:0,width:0,run:1},ts=[{kind:"moog904a",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"ms20wdf",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"svf",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"poly4",port:"cutoffCV",gain:.4,what:"cutoff"},{kind:"plate2d",port:"nlCV",gain:.5,what:"tension"},{kind:"transducer",port:"blCV",gain:1.5,what:"force factor"},{kind:"vactrol",port:"cv",gain:.5,what:"level"},{kind:"vca",port:"cv",gain:.4,what:"level"},{kind:"wavefolder",port:"driveCV",gain:.6,what:"drive"}],es=[{kind:"wavefolder",port:"driveCV",gain:.9,what:"drive"},{kind:"osc",port:"shapeCV",gain:.4,what:"shape"},{kind:"binaural",port:"aiMod",gain:.75,what:"orbit"},{kind:"moog904a",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"ms20wdf",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"svf",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"poly4",port:"cutoffCV",gain:.45,what:"cutoff"},{kind:"poly4",port:"resCV",gain:.2,what:"resonance"},{kind:"plate2d",port:"nlCV",gain:.6,what:"tension"},{kind:"transducer",port:"blCV",gain:2,what:"force factor"},{kind:"reverb",port:"mixCV",gain:.25,what:"mix"},{kind:"moog904a",port:"resCV",gain:.2,what:"resonance"},{kind:"ms20wdf",port:"resCV",gain:.2,what:"peak"},{kind:"bbd",port:"fbCV",gain:.12,what:"feedback"}];function ot(c){return c.label||c.id}function jt(c){const t={};for(const e of J[c].params)t[e.id]=e.defaultValue;return t}function At(c,t){let e=c;for(let s=2;t.has(e);s++)e=`${c}${s}`;return t.add(e),e}function ss(c){const t=new Map;for(const i of c.cables){const a=t.get(i.toModule);a?a.push(i.fromModule):t.set(i.toModule,[i.fromModule])}const e=new Set,s=c.modules.filter(i=>i.kind==="output").map(i=>i.id);for(const i of s)e.add(i);for(;s.length>0;){const i=s.shift();for(const a of t.get(i)??[])e.has(a)||(e.add(a),s.push(a))}return e}function is(c,t){const e={...c,modules:c.modules.map(v=>({...v,params:{...v.params}})),cables:c.cables.map(v=>({...v}))},s=new Map(e.modules.map(v=>[v.id,v])),i=new Set(e.modules.map(v=>v.id)),a=new Set(e.cables.map(v=>v.id)),n=ss(e),o=new Set(e.cables.map(v=>`${v.toModule}:${v.toPort}`)),r=[],l=[];let h="",p="eoc",u=null;const b=new Map;for(const v of e.cables){if(v.toPort!=="clk"||!s.has(v.fromModule))continue;const x=`${v.fromModule}
${v.fromPort}`;b.set(x,(b.get(x)??0)+1)}let d=0;for(const[v,x]of b)x>d&&(d=x,[h,p]=v.split(`
`));if(!h){const v=e.modules.find(x=>x.kind==="clock");v&&(h=v.id,p="x16")}if(!h){let v=1/0;for(const x of e.modules){if(x.kind!=="dusg"||W(x,"cycle")<.5)continue;const I=W(x,"riseMs")+W(x,"fallMs");if(I<30||I>2e3)continue;const k=Math.abs(Math.log(I/125));k<v&&(v=k,h=x.id,p="eoc")}}let f=t.x;if(!h){u=At("aiClock",i),h=u,p="x16";const v={id:u,kind:"clock",label:"AI Clock · 120 BPM",x:t.x,y:t.y,params:{...jt("clock"),...Ze}};e.modules.push(v),s.set(v.id,v),f=t.x+Je}const m=At("aiTeammate",i),y=jt("neural");for(const v of $e)y[v]=Wt.params[v];y.brain=1;const g={id:m,kind:"neural",label:"AI Teammate",x:f,y:t.y,params:y};e.modules.push(g),s.set(m,g);const C=(v,x,I,k,S)=>{const M={id:At(`ai_${I===m?k:x}`,a),fromModule:v,fromPort:x,toModule:I,toPort:k,gain:S};e.cables.push(M),o.add(`${I}:${k}`)},w=ot(s.get(h));C(h,p,m,"clk",1),r.push(`CLK ← ${w}`);const L=e.modules.find(v=>v.kind==="output");if(L){let v=c.cables.find(x=>x.toModule===L.id&&x.toPort==="inL")??c.cables.find(x=>x.toModule===L.id);for(let x=0;v&&x<4;x++){const I=s.get(v.fromModule)?.kind;if(I!=="mastering"&&I!=="monitor"&&I!=="binaural")break;const k=v.fromModule;v=c.cables.find(S=>S.toModule===k&&(S.toPort==="inL"||S.toPort==="in"))}v&&s.has(v.fromModule)&&(C(v.fromModule,v.fromPort,m,"in",.85),r.push(`LISTEN ← ${ot(s.get(v.fromModule))}`))}const A=c.modules.find(v=>v.kind==="osc"&&n.has(v.id)&&W(v,"freq")>=20&&!o.has(`${v.id}:expFM`));if(A){const v=s.get(A.id);W(v,"expDepth")<.05&&(v.params.expDepth=1),C(m,"pitch",A.id,"expFM",1),r.push(`PITCH → ${ot(A)}`)}else l.push("PITCH");const R=c.modules.find(v=>v.kind==="dusg"&&n.has(v.id)&&v.id!==h&&W(v,"cycle")<.5&&!o.has(`${v.id}:trig`)),T=c.modules.find(v=>v.kind==="vactrol"&&n.has(v.id)&&!o.has(`${v.id}:cv`));R?(C(m,"gate",R.id,"trig",1),r.push(`GATE → ${ot(R)}`)):T?(C(m,"gate",T.id,"cv",1.25),r.push(`GATE → ${ot(T)}`)):l.push("GATE");const N=new Set,P=(v,x,I)=>{for(const k of I){const S=c.modules.find(M=>M.kind===k.kind&&n.has(M.id)&&!N.has(`${M.id}:${k.port}`)&&(k.kind!=="osc"||W(M,"freq")>=20));if(S){N.add(`${S.id}:${k.port}`),C(m,v,S.id,k.port,k.gain),r.push(`${x} → ${ot(S)} ${k.what}`);return}}l.push(x)};return P("accent","ACC",ts),P("mod","MOD",es),{patch:e,aiModuleId:m,addedClockId:u,characterLabel:Wt.label,clockName:w,links:r,leftFree:l}}const as=Math.SQRT1_2,vt=5,Rt=2049;function Xt(){return Mt.map(c=>({id:c.id,label:c.label,hint:c.hint}))}function Yt(c){return typeof c=="string"&&Mt.some(t=>t.id===c)}function Qt(c){return Mt.find(t=>t.id===c)??Mt[0]}function $(c,t,e,s){c.cancelScheduledValues(e),s<=0?c.setValueAtTime(t,e):c.setTargetAtTime(t,e,s)}function ns(){const c=new Float32Array(new ArrayBuffer(Rt*4));for(let t=0;t<Rt;t++){const e=t/(Rt-1)*2-1,s=Math.abs(e);c[t]=We*e*s+ze*s}return c}class os{input;output;ctx;dryGain;wetGain;hp;lowShelf;bell;highShelf;splitter;midSum;sideSum;sideInvertIn;sideHp;sideWidth;sideInvertOut;busL;busR;enhLp;enhShaper;enhHp;enhGain;xfLpL;xfLpR;xfSelfL;xfSelfR;xfCrossL;xfCrossR;merger;trim;currentTarget;amount=1;crossfeed=.5;listeners=new Set;disposed=!1;constructor(t,e="flat"){this.ctx=t,this.currentTarget=e;const s=()=>{const n=t.createGain();return n.channelCount=2,n.channelCountMode="explicit",n},i=(n=1)=>{const o=t.createGain();return o.channelCount=1,o.channelCountMode="explicit",o.gain.value=n,o},a=(n,o,r=as)=>{const l=t.createBiquadFilter();return l.type=n,l.frequency.value=o,l.Q.value=r,l};this.input=s(),this.output=s(),this.dryGain=t.createGain(),this.wetGain=t.createGain(),this.hp=a("highpass",vt),this.lowShelf=a("lowshelf",100),this.bell=a("peaking",1e3,1),this.highShelf=a("highshelf",8e3),this.splitter=t.createChannelSplitter(2),this.midSum=i(.5),this.sideSum=i(.5),this.sideInvertIn=i(-1),this.sideHp=a("highpass",vt),this.sideWidth=i(1),this.sideInvertOut=i(-1),this.busL=i(1),this.busR=i(1),this.enhLp=a("lowpass",_e),this.enhShaper=t.createWaveShaper(),this.enhShaper.curve=ns(),this.enhShaper.oversample="none",this.enhHp=a("highpass",Ue),this.enhGain=i(0),this.xfLpL=a("lowpass",zt,.5),this.xfLpR=a("lowpass",zt,.5),this.xfSelfL=i(0),this.xfSelfR=i(0),this.xfCrossL=i(0),this.xfCrossR=i(0),this.merger=t.createChannelMerger(2),this.trim=t.createGain(),this.input.connect(this.dryGain),this.dryGain.connect(this.output),this.input.connect(this.hp),this.hp.connect(this.lowShelf),this.lowShelf.connect(this.bell),this.bell.connect(this.highShelf),this.highShelf.connect(this.splitter),this.splitter.connect(this.midSum,0),this.splitter.connect(this.midSum,1),this.splitter.connect(this.sideSum,0),this.splitter.connect(this.sideInvertIn,1),this.sideInvertIn.connect(this.sideSum),this.sideSum.connect(this.sideHp),this.sideHp.connect(this.sideWidth),this.midSum.connect(this.busL),this.midSum.connect(this.busR),this.sideWidth.connect(this.busL),this.sideWidth.connect(this.sideInvertOut),this.sideInvertOut.connect(this.busR),this.midSum.connect(this.enhLp),this.enhLp.connect(this.enhShaper),this.enhShaper.connect(this.enhHp),this.enhHp.connect(this.enhGain),this.enhGain.connect(this.busL),this.enhGain.connect(this.busR),this.busL.connect(this.merger,0,0),this.busR.connect(this.merger,0,1),this.busL.connect(this.xfLpL),this.busR.connect(this.xfLpR),this.xfLpL.connect(this.xfSelfL),this.xfSelfL.connect(this.merger,0,0),this.xfLpR.connect(this.xfSelfR),this.xfSelfR.connect(this.merger,0,1),this.xfLpL.connect(this.xfCrossL),this.xfCrossL.connect(this.merger,0,1),this.xfLpR.connect(this.xfCrossR),this.xfCrossR.connect(this.merger,0,0),this.merger.connect(this.trim),this.trim.connect(this.wetGain),this.wetGain.connect(this.output),this.applyVoicing(0)}get target(){return this.currentTarget}get active(){return this.currentTarget!=="flat"&&this.amount>0}getStatus(){const t=Qt(this.currentTarget);return{target:t.id,label:t.label,hint:t.hint,active:this.active,amount:this.amount,crossfeed:this.crossfeed}}setTarget(t,e=.02){if(this.disposed)return;const s=this.currentTarget;this.currentTarget=t,this.applyVoicing(Math.max(0,e)),s!==t&&this.emitChange()}setAmount(t,e=.02){this.disposed||!Number.isFinite(t)||(this.amount=Math.max(0,Math.min(1,t)),this.applyVoicing(Math.max(0,e)),this.emitChange())}setCrossfeed(t,e=.02){this.disposed||!Number.isFinite(t)||(this.crossfeed=Math.max(0,Math.min(1,t)),this.applyVoicing(Math.max(0,e)),this.emitChange())}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){if(this.disposed)return;this.disposed=!0,this.listeners.clear();const t=[this.input,this.dryGain,this.wetGain,this.hp,this.lowShelf,this.bell,this.highShelf,this.splitter,this.midSum,this.sideSum,this.sideInvertIn,this.sideHp,this.sideWidth,this.sideInvertOut,this.busL,this.busR,this.enhLp,this.enhShaper,this.enhHp,this.enhGain,this.xfLpL,this.xfLpR,this.xfSelfL,this.xfSelfR,this.xfCrossL,this.xfCrossR,this.merger,this.trim,this.output];for(const e of t)try{e.disconnect()}catch{}}applyVoicing(t){const e=Qt(this.currentTarget),s=this.amount,i=this.ctx.currentTime,a=this.active?1:0;$(this.dryGain.gain,1-a,i,t),$(this.wetGain.gain,a,i,t),$(this.hp.frequency,e.hpHz>0?e.hpHz:vt,i,t),$(this.lowShelf.frequency,e.lsHz,i,t),$(this.lowShelf.gain,e.lsDb*s,i,t),$(this.bell.frequency,e.bellHz,i,t),$(this.bell.Q,e.bellQ,i,t),$(this.bell.gain,e.bellDb*s,i,t),$(this.highShelf.frequency,e.hsHz,i,t),$(this.highShelf.gain,e.hsDb*s,i,t),$(this.sideHp.frequency,e.monoHz>0&&s>0?e.monoHz:vt,i,t),$(this.sideWidth.gain,1+(e.width-1)*s,i,t),$(this.enhGain.gain,qe*e.enh*s,i,t);const n=Ve*this.crossfeed*e.xfeed*s,o=1/(1+n);$(this.xfSelfL.gain,-(1-o),i,t),$(this.xfSelfR.gain,-(1-o),i,t),$(this.xfCrossL.gain,o*n,i,t),$(this.xfCrossR.gain,o*n,i,t),$(this.trim.gain,Math.pow(10,e.trimDb*s/20),i,t)}emitChange(){const t=this.getStatus();for(const e of this.listeners)try{e(t)}catch{}}}const Nt="kirchhoff_user_scenes_v1",Dt="kirchhoff_draft_scene_v1",Bt="kirchhoff_scene",rs=3600*24*365;function kt(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function Jt(c,t,e=rs){if(!(typeof document>"u"))try{document.cookie=`${encodeURIComponent(c)}=${encodeURIComponent(t)}; Max-Age=${e}; Path=/; SameSite=Lax`}catch{}}function cs(c){if(typeof document>"u"||!document.cookie)return null;const t=`${encodeURIComponent(c)}=`,e=document.cookie.split(";");for(const s of e){const i=s.trim();if(i.startsWith(t))try{return decodeURIComponent(i.slice(t.length))}catch{return null}}return null}function Zt(c){try{return typeof localStorage<"u"?localStorage.getItem(c):null}catch{return null}}function Ht(c,t){try{return typeof localStorage>"u"?!1:(localStorage.setItem(c,t),!0)}catch{return!1}}function ls(c){try{typeof localStorage<"u"&&localStorage.removeItem(c)}catch{}}function qt(c){let t;try{t=JSON.parse(c)}catch(l){return{ok:!1,error:`Invalid JSON: ${l instanceof Error?l.message:String(l)}`}}if(!t||typeof t!="object")return{ok:!1,error:"Scene file must contain a JSON object."};const e="scene"in t&&t.scene&&typeof t.scene=="object"?t.scene:t;if(!Array.isArray(e.modules)||!Array.isArray(e.cables))return{ok:!1,error:'Scene JSON must include "modules" and "cables" arrays.'};const s=new Set(Object.keys(J)),i=new Set,a=[];for(const l of e.modules){if(!l||typeof l!="object")return{ok:!1,error:"Invalid module entry in scene JSON."};const h=l,p=typeof h.id=="string"&&h.id.trim()?h.id.trim():"",u=typeof h.kind=="string"?h.kind:"";if(!p||i.has(p))return{ok:!1,error:`Missing or duplicate module id "${p}".`};if(!s.has(u))return{ok:!1,error:`Unknown module kind "${u}" in module "${p}".`};i.add(p);const b={};if(h.params&&typeof h.params=="object")for(const[d,f]of Object.entries(h.params))typeof f=="number"&&Number.isFinite(f)&&(b[d]=f);a.push({id:p,kind:u,label:typeof h.label=="string"&&h.label.trim()?h.label.trim():p,x:typeof h.x=="number"&&Number.isFinite(h.x)?h.x:40,y:typeof h.y=="number"&&Number.isFinite(h.y)?h.y:40,params:b})}if(!a.some(l=>l.kind==="output"))return{ok:!1,error:'Scene must include an "output" module.'};const n=[];for(let l=0;l<e.cables.length;l++){const h=e.cables[l];if(!h||typeof h!="object")continue;const p=h,u=typeof p.fromModule=="string"?p.fromModule:"",b=typeof p.toModule=="string"?p.toModule:"",d=typeof p.fromPort=="string"?p.fromPort:"",f=typeof p.toPort=="string"?p.toPort:"";!i.has(u)||!i.has(b)||!d||!f||n.push({id:typeof p.id=="string"&&p.id.trim()?p.id.trim():`c${l+1}`,fromModule:u,fromPort:d,toModule:b,toPort:f,gain:typeof p.gain=="number"&&Number.isFinite(p.gain)?p.gain:1})}const o=typeof e.name=="string"&&e.name.trim()?e.name.trim():"Imported Scene";return{ok:!0,patch:{id:typeof e.id=="string"&&e.id.trim()?e.id.trim():`user-${Date.now().toString(36)}`,name:o,description:typeof e.description=="string"?e.description:"User scene",sampleRate:typeof e.sampleRate=="number"&&e.sampleRate>=22050?e.sampleRate:48e3,modules:a,cables:n}}}class hs{draftTimer=null;listUserScenes(){const t=Zt(Nt);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.filter(s=>!!(s&&typeof s.id=="string"&&s.patch&&Array.isArray(s.patch.modules))).sort((s,i)=>i.savedAt-s.savedAt):[]}catch{return[]}}saveUserScene(t,e,s){const i=this.listUserScenes(),a=(e??t.name??"Untitled Scene").trim()||"Untitled Scene",n=a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,32),o=s||`user-${n||"scene"}-${Date.now().toString(36).slice(-4)}`,r=kt(t);r.id=o,r.name=a;const l={id:o,name:a,savedAt:Date.now(),patch:r},h=i.filter(p=>p.id!==o);return h.unshift(l),Ht(Nt,JSON.stringify(h.slice(0,64))),this.rememberActiveSceneId(o),this.saveDraftImmediate(r,o,!1),l}deleteUserScene(t){const e=this.listUserScenes().filter(s=>s.id!==t);Ht(Nt,JSON.stringify(e)),this.getRememberedSceneId()===t&&Jt(Bt,"",0)}rememberActiveSceneId(t){Jt(Bt,t)}getRememberedSceneId(){const t=cs(Bt);return t||(this.loadDraft()?.basePresetId??null)}scheduleDraftSave(t,e,s){this.draftTimer!==null&&clearTimeout(this.draftTimer);const i=kt(t);this.draftTimer=setTimeout(()=>{this.draftTimer=null,this.saveDraftImmediate(i,e,s)},320)}saveDraftImmediate(t,e,s){const i={basePresetId:e,savedAt:Date.now(),dirty:s,patch:kt(t)};Ht(Dt,JSON.stringify(i)),e&&this.rememberActiveSceneId(e)}loadDraft(){const t=Zt(Dt);if(!t)return null;try{const e=JSON.parse(t);if(!e||!e.patch||!Array.isArray(e.patch.modules))return null;const s=qt(JSON.stringify(e.patch));return s.ok?{basePresetId:typeof e.basePresetId=="string"?e.basePresetId:"",savedAt:typeof e.savedAt=="number"?e.savedAt:Date.now(),dirty:!!e.dirty,patch:s.patch}:null}catch{return null}}clearDraft(){this.draftTimer!==null&&(clearTimeout(this.draftTimer),this.draftTimer=null),ls(Dt)}exportSceneToFile(t,e){const s={format:"kirchhoff-scene",version:1,exportedAt:new Date().toISOString(),scene:kt(t)},a=`${(e??t.name??t.id??"scene").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"kirchhoff-scene"}.kirchhoff.json`,n=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),o=URL.createObjectURL(n),r=document.createElement("a");return r.href=o,r.download=a,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3),a}async importSceneFromFile(t){try{const e=await t.text();return qt(e)}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}}const Ct="scene",ds=1;function te(c){let t="";for(let s=0;s<c.length;s+=32768)t+=String.fromCharCode(...c.subarray(s,s+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ps(c){const t=c.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t+"=".repeat((4-t.length%4)%4)),s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}async function Ce(c,t){const e=new Blob([c]).stream(),s=await new Response(e.pipeThrough(t)).arrayBuffer();return new Uint8Array(s)}function Le(c){const t=c.startsWith("#")?c.slice(1):c;for(const e of t.split("&"))if(e.startsWith(`${Ct}=`))return e.slice(Ct.length+1);return null}function Ie(c){return Le(c)!==null}async function ee(c){const t=new TextEncoder().encode(JSON.stringify({v:ds,scene:c}));if(typeof CompressionStream<"u")try{const e=new CompressionStream("deflate-raw");return`${Ct}=z.${te(await Ce(t,e))}`}catch{}return`${Ct}=j.${te(t)}`}async function us(c){const t=Le(c);if(t===null)return null;const e=t.indexOf("."),s=e>0?t.slice(0,e):"",i=e>0?t.slice(e+1):"";try{let a=ps(i);if(s==="z"){if(typeof DecompressionStream>"u")return{ok:!1,error:"This browser cannot open compressed scene links."};const n=new DecompressionStream("deflate-raw");a=await Ce(a,n)}else if(s!=="j")return{ok:!1,error:"Unrecognised scene link format."};return qt(new TextDecoder().decode(a))}catch{return{ok:!1,error:"the link is damaged or incomplete."}}}function ms(c){const t=new URL(window.location.href);return t.hash=c,t.toString()}function fs(c){window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${c}`)}function se(){Ie(window.location.hash)&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`)}class gs{jamBias=0;lastTweakMs=0;timer=null;getPatch;applyJamBias;onStatus;constructor(t){this.getPatch=t.getPatch,this.applyJamBias=t.applyJamBias,this.onStatus=t.onStatus}notifyParamEdit(t,e,s,i){if(e==="jamBias"||e==="teammate")return;const n=this.getPatch().modules.find(p=>p.id===t);if(!n)return;const r=J[n.kind]?.params.find(p=>p.id===e),l=r?Math.max(1e-6,r.max-r.min):1;let h=(i-s)/l;if(r?.scale==="log"&&r.min>0&&s>0&&i>0){const p=Math.log(r.max/r.min);p>1e-6&&(h=Math.log(i/s)/p)}Math.abs(h)<1e-4||(r?.scale==="discrete"&&(h=h>0?.25:-.18),this.injectImpulse(h*1.45))}notifyCableEdit(t,e){const s=(e-t)*.5;Math.abs(s)<.001||this.injectImpulse(s)}reset(){this.jamBias=0,this.stopTimer(),this.broadcast()}getStatus(){const t=this.getPatch().modules.filter(i=>i.kind==="neural").length,e=Math.abs(this.jamBias);let s="Holding pocket";return e>.55?s=this.jamBias>0?"Counter-groove":"Breakdown space":e>.14&&(s=this.jamBias>0?"Building with you":"Pulling back"),{active:t>0&&e>.04,jamBias:this.jamBias,modeLabel:s,neuralCount:t}}dispose(){this.stopTimer()}injectImpulse(t){if(!this.getPatch().modules.some(a=>a.kind==="neural"))return;const i=Math.max(-.45,Math.min(.45,t));this.jamBias=Math.max(-1,Math.min(1,this.jamBias*.88+i)),this.lastTweakMs=performance.now(),this.pushToNeuralNodes(),this.ensureTimer()}ensureTimer(){this.timer===null&&(this.timer=setInterval(()=>{if(performance.now()-this.lastTweakMs>700){if(this.jamBias*=.9,Math.abs(this.jamBias)<.01){this.jamBias=0,this.pushToNeuralNodes(),this.stopTimer();return}this.pushToNeuralNodes()}},120))}stopTimer(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}pushToNeuralNodes(){const t=this.getPatch();for(const e of t.modules)e.kind==="neural"&&this.applyJamBias(e.id,this.jamBias);this.broadcast()}broadcast(){this.onStatus&&this.onStatus(this.getStatus())}}const Ot={off:{dryGain:1,wetGain:0,directGain:.84,presenceGainDb:0,presenceFreqHz:2200,crossfeedItdSec:28e-5,headShadowHz:700,headShadowQ:.65,crossfeedGain:.32,roomDelayLSec:.0049,roomDelayRSec:.0064,roomLpfHz:3e3,roomGain:.06,sideLiftGain:0},headphones:{dryGain:0,wetGain:1,directGain:.84,presenceGainDb:1.2,presenceFreqHz:2200,crossfeedItdSec:28e-5,headShadowHz:700,headShadowQ:.65,crossfeedGain:.32,roomDelayLSec:.0049,roomDelayRSec:.0064,roomLpfHz:3e3,roomGain:.06,sideLiftGain:0},"wide-3d":{dryGain:0,wetGain:1,directGain:.9,presenceGainDb:1.8,presenceFreqHz:2400,crossfeedItdSec:38e-5,headShadowHz:950,headShadowQ:.7,crossfeedGain:.24,roomDelayLSec:.0056,roomDelayRSec:.0074,roomLpfHz:2600,roomGain:.115,sideLiftGain:-.16}};function B(c,t,e,s){c.cancelScheduledValues(e),s<=0?c.setValueAtTime(t,e):c.setTargetAtTime(t,e,s)}class bs{input;output;ctx;dryGain;wetGain;splitter;merger;presenceL;presenceR;directGainL;directGainR;xDelayL;xDelayR;xLpfL;xLpfR;xGainL;xGainR;roomDelayL;roomDelayR;roomLpfL;roomLpfR;roomGainL;roomGainR;sideHpL;sideHpR;sideGainL;sideGainR;currentMode;activeModeMemory;listeners=new Set;disposed=!1;constructor(t,e="off"){this.ctx=t,this.currentMode=e,this.activeModeMemory=e==="off"?"headphones":e,this.input=t.createGain(),this.input.channelCount=2,this.input.channelCountMode="explicit",this.output=t.createGain(),this.output.channelCount=2,this.output.channelCountMode="explicit",this.dryGain=t.createGain(),this.wetGain=t.createGain(),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.presenceL=t.createBiquadFilter(),this.presenceL.type="highshelf",this.presenceR=t.createBiquadFilter(),this.presenceR.type="highshelf",this.directGainL=t.createGain(),this.directGainR=t.createGain(),this.xDelayL=t.createDelay(.05),this.xDelayR=t.createDelay(.05),this.xLpfL=t.createBiquadFilter(),this.xLpfL.type="lowpass",this.xLpfR=t.createBiquadFilter(),this.xLpfR.type="lowpass",this.xGainL=t.createGain(),this.xGainR=t.createGain(),this.roomDelayL=t.createDelay(.05),this.roomDelayR=t.createDelay(.05),this.roomLpfL=t.createBiquadFilter(),this.roomLpfL.type="lowpass",this.roomLpfL.Q.value=.65,this.roomLpfR=t.createBiquadFilter(),this.roomLpfR.type="lowpass",this.roomLpfR.Q.value=.65,this.roomGainL=t.createGain(),this.roomGainR=t.createGain(),this.sideHpL=t.createBiquadFilter(),this.sideHpL.type="highpass",this.sideHpL.frequency.value=380,this.sideHpL.Q.value=.707,this.sideHpR=t.createBiquadFilter(),this.sideHpR.type="highpass",this.sideHpR.frequency.value=380,this.sideHpR.Q.value=.707,this.sideGainL=t.createGain(),this.sideGainR=t.createGain(),this.input.connect(this.dryGain),this.dryGain.connect(this.output),this.input.connect(this.splitter),this.splitter.connect(this.presenceL,0),this.presenceL.connect(this.directGainL),this.directGainL.connect(this.merger,0,0),this.splitter.connect(this.presenceR,1),this.presenceR.connect(this.directGainR),this.directGainR.connect(this.merger,0,1),this.splitter.connect(this.xDelayL,0),this.xDelayL.connect(this.xLpfL),this.xLpfL.connect(this.xGainL),this.xGainL.connect(this.merger,0,1),this.splitter.connect(this.xDelayR,1),this.xDelayR.connect(this.xLpfR),this.xLpfR.connect(this.xGainR),this.xGainR.connect(this.merger,0,0),this.splitter.connect(this.roomDelayL,0),this.roomDelayL.connect(this.roomLpfL),this.roomLpfL.connect(this.roomGainL),this.roomGainL.connect(this.merger,0,1),this.splitter.connect(this.roomDelayR,1),this.roomDelayR.connect(this.roomLpfR),this.roomLpfR.connect(this.roomGainR),this.roomGainR.connect(this.merger,0,0),this.splitter.connect(this.sideHpL,0),this.sideHpL.connect(this.sideGainL),this.sideGainL.connect(this.merger,0,1),this.splitter.connect(this.sideHpR,1),this.sideHpR.connect(this.sideGainR),this.sideGainR.connect(this.merger,0,0),this.merger.connect(this.wetGain),this.wetGain.connect(this.output),this.applyProfile(Ot[e],0)}get enabled(){return this.currentMode!=="off"}get mode(){return this.currentMode}get lastActiveMode(){return this.activeModeMemory}getStatus(){const t=Ot[this.currentMode],e=t.roomGain>1e-6?20*Math.log10(t.roomGain):-96;return{enabled:this.currentMode!=="off",mode:this.currentMode,lastActiveMode:this.activeModeMemory,crossfeedItdMs:this.currentMode==="off"?0:t.crossfeedItdSec*1e3,headShadowHz:this.currentMode==="off"?0:t.headShadowHz,crossfeedMix:this.currentMode==="off"?0:t.crossfeedGain,roomDepthDb:this.currentMode==="off"?-96:Math.round(e*10)/10}}setEnabled(t,e=.015){this.disposed||(t?this.setMode(this.activeModeMemory,e):this.setMode("off",e))}setMode(t,e=.015){if(this.disposed)return;const s=this.currentMode;this.currentMode=t,t!=="off"&&(this.activeModeMemory=t),this.applyProfile(Ot[t],Math.max(0,e)),s!==t&&this.emitChange()}cycleMode(t=.015){const e=this.currentMode==="off"?"headphones":this.currentMode==="headphones"?"wide-3d":"off";return this.setMode(e,t),e}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){if(this.disposed)return;this.disposed=!0,this.listeners.clear();const t=[this.input,this.dryGain,this.wetGain,this.splitter,this.merger,this.presenceL,this.presenceR,this.directGainL,this.directGainR,this.xDelayL,this.xDelayR,this.xLpfL,this.xLpfR,this.xGainL,this.xGainR,this.roomDelayL,this.roomDelayR,this.roomLpfL,this.roomLpfR,this.roomGainL,this.roomGainR,this.sideHpL,this.sideHpR,this.sideGainL,this.sideGainR,this.output];for(const e of t)try{e.disconnect()}catch{}}applyProfile(t,e){const s=this.ctx.currentTime;B(this.dryGain.gain,t.dryGain,s,e),B(this.wetGain.gain,t.wetGain,s,e),B(this.directGainL.gain,t.directGain,s,e),B(this.directGainR.gain,t.directGain,s,e),B(this.presenceL.frequency,t.presenceFreqHz,s,e),B(this.presenceR.frequency,t.presenceFreqHz,s,e),B(this.presenceL.gain,t.presenceGainDb,s,e),B(this.presenceR.gain,t.presenceGainDb,s,e),B(this.xDelayL.delayTime,t.crossfeedItdSec,s,e),B(this.xDelayR.delayTime,t.crossfeedItdSec,s,e),B(this.xLpfL.frequency,t.headShadowHz,s,e),B(this.xLpfR.frequency,t.headShadowHz,s,e),B(this.xLpfL.Q,t.headShadowQ,s,e),B(this.xLpfR.Q,t.headShadowQ,s,e),B(this.xGainL.gain,t.crossfeedGain,s,e),B(this.xGainR.gain,t.crossfeedGain,s,e),B(this.roomDelayL.delayTime,t.roomDelayLSec,s,e),B(this.roomDelayR.delayTime,t.roomDelayRSec,s,e),B(this.roomLpfL.frequency,t.roomLpfHz,s,e),B(this.roomLpfR.frequency,t.roomLpfHz,s,e),B(this.roomGainL.gain,t.roomGain,s,e),B(this.roomGainR.gain,t.roomGain,s,e),B(this.sideGainL.gain,t.sideLiftGain,s,e),B(this.sideGainR.gain,t.sideLiftGain,s,e)}emitChange(){const t=this.getStatus();for(const e of this.listeners)try{e(t)}catch{}}}const z=64,j=4096,rt=256,_t=64,ft=128,ct=64,Ee=new Float64Array(z),Ut=new Float64Array(z);for(let c=0;c<z;c++){const t=.5*Math.PI*(c+1)/(z+1);Ee[c]=Math.cos(t),Ut[c]=Math.sin(t)}const Te=new Float64Array(z);for(let c=0;c<z;c++){const t=Ut[c];Te[c]=t*t}const Pe=typeof performance<"u"&&typeof performance.now=="function",ie=Pe?()=>performance.now():()=>Date.now();class ae{active=!1;patchId="";exports=null;header=null;params=null;probes=null;newtonIters=null;outL=null;outR=null;paramCount=0;probeCount=0;sampleRate=48e3;carryMap=null;carryIndex=null;bind(t,e,s,i,a,n=null){const o=t.exports,r=o.memory.buffer,l=o.get_header_offset(),h=o.get_params_offset(),p=o.get_probes_offset(),u=o.get_newton_iters_offset(),b=o.get_out_l_offset(),d=o.get_out_r_offset(),f=s.length;if(this.exports=o,this.header=new Float64Array(r,l,8),this.params=new Float64Array(r,h,Math.max(1,f)),this.probes=new Float64Array(r,p,Math.max(1,i)),this.newtonIters=new Int32Array(r,u,ft),this.outL=new Float64Array(r,b,ft),this.outR=new Float64Array(r,d,ft),this.paramCount=f,this.probeCount=Math.min(i,_t),this.sampleRate=e,this.patchId=a,this.carryMap=n,this.carryIndex=null,n){const m=new Map;for(let y=0;y<n.keys.length;y++)m.set(n.keys[y],y);this.carryIndex=m}for(let m=0;m<f;m++)this.params[m]=s[m];o.init(e),this.active=!0}reset(){this.exports&&this.exports.init(this.sampleRate)}}function ys(c,t){const e=c.carryMap,s=c.carryIndex,i=t.carryMap;if(!e||!s||!i||!c.exports||!t.exports)return 0;const a=new Float64Array(c.exports.memory.buffer),n=new Float64Array(t.exports.memory.buffer);let o=0;for(let r=0;r<i.keys.length;r++){const l=s.get(i.keys[r]);if(l===void 0)continue;const h=i.f64Counts[r];if(e.f64Counts[l]!==h)continue;const p=e.f64Offsets[l],u=i.f64Offsets[r];if(!(p<0||u<0||p+h>a.length||u+h>n.length)){for(let b=0;b<h;b++)n[u+b]=a[p+b];o++}}return o}class xs{slotA=new ae;slotB=new ae;activeIndex=-1;prevIndex=-1;crossfadePos=z;crossfadeCarried=!1;lastCarriedRegions=0;masterGainTarget=.85;masterGainSmooth=.85;rampIndex=new Int32Array(ct);rampFrom=new Float64Array(ct);rampTo=new Float64Array(ct);rampBlocks=new Int32Array(ct);rampDone=new Int32Array(ct);rampCount=0;scopeL=new Float32Array(j);scopeR=new Float32Array(j);scopeWriteIdx=0;latestProbes=new Float64Array(_t);latestProbeCount=0;cpuUsRing=new Float64Array(rt);cpuWriteIdx=0;cpuSampleCount=0;coarseAccumUs=0;coarseBlocks=0;lastBlockCpuUs=0;lastMaxNewtonIters=0;lastAvgNewtonIters=0;lastMaxSccResidual=0;swapCount=0;nanGuardHits=0;blocksProcessed=0;cpuSortScratch=new Float64Array(rt);getSlot(t){return t===0?this.slotA:this.slotB}get activePatchId(){return this.activeIndex>=0?this.getSlot(this.activeIndex).patchId:""}get isCrossfading(){return this.crossfadePos<z}installInstance(t,e,s,i,a,n={}){const o=n.carryMap??null;if(this.activeIndex<0){this.slotA.bind(t,e,s,i,a,o),this.activeIndex=0,this.prevIndex=-1,this.crossfadePos=z,this.crossfadeCarried=!1,this.lastCarriedRegions=0,this.latestProbeCount=this.slotA.probeCount,this.swapCount++;return}this.prevIndex>=0&&this.prevIndex!==this.activeIndex&&(this.getSlot(this.prevIndex).active=!1);const r=1-this.activeIndex,l=this.getSlot(r);l.bind(t,e,s,i,a,o),this.lastCarriedRegions=n.keepState?ys(this.getSlot(this.activeIndex),l):0,this.crossfadeCarried=this.lastCarriedRegions>0,this.prevIndex=this.activeIndex,this.activeIndex=r,this.crossfadePos=0,this.latestProbeCount=l.probeCount,this.swapCount++}setParam(t,e){if(this.activeIndex<0)return;const s=this.getSlot(this.activeIndex);s.exports&&t>=0&&t<s.paramCount&&s.exports.set_param(t,e)}rampParam(t,e,s,i){if(!Number.isFinite(e)||!Number.isFinite(s))return;const a=i<1?1:i>64?64:Math.round(i);let n=-1;for(let o=0;o<this.rampCount;o++)if(this.rampIndex[o]===t){n=o;break}if(n<0){if(this.rampCount>=ct){this.setParam(t,s);return}n=this.rampCount++}this.rampIndex[n]=t,this.rampFrom[n]=e,this.rampTo[n]=s,this.rampBlocks[n]=a,this.rampDone[n]=0}advanceRamps(){let t=0;for(;t<this.rampCount;){const e=this.rampDone[t]+1,s=this.rampBlocks[t],i=this.rampTo[t],a=e>=s?i:this.rampFrom[t]+(i-this.rampFrom[t])*e/s;if(this.setParam(this.rampIndex[t],a),e>=s){const n=--this.rampCount;this.rampIndex[t]=this.rampIndex[n],this.rampFrom[t]=this.rampFrom[n],this.rampTo[t]=this.rampTo[n],this.rampBlocks[t]=this.rampBlocks[n],this.rampDone[t]=this.rampDone[n]}else this.rampDone[t]=e,t++}}setParamsBatch(t){if(this.activeIndex<0)return;const e=this.getSlot(this.activeIndex);if(!e.exports)return;const s=Math.min(t.length,e.paramCount);for(let i=0;i<s;i++)e.exports.set_param(i,t[i])}setMasterGain(t){Number.isFinite(t)&&(this.masterGainTarget=t<0?0:t>2?2:t)}resetActive(){this.activeIndex>=0&&this.getSlot(this.activeIndex).reset()}process(t,e,s=128){const i=s>ft?ft:s;if(this.activeIndex<0){for(let w=0;w<i;w++)t[w]=0,e[w]=0;return}this.rampCount>0&&this.advanceRamps();const a=ie(),n=this.getSlot(this.activeIndex),o=n.exports,r=n.outL,l=n.outR;if(!o||!r||!l){for(let w=0;w<i;w++)t[w]=0,e[w]=0;return}let h=this.masterGainSmooth;const p=this.masterGainTarget;let u=this.scopeWriteIdx;const b=this.scopeL,d=this.scopeR;if(this.crossfadePos<z&&this.prevIndex>=0){const w=this.getSlot(this.prevIndex),L=w.exports,A=w.outL,R=w.outR;if(o.process_block(i),L&&A&&R&&w.active){L.process_block(i);let T=this.crossfadePos;const N=this.crossfadeCarried;for(let P=0;P<i;P++){h+=.008*(p-h);let v,x;if(T<z){if(N){const S=Te[T];v=A[P]+(r[P]-A[P])*S,x=R[P]+(l[P]-R[P])*S}else{const S=Ee[T],M=Ut[T];v=A[P]*S+r[P]*M,x=R[P]*S+l[P]*M}T++}else v=r[P],x=l[P];v===v&&v>-1e4&&v<1e4||(v=0,this.nanGuardHits++),x===x&&x>-1e4&&x<1e4||(x=0,this.nanGuardHits++);const I=v*h,k=x*h;t[P]=I,e[P]=k,b[u]=I,d[u]=k,u=u+1&j-1}this.crossfadePos=T,T>=z&&(w.active=!1,this.prevIndex=-1)}else{this.crossfadePos=z,this.prevIndex=-1;for(let T=0;T<i;T++){h+=.008*(p-h);let N=r[T],P=l[T];N===N&&N>-1e4&&N<1e4||(N=0,this.nanGuardHits++),P===P&&P>-1e4&&P<1e4||(P=0,this.nanGuardHits++);const v=N*h,x=P*h;t[T]=v,e[T]=x,b[u]=v,d[u]=x,u=u+1&j-1}}}else{o.process_block(i);for(let w=0;w<i;w++){h+=.008*(p-h);let L=r[w],A=l[w];L===L&&L>-1e4&&L<1e4||(L=0,this.nanGuardHits++),A===A&&A>-1e4&&A<1e4||(A=0,this.nanGuardHits++);const R=L*h,T=A*h;t[w]=R,e[w]=T,b[u]=R,d[u]=T,u=u+1&j-1}}this.masterGainSmooth=h,this.scopeWriteIdx=u;const m=n.probes,y=n.probeCount;if(m&&y>0){const w=this.latestProbes;for(let L=0;L<y;L++)w[L]=m[L];this.latestProbeCount=y}const g=n.newtonIters;if(g){let w=0,L=0;for(let A=0;A<i;A++){const R=g[A];R>w&&(w=R),L+=R}this.lastMaxNewtonIters=w,this.lastAvgNewtonIters=L/i}n.header&&(this.lastMaxSccResidual=n.header[3]);const C=(ie()-a)*1e3;if(Pe)this.lastBlockCpuUs=C,this.cpuUsRing[this.cpuWriteIdx]=C,this.cpuWriteIdx=this.cpuWriteIdx+1&rt-1,this.cpuSampleCount<rt&&this.cpuSampleCount++;else if(this.coarseAccumUs+=C,this.coarseBlocks++,this.coarseBlocks>=16){const w=this.coarseAccumUs/this.coarseBlocks;this.lastBlockCpuUs=w,this.cpuUsRing[this.cpuWriteIdx]=w,this.cpuWriteIdx=this.cpuWriteIdx+1&rt-1,this.cpuSampleCount<rt&&this.cpuSampleCount++,this.coarseAccumUs=0,this.coarseBlocks=0}this.blocksProcessed++}computeCpuP99Us(){const t=this.cpuSampleCount;if(t===0)return 0;const e=this.cpuSortScratch;for(let i=0;i<t;i++)e[i]=this.cpuUsRing[i];for(let i=1;i<t;i++){const a=e[i];let n=i-1;for(;n>=0&&e[n]>a;)e[n+1]=e[n],n--;e[n+1]=a}const s=Math.min(t-1,Math.floor(t*.99));return e[s]}copyScopeChronological(t,e){const s=Math.min(t.length,j),i=this.scopeWriteIdx-s+j&j-1;for(let a=0;a<s;a++){const n=i+a&j-1;t[a]=this.scopeL[n],e[a]=this.scopeR[n]}}}const vs=""+new URL("kirchhoff.worklet-CKlsVnlg.js",import.meta.url).href;class ks{ctx=null;workletNode=null;compiled=null;currentPatch=null;audioRunning=!1;workletReady=!1;masterGain=.85;masterGainNode=null;playbackMonitor=null;binauralMaster=null;limiterNode=null;limiterReductionDb=0;playbackTarget="flat";binauralMode="off";latencyHint="interactive";preferredSinkId="";inputStream=null;inputSourceNode=null;inputGainNode=null;inputAnalyser=null;inputMeterBuf=null;inputGain=1;inputActive=!1;inputLabel="";inputDeviceId=null;previewEngine=new xs;previewOutL=new Float32Array(128);previewOutR=new Float32Array(128);previewScopeL=new Float32Array(j);previewScopeR=new Float32Array(j);previewProbes=new Float64Array(_t);rafId=null;listeners=new Set;swapListeners=new Set;hardwareListeners=new Set;recChunkListeners=new Set;recStoppedListeners=new Set;isRecordingFlag=!1;get lastCompiled(){return this.compiled}get isAudioRunning(){return this.audioRunning}get isWorkletReady(){return this.workletReady}get sampleRate(){return this.ctx?this.ctx.sampleRate:48e3}getAudioContext(){return this.ctx}onTelemetry(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSwap(t){return this.swapListeners.add(t),()=>this.swapListeners.delete(t)}onHardwareStatusChange(t){return this.hardwareListeners.add(t),()=>this.hardwareListeners.delete(t)}onRecorderChunk(t){return this.recChunkListeners.add(t),()=>this.recChunkListeners.delete(t)}onRecorderStopped(t){return this.recStoppedListeners.add(t),()=>this.recStoppedListeners.delete(t)}get isRecording(){return this.isRecordingFlag}async startRecording(){return(!this.audioRunning||!this.limiterNode)&&await this.startAudio(),this.limiterNode?(this.isRecordingFlag=!0,this.limiterNode.port.postMessage({type:"recStart"}),!0):!1}stopRecording(){if(this.isRecordingFlag)if(this.isRecordingFlag=!1,this.limiterNode)this.limiterNode.port.postMessage({type:"recStop"});else for(const t of this.recStoppedListeners)t()}setPlaybackTarget(t){this.playbackTarget=t,this.playbackMonitor?.setTarget(t)}setBinauralMode(t){this.binauralMode=t,this.binauralMaster?.setMode(t)}getOutputStageStatus(){return{playbackTarget:this.playbackTarget,binauralMode:this.binauralMode,limiterReductionDb:this.limiterReductionDb}}setLatencyHint(t){this.latencyHint=t,this.emitHardwareStatus()}getAudioHardwareStatus(){const t=this.ctx,e=typeof AudioContext<"u"&&typeof AudioContext.prototype.setSinkId=="function",s=!!(t&&typeof t.setSinkId=="function"||e),i=t?.sinkId,a=typeof i=="string"?i:this.preferredSinkId,n=t&&typeof t.baseLatency=="number"&&Number.isFinite(t.baseLatency)?t.baseLatency*1e3:0,o=t&&typeof t.outputLatency=="number"&&Number.isFinite(t.outputLatency)?t.outputLatency*1e3:0;return{sampleRate:this.sampleRate,baseLatencyMs:n,outputLatencyMs:o,sinkId:a,inputActive:this.inputActive,inputLabel:this.inputLabel,inputGain:this.inputGain,sinkSelectionSupported:s,latencyHint:this.latencyHint,contextState:this.ctx?this.ctx.state:"uninitialized"}}async setOutputDevice(t){const e=t==="default"?"":t,s=typeof AudioContext<"u"&&typeof AudioContext.prototype.setSinkId=="function";if(!this.ctx)return s?(this.preferredSinkId=e,this.emitHardwareStatus(),{ok:!0}):{ok:!1,error:"Output device selection (AudioContext.setSinkId) is not supported in this browser."};const i=this.ctx;if(typeof i.setSinkId!="function")return{ok:!1,error:"Output device selection (AudioContext.setSinkId) is not supported in this browser."};try{return await i.setSinkId(e),this.preferredSinkId=e,this.emitHardwareStatus(),{ok:!0}}catch(a){return{ok:!1,error:a instanceof Error?a.message:String(a)}}}async setInputDevice(t,e=1){if(this.teardownInput(),this.inputGain=Number.isFinite(e)?Math.max(0,Math.min(4,e)):1,this.inputDeviceId=t,t===null)return this.emitHardwareStatus(),{ok:!0};if(typeof navigator>"u"||!navigator.mediaDevices||typeof navigator.mediaDevices.getUserMedia!="function")return this.emitHardwareStatus(),{ok:!1,error:"External audio capture requires navigator.mediaDevices.getUserMedia (HTTPS or localhost)."};try{if((!this.ctx||!this.workletNode)&&await this.startAudio(),!this.ctx||!this.workletNode)return{ok:!1,error:"AudioWorklet failed to initialize before opening audio input."};const s=await navigator.mediaDevices.getUserMedia({audio:{deviceId:t&&t!=="default"?{exact:t}:void 0,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,channelCount:1}}),i=this.ctx.createMediaStreamSource(s),a=this.ctx.createGain();a.gain.value=this.inputGain;const n=this.ctx.createAnalyser();n.fftSize=256,n.smoothingTimeConstant=.45;const o=new Float32Array(new ArrayBuffer(n.fftSize*4));i.connect(a),a.connect(this.workletNode),a.connect(n);const r=s.getAudioTracks()[0],l=r?.label||"External Audio Input";return r&&(r.onended=()=>{this.inputStream===s&&(this.teardownInput(),this.emitHardwareStatus())}),this.inputStream=s,this.inputSourceNode=i,this.inputGainNode=a,this.inputAnalyser=n,this.inputMeterBuf=o,this.inputActive=!0,this.inputLabel=l,this.emitHardwareStatus(),{ok:!0,label:l}}catch(s){return this.teardownInput(),this.emitHardwareStatus(),{ok:!1,error:s instanceof Error?s.message:String(s)}}}setInputGain(t){if(!Number.isFinite(t))return;const e=Math.max(0,Math.min(4,t));this.inputGain=e,this.inputGainNode&&this.ctx?this.inputGainNode.gain.setTargetAtTime(e,this.ctx.currentTime,.008):this.inputGainNode&&(this.inputGainNode.gain.value=e)}getInputLevelDb(){if(!this.inputActive||!this.inputAnalyser||!this.inputMeterBuf)return-96;this.inputAnalyser.getFloatTimeDomainData(this.inputMeterBuf);let t=0;const e=this.inputMeterBuf;for(let i=0;i<e.length;i++){const a=e[i];t+=a*a}const s=Math.sqrt(t/e.length);return s<=1e-5?-96:Math.max(-96,Math.min(6,20*Math.log10(s)))}teardownInput(){if(this.inputSourceNode){try{this.inputSourceNode.disconnect()}catch{}this.inputSourceNode=null}if(this.inputGainNode){try{this.inputGainNode.disconnect()}catch{}this.inputGainNode=null}if(this.inputAnalyser){try{this.inputAnalyser.disconnect()}catch{}this.inputAnalyser=null}if(this.inputStream){for(const t of this.inputStream.getTracks())t.onended=null,t.stop();this.inputStream=null}this.inputMeterBuf=null,this.inputActive=!1,this.inputLabel=""}emitHardwareStatus(){if(this.hardwareListeners.size===0)return;const t=this.getAudioHardwareStatus();for(const e of this.hardwareListeners)e(t)}async startAudio(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(this.ctx=new t({sampleRate:48e3,latencyHint:this.latencyHint}),this.preferredSinkId){const e=this.ctx;if(typeof e.setSinkId=="function")try{await e.setSinkId(this.preferredSinkId)}catch(s){console.warn("[KIRCHHOFF AudioHost] Failed to apply preferred sinkId:",s)}}await this.ctx.audioWorklet.addModule(vs),this.workletNode=new AudioWorkletNode(this.ctx,"kirchhoff-jit-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2]}),this.masterGainNode=this.ctx.createGain(),this.playbackMonitor=new os(this.ctx,this.playbackTarget),this.binauralMaster=new bs(this.ctx,this.binauralMode),this.limiterNode=new AudioWorkletNode(this.ctx,"kirchhoff-limiter",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCount:2,channelCountMode:"explicit"}),this.limiterNode.port.onmessage=e=>{const s=e.data;if(s){if(s.type==="limiter"&&s.minGain>0)this.limiterReductionDb=Math.min(0,20*Math.log10(s.minGain));else if(s.type==="recChunk"&&s.frames>0){const i=this.sampleRate;for(const a of this.recChunkListeners)a(s.left,s.right,s.frames,i)}else if(s.type==="recStopped"){this.isRecordingFlag=!1;for(const i of this.recStoppedListeners)i()}}},this.workletNode.connect(this.masterGainNode),this.masterGainNode.connect(this.playbackMonitor.input),this.playbackMonitor.output.connect(this.binauralMaster.input),this.binauralMaster.output.connect(this.limiterNode),this.limiterNode.connect(this.ctx.destination),this.workletNode.onprocessorerror=e=>{console.error("[KIRCHHOFF Worklet processorerror]",e)},this.workletNode.port.onmessageerror=e=>{console.error("[KIRCHHOFF Worklet messageerror]",e)},this.workletNode.port.onmessage=e=>{const s=e.data;if(s)if(s.type==="telemetry")this.emitTelemetry({patchId:s.patchId,scopeL:s.scopeL,scopeR:s.scopeR,probes:s.probes,probeCount:s.probeCount,probeMeta:this.compiled?this.compiled.ir.probes:[],cpuUs:s.cpuUs,cpuP99Us:s.cpuP99Us,maxNewtonIters:s.maxNewtonIters,avgNewtonIters:s.avgNewtonIters,maxSccResidual:s.maxSccResidual,swapCount:s.swapCount,nanGuardHits:s.nanGuardHits,blocksProcessed:s.blocksProcessed,sampleRate:this.ctx?this.ctx.sampleRate:48e3,audioRunning:this.audioRunning,workletActive:!0});else if(s.type==="swapped"&&this.compiled)for(const i of this.swapListeners)i(this.compiled,s.swapCount);else s.type==="error"&&console.error("[KIRCHHOFF Worklet]",s.message)},this.workletNode.port.postMessage({type:"masterGain",value:this.masterGain}),this.workletReady=!0}this.ctx.state!=="running"&&await this.ctx.resume(),this.audioRunning=this.ctx.state==="running",this.emitHardwareStatus(),this.currentPatch&&await this.loadPatch(this.currentPatch)}async stopAudio(){this.ctx&&this.ctx.state==="running"&&await this.ctx.suspend(),this.audioRunning=!1,this.emitHardwareStatus(),this.ensurePreviewLoop()}async loadPatch(t,e={}){const s=this.sampleRate,i={...t,sampleRate:s};this.currentPatch=i;const a=He(i);this.compiled=a;const n=Oe(a.ir),o=e.keepState===!0,r=await WebAssembly.instantiate(a.wasmBytes,{}),l=r instanceof WebAssembly.Instance?r:r.instance;if(this.previewEngine.installInstance(l,s,a.ir.initialParams,a.ir.probes.length,i.id,{carryMap:n,keepState:o}),this.workletNode&&this.workletReady){const h=a.wasmBytes.slice();this.workletNode.port.postMessage({type:"swap",patchId:i.id,wasmBytes:h,initialParams:a.ir.initialParams,numProbes:a.ir.probes.length,carryMap:n,keepState:o},[h.buffer])}else{for(const h of this.swapListeners)h(a,this.previewEngine.swapCount);this.ensurePreviewLoop()}return a}setParam(t,e,s){if(!this.compiled)return;const i=`${t}:${e}`,a=this.compiled.ir.paramMap[i];a!==void 0&&(this.compiled.ir.initialParams[a]=s,this.previewEngine.setParam(a,s),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"param",index:a,value:s}))}rampParam(t,e,s,i=5){if(!this.compiled)return;const a=this.compiled.ir.paramMap[`${t}:${e}`];if(a===void 0)return;const n=this.compiled.ir.initialParams[a];this.compiled.ir.initialParams[a]=s,this.previewEngine.rampParam(a,n,s,i),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"paramRamp",index:a,from:n,to:s,blocks:i})}getParam(t,e){if(!this.compiled)return;const s=this.compiled.ir.paramMap[`${t}:${e}`];return s===void 0?void 0:this.compiled.ir.initialParams[s]}setMasterGain(t){this.masterGain=t,this.previewEngine.setMasterGain(t),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"masterGain",value:t})}setAuditionMute(t){if(!this.masterGainNode||!this.ctx)return;const e=this.ctx.currentTime;this.masterGainNode.gain.cancelScheduledValues(e),this.masterGainNode.gain.setTargetAtTime(t?0:1,e,.008)}resetPatchState(){this.previewEngine.resetActive(),this.workletNode&&this.workletReady&&this.workletNode.port.postMessage({type:"reset"})}renderCurrentPatchOffline(t){if(!this.compiled)return null;const e=Fe(this.compiled),s=new Float64Array(t),i=new Float64Array(t);let a=0;for(;a<t;){const n=Math.min(128,t-a);e.processBlock(n);for(let o=0;o<n;o++)s[a+o]=e.outL[o],i[a+o]=e.outR[o];a+=n}return{left:s,right:i}}ensurePreviewLoop(){if(this.rafId!==null||typeof requestAnimationFrame>"u")return;const t=()=>{if(this.rafId=null,!(this.audioRunning&&this.workletReady)){if(this.compiled){for(let s=0;s<6;s++)this.previewEngine.process(this.previewOutL,this.previewOutR,128);this.previewEngine.copyScopeChronological(this.previewScopeL,this.previewScopeR);const e=this.previewEngine.latestProbeCount;for(let s=0;s<e;s++)this.previewProbes[s]=this.previewEngine.latestProbes[s];this.emitTelemetry({patchId:this.previewEngine.activePatchId,scopeL:this.previewScopeL,scopeR:this.previewScopeR,probes:this.previewProbes,probeCount:e,probeMeta:this.compiled.ir.probes,cpuUs:this.previewEngine.lastBlockCpuUs,cpuP99Us:this.previewEngine.computeCpuP99Us(),maxNewtonIters:this.previewEngine.lastMaxNewtonIters,avgNewtonIters:this.previewEngine.lastAvgNewtonIters,maxSccResidual:this.previewEngine.lastMaxSccResidual,swapCount:this.previewEngine.swapCount,nanGuardHits:this.previewEngine.nanGuardHits,blocksProcessed:this.previewEngine.blocksProcessed,sampleRate:this.sampleRate,audioRunning:!1,workletActive:!1})}this.rafId=requestAnimationFrame(t)}};this.rafId=requestAnimationFrame(t)}emitTelemetry(t){for(const e of this.listeners)e(t)}dispose(){this.teardownInput(),this.rafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.workletNode&&(this.workletNode.disconnect(),this.workletNode=null),this.masterGainNode&&(this.masterGainNode.disconnect(),this.masterGainNode=null),this.limiterNode&&(this.limiterNode.disconnect(),this.limiterNode=null),this.playbackMonitor?.dispose(),this.playbackMonitor=null,this.binauralMaster?.dispose(),this.binauralMaster=null,this.ctx&&(this.ctx.close(),this.ctx=null),this.hardwareListeners.clear()}}class Ss{inputs=[];outputs=[];permissionGranted=!1;listeners=new Set;disposed=!1;handleDeviceChange=()=>{this.disposed||this.enumerateDevices().then(t=>{this.disposed||this.emitChange(t)})};constructor(){this.hasMediaDevices()&&typeof navigator.mediaDevices.addEventListener=="function"&&navigator.mediaDevices.addEventListener("devicechange",this.handleDeviceChange)}get supported(){return this.hasMediaDevices()&&typeof navigator.mediaDevices.enumerateDevices=="function"}get hasPermission(){return this.permissionGranted}getDevices(){return{inputs:this.inputs.slice(),outputs:this.outputs.slice()}}async enumerateDevices(){if(!this.supported)return this.inputs=[],this.outputs=[],{inputs:[],outputs:[]};try{const t=await navigator.mediaDevices.enumerateDevices(),e=[],s=[];let i=!1,a=0,n=0;for(const o of t){if(o.kind!=="audioinput"&&o.kind!=="audiooutput")continue;const r=(o.label||"").trim();if(r.length>0&&(i=!0),o.kind==="audioinput"){a++;const l=o.deviceId==="default"?"Default Audio Input":o.deviceId==="communications"?"Communications Input":`Audio Input ${a}`;e.push({deviceId:o.deviceId,kind:"audioinput",label:r||l,groupId:o.groupId||""})}else{n++;const l=o.deviceId==="default"?"Default Audio Output":o.deviceId==="communications"?"Communications Output":`Audio Output ${n}`;s.push({deviceId:o.deviceId,kind:"audiooutput",label:r||l,groupId:o.groupId||""})}}return i&&(this.permissionGranted=!0),this.inputs=e,this.outputs=s,this.getDevices()}catch{return this.getDevices()}}async requestPermissionAndRefresh(){if(!this.hasMediaDevices()||typeof navigator.mediaDevices.getUserMedia!="function"){const s=await this.enumerateDevices();return{ok:!1,inputs:s.inputs,outputs:s.outputs,error:"MediaDevices API unavailable (requires HTTPS or localhost)."}}let t=null;try{t=await navigator.mediaDevices.getUserMedia({audio:!0}),this.permissionGranted=!0}catch(s){const i=await this.enumerateDevices();return this.emitChange(i),{ok:!1,inputs:i.inputs,outputs:i.outputs,error:s instanceof Error?s.message:String(s)}}finally{if(t)for(const s of t.getTracks())s.stop()}const e=await this.enumerateDevices();return this.emitChange(e),{ok:!0,inputs:e.inputs,outputs:e.outputs}}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){this.disposed=!0,this.hasMediaDevices()&&typeof navigator.mediaDevices.removeEventListener=="function"&&navigator.mediaDevices.removeEventListener("devicechange",this.handleDeviceChange),this.listeners.clear()}hasMediaDevices(){return typeof navigator<"u"&&!!navigator.mediaDevices}emitChange(t){for(const e of this.listeners)e(t)}}const ne="kirchhoff_midi_cc_v1",ws=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function tt(c){const t=Math.max(0,Math.min(127,Math.round(c))),e=Math.floor(t/12)-1;return`${ws[t%12]}${e}`}function ht(c,t=0){return 440*Math.pow(2,(c-69+t)/12)}function dt(c,t=0){return(c-36+t)/12}const Ft=24;class Ms{access=null;connected=!1;inputs=[];outputs=[];boundInputs=new Map;selectedInputId="all";selectedOutputId="";channelFilter=0;pitchBendRangeSemitones=2;noteStack=[];lastNote=60;lastChannel=1;pitchBendNorm=0;pitchBendSemitones=0;mappings=[];learnTarget=null;lastCcNorm=new Map;clockSyncEnabled=!1;clockRunning=!1;clockPulseCount=0;lastClockPulseMs=0;clockBpm=0;lastEmittedBpm=0;clockDtRing=new Float64Array(Ft);clockDtIdx=0;clockDtCount=0;noteOffTimers=new Set;noteListeners=new Set;polyNoteListeners=new Set;paramListeners=new Set;clockListeners=new Set;activityListeners=new Set;deviceListeners=new Set;mappingListeners=new Set;learnListeners=new Set;constructor(){this.mappings=this.loadPersistedMappings()}get isSupported(){return typeof navigator>"u"?!1:typeof navigator.requestMIDIAccess=="function"}get isConnected(){return this.connected&&this.access!==null}getInputs(){return this.inputs.slice()}getOutputs(){return this.outputs.slice()}getSelectedInput(){return this.selectedInputId}setSelectedInput(t){this.selectedInputId=t||"all"}getSelectedOutput(){return this.selectedOutputId}setSelectedOutput(t){this.selectedOutputId=t||""}getChannelFilter(){return this.channelFilter}setChannelFilter(t){const e=Math.round(t);this.channelFilter=e>=1&&e<=16?e:0}setPitchBendRange(t){Number.isFinite(t)&&t>0&&t<=24&&(this.pitchBendRangeSemitones=t)}async connect(){if(!this.isSupported)return{ok:!1,error:"Web MIDI API is unavailable in this browser (supported in Chromium/Chrome/Edge/Firefox).",inputs:[],outputs:[]};if(this.access)return this.refreshPorts(),{ok:!0,inputs:this.getInputs(),outputs:this.getOutputs()};try{const e=await navigator.requestMIDIAccess({sysex:!1});return this.access=e,this.connected=!0,e.onstatechange=()=>{this.refreshPorts()},this.refreshPorts(),{ok:!0,inputs:this.getInputs(),outputs:this.getOutputs()}}catch(t){return this.connected=!1,{ok:!1,error:t instanceof Error?t.message:String(t),inputs:[],outputs:[]}}}startLearn(t,e,s,i,a,n){this.learnTarget={moduleId:t,paramId:e,min:s,max:i,label:a,scale:n};for(const o of this.learnListeners)o(this.learnTarget)}cancelLearn(){if(this.learnTarget){this.learnTarget=null;for(const t of this.learnListeners)t(null)}}getLearnTarget(){return this.learnTarget?{...this.learnTarget}:null}getMappings(){return this.mappings.map(t=>({...t}))}addMapping(t){this.mappings=this.mappings.filter(e=>!(e.cc===t.cc&&e.channel===t.channel)&&!(e.moduleId===t.moduleId&&e.paramId===t.paramId)),this.mappings.push({...t}),this.persistMappings(),this.emitMappings()}removeMapping(t,e,s,i){this.mappings=this.mappings.filter(a=>s!==void 0&&i!==void 0?!(a.cc===t&&a.channel===e&&a.moduleId===s&&a.paramId===i):!(a.cc===t&&a.channel===e)),this.persistMappings(),this.emitMappings()}clearMappings(){this.mappings=[],this.persistMappings(),this.emitMappings()}setClockSyncEnabled(t){if(this.clockSyncEnabled=t,t&&this.clockBpm>0){const e=this.getClockState();for(const s of this.clockListeners)s(this.clockBpm,e)}}getClockState(){return{running:this.clockRunning,bpm:this.clockBpm,pulseCount:this.clockPulseCount,syncEnabled:this.clockSyncEnabled,lastPulseMs:this.lastClockPulseMs}}sendClockPulse(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([248]),!0}catch{return!1}}sendClockStart(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([250]),!0}catch{return!1}}sendClockStop(){const t=this.resolveOutputPort();if(!t)return!1;try{return t.send([252]),!0}catch{return!1}}sendNote(t,e,s,i){const a=this.resolveOutputPort();if(!a)return!1;const n=Math.max(0,Math.min(15,Math.round(t)-1)),o=Math.max(0,Math.min(127,Math.round(e))),r=Math.max(0,Math.min(127,Math.round(s)));try{if(r<=0)a.send([128|n,o,0]);else if(a.send([144|n,o,r]),i&&i>0&&typeof window<"u"){const l=window.setTimeout(()=>{this.noteOffTimers.delete(l);const h=this.resolveOutputPort();if(h)try{h.send([128|n,o,0])}catch{}},i);this.noteOffTimers.add(l)}return!0}catch{return!1}}sendCC(t,e,s){const i=this.resolveOutputPort();if(!i)return!1;const a=Math.max(0,Math.min(15,Math.round(t)-1)),n=Math.max(0,Math.min(127,Math.round(e))),o=Math.max(0,Math.min(127,Math.round(s)));try{return i.send([176|a,n,o]),!0}catch{return!1}}onNote(t){return this.noteListeners.add(t),()=>this.noteListeners.delete(t)}onPolyNote(t){return this.polyNoteListeners.add(t),()=>this.polyNoteListeners.delete(t)}onParamChange(t){return this.paramListeners.add(t),()=>this.paramListeners.delete(t)}onClockBpm(t){return this.clockListeners.add(t),()=>this.clockListeners.delete(t)}onActivity(t){return this.activityListeners.add(t),()=>this.activityListeners.delete(t)}onDevicesChange(t){return this.deviceListeners.add(t),()=>this.deviceListeners.delete(t)}onMappingsChange(t){return this.mappingListeners.add(t),()=>this.mappingListeners.delete(t)}onLearnChange(t){return this.learnListeners.add(t),()=>this.learnListeners.delete(t)}dispose(){for(const t of this.noteOffTimers)clearTimeout(t);this.noteOffTimers.clear();for(const t of this.boundInputs.values())t.onmidimessage=null;this.boundInputs.clear(),this.access&&(this.access.onstatechange=null,this.access=null),this.connected=!1,this.noteStack=[],this.noteListeners.clear(),this.polyNoteListeners.clear(),this.paramListeners.clear(),this.clockListeners.clear(),this.activityListeners.clear(),this.deviceListeners.clear(),this.mappingListeners.clear(),this.learnListeners.clear()}refreshPorts(){if(!this.access)return;const t=[],e=[],s=new Set;this.access.inputs.forEach((n,o)=>{n.state==="connected"&&(s.add(o),t.push({id:o,name:(n.name||"").trim()||`MIDI Input ${t.length+1}`,manufacturer:(n.manufacturer||"").trim(),direction:"input",state:n.state,connection:n.connection}),this.boundInputs.has(o)||(n.onmidimessage=r=>this.handleMidiMessage(o,r),this.boundInputs.set(o,n)))});for(const[n,o]of this.boundInputs.entries())s.has(n)||(o.onmidimessage=null,this.boundInputs.delete(n));this.access.outputs.forEach((n,o)=>{n.state==="connected"&&e.push({id:o,name:(n.name||"").trim()||`MIDI Output ${e.length+1}`,manufacturer:(n.manufacturer||"").trim(),direction:"output",state:n.state,connection:n.connection})}),this.selectedInputId!=="all"&&!t.some(n=>n.id===this.selectedInputId)&&(this.selectedInputId="all"),this.selectedOutputId&&!e.some(n=>n.id===this.selectedOutputId)&&(this.selectedOutputId=""),this.inputs=t,this.outputs=e;const i=this.getInputs(),a=this.getOutputs();for(const n of this.deviceListeners)n(i,a)}resolveOutputPort(){if(!this.access||!this.selectedOutputId)return null;const t=this.access.outputs.get(this.selectedOutputId);return!t||t.state!=="connected"?null:t}handleMidiMessage(t,e){if(this.selectedInputId!=="all"&&t!==this.selectedInputId)return;const s=e.data;if(!s||s.length===0)return;const i=s[0],a=typeof performance<"u"?performance.now():Date.now();if(i>=248){this.handleRealtimeMessage(i,a);return}if(i>=240)return;const n=i&240,o=(i&15)+1;if(this.channelFilter!==0&&o!==this.channelFilter)return;const r=s.length>1?s[1]&127:0,l=s.length>2?s[2]&127:0;n===144&&l>0?this.handleNoteOn(o,r,l,a):n===128||n===144&&l===0?this.handleNoteOff(o,r,a):n===176?this.handleControlChange(o,r,l,a):n===224&&this.handlePitchBend(o,r,l,a)}handleRealtimeMessage(t,e){if(t===248){if(this.lastClockPulseMs>0){const s=e-this.lastClockPulseMs;if(s>=4&&s<=500){this.clockDtRing[this.clockDtIdx]=s,this.clockDtIdx=(this.clockDtIdx+1)%Ft,this.clockDtCount<Ft&&this.clockDtCount++;let i=0;for(let r=0;r<this.clockDtCount;r++)i+=this.clockDtRing[r];const n=6e4/(i/this.clockDtCount*24),o=Math.max(20,Math.min(300,n));this.clockBpm=this.clockBpm<=0?o:this.clockBpm*.72+o*.28}else s>1e3&&(this.clockDtCount=0,this.clockDtIdx=0)}if(this.lastClockPulseMs=e,this.clockPulseCount++,this.clockRunning=!0,this.clockSyncEnabled&&this.clockBpm>0&&(this.clockPulseCount%6===0||Math.abs(this.clockBpm-this.lastEmittedBpm)>=.2)){this.lastEmittedBpm=this.clockBpm;const s=this.getClockState();for(const i of this.clockListeners)i(this.clockBpm,s)}if(this.clockPulseCount%24===1){const s=this.clockBpm>0?`${this.clockBpm.toFixed(1)} BPM`:"SYNCING";this.emitActivity({kind:"clock",channel:0,summary:`MIDI CLK · ${s}`,timestampMs:e})}}else t===250?(this.clockRunning=!0,this.clockPulseCount=0,this.clockDtCount=0,this.clockDtIdx=0,this.lastClockPulseMs=0,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK START",timestampMs:e})):t===251?(this.clockRunning=!0,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK CONTINUE",timestampMs:e})):t===252&&(this.clockRunning=!1,this.emitActivity({kind:"system",channel:0,summary:"MIDI CLK STOP",timestampMs:e}))}handleNoteOn(t,e,s,i){const a=s/127;this.noteStack=this.noteStack.filter(r=>r.note!==e),this.noteStack.push({note:e,velocity:a,channel:t}),this.lastNote=e,this.lastChannel=t;const n=tt(e),o={type:"noteon",channel:t,note:e,noteName:n,freqHz:ht(e,this.pitchBendSemitones),vOct:dt(e,this.pitchBendSemitones),velocity:a,gate:1,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const r of this.noteListeners)r(o);for(const r of this.polyNoteListeners)r(o);this.emitActivity({kind:"note",channel:t,summary:`CH${t} NOTE ${n} v${s}`,timestampMs:i})}handleNoteOff(t,e,s){this.noteStack=this.noteStack.filter(o=>o.note!==e);const i=this.noteStack.length>0?this.noteStack[this.noteStack.length-1]:null,a=tt(e),n={type:"noteoff",channel:t,note:e,noteName:a,freqHz:ht(e,this.pitchBendSemitones),vOct:dt(e,this.pitchBendSemitones),velocity:0,gate:0,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const o of this.polyNoteListeners)o(n);if(i){this.lastNote=i.note,this.lastChannel=i.channel;const o={type:"noteon",channel:i.channel,note:i.note,noteName:tt(i.note),freqHz:ht(i.note,this.pitchBendSemitones),vOct:dt(i.note,this.pitchBendSemitones),velocity:i.velocity,gate:1,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:this.noteStack.length};for(const r of this.noteListeners)r(o)}else for(const o of this.noteListeners)o(n);this.emitActivity({kind:"note",channel:t,summary:`CH${t} OFF ${a}`,timestampMs:s})}handlePitchBend(t,e,s,i){const a=s<<7|e,n=Math.max(-1,Math.min(1,(a-8192)/8192)),o=n*this.pitchBendRangeSemitones;this.pitchBendNorm=n,this.pitchBendSemitones=o;const r=this.noteStack.length>0?this.noteStack[this.noteStack.length-1]:null,l=r?r.note:this.lastNote,h={type:"pitchbend",channel:r?r.channel:this.lastChannel||t,note:l,noteName:tt(l),freqHz:ht(l,o),vOct:dt(l,o),velocity:r?r.velocity:0,gate:r?1:0,pitchBend:n,pitchBendSemitones:o,activeNotesCount:this.noteStack.length};for(const u of this.noteListeners)u(h);const p=o>=0?"+":"";this.emitActivity({kind:"pitchbend",channel:t,summary:`CH${t} BEND ${p}${o.toFixed(2)}st`,timestampMs:i})}handleControlChange(t,e,s,i){if(e===120||e===123){if(this.noteStack.length>0){const l=this.noteStack[this.noteStack.length-1];this.noteStack=[];const h={type:"noteoff",channel:t,note:l.note,noteName:tt(l.note),freqHz:ht(l.note,this.pitchBendSemitones),vOct:dt(l.note,this.pitchBendSemitones),velocity:0,gate:0,pitchBend:this.pitchBendNorm,pitchBendSemitones:this.pitchBendSemitones,activeNotesCount:0};for(const p of this.noteListeners)p(h)}this.emitActivity({kind:"cc",channel:t,summary:`CH${t} ALL NOTES OFF`,timestampMs:i});return}if(this.learnTarget){const l=this.learnTarget;this.learnTarget=null,this.addMapping({cc:e,channel:t,moduleId:l.moduleId,paramId:l.paramId,min:l.min,max:l.max,label:l.label,scale:l.scale});for(const h of this.learnListeners)h(null)}const a=s/127,n=`${t}:${e}`,o=this.lastCcNorm.get(n),r=o!==void 0?a-o:0;this.lastCcNorm.set(n,a);for(const l of this.mappings){if(l.cc!==e||l.channel!==0&&l.channel!==t)continue;let h;l.scale==="log"&&l.min>0&&l.max>l.min?h=l.min*Math.pow(l.max/l.min,a):l.scale==="discrete"?h=Math.round(l.min+a*(l.max-l.min)):h=l.min+a*(l.max-l.min);for(const p of this.paramListeners)p(l.moduleId,l.paramId,h,r)}this.emitActivity({kind:"cc",channel:t,summary:`CH${t} CC${e} = ${s}`,timestampMs:i})}emitActivity(t){for(const e of this.activityListeners)e(t)}emitMappings(){const t=this.getMappings();for(const e of this.mappingListeners)e(t)}loadPersistedMappings(){if(typeof localStorage>"u")return[];try{const t=localStorage.getItem(ne);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return[];const s=[];for(const i of e)i&&typeof i.cc=="number"&&typeof i.channel=="number"&&typeof i.moduleId=="string"&&typeof i.paramId=="string"&&typeof i.min=="number"&&typeof i.max=="number"&&typeof i.label=="string"&&s.push({cc:Math.max(0,Math.min(127,Math.round(i.cc))),channel:Math.max(0,Math.min(16,Math.round(i.channel))),moduleId:i.moduleId,paramId:i.paramId,min:i.min,max:i.max,label:i.label,scale:i.scale==="log"||i.scale==="discrete"||i.scale==="linear"?i.scale:void 0});return s}catch{return[]}}persistMappings(){if(!(typeof localStorage>"u"))try{localStorage.setItem(ne,JSON.stringify(this.mappings))}catch{}}}const oe={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11,KeyQ:12,Digit2:13,KeyW:14,Digit3:15,KeyE:16,KeyR:17,Digit5:18,KeyT:19,Digit6:20,KeyY:21,Digit7:22,KeyU:23,KeyI:24},re={z:0,s:1,x:2,d:3,c:4,v:5,g:6,b:7,h:8,n:9,j:10,m:11,q:12,2:13,w:14,3:15,e:16,r:17,5:18,t:19,6:20,y:21,7:22,u:23,i:24},Cs=new Set(["BracketLeft","Minus"]),Ls=new Set(["BracketRight","Equal"]),Is=new Set(["[","-"]),Es=new Set(["]","="]),ce=1,le=6,Ts=3;function he(c){if(!c||typeof c!="object")return!1;const t=c,e=typeof t.tagName=="string"?t.tagName.toLowerCase():"";return!!(e==="input"||e==="textarea"||e==="select"||t.isContentEditable||typeof t.closest=="function"&&t.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'))}function Ps(c){if(c.code&&c.code in oe)return oe[c.code];const t=typeof c.key=="string"?c.key.toLowerCase():"";if(t&&t in re)return re[t]}function As(c){if(c.code){if(Cs.has(c.code))return-1;if(Ls.has(c.code))return 1}if(c.key){if(Is.has(c.key))return-1;if(Es.has(c.key))return 1}return 0}class Rs{enabled;baseOctave;velocity;lastNoteName="";isTargetAvailable;heldStack=[];noteListeners=new Set;polyNoteListeners=new Set;stateListeners=new Set;attached=!1;constructor(t={}){this.enabled=t.initialEnabled??!0,this.baseOctave=Math.max(ce,Math.min(le,t.initialOctave??Ts)),this.velocity=Math.max(.05,Math.min(1,t.velocity??.85)),this.isTargetAvailable=t.isTargetAvailable??(()=>!0)}attach(){this.attached||typeof window>"u"||(this.attached=!0,window.addEventListener("keydown",this.onKeyDown,!0),window.addEventListener("keyup",this.onKeyUp,!0),window.addEventListener("blur",this.onBlur),typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChange))}detach(){!this.attached||typeof window>"u"||(this.releaseAll(),this.attached=!1,window.removeEventListener("keydown",this.onKeyDown,!0),window.removeEventListener("keyup",this.onKeyUp,!0),window.removeEventListener("blur",this.onBlur),typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChange))}dispose(){this.detach(),this.noteListeners.clear(),this.polyNoteListeners.clear(),this.stateListeners.clear()}get isEnabled(){return this.enabled}get octave(){return this.baseOctave}getRangeLabel(){return`C${this.baseOctave}–C${this.baseOctave+2}`}getState(){return{enabled:this.enabled,baseOctave:this.baseOctave,velocity:this.velocity,activeNotesCount:this.heldStack.length,lastNoteName:this.lastNoteName}}setEnabled(t){this.enabled!==t&&(this.enabled=t,t||this.releaseAll(),this.emitState())}toggle(){return this.setEnabled(!this.enabled),this.enabled}shiftOctave(t){const e=Math.max(ce,Math.min(le,this.baseOctave+t));e!==this.baseOctave&&(this.baseOctave=e,this.emitState())}releaseAll(){if(this.heldStack.length===0)return;const t=this.heldStack.slice(),e=t[t.length-1];this.heldStack.length=0;for(const s of t)this.emitPolyNote("noteoff",s.note,0,0);this.emitNote("noteoff",e.note,0,0),this.emitState()}onNote(t){return this.noteListeners.add(t),()=>this.noteListeners.delete(t)}onPolyNote(t){return this.polyNoteListeners.add(t),()=>this.polyNoteListeners.delete(t)}onStateChange(t){return this.stateListeners.add(t),()=>this.stateListeners.delete(t)}onBlur=()=>{this.releaseAll()};onVisibilityChange=()=>{typeof document<"u"&&document.hidden&&this.releaseAll()};shouldIgnoreEvent(t){return!!(t.metaKey||t.ctrlKey||t.altKey||he(t.target)||typeof document<"u"&&he(document.activeElement))}onKeyDown=t=>{if(!this.enabled||!this.isTargetAvailable()||this.shouldIgnoreEvent(t))return;const e=As(t);if(e!==0){t.preventDefault(),t.stopPropagation(),t.repeat||this.shiftOctave(e);return}const s=Ps(t);if(s===void 0||(t.preventDefault(),t.stopPropagation(),t.repeat))return;const i=t.code||t.key.toLowerCase(),a=Math.max(0,Math.min(127,(this.baseOctave+1)*12+s)),n=this.heldStack.findIndex(o=>o.id===i);n>=0&&this.heldStack.splice(n,1),this.heldStack.push({id:i,note:a}),this.lastNoteName=tt(a),this.emitPolyNote("noteon",a,this.velocity,1),this.emitNote("noteon",a,this.velocity,1),this.emitState()};onKeyUp=t=>{const e=t.code||t.key.toLowerCase(),s=this.heldStack.findIndex(a=>a.id===e);if(s<0)return;const[i]=this.heldStack.splice(s,1);if(this.emitPolyNote("noteoff",i.note,0,0),!this.enabled||!this.isTargetAvailable()){this.heldStack.length===0&&(this.emitNote("noteoff",i.note,0,0),this.emitState());return}if(this.heldStack.length>0){const a=this.heldStack[this.heldStack.length-1];this.lastNoteName=tt(a.note),this.emitNote("noteon",a.note,this.velocity,1)}else this.emitNote("noteoff",i.note,0,0);this.emitState()};buildNoteEvent(t,e,s,i){return{type:t,channel:1,note:e,noteName:tt(e),freqHz:ht(e,0),vOct:dt(e,0),velocity:s,gate:i,pitchBend:0,pitchBendSemitones:0,activeNotesCount:this.heldStack.length}}emitNote(t,e,s,i){const a=this.buildNoteEvent(t,e,s,i);for(const n of this.noteListeners)n(a)}emitPolyNote(t,e,s,i){if(this.polyNoteListeners.size===0)return;const a=this.buildNoteEvent(t,e,s,i);for(const n of this.polyNoteListeners)n(a)}emitState(){const t=this.getState();for(const e of this.stateListeners)e(t)}}class Ns{voiceNote=new Int16Array(4).fill(-1);voiceHeld=new Uint8Array(4);allocOrder=new Uint32Array(4);releaseOrder=new Uint32Array(4);allocSeq=0;releaseSeq=0;rrCursor=0;noteOn(t,e){const s=Math.max(0,Math.min(127,Math.round(t))),i=Math.max(0,Math.min(1,e));let a=-1;for(let n=0;n<4;n++)if(this.voiceHeld[n]&&this.voiceNote[n]===s){a=n;break}if(a<0){let n=1/0;for(let o=0;o<4;o++){const r=this.rrCursor+o&3;!this.voiceHeld[r]&&this.releaseOrder[r]<n&&(n=this.releaseOrder[r],a=r)}}if(a<0){let n=1/0;for(let o=0;o<4;o++)this.allocOrder[o]<n&&(n=this.allocOrder[o],a=o)}return this.voiceNote[a]=s,this.voiceHeld[a]=1,this.allocOrder[a]=++this.allocSeq,this.rrCursor=a+1&3,{voice:a,note:s,velocity:i}}noteOff(t){const e=Math.max(0,Math.min(127,Math.round(t)));for(let s=0;s<4;s++)if(this.voiceHeld[s]&&this.voiceNote[s]===e)return this.voiceHeld[s]=0,this.releaseOrder[s]=++this.releaseSeq,s;return-1}releaseAll(){const t=[];for(let e=0;e<4;e++)this.voiceHeld[e]&&(this.voiceHeld[e]=0,this.releaseOrder[e]=++this.releaseSeq,t.push(e));return t}reset(){this.voiceNote.fill(-1),this.voiceHeld.fill(0),this.allocOrder.fill(0),this.releaseOrder.fill(0),this.allocSeq=0,this.releaseSeq=0,this.rrCursor=0}}const de="data-kirchhoff-io-styles",$t=20,Ds=`
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
`;function Bs(){if(typeof document>"u"||document.head.querySelector(`style[${de}]`))return;const c=document.createElement("style");c.setAttribute(de,"1"),c.textContent=Ds,document.head.appendChild(c)}function St(c){return Math.abs(c)>=1e3?`${(c/1e3).toFixed(1)}k`:Math.abs(c)>=100?`${Math.round(c)}`:Number.isInteger(c)?String(c):c.toFixed(2).replace(/\.?0+$/,"")}function pe(c){const t=c.modules.find(n=>n.kind==="clock");if(t)return t;const e=c.modules.filter(n=>n.kind==="dusg"&&W(n,"cycle")>=.5);if(e.length===0)return null;const s=e.find(n=>/clk|clock|bpm|16th|tempo|pulse/i.test(`${n.id} ${n.label??""}`));if(s)return s;const i=new Set(["logic","neural"]),a=new Set(c.modules.filter(n=>i.has(n.kind)).map(n=>n.id));for(const n of e)if(c.cables.some(r=>r.fromModule===n.id&&(r.fromPort==="out"||r.fromPort==="eoc")&&a.has(r.toModule)&&r.toPort==="clk"))return n;return e[0]}class Hs{audioDevices;midi;qwerty;host;callbacks;backdrop;drawer;scanBtn;outSelect;inSelect;inToggleBtn;inGainSlider;inGainVal;meterSegs=[];meterDbEl;extInTipEl;audioStatusEl;hwRateEl;hwBaseLatEl;hwOutLatEl;hwSinkEl;midiConnectBtn;midiLedEl;midiMsgEl;midiNotePillEl;midiInSelect;midiOutSelect;midiTestNoteBtn;midiChannelSelect;noteTargetSelect;gateTargetSelect;clockSyncCheckbox;clockBpmChip;clockTargetSub;ccModSelect;ccParamSelect;ccLearnBtn;ccClearBtn;ccListEl;midiStatusEl;headerBadgeEl;qwertySubEl;qwertyOctChip;qwertyToggleBtn;statusButton=null;statusButtonText=null;statusTags=null;openState=!1;selectedOutputId="";selectedInputId="default";noteTargetValue="auto";keysPlaying=null;poly4Playing=null;poly4Allocator=new Ns;gateTargetValue="none";meterRafId=null;lastMeterPaintMs=0;hwPollTimer=null;ledDecayTimer=null;unsubscribers=[];handleKeyDown=t=>{t.key==="Escape"&&this.openState&&(t.preventDefault(),this.close())};constructor(t,e,s){Bs(),this.host=t,this.callbacks=e,this.audioDevices=new Ss,this.midi=new Ms,this.qwerty=new Rs({isTargetAvailable:()=>this.hasActiveKeysNode(),initialEnabled:!0});const i=s??document.body;this.backdrop=document.createElement("div"),this.backdrop.className="kio-backdrop",this.backdrop.addEventListener("click",()=>this.close()),this.drawer=document.createElement("aside"),this.drawer.className="kio-drawer",this.drawer.setAttribute("role","dialog"),this.drawer.setAttribute("aria-label","Kirchhoff Studio Audio & MIDI I/O"),this.drawer.setAttribute("aria-hidden","true"),this.drawer.innerHTML=`
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
    `,i.appendChild(this.backdrop),i.appendChild(this.drawer),this.headerBadgeEl=this.drawer.querySelector("[data-kio-header-badge]"),this.scanBtn=this.drawer.querySelector("[data-kio-scan]"),this.outSelect=this.drawer.querySelector("[data-kio-out-select]"),this.inSelect=this.drawer.querySelector("[data-kio-in-select]"),this.inToggleBtn=this.drawer.querySelector("[data-kio-in-toggle]"),this.inGainSlider=this.drawer.querySelector("[data-kio-in-gain]"),this.inGainVal=this.drawer.querySelector("[data-kio-in-gain-val]"),this.meterDbEl=this.drawer.querySelector("[data-kio-meter-db]"),this.extInTipEl=this.drawer.querySelector("[data-kio-extin-tip]"),this.audioStatusEl=this.drawer.querySelector("[data-kio-audio-status]"),this.hwRateEl=this.drawer.querySelector("[data-kio-hw-rate]"),this.hwBaseLatEl=this.drawer.querySelector("[data-kio-hw-base]"),this.hwOutLatEl=this.drawer.querySelector("[data-kio-hw-out]"),this.hwSinkEl=this.drawer.querySelector("[data-kio-hw-sink]"),this.midiConnectBtn=this.drawer.querySelector("[data-kio-midi-connect]"),this.midiLedEl=this.drawer.querySelector("[data-kio-midi-led]"),this.midiMsgEl=this.drawer.querySelector("[data-kio-midi-msg]"),this.midiNotePillEl=this.drawer.querySelector("[data-kio-note-pill]"),this.midiInSelect=this.drawer.querySelector("[data-kio-midi-in]"),this.midiOutSelect=this.drawer.querySelector("[data-kio-midi-out]"),this.midiTestNoteBtn=this.drawer.querySelector("[data-kio-midi-test]"),this.midiChannelSelect=this.drawer.querySelector("[data-kio-midi-ch]"),this.noteTargetSelect=this.drawer.querySelector("[data-kio-note-target]"),this.gateTargetSelect=this.drawer.querySelector("[data-kio-gate-target]"),this.clockSyncCheckbox=this.drawer.querySelector("[data-kio-clk-sync]"),this.clockBpmChip=this.drawer.querySelector("[data-kio-clk-bpm]"),this.clockTargetSub=this.drawer.querySelector("[data-kio-clk-sub]"),this.ccModSelect=this.drawer.querySelector("[data-kio-cc-mod]"),this.ccParamSelect=this.drawer.querySelector("[data-kio-cc-param]"),this.ccLearnBtn=this.drawer.querySelector("[data-kio-cc-learn]"),this.ccClearBtn=this.drawer.querySelector("[data-kio-cc-clear]"),this.ccListEl=this.drawer.querySelector("[data-kio-cc-list]"),this.midiStatusEl=this.drawer.querySelector("[data-kio-midi-status]"),this.qwertySubEl=this.drawer.querySelector("[data-kio-qwerty-sub]"),this.qwertyOctChip=this.drawer.querySelector("[data-kio-qwerty-oct]"),this.qwertyToggleBtn=this.drawer.querySelector("[data-kio-qwerty-toggle]");const a=this.drawer.querySelector("[data-kio-meter-bars]");for(let o=0;o<$t;o++){const r=document.createElement("span");r.className="kio-meter-seg",a.appendChild(r),this.meterSegs.push(r)}const n=document.createElement("option");n.value="0",n.textContent="Omni (All 1..16)",this.midiChannelSelect.appendChild(n);for(let o=1;o<=16;o++){const r=document.createElement("option");r.value=String(o),r.textContent=`Channel ${o}`,this.midiChannelSelect.appendChild(r)}this.bindDomEvents(),this.bindManagerEvents(),this.qwerty.attach(),window.addEventListener("keydown",this.handleKeyDown),this.renderMidiDevices([],[]),this.renderMappings(this.midi.getMappings()),this.refreshPatchTargets(),this.renderQwertyState(),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.audioDevices.enumerateDevices().then(o=>this.renderAudioDevices(o)),this.syncStatusBadge()}get isOpen(){return this.openState}open(){this.openState||(this.openState=!0,this.backdrop.classList.add("open"),this.drawer.classList.add("open"),this.drawer.setAttribute("aria-hidden","false"),this.refreshPatchTargets(),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.audioDevices.enumerateDevices().then(t=>this.renderAudioDevices(t)),this.syncMeterLoop(),this.hwPollTimer===null&&(this.hwPollTimer=window.setInterval(()=>{this.openState&&this.renderHardwareStatus(this.host.getAudioHardwareStatus())},600)))}close(){this.openState&&(this.openState=!1,this.backdrop.classList.remove("open"),this.drawer.classList.remove("open"),this.drawer.setAttribute("aria-hidden","true"),this.stopMeterLoop(),this.hwPollTimer!==null&&(clearInterval(this.hwPollTimer),this.hwPollTimer=null))}toggle(){this.openState?this.close():this.open()}notifyPatchChanged(){this.refreshPatchTargets()}refreshPatchTargets(){const t=this.callbacks.getPatch(),e=t.modules.some(g=>g.kind==="extin");this.extInTipEl.classList.toggle("present",e),this.extInTipEl.innerHTML=e?"<code>EXT-IN</code> MODULE DETECTED IN ACTIVE PATCH &mdash; arm <strong>ENABLE IN</strong> above to feed live hardware audio into the analog circuit.":"TIP: Click <code>+ EXT-IN</code> in the Patchbay and cable its <code>OUT</code> jack into any filter, wavefolder, BBD, or Neural AI <code>LISTEN</code> port.";const s=t.modules.filter(g=>g.kind==="poly4"),i=t.modules.filter(g=>g.kind==="keys"),a=t.modules.filter(g=>g.kind==="osc"),n=t.modules.filter(g=>g.kind==="neural"),o=this.noteTargetValue;this.noteTargetSelect.innerHTML="";const r=(g,C,w)=>{const L=document.createElement("option");L.value=C,L.textContent=w,g.appendChild(L)};r(this.noteTargetSelect,"off","Off (Ignore Notes)");for(const g of s)r(this.noteTargetSelect,`poly4:${g.id}`,`POLY4 · ${g.label||g.id} → 4-voice poly`);for(const g of i)r(this.noteTargetSelect,`keys:${g.id}`,`KEYS · ${g.label||g.id} → pitch + gate`);a.length>1&&r(this.noteTargetSelect,"all-osc",`All Oscillators (${a.length}× Unison)`);for(const g of a)r(this.noteTargetSelect,`osc:${g.id}`,`OSC · ${g.label||g.id} → freq`);for(const g of n)r(this.noteTargetSelect,`neural:${g.id}`,`AI · ${g.label||g.id} → jam bias`);const l=new Set(Array.from(this.noteTargetSelect.options).map(g=>g.value));o!=="auto"&&l.has(o)?this.noteTargetValue=o:s.length>0?this.noteTargetValue=`poly4:${s[0].id}`:i.length>0?this.noteTargetValue=`keys:${i[0].id}`:a.length>0?this.noteTargetValue=`osc:${a[0].id}`:n.length>0?this.noteTargetValue=`neural:${n[0].id}`:this.noteTargetValue="off",this.noteTargetSelect.value=this.noteTargetValue;const h=t.modules.filter(g=>g.kind==="vactrol"),p=t.modules.filter(g=>g.kind==="dusg"),u=this.gateTargetValue;this.gateTargetSelect.innerHTML="",r(this.gateTargetSelect,"none","Pitch Only (Keep Patch Gate)"),a.length>0&&r(this.gateTargetSelect,"osc-amp","Target OSC Amp (Gate + Vel)");for(const g of h)r(this.gateTargetSelect,`vactrol:${g.id}`,`LPG · ${g.label||g.id} → bias`);for(const g of p)r(this.gateTargetSelect,`dusg:${g.id}`,`DUSG · ${g.label||g.id} → cycle`);const b=new Set(Array.from(this.gateTargetSelect.options).map(g=>g.value));this.gateTargetValue=b.has(u)?u:"none",this.gateTargetSelect.value=this.gateTargetValue;const d=pe(t);this.clockTargetSub.textContent=d?`Target: ${d.label||d.id} (${d.id}.${d.kind==="clock"?"bpm":"fallMs"})`:"No clock in active patch";const f=this.ccModSelect.value,m=this.ccParamSelect.value;this.ccModSelect.innerHTML="";const y=t.modules.filter(g=>J[g.kind].params.length>0);for(const g of y){const C=J[g.kind];r(this.ccModSelect,g.id,`${C.shortName} · ${g.label||g.id}`)}y.some(g=>g.id===f)&&(this.ccModSelect.value=f),this.populateCcParams(m),this.renderMappings(this.midi.getMappings()),s.length===0&&i.length===0?(this.qwerty.releaseAll(),this.keysPlaying=null,this.releasePoly4Voices()):this.poly4Playing&&!s.some(g=>g.id===this.poly4Playing)&&(this.poly4Allocator.reset(),this.poly4Playing=null),this.renderQwertyState(),this.syncStatusBadge()}createStatusButton(){const t=document.createElement("button");t.type="button",t.className="kio-status-pill",t.title="Open Studio Audio Interface & Web MIDI I/O drawer";const e=document.createElement("span");e.className="kio-pill-dot";const s=document.createElement("span");s.textContent="I/O";const i=document.createElement("span");i.className="kio-pill-tags";const a=(n,o="")=>{const r=document.createElement("span");return r.className=`kio-pill-tag${o?` ${o}`:""}`,r.textContent=n,i.appendChild(r),r};return this.statusTags={keys:a("KEYS"),midi:a("MIDI"),ext:a("IN"),bpm:a("---","bpm")},t.appendChild(e),t.appendChild(s),t.appendChild(i),t.addEventListener("click",()=>this.toggle()),this.statusButton=t,this.statusButtonText=s,this.syncStatusBadge(),t}getStatusBadge(){const t=this.host.getAudioHardwareStatus(),e=this.midi.isConnected,s=this.midi.getClockState(),i=this.qwerty.isEnabled&&this.hasActiveKeysNode(),a=["I/O"];if(i&&a.push(`KEYS ${this.qwerty.getRangeLabel()}`),e){const o=this.midi.getInputs().length;a.push(o>0?`MIDI(${o})`:"MIDI")}t.inputActive&&a.push("EXT-IN"),s.syncEnabled&&s.bpm>0&&s.running&&a.push(`${Math.round(s.bpm)} BPM`);const n=i||e||t.inputActive||s.syncEnabled&&s.running;return{text:a.join(" · "),active:n}}dispose(){this.close(),window.removeEventListener("keydown",this.handleKeyDown),this.ledDecayTimer!==null&&(clearTimeout(this.ledDecayTimer),this.ledDecayTimer=null);for(const t of this.unsubscribers)t();this.unsubscribers=[],this.audioDevices.dispose(),this.midi.dispose(),this.qwerty.dispose(),this.backdrop.remove(),this.drawer.remove()}bindDomEvents(){this.drawer.querySelector("[data-kio-close]").addEventListener("click",()=>this.close()),this.scanBtn.addEventListener("click",async()=>{this.scanBtn.disabled=!0,this.scanBtn.textContent="SCANNING…",this.setAudioStatus("Requesting brief OS permission to reveal soundcard names…","neutral");const t=await this.audioDevices.requestPermissionAndRefresh();this.renderAudioDevices({inputs:t.inputs,outputs:t.outputs}),this.scanBtn.disabled=!1,this.scanBtn.textContent="SCAN DEVICES",t.ok?this.setAudioStatus(`Detected ${t.outputs.length} output(s) and ${t.inputs.length} input(s).`,"ok"):this.setAudioStatus(t.error||"Could not scan audio interfaces.","err")}),this.outSelect.addEventListener("change",async()=>{const t=this.outSelect.value;this.selectedOutputId=t;const e=await this.host.setOutputDevice(t);if(e.ok){const s=this.outSelect.selectedOptions[0]?.textContent||"Default Output";this.setAudioStatus(`Output routed → ${s}`,"ok")}else this.setAudioStatus(e.error||"Output routing unsupported.","err");this.renderHardwareStatus(this.host.getAudioHardwareStatus())}),this.inSelect.addEventListener("change",async()=>{this.selectedInputId=this.inSelect.value||"default",this.host.getAudioHardwareStatus().inputActive&&await this.armExternalInput()}),this.inToggleBtn.addEventListener("click",async()=>{this.host.getAudioHardwareStatus().inputActive?(await this.host.setInputDevice(null),this.setAudioStatus("External audio input disconnected.","neutral"),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.syncMeterLoop(),this.syncStatusBadge()):await this.armExternalInput()}),this.inGainSlider.addEventListener("input",()=>{const t=parseFloat(this.inGainSlider.value);this.inGainVal.textContent=`${t.toFixed(2)}×`,this.host.setInputGain(t)}),Se(this.inGainSlider,()=>{this.inGainSlider.value="1",this.inGainVal.textContent="1.00×",this.host.setInputGain(1)}),this.midiConnectBtn.addEventListener("click",async()=>{this.midiConnectBtn.disabled=!0,this.midiConnectBtn.textContent="CONNECTING…";const t=await this.midi.connect();this.midiConnectBtn.disabled=!1,t.ok?(this.midiConnectBtn.textContent="MIDI CONNECTED",this.midiConnectBtn.classList.remove("kio-btn-cyan"),this.midiConnectBtn.classList.add("kio-btn-active"),this.midiMsgEl.textContent=t.inputs.length>0?`LISTENING ON ${t.inputs.length} MIDI INPUT(S)`:"CONNECTED · PLUG IN A MIDI CONTROLLER",this.renderMidiDevices(t.inputs,t.outputs),this.setMidiStatus(`Web MIDI active · ${t.inputs.length} in / ${t.outputs.length} out (hot-plug enabled).`,"ok")):(this.midiConnectBtn.textContent="ENABLE WEB MIDI",this.setMidiStatus(t.error||"Web MIDI connection failed.","err")),this.syncStatusBadge()}),this.midiInSelect.addEventListener("change",()=>{this.midi.setSelectedInput(this.midiInSelect.value||"all")}),this.midiOutSelect.addEventListener("change",()=>{const t=this.midiOutSelect.value||"";this.midi.setSelectedOutput(t),this.midiTestNoteBtn.disabled=!t}),this.midiTestNoteBtn.addEventListener("click",()=>{const t=this.midi.getChannelFilter()||1;this.midi.sendNote(t,60,100,180)&&(this.flashLed("cyan"),this.midiMsgEl.textContent=`TX CH${t} NOTE C4 v100`)}),this.midiChannelSelect.addEventListener("change",()=>{this.midi.setChannelFilter(parseInt(this.midiChannelSelect.value,10)||0)}),this.noteTargetSelect.addEventListener("change",()=>{this.noteTargetValue!==this.noteTargetSelect.value&&this.releasePoly4Voices(),this.noteTargetValue=this.noteTargetSelect.value,this.renderQwertyState()}),this.gateTargetSelect.addEventListener("change",()=>{this.gateTargetValue=this.gateTargetSelect.value}),this.clockSyncCheckbox.addEventListener("change",()=>{const t=this.clockSyncCheckbox.checked;this.midi.setClockSyncEnabled(t),t&&!this.midi.isConnected&&this.midiConnectBtn.click(),this.syncStatusBadge()}),this.ccModSelect.addEventListener("change",()=>{this.populateCcParams()}),this.ccLearnBtn.addEventListener("click",async()=>{if(this.midi.getLearnTarget()){this.midi.cancelLearn();return}if(!this.midi.isConnected){const r=await this.midi.connect();if(!r.ok){this.setMidiStatus(r.error||"Enable Web MIDI before learning CC.","err");return}this.midiConnectBtn.textContent="MIDI CONNECTED",this.midiConnectBtn.classList.remove("kio-btn-cyan"),this.midiConnectBtn.classList.add("kio-btn-active"),this.renderMidiDevices(r.inputs,r.outputs),this.syncStatusBadge()}const t=this.callbacks.getPatch(),e=this.ccModSelect.value,s=this.ccParamSelect.value,i=t.modules.find(r=>r.id===e);if(!i)return;const a=J[i.kind],n=a.params.find(r=>r.id===s);if(!n)return;const o=`${i.label||a.shortName} · ${n.label}`;this.midi.startLearn(i.id,n.id,n.min,n.max,o,n.scale),this.setMidiStatus(`MIDI Learn armed for ${o} — twist any hardware knob/fader…`,"neutral")}),this.ccClearBtn.addEventListener("click",()=>{this.midi.clearMappings(),this.setMidiStatus("Cleared all MIDI CC mappings.","neutral")}),this.qwertyToggleBtn.addEventListener("click",()=>{this.qwerty.toggle(),this.renderQwertyState(),this.syncStatusBadge()})}bindManagerEvents(){this.unsubscribers.push(this.audioDevices.onChange(t=>{this.renderAudioDevices(t)})),this.unsubscribers.push(this.host.onHardwareStatusChange(t=>{this.renderHardwareStatus(t),this.syncMeterLoop(),this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onDevicesChange((t,e)=>{this.renderMidiDevices(t,e),this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onActivity(t=>{this.handleMidiActivity(t)})),this.unsubscribers.push(this.midi.onNote(t=>{this.handleMidiNote(t)})),this.unsubscribers.push(this.midi.onPolyNote(t=>{this.handlePolyMidiNote(t)})),this.unsubscribers.push(this.midi.onParamChange((t,e,s,i)=>{this.callbacks.getPatch().modules.some(n=>n.id===t)&&this.callbacks.onParamChange(t,e,s,"midi-cc",i)})),this.unsubscribers.push(this.midi.onClockBpm(t=>{this.clockBpmChip.textContent=`${t.toFixed(1)} BPM`,this.clockBpmChip.classList.add("good");const e=this.callbacks.getPatch(),s=pe(e);if(s&&s.kind==="clock")this.callbacks.onParamChange(s.id,"bpm",Math.max(30,Math.min(300,t)),"midi-clock");else if(s){const i=W(s,"riseMs"),a=15e3/t,n=Math.max(.12,Math.min(4e3,a-i));this.callbacks.onParamChange(s.id,"fallMs",n,"midi-clock")}this.syncStatusBadge()})),this.unsubscribers.push(this.midi.onMappingsChange(t=>{this.renderMappings(t)})),this.unsubscribers.push(this.midi.onLearnChange(t=>{this.renderLearnState(t)})),this.unsubscribers.push(this.qwerty.onNote(t=>{this.handleQwertyNote(t)})),this.unsubscribers.push(this.qwerty.onPolyNote(t=>{this.handlePolyQwertyNote(t)})),this.unsubscribers.push(this.qwerty.onStateChange(()=>{this.renderQwertyState(),this.syncStatusBadge()}))}async armExternalInput(){this.inToggleBtn.disabled=!0,this.inToggleBtn.textContent="OPENING…";const t=parseFloat(this.inGainSlider.value)||1,e=await this.host.setInputDevice(this.selectedInputId||"default",t);this.inToggleBtn.disabled=!1,e.ok?(this.setAudioStatus(`Live studio input armed: ${e.label||"Audio Input"} → WASM EXT-IN`,"ok"),this.audioDevices.enumerateDevices().then(s=>this.renderAudioDevices(s))):this.setAudioStatus(e.error||"Failed to open audio input device.","err"),this.renderHardwareStatus(this.host.getAudioHardwareStatus()),this.syncMeterLoop(),this.syncStatusBadge()}renderAudioDevices(t){const e=this.selectedOutputId;if(this.outSelect.innerHTML="",!t.outputs.some(n=>n.deviceId==="default"||n.deviceId==="")){const n=document.createElement("option");n.value="",n.textContent="System Default Output",this.outSelect.appendChild(n)}for(const n of t.outputs){const o=document.createElement("option");o.value=n.deviceId==="default"?"":n.deviceId,o.textContent=n.label,this.outSelect.appendChild(o)}Array.from(this.outSelect.options).some(n=>n.value===e)&&(this.outSelect.value=e);const i=this.selectedInputId;if(this.inSelect.innerHTML="",!t.inputs.some(n=>n.deviceId==="default")){const n=document.createElement("option");n.value="default",n.textContent="System Default Input",this.inSelect.appendChild(n)}for(const n of t.inputs){const o=document.createElement("option");o.value=n.deviceId||"default",o.textContent=n.label,this.inSelect.appendChild(o)}Array.from(this.inSelect.options).some(n=>n.value===i)?this.inSelect.value=i:this.inSelect.options.length>0&&(this.selectedInputId=this.inSelect.options[0].value,this.inSelect.value=this.selectedInputId)}renderHardwareStatus(t){this.hwRateEl.textContent=`${(t.sampleRate/1e3).toFixed(1)} kHz`,this.hwBaseLatEl.textContent=t.baseLatencyMs>0?`${t.baseLatencyMs.toFixed(1)} ms`:"—",this.hwOutLatEl.textContent=t.outputLatencyMs>0?`${t.outputLatencyMs.toFixed(1)} ms`:"—",this.hwSinkEl.textContent=t.sinkSelectionSupported?"SUPPORTED":"DEFAULT ONLY",this.hwSinkEl.className=`kio-hw-v ${t.sinkSelectionSupported?"ok":"warn"}`,this.outSelect.disabled=!t.sinkSelectionSupported,this.inToggleBtn.textContent=t.inputActive?"LIVE · ON":"ENABLE IN",this.inToggleBtn.classList.toggle("kio-btn-active",t.inputActive),t.inputActive||this.paintMeter(-96)}syncMeterLoop(){const t=this.openState&&this.host.getAudioHardwareStatus().inputActive;if(t&&this.meterRafId===null){this.lastMeterPaintMs=0;const e=s=>{if(this.meterRafId=null,!this.openState||!this.host.getAudioHardwareStatus().inputActive){this.paintMeter(-96);return}s-this.lastMeterPaintMs>=50&&(this.lastMeterPaintMs=s,this.paintMeter(this.host.getInputLevelDb())),this.meterRafId=requestAnimationFrame(e)};this.meterRafId=requestAnimationFrame(e)}else t||this.stopMeterLoop()}stopMeterLoop(){this.meterRafId!==null&&(cancelAnimationFrame(this.meterRafId),this.meterRafId=null),this.paintMeter(-96)}paintMeter(t){const e=Math.max(0,Math.min(1,(t+60)/60)),s=t<=-60?0:Math.round(e*$t);for(let i=0;i<$t;i++){const a=this.meterSegs[i];i<s?i>=17?a.className="kio-meter-seg lit-hot":i>=13?a.className="kio-meter-seg lit-mid":a.className="kio-meter-seg lit-low":a.className="kio-meter-seg"}this.meterDbEl.textContent=t<=-60?"-∞ dB":`${t>=0?"+":""}${t.toFixed(1)} dB`}handleMidiActivity(t){const e=t.kind==="cc"?"hot":t.kind==="clock"?"green":"cyan";this.flashLed(e),this.midiMsgEl.textContent=t.summary;const s=this.midi.getClockState();s.bpm>0&&s.running&&(this.clockBpmChip.textContent=`${s.bpm.toFixed(1)} BPM`,this.clockBpmChip.classList.toggle("good",s.syncEnabled))}handleMidiNote(t){t.gate===1?this.midiNotePillEl.textContent=`${t.noteName} · ${t.freqHz.toFixed(1)} Hz`:this.midiNotePillEl.textContent=`${t.noteName} OFF`;const e=this.callbacks.getPatch(),s=this.noteTargetValue;if(s.startsWith("poly4:"))return;if(s.startsWith("keys:")){const a=s.slice(5);if(!e.modules.some(n=>n.id===a))return;t.type==="pitchbend"?this.callbacks.onParamChange(a,"bend",t.pitchBendSemitones,"midi-note"):t.gate===1?(this.keysPlaying=a,this.callbacks.onParamChange(a,"note",t.note,"midi-note"),this.callbacks.onParamChange(a,"velocity",t.velocity,"midi-note"),this.callbacks.onParamChange(a,"gate",1,"midi-note")):(this.callbacks.onParamChange(this.keysPlaying??a,"gate",0,"midi-note"),this.keysPlaying=null);return}if(s==="all-osc"){const a=Math.max(15,Math.min(8e3,t.freqHz));if(t.gate===1||t.type==="pitchbend")for(const n of e.modules)n.kind==="osc"&&this.callbacks.onParamChange(n.id,"freq",a,"midi-note")}else if(s.startsWith("osc:")){const a=s.slice(4),n=Math.max(15,Math.min(8e3,t.freqHz));(t.gate===1||t.type==="pitchbend")&&e.modules.some(o=>o.id===a)&&this.callbacks.onParamChange(a,"freq",n,"midi-note")}else if(s.startsWith("neural:")){const a=s.slice(7);if(t.type==="noteon"&&e.modules.some(n=>n.id===a)){const n=Math.max(0,Math.min(1,(t.note-36)/48)),o=Math.max(.15,Math.min(.95,.2+t.velocity*.75)),r=Math.max(.08,Math.min(.92,.1+n*.8));this.callbacks.onParamChange(a,"density",o,"midi-note"),this.callbacks.onParamChange(a,"creativity",r,"midi-note")}}if(t.type==="pitchbend")return;const i=this.gateTargetValue;if(i==="osc-amp"){const a=t.gate===1?Math.max(.15,Math.min(2,t.velocity*1.4)):0;if(s==="all-osc")for(const n of e.modules)n.kind==="osc"&&this.callbacks.onParamChange(n.id,"amp",a,"midi-note");else if(s.startsWith("osc:")){const n=s.slice(4);e.modules.some(o=>o.id===n)&&this.callbacks.onParamChange(n,"amp",a,"midi-note")}}else if(i.startsWith("vactrol:")){const a=i.slice(8);if(e.modules.some(n=>n.id===a)){const n=t.gate===1?Math.max(.12,Math.min(1,t.velocity*.95)):0;this.callbacks.onParamChange(a,"offset",n,"midi-note")}}else if(i.startsWith("dusg:")){const a=i.slice(5);e.modules.some(n=>n.id===a)&&this.callbacks.onParamChange(a,"cycle",t.gate,"midi-note")}}renderMidiDevices(t,e){const s=this.midi.getSelectedInput();this.midiInSelect.innerHTML="";const i=document.createElement("option");i.value="all",i.textContent=t.length>0?`All MIDI Inputs (${t.length})`:"All MIDI Inputs (None Detected)",this.midiInSelect.appendChild(i);for(const o of t){const r=document.createElement("option");r.value=o.id,r.textContent=o.manufacturer?`${o.name} (${o.manufacturer})`:o.name,this.midiInSelect.appendChild(r)}this.midiInSelect.value=s;const a=this.midi.getSelectedOutput();this.midiOutSelect.innerHTML="";const n=document.createElement("option");n.value="",n.textContent=e.length>0?"None (Output Disabled)":"No MIDI Outputs Detected",this.midiOutSelect.appendChild(n);for(const o of e){const r=document.createElement("option");r.value=o.id,r.textContent=o.manufacturer?`${o.name} (${o.manufacturer})`:o.name,this.midiOutSelect.appendChild(r)}this.midiOutSelect.value=a,this.midiTestNoteBtn.disabled=!a}populateCcParams(t){const s=this.callbacks.getPatch().modules.find(a=>a.id===this.ccModSelect.value);if(this.ccParamSelect.innerHTML="",!s)return;const i=J[s.kind];for(const a of i.params){const n=document.createElement("option");n.value=a.id;const o=a.unit?` ${a.unit}`:"";n.textContent=`${a.label} (${St(a.min)}..${St(a.max)}${o})`,this.ccParamSelect.appendChild(n)}t&&i.params.some(a=>a.id===t)&&(this.ccParamSelect.value=t)}renderLearnState(t){t?(this.ccLearnBtn.textContent=`LISTENING (${t.label}) · CANCEL`,this.ccLearnBtn.classList.remove("kio-btn-cyan"),this.ccLearnBtn.classList.add("kio-btn-arm")):(this.ccLearnBtn.textContent="LEARN CC — TWIST HARDWARE KNOB",this.ccLearnBtn.classList.remove("kio-btn-arm"),this.ccLearnBtn.classList.add("kio-btn-cyan"))}renderMappings(t){const e=this.callbacks.getPatch(),s=new Set(e.modules.map(i=>i.id));if(this.ccClearBtn.style.display=t.length>0?"inline-flex":"none",this.ccListEl.innerHTML="",t.length===0){const i=document.createElement("div");i.className="kio-cc-empty",i.textContent="No CC knobs mapped yet · pick a module + param and click LEARN CC.",this.ccListEl.appendChild(i);return}for(const i of t){const a=s.has(i.moduleId),n=document.createElement("div");n.className=`kio-cc-item${a?"":" inactive"}`;const o=document.createElement("span");o.className="kio-cc-badge",o.textContent=`${i.channel>0?`CH${i.channel}`:"OMNI"} CC${i.cc}`;const r=document.createElement("span");r.className="kio-cc-target",r.textContent=a?i.label:`${i.label} (other patch)`,r.title=`${i.moduleId}:${i.paramId}`;const l=document.createElement("span");l.className="kio-cc-range",l.textContent=`${St(i.min)}..${St(i.max)}`;const h=document.createElement("button");h.type="button",h.className="kio-cc-del",h.textContent="×",h.title=`Remove CC${i.cc} mapping`,h.addEventListener("click",()=>{this.midi.removeMapping(i.cc,i.channel,i.moduleId,i.paramId)}),n.appendChild(o),n.appendChild(r),n.appendChild(l),n.appendChild(h),this.ccListEl.appendChild(n)}}flashLed(t){this.midiLedEl.className=`kio-led flash-${t}`,this.ledDecayTimer!==null&&clearTimeout(this.ledDecayTimer),this.ledDecayTimer=window.setTimeout(()=>{this.midiLedEl.className="kio-led",this.ledDecayTimer=null},135)}setAudioStatus(t,e){this.audioStatusEl.textContent=t,this.audioStatusEl.className=`kio-status-line${e==="neutral"?"":` ${e}`}`}setMidiStatus(t,e){this.midiStatusEl.textContent=t,this.midiStatusEl.className=`kio-status-line${e==="neutral"?"":` ${e}`}`}hasActiveKeysNode(){return this.findActivePoly4ModuleId()!==null||this.findActiveKeysModuleId()!==null}findActivePoly4ModuleId(){const t=this.callbacks.getPatch();if(this.noteTargetValue.startsWith("poly4:")){const s=this.noteTargetValue.slice(6);if(t.modules.some(i=>i.id===s&&i.kind==="poly4"))return s}if(this.noteTargetValue.startsWith("keys:")){const s=this.noteTargetValue.slice(5);if(t.modules.some(i=>i.id===s&&i.kind==="keys"))return null}const e=t.modules.find(s=>s.kind==="poly4");return e?e.id:null}findActiveKeysModuleId(){const t=this.callbacks.getPatch();if(this.noteTargetValue.startsWith("keys:")){const s=this.noteTargetValue.slice(5);if(t.modules.some(i=>i.id===s&&i.kind==="keys"))return s}const e=t.modules.find(s=>s.kind==="keys");return e?e.id:null}releasePoly4Voices(){const t=this.poly4Allocator.releaseAll(),e=this.poly4Playing;if(e&&t.length>0&&this.callbacks.getPatch().modules.some(i=>i.id===e&&i.kind==="poly4"))for(const i of t)this.callbacks.onParamChange(e,`gate${i}`,0,"midi-note");this.poly4Allocator.reset(),this.poly4Playing=null}dispatchPoly4Note(t,e,s){if(this.poly4Playing&&this.poly4Playing!==t&&this.releasePoly4Voices(),e.type==="noteon"&&e.gate===1){this.poly4Playing=t;const i=this.poly4Allocator.noteOn(e.note,e.velocity);this.callbacks.onParamChange(t,`note${i.voice}`,i.note,"midi-note"),this.callbacks.onParamChange(t,`vel${i.voice}`,i.velocity,"midi-note"),this.callbacks.onParamChange(t,`gate${i.voice}`,1,"midi-note"),this.midiNotePillEl.textContent=`V${i.voice+1} ${e.noteName} · ${e.freqHz.toFixed(1)} Hz`,s==="QWERTY"&&(this.flashLed("cyan"),this.midiMsgEl.textContent=`QWERTY POLY4 V${i.voice+1} ${e.noteName} (${this.qwerty.getRangeLabel()})`)}else if(e.type==="noteoff"||e.gate===0){const i=this.poly4Allocator.noteOff(e.note);i>=0&&(this.callbacks.onParamChange(t,`gate${i}`,0,"midi-note"),this.midiNotePillEl.textContent=`V${i+1} ${e.noteName} OFF`)}}handlePolyMidiNote(t){const e=this.noteTargetValue;if(!e.startsWith("poly4:"))return;const s=e.slice(6);this.callbacks.getPatch().modules.some(a=>a.id===s&&a.kind==="poly4")&&this.dispatchPoly4Note(s,t,"MIDI")}handlePolyQwertyNote(t){const e=this.findActivePoly4ModuleId();e&&this.dispatchPoly4Note(e,t,"QWERTY")}handleQwertyNote(t){if(this.findActivePoly4ModuleId()!==null)return;const e=this.findActiveKeysModuleId();e&&(this.flashLed("cyan"),t.gate===1?(this.keysPlaying=e,this.midiMsgEl.textContent=`QWERTY NOTE ${t.noteName} (${this.qwerty.getRangeLabel()})`,this.midiNotePillEl.textContent=`${t.noteName} · ${t.freqHz.toFixed(1)} Hz`,this.callbacks.onParamChange(e,"note",t.note,"midi-note"),this.callbacks.onParamChange(e,"velocity",t.velocity,"midi-note"),this.callbacks.onParamChange(e,"gate",1,"midi-note")):(this.midiNotePillEl.textContent=`${t.noteName} OFF`,this.callbacks.onParamChange(this.keysPlaying??e,"gate",0,"midi-note"),this.keysPlaying=null))}renderQwertyState(){const t=this.findActivePoly4ModuleId()!==null,e=t||this.findActiveKeysModuleId()!==null,s=this.qwerty.isEnabled,i=e&&s;this.qwertyOctChip.textContent=this.qwerty.getRangeLabel(),this.qwertyOctChip.classList.toggle("good",i),s?t?(this.qwertyToggleBtn.textContent="POLY4 ON",this.qwertyToggleBtn.className="kio-qwerty-pill active",this.qwertySubEl.textContent="Active on POLY4 (4-voice) · Z–M / Q–I · [ ] octave"):e?(this.qwertyToggleBtn.textContent="QWERTY ON",this.qwertyToggleBtn.className="kio-qwerty-pill active",this.qwertySubEl.textContent="Active on KEYS · Z–M / Q–I · [ ] octave"):(this.qwertyToggleBtn.textContent="NO KEYS",this.qwertyToggleBtn.className="kio-qwerty-pill standby",this.qwertySubEl.textContent="Auto-activates when scene has POLY4 or KEYS"):(this.qwertyToggleBtn.textContent="QWERTY OFF",this.qwertyToggleBtn.className="kio-qwerty-pill",this.qwertySubEl.textContent="Disabled · click to enable Z–M / Q–I play")}syncStatusBadge(){const{text:t,active:e}=this.getStatusBadge();if(this.headerBadgeEl.textContent=e?t.replace(/^I\/O · /,""):"STANDBY",this.headerBadgeEl.className=`kio-chip${e?" good":""}`,this.statusButton&&this.statusButtonText&&(this.statusButton.classList.toggle("active",e),this.statusButton.title=`${e?t:"I/O · standby"} — open the audio interface & Web MIDI drawer`,this.statusTags)){const s=this.midi.getClockState(),i=s.syncEnabled&&s.bpm>0&&s.running,a=this.qwerty.isEnabled&&this.hasActiveKeysNode();this.statusTags.keys.classList.toggle("lit",a),this.statusTags.midi.classList.toggle("lit",this.midi.isConnected),this.statusTags.ext.classList.toggle("lit",this.host.getAudioHardwareStatus().inputActive),this.statusTags.bpm.classList.toggle("lit",i),this.statusTags.bpm.textContent=i?String(Math.min(999,Math.round(s.bpm))).padStart(3," "):"---"}this.callbacks.onStatusBadgeChange?.(t,e)}}function Os(c,t,e){const s=t?2:1,i=c.length,n=s*3,o=i*n,r=new ArrayBuffer(44+o),l=new DataView(r),h=new Uint8Array(r),p=(d,f)=>{for(let m=0;m<f.length;m++)h[d+m]=f.charCodeAt(m)};p(0,"RIFF"),l.setUint32(4,36+o,!0),p(8,"WAVE"),p(12,"fmt "),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,s,!0),l.setUint32(24,e,!0),l.setUint32(28,e*n,!0),l.setUint16(32,n,!0),l.setUint16(34,24,!0),p(36,"data"),l.setUint32(40,o,!0);let u=44;const b=8388607;for(let d=0;d<i;d++){const f=Math.max(-1,Math.min(1,c[d]));let m=Math.round(f*b);if(m<0&&(m+=16777216),h[u++]=m&255,h[u++]=m>>8&255,h[u++]=m>>16&255,t){const y=Math.max(-1,Math.min(1,t[d]));let g=Math.round(y*b);g<0&&(g+=16777216),h[u++]=g&255,h[u++]=g>>8&255,h[u++]=g>>16&255}}return h}function ue(c){const t=c.length,e=new Float64Array(t),s=1.53512485958697,i=-2.69169618940638,a=1.19839281085285,n=-1.69065929318241,o=.73248077421585,r=1,l=-2,h=1,p=-1.99004745483398,u=.99007225036621;let b=0,d=0,f=0,m=0;for(let y=0;y<t;y++){const g=c[y],C=s*g+b;b=i*g-n*C+d,d=a*g-o*C;const w=r*C+f;f=l*C-p*w+m,m=h*C-u*w,e[y]=w}return e}function Fs(c,t,e=48e3){const s=ue(c),i=ue(t),a=Math.round(.4*e),n=Math.round(.1*e),o=[];for(let u=0;u+a<=s.length;u+=n){let b=0,d=0;for(let y=0;y<a;y++){const g=s[u+y],C=i[u+y];b+=g*g,d+=C*C}const f=(b+d)/a;-.691+10*Math.log10(Math.max(f,1e-18))>-70&&o.push(f)}if(o.length===0)return-100;const r=o.reduce((u,b)=>u+b,0)/o.length,l=-.691+10*Math.log10(Math.max(r,1e-18))-10,h=o.filter(u=>-.691+10*Math.log10(Math.max(u,1e-18))>=l),p=h.length>0?h.reduce((u,b)=>u+b,0)/h.length:r;return-.691+10*Math.log10(Math.max(p,1e-18))}function $s(c,t){let e=1e-12;const s=i=>{const a=i.length;for(let n=1;n<a-2;n++){const o=i[n-1],r=i[n],l=i[n+1],h=i[n+2],p=Math.abs(r);p>e&&(e=p);for(let u=1;u<=3;u++){const b=u*.25,d=b*b,f=d*b,m=.5*(2*r+(-o+l)*b+(2*o-5*r+4*l-h)*d+(-o+3*r-3*l+h)*f),y=Math.abs(m);y>e&&(e=y)}}};return s(c),s(t),20*Math.log10(e)}const Ae=128,Gs=900;class qs{chunksL=[];chunksR=[];totalFrames=0;sampleRate=48e3;envCapacity=4096;envCount=0;envPeakL=new Float32Array(this.envCapacity);envPeakR=new Float32Array(this.envCapacity);envRmsL=new Float32Array(this.envCapacity);envRmsR=new Float32Array(this.envCapacity);accCount=0;accPeakL=0;accPeakR=0;accSqL=0;accSqR=0;markers=[];trimStartFrame=0;trimEndFrame=0;trimEndPinned=!1;playbackSource=null;playbackCtx=null;playbackStartCtxTime=0;playbackStartFrame=0;playbackEndFrame=0;playing=!1;playheadFrame=0;cachedMetrics=null;get frames(){return this.totalFrames}get fs(){return this.sampleRate}get durationSec(){return this.totalFrames/Math.max(1,this.sampleRate)}get envelopeCount(){return this.envCount}get peakL(){return this.envPeakL}get peakR(){return this.envPeakR}get rmsL(){return this.envRmsL}get rmsR(){return this.envRmsR}get timelineMarkers(){return this.markers}get trimStart(){return this.trimStartFrame}get trimEnd(){return this.trimEndPinned?Math.min(this.trimEndFrame,this.totalFrames):this.totalFrames}get isTrimmed(){return this.totalFrames>0&&(this.trimStartFrame>0||this.trimEndPinned&&this.trimEndFrame<this.totalFrames)}get isPlaying(){return this.playing}get currentPlayheadFrame(){if(this.playing&&this.playbackCtx){const t=Math.max(0,this.playbackCtx.currentTime-this.playbackStartCtxTime),e=this.playbackStartFrame+Math.round(t*this.sampleRate);return Math.min(this.playbackEndFrame,e)}return Math.min(this.totalFrames,Math.max(0,this.playheadFrame))}clear(t=48e3){this.stopPlayback(),this.chunksL=[],this.chunksR=[],this.totalFrames=0,this.sampleRate=t,this.envCount=0,this.accCount=0,this.accPeakL=0,this.accPeakR=0,this.accSqL=0,this.accSqR=0,this.markers=[],this.trimStartFrame=0,this.trimEndFrame=0,this.trimEndPinned=!1,this.playheadFrame=0,this.cachedMetrics=null}appendChunk(t,e,s,i){if(s<=0)return!0;const n=Math.round(Gs*i)-this.totalFrames;if(n<=0)return!1;const o=Math.min(s,n);this.totalFrames===0&&(this.sampleRate=i);const r=new Float32Array(o),l=new Float32Array(o);for(let h=0;h<o;h++){const p=t[h],u=e[h];r[h]=p,l[h]=u;const b=Math.abs(p),d=Math.abs(u);b>this.accPeakL&&(this.accPeakL=b),d>this.accPeakR&&(this.accPeakR=d),this.accSqL+=p*p,this.accSqR+=u*u,this.accCount++,this.accCount>=Ae&&this.pushEnvelopeBin()}return this.chunksL.push(r),this.chunksR.push(l),this.totalFrames+=o,this.trimEndPinned||(this.trimEndFrame=this.totalFrames),this.playheadFrame=this.totalFrames,this.cachedMetrics=null,o===s}finalizeRecording(){this.accCount>0&&this.pushEnvelopeBin(),this.trimEndPinned||(this.trimEndFrame=this.totalFrames),this.playheadFrame=this.trimStartFrame,this.cachedMetrics=null}addMarker(t,e,s){const i=s!==void 0?Math.max(0,Math.min(this.totalFrames,Math.round(s))):this.totalFrames;this.markers.push({frame:i,label:t,kind:e})}setTrim(t,e){if(this.totalFrames<=0)return;const s=Math.min(this.totalFrames,Math.round(.05*this.sampleRate));let i=Math.max(0,Math.min(this.totalFrames-s,Math.round(t))),a=Math.max(i+s,Math.min(this.totalFrames,Math.round(e)));i<0&&(i=0),a>this.totalFrames&&(a=this.totalFrames),this.trimStartFrame=i,this.trimEndFrame=a,this.trimEndPinned=a<this.totalFrames,(this.playheadFrame<i||this.playheadFrame>a)&&(this.playheadFrame=i),this.cachedMetrics=null}resetTrim(){this.trimStartFrame=0,this.trimEndFrame=this.totalFrames,this.trimEndPinned=!1,this.cachedMetrics=null}seek(t){this.playheadFrame=Math.max(0,Math.min(this.totalFrames,Math.round(t))),this.playing&&this.playbackCtx&&this.startPlayback(this.playbackCtx,this.playheadFrame)}extractRange(t=this.trimStart,e=this.trimEnd){const s=Math.max(0,Math.min(this.totalFrames,Math.floor(t))),i=Math.max(s,Math.min(this.totalFrames,Math.floor(e))),a=i-s,n=new Float64Array(a),o=new Float64Array(a);if(a===0)return{left:n,right:o};let r=0,l=0;for(let h=0;h<this.chunksL.length&&l<a;h++){const p=this.chunksL[h],u=this.chunksR[h],b=p.length,d=r+b;if(d>s&&r<i){const f=Math.max(0,s-r),m=Math.min(b,i-r);for(let y=f;y<m;y++)n[l]=p[y],o[l]=u[y],l++}r=d}return{left:n,right:o}}computeMetrics(){if(this.cachedMetrics)return this.cachedMetrics;const t=this.trimStart,e=this.trimEnd,s=Math.max(0,e-t);if(s<16)return this.cachedMetrics={lufs:-100,truePeakDbtp:-100,frames:s,durationSec:s/Math.max(1,this.sampleRate)},this.cachedMetrics;const{left:i,right:a}=this.extractRange(t,e),n=Fs(i,a,this.sampleRate),o=$s(i,a);return this.cachedMetrics={lufs:n,truePeakDbtp:o,frames:s,durationSec:s/Math.max(1,this.sampleRate)},this.cachedMetrics}exportWavBytes(){const{left:t,right:e}=this.extractRange(this.trimStart,this.trimEnd);return Os(t,e,this.sampleRate)}async startPlayback(t,e,s){this.stopPlayback();const i=this.trimStart,a=this.trimEnd;if(a-i<8)return!1;t.state!=="running"&&await t.resume();const n=e!==void 0&&e>=i&&e<a-8?Math.floor(e):this.playheadFrame>=i&&this.playheadFrame<a-8?Math.floor(this.playheadFrame):i,{left:o,right:r}=this.extractRange(n,a),l=t.createBuffer(2,o.length,this.sampleRate),h=l.getChannelData(0),p=l.getChannelData(1);for(let b=0;b<o.length;b++)h[b]=o[b],p[b]=r[b];const u=t.createBufferSource();return u.buffer=l,u.connect(t.destination),u.onended=()=>{this.playbackSource===u&&(this.playbackSource=null,this.playing=!1,this.playheadFrame=this.trimStart,s?.())},this.playbackCtx=t,this.playbackSource=u,this.playbackStartFrame=n,this.playbackEndFrame=a,this.playbackStartCtxTime=t.currentTime,this.playing=!0,u.start(),!0}stopPlayback(){if(this.playbackSource){const t=this.currentPlayheadFrame;this.playbackSource.onended=null;try{this.playbackSource.stop(),this.playbackSource.disconnect()}catch{}this.playbackSource=null,this.playing=!1,this.playheadFrame=t}else this.playing=!1}pushEnvelopeBin(){if(this.envCount>=this.envCapacity){const s=this.envCapacity*2,i=a=>{const n=new Float32Array(s);return n.set(a),n};this.envPeakL=i(this.envPeakL),this.envPeakR=i(this.envPeakR),this.envRmsL=i(this.envRmsL),this.envRmsR=i(this.envRmsR),this.envCapacity=s}const t=this.envCount++,e=1/Math.max(1,this.accCount);this.envPeakL[t]=this.accPeakL,this.envPeakR[t]=this.accPeakR,this.envRmsL[t]=Math.sqrt(this.accSqL*e),this.envRmsR[t]=Math.sqrt(this.accSqR*e),this.accCount=0,this.accPeakL=0,this.accPeakR=0,this.accSqL=0,this.accSqR=0}}function Z(c,t=!0){const e=Math.max(0,Number.isFinite(c)?c:0),s=Math.floor(e/60),i=e-s*60,a=Math.floor(i),n=Math.floor((i-a)*10),o=String(s).padStart(2,"0"),r=String(a).padStart(2,"0");return t?`${o}:${r}.${n}`:`${o}:${r}`}function Vs(c){return c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,36)||"take"}class _s{host;callbacks;recorder=new qs;topBtn;topDot;topLabel;panelEl;recBtn;playBtn;pinBtn;resetTrimBtn;exportBtn;clearBtn;closeBtn;timeReadout;trimReadout;meterReadout;canvas;open=!1;recording=!1;rafId=0;dragMode="none";dragAnchorFrame=0;hoverFrame=null;resizeObserver=null;pinCounter=0;constructor(t,e,s,i){this.host=s,this.callbacks=i,this.topBtn=document.createElement("button"),this.topBtn.type="button",this.topBtn.className="btn btn-rec",this.topBtn.title="Open the 24-bit WAV recorder & timeline (starts recording if empty)",this.topBtn.innerHTML='<span class="rec-dot" data-top-rec-dot></span><span class="rec-btn-text mono" data-top-rec-label>Rec</span>',this.topDot=this.topBtn.querySelector("[data-top-rec-dot]"),this.topLabel=this.topBtn.querySelector("[data-top-rec-label]"),t.appendChild(this.topBtn),e.innerHTML=`
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
    `,this.panelEl=e.querySelector("[data-rec-strip]"),this.recBtn=e.querySelector("[data-rec-toggle]"),this.playBtn=e.querySelector("[data-rec-play]"),this.pinBtn=e.querySelector("[data-rec-pin]"),this.resetTrimBtn=e.querySelector("[data-rec-reset-trim]"),this.exportBtn=e.querySelector("[data-rec-export]"),this.clearBtn=e.querySelector("[data-rec-clear]"),this.closeBtn=e.querySelector("[data-rec-close]"),this.timeReadout=e.querySelector("[data-rec-time]"),this.trimReadout=e.querySelector("[data-rec-trim]"),this.meterReadout=e.querySelector("[data-rec-meter]"),this.canvas=e.querySelector("[data-rec-canvas]"),this.host.onRecorderChunk((a,n,o,r)=>{if(!this.recording)return;this.recorder.appendChunk(a,n,o,r)||(this.stopRecording(),this.callbacks.onToast("Recorder reached 15-minute buffer limit and stopped cleanly.",3200))}),this.host.onRecorderStopped(()=>{this.recording=!1,this.recorder.finalizeRecording(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline()}),this.topBtn.addEventListener("click",()=>{this.recording?this.stopRecording():!this.open&&this.recorder.frames===0?(this.setOpen(!0),this.startRecording()):this.setOpen(!this.open)}),this.recBtn.addEventListener("click",()=>{this.recording?this.stopRecording():this.startRecording()}),this.playBtn.addEventListener("click",()=>{this.recorder.isPlaying?this.stopPlayback():this.startPlayback()}),this.pinBtn.addEventListener("click",()=>{if(this.recorder.frames===0&&!this.recording)return;this.pinCounter++;const a=this.recording?this.recorder.frames:this.recorder.currentPlayheadFrame;this.recorder.addMarker(`Pin ${this.pinCounter}`,"pin",a),this.drawTimeline()}),this.resetTrimBtn.addEventListener("click",()=>{this.recorder.resetTrim(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline()}),this.exportBtn.addEventListener("click",()=>{this.exportWav()}),this.clearBtn.addEventListener("click",()=>{this.recording&&this.stopRecording(),this.stopPlayback(),this.recorder.clear(this.host.sampleRate),this.pinCounter=0,this.refreshControls(),this.meterReadout.textContent="— LUFS · — dBTP",this.drawTimeline()}),this.closeBtn.addEventListener("click",()=>{this.setOpen(!1)}),this.bindTimelinePointer(),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.open&&this.drawTimeline()}),this.resizeObserver.observe(this.canvas)),this.refreshControls()}notifyEvent(t,e){if(!this.recording)return;const s=t.length>22?`${t.slice(0,20)}…`:t;this.recorder.addMarker(s,e)}setOpen(t){this.open=t,this.panelEl.classList.toggle("open",t),this.topBtn.classList.toggle("panel-open",t&&!this.recording),t&&requestAnimationFrame(()=>this.drawTimeline())}async startRecording(){if(this.recording)return!0;this.stopPlayback(),this.setOpen(!0),this.recorder.clear(this.host.sampleRate),this.pinCounter=0,this.meterReadout.textContent="Recording 48 kHz…";const t=await this.host.startRecording();if(this.callbacks.onSyncAudioStatus(),!t)return this.callbacks.onToast("Could not start AudioWorklet recorder.",2600),this.refreshControls(),!1;this.recording=!0;const e=this.callbacks.getSceneName();return e&&this.recorder.addMarker(e.length>22?`${e.slice(0,20)}…`:e,"scene",0),this.refreshControls(),this.startAnimLoop(),!0}stopRecording(){this.recording&&(this.recording=!1,this.host.stopRecording(),this.recorder.finalizeRecording(),this.stopAnimLoop(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline())}async startPlayback(){if(this.recording||this.recorder.frames<16)return;let t=this.host.getAudioContext();if(t||(await this.host.startAudio(),this.callbacks.onSyncAudioStatus(),t=this.host.getAudioContext()),!t)return;if(this.host.setAuditionMute(!0),!await this.recorder.startPlayback(t,void 0,()=>{this.host.setAuditionMute(!1),this.stopAnimLoop(),this.refreshControls(),this.drawTimeline()})){this.host.setAuditionMute(!1);return}this.refreshControls(),this.startAnimLoop()}stopPlayback(){this.recorder.isPlaying&&(this.recorder.stopPlayback(),this.host.setAuditionMute(!1),this.stopAnimLoop(),this.refreshControls(),this.drawTimeline())}exportWav(){if(this.recording&&this.stopRecording(),this.recorder.frames<8)return;const t=this.recorder.exportWavBytes(),e=new Blob([t],{type:"audio/wav"}),s=URL.createObjectURL(e),i=document.createElement("a"),a=new Date,n=`${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`,o=`kirchhoff-${Vs(this.callbacks.getSceneName())}-${n}.wav`;i.href=s,i.download=o,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3);const r=(this.recorder.trimEnd-this.recorder.trimStart)/Math.max(1,this.recorder.fs),l=(t.byteLength/(1024*1024)).toFixed(2);this.callbacks.onToast(`Exported ${o} (${Z(r)}, 24-bit · ${l} MB)`,3e3)}getStatus(){return{open:this.open,recording:this.recording,playing:this.recorder.isPlaying,frames:this.recorder.frames,durationSec:Number(this.recorder.durationSec.toFixed(2)),trimStart:this.recorder.trimStart,trimEnd:this.recorder.trimEnd,markers:this.recorder.timelineMarkers.length}}startAnimLoop(){if(this.rafId)return;const t=()=>{this.rafId=0,this.refreshLiveTimecodes(),this.open&&this.drawTimeline(),(this.recording||this.recorder.isPlaying)&&(this.rafId=requestAnimationFrame(t))};this.rafId=requestAnimationFrame(t)}stopAnimLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}refreshControls(){const t=this.recorder.frames>0,e=this.recorder.isPlaying;this.topBtn.classList.toggle("recording",this.recording),this.topBtn.classList.toggle("panel-open",this.open&&!this.recording),this.topDot.classList.toggle("live",this.recording),this.topLabel.textContent=this.recording?Z(this.recorder.durationSec):t?`Take ${Z(this.recorder.durationSec,!1)}`:"Rec",this.recBtn.classList.toggle("recording",this.recording),this.recBtn.textContent=this.recording?"■ Stop":"● Rec",this.playBtn.disabled=this.recording||!t,this.playBtn.classList.toggle("active",e),this.playBtn.textContent=e?"■ Stop":"▶ Play",this.pinBtn.disabled=!this.recording&&!t,this.exportBtn.disabled=this.recording||!t,this.clearBtn.disabled=!this.recording&&!t,this.resetTrimBtn.hidden=!this.recorder.isTrimmed,this.refreshLiveTimecodes()}refreshLiveTimecodes(){const t=Math.max(1,this.recorder.fs),e=this.recorder.frames/t,s=this.recording?e:this.recorder.currentPlayheadFrame/t,i=Math.max(0,this.recorder.trimEnd-this.recorder.trimStart)/t;this.timeReadout.textContent=`${Z(s)} / ${Z(e)}`,this.trimReadout.textContent=`SEL ${Z(i)}`,this.recording&&(this.topLabel.textContent=Z(e))}refreshMetrics(){if(this.recorder.frames<16){this.meterReadout.textContent="— LUFS · — dBTP";return}const t=this.recorder.computeMetrics(),e=t.lufs<=-90?"—":t.lufs.toFixed(1),s=t.truePeakDbtp<=-90?"—":t.truePeakDbtp.toFixed(1);this.meterReadout.textContent=`${e} LUFS · ${s} dBTP`}bindTimelinePointer(){const t=i=>{const a=this.canvas.getBoundingClientRect(),n=10,o=Math.max(1,a.width-n*2),r=Math.max(0,Math.min(1,(i-a.left-n)/o));return Math.round(r*this.recorder.frames)},e=i=>{const a=this.canvas.getBoundingClientRect(),n=10,o=Math.max(1,a.width-n*2),r=Math.max(1,this.recorder.frames);return a.left+n+i/r*o};this.canvas.addEventListener("pointerdown",i=>{if(i.button!==0||this.recording||this.recorder.frames<16)return;this.canvas.setPointerCapture(i.pointerId);const a=e(this.recorder.trimStart),n=e(this.recorder.trimEnd),o=9;if(Math.abs(i.clientX-a)<=o)this.dragMode="trimStart";else if(Math.abs(i.clientX-n)<=o)this.dragMode="trimEnd";else if(i.shiftKey)this.dragMode="selectRange",this.dragAnchorFrame=t(i.clientX);else{const r=this.canvas.getBoundingClientRect();i.clientY-r.top<20?(this.dragMode="scrub",this.recorder.seek(t(i.clientX)),this.refreshLiveTimecodes(),this.drawTimeline()):(this.dragMode="selectRange",this.dragAnchorFrame=t(i.clientX))}}),this.canvas.addEventListener("pointermove",i=>{if(this.recorder.frames<16)return;const a=t(i.clientX);if(this.hoverFrame=a,this.dragMode==="none"){if(!this.recording){const n=e(this.recorder.trimStart),o=e(this.recorder.trimEnd),r=Math.abs(i.clientX-n)<=9||Math.abs(i.clientX-o)<=9;this.canvas.style.cursor=r?"ew-resize":"crosshair"}return}this.dragMode==="scrub"?(this.recorder.seek(a),this.refreshLiveTimecodes()):this.dragMode==="trimStart"?(this.recorder.setTrim(Math.min(a,this.recorder.trimEnd-1),this.recorder.trimEnd),this.refreshControls()):this.dragMode==="trimEnd"?(this.recorder.setTrim(this.recorder.trimStart,Math.max(a,this.recorder.trimStart+1)),this.refreshControls()):this.dragMode==="selectRange"&&Math.abs(a-this.dragAnchorFrame)>Math.round(.06*this.recorder.fs)&&(this.recorder.setTrim(Math.min(this.dragAnchorFrame,a),Math.max(this.dragAnchorFrame,a)),this.refreshControls()),this.drawTimeline()});const s=i=>{if(this.dragMode==="none")return;const a=this.dragMode;this.dragMode="none";try{this.canvas.releasePointerCapture(i.pointerId)}catch{}if(a==="selectRange"){const n=t(i.clientX);Math.abs(n-this.dragAnchorFrame)<=Math.round(.06*this.recorder.fs)?(this.recorder.seek(n),this.refreshLiveTimecodes()):this.refreshMetrics()}else(a==="trimStart"||a==="trimEnd")&&this.refreshMetrics();this.drawTimeline()};this.canvas.addEventListener("pointerup",s),this.canvas.addEventListener("pointercancel",s),this.canvas.addEventListener("pointerleave",()=>{this.hoverFrame=null,this.dragMode==="none"&&this.drawTimeline()}),this.canvas.addEventListener("dblclick",()=>{this.recording||this.recorder.frames===0||(this.recorder.resetTrim(),this.refreshControls(),this.refreshMetrics(),this.drawTimeline())})}drawTimeline(){const t=this.canvas,e=t.getBoundingClientRect(),s=Math.max(240,Math.round(e.width||720)),i=Math.max(76,Math.round(e.height||88)),a=Math.min(2,window.devicePixelRatio||1);(t.width!==Math.round(s*a)||t.height!==Math.round(i*a))&&(t.width=Math.round(s*a),t.height=Math.round(i*a));const n=t.getContext("2d");if(!n)return;n.setTransform(a,0,0,a,0,0);const o=19,r=10,l=Math.max(1,s-r*2),h=o+2,p=i-h-4,u=h+p*.5,b=p*.44;n.fillStyle="#16181c",n.fillRect(0,0,s,i),n.fillStyle="#1b1e24",n.fillRect(0,0,s,o),n.strokeStyle="rgba(236, 238, 242, 0.08)",n.lineWidth=1,n.beginPath(),n.moveTo(0,o+.5),n.lineTo(s,o+.5),n.moveTo(r,u+.5),n.lineTo(s-r,u+.5),n.stroke();const d=this.recorder.frames,f=Math.max(1,this.recorder.fs),m=d/f;if(d===0){n.font="10px SF Mono, Menlo, monospace",n.fillStyle="rgba(154, 162, 177, 0.7)",n.textAlign="center",n.fillText(this.recording?"Waiting for first audio buffer…":"Press ● Rec to capture 48 kHz post-limiter stereo audio · drag waveform to trim · export 24-bit WAV",s*.5,u+3),n.textAlign="left";return}const y=this.recording?Math.max(8,m*1.05):Math.max(.1,m),g=Math.max(d,Math.round(y*f)),C=y<=6?1:y<=18?2:y<=45?5:y<=120?10:30;n.font="9px SF Mono, Menlo, monospace",n.fillStyle="rgba(154, 162, 177, 0.75)",n.strokeStyle="rgba(236, 238, 242, 0.05)";for(let S=0;S<=y+.001;S+=C){const M=r+S/y*l;if(M>s-r+1)break;n.beginPath(),n.moveTo(M,o-5),n.lineTo(M,i-2),n.stroke(),M<s-r-28&&n.fillText(Z(S,!1),M+3,12)}n.fillStyle="rgba(126, 168, 154, 0.65)",n.fillText("L",3,h+10),n.fillStyle="rgba(125, 158, 192, 0.65)",n.fillText("R",3,i-6);const w=this.recorder.envelopeCount,L=this.recorder.peakL,A=this.recorder.peakR,R=this.recorder.rmsL,T=this.recorder.rmsR,N=Math.max(1,g/Ae),P=Math.floor(l);for(let S=0;S<P;S++){const M=Math.floor(S/l*N),D=Math.max(M+1,Math.floor((S+1)/l*N));if(M>=w)break;const H=Math.min(w,D);let q=0,X=0,_=0,Y=0;for(let V=M;V<H;V++)L[V]>q&&(q=L[V]),A[V]>X&&(X=A[V]),R[V]>_&&(_=R[V]),T[V]>Y&&(Y=T[V]);const Q=r+S,et=Math.max(1,Math.min(1,q)*b),it=Math.min(et,Math.min(1,_)*b),gt=Math.max(1,Math.min(1,X)*b),pt=Math.min(gt,Math.min(1,Y)*b);n.fillStyle="rgba(126, 168, 154, 0.34)",n.fillRect(Q,u-et,1,et),n.fillStyle="rgba(126, 168, 154, 0.85)",n.fillRect(Q,u-it,1,it),n.fillStyle="rgba(125, 158, 192, 0.34)",n.fillRect(Q,u+1,1,gt),n.fillStyle="rgba(125, 158, 192, 0.85)",n.fillRect(Q,u+1,1,pt)}if(!this.recording&&d>0){const S=r+this.recorder.trimStart/g*l,M=r+this.recorder.trimEnd/g*l;n.fillStyle="rgba(12, 14, 18, 0.62)",S>r&&n.fillRect(r,h,S-r,p),M<s-r&&n.fillRect(M,h,s-r-M,p),n.strokeStyle="rgba(126, 168, 154, 0.85)",n.lineWidth=1.5,n.beginPath(),n.moveTo(S,h),n.lineTo(S,i-2),n.moveTo(M,h),n.lineTo(M,i-2),n.stroke(),n.fillStyle="#7ea89a",n.fillRect(S,h,6,4),n.fillRect(M-6,h,6,4)}const v=this.recorder.timelineMarkers;n.font="8.5px SF Mono, Menlo, monospace";let x=-100;for(let S=0;S<v.length;S++){const M=v[S],D=r+M.frame/g*l;if(D<r||D>s-r)continue;const H=M.kind==="scene"?"#e8cc74":M.kind==="pin"?"#d97757":"#9aa2b1";if(n.strokeStyle=H,n.globalAlpha=.6,n.lineWidth=1,n.beginPath(),n.moveTo(D,o),n.lineTo(D,i-2),n.stroke(),n.globalAlpha=1,n.fillStyle=H,n.beginPath(),n.arc(D,o-3,2.5,0,Math.PI*2),n.fill(),D>x+6&&D<s-r-44){const q=n.measureText(M.label).width;n.fillStyle="rgba(22, 24, 28, 0.86)",n.fillRect(D+3,h+2,q+6,12),n.fillStyle=H,n.fillText(M.label,D+6,h+11),x=D+q+12}}const I=this.recording?d:this.recorder.currentPlayheadFrame,k=r+I/g*l;if(n.strokeStyle="#d97757",n.lineWidth=1.6,n.beginPath(),n.moveTo(k,0),n.lineTo(k,i),n.stroke(),this.hoverFrame!==null&&!this.recording){const S=r+this.hoverFrame/g*l;n.strokeStyle="rgba(236, 238, 242, 0.2)",n.lineWidth=1,n.beginPath(),n.moveTo(S,o),n.lineTo(S,i),n.stroke()}}dispose(){this.stopAnimLoop(),this.stopPlayback(),this.resizeObserver?.disconnect()}}const Us=[{id:"all",label:"All"},{id:"saved",label:"Saved"},{id:"techno",label:"Techno"},{id:"melodic",label:"Melodic"},{id:"binaural",label:"Binaural"},{id:"mastering",label:"Mastering"},{id:"ambient",label:"Ambient"},{id:"tutorials",label:"Tutorials"},{id:"classic",label:"Classic"}];function Ws(c){const t=c.id.toLowerCase(),e=c.name.toLowerCase();return t.includes("mastering")||/^ma\d+/.test(e)?"mastering":t.includes("binaural")||/^b\d+/.test(e)?"binaural":t.includes("tutorial")||/^t\d+/.test(e)?"tutorials":t.includes("melodic")||t.includes("arp")||t.includes("berlin-school")||t.includes("braindance")||t.includes("buchla-ai")||/^m\d+/.test(e)?"melodic":t.includes("ambient")||t.includes("dub")||t.includes("krell")?"ambient":t.includes("techno")||t.includes("acid")||t.includes("tresor")||t.includes("detroit")||t.includes("halftime")||t.includes("logic")||t.includes("neural")?"techno":"classic"}const me="kirchhoff-scene-bar-styles";function zs(){if(typeof document>"u"||document.getElementById(me))return;const c=document.createElement("style");c.id=me,c.textContent=`
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
  `,document.head.appendChild(c)}class Ks{root;store;cb;triggerNameEl;dirtyDotEl;popoverEl;searchInput;catsEl;listEl;footMetaEl;saveRowEl;saveNameInput;fileInput;activeSceneId="";activeSceneName="";dirty=!1;category="all";searchText="";isOpen=!1;constructor(t,e,s){zs(),this.root=t,this.store=e,this.cb=s,this.root.innerHTML=`
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
    `,document.body.appendChild(this.popoverEl),this.searchInput=this.popoverEl.querySelector("[data-scene-search]"),this.catsEl=this.popoverEl.querySelector("[data-scene-cats]"),this.listEl=this.popoverEl.querySelector("[data-scene-list]"),this.footMetaEl=this.popoverEl.querySelector("[data-foot-meta]"),this.saveRowEl=this.popoverEl.querySelector("[data-save-row]"),this.saveNameInput=this.popoverEl.querySelector("[data-save-name]"),this.bindEvents(),this.renderCategories()}setActiveScene(t,e,s=!1){this.activeSceneId=t,this.activeSceneName=e,this.dirty=s,this.triggerNameEl.textContent=e,this.dirtyDotEl.classList.toggle("visible",s),this.isOpen&&this.renderList()}setDirty(t){this.dirty=t,this.dirtyDotEl.classList.toggle("visible",t)}open(t=!1){this.isOpen=!0;const e=this.root.getBoundingClientRect();if(this.popoverEl.style.top=`${Math.round(e.bottom+8)}px`,this.popoverEl.style.left=`${Math.max(12,Math.round(e.left))}px`,this.popoverEl.classList.add("open"),this.saveRowEl.classList.toggle("open",t),this.renderCategories(),this.renderList(),t){const s=this.cb.getCurrentPatch();this.saveNameInput.value=s.name||"My Scene",this.saveNameInput.focus(),this.saveNameInput.select()}else this.searchInput.focus()}close(){this.isOpen=!1,this.popoverEl.classList.remove("open"),this.saveRowEl.classList.remove("open")}dispose(){this.popoverEl.remove()}getAllItems(){const t=this.store.listUserScenes().map(s=>({id:s.id,name:s.name,description:`Saved ${new Date(s.savedAt).toLocaleString()} · ${s.patch.modules.length} modules`,patch:s.patch,saved:!0,cat:"saved"})),e=this.cb.getPresets().map(s=>({id:s.id,name:s.name,description:s.description??"",patch:s,saved:!1,cat:Ws(s)}));return[...t,...e]}stepScene(t){const e=this.getAllItems();if(e.length===0)return;const s=e.findIndex(n=>n.id===this.activeSceneId),i=s<0?0:(s+t+e.length)%e.length,a=e[i];this.cb.onLoadScene(a.patch,a.id,a.saved?"saved":"preset")}bindEvents(){this.root.querySelector("[data-scene-trigger]").addEventListener("click",e=>{e.stopPropagation(),this.isOpen?this.close():this.open(!1)}),this.root.querySelector("[data-scene-prev]").addEventListener("click",()=>this.stepScene(-1)),this.root.querySelector("[data-scene-next]").addEventListener("click",()=>this.stepScene(1)),this.root.querySelector("[data-scene-save]").addEventListener("click",e=>{e.stopPropagation(),this.open(!0)}),this.root.querySelector("[data-scene-export]").addEventListener("click",()=>this.doExport()),this.root.querySelector("[data-scene-import]").addEventListener("click",()=>this.fileInput.click()),this.root.querySelector("[data-scene-link]").addEventListener("click",()=>this.cb.onCopyLink?.()),this.popoverEl.querySelector("[data-pop-close]").addEventListener("click",()=>this.close()),this.popoverEl.querySelector("[data-foot-import]").addEventListener("click",()=>this.fileInput.click()),this.popoverEl.querySelector("[data-foot-export]").addEventListener("click",()=>this.doExport()),this.popoverEl.querySelector("[data-save-cancel]").addEventListener("click",()=>{this.saveRowEl.classList.remove("open")});const t=()=>{const e=this.saveNameInput.value.trim()||this.cb.getCurrentPatch().name||"My Scene",s=this.store.listUserScenes().find(a=>a.id===this.activeSceneId&&a.name===e),i=this.store.saveUserScene(this.cb.getCurrentPatch(),e,s?.id);this.saveRowEl.classList.remove("open"),this.setActiveScene(i.id,i.name,!1),this.cb.onSceneSaved?.(i),this.category="saved",this.renderCategories(),this.renderList(),this.cb.onToast(`Saved "${i.name}" to browser storage`)};this.popoverEl.querySelector("[data-save-confirm]").addEventListener("click",t),this.saveNameInput.addEventListener("keydown",e=>{e.key==="Enter"&&t(),e.key==="Escape"&&this.saveRowEl.classList.remove("open")}),this.searchInput.addEventListener("input",()=>{this.searchText=this.searchInput.value.trim().toLowerCase(),this.renderList()}),this.fileInput.addEventListener("change",async()=>{const e=this.fileInput.files?.[0];if(this.fileInput.value="",!e)return;const s=await this.store.importSceneFromFile(e);if(!s.ok){this.cb.onToast(`Import failed: ${s.error}`);return}const i=this.store.saveUserScene(s.patch,s.patch.name);this.cb.onLoadScene(i.patch,i.id,"file"),this.close(),this.cb.onToast(`Loaded & cached "${i.name}" from ${e.name}`)}),document.addEventListener("pointerdown",e=>{if(!this.isOpen)return;const s=e.target;!this.popoverEl.contains(s)&&!this.root.contains(s)&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}doExport(){const t=this.cb.getCurrentPatch(),e=this.store.exportSceneToFile(t,this.activeSceneName||t.name);this.cb.onToast(`Exported ${e}`)}renderCategories(){const t=this.store.listUserScenes().length;this.catsEl.innerHTML="";for(const e of Us){const s=document.createElement("button");s.type="button",s.className=`scene-cat-btn${this.category===e.id?" active":""}`,s.textContent=e.id==="saved"&&t>0?`${e.label} (${t})`:e.label,s.addEventListener("click",()=>{this.category=e.id,this.renderCategories(),this.renderList()}),this.catsEl.appendChild(s)}}renderList(){const e=this.getAllItems().filter(i=>!(this.category!=="all"&&i.cat!==this.category||this.searchText&&!`${i.name} ${i.description} ${i.id}`.toLowerCase().includes(this.searchText)));if(this.listEl.innerHTML="",e.length===0){const i=document.createElement("div");i.style.cssText="padding:18px 12px;text-align:center;color:#848d9e;font-size:12px;",i.textContent=this.category==="saved"?"No saved scenes yet. Click Save to keep your current patch & tweaks.":"No matching scenes.",this.listEl.appendChild(i)}else for(const i of e){const a=document.createElement("div");a.className=`scene-row${i.id===this.activeSceneId?" active":""}`,a.setAttribute("role","button"),a.tabIndex=0;const n=document.createElement("div");n.className="scene-row-main";const o=document.createElement("div");o.className="scene-row-title",o.textContent=i.name;const r=document.createElement("div");r.className="scene-row-desc",r.textContent=i.description,n.append(o,r);const l=document.createElement("div");l.className="scene-row-meta";const h=document.createElement("span");if(h.className=`scene-tag${i.saved?" saved":""}`,h.textContent=i.saved?"Saved":i.cat,l.appendChild(h),i.saved){const u=document.createElement("button");u.type="button",u.className="scene-del-btn",u.title=`Delete saved scene "${i.name}"`,u.textContent="×",u.addEventListener("click",b=>{b.stopPropagation(),this.store.deleteUserScene(i.id),this.renderCategories(),this.renderList(),this.cb.onToast(`Deleted saved scene "${i.name}"`)}),l.appendChild(u)}a.append(n,l);const p=()=>{this.cb.onLoadScene(i.patch,i.id,i.saved?"saved":"preset"),this.close()};a.addEventListener("click",p),a.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),p())}),this.listEl.appendChild(a)}const s=this.store.listUserScenes().length;this.footMetaEl.textContent=`${e.length} scenes · ${s} saved in browser`}}function js(c){let t=1;for(;t<c;)t<<=1;return t}function Re(c){const t=new Float64Array(c),e=.35875,s=.48829,i=.14128,a=.01168,n=1/(c-1);for(let o=0;o<c;o++){const r=2*Math.PI*o*n;t[o]=e-s*Math.cos(r)+i*Math.cos(2*r)-a*Math.cos(3*r)}return t}function li(c){const t=new Float64Array(c),e=1/c;for(let s=0;s<c;s++)t[s]=.5*(1-Math.cos(2*Math.PI*s*e));return t}function Ne(c,t,e=!1){const s=c.length;for(let a=1,n=0;a<s;a++){let o=s>>1;for(;n&o;o>>=1)n^=o;if(n^=o,a<n){const r=c[a];c[a]=c[n],c[n]=r;const l=t[a];t[a]=t[n],t[n]=l}}const i=e?1:-1;for(let a=2;a<=s;a<<=1){const n=a>>1,o=i*2*Math.PI/a,r=Math.cos(o),l=Math.sin(o);for(let h=0;h<s;h+=a){let p=1,u=0;for(let b=0;b<n;b++){const d=c[h+b],f=t[h+b],m=c[h+b+n]*p-t[h+b+n]*u,y=c[h+b+n]*u+t[h+b+n]*p;c[h+b]=d+m,t[h+b]=f+y,c[h+b+n]=d-m,t[h+b+n]=f-y;const g=p*r-u*l;u=p*l+u*r,p=g}}}if(e){const a=1/s;for(let n=0;n<s;n++)c[n]*=a,t[n]*=a}}function Xs(c,t,e,s=0){const i=e??js(Math.min(c.length-s,65536)),a=Re(i),n=new Float64Array(i),o=new Float64Array(i);let r=0;for(let d=0;d<i;d++){const f=s+d,m=f<c.length?c[f]:0,y=a[d];n[d]=m*y,r+=y}Ne(n,o,!1);const l=(i>>1)+1,h=new Float64Array(l),p=new Float64Array(l),u=new Float64Array(l),b=2/Math.max(r,1e-12);for(let d=0;d<l;d++){const f=Math.hypot(n[d],o[d])*(d===0||d===l-1?b*.5:b);h[d]=f,p[d]=20*Math.log10(Math.max(f,1e-15)),u[d]=d*t/i}return{bins:l,fftSize:i,sampleRate:t,mag:h,magDb:p,freqs:u}}function hi(c,t,e,s=16384,i=2048,a=2e4){const n=Xs(c,t,s,i),o=t/s,r=Math.min(n.bins-4,Math.floor(a/o)),l=new Uint8Array(n.bins);for(let m=0;m<=5;m++)l[m]=2;const h=[],p=5;let u=0;for(let m=1;m*e<Math.min(a,t*.495);m++){const y=Math.round(m*e/o);let g=0;for(let C=Math.max(6,y-p);C<=Math.min(r,y+p);C++)l[C]=1,g+=n.mag[C]*n.mag[C];u+=g,h.push(10*Math.log10(Math.max(g,1e-30)))}let b=0,d=0;for(let m=6;m<=r;m++)if(l[m]===0){const y=n.mag[m];b+=y*y,y>d&&(d=y)}return{snrDb:10*Math.log10(Math.max(u,1e-30)/Math.max(b,1e-30)),signalPower:u,aliasPower:b,harmonicsDb:h,peakAliasDb:20*Math.log10(Math.max(d,1e-15))}}const Ys={moog904a:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Moog 904A 4-stage transistor ladder schematic">
      <text x="6" y="11" class="schem-title">MOOG 904A · 10-BJT TRANSISTOR LADDER</text>
      <!-- Signal bus & feedback loop -->
      <path d="M12 52 H38 M72 52 H96 M126 52 H152 M182 52 H208 M238 52 H276 M276 52 H308" class="schem-wire"/>
      <path d="M266 52 V82 H54 V62" class="schem-wire schem-fb"/>
      <text x="155" y="79" class="schem-lbl">k·RES FEEDBACK (4-POLE)</text>
      <text x="8" y="47" class="schem-pin">IN</text>
      <text x="294" y="47" class="schem-pin">OUT</text>
      <!-- Diff pair Q1/Q2 -->
      <rect x="38" y="40" width="34" height="24" rx="3" class="schem-box"/>
      <text x="55" y="55" text-anchor="middle" class="schem-comp">Q1/Q2</text>
      <!-- Stage 1 Cap (probe: y1) -->
      <g class="schem-node" data-probe-id="y1" tabindex="0">
        <rect x="92" y="22" width="42" height="50" rx="4" class="schem-hit"/>
        <circle cx="111" cy="52" r="2.2" class="schem-dot"/>
        <path d="M111 52 V34 M103 34 H119 M103 39 H119 M111 39 V46" class="schem-sym"/>
        <text x="113" y="30" text-anchor="middle" class="schem-tag">C1 · y1</text>
        <text x="113" y="66" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <!-- Stages 2-3 -->
      <rect x="152" y="42" width="30" height="20" rx="3" class="schem-box"/>
      <text x="167" y="55" text-anchor="middle" class="schem-comp">C2·C3</text>
      <!-- Stage 4 Cap (probe: y4) -->
      <g class="schem-node" data-probe-id="y4" tabindex="0">
        <rect x="204" y="22" width="42" height="50" rx="4" class="schem-hit"/>
        <circle cx="223" cy="52" r="2.2" class="schem-dot"/>
        <path d="M223 52 V34 M215 34 H231 M215 39 H231 M223 39 V46" class="schem-sym"/>
        <text x="225" y="30" text-anchor="middle" class="schem-tag">C4 · y4</text>
        <text x="225" y="66" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <!-- Solver residual & iters -->
      <g class="schem-node" data-probe-id="iters" tabindex="0">
        <rect x="256" y="4" width="58" height="17" rx="3" class="schem-hit"/>
        <text x="285" y="15" text-anchor="middle" class="schem-val" data-val>NR</text>
      </g>
      <g class="schem-node" data-probe-id="residual" tabindex="0">
        <rect x="256" y="69" width="58" height="21" rx="3" class="schem-hit"/>
        <text x="285" y="83" text-anchor="middle" class="schem-val" data-val>|R|</text>
      </g>
    </svg>
  `,ms20wdf:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Korg MS-20 Sallen-Key diode peak schematic">
      <text x="6" y="11" class="schem-title">KORG MS-20 · SALLEN-KEY DIODE PEAK</text>
      <path d="M10 56 H42 M74 56 H102 M146 56 H178 M224 56 H292" class="schem-wire"/>
      <path d="M248 56 V26 H124 V42" class="schem-wire schem-fb"/>
      <text x="8" y="51" class="schem-pin">IN</text>
      <text x="294" y="59" class="schem-pin">LP</text>
      <rect x="42" y="46" width="32" height="20" rx="3" class="schem-box"/>
      <text x="58" y="59" text-anchor="middle" class="schem-comp">OTA1</text>
      <!-- C1 node -->
      <g class="schem-node" data-probe-id="vCap1" tabindex="0">
        <rect x="102" y="34" width="44" height="44" rx="4" class="schem-hit"/>
        <text x="124" y="47" text-anchor="middle" class="schem-tag">C1</text>
        <text x="124" y="69" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <!-- C2 node -->
      <g class="schem-node" data-probe-id="vCap2" tabindex="0">
        <rect x="178" y="34" width="46" height="44" rx="4" class="schem-hit"/>
        <text x="201" y="47" text-anchor="middle" class="schem-tag">C2</text>
        <text x="201" y="69" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <!-- Anti-parallel diode bridge in feedback -->
      <g class="schem-node" data-probe-id="vDiode" tabindex="0">
        <rect x="148" y="14" width="56" height="22" rx="3" class="schem-hit"/>
        <text x="176" y="23" text-anchor="middle" class="schem-tag">D1/D2 V</text>
        <text x="176" y="33" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="iDiode" tabindex="0">
        <rect x="210" y="14" width="58" height="22" rx="3" class="schem-hit"/>
        <text x="239" y="23" text-anchor="middle" class="schem-tag">D1/D2 I</text>
        <text x="239" y="33" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,tb303:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="TB-303 4-stage diode ladder schematic">
      <text x="6" y="11" class="schem-title">TB-303 · 18n/33n 4-STAGE DIODE LADDER</text>
      <path d="M12 50 H44 M94 50 H126 M162 50 H194 M244 50 H306" class="schem-wire"/>
      <path d="M262 50 V82 H32 V50" class="schem-wire schem-fb"/>
      <text x="144" y="79" class="schem-lbl">HP-FB RESONANCE (18 dB/OCT)</text>
      <text x="8" y="45" class="schem-pin">IN</text>
      <text x="291" y="45" class="schem-pin">LP3</text>
      <g class="schem-node" data-probe-id="v1" tabindex="0">
        <rect x="44" y="24" width="50" height="48" rx="4" class="schem-hit"/>
        <text x="69" y="36" text-anchor="middle" class="schem-tag">C1 18nF</text>
        <text x="69" y="52" text-anchor="middle" class="schem-comp">D1–D2</text>
        <text x="69" y="66" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <rect x="126" y="36" width="36" height="28" rx="3" class="schem-box"/>
      <text x="144" y="53" text-anchor="middle" class="schem-comp">C2·C3</text>
      <g class="schem-node" data-probe-id="v4" tabindex="0">
        <rect x="194" y="24" width="50" height="48" rx="4" class="schem-hit"/>
        <text x="219" y="36" text-anchor="middle" class="schem-tag">C4 33nF</text>
        <text x="219" y="52" text-anchor="middle" class="schem-comp">D7–D8</text>
        <text x="219" y="66" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="iters" tabindex="0">
        <rect x="256" y="5" width="58" height="17" rx="3" class="schem-hit"/>
        <text x="285" y="16" text-anchor="middle" class="schem-val" data-val>NR</text>
      </g>
      <g class="schem-node" data-probe-id="residual" tabindex="0">
        <rect x="256" y="68" width="58" height="21" rx="3" class="schem-hit"/>
        <text x="285" y="82" text-anchor="middle" class="schem-val" data-val>|R|</text>
      </g>
    </svg>
  `,vactrol:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Buchla 292C VTL5C3 Vactrol LPG schematic">
      <text x="6" y="11" class="schem-title">VTL5C3 · BUCHLA 292C VACTROL LPG</text>
      <path d="M12 62 H122 M176 62 H208 M268 62 H308" class="schem-wire"/>
      <path d="M12 28 H36 M90 28 H148 V48" class="schem-wire schem-fb"/>
      <text x="8" y="24" class="schem-pin">CV</text>
      <text x="8" y="57" class="schem-pin">IN</text>
      <text x="292" y="57" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="gFast" tabindex="0">
        <rect x="36" y="16" width="54" height="24" rx="3" class="schem-hit"/>
        <text x="63" y="26" text-anchor="middle" class="schem-tag">LED FAST</text>
        <text x="63" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="gSlow" tabindex="0">
        <rect x="94" y="16" width="54" height="24" rx="3" class="schem-hit"/>
        <text x="121" y="26" text-anchor="middle" class="schem-tag">CdS TAIL</text>
        <text x="121" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="rOhms" tabindex="0">
        <rect x="122" y="44" width="54" height="36" rx="4" class="schem-hit"/>
        <text x="149" y="57" text-anchor="middle" class="schem-tag">R_CdS</text>
        <text x="149" y="72" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="cutoffHz" tabindex="0">
        <rect x="208" y="44" width="60" height="36" rx="4" class="schem-hit"/>
        <text x="238" y="57" text-anchor="middle" class="schem-tag">2P SALLEN</text>
        <text x="238" y="72" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,wavefolder:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Buchla 259 5-stage diode bridge wavefolder schematic">
      <text x="6" y="11" class="schem-title">BUCHLA 259 · 5-STAGE DIODE WAVEFOLDER</text>
      <path d="M12 52 H44 M114 52 H138 M208 52 H232 M296 52 H310" class="schem-wire"/>
      <text x="8" y="47" class="schem-pin">IN</text>
      <text x="296" y="47" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="xDriven" tabindex="0">
        <rect x="44" y="30" width="70" height="44" rx="4" class="schem-hit"/>
        <text x="79" y="45" text-anchor="middle" class="schem-tag">DRIVE + SYM</text>
        <text x="79" y="63" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <rect x="138" y="30" width="70" height="44" rx="4" class="schem-box"/>
      <text x="173" y="48" text-anchor="middle" class="schem-comp">5× BRIDGE</text>
      <text x="173" y="63" text-anchor="middle" class="schem-lbl">ADAA2 / NR</text>
      <g class="schem-node" data-probe-id="folded" tabindex="0">
        <rect x="232" y="30" width="64" height="44" rx="4" class="schem-hit"/>
        <text x="264" y="45" text-anchor="middle" class="schem-tag">FOLDED</text>
        <text x="264" y="63" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,triode12ax7:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="12AX7 Koren triode tube stage schematic">
      <text x="6" y="11" class="schem-title">12AX7 · KOREN TRIODE CLASS-A STAGE</text>
      <path d="M12 52 H78 M136 42 H174 M232 42 H308 M110 66 V82 H174" class="schem-wire"/>
      <text x="8" y="47" class="schem-pin">GRID</text>
      <text x="291" y="37" class="schem-pin">OUT</text>
      <circle cx="108" cy="50" r="24" class="schem-box"/>
      <text x="108" y="47" text-anchor="middle" class="schem-comp">V1</text>
      <text x="108" y="60" text-anchor="middle" class="schem-lbl">12AX7</text>
      <g class="schem-node" data-probe-id="vP" tabindex="0">
        <rect x="174" y="16" width="58" height="24" rx="3" class="schem-hit"/>
        <text x="203" y="26" text-anchor="middle" class="schem-tag">PLATE Vp</text>
        <text x="203" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="ipMa" tabindex="0">
        <rect x="242" y="16" width="66" height="24" rx="3" class="schem-hit"/>
        <text x="275" y="26" text-anchor="middle" class="schem-tag">PLATE Ip</text>
        <text x="275" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="vK" tabindex="0">
        <rect x="174" y="64" width="58" height="24" rx="3" class="schem-hit"/>
        <text x="203" y="74" text-anchor="middle" class="schem-tag">CATH Vk</text>
        <text x="203" y="84" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="iters" tabindex="0">
        <rect x="242" y="64" width="66" height="24" rx="3" class="schem-hit"/>
        <text x="275" y="74" text-anchor="middle" class="schem-tag">NR ITERS</text>
        <text x="275" y="84" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,tubescreamer:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="TS-808 asymmetric diode clipper schematic">
      <text x="6" y="11" class="schem-title">TS-808 · OP-AMP DIODE CLIPPING STAGE</text>
      <path d="M12 58 H54 M96 58 H126 M174 58 H292" class="schem-wire"/>
      <path d="M112 58 V28 H142 M206 28 H234 V58" class="schem-wire schem-fb"/>
      <text x="8" y="53" class="schem-pin">IN</text>
      <text x="294" y="61" class="schem-pin">OUT</text>
      <rect x="54" y="48" width="42" height="20" rx="3" class="schem-box"/>
      <text x="75" y="61" text-anchor="middle" class="schem-comp">720Hz</text>
      <polygon points="126,42 126,74 174,58" class="schem-box"/>
      <text x="142" y="61" class="schem-lbl">4558</text>
      <g class="schem-node" data-probe-id="vD" tabindex="0">
        <rect x="142" y="16" width="64" height="24" rx="3" class="schem-hit"/>
        <text x="174" y="26" text-anchor="middle" class="schem-tag">D1/D2 Vd</text>
        <text x="174" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="iters" tabindex="0">
        <rect x="242" y="16" width="68" height="24" rx="3" class="schem-hit"/>
        <text x="276" y="26" text-anchor="middle" class="schem-tag">NR ITERS</text>
        <text x="276" y="36" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="residual" tabindex="0">
        <rect x="242" y="64" width="68" height="24" rx="3" class="schem-hit"/>
        <text x="276" y="74" text-anchor="middle" class="schem-tag">RESIDUAL</text>
        <text x="276" y="84" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,tr808bd:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="TR-808 Bridged-T resonator kick schematic">
      <text x="6" y="11" class="schem-title">TR-808 · BRIDGED-T RESONATOR + SIGH</text>
      <path d="M12 52 H40 M98 52 H122 M186 52 H234 M294 52 H310" class="schem-wire"/>
      <text x="8" y="47" class="schem-pin">TRG</text>
      <text x="296" y="47" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="vRetrig" tabindex="0">
        <rect x="40" y="30" width="58" height="44" rx="4" class="schem-hit"/>
        <text x="69" y="45" text-anchor="middle" class="schem-tag">RETRIG C</text>
        <text x="69" y="63" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="va" tabindex="0">
        <rect x="122" y="18" width="64" height="32" rx="4" class="schem-hit"/>
        <text x="154" y="31" text-anchor="middle" class="schem-tag">TANK Va</text>
        <text x="154" y="44" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="instFreq" tabindex="0">
        <rect x="122" y="54" width="64" height="32" rx="4" class="schem-hit"/>
        <text x="154" y="67" text-anchor="middle" class="schem-tag">PITCH Hz</text>
        <text x="154" y="80" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="vOut" tabindex="0">
        <rect x="234" y="30" width="60" height="44" rx="4" class="schem-hit"/>
        <text x="264" y="45" text-anchor="middle" class="schem-tag">OUT V</text>
        <text x="264" y="63" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,comp1176:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="1176 FET shunt limiter schematic">
      <text x="6" y="11" class="schem-title">1176 · 2N5457 JFET SHUNT LIMITER</text>
      <path d="M12 42 H74 M144 42 H214 M284 42 H308 M248 42 V72 H109 V64" class="schem-wire"/>
      <text x="8" y="37" class="schem-pin">IN</text>
      <text x="292" y="37" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="rFet" tabindex="0">
        <rect x="74" y="22" width="70" height="42" rx="4" class="schem-hit"/>
        <text x="109" y="37" text-anchor="middle" class="schem-tag">JFET R_ds</text>
        <text x="109" y="54" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="grDb" tabindex="0">
        <rect x="214" y="22" width="70" height="42" rx="4" class="schem-hit"/>
        <text x="249" y="37" text-anchor="middle" class="schem-tag">GAIN RED</text>
        <text x="249" y="54" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <text x="178" y="84" text-anchor="middle" class="schem-lbl">PROGRAM-DEP SIDECHAIN DETECTOR</text>
    </svg>
  `,pultec:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Pultec EQP-1A passive LC network schematic">
      <text x="6" y="11" class="schem-title">PULTEC EQP-1A · PASSIVE RLC NETWORK</text>
      <path d="M12 50 H52 M140 50 H174 M262 50 H308" class="schem-wire"/>
      <text x="8" y="45" class="schem-pin">IN</text>
      <text x="292" y="45" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="lowBand" tabindex="0">
        <rect x="52" y="26" width="88" height="48" rx="4" class="schem-hit"/>
        <text x="96" y="42" text-anchor="middle" class="schem-tag">LOW BOOST/ATT</text>
        <text x="96" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="hiPeak" tabindex="0">
        <rect x="174" y="26" width="88" height="48" rx="4" class="schem-hit"/>
        <text x="218" y="42" text-anchor="middle" class="schem-tag">HI RLC PEAK</text>
        <text x="218" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,transducer:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="Voice-coil back-EMF transducer schematic">
      <text x="6" y="11" class="schem-title">TRANSDUCER · BIDIRECTIONAL BACK-EMF</text>
      <path d="M12 50 H48 M126 50 H164 M244 50 H308" class="schem-wire"/>
      <path d="M204 72 V84 H87 V72" class="schem-wire schem-fb"/>
      <text x="145" y="82" text-anchor="middle" class="schem-lbl">Bl·v COUPLED SCC</text>
      <text x="8" y="45" class="schem-pin">V_in</text>
      <text x="292" y="45" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="current" tabindex="0">
        <rect x="48" y="28" width="78" height="44" rx="4" class="schem-hit"/>
        <text x="87" y="43" text-anchor="middle" class="schem-tag">COIL I (Re/Le)</text>
        <text x="87" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="bemf" tabindex="0">
        <rect x="164" y="28" width="80" height="44" rx="4" class="schem-hit"/>
        <text x="204" y="43" text-anchor="middle" class="schem-tag">BACK-EMF Bl·v</text>
        <text x="204" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,plate2d:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="2D von Karman nonlinear plate schematic">
      <text x="6" y="11" class="schem-title">PLATE-2D · VON KÁRMÁN 16-MODE PDE</text>
      <path d="M12 50 H52 M140 50 H174 M262 50 H308" class="schem-wire"/>
      <text x="8" y="45" class="schem-pin">EXC</text>
      <text x="292" y="45" class="schem-pin">OUT</text>
      <g class="schem-node" data-probe-id="energy" tabindex="0">
        <rect x="52" y="26" width="88" height="48" rx="4" class="schem-hit"/>
        <text x="96" y="42" text-anchor="middle" class="schem-tag">MODAL ENERGY</text>
        <text x="96" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="tension" tabindex="0">
        <rect x="174" y="26" width="88" height="48" rx="4" class="schem-hit"/>
        <text x="218" y="42" text-anchor="middle" class="schem-tag">CUBIC TENSION</text>
        <text x="218" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `,neural:`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="4-Neuron Leaky-Tanh AI Teammate schematic">
      <text x="6" y="11" class="schem-title">NEURAL-AI · 4-NEURON RESERVOIR</text>
      <path d="M12 52 H34 M98 52 H118 M188 52 H208 M274 52 H308" class="schem-wire"/>
      <path d="M170 72 V81 H136 V72" class="schem-wire schem-fb"/>
      <text x="153" y="92" text-anchor="middle" class="schem-lbl">W_hh + MUTATE</text>
      <text x="6" y="47" class="schem-pin">IN</text>
      <text x="288" y="47" class="schem-pin">CV</text>
      <g class="schem-node" data-probe-id="listen" tabindex="0">
        <rect x="34" y="28" width="64" height="44" rx="4" class="schem-hit"/>
        <text x="66" y="43" text-anchor="middle" class="schem-tag">LISTEN u3</text>
        <text x="66" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="energy" tabindex="0">
        <rect x="118" y="28" width="70" height="44" rx="4" class="schem-hit"/>
        <text x="153" y="43" text-anchor="middle" class="schem-tag">h0..h3</text>
        <text x="153" y="61" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="barStep" tabindex="0">
        <rect x="208" y="18" width="66" height="30" rx="3" class="schem-hit"/>
        <text x="241" y="30" text-anchor="middle" class="schem-tag">STEP</text>
        <text x="241" y="42" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
      <g class="schem-node" data-probe-id="adapt" tabindex="0">
        <rect x="208" y="52" width="66" height="30" rx="3" class="schem-hit"/>
        <text x="241" y="64" text-anchor="middle" class="schem-tag">TEAMMATE</text>
        <text x="241" y="76" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>
    </svg>
  `};function Qs(c,t){const e=Math.min(4,t.length),s=e>0?Math.min(72,Math.floor((280-(e-1)*10)/e)):72,i=e*s+Math.max(0,e-1)*10,a=Math.round((320-i)*.5),n=t.slice(0,4).map((o,r)=>{const l=a+r*(s+10),h=l+s*.5;return`${r>0?`<line x1="${l-10}" y1="52" x2="${l}" y2="52" class="schem-wire"/>`:""}<g class="schem-node" data-probe-id="${o.probeId}" tabindex="0">
        <rect x="${l}" y="30" width="${s}" height="44" rx="4" class="schem-hit"/>
        <text x="${h}" y="45" text-anchor="middle" class="schem-tag">${o.probeId.slice(0,9)}</text>
        <text x="${h}" y="63" text-anchor="middle" class="schem-val" data-val>—</text>
      </g>`}).join("");return`
    <svg viewBox="0 0 320 96" class="schem-svg" role="img" aria-label="${c} internal probe topology">
      <text x="6" y="11" class="schem-title">${c.toUpperCase()} · INTERNAL PROBE NODES</text>
      <line x1="10" y1="52" x2="${a}" y2="52" class="schem-wire"/>
      <line x1="${a+i}" y1="52" x2="310" y2="52" class="schem-wire"/>
      ${n}
    </svg>
  `}function Js(c,t,e,s,i,a){const n=Ys[t];c.innerHTML=n??Qs(t,e);const o=new Map;e.forEach((l,h)=>o.set(l.probeId,h));const r=[];return c.querySelectorAll(".schem-node[data-probe-id]").forEach(l=>{const h=l.dataset.probeId,p=o.get(h);p!==void 0&&l.style.setProperty("--schem-accent",s[p%s.length]);const u=l.querySelector("[data-val]");l.addEventListener("click",()=>i(h)),l.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),i(h))}),l.addEventListener("pointerenter",()=>a(h)),l.addEventListener("pointerleave",()=>a(null)),r.push({probeId:h,el:l,valEl:u})}),{isDedicated:!!n,hotspots:r}}const mt=["#7ea89a","#d97757","#9aa2b1","#c99e67"],lt=180,U=4096,fe=[{label:"50µs",sec:5e-5},{label:"200µs",sec:2e-4},{label:"500µs",sec:5e-4},{label:"1ms",sec:.001},{label:"2ms",sec:.002},{label:"5ms",sec:.005},{label:"10ms",sec:.01}],Gt=[{label:"AUTO",volts:0},{label:"0.1V",volts:.1},{label:"0.25V",volts:.25},{label:"0.5V",volts:.5},{label:"1.0V",volts:1}];function Zs(c){if(!Number.isFinite(c))return"—";const t=Math.abs(c);return t!==0&&(t<.001||t>=1e5)?c.toExponential(2):t>=100?c.toFixed(1):c.toFixed(4)}function ti(c,t){if(!Number.isFinite(c))return"—";const e=Math.abs(c);let s;return e!==0&&(e<.01||e>=1e4)?s=c.toExponential(1):e>=100?s=c.toFixed(0):e>=10?s=c.toFixed(1):s=c.toFixed(2),t&&t!=="#"&&t!=="err"?`${s}${t}`:s}class ei{phaseCanvas;fftCanvas;probeCanvas;phaseTag;scopeCtrlBar;fftTag;probeTitleSpan;probeSelect;probeReadoutStrip;schemHost;schemToggleBtn;probeReadoutKey="\0";probeValueEls=[];probePillEls=[];schemKey="\0";schemHotspots=[];schemVisible=!0;soloProbeId=null;hoverProbeId=null;phaseMode="attractor";phaseModeIndicator=null;phaseNeedsHardClear=!0;timeDivIdx=4;voltsDivIdx=0;trigSlope="rise";trigLevel=0;acCoupling=!0;scopeHold=!1;holdLoaded=!1;holdScopeL=new Float32Array(U);holdScopeR=new Float32Array(U);holdSampleRate=48e3;draggingTrig=!1;scopeHoverX=null;fftHoverX=null;selectedModuleId=null;onSelectModuleCallback;fftWindow=Re(U);fftRe=new Float64Array(U);fftIm=new Float64Array(U);fftMagDb=new Float32Array(U/2);fftPeakHold=new Float32Array(U/2).fill(-110);probeHist=[];probeHistHead=0;lastProbeMeta=[];constructor(t,e){this.onSelectModuleCallback=e;for(let m=0;m<64;m++)this.probeHist.push(new Float32Array(lt));t.innerHTML="",t.className="crt-stack";const s=document.createElement("div");s.className="panel-card";const i=fe.map((m,y)=>`<option value="${y}"${y===this.timeDivIdx?" selected":""}>${m.label}/d</option>`).join(""),a=Gt.map((m,y)=>`<option value="${y}"${y===this.voltsDivIdx?" selected":""}>${m.label}</option>`).join("");s.innerHTML=`
      <div class="panel-header">
        <div class="panel-title">SCOPE // PHASE &amp; TRIGGER</div>
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
      <div class="scope-ctrl-bar is-xy" data-scope-bar>
        <select class="scope-select" data-scope-timediv aria-label="Time per division" title="Horizontal timebase per division (TIME mode)">${i}</select>
        <select class="scope-select" data-scope-vdiv aria-label="Volts per division" title="Vertical scale per division (TIME mode)">${a}</select>
        <button type="button" class="scope-pill-btn" data-scope-trig title="Trigger slope: Rising / Falling / Free-run (drag canvas vertically to move trigger level)">↗ RISE</button>
        <button type="button" class="scope-pill-btn active" data-scope-ac title="AC coupling removes DC offset">AC</button>
        <button type="button" class="scope-pill-btn" data-scope-hold title="Freeze current scope capture">HOLD</button>
      </div>
    `,this.phaseCanvas=s.querySelector("[data-phase-canvas]"),this.phaseTag=s.querySelector("[data-phase-tag]"),this.scopeCtrlBar=s.querySelector("[data-scope-bar]");const n=s.querySelector("[data-scope-timediv]"),o=s.querySelector("[data-scope-vdiv]"),r=s.querySelector("[data-scope-trig]"),l=s.querySelector("[data-scope-ac]"),h=s.querySelector("[data-scope-hold]");n.addEventListener("change",()=>{this.timeDivIdx=Number(n.value)}),o.addEventListener("change",()=>{this.voltsDivIdx=Number(o.value)}),r.addEventListener("click",()=>{this.trigSlope=this.trigSlope==="rise"?"fall":this.trigSlope==="fall"?"free":"rise",r.textContent=this.trigSlope==="rise"?"↗ RISE":this.trigSlope==="fall"?"↘ FALL":"≈ FREE",r.classList.toggle("active",this.trigSlope!=="free")}),r.classList.add("active"),l.addEventListener("click",()=>{this.acCoupling=!this.acCoupling,l.textContent=this.acCoupling?"AC":"DC",l.classList.toggle("active",this.acCoupling)}),h.addEventListener("click",()=>{this.scopeHold=!this.scopeHold,this.scopeHold||(this.holdLoaded=!1),h.classList.toggle("active",this.scopeHold)});const p=m=>{const y=this.phaseCanvas.getBoundingClientRect(),C=(.5-(m.clientY-y.top)/Math.max(1,y.height))/.42,w=Gt[this.voltsDivIdx].volts,L=w>0?w*2:1;this.trigLevel=Math.max(-1.2,Math.min(1.2,C*L))};this.phaseCanvas.addEventListener("pointerdown",m=>{this.phaseMode!=="waveform"||this.trigSlope==="free"||(this.draggingTrig=!0,this.phaseCanvas.setPointerCapture(m.pointerId),p(m))}),this.phaseCanvas.addEventListener("pointermove",m=>{const y=this.phaseCanvas.getBoundingClientRect();this.scopeHoverX=Math.max(0,Math.min(y.width,m.clientX-y.left)),this.draggingTrig&&p(m)}),this.phaseCanvas.addEventListener("pointerup",()=>{this.draggingTrig=!1}),this.phaseCanvas.addEventListener("pointerleave",()=>{this.draggingTrig=!1,this.scopeHoverX=null}),this.phaseCanvas.addEventListener("dblclick",()=>{this.phaseMode==="waveform"&&(this.trigLevel=0)});const u=s.querySelector("[data-phase-modes]");this.phaseModeIndicator=new we(u,"mode-slider-thumb","pill");const b=s.querySelectorAll("[data-mode]");b.forEach(m=>{m.addEventListener("click",()=>{this.phaseMode=m.dataset.mode,this.phaseNeedsHardClear=!0,this.scopeCtrlBar.classList.toggle("is-xy",this.phaseMode!=="waveform"),this.phaseCanvas.classList.toggle("fft-interactive",this.phaseMode==="waveform"),b.forEach(y=>y.classList.toggle("active",y===m)),this.phaseModeIndicator?.setActive(m)})}),requestAnimationFrame(()=>{const m=u.querySelector(".mode-toggle-btn.active");this.phaseModeIndicator?.setActive(m,!0)}),t.appendChild(s);const d=document.createElement("div");d.className="panel-card",d.innerHTML=`
      <div class="panel-header">
        <div class="panel-title">LIVE FFT // 4096-PT SPECTRUM</div>
        <button type="button" class="btn btn-sm" data-fft-reset>CLR PEAK</button>
      </div>
      <div class="crt-frame">
        <canvas class="crt-canvas fft-interactive" data-fft-canvas></canvas>
        <div class="crt-overlay-tag" data-fft-tag>PEAK — Hz · FLOOR — dB</div>
      </div>
    `,this.fftCanvas=d.querySelector("[data-fft-canvas]"),this.fftTag=d.querySelector("[data-fft-tag]"),d.querySelector("[data-fft-reset]").addEventListener("click",()=>{this.fftPeakHold.fill(-110)}),this.fftCanvas.addEventListener("pointermove",m=>{const y=this.fftCanvas.getBoundingClientRect();this.fftHoverX=Math.max(0,Math.min(y.width,m.clientX-y.left))}),this.fftCanvas.addEventListener("pointerleave",()=>{this.fftHoverX=null}),t.appendChild(d);const f=document.createElement("div");f.className="panel-card",f.innerHTML=`
      <div class="panel-header">
        <div class="panel-title"><span>CIRCUIT NODE SCOPE</span> <span style="color:var(--phosphor);white-space:nowrap" data-probe-mod></span></div>
        <div class="probe-header-ctrls">
          <button type="button" class="scope-pill-btn active" data-schem-toggle title="Toggle interactive component schematic cross-probing">SCHEM</button>
          <select class="wat-select" data-probe-select aria-label="Select circuit module to probe"></select>
        </div>
      </div>
      <div class="schem-host" data-schem-host></div>
      <div class="crt-frame">
        <canvas class="crt-canvas" data-probe-canvas></canvas>
      </div>
      <div class="probe-readout-strip" data-probe-readouts></div>
    `,this.probeTitleSpan=f.querySelector("[data-probe-mod]"),this.probeSelect=f.querySelector("[data-probe-select]"),this.probeCanvas=f.querySelector("[data-probe-canvas]"),this.probeReadoutStrip=f.querySelector("[data-probe-readouts]"),this.schemHost=f.querySelector("[data-schem-host]"),this.schemToggleBtn=f.querySelector("[data-schem-toggle]"),this.schemToggleBtn.addEventListener("click",()=>{this.schemVisible=!this.schemVisible,this.schemToggleBtn.classList.toggle("active",this.schemVisible),this.schemHost.classList.toggle("is-hidden",!this.schemVisible)}),this.probeSelect.addEventListener("change",()=>{this.selectedModuleId=this.probeSelect.value,this.soloProbeId=null,this.hoverProbeId=null,this.probeTitleSpan.textContent=this.selectedModuleId?this.selectedModuleId.toUpperCase():"NONE",this.onSelectModuleCallback(this.selectedModuleId)}),t.appendChild(f)}resetProbeHistory(t,e){this.lastProbeMeta=t,this.probeHistHead=0,this.phaseNeedsHardClear=!0;for(let i=0;i<this.probeHist.length;i++)this.probeHist[i].fill(0);this.fftPeakHold.fill(-110);const s=[];for(const i of t)s.includes(i.moduleId)||s.push(i.moduleId);this.probeSelect.innerHTML="";for(const i of s){const a=t.find(o=>o.moduleId===i),n=document.createElement("option");n.value=i,n.textContent=`${i} (${a.moduleKind})`,this.probeSelect.appendChild(n)}if(e&&s.includes(e))this.selectedModuleId=e;else{const i=["plate2d","transducer","poly4","tb303","triode12ax7","tubescreamer","fuzzface","pultec","comp1176","tapeecho","springrev","platerev","leslie","scannervib","junochorus","tr808bd","tr909bd","tr808metal","diodering","phase90","minimoogvco","ms20wdf","moog904a","vactrol","wavefolder","bbd","dusg","osc"];let a=s[0]??null;for(const n of i){const o=t.find(r=>r.moduleKind===n);if(o){a=o.moduleId;break}}this.selectedModuleId=a}this.selectedModuleId?(this.probeSelect.value=this.selectedModuleId,this.probeTitleSpan.textContent=this.selectedModuleId.toUpperCase()):this.probeTitleSpan.textContent="NONE"}setSelectedModule(t){this.lastProbeMeta.some(e=>e.moduleId===t)&&(this.selectedModuleId=t,this.soloProbeId=null,this.hoverProbeId=null,this.probeSelect.value=t,this.probeTitleSpan.textContent=t.toUpperCase())}getSelectedModule(){return this.selectedModuleId}update(t){const e=Math.min(t.probeCount,this.probeHist.length);for(let s=0;s<e;s++){const i=t.probes[s];this.probeHist[s][this.probeHistHead]=Number.isFinite(i)?i:0}this.probeHistHead=(this.probeHistHead+1)%lt,this.scopeHold?(this.holdLoaded||(this.holdScopeL.set(t.scopeL.subarray(0,Math.min(U,t.scopeL.length))),this.holdScopeR.set(t.scopeR.subarray(0,Math.min(U,t.scopeR.length))),this.holdSampleRate=t.sampleRate,this.holdLoaded=!0),this.drawPhaseCanvas(this.holdScopeL,this.holdScopeR,this.holdSampleRate)):this.drawPhaseCanvas(t.scopeL,t.scopeR,t.sampleRate),this.drawFftCanvas(t.scopeL,t.sampleRate),this.drawProbeCanvas(t)}sizeCanvas(t){const e=Math.min(2,window.devicePixelRatio||1),s=t.getBoundingClientRect(),i=Math.max(240,Math.round(s.width)),a=Math.max(120,Math.round(s.height)),n=Math.round(i*e),o=Math.round(a*e);(t.width!==n||t.height!==o)&&(t.width=n,t.height=o);const r=t.getContext("2d");return r?(r.setTransform(e,0,0,e,0,0),{ctx:r,w:i,h:a}):null}drawGraticule(t,e,s,i=8,a=4,n=1){t.fillStyle=n>=.99?"#111419":`rgba(17, 20, 25, ${n.toFixed(2)})`,t.fillRect(0,0,e,s),t.strokeStyle="rgba(236, 238, 242, 0.05)",t.lineWidth=1,t.beginPath();for(let o=1;o<i;o++){const r=o/i*e;t.moveTo(r,0),t.lineTo(r,s)}for(let o=1;o<a;o++){const r=o/a*s;t.moveTo(0,r),t.lineTo(e,r)}t.stroke(),t.strokeStyle="rgba(236, 238, 242, 0.1)",t.beginPath(),t.moveTo(0,s*.5),t.lineTo(e,s*.5),t.moveTo(e*.5,0),t.lineTo(e*.5,s),t.stroke()}drawPhaseCanvas(t,e,s=48e3){const i=this.sizeCanvas(this.phaseCanvas);if(!i)return;const{ctx:a,w:n,h:o}=i,r=!this.phaseNeedsHardClear&&this.phaseMode!=="waveform"&&!this.scopeHold&&!Me();this.drawGraticule(a,n,o,8,4,r?.34:1),this.phaseNeedsHardClear=!1;const l=t.length;let h=0,p=1/0,u=-1/0,b=0,d=0,f=0;const m=Math.min(2048,l),y=l-m;for(let k=y;k<l;k++)d+=t[k],f+=e[k];d/=m,f/=m;const g=this.phaseMode==="waveform"&&this.acCoupling?d:0,C=this.phaseMode==="waveform"&&this.acCoupling?f:0;for(let k=y;k<l;k++){const S=t[k]-g,M=Math.abs(S);M>h&&(h=M),S<p&&(p=S),S>u&&(u=S),b+=S*S}const w=Math.sqrt(b/m),L=w>1e-6?20*Math.log10(w):-120,A=Number.isFinite(u-p)?u-p:0,R=Math.max(.25,h*1.15);if(this.phaseMode==="waveform"){const k=fe[this.timeDivIdx],S=Gt[this.voltsDivIdx],M=S.volts>0?S.volts*2:R,D=k.sec*8,H=Math.max(8,Math.min(l-4,D*s));let q=Math.max(1,l-H-2),X=!1;const _=this.trigLevel;if(this.trigSlope!=="free"){const E=Math.max(2,Math.floor(l-H-2)),G=Math.max(1,Math.min(E-1,Math.floor(E-Math.min(1800,l*.45))));for(let F=E;F>=G;F--){const O=t[F-1]-g,K=t[F]-g;if(this.trigSlope==="rise"?O<=_&&K>_:O>=_&&K<_){const nt=K-O,bt=Math.abs(nt)>1e-12?(_-O)/nt:0;q=F-1+Math.max(0,Math.min(1,bt)),X=!0;break}}}let Y=0,Q=-1,et=-1,it=0;const gt=Math.max(.015,h*.08);let pt=!1;for(let E=y+1;E<l;E++){const G=t[E-1]-g,F=t[E]-g;if(F<_-gt&&(pt=!0),pt&&G<=_&&F>_){const O=F-G,K=E-1+(Math.abs(O)>1e-12?(_-G)/O:0);Q<0?Q=K:it++,et=K,pt=!1}}it>=1&&et>Q&&(Y=it*s/(et-Q));const V=(E,G,F)=>{const O=Math.max(0,Math.min(l-2,Math.floor(F))),K=F-O;return E[O]+(E[O+1]-E[O])*K-G};if(this.trigSlope!=="free"){const E=o*.5-_/M*(o*.42);E>=2&&E<=o-2&&(a.save(),a.strokeStyle=this.draggingTrig?"rgba(217, 119, 87, 0.72)":"rgba(217, 119, 87, 0.32)",a.lineWidth=1,a.setLineDash([4,4]),a.beginPath(),a.moveTo(0,E),a.lineTo(n,E),a.stroke(),a.setLineDash([]),a.fillStyle="#d97757",a.beginPath(),a.moveTo(n,E),a.lineTo(n-6,E-3.5),a.lineTo(n-6,E+3.5),a.closePath(),a.fill(),a.restore())}const at=Math.min(Math.max(160,Math.round(n)),720);a.strokeStyle="rgba(217, 119, 87, 0.58)",a.lineWidth=1.25,a.beginPath();for(let E=0;E<at;E++){const G=E/(at-1)*n,F=V(e,C,q+E/(at-1)*H),O=o*.5-F/M*(o*.42);E===0?a.moveTo(G,O):a.lineTo(G,O)}a.stroke(),a.strokeStyle="#7ea89a",a.lineWidth=1.65,a.beginPath();for(let E=0;E<at;E++){const G=E/(at-1)*n,F=V(t,g,q+E/(at-1)*H),O=o*.5-F/M*(o*.42);E===0?a.moveTo(G,O):a.lineTo(G,O)}if(a.stroke(),!this.draggingTrig&&this.scopeHoverX!==null&&this.scopeHoverX>=2&&this.scopeHoverX<=n-2){const E=this.scopeHoverX,G=E/n,F=q+G*H,O=V(t,g,F),K=V(e,C,F),Lt=o*.5-O/M*(o*.42),nt=G*D*1e3;a.save(),a.strokeStyle="rgba(236, 238, 242, 0.28)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(E,0),a.lineTo(E,o),a.stroke(),a.setLineDash([]),a.fillStyle="#7ea89a",a.beginPath(),a.arc(E,Math.max(3,Math.min(o-3,Lt)),3,0,Math.PI*2),a.fill();const bt=`${nt<1?`${(nt*1e3).toFixed(0)}µs`:`${nt.toFixed(2)}ms`} · L ${O>=0?"+":""}${O.toFixed(3)} · R ${K>=0?"+":""}${K.toFixed(3)}`;a.font="600 9px SF Mono, Menlo, monospace";const yt=a.measureText(bt).width+10,It=E+yt+10>n?E-yt-8:E+8,Et=Math.max(24,Math.min(o-22,Lt-18));a.fillStyle="rgba(10, 14, 17, 0.9)",a.strokeStyle="rgba(126, 168, 154, 0.55)",a.lineWidth=1,a.fillRect(It,Et,yt,15),a.strokeRect(It,Et,yt,15),a.fillStyle="#eceef2",a.fillText(bt,It+5,Et+10.5),a.restore()}const De=Y>=15&&Y<=2e4?Y>=1e3?`${(Y/1e3).toFixed(2)}kHz`:`${Y.toFixed(1)}Hz`:"— Hz",Be=this.scopeHold?"HOLD":this.trigSlope==="free"?"FREE":X?"LOCK":"AUTO";this.phaseTag.textContent=`${De} · Vpp ${A.toFixed(2)} · ${k.label}/d · ${Be}`;return}this.phaseTag.textContent=`${this.scopeHold?"HOLD · ":""}PK ${h.toFixed(3)} · RMS ${L>-100?L.toFixed(1):"-∞"} dB`;const T=Math.min(1400,l-2),N=l-T;let P=.05;if(this.phaseMode==="attractor")for(let k=N+1;k<l;k++){const S=Math.abs(t[k]-t[k-1]);S>P&&(P=S)}const v=this.phaseMode==="attractor"?P*1.18:R,x=Math.min(n*.43,o*.45*1.45),I=o*.43;a.strokeStyle="rgba(126, 168, 154, 0.3)",a.lineWidth=3.2,a.beginPath();for(let k=N+1;k<l;k++){const S=t[k]/R,M=(this.phaseMode==="attractor"?t[k]-t[k-1]:e[k])/v,D=n*.5+S*x,H=o*.5-M*I;k===N+1?a.moveTo(D,H):a.lineTo(D,H)}a.stroke(),a.strokeStyle="#a9c9bd",a.lineWidth=1.15,a.beginPath();for(let k=N+1;k<l;k++){const S=t[k]/R,M=(this.phaseMode==="attractor"?t[k]-t[k-1]:e[k])/v,D=n*.5+S*x,H=o*.5-M*I;k===N+1?a.moveTo(D,H):a.lineTo(D,H)}a.stroke()}drawFftCanvas(t,e){const s=this.sizeCanvas(this.fftCanvas);if(!s)return;const{ctx:i,w:a,h:n}=s;this.drawGraticule(i,a,n,8,4);const o=t.length,r=Math.min(U,o),l=o-r;let h=0;for(let x=0;x<U;x++){const I=x<r?t[l+x]:0,k=this.fftWindow[x];h+=k,this.fftRe[x]=I*k,this.fftIm[x]=0}Ne(this.fftRe,this.fftIm);const p=U/2,u=2/h;let b=1,d=-120,f=0,m=0;const y=e/U;for(let x=1;x<p;x++){const I=Math.hypot(this.fftRe[x],this.fftIm[x])*u,k=Math.max(-105,20*Math.log10(I+1e-12));this.fftMagDb[x]=k,k>this.fftPeakHold[x]?this.fftPeakHold[x]=k:this.fftPeakHold[x]=Math.max(k,this.fftPeakHold[x]-.35),k>d&&(d=k,b=x);const S=x*y;S>=14e3&&S<=2e4&&(f+=k,m++)}const g=25,C=e*.5,w=Math.log10(g),L=Math.log10(C)-w,A=x=>(Math.log10(Math.max(g,x))-w)/L*a,R=x=>n-(Math.max(-100,Math.min(0,x))+100)/100*(n-14)-8;i.strokeStyle="rgba(217, 119, 87, 0.45)",i.lineWidth=1,i.beginPath();let T=!1;for(let x=2;x<p;x++){const I=x*y;if(I<g)continue;const k=A(I),S=R(this.fftPeakHold[x]);T?i.lineTo(k,S):(i.moveTo(k,S),T=!0)}i.stroke(),i.beginPath(),T=!1;let N=0;for(let x=2;x<p;x++){const I=x*y;if(I<g)continue;const k=A(I),S=R(this.fftMagDb[x]);T?i.lineTo(k,S):(i.moveTo(k,n),i.lineTo(k,S),T=!0),N=k}T&&(i.lineTo(N,n),i.closePath(),i.fillStyle="rgba(126, 168, 154, 0.14)",i.fill()),i.strokeStyle="#7ea89a",i.lineWidth=1.4,i.beginPath(),T=!1;for(let x=2;x<p;x++){const I=x*y;if(I<g)continue;const k=A(I),S=R(this.fftMagDb[x]);T?i.lineTo(k,S):(i.moveTo(k,S),T=!0)}i.stroke(),i.font="9px SF Mono, Menlo, monospace";for(const x of[50,200,1e3,5e3,15e3]){const I=x>=1e3?`${x/1e3}k`:`${x}`,k=i.measureText(I).width,S=Math.min(a-k-4,A(x)+2);i.fillStyle="rgba(17, 20, 25, 0.78)",i.fillRect(S-2,n-12,k+4,11),i.fillStyle="rgba(176, 194, 208, 0.85)",i.fillText(I,S,n-3)}if(this.fftHoverX!==null&&this.fftHoverX>=2&&this.fftHoverX<=a-2){const x=this.fftHoverX,I=Math.pow(10,w+x/a*L),k=Math.max(2,Math.min(p-1,Math.round(I/y))),S=this.fftMagDb[k],M=R(S);i.save(),i.strokeStyle="rgba(217, 119, 87, 0.48)",i.lineWidth=1,i.setLineDash([3,3]),i.beginPath(),i.moveTo(x,0),i.lineTo(x,n),i.moveTo(0,M),i.lineTo(a,M),i.stroke(),i.setLineDash([]),i.fillStyle="#d97757",i.beginPath(),i.arc(x,M,3.2,0,Math.PI*2),i.fill();const D=`${I<1e3?`${I.toFixed(0)} Hz`:`${(I/1e3).toFixed(2)} kHz`} · ${S.toFixed(1)} dB`;i.font="600 9.5px SF Mono, Menlo, monospace";const H=i.measureText(D).width+10,q=x+H+10>a?x-H-8:x+8,X=Math.max(24,Math.min(n-24,M-18));i.fillStyle="rgba(10, 14, 17, 0.9)",i.strokeStyle="rgba(217, 119, 87, 0.55)",i.lineWidth=1,i.fillRect(q,X,H,16),i.strokeRect(q,X,H,16),i.fillStyle="#eceef2",i.fillText(D,q+5,X+11),i.restore()}const P=b*y,v=m>0?f/m:-100;this.fftTag.textContent=`PK ${P<1e3?P.toFixed(0)+" Hz":(P/1e3).toFixed(2)+" kHz"} (${d.toFixed(1)} dB) · 14–20k ${v.toFixed(0)} dB`}drawProbeCanvas(t){const e=this.sizeCanvas(this.probeCanvas);if(!e)return;const{ctx:s,w:i,h:a}=e;this.drawGraticule(s,i,a,8,4);const n=t.probeMeta.filter(r=>r.moduleId===this.selectedModuleId).slice(0,4);if(this.syncProbeReadouts(n,t),n.length===0)return;const o=this.hoverProbeId??this.soloProbeId;n.forEach((r,l)=>{const h=this.probeHist[r.index];if(!h)return;let p=1/0,u=-1/0;for(let w=0;w<lt;w++){const L=h[w];L<p&&(p=L),L>u&&(u=L)}const d=Math.max(1e-6,u-p)*.18,f=p-d,m=u+d,y=o===null||o===r.probeId,g=mt[l%mt.length];s.save(),s.globalAlpha=y?1:.2,s.strokeStyle=g,s.lineWidth=o===r.probeId?2.2:1.55,s.beginPath();let C=a*.5;for(let w=0;w<lt;w++){const L=(this.probeHistHead+w)%lt,A=h[L],R=w/(lt-1)*i,T=(A-f)/(m-f),N=a-10-T*(a-20);w===0?s.moveTo(R,N):s.lineTo(R,N),C=N}s.stroke(),s.fillStyle=g,s.beginPath(),s.arc(i-2.5,C,o===r.probeId?3.1:2.3,0,Math.PI*2),s.fill(),s.restore()})}toggleSoloProbe(t){this.soloProbeId=this.soloProbeId===t?null:t,this.syncCrossProbeClasses()}setHoverProbe(t){this.hoverProbeId=t,this.syncCrossProbeClasses()}syncCrossProbeClasses(){for(const t of this.schemHotspots)t.el.classList.toggle("is-solo",this.soloProbeId===t.probeId),t.el.classList.toggle("is-hover",this.hoverProbeId===t.probeId);for(const t of this.probePillEls){const e=t.dataset.probeId??"";t.classList.toggle("is-solo",this.soloProbeId===e),t.classList.toggle("is-hover",this.hoverProbeId===e)}}syncProbeReadouts(t,e){const s=t.map(a=>a.key).join("|");if(s!==this.probeReadoutKey){if(this.probeReadoutKey=s,this.probeValueEls=[],this.probePillEls=[],this.probeReadoutStrip.textContent="",t.length===0){const a=document.createElement("span");a.className="probe-empty",a.textContent="Click PRB on a patchbay module to inspect its internal circuit nodes.",this.probeReadoutStrip.appendChild(a)}t.forEach((a,n)=>{const o=J[a.moduleKind]?.probes.find(b=>b.id===a.probeId),r=document.createElement("button");r.type="button",r.className="probe-pill",r.dataset.probeId=a.probeId,r.title=`${a.label} (${a.unit}) — click to solo trace`;const l=document.createElement("span");l.className="probe-swatch",l.style.background=mt[n%mt.length];const h=document.createElement("span");h.className="probe-label",h.textContent=o?.label??a.probeId;const p=document.createElement("strong");p.className="probe-value";const u=document.createElement("span");u.className="probe-unit",u.textContent=a.unit,r.append(l,h,p,u),r.addEventListener("click",()=>this.toggleSoloProbe(a.probeId)),r.addEventListener("pointerenter",()=>this.setHoverProbe(a.probeId)),r.addEventListener("pointerleave",()=>this.setHoverProbe(null)),this.probeReadoutStrip.appendChild(r),this.probeValueEls.push(p),this.probePillEls.push(r)})}const i=t.length>0?`${t[0].moduleId}:${t[0].moduleKind}:${s}`:"";if(i!==this.schemKey){if(this.schemKey=i,this.schemHotspots=[],t.length>0){const a=Js(this.schemHost,t[0].moduleKind,t,mt,n=>this.toggleSoloProbe(n),n=>this.setHoverProbe(n));this.schemHotspots=a.hotspots}else this.schemHost.textContent="";this.syncCrossProbeClasses()}for(let a=0;a<t.length;a++){const n=t[a],o=e.probes[n.index]??0,r=this.probeValueEls[a];r&&(r.textContent=Zs(o))}if(this.schemVisible&&this.schemHotspots.length>0)for(let a=0;a<this.schemHotspots.length;a++){const n=this.schemHotspots[a];if(!n.valEl)continue;const o=t.find(r=>r.probeId===n.probeId);o&&(n.valEl.textContent=ti(e.probes[o.index]??0,o.unit))}}}const si="mastering-tutorial-glue",ge="kirchhoff_playback_target_v1",be="kirchhoff_binaural_mode_v1",Vt=[{id:"off",label:"Off",hint:"Plain stereo"},{id:"headphones",label:"Crossfeed",hint:"Studio headphone crossfeed (0.28 ms ITD, 700 Hz head shadow)"},{id:"wide-3d",label:"Wide 3D",hint:"Out-of-head 3D headphone stage with room depth"}],ii=.35;function st(c){return{...c,modules:c.modules.map(t=>({...t,params:{...t.params}})),cables:c.cables.map(t=>({...t}))}}function wt(c){const t=st(c);for(let e=0;e<t.modules.length;e++){const s=t.modules[e];s.x!==void 0&&Number.isFinite(s.x)&&(s.x=Math.round(40+(s.x-40)*1.18)),s.y!==void 0&&Number.isFinite(s.y)&&(s.y=Math.round(48+(s.y-40)*1.44))}return t}function ye(c){try{return typeof localStorage<"u"?localStorage.getItem(c):null}catch{return null}}function xe(c,t){try{typeof localStorage<"u"&&localStorage.setItem(c,t)}catch{}}function ve(c){return Vt.some(t=>t.id===c)}class ai{host=new ks;sceneStore=new hs;currentPatch;activeSceneId;activeSceneName;sceneDirty;audioBtn;tourBtn;brandLed;metricWasm;metricCompile;metricCpu;metricNewton;metricScc;metricSwaps;swapChip;teammateChip;teammateLabel;teammateDot;teammateBiasEl;teammateAddBtn;teammatePulse=null;teammateJam=0;aiTaps=[];history=new Qe;historyBusy=!1;linkHashShown=!1;toastEl;dockTabs=new Map;dockPanes=new Map;dockTabIndicator;tour=null;tourPromise=null;tourRunning=!1;sceneBar;ioPanel;recorderView;teammate;patchbay;scopes;activeDockTab="physics";physicsLab=null;compilerView=null;inverseDeck=null;jsonView=null;latestCompiled=null;pendingLabBank=null;pendingPhysicsAutoSelect=!1;labsModulePromise=null;inverseModulePromise=null;dockTabPromises=new Map;lastHudUpdate=0;toastTimer=0;swapFlashTimer=0;constructor(t){const e=this.resolveInitialScene();this.currentPatch=e.patch,this.activeSceneId=e.id,this.activeSceneName=e.name,this.sceneDirty=e.dirty;const s=ye(ge),i=Yt(s)?s:"flat",a=ye(be),n=ve(a)?a:"off";this.host.setPlaybackTarget(i),this.host.setBinauralMode(n);const o=Xt().map(d=>`<option value="${d.id}" title="${d.hint}">${d.label}</option>`).join(""),r=Vt.map(d=>`<option value="${d.id}" title="${d.hint}">${d.label}</option>`).join("");t.innerHTML=`
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
    `,this.audioBtn=t.querySelector("[data-audio-btn]"),this.tourBtn=t.querySelector("[data-tour-btn]"),this.brandLed=t.querySelector("[data-brand-led]"),this.metricWasm=t.querySelector("[data-m-wasm]"),this.metricCompile=t.querySelector("[data-m-compile]"),this.metricCpu=t.querySelector("[data-m-cpu]"),this.metricNewton=t.querySelector("[data-m-newton]"),this.metricScc=t.querySelector("[data-m-scc]"),this.metricSwaps=t.querySelector("[data-m-swaps]"),this.swapChip=t.querySelector("[data-swap-chip]"),this.teammateChip=t.querySelector("[data-teammate-chip]"),this.teammateLabel=t.querySelector("[data-teammate-label]"),this.teammateDot=t.querySelector("[data-teammate-dot]"),this.teammateBiasEl=t.querySelector("[data-teammate-bias]"),this.teammateAddBtn=t.querySelector("[data-teammate-add]"),this.teammateAddBtn.addEventListener("click",()=>void this.addAiTeammate()),this.toastEl=t.querySelector("[data-studio-toast]"),this.sceneBar=new Ks(t.querySelector("[data-scene-slot]"),this.sceneStore,{getPresets:()=>ut,getCurrentPatch:()=>this.currentPatch,onLoadScene:(d,f,m)=>{this.loadScene(d,f,d.name,m==="preset")},onSceneSaved:d=>{this.activeSceneId=d.id,this.activeSceneName=d.name,this.sceneDirty=!1,this.currentPatch.name=d.name,this.jsonView?.setPatch(this.currentPatch)},onCopyLink:()=>{this.copyShareLink()},onToast:d=>this.showToast(d)}),this.sceneBar.setActiveScene(this.activeSceneId,this.activeSceneName,this.sceneDirty),this.teammate=new gs({getPatch:()=>this.currentPatch,applyJamBias:(d,f)=>{this.host.setParam(d,"jamBias",f),this.patchbay.reflectParamValue(d,"jamBias",f,!1)},onStatus:d=>this.renderTeammate(d)}),this.audioBtn.addEventListener("click",async()=>{this.host.isAudioRunning?(await this.host.stopAudio(),this.showToast("Audio paused · scopes keep running on the local preview")):(await this.host.startAudio(),this.showToast("Audio live at 48 kHz")),this.syncAudioStatus()});const l=t.querySelector("[data-master-gain]"),h=t.querySelector("[data-gain-val]");Tt(l),l.addEventListener("input",()=>{const d=parseFloat(l.value);h.textContent=`${Math.round(d*100)}%`,Tt(l),this.host.setMasterGain(d)}),Se(l,()=>{l.value="0.85",h.textContent="85%",Tt(l),this.host.setMasterGain(.85),this.showToast("Master output reset to 85%")});const p=t.querySelector("[data-monitor-select]");p.value=i,p.addEventListener("change",()=>{const d=p.value;if(!Yt(d))return;this.host.setPlaybackTarget(d),xe(ge,d);const f=Xt().find(m=>m.id===d);f&&this.showToast(`Monitor · ${f.label} — ${f.hint}`)});const u=t.querySelector("[data-binaural-select]");u.value=n,u.addEventListener("change",()=>{const d=u.value;if(!ve(d))return;this.host.setBinauralMode(d),xe(be,d);const f=Vt.find(m=>m.id===d);f&&this.showToast(`3D · ${f.label} — ${f.hint}`)}),t.querySelector("[data-reset-btn]").addEventListener("click",()=>{this.host.resetPatchState(),this.showToast("All circuit states and capacitors zeroed")}),this.scopes=new ei(t.querySelector("[data-scopes-slot]"),d=>this.patchbay.setSelectedProbeModule(d)),this.patchbay=new Ge(t.querySelector("[data-patchbay-slot]"),{onGraphChange:(d,f)=>{this.recordHistory(),this.applyPatch(d,f),this.markSceneDirty()},onParamChange:(d,f,m)=>{this.recordHistory(`param:${d}:${f}`),this.host.setParam(d,f,m);const y=this.currentPatch.modules.find(g=>g.id===d);if(y){const g=W(y,f);y.params[f]=m,this.teammate.notifyParamEdit(d,f,g,m),this.physicsLab?.syncFromPatch(this.currentPatch,!1)}this.markSceneDirty()},onParamBatch:(d,f)=>{this.recordHistory();const m=this.currentPatch.modules.find(y=>y.id===d);for(const[y,g]of Object.entries(f))this.host.setParam(d,y,g),m&&(m.params[y]=g);this.markSceneDirty()},onCableGainChange:(d,f)=>{this.recordHistory(`cable:${d}`),this.host.setParam("cable",d,f);const m=this.currentPatch.cables.find(y=>y.id===d);m&&(this.teammate.notifyCableEdit(m.gain,f),m.gain=f),this.markSceneDirty()},onSelectProbeModule:d=>{this.scopes.setSelectedModule(d),this.patchbay.setSelectedProbeModule(d)},onLayoutChange:d=>{this.recordHistory("layout");for(const f of this.currentPatch.modules){const m=d[f.id];m&&(f.x=m.x,f.y=m.y)}this.jsonView?.setPatch(this.currentPatch),this.markSceneDirty()}}),this.ioPanel=new Hs(this.host,{getPatch:()=>this.currentPatch,onParamChange:(d,f,m,y)=>{this.applyExternalParam(d,f,m,y)}}),t.querySelector("[data-io-slot]").appendChild(this.ioPanel.createStatusButton()),this.recorderView=new _s(t.querySelector("[data-rec-top-slot]"),t.querySelector("[data-recorder-slot]"),this.host,{getSceneName:()=>this.activeSceneName||this.currentPatch.name||"kirchhoff",onToast:(d,f)=>this.showToast(d,f),onSyncAudioStatus:()=>this.syncAudioStatus()});const b=t.querySelector("[data-dock-tab-list]");this.dockTabIndicator=new we(b,"dock-tab-rail","underline"),t.querySelectorAll("[data-tab]").forEach(d=>{const f=d.dataset.tab;this.dockTabs.set(f,d),d.addEventListener("click",()=>this.switchTab(f))}),t.querySelectorAll("[data-pane]").forEach(d=>{this.dockPanes.set(d.dataset.pane,d)}),this.ensureDockTab("physics"),this.tourBtn.addEventListener("click",()=>void this.toggleTour()),window.addEventListener("keydown",d=>{const f=document.activeElement,m=(f?.tagName||"").toLowerCase(),y=m==="input"?(f.type||"text").toLowerCase():"",g=m==="textarea"||!!f?.isContentEditable||m==="input"&&!["range","checkbox","radio","button","file"].includes(y);if((d.metaKey||d.ctrlKey)&&!d.altKey){const C=d.key.toLowerCase();if(g||C!=="z"&&C!=="y")return;d.preventDefault(),C==="y"||d.shiftKey?this.redo():this.undo();return}d.altKey||g||m==="select"||(d.key==="t"||d.key==="T")&&(d.preventDefault(),this.toggleTour())}),window.addEventListener("hashchange",()=>{this.linkHashShown=!1,this.importSceneFromHash()}),this.host.onTelemetry(d=>this.handleTelemetry(d)),this.host.onSwap((d,f)=>{this.metricSwaps.textContent=String(f),this.swapChip.classList.remove("swap-flash"),this.swapChip.offsetWidth,this.swapChip.classList.add("swap-flash"),clearTimeout(this.swapFlashTimer),this.swapFlashTimer=window.setTimeout(()=>this.swapChip.classList.remove("swap-flash"),420),f>1&&this.showToast(`Hot-swapped ${(d.wasmByteLength/1024).toFixed(1)} KB .wasm in ${d.compileMs.toFixed(1)} ms · 64-sample crossfade`)}),window.addEventListener("pagehide",()=>{this.sceneDirty&&this.sceneStore.saveDraftImmediate(this.currentPatch,this.activeSceneId,!0)}),window.__KIRCHHOFF_DEBUG__={host:this.host,sceneStore:this.sceneStore,ioPanel:this.ioPanel,loadPreset:d=>this.loadPresetById(d),getScene:()=>({id:this.activeSceneId,name:this.activeSceneName,dirty:this.sceneDirty,modules:this.currentPatch.modules.length,cables:this.currentPatch.cables.length}),getPatch:()=>st(this.currentPatch),getTeammate:()=>this.teammate.getStatus(),getHistory:()=>({undo:this.history.undoDepth,redo:this.history.redoDepth}),undo:()=>this.undo(),redo:()=>this.redo(),copyLink:()=>this.copyShareLink(),encodeLink:()=>ee(this.currentPatch),getOutputStages:()=>this.host.getOutputStageStatus(),setParamLive:(d,f,m)=>{this.host.setParam(d,f,m),this.patchbay.reflectParamValue(d,f,m,!1)},rampParam:(d,f,m,y=5)=>{this.host.rampParam(d,f,m,y),d!=="cable"&&this.patchbay.reflectParamValue(d,f,m,!1)},getParamLive:(d,f)=>this.host.getParam(d,f),startAudio:async()=>(await this.host.startAudio(),this.syncAudioStatus(),{audioRunning:this.host.isAudioRunning,workletReady:this.host.isWorkletReady}),startTour:()=>(this.ensureTour().then(d=>d.start()),{running:!0}),stopTour:()=>(this.tour?.stop(),{running:this.tourRunning}),setLabBank:d=>{this.pendingLabBank=d,this.switchTab("physics"),this.physicsLab&&(this.physicsLab.setBank(d),this.pendingLabBank=null)},recorder:{open:(d=!0)=>this.recorderView.setOpen(d),start:()=>this.recorderView.startRecording(),stop:()=>this.recorderView.stopRecording(),status:()=>this.recorderView.getStatus()}},requestAnimationFrame(()=>{this.dockTabIndicator.setActive(this.dockTabs.get("physics")??null,!0)}),this.applyPatch(this.currentPatch,"init").then(()=>this.importSceneFromHash())}resolveInitialScene(){const t=n=>{if(!n)return null;const o=this.sceneStore.listUserScenes().find(l=>l.id===n);if(o)return{patch:o.patch,name:o.name,builtIn:!1};const r=ut.find(l=>l.id===n);return r?{patch:r,name:r.name,builtIn:!0}:null},e=this.sceneStore.loadDraft();if(e&&e.dirty){const n=t(e.basePresetId);return{patch:st(e.patch),id:n?e.basePresetId:"",name:n?.name??e.patch.name,dirty:!0}}const s=this.sceneStore.getRememberedSceneId(),i=t(s);if(i&&s)return{patch:i.builtIn?wt(i.patch):st(i.patch),id:s,name:i.name,dirty:!1};const a=ut.find(n=>n.id===si)??ut[0];return{patch:wt(a),id:a.id,name:a.name,dirty:!1}}async loadScene(t,e,s,i){this.recordHistory(),this.dropLinkHash(),this.activeSceneId=e,this.activeSceneName=s,this.sceneDirty=!1,this.sceneBar.setActiveScene(e,s,!1),this.teammate.reset();const a=i?wt(t):st(t);await this.applyPatch(a,i?`preset:${e}`:`scene:${e}`),this.sceneStore.saveDraftImmediate(this.currentPatch,e,!1)}async loadPresetById(t){const e=ut.find(s=>s.id===t);e&&await this.loadScene(e,e.id,e.name,!0)}markSceneDirty(){this.dropLinkHash(),this.sceneDirty||(this.sceneDirty=!0,this.sceneBar.setDirty(!0)),this.sceneStore.scheduleDraftSave(this.currentPatch,this.activeSceneId,!0)}applyExternalParam(t,e,s,i){const a=this.currentPatch.modules.find(o=>o.id===t);if(!a)return;const n=i==="midi-cc"||i==="io-panel";if(this.host.setParam(t,e,s),this.patchbay.reflectParamValue(t,e,s,n),n){this.recordHistory(`param:${t}:${e}`);const o=W(a,e);a.params[e]=s,this.teammate.notifyParamEdit(t,e,o,s),this.markSceneDirty()}}renderTeammate(t){const e=t.neuralCount>0,s=e?t.jamBias:0;this.teammateJam=s,this.teammateChip.classList.toggle("absent",!e),this.teammateChip.classList.toggle("active",e&&t.active),this.teammateLabel.textContent=e?t.modeLabel:"No AI node here",this.teammateAddBtn.disabled=e,this.teammateBiasEl.textContent=e?`${s>.004?"+":s<-.004?"−":" "}${Math.abs(s).toFixed(2)}`:"—",this.pushAiLevels()}pushAiLevels(){const t=Math.abs(this.teammateJam),e=t>.02;for(const s of this.aiTaps){const i=Math.round(Math.min(1,Math.max(t,s.lastAdapt*ii))*20)/20;(i!==s.lastLevel||e!==s.lastTouching)&&(s.lastLevel=i,s.lastTouching=e,this.patchbay.setAiActivity(s.moduleId,i,e))}}trackAiActivity(t){if(this.aiTaps.length===0||t.patchId!==this.currentPatch.id)return;let e=!1;for(const s of this.aiTaps){if(s.stepIndex>=t.probeCount||s.adaptIndex>=t.probeCount)continue;const i=t.probes[s.stepIndex];i!==s.lastStep&&(s.lastStep===s.lastStep&&(e=!0),s.lastStep=i),s.lastAdapt=t.probes[s.adaptIndex]}this.pushAiLevels(),e&&this.pulseTeammateLed()}pulseTeammateLed(){if(!Me()){if(!this.teammatePulse){this.teammatePulse=this.teammateDot.animate([{transform:"scale(1.75)",backgroundColor:"#f1dc93",boxShadow:"0 0 9px 2px rgba(232, 204, 116, 0.6)"},{transform:"scale(1)"}],{duration:260,easing:"cubic-bezier(0.22, 1, 0.36, 1)"});return}this.teammatePulse.cancel(),this.teammatePulse.play()}}historyState(){return{patch:this.currentPatch,sceneId:this.activeSceneId,sceneName:this.activeSceneName,dirty:this.sceneDirty}}recordHistory(t=""){this.historyBusy||this.history.record(this.historyState(),t)}undo(){return this.stepHistory(-1)}redo(){return this.stepHistory(1)}async stepHistory(t){if(this.historyBusy)return!1;const e=this.historyState(),s=t<0?this.history.undo(e):this.history.redo(e);if(!s)return!1;this.historyBusy=!0;try{await this.restoreHistoryState(s)}finally{this.historyBusy=!1}return!0}async restoreHistoryState(t){const e=this.currentPatch;this.activeSceneId=t.sceneId,this.activeSceneName=t.sceneName,this.sceneDirty=t.dirty,this.sceneBar.setActiveScene(t.sceneId,t.sceneName,t.dirty),this.dropLinkHash();const s=this.host.lastCompiled;if(s&&e.id===t.patch.id&&Ye(e,t.patch)){for(let i=0;i<t.patch.modules.length;i++){const a=t.patch.modules[i],n=e.modules[i];for(const o of J[a.kind].params){const r=W(a,o.id);r!==W(n,o.id)&&this.host.setParam(a.id,o.id,r)}}for(let i=0;i<t.patch.cables.length;i++){const a=t.patch.cables[i];a.gain!==e.cables[i].gain&&this.host.setParam("cable",a.id,a.gain)}this.currentPatch=st(t.patch),this.patchbay.setPatch(this.currentPatch,s,this.scopes.getSelectedModule(),{fitToView:!1,animateFit:!1}),this.jsonView?.setPatch(this.currentPatch)}else await this.applyPatch(t.patch,"history");this.sceneStore.scheduleDraftSave(this.currentPatch,this.activeSceneId,this.sceneDirty)}dropLinkHash(){this.linkHashShown&&(se(),this.linkHashShown=!1)}async copyShareLink(){const t=await ee(this.currentPatch),e=ms(t);fs(t),this.linkHashShown=!0;const s=(e.length/1024).toFixed(1);try{await navigator.clipboard.writeText(e),this.showToast(`Scene link copied · ${s} KB · also in the address bar`)}catch{this.showToast(`Scene link is in the address bar · ${s} KB (clipboard was not available)`)}}async importSceneFromHash(){if(this.linkHashShown||!Ie(window.location.hash))return;const t=await us(window.location.hash);if(se(),!t)return;if(!t.ok){this.showToast(`Scene link not loaded: ${t.error}`);return}const e=t.patch.name||"Linked scene";this.recordHistory(),this.activeSceneId="",this.activeSceneName=e,this.sceneDirty=!1,this.sceneBar.setActiveScene("",e,!1),this.teammate.reset(),await this.applyPatch({...t.patch,name:e},"scene:link"),this.markSceneDirty(),this.showToast(`Opened linked scene: ${e}`)}loadLabsModule(){return this.labsModulePromise||(this.labsModulePromise=xt(()=>import("./labs-smPrg-DA.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),this.labsModulePromise}loadInverseModules(){return this.inverseModulePromise||(this.inverseModulePromise=Promise.all([xt(()=>import("./inverseDeck-CKZb_AWM.js"),__vite__mapDeps([5,6,4,2,1,3]),import.meta.url),xt(()=>import("./features-BkOsVByi.js"),__vite__mapDeps([6,4,2,1,3]),import.meta.url)])),this.inverseModulePromise}ensureDockTab(t){const e=this.dockTabPromises.get(t);if(e)return e;const s=this.dockPanes.get(t);if(!s)return Promise.resolve();s.hasChildNodes()||(s.innerHTML='<div class="dock-loading mono">Loading workbench module…</div>');const i=(async()=>{if(t==="physics"){const{PhysicsLabView:a}=await this.loadLabsModule();if(this.physicsLab)return;const n=new a(s);this.physicsLab=n,n.setTabVisible(this.activeDockTab==="physics"),this.latestCompiled&&n.setCompiled(this.latestCompiled),n.syncFromPatch(this.currentPatch,this.pendingPhysicsAutoSelect),this.pendingPhysicsAutoSelect=!1,this.pendingLabBank&&(n.setBank(this.pendingLabBank),this.pendingLabBank=null)}else if(t==="compiler"){const{CompilerInspectorView:a}=await this.loadLabsModule();if(this.compilerView)return;const n=new a(s);this.compilerView=n,this.latestCompiled&&n.setCompiled(this.latestCompiled)}else if(t==="json"){const{PatchJsonView:a}=await this.loadLabsModule();if(this.jsonView)return;const n=new a(s,o=>{this.recordHistory(),this.applyPatch(o,"json-edit"),this.markSceneDirty(),this.showToast("Hot-swapped the edited patch graph")});this.jsonView=n,n.setPatch(this.currentPatch)}else if(t==="inverse"){const[{InverseDeckView:a},{INVERSE_CLIP_SAMPLES:n}]=await this.loadInverseModules();if(this.inverseDeck)return;const o=new a(s,(r,l)=>{const h=`Discovered · ${l}`;this.recordHistory(),this.activeSceneId="",this.activeSceneName=h,this.sceneDirty=!1,this.sceneBar.setActiveScene("",h,!1),this.teammate.reset(),this.applyPatch({...wt(r),name:h},`inverse:${l}`),this.markSceneDirty(),this.showToast(`Loaded discovered circuit: ${l}`)},()=>{const r=this.host.renderCurrentPatchOffline(n);return r?r.left:null});this.inverseDeck=o,o.setTabActive(this.activeDockTab==="inverse")}})().catch(a=>{this.dockTabPromises.delete(t),s.innerHTML=`<div class="dock-loading mono">Failed to load workbench module: ${a.message}</div>`});return this.dockTabPromises.set(t,i),i}switchTab(t){this.activeDockTab=t,this.dockTabs.forEach((e,s)=>{const i=s===t;e.classList.toggle("active",i),e.setAttribute("aria-selected",i?"true":"false")}),this.dockPanes.forEach((e,s)=>{const i=s===t;e.classList.toggle("active",i)}),this.dockTabIndicator.setActive(this.dockTabs.get(t)??null),this.inverseDeck?.setTabActive(t==="inverse"),this.physicsLab?.setTabVisible(t==="physics"),t==="physics"&&this.physicsLab&&this.physicsLab.refreshAll(),t==="json"&&this.jsonView&&this.jsonView.setPatch(this.currentPatch),this.ensureDockTab(t)}ensureTour(){return this.tourPromise||(this.tourPromise=xt(async()=>{const{StageshowTour:t}=await import("./stageshow-CiHySH72.js");return{StageshowTour:t}},__vite__mapDeps([7,3,1,2]),import.meta.url).then(({StageshowTour:t})=>{const e=new t({loadPreset:async s=>{await this.loadPresetById(s)},switchTab:s=>{this.switchTab(s)},setActiveFlag:s=>{this.tourRunning=s,this.tourBtn.classList.toggle("active",s),this.tourBtn.textContent=s?"■ Stop tour":"✦ Live tour",s&&(clearTimeout(this.toastTimer),this.toastEl.classList.remove("visible"))}});return this.tour=e,e}).catch(t=>{throw this.tourPromise=null,t})),this.tourPromise}async toggleTour(){(await this.ensureTour()).toggle()}showToast(t,e=1800){this.tourRunning||(this.toastEl.textContent=t,this.toastEl.classList.add("visible"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.remove("visible")},e))}async addAiTeammate(){if(this.currentPatch.modules.some(i=>i.kind==="neural"))return;const t=is(this.currentPatch,this.patchbay.suggestCardSpot());this.recordHistory(),await this.applyPatch(t.patch,"add-ai"),this.markSceneDirty();const e=t.addedClockId?"its own 120 BPM clock":t.clockName,s=t.leftFree.length>0?` ${t.leftFree.join(" and ")} left free: those inputs are already sequenced.`:"";this.showToast(`AI teammate added as ${t.characterLabel}, clocked by ${e}, ${t.links.length} cables.${s}`,5200)}syncAudioStatus(){const t=this.host.isAudioRunning;this.brandLed.classList.toggle("live",t),this.audioBtn.classList.toggle("active",t),this.audioBtn.textContent=t?"● Audio live · 48 kHz":"▶ Start audio",this.audioBtn.title=t?"Pause the AudioWorklet engine":"Start the 48 kHz AudioWorklet engine"}async applyPatch(t,e){this.currentPatch=st(t),e==="json-edit"?this.currentPatch.name&&this.currentPatch.name!==this.activeSceneName&&(this.activeSceneName=this.currentPatch.name,this.sceneBar.setActiveScene(this.activeSceneId,this.activeSceneName,this.sceneDirty)):this.activeSceneId&&(this.currentPatch.name=this.activeSceneName);const s=e==="init"||e.startsWith("preset:")||e.startsWith("scene:")||e.startsWith("inverse:"),i=!s&&this.host.lastCompiled?.ir.patchId===this.currentPatch.id,a=await this.host.loadPatch(this.currentPatch,{keepState:i}),n=a.ir.stages.filter(h=>h.kind==="scc").length,o=a.ir.stages.reduce((h,p)=>h+(p.kind==="scc"?p.cutBindings.length:0),0);this.metricWasm.textContent=`${(a.wasmByteLength/1024).toFixed(1)} KB`,this.metricCompile.textContent=`${a.compileMs.toFixed(1)} ms`,this.metricScc.textContent=n>0?`${n} loop (${o} FVS)`:"0 (DAG)",this.metricScc.parentElement?.classList.toggle("scc",n>0);const r=s||e==="add-ai";this.scopes.resetProbeHistory(a.ir.probes,this.scopes.getSelectedModule());const l=this.scopes.getSelectedModule();this.patchbay.setPatch(this.currentPatch,a,l,{fitToView:r,animateFit:r&&e!=="init"}),this.latestCompiled=a,this.compilerView?.setCompiled(a),this.physicsLab?(this.physicsLab.setCompiled(a),this.physicsLab.syncFromPatch(this.currentPatch,s)):s&&(this.pendingPhysicsAutoSelect=!0),s&&e!=="init"?this.recorderView.notifyEvent(this.activeSceneName||this.currentPatch.name,"scene"):e!=="init"&&this.recorderView.notifyEvent("Swap","swap"),this.jsonView?.setPatch(this.currentPatch),this.ioPanel.notifyPatchChanged(),this.aiTaps=[];for(const h of this.currentPatch.modules){if(h.kind!=="neural")continue;const p=a.ir.probes.find(b=>b.moduleId===h.id&&b.probeId==="barStep"),u=a.ir.probes.find(b=>b.moduleId===h.id&&b.probeId==="adapt");p&&u&&this.aiTaps.push({moduleId:h.id,stepIndex:p.index,adaptIndex:u.index,lastStep:NaN,lastAdapt:0,lastLevel:0,lastTouching:!1})}this.renderTeammate(this.teammate.getStatus())}handleTelemetry(t){this.scopes.update(t),this.trackAiActivity(t);const e=performance.now();e-this.lastHudUpdate>90&&(this.lastHudUpdate=e,this.metricCpu.textContent=`${t.cpuUs.toFixed(0)} / ${t.cpuP99Us.toFixed(0)} µs`,this.metricNewton.textContent=`${t.maxNewtonIters} / ${t.avgNewtonIters.toFixed(1)}`,this.metricSwaps.textContent=String(t.swapCount),this.patchbay.updateTelemetry(t))}}const ke=document.getElementById("app");ke&&new ai(ke);export{Xs as c,Ne as f,li as h,hi as m};
