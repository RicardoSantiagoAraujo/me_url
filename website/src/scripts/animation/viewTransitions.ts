/**
 * Sets up a listener for Astro view transitions to re-execute a given function.
 *
 * @param functionName - The function to be executed on initial load and after Astro view transitions.
 * @param runOnInit - Whether to run the function on initial load.
 */
export function listenViewTransitions(
  functionName: () => void,
  runOnInit: boolean = false
): void {
  // console.log("View transition, listening")
  // Run function on initial load
  if (runOnInit) {
    functionName();
  }
  // If you're using Astro's View Transitions, animations won't rerun on navigation. You must re-trigger them.
  document.addEventListener("astro:after-swap", (event) => {
    // console.log("astro:after-swap event triggered", event);
    functionName();  // Call your function
  });
}
