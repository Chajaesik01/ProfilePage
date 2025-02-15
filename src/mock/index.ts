import { ModalItem, ProjectItem, StudyItem } from '@/types/types';
import main2 from '@/assets/main2.gif';
import project1 from '@/assets/project1.gif';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import sideProject from '@/assets/sideProject.png';
import bodyYgymCommunity from '@/assets/bodyYgymCommunity.png';
import computer_algorithm from '@/assets/computerAlgorithm.png';
import research1 from '@/assets/research1.png';
import formatter from '@/assets/fomatter.gif';
import deadlift from '@/assets/deadlift.gif';
import bench from '@/assets/bench.gif';

export const modalItems: ModalItem[] = [
  {
    id: 1,
    img: [main2],
    title: '주석이 꼭 필요할까?',
    desc: '주석은 코드의 가독성을 높이고,<br />다른 개발자나 미래의 자신이 코드를 이해하는 데 <br />도움을 주지만 해당 언어의 문법을 이해만 하고 있으면 <br />누구든지 알아보기 쉬운 명확하고 직관적이게 코드를 <br />작성하려 노력합니다.',
  },
  {
    id: 2,
    img: [deadlift, bench],
    title: '현실에 안주하지 않습니다',
    desc: `3대 500을 알고 계신가요?<br />
많은 사람들이 이를 목표로 삼았지만 부상이나 귀찮음으로 중간에 포기하는 것을 보았습니다<br />
그러나 저는 허리 디스크와 세 번의 부상에도 운동 방법을 공부 후 적용해보면서 부상의 위험에서 벗어나 목표를 향해 나아가고 있습니다 <br />
무게가 2.5kg 차이로 성공과 실패가 나뉘면서도 수많은 실패 후의 한 번의 성공이 운동을 지속하게 만드는 원동력이 되었습니다.<br />
이러한 경험을 통해 느낀점은 개발 과정에서의 어려움도 성장의 기회이며, 이를 극복하면서 작은 성공들이 자신감을 높이고 지속적인 학습을 도와 더 나은 자신으로 성장할 수 있음을 깨달았습니다.`,
  },
];

export const projectItem: ProjectItem[] = [
  {
    id: 1,
    img: project1,
    title: '토이 프로젝트1',
    stack: 'Vanilla JS, CSS',
    desc: '',
    url: 'https://github.com/Dev-FE-2/toy-project1-team2-intranet-project',
  },
  {
    id: 2,
    img: project2,
    title: '토이 프로젝트2',
    stack: 'Typescript, StyledComponents, Redux, SWR',
    desc: '',
    url: 'https://github.com/Dev-FE-2/toy-project2-team3',
  },
  {
    id: 3,
    img: project3,
    title: '토이 프로젝트3',
    stack: 'Typescript, TailwindCSS, Zustand, Tanstack-query, Supabase',
    desc: '',
    url: 'https://github.com/Dev-FE-2/toy-project3-team2-wefit',
  },
  {
    id: 4,
    img: sideProject,
    title: '사이드 프로젝트',
    stack: 'Typescript, StyledComponents, Zustand, Tanstack-query, Supabase',
    desc: '',
    url: 'https://github.com/Team-HandinHand/Side-project-HandinHand',
  },
  {
    id: 5,
    img: bodyYgymCommunity,
    title: '바디와이짐 커뮤니티 앱',
    stack: 'Swift, Firebase',
    desc: '',
    url: 'https://github.com/Chajaesik01/bodyYgymISO',
  },
  {
    id: 6,
    img: computer_algorithm,
    title: '음식 추천 알고리즘',
    stack: 'C++',
    desc: '',
    url: 'https://github.com/Chajaesik01/computer_algorithm',
  },
  {
    id: 7,
    img: research1,
    title: '카테고리 분류 및 유사도 분석',
    stack: 'Python, OpenCV',
    desc: '',
    url: 'https://github.com/Chajaesik01/research1',
  },
  {
    id: 8,
    img: formatter,
    title: 'Python Code Formatter',
    stack: 'Python',
    desc: '',
    url: 'https://github.com/Chajaesik01/pyrestyle',
  },
];

export const studyItem: StudyItem[] = [
  {
    index: 1,
    topic: 'React',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/React',
    blog_link:
      'https://vitamin3000.tistory.com/category/React%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 2,
    topic: 'Redux',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/Redux',
    blog_link:
      'https://vitamin3000.tistory.com/category/Redux%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 3,
    topic: 'Tanstack-query',
    github_link:
      'https://github.com/Chajaesik01/FE-Learning/tree/main/TanStackQuery',
    blog_link:
      'https://vitamin3000.tistory.com/category/TanStackQuery%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 4,
    topic: 'Zustand',
    github_link: 'https://github.com/Chajaesik01/FE-Learning/tree/main/Zustand',
    blog_link:
      'https://vitamin3000.tistory.com/category/Zustand%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 5,
    topic: 'Axios',
    github_link: '',
    blog_link:
      'https://vitamin3000.tistory.com/category/Axios%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
  {
    index: 6,
    topic: 'Webpack',
    github_link: '',
    blog_link:
      'https://vitamin3000.tistory.com/category/Webpack%20%EA%B3%B5%EC%8B%9D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0',
  },
];
