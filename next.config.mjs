const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
    return [
        {
            source: "/",
            destination: "/pages/mainPage",
        },
    ];
    },
};

export default nextConfig;
