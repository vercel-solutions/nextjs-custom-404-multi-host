import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The issue with these rewrites is that you can't change the status code
  // for the custom 404 page.
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/404",
  //         destination: "/custom-404/a",
  //       },
  //     ],
  //     fallback: [
  //       {
  //         source: "/:path*",
  //         destination: "/custom-404/a",
  //         has: [
  //           {
  //             type: "host",
  //             value: "custom-404-fallback-demo.vercel.app",
  //           },
  //         ],
  //       },
  //       {
  //         source: "/:path*",
  //         destination: "/custom-404/b",
  //         has: [
  //           {
  //             type: "host",
  //             value: "custom-404-fallback-demo-b.vercel.app",
  //           },
  //         ],
  //       },
  //       {
  //         source: "/:path*",
  //         destination: "/custom-404/c",
  //         has: [
  //           {
  //             type: "host",
  //             value: "custom-404-fallback-demo-c.vercel.app",
  //           },
  //         ],
  //       },
  //       {
  //         source: "/:path*",
  //         destination: "/custom-404/a", // Default 404 for other hosts
  //       },
  //     ],
  //   };
  // },
};

export default nextConfig;
