/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  async redirects() {
    return [
      {
        source: '/2018/09/05/spring-boot-schema-first-graphql',
        destination: '/posts/2018-09-05-spring-boot-schema-first-graphql',
        permanent: true,
      },
      {
        source: '/2018/05/07/kotlin-spring-boot-react',
        destination: '/posts/2018-05-07-kotlin-spring-boot-react',
        permanent: true,
      },
      {
        source: '/2017/07/12/publishing-npm-modules',
        destination: '/posts/2017-07-12-publishing-npm-modules',
        permanent: true,
      },
      {
        source: '/2017/06/30/getting-up-and-running-with-testing-react',
        destination: '/posts/2017-06-30-getting-up-and-running-with-testing-react',
        permanent: true,
      },
    ];
  },
};
