import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js'
import 'tippy.js/dist/svg-arrow.css';;


export function initTooltips() {
    tippy('[data-tooltip]', {
      content: (reference) => reference.getAttribute('data-tooltip') || '', // The content of the tippy.
      trigger: 'mouseenter focus',
      zIndex: 9999,
      placement: 'top', // 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'
      arrow: arrowSvg, // Custom SVG for the arrow (arrowSvg), else you can use true for default arrow or false for no arrow,
      delay: [100, 50], // [show, hide] delay in ms
      duration: [200, 150], // [show, hide] duration in ms 
      // animation: 'shift-away',
      theme: 'me_url',
      flip: true, // Allow flipping to keep the tooltip in view
      maxWidth: 350, // Maximum width of the tooltip
      offset: [0, 10], // [skidding, distance] offset of the tooltip
    });
  }

const arrowSvg = ` 
<svg viewBox="0 0 20 10" width="20" height="10" xmlns="http://www.w3.org/2000/svg" >
  <polygon points="10,1 20,10 0,10"   />
</svg>   
`; // points = "tipX,tipY rightX,rightY leftX,leftY"

  // Add attribute to html element like  data-tippy-placement="right" to override a default rule