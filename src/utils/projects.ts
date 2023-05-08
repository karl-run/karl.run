import * as R from 'remeda';

import { meta as project1Meta } from '@/app/projects/among-us-stats/index.mdx';
import { meta as project2Meta } from '../app/projects/react-bottom-scroll-listener/index.mdx';
import { meta as project3Meta } from '../app/projects/badstu/index.mdx';
import { meta as project4Meta } from '../app/projects/hot-shop-booking-alerts/index.mdx';
import { meta as project5Meta } from '../app/projects/haikubot/index.mdx';

export function getProjectsMetadata(): [string, ProjectMDXMetadata][] {
  return [
    ['among-us-stats', project1Meta as ProjectMDXMetadata],
    ['react-bottom-scroll-listener', project2Meta as ProjectMDXMetadata],
    ['badstu', project3Meta as ProjectMDXMetadata],
    ['hot-shop-booking-alerts', project4Meta as ProjectMDXMetadata],
    ['haikubot', project5Meta as ProjectMDXMetadata],
  ];
}
