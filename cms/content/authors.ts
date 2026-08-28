import type { AuthorRecord } from '../types.ts'

export const authors: AuthorRecord[] = [
  {
    id: 'skvortsova',
    photo: '/images/authors/skvortsova.png',
    names: {
      ru: 'Елена Скворцова',
      en: 'Elena Skvortsova',
      zh: '叶莲娜·斯克沃尔佐娃',
    },
    titles: {
      ru: 'экономический обозреватель',
      en: 'Moscow business reporter',
      zh: '莫斯科经济记者',
    },
    desks: {
      ru: 'Экономическая служба, Москва',
      en: 'Moscow bureau',
      zh: '莫斯科经济组',
    },
    bios: {
      ru: 'Ведёт зерно, страховку и ставку с 2014 года. Пишет так, чтобы цифру можно было проверить по первичному документу, а не по чужому заголовку.',
      en: 'Covers grain, insurance slips and the policy rate from Moscow. Trained as a commodities reporter; still asks to see the notice, not the rumour of the notice.',
      zh: '驻莫斯科，跑粮食、保险单和利率。发稿前要看承保条原件，不写“据悉有通知”。',
    },
  },
  {
    id: 'yureva',
    photo: '/images/authors/yureva.png',
    names: {
      ru: 'Мария Юрьева',
      en: 'Maria Yuryeva',
      zh: '玛丽亚·尤里耶娃',
    },
    titles: {
      ru: 'обозреватель городской редакции',
      en: 'city reporter, Moscow',
      zh: '莫斯科市政记者',
    },
    desks: {
      ru: 'Городской отдел',
      en: 'City desk',
      zh: '市政组',
    },
    bios: {
      ru: 'Маршруты, суды по земле, школы. Считает, что городская новость без номера маршрута и срока работ — это объявление, а не материал.',
      en: 'Trams, land courts, school works. Files the route number and the closing date in the first six lines or not at all.',
      zh: '电车、土地诉讼、校园工程。路口编号和停工日期不进前六行，稿子就不发。',
    },
  },
  {
    id: 'petrov',
    photo: '/images/authors/petrov.png',
    names: {
      ru: 'Андрей Петров',
      en: 'Andrei Petrov',
      zh: '安德烈·彼得罗夫',
    },
    titles: {
      ru: 'научный редактор',
      en: 'science editor',
      zh: '科学主编',
    },
    desks: {
      ru: 'Отдел науки',
      en: 'Science',
      zh: '科学组',
    },
    bios: {
      ru: 'Геофизика и климатические сети. Раньше работал в полевых партиях; теперь проверяет, не приняли ли обледенение датчика за «хорошую новость».',
      en: 'Geophysics and climate networks. Used to work field seasons; now the job is to stop an iced sensor being sold as a quiet winter.',
      zh: '地球物理和气候观测网。出过野外，现在的工作是别把探头结冰写成“今冬偏安”。',
    },
  },
  {
    id: 'ridley',
    photo: '/images/authors/ridley.png',
    names: {
      ru: 'Том Ридли',
      en: 'Tom Ridley',
      zh: '汤姆·里德利',
    },
    titles: {
      ru: 'собственный корреспондент в Лондоне',
      en: 'comment and markets, London',
      zh: '伦敦评论与市场',
    },
    desks: {
      ru: 'Лондонское бюро',
      en: 'London edition',
      zh: '伦敦办事处',
    },
    bios: {
      ru: 'Страховой рынок и фрахт. Колонки пишет коротко: если мысль не умещается в 4 000 знаков, значит, её ещё нет.',
      en: 'Insurance and freight. Keeps the column under 800 words; if the point needs a second mug of tea, it is not yet a point.',
      zh: '保险与运费。评论不超过八百词；需要再续一杯茶才能说清的，先不写。',
    },
  },
  {
    id: 'han',
    photo: '/images/authors/han.png',
    names: {
      ru: 'Хань Чэнчжи',
      en: 'Han Chengzhi',
      zh: '韩承志',
    },
    titles: {
      ru: 'корреспондент шанхайской редакции',
      en: 'Shanghai correspondent',
      zh: '本报记者',
    },
    desks: {
      ru: 'Шанхайское бюро',
      en: 'Shanghai bureau',
      zh: '上海采访部',
    },
    bios: {
      ru: 'Муниципалитет, культура, школа. Следит за тем, как решения управы доезжают до остановки и до лаборатории, а не только до пресс-релиза.',
      en: 'Municipality, culture, schools. Follows a decision until it reaches a stop or a lab bench, not the press office.',
      zh: '市政、文化、校园。跟踪的是文件落到站点和实验台之后，而不是新闻稿发出之时。',
    },
  },
  {
    id: 'lin',
    photo: '/images/authors/lin.png',
    names: {
      ru: 'Линь Чжэньхуа',
      en: 'Lin Zhenhua',
      zh: '林振华',
    },
    titles: {
      ru: 'обозреватель по логистике и сырью',
      en: 'shipping and commodities',
      zh: '航运与大宗',
    },
    desks: {
      ru: 'Шанхай, экономическая служба',
      en: 'Shanghai business desk',
      zh: '经济组',
    },
    bios: {
      ru: 'Янцзы, сухогрузы, зерно. Держит в столе осадки по Ханькоу за двадцать лет и не верит апрелю, пока не увидит август.',
      en: 'The Yangtze, dry bulk, grain. Keeps twenty years of Hankou flow in a drawer and does not trust April until August has spoken.',
      zh: '长江、干散货、粮食。抽屉里放着汉口二十年流量，四月的话要等八月来对。',
    },
  },
]
