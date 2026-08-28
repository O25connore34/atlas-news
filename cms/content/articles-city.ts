import type { ArticleRecord } from '../types.ts'

export const cityArticles: ArticleRecord[] = [
  {
    id: 'tram-depot',
    section: 'city',
    publishedAt: '2026-08-26T07:20:00+03:00',
    updatedAt: '2026-08-26T10:05:00+03:00',
    image: '/images/articles/tram-depot.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'tramvajnoe-depo-3-zakroyut-na-14-mesyacev',
        kicker: 'Наземный транспорт',
        headline: 'Трамвайное депо № 3 закроют на 14 месяцев: 11 маршрутов укоротят',
        dek: 'С 8 сентября. Обещают 42 дополнительных автобуса. Смета 4,7 млрд ₽. Из 60 вагонов 28 ждут новые тележки — их повезут в Тверь.',
        alt: 'Смотровая яма и разобранный трамвай в старом депо',
        caption: 'Канава депо № 3. Боковины вагона сняты, тележки ещё стоят; вывоз начнут в ночь на 9 сентября.',
        authorId: 'yureva',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Депо № 3 на Лесной закроют 8 сентября на 14 месяцев. Капремонт — смотровые канавы 1958 года, крыша и тяговая подстанция. Смета, которую дептранс опубликовал вечером 25 августа, — 4,7 млрд ₽. Одиннадцать маршрутов укоротят до временных колец на Белорусской, Лесной и у Миусской площади.',
          },
          {
            type: 'p',
            text: 'На замену обещают 42 автобуса: 18 со Щёлковского, 24 — наём у коммерческого перевозчика. Интервал на «семёрке» в час пик, по расчёту ведомства, вырастет с 6 до 9 минут. Жители трёх районов уже написали 1 100 обращений в электронную приёмную; типовой ответ — «компенсирующие маршруты будут отмечены на остановке за пять дней».',
          },
          {
            type: 'p',
            text: 'Из 60 вагонов, приписанных к депо, 28 отправят в Тверь на тележки. Остальные перегонят в депо им. Баумана, где свободных канав — шесть. «Ночной выпуск с Бауманской мы уже считали: 44 вагона, не 60. Часть рейсов просто снимут», — сказал мастер, попросивший не называть фамилию.',
          },
          {
            type: 'quote',
            text: 'Нам говорили про «обновление без остановки движения». Остановка будет. Вопрос — кто вечером стоит 18 минут на Лесной в ноябре.',
            cite: 'пассажир маршрута 7, запись на остановке',
          },
          {
            type: 'fact',
            items: [
              { label: 'Закрытие', value: '8 сентября, 14 месяцев' },
              { label: 'Смета', value: '4,7 млрд ₽' },
              { label: 'Маршрутов укоротят', value: '11' },
              { label: 'Доп. автобусы', value: '42' },
            ],
          },
        ],
      },
      en: {
        slug: 'depot-no-3-closes-14-months-eleven-tram-lines-cut',
        kicker: 'Moscow city',
        headline: 'Depot No. 3 closes for 14 months; 11 tram lines to be cut short',
        dek: 'From 8 September. Forty-two extra buses are promised. The bill is 4.7bn roubles. Twenty-eight of 60 cars need new bogies in Tver.',
        alt: 'Inspection pit and a stripped tram inside an old depot',
        caption: 'The pit at Depot No. 3. Side panels off, bogies still in place; the first cars leave on the night of 9 September.',
        authorId: 'yureva',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'Tram Depot No. 3 on Lesnaya Street will close on 8 September for 14 months. The works cover inspection pits from 1958, the roof and the traction substation. The transport department posted the bill on the evening of 25 August: 4.7bn roubles. Eleven routes will be cut back to temporary loops at Belorusskaya, Lesnaya and Miusskaya Square.',
          },
          {
            type: 'p',
            text: 'Forty-two buses are promised in compensation: 18 from Shchyolkovsky depot, 24 hired from a private operator. Peak headway on route 7, on the department’s own arithmetic, will rise from six minutes to nine. Residents of three districts have already sent 1,100 notes to the electronic office. The stock reply is that “replacement routes will be marked at the stop five days ahead”.',
          },
          {
            type: 'p',
            text: 'Of the 60 cars assigned to the depot, 28 will go to Tver for new bogies. The rest move to the Bauman depot, which has six free pits. “We have already counted the night turnout from Baumanskaya: 44 cars, not 60. Some trips will simply come off,” a foreman said, asking not to be named.',
          },
          {
            type: 'quote',
            text: 'They talked about “renewal without stopping the service”. The service will stop. The question is who stands 18 minutes on Lesnaya in November.',
            cite: 'a passenger on route 7, recorded at the stop',
          },
          {
            type: 'fact',
            items: [
              { label: 'Closure', value: '8 Sept, 14 months' },
              { label: 'Cost', value: '4.7bn ₽' },
              { label: 'Routes shortened', value: '11' },
              { label: 'Extra buses', value: '42' },
            ],
          },
        ],
      },
      zh: {
        slug: 'sanh-hao-dianche-cheliangduan-tingyun-14-ge-yue',
        kicker: '莫斯科市政',
        headline: '莫斯科3号有轨电车车辆段停运14个月，11条线路将截短',
        dek: '自9月8日起。承诺加开42辆公交。预算47亿卢布。60辆车中有28辆要送去特维尔换转向架。',
        alt: '旧车辆段地沟与被拆开侧板的电车',
        caption: '3号车辆段地沟。侧板已拆，转向架还在；头一批车9月9日夜里运走。',
        authorId: 'yureva',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '列斯纳亚街上的3号车辆段将于9月8日关闭，工期14个月。工程包括1958年的地沟、屋顶和牵引变电站。交通局25日晚公布预算：47亿卢布。十一条线路截短到白俄罗斯站、列斯纳亚和米乌斯广场的临时环线。',
          },
          {
            type: 'p',
            text: '补偿方案是42辆公交：18辆来自晓尔科夫斯基车队，24辆租自民营公司。按局里自己的算术，7路高峰间隔将从6分钟拉到9分钟。三个区的居民已向电子信箱提交1100条意见；统一回复是“替代线路会在五日前写在站牌上”。',
          },
          {
            type: 'p',
            text: '该段60辆车中，28辆送往特维尔更换转向架，其余转到鲍曼车辆段——那里空余地沟只有六条。一名工长说：“鲍曼斯卡亚的夜班我们已经算过，是44辆，不是60辆。有的班次会直接拿掉。”他不愿署名。',
          },
          {
            type: 'quote',
            text: '他们说“更新而不停运”。会停。问题是十一月谁在列斯纳亚站上站十八分钟。',
            cite: '7路乘客，站台录音',
          },
          {
            type: 'fact',
            items: [
              { label: '停运', value: '9月8日起，14个月' },
              { label: '预算', value: '47亿卢布' },
              { label: '截短线路', value: '11条' },
              { label: '加开公交', value: '42辆' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'goods-yard',
    section: 'politics',
    publishedAt: '2026-08-25T18:40:00+03:00',
    updatedAt: '2026-08-26T08:50:00+03:00',
    image: '/images/articles/goods-yard.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'sud-vernul-uchastok-u-tovarnoy-stancii-gorodu',
        kicker: 'Земля и суд',
        headline: 'Суд вернул городу 6,4 га у товарной станции после девяти лет аренды',
        dek: 'Застройщик хотел 1 200 квартир. Кассация оставила решение первой инстанции. Мэрия обещает парк и разворотное кольцо трамвая, не жильё.',
        alt: 'Заросшие подъездные пути и кирпичный склад у товарной станции',
        caption: 'Спорный участок вдоль путей. Арендатор ставил бытовки; их вывезут до 12 сентября по определению суда.',
        authorId: 'yureva',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Арбитражный суд Московского округа 25 августа оставил в силе решение о возврате городу 6,4 га вдоль товарной станции «Москва-Товарная». Договор аренды 2017 года расторгли: участок давали под «логистический комплекс», а в 2023-м в градплане появились жилые пятна на 1 200 квартир.',
          },
          {
            type: 'p',
            text: 'Застройщик настаивал, что смена вида разрешённого использования — право, а не нарушение. Суд счёл иначе: целевое назначение в договоре не меняли, разрешение на жильё не выдавали. «Девять лет — это не срок давности для возврата казённой земли, если цель подменили», — сказано в мотивировке, опубликованной вечером.',
          },
          {
            type: 'p',
            text: 'В мэрии вечером разослали комментарий на 11 строк: парк и разворотное кольцо для трамваев, которые останутся без депо № 3. Желающих застроить участок, по словам чиновника префектуры, «больше не рассматривают». Жители двух соседних домов, напротив, просят не парк, а крытую пересадку на МЦД — письмом в управу от 12 августа, 340 подписей.',
          },
          {
            type: 'quote',
            text: 'Нам всё равно, парк это или кольцо. Нам важно, чтобы сюда не приехала ещё одна башня без школы. Школа в радиусе километра уже на 128%.',
            cite: 'старшая по дому 14, корпус 2',
          },
          {
            type: 'fact',
            items: [
              { label: 'Площадь', value: '6,4 га' },
              { label: 'Аренда с', value: '2017' },
              { label: 'Проект жилья', value: '1 200 квартир' },
              { label: 'Вывоз бытовок', value: 'до 12 сентября' },
            ],
          },
        ],
      },
      en: {
        slug: 'court-returns-goods-yard-plot-to-the-city',
        kicker: 'Land and the courts',
        headline: 'Court returns 6.4 ha at the goods yard after a nine-year lease fight',
        dek: 'The developer wanted 1,200 flats. Cassation let the first judgment stand. City hall now talks of a park and a tram loop, not housing.',
        alt: 'Weedy rail spurs and a brick warehouse beside a goods yard',
        caption: 'The disputed strip along the tracks. The tenant’s cabins must go by 12 September, the court said.',
        authorId: 'yureva',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'The Moscow District arbitration court on 25 August upheld the return of 6.4 hectares along the Moskva-Tovarnaya goods yard to the city. A 2017 lease was ended: the land was let for a “logistics complex”; in 2023 the zoning map grew residential patches for 1,200 flats.',
          },
          {
            type: 'p',
            text: 'The developer argued that a change of permitted use was a right, not a breach. The court disagreed: the purpose in the lease had not been amended, and no housing permit had been issued. “Nine years is not a limitation period for returning public land if the purpose was swapped,” the reasons said, posted in the evening.',
          },
          {
            type: 'p',
            text: 'City hall put out an 11-line note: a park and a turning loop for the trams that will lose Depot No. 3. A prefecture official said further housing schemes “are no longer under review”. Residents of two neighbouring blocks, in a 12 August letter with 340 names, asked not for a park but for a covered interchange to the urban rail.',
          },
          {
            type: 'quote',
            text: 'Park or loop, we do not mind. We mind another tower without a school. The school within a kilometre is already at 128%.',
            cite: 'the stair monitor at 14, building 2',
          },
          {
            type: 'fact',
            items: [
              { label: 'Area', value: '6.4 ha' },
              { label: 'Lease since', value: '2017' },
              { label: 'Housing scheme', value: '1,200 flats' },
              { label: 'Cabins to go', value: 'by 12 September' },
            ],
          },
        ],
      },
      zh: {
        slug: 'fayuan-panhuan-huochang-liudi',
        kicker: '土地与法院',
        headline: '法院将货场邻地6.4公顷判还市政，九年租约争端收场',
        dek: '开发商曾想建1200套住宅。巡回庭维持一审。市政现在说公园和电车回转环，不说住房。',
        alt: '货场旁荒草里的专用线和砖砌仓库',
        caption: '沿铁路线的争议地块。租户的活动板房须在9月12日前清走，裁定书写明。',
        authorId: 'han',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '莫斯科巡回仲裁法院8月25日维持原判，将“莫斯科货站”沿线6.4公顷土地交还市政。2017年租约被解除：地是按“物流综合体”租的，2023年控规上却长出1200套住宅的色块。',
          },
          {
            type: 'p',
            text: '开发商辩称变更用地性质是权利，不是违约。法院不接受：租约目的未改，住宅许可也未发。裁定书晚间公布，其中一句写：“若目的被掉包，九年也不是公地返还的时效。”',
          },
          {
            type: 'p',
            text: '市政当晚发了十一行说明：公园，以及3号车辆段停运后电车要用的回转环。区政府一名官员说，住房方案“不再研究”。两栋邻居8月12日联名340人，信里要的不是公园，是通往市郊铁路的有顶换乘。',
          },
          {
            type: 'quote',
            text: '公园还是环线，我们不挑。我们挑的是别再来一座没有学校的塔楼。一公里内的学校已经到128%。',
            cite: '14号楼2单元楼栋长',
          },
          {
            type: 'fact',
            items: [
              { label: '面积', value: '6.4公顷' },
              { label: '起租', value: '2017年' },
              { label: '住宅方案', value: '1200套' },
              { label: '板房清场', value: '9月12日前' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'morning-market',
    section: 'city',
    publishedAt: '2026-08-26T06:15:00+03:00',
    updatedAt: '2026-08-26T09:10:00+03:00',
    image: '/images/articles/morning-market.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'optovaya-kapusta-podorozhala-na-18-procentov',
        kicker: 'Продовольствие',
        headline: 'На утренней базе капуста на 18% дороже прошлого августа',
        dek: 'Пропуск 210 тонн за ночь против 260 в 2024-м. Свёкла держится. Хозяйства ссылаются на ГСМ и нехватку водительских смен.',
        alt: 'Ящики с капустой и свёклой на оптовой базе ранним утром, весы на переднем плане',
        caption: 'Приёмка в 4:40. Весовщик ещё не ставил дневной коэффициент: ночная цена пишется отдельно.',
        authorId: 'yureva',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'На продовольственной базе в 4:40 белокочанная капуста шла по 28 ₽ за килограмм оптом — на 18% выше прошлого 26 августа. Свёкла — 22 ₽, почти как год назад. За ночь через ворота проехало 210 тонн против 260 в тот же день 2024 года: не спрос, говорят кладовщики, а машины.',
          },
          {
            type: 'p',
            text: '«Водительская смена стоит 8 400 ₽ туда-обратно по области, в прошлом августе было 6 900. Дизель — 67 ₽. Мы не закладываем наценку «потому что август», мы закладываем, что третий человек в бригаде не вышел», — сказал фермер из Коломенского округа, разгружавший две фуры.',
          },
          {
            type: 'p',
            text: 'Розница на ярмарках выходного дня пока отстаёт: капуста 39–42 ₽. Сеть «из трёх букв», по наблюдению корреспондента в трёх магазинах САО, держит 44,90 и не меняла ценник с 18 августа. Разница съедается не на прилавке, а на ночном въезде: пропуска с 3:00 режут до 40 машин в час, очередь стоит до Ярославки.',
          },
          {
            type: 'quote',
            text: 'Если к десятому сентября не вернут ночной лимит в 60 машин, мы уйдём на площадку в области. Там дешевле ворота, дороже плечо до магазина.',
            cite: 'диспетчер базы, имя в редакции',
          },
        ],
      },
      en: {
        slug: 'wholesale-cabbage-up-18-percent-on-the-dawn-market',
        kicker: 'Food prices',
        headline: 'Cabbage at the dawn market is 18% dearer than last August',
        dek: 'Throughput 210 tonnes a night against 260 in 2024. Beetroot is steady. Farms point to diesel and missing driving shifts.',
        alt: 'Crates of cabbage and beetroot in a wholesale hall at dawn, scales in the foreground',
        caption: 'Intake at 04:40. The weigher has not yet put on the day coefficient; the night price is written aside.',
        authorId: 'yureva',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'At the produce depot at 04:40, wholesale white cabbage was 28 roubles a kilo — 18% above 26 August last year. Beetroot was 22, almost unchanged. 210 tonnes came through the gate in the night, against 260 on the same date in 2024. It is not demand, storemen said. It is lorries.',
          },
          {
            type: 'p',
            text: '“A driving shift is 8,400 roubles out and back in the oblast; last August it was 6,900. Diesel is 67. We are not adding a mark-up ‘because it is August’. We are adding that the third man in the crew did not show,” said a farmer from the Kolomna district unloading two trucks.',
          },
          {
            type: 'p',
            text: 'Weekend fair retail still lags: cabbage 39–42 roubles. A three-letter chain, in three shops in the northern district, holds 44.90 and has not changed the ticket since 18 August. The gap is eaten at the night gate, not on the counter: passes from 03:00 are cut to 40 lorries an hour, and the queue reaches the Yaroslavl highway.',
          },
          {
            type: 'quote',
            text: 'If they have not put the night limit back to 60 lorries by 10 September, we will go to a yard in the oblast. Cheaper gate, longer haul to the shop.',
            cite: 'a depot dispatcher, name held',
          },
        ],
      },
      zh: {
        slug: 'chenjian-pifa-juanxin-cai-zhang-18',
        kicker: '菜价',
        headline: '凌晨批发市场卷心菜比去年八月贵18%',
        dek: '一夜吞吐210吨，2024年同日是260吨。甜菜根稳住。产地把账算在柴油和缺班司机上。',
        alt: '黎明批发市场里成箱卷心菜与甜菜根，前景是杆秤',
        caption: '4:40收货。司磅员还没加上白昼系数，夜价另记一行。',
        authorId: 'han',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '凌晨4:40，食品批发基地的白卷心菜批发价每公斤28卢布，比去年8月26日高18%。甜菜根22卢布，几乎没动。一夜进门210吨，2024年同日是260吨。仓管说不是需求，是车子。',
          },
          {
            type: 'p',
            text: '一名从科洛姆纳区来卸两车货的农户说：“司机一班来回州里8400卢布，去年八月6900。柴油67。我们不是因为八月才加价，是因为班子里第三个人没来。”',
          },
          {
            type: 'p',
            text: '周末集市零售还没跟上：卷心菜39到42卢布。北区三家“三个字母”的连锁仍标44.90，8月18日以来没改价签。差价不是吃在柜台上，是吃在夜闸：凌晨3点起每小时只放40辆，队伍排到雅罗斯拉夫尔公路。',
          },
          {
            type: 'quote',
            text: '若9月10日前夜班限额不回到60辆，我们就改去州里的场子。门便宜，到店的路程贵。',
            cite: '基地调度，姓名存编辑部',
          },
        ],
      },
    },
  },
  {
    id: 'school-lab',
    section: 'city',
    publishedAt: '2026-08-25T15:30:00+03:00',
    updatedAt: '2026-08-26T07:55:00+03:00',
    image: '/images/articles/school-lab.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'himkabinety-v-17-shkolah-sdadut-k-1-sentyabrya-2027',
        kicker: 'Образование',
        headline: 'Химкабинеты в 17 школах обещают сдать к 1 сентября 2027 года',
        dek: 'Смета 890 млн ₽. В четырёх зданиях до сих пор вытяжки 1970-х. Учителя просят не запускать уроки в пыли: подрядчик уже сдвигался дважды.',
        alt: 'Школьный химический кабинет в ремонте: новые столы рядом со старыми партами',
        caption: 'Лицей № 1547. Новые столешницы ещё в плёнке; старые парты сложили к батареям, чтобы не мешали коробам вентиляции.',
        authorId: 'yureva',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Департамент образования 25 августа назвал 17 школ, где химические лаборатории закроют на капремонт до 1 сентября 2027 года. Смета — 890 млн ₽, в среднем 52 млн на объект. В списке четыре здания, где вытяжные шкафы не меняли с 1974–1978 годов: это отдельные акты обследования, их приложили к закупке.',
          },
          {
            type: 'p',
            text: 'Подрядчик — тот же, что в прошлом году сдавал физику в шести школах ЮАО со сдвигом на 11 недель. «Мы не против ремонта. Мы против сентября в коридоре. Если снова сдвинут, пусть сразу пишут: химия — дистант по средам», — сказала учительница лицея, где корреспондент снимал пустой кабинет.',
          },
          {
            type: 'p',
            text: 'Родители уже считают кабинеты-«доноры»: в одном округе на 17 школ останется 9 рабочих лабораторий. Перевозка реактивов между зданиями по регламенту запрещена без отдельного допуска; допуска к 26 августа нет. На запрос в дептранс про школьный автобус между двумя лицеями к закрытию полосы не ответили.',
          },
          {
            type: 'quote',
            text: 'Мне не нужна «современная среда». Мне нужна тяга, которая не свистит, и кран, который не капает на журнал. Это два акта, не концепция.',
            cite: 'завуч одной из школ списка',
          },
          {
            type: 'fact',
            items: [
              { label: 'Школ в списке', value: '17' },
              { label: 'Смета', value: '890 млн ₽' },
              { label: 'Срок', value: '1 сентября 2027' },
              { label: 'Вытяжки 1970-х', value: '4 здания' },
            ],
          },
        ],
      },
      en: {
        slug: 'chemistry-labs-in-17-schools-due-september-2027',
        kicker: 'Schools',
        headline: 'Chemistry labs in 17 schools are promised for 1 September 2027',
        dek: 'The bill is 890m roubles. Four buildings still have 1970s fume hoods. Teachers ask not to teach in the dust: the contractor has slipped twice.',
        alt: 'A school chemistry room mid-renovation, new benches beside stacked old desks',
        caption: 'Lyceum 1547. New tops still in film; old desks stacked by the radiators to clear the ventilation trunks.',
        authorId: 'yureva',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'The education department on 25 August named 17 schools whose chemistry labs will close for rebuild until 1 September 2027. The bill is 890m roubles, about 52m per site. Four buildings still have fume hoods last changed in 1974–78: those survey acts were attached to the tender.',
          },
          {
            type: 'p',
            text: 'The contractor is the same firm that handed over physics rooms in six southern-district schools last year, 11 weeks late. “We are not against the works. We are against September in the corridor. If they slip again, they should write it down: chemistry is remote on Wednesdays,” said a teacher at the lyceum where this paper photographed the empty room.',
          },
          {
            type: 'p',
            text: 'Parents are already counting “donor” labs: one district will have nine working rooms for 17 schools. Moving reagents between buildings is forbidden without a separate permit; none had been issued by 26 August. A query to the transport department about a shuttle between two lyceums had not been answered by page lock.',
          },
          {
            type: 'quote',
            text: 'I do not need a “learning environment”. I need a hood that does not whistle and a tap that does not drip on the register. That is two survey acts, not a concept.',
            cite: 'a deputy head on the list',
          },
          {
            type: 'fact',
            items: [
              { label: 'Schools listed', value: '17' },
              { label: 'Cost', value: '890m ₽' },
              { label: 'Due', value: '1 September 2027' },
              { label: '1970s hoods', value: '4 buildings' },
            ],
          },
        ],
      },
      zh: {
        slug: '17-suo-zhongxue-huaxue-shiyanshi-gaizao',
        kicker: '校园',
        headline: '十七所中学化学实验室承诺2027年9月1日完工',
        dek: '预算8.9亿卢布。四栋楼仍用上世纪七十年代通风柜。教师要求别在扬尘里上课：承包商已延误两次。',
        alt: '整修中的中学化学教室，新实验台与旧课桌堆在一起',
        caption: '1547中学。新台面还覆着膜；旧课桌靠暖气堆好，给通风管让路。',
        authorId: 'han',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '教育局8月25日公布十七所中学名单，化学实验室将封闭改造至2027年9月1日。预算8.9亿卢布，平均每处5200万。名单里四栋楼的通风柜停在1974至1978年：勘察件已附在招标文件后。',
          },
          {
            type: 'p',
            text: '承包商与去年南区六所学校物理教室的是同一家，当时晚了十一周。一名教师在本报拍摄的空教室里说：“我们不反对修。我们反对九月站走廊。若再拖，请写明：化学周三改远程。”',
          },
          {
            type: 'p',
            text: '家长已开始数“支援教室”：一个区十七所学校只剩九间能用的实验室。按规程，试剂不得无证跨楼转运；截至26日许可证未发。本报向交通部门询问两所中学之间的校车，截稿未得回复。',
          },
          {
            type: 'quote',
            text: '我不要“学习环境”。我要一台不啸叫的通风柜，一个不滴到点名册上的水龙头。那是两份勘察，不是概念。',
            cite: '名单中一所学校的教务主任',
          },
          {
            type: 'fact',
            items: [
              { label: '列入学校', value: '17所' },
              { label: '预算', value: '8.9亿卢布' },
              { label: '工期', value: '2027年9月1日' },
              { label: '七十年代通风柜', value: '4栋' },
            ],
          },
        ],
      },
    },
  },
]
