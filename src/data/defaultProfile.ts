import type { ProfileConfig } from '../schema/profile'

// 曾丽 · 个人 3D 岛屿主页档案（依据公开履历与生财有术分享整理）
// 求学 / 家乡 / 城市坐标 / 1~6 段职业履历 映射为主岛 3D 建筑；projects 为「第二秘境」作品展台。
export const defaultProfile: ProfileConfig = {
  name: '曾丽在迭代',
  tagline:
    '营销出身的 1 万+ 小时运营 · 私域负责人 · AI 博主 · 黄有璨认证教练 · 从湖南小城到北上深杭头部平台持续迭代',
  github: 'https://github.com/lilizeng7-max',
  linkedin: '',
  biome: 'ocean',
  carrier: 'submarine',
  timeOfDay: 'day',
  weather: 'sakura',
  worldShape: 'archipelago',
  satellites: ['lighthouse-reef', 'airfield-harbor', 'skyline-cbd'],
  decorProps: ['cherry-grove', 'campfire-tent', 'dutch-windmill'],
  companyCount: 6,
  places: [
    {
      id: 'university',
      name: '湘潭大学 · 广告营销',
      short: '求学',
      kind: 'education',
      style: 'university',
      badgeText: '母校',
      roles: [
        {
          title: '广告营销类专业 · 本科',
          location: '湖南 · 湘潭',
          notes: [
            '在湘潭大学打下营销与传播底子，为之后 4A 与互联网大厂运营路线埋下伏笔。',
          ],
        },
      ],
    },
    {
      id: 'hometown-hunan',
      name: '湖南 · 小城出发',
      short: '湖南',
      kind: 'landmark',
      style: 'mountain-stilts',
      badgeText: '家乡',
      roles: [
        {
          title: '成长坐标',
          location: '湖南省',
          notes: [
            '从湖南一个小县城出发，后来很幸运地在北京、深圳、杭州等城市的各个头部平台学习成长。',
          ],
        },
      ],
    },
    {
      id: 'hometown-shenzhen',
      name: '深圳 · 现居主场',
      short: '深圳',
      kind: 'landmark',
      style: 'metro-landmark',
      badgeText: '现居',
      roles: [
        {
          title: '生财同城 · 私域与 AI 探索',
          location: '广东 · 深圳',
          notes: [
            '组织深圳圈友线下聚会，持续在私域、小红书与 AI 内容方向实践与分享。',
          ],
        },
      ],
    },
    {
      id: 'career-1',
      name: '蓝标 · 4A 营销策划',
      short: '1 · 蓝标',
      kind: 'career',
      style: 'film-stage',
      badgeText: '4A',
      floors: 4,
      roles: [
        {
          title: '营销策划 · 约 1 年',
          location: '4A 广告公司',
          notes: [
            '广告营销类专业毕业后进入 4A，在营销领域学习 + 工作累计超 1 万小时。',
          ],
        },
      ],
    },
    {
      id: 'career-2',
      name: '阿里巴巴 · 实习与运营',
      short: '2 · 阿里',
      kind: 'career',
      style: 'cloud-logistics',
      badgeText: '阿里',
      floors: 5,
      roles: [
        {
          title: '大三赴杭州实习 · 大厂运营',
          location: '浙江 · 杭州',
          notes: [
            '大三到杭州阿里实习；毕业后继续在大厂做运营，覆盖用户全生命周期与不同产品形态。',
          ],
        },
      ],
    },
    {
      id: 'career-3',
      name: '百度 · 总部运营',
      short: '3 · 百度',
      kind: 'career',
      style: 'tower',
      badgeText: '百度',
      floors: 5,
      roles: [
        {
          title: '产品 / 用户运营',
          location: '北京 · 百度总部',
          notes: [
            '毕业一年多后进入百度总部等大厂；11 年前开始接触铁粉与用户运营，持续沉淀方法论。',
          ],
        },
      ],
    },
    {
      id: 'career-4',
      name: 'AI 公司 · 内容与增长',
      short: '4 · AI',
      kind: 'career',
      style: 'tech',
      badgeText: 'AI',
      floors: 4,
      roles: [
        {
          title: 'AI + 营销内容方向',
          location: '深圳 · 远程协作',
          notes: [
            '在 AI 公司场景把运营经验与内容营销结合，副业聚焦 AI 博主与智能体应用探索。',
          ],
        },
      ],
    },
    {
      id: 'career-5',
      name: '创业 · 私域与知识产品',
      short: '5 · 创业',
      kind: 'career',
      style: 'indie-lab',
      badgeText: '创业',
      floors: 4,
      roles: [
        {
          title: '私域负责人 · 从 0 到百万级私域',
          location: '线上 · 深圳',
          notes: [
            '主业负责私域，曾从 0 运营过年入百万级私域；帮助伙伴用运营六要素与转化话术落地项目。',
          ],
        },
      ],
    },
    {
      id: 'career-6',
      name: '志愿者社群 · 生财有术',
      short: '6 · 社群',
      kind: 'career',
      style: 'coffee-roastery',
      badgeText: '社群',
      floors: 3,
      roles: [
        {
          title: '生财四期圈友 · 志愿者与教练',
          location: '生财有术 · 深海圈',
          notes: [
            '深度参与社群志愿者与线下聚会；个人成长认证教练，帮运营营销人挖掘核心竞争力。',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: 'project-xhs-private',
      name: '391 粉小红书引流私域 432 人成交 308 单',
      tag: '小红书 · 私域',
      boothStyle: 'booth-crystal',
      summary:
        '低粉高转化复盘：用几百字话术与运营六要素，把公域流量高效导入私域并完成成交。',
    },
    {
      id: 'project-superfans',
      name: '高价值的铁粉挖掘及运营',
      tag: '用户运营',
      boothStyle: 'booth-holo',
      summary:
        '11 年用户运营视角：如何识别超级用户、提升留存，并在首次触达中完成高 GMV 转化。',
    },
    {
      id: 'project-private-trilogy',
      name: '私域转化三部曲',
      tag: '话术 · GMV',
      boothStyle: 'booth-arcade',
      summary:
        '10 分钟内靠精简话术完成首次触达成交的案例拆解，可复用的私域转化节奏。',
    },
    {
      id: 'project-ai-notes',
      name: 'AI 时代别焦虑 · 万字笔记',
      tag: 'AI 博主',
      boothStyle: 'booth-monolith',
      summary:
        '营销出身运营人视角：把 AI 当作外挂而非对手，记录学习 Gemini 与 AI 内容创作的心得。',
    },
    {
      id: 'project-zengming-live',
      name: '曾鸣《看十年》公开课笔记',
      tag: 'AI 战略',
      boothStyle: 'booth-mech',
      summary:
        '整理智能商业、AI 原生组织与价值创造议题，输出可执行的个人行动计划。',
    },
    {
      id: 'project-island',
      name: '曾丽在迭代 · 3D 个人主页',
      tag: '开源站点',
      boothStyle: 'booth-holo',
      repoUrl: 'https://github.com/lilizeng7-max/zengli-island',
      summary:
        '基于 MIT 开源 3D Island 引擎定制的交互式履历岛 — 潜艇下潜看作品，樱花海上观生涯。',
    },
  ],
}
