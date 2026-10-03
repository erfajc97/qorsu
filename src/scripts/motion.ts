/**
 * One scroll clock for the whole page.
 *
 * Lenis smooths wheel input on desktop (touch stays native), and a single
 * requestAnimationFrame loop hands every subscriber the same scroll value.
 * Subscribers only write transforms/opacity, never read layout: positions are
 * measured once in `measure()` and again on resize.
 */
import Lenis from 'lenis';

export type Frame = { y: number; vh: number; vw: number; dt: number };
type Sub = (f: Frame) => void;
type Measure = () => void;

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const subs = new Set<Sub>();
const measures = new Set<Measure>();

let lenis: Lenis | null = null;
let vh = document.documentElement.clientHeight;
let vw = document.documentElement.clientWidth;
let started = false;
let last = 0;

export const clamp = (x: number, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const smooth = (x: number) => {
  x = clamp(x);
  return x * x * (3 - 2 * x);
};
/** 0 before `a`, 1 after `b`, smoothstep between. */
export const range = (p: number, a: number, b: number) => smooth((p - a) / (b - a));

/** Absolute document top of an element (call inside a measure callback). */
export const docTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

const written = new WeakMap<HTMLElement, Record<string, string>>();
/** Write a style only when it changed, so an idle page does no style work. */
export function put(el: HTMLElement | null | undefined, prop: string, value: string) {
  if (!el) return;
  let rec = written.get(el);
  if (!rec) written.set(el, (rec = {}));
  if (rec[prop] === value) return;
  rec[prop] = value;
  if (prop.startsWith('--')) el.style.setProperty(prop, value);
  else (el.style as unknown as Record<string, string>)[prop] = value;
}

export function onFrame(fn: Sub) {
  subs.add(fn);
  start();
  return () => subs.delete(fn);
}

export function onMeasure(fn: Measure) {
  measures.add(fn);
  fn();
  return () => measures.delete(fn);
}

export function scrollToTarget(target: string | HTMLElement | number) {
  if (lenis) lenis.scrollTo(target as never, { duration: 1.6 });
  else if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'smooth' });
  else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}

/** Freeze / release page scroll (used by the intro). */
export function lockScroll(on: boolean) {
  start();
  document.documentElement.classList.toggle('scroll-locked', on);
  if (lenis) on ? lenis.stop() : lenis.start();
}

function measureAll() {
  vh = document.documentElement.clientHeight;
  vw = document.documentElement.clientWidth;
  measures.forEach((m) => m());
}

function loop(t: number) {
  const dt = last ? Math.min((t - last) / 1000, 0.05) : 1 / 60;
  last = t;
  lenis?.raf(t);
  const y = lenis ? lenis.animatedScroll : window.scrollY;
  const f = { y, vh, vw, dt };
  subs.forEach((s) => s(f));
  requestAnimationFrame(loop);
}

function start() {
  if (started) return;
  started = true;

  if (!reduceMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (x) => 1 - Math.pow(1 - x, 4),
      smoothWheel: true,
      syncTouch: false, // touch keeps native momentum: fastest and most reliable on iOS
      anchors: { offset: 0, duration: 1.6 },
    });
    document.documentElement.classList.add('lenis');
  }

  // Phones fire resize when the URL bar collapses; only re-measure when the
  // width changes or the height changes a lot, so pinned acts never jump.
  let lastW = vw;
  let lastH = vh;
  let t: number | undefined;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = window.setTimeout(() => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight;
      if (w !== lastW || Math.abs(h - lastH) > 140) {
        lastW = w;
        lastH = h;
        measureAll();
        lenis?.resize();
      }
    }, 120);
  });
  window.addEventListener('load', measureAll);
  document.fonts?.ready.then(measureAll);
  // Copy reflows (language switch, late images) move every section below it.
  let rt: number | undefined;
  new ResizeObserver(() => {
    clearTimeout(rt);
    rt = window.setTimeout(() => {
      measureAll();
      lenis?.resize();
    }, 80);
  }).observe(document.body);

  requestAnimationFrame(loop);
}
