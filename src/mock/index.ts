import { ModalItem, ProjectItem, StudyItem } from '@/types/types';
import main2 from '@/assets/main2.gif';
import project1 from '@/assets/project1.gif';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import sideProject from '@/assets/sideProject.png';
export const modalItems: ModalItem[] = [
  {
    id: 1,
    img: main2,
    title: '학습을 즐깁니다.',
    desc: '이 근본적인 질문에는 ',
  },
  {
    id: 2,
    img: main2,
    title: '주석이 꼭 필요할까?',
    desc: '이 근본적인 질문에는 ',
  },
  {
    id: 3,
    img: main2,
    title: 'Project 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit sit amet neque tincidunt pulvinar. Donec vitae velit non felis ullamcorper sagittis.',
  },
  {
    id: 4,
    img: main2,
    title: 'Project 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit sit amet neque tincidunt pulvinar. Donec vitae velit non felis ullamcorper sagittis.',
  },
];

export const projectItem: ProjectItem[] = [
  {
    id: 1,
    img: project1,
    title: '토이 프로젝트1',
    stack: 'Vanilla JS, CSS',
    desc: '설명',
    url: 'https://github.com/Dev-FE-2/toy-project1-team2-intranet-project',
  },
  {
    id: 2,
    img: project2,
    title: '토이 프로젝트2',
    stack: 'Typescript, StyledComponents, Redux, SWR',
    desc: '설명',
    url: 'https://github.com/Dev-FE-2/toy-project2-team3',
  },
  {
    id: 3,
    img: project3,
    title: '토이 프로젝트3',
    stack: 'Typescript, TailwindCSS, Zustand, Tanstack-query, Supabase',
    desc: '설명',
    url: 'https://github.com/Dev-FE-2/toy-project3-team2-wefit',
  },
  {
    id: 4,
    img: sideProject,
    title: '사이드 프로젝트',
    stack: 'Typescript, StyledComponents, Zustand, Tanstack-query, Supabase',
    desc: '설명',
    url: 'https://github.com/Team-HandinHand/Side-project-HandinHand',
  },
];

export const studyItem: StudyItem[] = [
  {
    index: 1,
    topic: 'React',
    desc: '',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/React',
    blog_link:
      'https://vitamin3000.tistory.com/category/React%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 2,
    topic: 'Redux',
    desc: '',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/Redux',
    blog_link:
      'https://vitamin3000.tistory.com/category/Redux%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 3,
    topic: 'Tanstack-query',
    desc: '',
    github_link:
      'https://github.com/Chajaesik01/FE-Learning/tree/main/TanStackQuery',
    blog_link:
      'https://vitamin3000.tistory.com/category/TanStackQuery%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 4,
    topic: 'Zustand',
    desc: '',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/Zustand',
    blog_link:
      'https://vitamin3000.tistory.com/category/Zustand%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 5,
    topic: 'Axios',
    desc: '',
    github_link: '',
    blog_link:
      'https://vitamin3000.tistory.com/category/Axios%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 6,
    topic: 'Webpack',
    desc: '',
    github_link: '',
    blog_link:
      'https://vitamin3000.tistory.com/category/Webpack%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
];
