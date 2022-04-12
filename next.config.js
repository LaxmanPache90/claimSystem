/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  env: {
      mongodburl: "mongodb+srv://Laxman:123@cluster0.6m5dz.mongodb.net/BLOG?retryWrites=true&w=majority",
  }
};

module.exports = nextConfig
