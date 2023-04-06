import { meta as project1Meta } from '../app/projects/among-us-stats-tracker/index.mdx';
import { meta as project2Meta } from '../app/projects/react-bottom-scroll-listener/index.mdx';

export function getProjectsMetadata(): [string, ProjectMDXMetadata][] {
  return [
    ['among-us-stats-tracker', project1Meta],
    ['react-bottom-scroll-listener', project2Meta],
  ];
}
