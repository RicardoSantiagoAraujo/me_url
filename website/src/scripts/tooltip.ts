import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js';


export function initTooltips() {
    tippy('[data-tooltip]', {
      content: (reference) => reference.getAttribute('data-tooltip') || '',
      placement: 'top',
    //   animation: 'shift-away',
      theme: 'me_url',
    });
  }