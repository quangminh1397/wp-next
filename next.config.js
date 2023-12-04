/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    images: {
        domains: ['demo01-woo.local.vn'],
    },
}

module.exports = nextConfig
