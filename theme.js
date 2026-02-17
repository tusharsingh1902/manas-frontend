/* THE "MAGIC" DARK MODE */
html.dark-mode {
    filter: invert(1) hue-rotate(180deg); /* Inverts colors but keeps hues somewhat correct */
}

/* Fix images (so they don't look like X-rays) */
html.dark-mode img, 
html.dark-mode video, 
html.dark-mode picture {
    filter: invert(1) hue-rotate(180deg);
}
