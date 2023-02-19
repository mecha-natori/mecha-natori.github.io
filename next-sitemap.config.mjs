'use strict';

/** @type {import('next-sitemap').IConfig} */
const config = {
    autoLastmod: true,
    changefreq: 'daily',
    exclude: [],
    generateIndexSitemap: true,
    generateRobotsTxt: true,
    outDir: 'public',
    priority: 0.7,
    robotsTxtOptions: {
        additionalSitemaps: [],
        includeNonIndexSitemaps: false,
        policies: [
            {
                allow: '/',
                userAgent: '*'
            }
        ]
    },
    siteUrl: 'https://mecha-natori.github.io',
    sitemapBaseFileName: 'sitemap',
    sitemapSize: 5000,
    sourceDir: '.next'
};

export default config;
