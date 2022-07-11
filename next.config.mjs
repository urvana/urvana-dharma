/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    poweredByHeader: false,
    swcMinify: true,
    i18n: {
        locales: ["es-CL"],
        defaultLocale: "es-CL",
    },
};

export default config;
