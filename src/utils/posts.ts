import { meta as post1Meta } from '../app/posts/getting-up-and-running-with-testing-react/index.mdx';
import { meta as post2Meta } from '../app/posts/kotlin-spring-boot-react/index.mdx';
import { meta as post3Meta } from '../app/posts/publishing-npm-modules/index.mdx';
import { meta as post4Meta } from '../app/posts/spring-boot-schema-first-graphql/index.mdx';

export function getPostsMetadata(): [string, PostMDXMetadata][] {
  return [
    ['getting-up-and-running-with-testing-react', post1Meta],
    ['kotlin-spring-boot-react', post2Meta],
    ['publishing-npm-modules', post3Meta],
    ['spring-boot-schema-first-graphql', post4Meta],
  ];
}
