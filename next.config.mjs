'use strict';

import { join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    eslint: {
        dirs: [
            'components',
            'hooks',
            'lib',
            'pages'
        ]
    },
    experimental: {
        appDir: true,
        esmExternals: true,
        fontLoaders: [
            {
                loader: '@next/font/google',
                options: {
                    subsets: [
                        'latin'
                    ]
                }
            }
        ],
        optimizeCss: true
    },
    generateEtags: false,
    headers: async () => [
        {
            headers: [
                {
                    key: 'Access-Control-Allow-Methods',
                    value: 'get, options, post, put'
                },
                {
                    key: 'Access-Control-Allow-Origin',
                    value: '*'
                },
                {
                    key: 'Access-Control-Max-Age',
                    value: '604800'
                },
                {
                    key: 'Content-Security-Policy',
                    value: 'default-src \'self\'; connect-src \'self\'; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data: https://ko-fi.com; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\' https://apis.google.com https://storage.ko-fi.com https://www.googletagmanager.com; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com'
                },
                {
                    key: 'Referrer-Policy',
                    value: 'origin-when-cross-origin'
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=31536000; includeSubDomains; preload'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'X-UA-Compatible',
                    value: 'IE=edge'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                }
            ],
            source: '/:path*'
        }
    ],
    images: {
        domains: [
            'ko-fi.com'
        ]
    },
    poweredByHeader: false,
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            join(process.cwd(), 'styles')
        ]
    },
    swcMinify: true,
    trailingSlash: false
};

export default nextConfig;
