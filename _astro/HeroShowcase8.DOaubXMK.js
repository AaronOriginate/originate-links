import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.DeO6U63H.js";import{C as E,u as R,a as k}from"./react-three-fiber.esm.ZlZzys2S.js";import{m as v}from"./proxy.DyTkdm0c.js";import{P as F,R as M,D as H,S as T,V as A}from"./three.module.CD2dUq6L.js";import"./index.Bb8JjhAW.js";import"./index.DMRSuP3s.js";const t={accent:"#E9F469",onAccent:"#0C0D0E",bg:"#0C0D0E",text:"#F5F5F3",textMuted:"rgba(245,245,243,0.5)",border:"rgba(245,245,243,0.12)",font:"'Jost', sans-serif",radiusPill:50},p={eyebrow:"Hey! We are Originate.",h1Prefix:"We turn website visits into sales by ",h1Highlight:"fixing your fundamentals",subtitle:"We're a brand and web agency focused on building foundations that convert.",ctaPrimary:"Let's talk sales growth",ctaPrimaryHref:"/contact",ctaSecondary:"Our ethos",ctaSecondaryHref:"/about",heroImage:"/images/hero/homepage-hero-team.webp",logos:["/images/clients/green/spero.webp","/images/clients/green/vt.webp","/images/clients/green/frontroom.webp","/images/clients/green/encouraged.webp","/images/clients/green/ara.webp","/images/clients/green/abbeyfield.webp","/images/clients/green/django.webp","/images/clients/green/visibly-different.webp","/images/clients/green/aotg.webp"]};function h({num:o,name:r}){return e.jsxs("div",{style:{position:"absolute",top:64,left:24,zIndex:10,fontFamily:"monospace",fontSize:12,color:t.textMuted,letterSpacing:1,textTransform:"uppercase"},children:["#",String(o).padStart(2,"0")," — ",r]})}function D({style:o={}}){const[r,a]=l.useState(!1);return e.jsxs(v.a,{href:p.ctaPrimaryHref,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),animate:{y:r?-3:0,boxShadow:r?"0 8px 25px #E9F46933":"0 0px 0px #E9F46900"},transition:{type:"spring",stiffness:400,damping:25},style:{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 32px",background:t.accent,color:t.onAccent,borderRadius:t.radiusPill,fontFamily:t.font,fontWeight:600,fontSize:16,textDecoration:"none",cursor:"pointer",border:"none",position:"relative",overflow:"hidden",...o},children:[e.jsx(v.div,{animate:{x:r?"200%":"-100%"},transition:{duration:.6,ease:"easeInOut"},style:{position:"absolute",top:0,left:0,width:"50%",height:"100%",background:"linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",pointerEvents:"none"}}),e.jsx("span",{style:{position:"relative",zIndex:1},children:p.ctaPrimary}),e.jsx("span",{style:{fontSize:18,position:"relative",zIndex:1},children:"→"})]})}function L({style:o={}}){const[r,a]=l.useState(!1),[c,s]=l.useState({x:0,y:0}),n=l.useRef(null),i=d=>{if(!n.current)return;const g=n.current.getBoundingClientRect();s({x:d.clientX-g.left,y:d.clientY-g.top})};return e.jsxs("a",{ref:n,href:p.ctaSecondaryHref,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onMouseMove:i,style:{display:"inline-flex",alignItems:"center",gap:8,padding:0,background:"transparent",borderRadius:t.radiusPill,fontFamily:t.font,fontWeight:500,fontSize:16,textDecoration:"none",cursor:"pointer",position:"relative",border:"none",color:r?t.accent:t.text,transition:"color 0.2s",...o},children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 32px",borderRadius:t.radiusPill,border:`1px solid ${t.border}`,position:"relative",zIndex:2,background:"rgba(12,13,14,0.6)",backdropFilter:"blur(8px)"},children:p.ctaSecondary}),r&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:t.radiusPill,background:`radial-gradient(120px circle at ${c.x}px ${c.y}px, #E9F469, #E9F46966 30%, transparent 60%)`,WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",padding:2,pointerEvents:"none",zIndex:3}}),r&&e.jsx("div",{style:{position:"absolute",inset:-4,borderRadius:t.radiusPill,background:`radial-gradient(140px circle at ${c.x+4}px ${c.y+4}px, #E9F46944, transparent 60%)`,filter:"blur(4px)",pointerEvents:"none",zIndex:1}})]})}function S({style:o={},children:r}){return e.jsx("p",{style:{fontFamily:t.font,fontSize:14,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:t.accent,margin:0,...o},children:r||p.eyebrow})}function y({style:o={},children:r}){return e.jsx("p",{style:{fontFamily:t.font,fontSize:20,fontWeight:400,color:t.textMuted,lineHeight:1.6,margin:0,maxWidth:560,...o},children:r||p.subtitle})}function C({style:o={},children:r}){return e.jsx("h1",{style:{fontFamily:t.font,fontSize:"clamp(36px, 5vw, 64px)",fontWeight:600,color:t.text,lineHeight:1.1,margin:0,maxWidth:800,...o},children:r||e.jsxs(e.Fragment,{children:[p.h1Prefix,e.jsx("span",{style:{color:t.accent},children:p.h1Highlight})]})})}function b({style:o={}}){return e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",...o},children:[e.jsx(D,{}),e.jsx(L,{})]})}function W({style:o={}}){return e.jsx("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap",opacity:.5,...o},children:p.logos.slice(0,5).map((r,a)=>e.jsx("img",{src:r,alt:"Client logo",style:{height:28,width:"auto",filter:"brightness(0.8)"}},a))})}function w({id:o,children:r,style:a={}}){return e.jsx("div",{id:`hero-${o}`,style:{minHeight:"100vh",width:"100%",position:"relative",overflow:"hidden",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:t.font,...a},children:r})}const $=`
precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;

