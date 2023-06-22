/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://battle-for-supermacy-git-dev-team-dao.vercel.app/',
    NEXT_PUBLIC_TWITCH_CLIENT_ID: '58gi289e8ntuuoj29w86mwo011vznu',
    NEXT_PUBLIC_TWITCH_CLIENT_SECRET: '5ceb9ngd7y3w22mvw556ce6s1lznc2',
  },
};

module.exports = nextConfig;
