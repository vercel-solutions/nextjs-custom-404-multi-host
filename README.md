This example shows how to do a custom 404 page in Next.js that can be personalized based on the `host`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To test the 404, visit any page other than `/`. The 404 will show the host in its HTML.

You can visit the following URLs to see the example in action:

- https://nextjs-custom-404-multi-host.vercel.app/unknown
- https://nextjs-custom-404-multi-host-a.vercel.app/unknown
- https://nextjs-custom-404-multi-host-b.vercel.app/unknown


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
