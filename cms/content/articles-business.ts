import type { ArticleRecord } from '../types.ts'

export const businessArticles: ArticleRecord[] = [
  {
    id: 'grain-corridor',
    section: 'business',
    publishedAt: '2026-08-26T05:10:00+03:00',
    updatedAt: '2026-08-26T09:42:00+03:00',
    image: '/images/articles/grain-terminal.png',
    imageW: 1600,
    imageH: 900,
    locales: {
      ru: {
        slug: 'strahovschiki-podnyali-tarif-zernovogo-koridora',
        kicker: 'Черноморский вывоз',
        headline: 'Страховщики подняли тариф на зерновой коридор до 3,8%',
        dek: 'За неделю военный риск переписали с 2,1% страховой суммы. У Босфора ждут четырнадцать судов, август в Черноморске отстаёт на полмиллиона тонн.',
        alt: 'Портальные краны и элеваторы на зерновом причале в пасмурный день',
        caption: 'Перевалка на глубоководном причале. Снимок сделан до полуденной волны, когда ветер ещё не рвал плёнку на штабелях.',
        authorId: 'skvortsova',
        dateline: 'Новороссийск — Москва',
        body: [
          {
            type: 'p',
            text: 'Военный риск по черноморским зерновозам за семь дней вырос почти вдвое. В рассылке, которую 25 августа получили брокеры в Москве и Стамбуле, синдикаты указали 3,8% от страховой суммы против 2,1% на предыдущей неделе. Речь о покрытии корпуса и груза на переход до Босфора и дальше, не о стоянке.',
          },
          {
            type: 'p',
            text: '«Это не запрет на выход, это цена очереди», — сказал «Атласу» сотрудник крупного брокера, просивший не называть контору: часть клиентов всё ещё считает ставку в долларах за тонну. По его словам, из четырнадцати судов на якоре у северного входа в пролив девять идут с украинской кукурузой и пшеницей, пять — из российских портов.',
          },
          {
            type: 'p',
            text: 'В Черноморске, по данным экспедиторов, с 1 по 25 августа отгрузили 1,1 млн т зерновых при плане 1,6 млн. Новороссийск идёт ровнее: 2,4 млн т, на 4% ниже прошлого августа. Пшеница 12,5% протеина на базисе FOB — $228 за тонну, на $6 дороже понедельника.',
          },
          { type: 'h', text: 'Кто платит разницу' },
          {
            type: 'p',
            text: 'Разницу закладывают в контракт. Третий год подряд это делает не столько хозяйство, сколько трейдер с окном на перевалке. В Минсельхозе на запрос к часу закрытия полосы не ответили. Два собеседника в отрасли говорят, что обсуждается субсидия части премии для малых отправителей — «цифры пока из воздуха, 0,4–0,6 процентного пункта».',
          },
          {
            type: 'quote',
            text: 'Если тариф удержится выше трёх с половиной до конца сентября, часть рейсов уйдёт в железнодорожный экспорт через Казахстан. Это медленнее на две недели и дороже на $11–14, но предсказуемо.',
            cite: 'логист зерновой компании, имя в редакции',
          },
          {
            type: 'fact',
            items: [
              { label: 'Военный риск', value: '3,8% (было 2,1%)' },
              { label: 'Суда у Босфора', value: '14' },
              { label: 'Черноморск, 1–25.08', value: '1,1 млн т' },
              { label: 'Пшеница FOB Новороссийск', value: '$228/т' },
            ],
          },
        ],
      },
      en: {
        slug: 'black-sea-grain-cover-rises-to-3-8',
        kicker: 'Commodities',
        headline: 'Insurers lift Black Sea grain cover to 3.8% as August sailings bunch',
        dek: 'The war-risk slip moved from 2.1% in a week. Fourteen ships wait at the Bosporus; Chornomorsk is half a million tonnes behind its plan.',
        alt: 'Portal cranes and grain elevators on a bulk berth under overcast sky',
        caption: 'A deep-water grain berth photographed before the midday wind got into the stack covers.',
        authorId: 'ridley',
        dateline: 'London',
        body: [
          {
            type: 'p',
            text: 'War-risk premia on Black Sea grain sailings jumped to 3.8% of insured value this week, from 2.1% seven days earlier, according to a notice sent to brokers in London and Istanbul on 25 August. The cover is for hull and cargo on the passage to the Bosporus and beyond, not for time at anchor.',
          },
          {
            type: 'p',
            text: 'Fourteen vessels were waiting at the northern mouth of the strait at dawn on Wednesday. Nine of them were carrying Ukrainian maize and wheat. Loadings at Chornomorsk reached only 1.1m tonnes between 1 and 25 August against a 1.6m plan. Novorossiysk has shipped 2.4m tonnes, 4% below last August.',
          },
          {
            type: 'p',
            text: '“This is not a closure. It is the price of the queue,” a London broker said, declining to be named because the slip had not been posted. Wheat, 12.5% protein, was offered FOB Novorossiysk at $228 a tonne, $6 up on Monday.',
          },
          { type: 'h', text: 'Who carries the extra points' },
          {
            type: 'p',
            text: 'The extra is going into the FOB, not back to the farm gate, traders in London said. Two people familiar with talks in Moscow said a subsidy of 0.4 to 0.6 points for smaller shippers had been floated. The agriculture ministry had not replied by this edition’s 09:00 lock.',
          },
          {
            type: 'quote',
            text: 'If the rate sticks above three and a half through September, some cargo will go by rail through Kazakhstan. It adds a fortnight and $11–14 a tonne. It does not add a morning of unanswered calls to the syndicate.',
            cite: 'a grain logistics manager',
          },
          {
            type: 'fact',
            items: [
              { label: 'War-risk premia', value: '3.8% (was 2.1%)' },
              { label: 'Waiting at the Bosporus', value: '14 ships' },
              { label: 'Chornomorsk, 1–25 Aug', value: '1.1m tonnes' },
              { label: 'Wheat FOB Novorossiysk', value: '$228/t' },
            ],
          },
        ],
      },
      zh: {
        slug: 'hei-hai-liangshi-baoxian-shangdiao',
        kicker: '航运·粮食',
        headline: '黑海粮食战争险一周内调至3.8%，八月船期在海峡口扎堆',
        dek: '保额费率由2.1%上调。博斯普鲁斯北口候泊十四艘；切尔诺莫尔斯克比计划少装五十万吨。',
        alt: '阴天里的粮食码头门吊与筒仓',
        caption: '深水粮食泊位。拍摄时午后的风还没掀开堆垛上的苫布。',
        authorId: 'lin',
        dateline: '上海',
        body: [
          {
            type: 'p',
            text: '本报讯（记者林振华）黑海粮食船队的战争险费率在一周之内从保额的2.1%上调至3.8%。伦敦、伊斯坦布尔的经纪人于8月25日收到承保条，上海贸易台在夜班核对后写入今日头版。承保范围是船体和货物驶往博斯普鲁斯及以远，不含锚地待时。',
          },
          {
            type: 'p',
            text: '截至26日凌晨，海峡北口仍有十四艘船候泊，九艘装乌克兰玉米和小麦。切尔诺莫尔斯克港8月1日至25日仅装出110万吨，低于160万吨的计划。新罗西斯克装出240万吨，同比仍低4%。蛋白质含量12.5%的小麦新罗西斯克离岸价报每吨228美元，较周一上涨6美元。',
          },
          {
            type: 'p',
            text: '一位要求不具名的伦敦经纪人说：“这不是封航，是排队的价钱。”多位在上海做进口的贸易商告诉《经纬》，多出来的保费会被写进离岸价，而不是直接落到农场。接近莫斯科农口的人士称，有人提议给中小发货人补贴0.4至0.6个百分点；至北京时间下午截稿，农业部门未回复。',
          },
          { type: 'h', text: '改走铁路要多两周' },
          {
            type: 'p',
            text: '对中国进口盘的影响尚未写成到岸价。华南小麦库存仍覆盖41天，但船期已经往后挪。一位粮食物流负责人说，若到9月底费率仍停在3.5%以上，一部分货会改走哈萨克斯坦铁路：“多两周，每吨多11到14美元，不必早晨盯着承保条。”',
          },
          {
            type: 'quote',
            text: '排队写进保费，比封航好听。账是一样要付的。',
            cite: '上海某进口台负责人',
          },
          {
            type: 'fact',
            items: [
              { label: '战争险费率', value: '3.8%（前值2.1%）' },
              { label: '海峡候泊', value: '14艘' },
              { label: '切尔诺莫尔斯克1–25日', value: '110万吨' },
              { label: '小麦FOB新罗西斯克', value: '228美元/吨' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'rate-hold',
    section: 'business',
    publishedAt: '2026-08-25T16:05:00+03:00',
    updatedAt: '2026-08-26T08:15:00+03:00',
    image: '/images/articles/ministry-rain.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'cb-sohranil-stavku-16-i-ukazal-na-rynok-truda',
        kicker: 'Денежная политика',
        headline: 'ЦБ сохранил ставку 16% и снова указал на рынок труда',
        dek: 'Семеро — за паузу, двое — за снижение на 50 пунктов. Безработица 2,3%, июльская инфляция 6,1% год к году. Следующее заседание — 25 октября.',
        alt: 'Мокрые гранитные ступени у тяжёлых дверей ведомства под дождём',
        caption: 'Вход в здание на Неглинной после утреннего дождя. Решение опубликовали в 13:30, пресс-конференция — через час.',
        authorId: 'skvortsova',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Совет директоров Банка России 25 августа оставил ключевую ставку на 16% годовых. В пресс-релизе семь абзацев, главный — про рынок труда: безработица 2,3% «остаётся вблизи исторических минимумов», зарплаты в июле выросли на 9,4% год к году в реальном выражении. Инфляция — 6,1%.',
          },
          {
            type: 'p',
            text: 'Два члена совета, как следует из комментария «близкого к дискуссии» источника, предлагали шаг вниз на 50 пунктов. Публично раскола не показали. «Пауза — это не нейтральность. Это отказ снижать, пока вакансии не остынут», — сказал экономист, готовивший записку для банковского комитета, и попросил не называть банк.',
          },
          {
            type: 'p',
            text: 'Рынок в моменте почти не качнулся: доходность ОФЗ 10 лет — 15,02%, на 3 пункта ниже утренней. Ипотечные выдачи в июле, по предварительной оценке «Дом.РФ», 286 млрд ₽, на 11% меньше июня. Строители ждут не ставки, а лимита семейной программы на IV квартал — его всё ещё нет в подписанном виде.',
          },
          {
            type: 'quote',
            text: 'Мы можем обсуждать 50 пунктов в октябре, если августовская инфляция не вылезет выше 6,3. Пока это условие, а не обещание.',
            cite: 'фраза с пресс-конференции, без стенограммы в раздатке',
          },
          {
            type: 'fact',
            items: [
              { label: 'Ключевая ставка', value: '16,00%' },
              { label: 'Инфляция, июль', value: '6,1% г/г' },
              { label: 'Безработица', value: '2,3%' },
              { label: 'Следующее заседание', value: '25 октября' },
            ],
          },
        ],
      },
      en: {
        slug: 'central-bank-holds-16-points-to-labour',
        kicker: 'Monetary policy',
        headline: 'Russia’s central bank holds 16% and points again at the labour market',
        dek: 'Seven voted to wait, two wanted a 50bp cut. Unemployment is 2.3%; July inflation 6.1%. The next meeting is 25 October.',
        alt: 'Wet granite steps and heavy doors of a government building in the rain',
        caption: 'The Neglinnaya entrance after morning rain. The decision went out at 13:30; the press conference an hour later.',
        authorId: 'ridley',
        dateline: 'London',
        body: [
          {
            type: 'p',
            text: 'The Bank of Russia kept its key rate at 16% on 25 August. The statement ran to seven paragraphs. The one that mattered was labour: unemployment at 2.3%, “near historic lows”, real wages up 9.4% year on year in July. Inflation printed 6.1%.',
          },
          {
            type: 'p',
            text: 'Two members of the board wanted a 50-basis-point cut, a person familiar with the discussion said. They did not say so in public. “A pause is not neutrality. It is a refusal to cut while vacancies are still hot,” said an economist who writes for a bank committee and asked not to name the bank.',
          },
          {
            type: 'p',
            text: 'Ten-year OFZ yields slipped three basis points to 15.02%. July mortgage originations, on a preliminary Dom.RF figure, were 286bn roubles, 11% below June. Builders are waiting less for the rate than for the signed Q4 cap on the family subsidy. It is still not on paper.',
          },
          {
            type: 'quote',
            text: 'We can talk about 50 basis points in October if August inflation does not print above 6.3. That is a condition, not a promise.',
            cite: 'from the press conference, not in the handout',
          },
          {
            type: 'fact',
            items: [
              { label: 'Key rate', value: '16.00%' },
              { label: 'Inflation, July', value: '6.1% y/y' },
              { label: 'Unemployment', value: '2.3%' },
              { label: 'Next meeting', value: '25 October' },
            ],
          },
        ],
      },
      zh: {
        slug: 'eluosi-yanghang-weichi-16',
        kicker: '货币政策',
        headline: '俄罗斯央行按兵16%，声明把笔墨留给劳动力市场',
        dek: '七人主张暂停，两人要降50个基点。失业率2.3%，七月通胀6.1%。下次会议10月25日。',
        alt: '雨中衙署门前湿漉漉的花岗石台阶',
        caption: '内格林纳亚大街入口，晨雨刚过。决议13:30公布，记者会隔一小时。',
        authorId: 'lin',
        dateline: '上海',
        body: [
          {
            type: 'p',
            text: '俄罗斯央行8月25日将关键利率维持在16%。声明七段，真正用力的一段写劳动力：失业率2.3%，“仍近历史低位”，七月实际工资同比升9.4%。通胀6.1%。',
          },
          {
            type: 'p',
            text: '据接近讨论的人士说，两名理事主张降50个基点，但没有公开唱反调。一位给银行委员会写备忘录的经济学家说：“暂停不是中性，是职位还热着就不降。”他要求不写银行名。',
          },
          {
            type: 'p',
            text: '十年期国债收益率下行3个基点至15.02%。房贷发放据“住房发展”初步数，七月2860亿卢布，比六月少11%。开发商等的不是利率本身，是四季度家庭补贴额度的签字件，至今未落纸。对人民币盘，卢布午后波动不足0.3%，上海外汇台称之为“没有新故事的一天”。',
          },
          {
            type: 'quote',
            text: '若八月通胀不高于6.3，十月可以谈50个基点。这是条件，不是承诺。',
            cite: '记者会上口说，未进书面材料',
          },
          {
            type: 'fact',
            items: [
              { label: '关键利率', value: '16.00%' },
              { label: '七月通胀', value: '同比6.1%' },
              { label: '失业率', value: '2.3%' },
              { label: '下次会议', value: '10月25日' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'yangtze-draft',
    section: 'business',
    publishedAt: '2026-08-26T04:40:00+08:00',
    updatedAt: '2026-08-26T11:05:00+08:00',
    image: '/images/articles/yangtze-barges.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'mezhen-na-yanczy-srezala-osadku-barzh-do-3-2-m',
        kicker: 'Китайский стол',
        headline: 'Межень на Янцзы второй месяц режет осадку барж до 3,2 м',
        dek: 'На участке Ухань — Чэнлинцзи вместо обычных 4,5 м. Цемент и уголь стоят по 36 часов. Сток у Ханькоу — 41% августовской нормы.',
        alt: 'Две баржи на сузившемся фарватере Янцзы, вокруг обсохшие песчаные косы',
        caption: 'Баржи на перекате ниже Уханя. Слева — обсохшая коса, которой в прошлом августе ещё не было на лоции.',
        authorId: 'lin',
        dateline: 'Ухань',
        body: [
          {
            type: 'p',
            text: 'Гидрология Янцзы на участке от Уханя до Чэнлинцзи второй месяц подряд ограничивает осадку барж 3,2 метрами при обычных 4,5. На угольных и цементных рейдах среднее ожидание — 36 часов. У гидропоста Ханькоу сток в первой декаде августа составил 41% многолетней нормы для этого месяца.',
          },
          {
            type: 'p',
            text: '«Мы делим состав: 1 800 тонн вместо 2 600, и всё равно садимся на перекате после полудня, когда ветер сгоняет воду», — сказал капитан, который ходит этим плесом четырнадцатый сезон. Имя он просил не ставить: судовладелец ещё торгуется с грузоотправителем о демередже.',
          },
          {
            type: 'p',
            text: 'Фрахт на 1 500-тонную баржу Ухань — Нанкин вырос до 38 юаней за тонну с 29 в июне. Часть цемента уходит на автопоезда: это плюс 22 юаня и очередь на мосту. Шанхайские трейдеры закладывают в октябрьские контракты «осеннюю межень» отдельной строкой — так не писали с 2022 года.',
          },
          {
            type: 'quote',
            text: 'Норма вернётся не раньше осеннего паводка, а паводок в этом году гидрологи рисуют слабым. Это не новость для лоции, это новость для цены.',
            cite: 'сотрудник гидропоста, Ухань',
          },
          {
            type: 'fact',
            items: [
              { label: 'Допустимая осадка', value: '3,2 м (норма 4,5)' },
              { label: 'Ожидание на рейде', value: '36 ч' },
              { label: 'Сток у Ханькоу', value: '41% нормы августа' },
              { label: 'Фрахт Ухань–Нанкин', value: '¥38/т' },
            ],
          },
        ],
      },
      en: {
        slug: 'yangtze-low-water-caps-barge-draft-at-3-2m',
        kicker: 'China desk',
        headline: 'Yangtze low water caps barge draft at 3.2 m for a second month',
        dek: 'The Wuhan–Chenglingji stretch usually takes 4.5 m. Cement and coal wait 36 hours. Hankou flow is 41% of the August median.',
        alt: 'Two barges in a narrowed Yangtze channel with exposed sandbars',
        caption: 'Barges on a shoal below Wuhan. The sandbar to the left was not on last August’s chart.',
        authorId: 'lin',
        dateline: 'Wuhan',
        body: [
          {
            type: 'p',
            text: 'Hydrology on the Yangtze between Wuhan and Chenglingji has held barge draft to 3.2 metres for a second month. The usual allowance is 4.5. Average waiting time on the cement and coal roads is 36 hours. At the Hankou gauge, early-August flow was 41% of the long-run median for the month.',
          },
          {
            type: 'p',
            text: '“We split the tow: 1,800 tonnes instead of 2,600, and we still sit down on the shoal after noon, when the wind pushes the water out,” said a skipper in his fourteenth season on the reach. He asked not to be named: the owner is still arguing demurrage with the shipper.',
          },
          {
            type: 'p',
            text: 'Freight on a 1,500-tonne barge from Wuhan to Nanjing has risen to 38 yuan a tonne from 29 in June. Some cement has gone to road: another 22 yuan and a queue at the bridge. Shanghai traders are writing “autumn low water” as its own line in October contracts. They have not done that since 2022.',
          },
          {
            type: 'quote',
            text: 'The river will not come back before the autumn flood, and the hydrologists are drawing that flood thin. That is not news for the chart. It is news for the price.',
            cite: 'a gauge officer in Wuhan',
          },
          {
            type: 'fact',
            items: [
              { label: 'Allowed draft', value: '3.2 m (usual 4.5)' },
              { label: 'Waiting time', value: '36 hours' },
              { label: 'Hankou flow', value: '41% of August median' },
              { label: 'Wuhan–Nanjing freight', value: '¥38/t' },
            ],
          },
        ],
      },
      zh: {
        slug: 'changjiang-qiuhan-bochuan-chishui-32-mi',
        kicker: '航运',
        headline: '长江秋旱持续，武汉至城陵矶驳船吃水再限3.2米',
        dek: '常年可走4.5米。水泥、煤炭平均候泊36小时。汉口站流量只有八月中位的四成一。',
        alt: '江面收窄，两艘驳船搁在浅滩附近，沙洲露出水面',
        caption: '武汉下游浅滩上的驳船。左侧沙洲去年八月的航图上还没有。',
        authorId: 'lin',
        dateline: '武汉',
        body: [
          {
            type: 'p',
            text: '本报讯（记者林振华）长江武汉至城陵矶段连续第二个月把驳船吃水限制在3.2米，常年可走4.5米。水泥、煤炭锚地平均候泊36小时。汉口站八月上旬流量为该月多年中位的41%。',
          },
          {
            type: 'p',
            text: '一名在此航段跑了十四年的船长说：“我们把拖带拆成1800吨，不再装2600，中午风把水推走，还是要坐浅。”他不愿署名：船东还在和货主争滞期费。',
          },
          {
            type: 'p',
            text: '武汉到南京1500吨级驳船运价从六月的每吨29元涨到38元。一部分水泥改走汽运，每吨再多22元，还要在桥头排队。上海贸易台已把“秋旱”单独写成十月合约的一行——上一次这样写是2022年。',
          },
          {
            type: 'quote',
            text: '水位要等秋汛，今年的秋汛水文画得瘦。这不是航道新闻，是价格新闻。',
            cite: '武汉某水文站工作人员',
          },
          {
            type: 'fact',
            items: [
              { label: '允许吃水', value: '3.2米（常年4.5）' },
              { label: '候泊', value: '36小时' },
              { label: '汉口流量', value: '八月中位的41%' },
              { label: '武汉–南京运价', value: '38元/吨' },
            ],
          },
        ],
      },
    },
  },
]
