/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.spectrumplumbingirvine.com",
          },
        ],
        destination: "https://spectrumplumbingirvine.com/:path*",
        permanent: true,
      },
      {
        source: "/editorial-standards",
        destination: "/editorial-policy/",
        permanent: true,
      },
      {
        source: "/editorial-standards/",
        destination: "/editorial-policy/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
