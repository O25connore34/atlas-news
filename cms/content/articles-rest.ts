import type { ArticleRecord } from '../types.ts'

export const restArticles: ArticleRecord[] = [
  {
    id: 'arctic-methane',
    section: 'science',
    publishedAt: '2026-08-25T12:00:00+03:00',
    updatedAt: '2026-08-26T06:40:00+03:00',
    image: '/images/articles/arctic-sensors.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'na-kotelnom-rasshirili-set-datchikov-metana',
        kicker: 'Арктика',
        headline: 'На острове Котельный сеть датчиков метана довели до 112 точек',
        dek: 'Добавили 48 приборов. Зима 2025/26 дала на 19% меньше тревог — потом их списали на обледенение, не на «затишье». Смета 186 млн ₽.',
        alt: 'Низкий полевой домик и мачта с датчиками на тундре под белым небом',
        caption: 'Полевая точка на Котельном. Мачта стоит на гравии, чтобы не сажать бетон в полигональную почву.',
        authorId: 'petrov',
        dateline: 'Тикси — Санкт-Петербург',
        body: [
          {
            type: 'p',
            text: 'Арктический и антарктический институт вместе с Росгидрометом закончили летнюю постановку на острове Котельный: к 64 прошлым точкам добавили 48. Сеть — 112 датчиков метана и сопутствующих метеопараметров. Смета расширения — 186 млн ₽, из них 41 млн — логистика с Тикси.',
          },
          {
            type: 'p',
            text: 'Прошлая зима сначала выглядела «тихой»: тревожных превышений на 19% меньше, чем зимой 2024/25. В апреле разбор записей показал иное. «Часть головок обледенела и писала нули. Это не снижение эмиссии, это отказ прибора, который мы чуть не приняли за новость», — сказал сотрудник института, участвовавший в разборе.',
          },
          {
            type: 'p',
            text: 'Новые датчики ставят с обогревом корпуса и с двойной записью на карту и на спутниковый канал. Интервал опроса — 10 минут, раньше было 30. Данные обещают открыть для университетов с 1 октября, не «по запросу», а пакетом. Формат — netCDF, не таблица в письме.',
          },
          {
            type: 'quote',
            text: 'Нам не нужна красивая кривая к климатическому саммиту. Нам нужен прибор, который не врёт в январе. Иначе январь будут цитировать в августе.',
            cite: 'начальник полевой партии',
          },
          {
            type: 'fact',
            items: [
              { label: 'Точек на острове', value: '112' },
              { label: 'Новых датчиков', value: '48' },
              { label: 'Смета', value: '186 млн ₽' },
              { label: 'Открытие данных', value: '1 октября' },
            ],
          },
        ],
      },
      en: {
        slug: 'kotelny-methane-net-widened-to-112-points',
        kicker: 'Arctic',
        headline: 'Methane net on Kotelny Island is widened to 112 points after a false lull',
        dek: 'Forty-eight sensors added. Winter 2025/26 showed 19% fewer alerts — later written off as icing, not a quiet season. The bill is 186m roubles.',
        alt: 'A low field hut and an instrument mast on tundra under a white sky',
        caption: 'A field point on Kotelny. The mast sits on gravel so they do not pour concrete into patterned ground.',
        authorId: 'petrov',
        dateline: 'Tiksi — St Petersburg',
        body: [
          {
            type: 'p',
            text: 'The Arctic and Antarctic Research Institute and Roshydromet have finished the summer install on Kotelny Island: 48 sensors added to 64. The net is now 112 points for methane and the weather that travels with it. The expansion cost 186m roubles, 41m of that the lift from Tiksi.',
          },
          {
            type: 'p',
            text: 'Last winter first looked quiet: 19% fewer alarm exceedances than winter 2024/25. The April audit said otherwise. “Some heads iced and wrote zeroes. That is not a fall in emissions. That is an instrument failure we nearly filed as news,” said a staffer who sat on the review.',
          },
          {
            type: 'p',
            text: 'The new boxes are heated and write twice: to a card and to a satellite hop. The poll is every ten minutes; it was thirty. The institute says universities will get a dump on 1 October, not “on request”. The format is netCDF, not a spreadsheet in the post.',
          },
          {
            type: 'quote',
            text: 'We do not need a pretty curve for a climate summit. We need a box that does not lie in January. Otherwise January will be quoted in August.',
            cite: 'the field party lead',
          },
          {
            type: 'fact',
            items: [
              { label: 'Points on the island', value: '112' },
              { label: 'New sensors', value: '48' },
              { label: 'Cost', value: '186m ₽' },
              { label: 'Data dump', value: '1 October' },
            ],
          },
        ],
      },
      zh: {
        slug: 'kejieilinei-dao-jiami-jiawan-jiance',
        kicker: '北极',
        headline: '科捷利内岛甲烷监测加密至112个点，去年冬天的“偏安”被证伪',
        dek: '新装48台。2025/26年冬警报少19%，后被记成探头结冰，不是排放真静。预算1.86亿卢布。',
        alt: '白色天空下苔原上的低矮野外小屋与仪器桅杆',
        caption: '科捷利内岛上的测点。桅杆立在砾石上，免得往多边形土里浇混凝土。',
        authorId: 'petrov',
        dateline: '季克西 — 圣彼得堡',
        body: [
          {
            type: 'p',
            text: '北极与南极研究所会同水文气象局完成科捷利内岛夏季布设：在原有64个点上加48台。全网112个甲烷及伴随气象参数探头。扩建预算1.86亿卢布，其中4100万是从季克西运上去的后勤。',
          },
          {
            type: 'p',
            text: '去年冬天起初显得“静”：超标警报比2024/25年冬少19%。四月复查不是这么回事。参与复查的所内人员说：“有的探头结冰，写的是零。那不是排放下降，是仪器罢工，差点被写成新闻。”',
          },
          {
            type: 'p',
            text: '新仪器带壳体加热，双路记录：卡和卫星。采样间隔从30分钟改为10分钟。研究所称10月1日起向大学打包开放，不再“来函再给”。格式是netCDF，不是邮件里的表格。',
          },
          {
            type: 'quote',
            text: '我们不需要一条好看的曲线去气候峰会。我们需要一台一月不撒谎的仪器。否则一月会在八月被引用。',
            cite: '野外队长',
          },
          {
            type: 'fact',
            items: [
              { label: '岛上测点', value: '112' },
              { label: '新增', value: '48台' },
              { label: '预算', value: '1.86亿卢布' },
              { label: '数据开放', value: '10月1日' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'museum-cards',
    section: 'culture',
    publishedAt: '2026-08-26T08:00:00+03:00',
    updatedAt: '2026-08-26T10:20:00+03:00',
    image: '/images/articles/museum-cards.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'v-gime-otkryli-zapasniki-40-tysyach-kartochek',
        kicker: 'Выставки',
        headline: 'В Историческом музее в зал вынесли 40 тысяч карточек учёта',
        dek: 'С 26 августа по 12 января. Карточки 1883–1974 годов. Вторник с 11 до 13 — вход для студентов по студенческому, без сеанса.',
        alt: 'Архивные короба и ящики с каталожными карточками на длинном столе',
        caption: 'До открытия. Карточки не под стекло: посетителя просят не писать поверх, карандаши выдают на входе.',
        authorId: 'han',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Государственный исторический музей с 26 августа ставит в Белом зале компакт-стеллажи и 40 тысяч карточек учёта 1883–1974 годов. Это не «инсталляция про память». Это рабочий каталог, который обычно не покидает запасник. Выставка — до 12 января 2027-го.',
          },
          {
            type: 'p',
            text: 'Куратор отказался называть зал «иммерсивным». «Человек может выдвинуть ящик и увидеть почерк фондохранителя 1911 года. Это достаточно. Свет — 50 люкс, не шоу», — сказала она на обходе для прессы, который длился 22 минуты и обошёлся без фужеров.',
          },
          {
            type: 'p',
            text: 'По вторникам с 11 до 13 студенты проходят по студенческому, без сеанса и без аудиогида. В остальные часы билет 450 ₽, льготный 200. Часть карточек — на немецком и французском; подписи к ящикам — только по-русски, перевод обещают к октябрю «если найдётся ставка».',
          },
          {
            type: 'quote',
            text: 'Мы двадцать лет слышали, что запасник — это пыль. Пыль была. Карточки целее многих сайтов.',
            cite: 'главный хранитель',
          },
        ],
      },
      en: {
        slug: 'history-museum-puts-40000-catalogue-cards-on-the-floor',
        kicker: 'Exhibitions',
        headline: 'The History Museum puts 40,000 catalogue cards on the floor',
        dek: '26 August to 12 January. Cards from 1883–1974. Tuesdays 11:00–13:00, students in on a card, no timed slot.',
        alt: 'Archive boxes and trays of catalogue cards on a long table',
        caption: 'Before opening. The cards are not under glass; visitors are asked not to write on them. Pencils at the door.',
        authorId: 'ridley',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'From 26 August the State Historical Museum is putting compact shelving and 40,000 catalogue cards, 1883–1974, into the White Hall. This is not an “installation about memory”. It is a working catalogue that does not usually leave the stacks. It stays until 12 January 2027.',
          },
          {
            type: 'p',
            text: 'The curator refused to call the room immersive. “A person can pull a drawer and see a keeper’s hand from 1911. That is enough. The light is 50 lux, not a show,” she said on a 22-minute press walk with no glasses of wine.',
          },
          {
            type: 'p',
            text: 'On Tuesdays from 11:00 to 13:00 students go in on a student card, no slot, no audio guide. At other hours the ticket is 450 roubles, 200 concessions. Some cards are in German and French; the drawer labels are Russian only. A translation is promised by October “if a post can be found”.',
          },
          {
            type: 'quote',
            text: 'For twenty years we were told the stacks were dust. There was dust. The cards are in better shape than a good many websites.',
            cite: 'the chief keeper',
          },
        ],
      },
      zh: {
        slug: 'lishi-bowuguan-sishi-wan-dengji-kapian',
        kicker: '展览',
        headline: '国家历史博物馆把四万张登记卡片搬进展厅',
        dek: '8月26日至1月12日。卡片年代1883–1974。周二11时至13时学生证入场，不预约。',
        alt: '长桌上的档案纸箱与一屉屉目录卡片',
        caption: '开展前。卡片不上玻璃；进门发铅笔，请勿在卡片上写。',
        authorId: 'han',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '国家历史博物馆自8月26日起在白厅放入密集架和四万张1883至1974年的登记卡片。这不是“关于记忆的装置”。这是平常不出库房的工作目录。展期至2027年1月12日。',
          },
          {
            type: 'p',
            text: '策展人拒绝把展厅写成沉浸式。她在22分钟的媒体走线里说：“人可以拉开抽屉，看见1911年保管员的字。这就够了。照度50勒克斯，不是演出。”现场没有酒杯。',
          },
          {
            type: 'p',
            text: '每周二11时至13时，学生凭学生证入场，不预约、不配语音。其余时段票价450卢布，优惠200。部分卡片是德文、法文；抽屉标签只有俄文。馆方说十月前“若能找到编制”再补译文。',
          },
          {
            type: 'quote',
            text: '二十年都有人说库房是灰。灰是有的。卡片比许多网站完整。',
            cite: '首席保管',
          },
        ],
      },
    },
  },
  {
    id: 'rehearsal',
    section: 'culture',
    publishedAt: '2026-08-24T19:10:00+03:00',
    updatedAt: '2026-08-26T09:00:00+03:00',
    image: '/images/articles/rehearsal-hall.png',
    imageW: 1200,
    imageH: 900,
    locales: {
      ru: {
        slug: 'filarmoniya-otkroet-sezon-s-shtatom-na-11-chelovek-menshe',
        kicker: 'Музыка',
        headline: 'Филармония откроет сезон 3 сентября со штатом на 11 человек меньше',
        dek: 'Городской контракт урезали на 12%. Сократили не ставки солистов — пульт вторых скрипок и два фагота «по совместительству».',
        alt: 'Пустой репетиционный зал: стулья, пюпитры, закрытый рояль',
        caption: 'Репетиция перенесена на вечер: днём настраивали отопление, которое в августе всё равно не включают.',
        authorId: 'han',
        dateline: 'Москва',
        body: [
          {
            type: 'p',
            text: 'Городской контракт с филармонией на сезон 2026/27 урезали на 12% — до 418 млн ₽. Дирекция 24 августа разослала оркестру список: минус 11 ставок. Солистов не тронули. Сняли пульт вторых скрипок, двух фаготов, оформив их как совместителей, и трёх человек в нотной библиотеке.',
          },
          {
            type: 'p',
            text: 'Открытие — 3 сентября, та же программа Чайковского, что анонсировали в мае. «Мы не будем писать в буклете “камерный состав”. Это не камерный состав, это дырка», — сказал концертмейстер, согласившийся на цитату без фамилии до собрания профсоюза 28 августа.',
          },
          {
            type: 'p',
            text: 'Часть абонементов уже продана по старой сетке. Возврат обещают только если снимут концерт, не если снимут фагот. В кассе к полудню вторника лежало 46 заявлений «на всякий случай». Юрист филармонии называет это «не основанием».',
          },
          {
            type: 'quote',
            text: 'Двенадцать процентов — это не экономия. Это два фагота и библиотека, без которой оркестр играет по памяти, а память — плохой архив.',
            cite: 'музыкант оркестра',
          },
        ],
      },
      en: {
        slug: 'philharmonic-opens-season-eleven-posts-down',
        kicker: 'Music',
        headline: 'The philharmonic opens on 3 September eleven posts down',
        dek: 'The city contract was cut 12%. Not the solo chairs — a second-violin desk and two bassoons kept on as part-timers.',
        alt: 'Empty rehearsal hall with chairs, music stands and a closed piano',
        caption: 'Rehearsal moved to the evening: by day they were bleeding the heating, which is not on in August anyway.',
        authorId: 'ridley',
        dateline: 'Moscow',
        body: [
          {
            type: 'p',
            text: 'The city’s contract with the philharmonic for 2026/27 was cut 12%, to 418m roubles. On 24 August management sent the orchestra a list: eleven posts gone. The solo chairs were left. A second-violin desk and two bassoons were put on part-time contracts; three jobs went in the music library.',
          },
          {
            type: 'p',
            text: 'The season still opens on 3 September, the same Tchaikovsky billed in May. “We will not print ‘reduced forces’ in the booklet. This is not reduced forces. This is a hole,” the leader said, willing to be quoted without a surname until the union meeting on 28 August.',
          },
          {
            type: 'p',
            text: 'Some subscriptions were already sold on the old grid. Refunds are offered only if a concert is pulled, not if a bassoon is. By Tuesday noon the box office had 46 “just in case” letters. The house lawyer calls that “not a basis”.',
          },
          {
            type: 'quote',
            text: 'Twelve percent is not thrift. It is two bassoons and a library. Without the library the orchestra plays from memory, and memory is a poor archive.',
            cite: 'an orchestra player',
          },
        ],
      },
      zh: {
        slug: 'ailieyuan-kaiji-bianzhi-shao-11-ren',
        kicker: '音乐',
        headline: '爱乐乐团9月3日开季，编制少十一人',
        dek: '市政合同削减12%。动的不是首席，是第二小提琴一个谱台，两支巴松改成兼职。',
        alt: '空无一人的排练厅：椅子、谱架、盖上的钢琴',
        caption: '排练改到晚上：白天在排暖气，八月本来也不供暖。',
        authorId: 'han',
        dateline: '莫斯科',
        body: [
          {
            type: 'p',
            text: '市政与爱乐乐团2026/27乐季合同削减12%，至4.18亿卢布。8月24日院方向乐队下发名单：少十一人。首席未动。第二小提琴去掉一个谱台，两支巴松改兼职，乐谱库裁三人。',
          },
          {
            type: 'p',
            text: '开季仍是9月3日，曲目还是五月宣布的柴可夫斯基。首席说：“说明书上不会写‘室内编制’。这不是室内编制，是窟窿。”他同意在28日工会开会前不具姓引用。',
          },
          {
            type: 'p',
            text: '一部分套票已按旧价售出。退票只在整场取消时成立，撤掉巴松不算。截至周二中午，票房收到46封“先登记”的信。院方法务称之为“不构成依据”。',
          },
          {
            type: 'quote',
            text: '百分之十二不是节约。那是两支巴松和谱库。没有谱库，乐队靠记性，记性不是档案。',
            cite: '乐团乐手',
          },
        ],
      },
    },
  },
  {
    id: 'insurance-comment',
    section: 'comment',
    publishedAt: '2026-08-26T09:00:00+01:00',
    updatedAt: '2026-08-26T09:00:00+01:00',
    image: null,
    imageW: 0,
    imageH: 0,
    locales: {
      ru: {
        slug: 'procent-kotoryy-ne-pakhnet-zernom',
        kicker: 'Колонка',
        headline: 'Процент, который не пахнет зерном',
        dek: '3,8% — это не прогноз погоды на Чёрном море. Это плата за очередь, которую удобно называть риском.',
        alt: '',
        caption: '',
        authorId: 'ridley',
        dateline: 'Лондон',
        body: [
          {
            type: 'p',
            text: 'Когда андеррайтер поднимает военный риск с 2,1 до 3,8 процента, газеты пишут «напряжённость». Напряжённость — слово из сводки. На столе у брокера лежит другое: четырнадцать корпусов у входа в пролив и клиент, который хочет услышать, что море закрыто. Море не закрыто. Очередь закрыта для тех, кто не платит новую цифру.',
          },
          {
            type: 'p',
            text: 'Разница важна, потому что закрытое море — это форс-мажор в контракте. Очередь — это демередж и тишина в синдикате. Фермер в этом разговоре не участвует: его цена зафиксирована раньше, чем лондонский чайник закипел. Платит тот, у кого в таблице есть строка «FOB плюс».',
          },
          {
            type: 'p',
            text: 'В 2022-м ставка военного риска на этом театре прыгала двузначными числами, и тогда хотя бы врали честно: «мы не знаем». Сейчас знают достаточно, чтобы назначить 3,8 и назвать это осторожностью. Осторожность, которая совпадает с пиком августовской погрузки, пахнет не порохом. Она пахнет календарём.',
          },
          {
            type: 'p',
            text: 'Железная дорога через Казахстан — не альтернатива, а упрёк. Две недели и 11–14 долларов за тонну. Если рынок готов это платить, значит, 3,8 — не потолок страха, а пол нового сезона. Писать об этом как о шторме удобно. Шторм не выставляет счёт в процентах от корпуса.',
          },
        ],
      },
      en: {
        slug: 'a-rate-that-does-not-smell-of-grain',
        kicker: 'Comment',
        headline: 'A rate that does not smell of grain',
        dek: '3.8% is not a weather forecast for the Black Sea. It is the price of a queue that it suits everyone to call risk.',
        alt: '',
        caption: '',
        authorId: 'ridley',
        dateline: 'London',
        body: [
          {
            type: 'p',
            text: 'When an underwriter moves war risk from 2.1 to 3.8 percent, the papers write “tensions”. Tension is a word for a bulletin. On the broker’s desk sits something else: fourteen hulls at the mouth of the strait, and a client who would like to be told the sea is closed. The sea is not closed. The queue is closed to anyone who will not pay the new number.',
          },
          {
            type: 'p',
            text: 'The distinction matters because a closed sea is force majeure in the contract. A queue is demurrage and a quiet syndicate. The farmer is not in this conversation: his price was struck before the kettle boiled in London. The bill sits with whoever still has a line in the sheet marked “FOB plus”.',
          },
          {
            type: 'p',
            text: 'In 2022 the war-risk on that water jumped in double digits, and at least the lie was honest: “we do not know”. They know enough now to post 3.8 and call it prudence. Prudence that arrives with the August loading peak does not smell of powder. It smells of the calendar.',
          },
          {
            type: 'p',
            text: 'Rail through Kazakhstan is not an alternative. It is a rebuke. A fortnight and $11–14 a tonne. If the market will pay that, then 3.8 is not a ceiling on fear. It is the floor of a new season. It is convenient to write this as weather. Weather does not invoice you as a percentage of the hull.',
          },
        ],
      },
      zh: {
        slug: 'mei-you-liangshi-wei-de-feilv',
        kicker: '评论',
        headline: '这个百分数没有粮食的气味',
        dek: '3.8%不是黑海天气预报。它是排队的价钱，只是大家都愿意把它叫成风险。',
        alt: '',
        caption: '',
        authorId: 'ridley',
        dateline: '伦敦',
        body: [
          {
            type: 'p',
            text: '承保人把战争险从2.1%调到3.8%，报纸就写“紧张”。紧张是简报用词。经纪人桌上另有一叠：海峡口十四艘船，以及一个想听“海关了”的客户。海没关。队列对不付新数字的人关了。',
          },
          {
            type: 'p',
            text: '这个区别要紧，因为海关了是合约里的不可抗力。排队是滞期费，以及辛迪加的沉默。农民不在这桌：他的价在伦敦的水壶开之前就定了。单子落在表格里还有“离岸价加”那一行的人身上。',
          },
          {
            type: 'p',
            text: '2022年那片水上的战争险跳到两位数，那时至少谎说得老实：“我们不知道。”现在知道得够多，够写下3.8，再把它叫成谨慎。谨慎若正好赶在八月装期高峰，它就不带火药味。它带日历味。',
          },
          {
            type: 'p',
            text: '走哈萨克斯坦铁路不是替代，是责备。多两周，每吨多11到14美元。市场若肯付，3.8就不是恐惧的天花板，是新季节的地板。把它写成天气很省事。天气不会按船体的百分比开票。',
          },
        ],
      },
    },
  },
]
