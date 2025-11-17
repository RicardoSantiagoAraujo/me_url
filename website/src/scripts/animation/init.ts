// animation.ts 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // register here ONCE

export { gsap, ScrollTrigger };