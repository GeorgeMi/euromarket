// Kept out of the "use client" SplashScreen so the server layout can inline it.
export const SPLASH_SEEN_KEY = "splashSeen";
export const SPLASH_SEEN_CLASS = "splash-seen";

/**
 * Runs in <head> before first paint: tags <html> with SPLASH_SEEN_CLASS when the
 * session already saw the splash or started on another page, so CSS hides the
 * overlay without a flash.
 */
export const SPLASH_INIT_SCRIPT = `try{var s=sessionStorage;if(s.getItem("${SPLASH_SEEN_KEY}")||location.pathname!=="/"){s.setItem("${SPLASH_SEEN_KEY}","1");document.documentElement.classList.add("${SPLASH_SEEN_CLASS}")}}catch(e){document.documentElement.classList.add("${SPLASH_SEEN_CLASS}")}`;