attribute vec3 position;

varying float vElevation;
varying float vDistFromCenter;

// 3D Perlin noise helpers
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000), dot(g010,g010), dot(g100,g100), dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001), dot(g011,g011), dot(g101,g101), dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = Pf0 * Pf0 * Pf0 * (Pf0 * (Pf0 * 6.0 - 15.0) + 10.0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() {
  vec3 pos = position;
  float noiseFreq = 0.015;
  float noiseAmp = 18.0;
  float elevation = cnoise(vec3(pos.x * noiseFreq, pos.z * noiseFreq + uTime * 0.15, uTime * 0.05)) * noiseAmp;
  elevation += cnoise(vec3(pos.x * noiseFreq * 2.0, pos.z * noiseFreq * 2.0 + uTime * 0.1, uTime * 0.08)) * noiseAmp * 0.5;
  pos.y += elevation;
  vElevation = elevation / noiseAmp;
  float dist = length(pos.xz) / 128.0;
  vDistFromCenter = clamp(dist, 0.0, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,O=`
precision highp float;

varying float vElevation;
varying float vDistFromCenter;

void main() {
  float edgeFade = 1.0 - smoothstep(0.4, 1.0, vDistFromCenter);
  float elevBright = 0.4 + 0.6 * clamp(vElevation * 0.5 + 0.5, 0.0, 1.0);
  float alpha = edgeFade * elevBright * 0.7;
  gl_FragColor = vec4(0.914, 0.957, 0.412, alpha);
}
`;function B(){const o=l.useRef(null);l.useRef(null);const r=l.useMemo(()=>new F(256,256,256,256),[]),a=l.useMemo(()=>new M({vertexShader:$,fragmentShader:O,uniforms:{uTime:{value:0}},wireframe:!0,transparent:!0,depthWrite:!1,side:H}),[]);return R(c=>{a&&(a.uniforms.uTime.value=c.clock.elapsedTime)}),e.jsx("mesh",{ref:o,geometry:r,material:a,rotation:[-Math.PI/2,0,0],position:[0,-20,0]})}function G(){return e.jsxs(w,{id:43,children:[e.jsx(h,{num:43,name:"GLSL Hills Terrain"}),e.jsx("div",{style:{position:"absolute",inset:0,zIndex:1},children:e.jsx(E,{camera:{position:[0,40,125],fov:55},style:{width:"100%",height:"100%"},gl:{antialias:!0,alpha:!0},children:e.jsx(B,{})})}),e.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"0 24px"},children:[e.jsx(S,{}),e.jsx(C,{style:{textAlign:"center",textShadow:"0 2px 30px rgba(12,13,14,0.9), 0 0 60px rgba(12,13,14,0.7)"}}),e.jsx(y,{style:{textAlign:"center",textShadow:"0 2px 20px rgba(12,13,14,0.9)"}}),e.jsx(b,{style:{justifyContent:"center"}})]})]})}const _=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,X=`
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

varying vec2 vUv;

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 10; i++) {
    value += amplitude * noise(st);
    st = rotate2d(0.45) * st * 2.0 + vec2(100.0);
    amplitude *= 0.5;
  }
  return value;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec2 uv = vUv;
  vec2 st = uv * 2.0 - 1.0;
  st.x *= uResolution.x / uResolution.y;

  float fbmVal = fbm(vec2(st.x * 3.0, st.y * 1.5 + uTime * 0.6));
  float distFromCenter = abs(st.x + (fbmVal - 0.5) * 0.8);
  float beam = 0.07 / distFromCenter;
  beam = clamp(beam, 0.0, 2.5);

  vec3 beamColor = hsv2rgb(vec3(75.0 / 360.0, 0.7, beam));

  float bgDist = length(st * vec2(0.7, 1.0));
  float bgGlow = 0.1 * exp(-bgDist * bgDist * 0.5);
  vec3 bgColor = vec3(0.914, 0.957, 0.412) * bgGlow;

  vec3 dark = vec3(0.047, 0.051, 0.055);
  vec3 color = dark + beamColor + bgColor;

  gl_FragColor = vec4(color, 1.0);
}
`;function q(){const o=l.useRef(null);l.useRef(null);const{size:r}=k(),a=l.useMemo(()=>new T({vertexShader:_,fragmentShader:X,uniforms:{uTime:{value:0},uResolution:{value:new A(r.width,r.height)}}}),[]);return l.useEffect(()=>{a&&a.uniforms.uResolution.value.set(r.width,r.height)},[r,a]),R(c=>{a&&(a.uniforms.uTime.value=c.clock.elapsedTime)}),e.jsx("mesh",{ref:o,material:a,children:e.jsx("planeGeometry",{args:[2,2]})})}function V(){return e.jsxs(w,{id:44,children:[e.jsx(h,{num:44,name:"Lightning Energy"}),e.jsx("div",{style:{position:"absolute",inset:0,zIndex:1},children:e.jsx(E,{style:{width:"100%",height:"100%"},gl:{antialias:!1},camera:{position:[0,0,1]},children:e.jsx(q,{})})}),e.jsx("div",{style:{position:"absolute",zIndex:2,top:"55%",left:"50%",transform:"translate(-50%, -50%)",width:400,height:400,borderRadius:"50%",border:`1px solid ${t.border}`,background:"radial-gradient(circle, rgba(233,244,105,0.04) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{style:{position:"relative",zIndex:3,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"0 24px"},children:[e.jsx(S,{}),e.jsx(C,{style:{textAlign:"center",textShadow:"0 2px 30px rgba(12,13,14,0.8)"}}),e.jsx(y,{style:{textAlign:"center",textShadow:"0 2px 20px rgba(12,13,14,0.9)"}}),e.jsx(b,{style:{justifyContent:"center"}})]})]})}function N(){l.useRef(null);const o=l.useRef(null),r=l.useRef({x:-1e3,y:-1e3}),a=l.useRef(0);l.useEffect(()=>{const s=o.current;if(!s)return;const n=s.getContext("2d");if(!n)return;const i=()=>{s.width=window.innerWidth,s.height=window.innerHeight};i(),window.addEventListener("resize",i);const d=()=>{n.clearRect(0,0,s.width,s.height),n.fillStyle="rgba(12, 13, 14, 0.92)",n.fillRect(0,0,s.width,s.height),n.save(),n.globalCompositeOperation="destination-out";const g=r.current.x,x=r.current.y,u=n.createRadialGradient(g,x,0,g,x,200);u.addColorStop(0,"rgba(255, 255, 255, 1)"),u.addColorStop(.5,"rgba(255, 255, 255, 0.8)"),u.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=u,n.beginPath(),n.arc(g,x,200,0,Math.PI*2),n.fill(),n.restore(),n.save(),n.globalCompositeOperation="source-atop";const m=n.createRadialGradient(g,x,150,g,x,210);m.addColorStop(0,"transparent"),m.addColorStop(.5,"rgba(233, 244, 105, 0.15)"),m.addColorStop(1,"transparent"),n.fillStyle=m,n.fillRect(0,0,s.width,s.height),n.restore(),a.current=requestAnimationFrame(d)};return a.current=requestAnimationFrame(d),()=>{window.removeEventListener("resize",i),cancelAnimationFrame(a.current)}},[]);const c=l.useCallback(s=>{const n=s.currentTarget.getBoundingClientRect();r.current={x:s.clientX-n.left,y:s.clientY-n.top}},[]);return e.jsxs(w,{id:45,style:{cursor:"none"},children:[e.jsx(h,{num:45,name:"Light Reveal (Text)"}),e.jsxs("div",{onMouseMove:c,style:{position:"absolute",inset:0,zIndex:1,background:`
            radial-gradient(ellipse at 50% 50%, rgba(233,244,105,0.25) 0%, rgba(233,244,105,0.08) 40%, transparent 70%),
            linear-gradient(180deg, ${t.bg} 0%, #111210 50%, ${t.bg} 100%)
          `},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"256px 256px",pointerEvents:"none"}}),e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"}})]}),e.jsxs("div",{onMouseMove:c,style:{position:"relative",zIndex:3,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"0 24px",pointerEvents:"auto"},children:[e.jsx(C,{style:{textAlign:"center",textShadow:"0 0 40px rgba(233,244,105,0.3), 0 0 80px rgba(233,244,105,0.1)"}}),e.jsx(y,{style:{textAlign:"center"}}),e.jsx(b,{style:{justifyContent:"center"}})]}),e.jsx(v.div,{style:{position:"fixed",width:24,height:24,borderRadius:"50%",border:`2px solid ${t.accent}`,pointerEvents:"none",zIndex:100,transform:"translate(-50%, -50%)",boxShadow:`0 0 20px ${t.accent}44`},animate:{scale:[1,1.2,1]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})]})}function U(){const o=l.useRef(null),r=l.useRef({x:-1e3,y:-1e3}),a=l.useRef([]),c=l.useRef(0);l.useEffect(()=>{const n=o.current;if(!n)return;const i=n.getContext("2d");if(!i)return;const d=()=>{n.width=window.innerWidth,n.height=window.innerHeight};d(),window.addEventListener("resize",d);const g=()=>{i.clearRect(0,0,n.width,n.height),i.fillStyle="rgba(12, 13, 14, 0.92)",i.fillRect(0,0,n.width,n.height),i.save(),i.globalCompositeOperation="destination-out",a.current.forEach(f=>{const P=i.createRadialGradient(f.x,f.y,0,f.x,f.y,180);P.addColorStop(0,`rgba(255, 255, 255, ${f.alpha})`),P.addColorStop(.6,`rgba(255, 255, 255, ${f.alpha*.4})`),P.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=P,i.beginPath(),i.arc(f.x,f.y,180,0,Math.PI*2),i.fill()});const x=r.current.x,u=r.current.y,m=i.createRadialGradient(x,u,0,x,u,200);m.addColorStop(0,"rgba(255, 255, 255, 1)"),m.addColorStop(.5,"rgba(255, 255, 255, 0.7)"),m.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=m,i.beginPath(),i.arc(x,u,200,0,Math.PI*2),i.fill(),i.restore(),i.save(),i.globalCompositeOperation="screen";const j=i.createRadialGradient(x,u,160,x,u,220);j.addColorStop(0,"transparent"),j.addColorStop(.4,"rgba(233, 244, 105, 0.2)"),j.addColorStop(.7,"rgba(233, 244, 105, 0.1)"),j.addColorStop(1,"transparent"),i.fillStyle=j,i.beginPath(),i.arc(x,u,220,0,Math.PI*2),i.fill(),i.restore(),a.current=a.current.map(f=>({...f,alpha:f.alpha*.985})).filter(f=>f.alpha>.01),c.current=requestAnimationFrame(g)};return c.current=requestAnimationFrame(g),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(c.current)}},[]);const s=l.useCallback(n=>{const i=n.currentTarget.getBoundingClientRect(),d=n.clientX-i.left,g=n.clientY-i.top;r.current={x:d,y:g},a.current.push({x:d,y:g,alpha:.6}),a.current.length>100&&(a.current=a.current.slice(-100))},[]);return e.jsxs(w,{id:46,style:{cursor:"crosshair"},children:[e.jsx(h,{num:46,name:"Light Reveal (Photo)"}),e.jsx("div",{onMouseMove:s,style:{position:"absolute",inset:0,zIndex:1,backgroundImage:`url(${p.heroImage})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"}})}),e.jsxs("div",{onMouseMove:s,style:{position:"relative",zIndex:3,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"0 24px"},children:[e.jsx(S,{}),e.jsxs(C,{style:{textAlign:"center",textShadow:"0 2px 30px rgba(12,13,14,0.95), 0 0 60px rgba(12,13,14,0.8)"},children:["Discover what's"," ",e.jsx("span",{style:{color:t.accent},children:"beneath the surface"})]}),e.jsx(y,{style:{textAlign:"center",textShadow:"0 2px 20px rgba(12,13,14,0.95)"}}),e.jsx(b,{style:{justifyContent:"center"}})]})]})}function K(){return e.jsxs(w,{id:47,children:[e.jsx(h,{num:47,name:"Lamp Container"}),e.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"256px 256px",pointerEvents:"none",opacity:.5}}),e.jsx(v.div,{initial:{width:"14rem"},animate:{width:"30rem"},transition:{duration:.85,ease:[.25,.46,.45,.94]},style:{position:"absolute",top:0,left:"50%",transform:"translateX(-100%)",height:"100%",background:"conic-gradient(from 70deg at 100% 0%, transparent, #E9F469 40%, transparent 80%)",opacity:.15,zIndex:1,maskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"}}),e.jsx(v.div,{initial:{width:"14rem"},animate:{width:"30rem"},transition:{duration:.85,ease:[.25,.46,.45,.94]},style:{position:"absolute",top:0,right:"50%",transform:"translateX(100%)",height:"100%",background:"conic-gradient(from 290deg at 0% 0%, transparent, #d4e04a 40%, transparent 80%)",opacity:.15,zIndex:1,maskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"}}),e.jsx("div",{style:{position:"absolute",top:"15%",left:"50%",transform:"translateX(-50%)",width:320,height:2,background:`linear-gradient(90deg, transparent, ${t.accent}, transparent)`,zIndex:2,opacity:.6}}),e.jsx(v.div,{animate:{scale:[1,1.06,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"15%",left:"50%",transform:"translate(-50%, -50%)",width:200,height:200,borderRadius:"50%",background:`radial-gradient(circle, ${t.accent}22 0%, transparent 70%)`,filter:"blur(40px)",zIndex:1,pointerEvents:"none"}}),e.jsxs("div",{style:{position:"relative",zIndex:4,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"0 24px",marginTop:"15%"},children:[e.jsx(S,{}),e.jsxs("h1",{style:{fontFamily:t.font,fontSize:"clamp(36px, 5vw, 72px)",fontWeight:600,lineHeight:1.1,margin:0,maxWidth:800,textAlign:"center",background:`linear-gradient(180deg, ${t.text} 0%, ${t.accent} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:[p.h1Prefix,p.h1Highlight]}),e.jsx(y,{style:{textAlign:"center"}}),e.jsx(b,{style:{justifyContent:"center"}}),e.jsx(W,{style:{marginTop:24,justifyContent:"center"}})]})]})}const I=[{label:"Brand",offsetX:"0%"},{label:"Content",offsetX:"20%"},{label:"Technical",offsetX:"40%"},{label:"UX",offsetX:"60%"},{label:"Performance",offsetX:"80%"}];function Y({index:o,totalSlices:r,label:a,imageOffset:c}){const[s,n]=l.useState(!1),i=100/r,d=4,g=o*i,x=(o+1)*i,u=`polygon(${g+d}% 0%, ${x+d}% 0%, ${x-d}% 100%, ${g-d}% 100%)`;return e.jsx(v.div,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),animate:{scale:s?1.02:1,filter:s?"brightness(1.3)":"brightness(0.7)"},transition:{type:"spring",stiffness:300,damping:25},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",clipPath:u,backgroundImage:`url(${p.heroImage})`,backgroundSize:"cover",backgroundPosition:`${c} center`,zIndex:s?3:2,cursor:"pointer"},children:e.jsx("div",{style:{position:"absolute",bottom:40,left:`${g+i/2}%`,transform:"translateX(-50%)",fontFamily:t.font,fontSize:12,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:s?t.accent:t.text,textShadow:"0 2px 10px rgba(12,13,14,0.9)",transition:"color 0.2s",whiteSpace:"nowrap",zIndex:4},children:a})})}function J(){return e.jsxs(w,{id:48,style:{flexDirection:"row"},children:[e.jsx(h,{num:48,name:"Diagonal Site Slices"}),e.jsxs("div",{style:{position:"relative",zIndex:5,width:"40%",padding:"0 clamp(24px, 4vw, 80px)",display:"flex",flexDirection:"column",justifyContent:"center",gap:24},children:[e.jsx(S,{children:"Our Work"}),e.jsxs(C,{children:["Five pillars."," ",e.jsx("span",{style:{color:t.accent},children:"One foundation."})]}),e.jsx(y,{children:"Every engagement runs through our five-pillar audit — brand, content, technical, UX, and performance — so nothing gets missed."}),e.jsx(b,{})]}),e.jsxs("div",{style:{position:"absolute",top:0,right:0,width:"60%",height:"100%"},children:[e.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:`
              radial-gradient(ellipse at 30% 50%, rgba(233,244,105,0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(233,244,105,0.05) 0%, transparent 50%)
            `}}),I.map((o,r)=>e.jsx(Y,{index:r,totalSlices:I.length,label:o.label,imageOffset:o.offsetX},o.label))]})]})}const z=[{id:43,name:"GLSL Hills"},{id:44,name:"Lightning Energy"},{id:45,name:"Light Reveal Text"},{id:46,name:"Light Reveal Photo"},{id:47,name:"Lamp Container"},{id:48,name:"Diagonal Slices"}];function Q(){const[o,r]=l.useState(z[0].id);l.useEffect(()=>{const s=()=>{for(let n=z.length-1;n>=0;n--){const i=document.getElementById(`hero-${z[n].id}`);if(i&&i.getBoundingClientRect().top<=window.innerHeight/2){r(z[n].id);break}}};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const[a,c]=l.useState(null);return e.jsx("div",{style:{position:"fixed",right:12,top:"50%",transform:"translateY(-50%)",zIndex:1e3,display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:z.map(s=>{const n=o===s.id,i=a===s.id;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onMouseEnter:()=>c(s.id),onMouseLeave:()=>c(null),onClick:()=>{document.getElementById(`hero-${s.id}`)?.scrollIntoView({behavior:"smooth"})},children:[i&&e.jsx("span",{style:{fontFamily:t.font,fontSize:11,color:t.accent,whiteSpace:"nowrap",background:"rgba(12,13,14,0.9)",padding:"4px 8px",borderRadius:4},children:s.name}),e.jsx("div",{style:{width:n?24:i?16:8,height:n?8:4,borderRadius:4,background:n?t.accent:i?t.text:t.textMuted,transition:"all 0.2s"}})]},s.id)})})}function ae(){return e.jsxs("div",{style:{background:t.bg,position:"relative"},children:[e.jsx(Q,{}),e.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:999,padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(12,13,14,0.8)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${t.border}`},children:[e.jsx("a",{href:"/component-library",style:{fontFamily:t.font,fontSize:13,color:t.textMuted,textDecoration:"none",display:"flex",alignItems:"center",gap:6},children:"← All Groups"}),e.jsx("span",{style:{fontFamily:t.font,fontSize:14,fontWeight:600,color:t.text,letterSpacing:1},children:"HEROES 43-48: WEBGL & SHADERS"}),e.jsx("span",{style:{fontFamily:t.font,fontSize:13,color:t.textMuted},children:"6 Variants — Scroll to explore"})]}),e.jsx(G,{}),e.jsx(V,{}),e.jsx(N,{}),e.jsx(U,{}),e.jsx(K,{}),e.jsx(J,{}),e.jsx("div",{style:{height:"20vh",display:"flex",alignItems:"center",justifyContent:"center",background:t.bg},children:e.jsxs("p",{style:{fontFamily:t.font,fontSize:14,color:t.textMuted},children:["End of group."," ",e.jsx("a",{href:"/component-library",style:{color:t.accent,textDecoration:"none"},children:"Back to library →"})]})})]})}export{ae as default};
