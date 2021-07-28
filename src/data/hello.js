/* `ip2nationCountries` (`code`, `country`, `language`, `hello`} */
const greeting= [
{'ad': 'Hola'},
{'ae':'Marhaban Bik'},
{'af':'Salam Alaikum'},
{'ag':'Hello'},
{'ai': 'Hello'},
{'al': 'Tungjatjeta'},
{'am':'Barev'},
{'an':'Halo'},
{'ao':'Olá'},
{'aq':'Hello'},
{'ar':'Hola'},
{'as':'Hello'},
{'at':'Grüß Gott'},
{'au':'Hello'},
{'aw':'Hallo'},
{'az':'Salam'},
{'ba': 'Zdravo'},
{'bb':'Hello'},
{'bd': 'Hyālō'},
{'be':'Hallo'},
{'bf': 'Salut'},
{'bg':'Zdravei'},
{'bh': 'Marhaban'},
{'bi':'Salut'},
{'bj':'Salut'},
{'bm':'Hello'},
{'bn': 'Hai'},
{'bo': 'Hola'},
{'br':'Olá'},
{'bs':'Hello'},
{'bt':'Kuzu zangpo la'},
{'bv': 'Hej'},
{'bw':'Dumela Rra'},
{'by':'Vitaju'},
{'bz':'Hello'},
{'ca':'Hello'},
{'cc': 'Hello'},
{'cf': 'Balao'},
{'cg': 'Mbote'},
{'ch':'Hallo'},
{'ck':'Kia Orana'},
{'cl':'Hola'},
{'cm':'Salut'},
{'cn': 'Nǐ hǎo'},
{'co':'Hola'},
{'cr': 'Hola'},
{'cs': 'Zdravo'},
{'cu': 'Hola'},
{'cv': 'Olá'},
{'cx': 'Hello'},
{'cy':'Hello'},
{'cz': 'Ahoj'},
{'de': 'Hallo'},
{'dj':'As Salaam Alaikum'},
{'dk':'Hej'},
{'dm':'Hello'},
{'do': 'Hola'},
{'dz':'Salam'},
{'ec': 'Hola'},
{'ee':'Tere'},
{'eg':'Ahilan'},
{'eh':'Marhaban'},
{'er':'selam'},
{'es':'Hola'},
{'et':'Iwi Selami Newi'},
{'fi': 'Moi'},
{'fj':'Bula'},
{'fk': 'Hello'},
{'fm':'Ran Annim'},
{'fo':'Halló'},
{'fr':'Salut'},
{'ci':'Salut'},
{'ga':'Mbolo'},
{'gd':'Hello'},
{'ge':'Gamarjoba'},
{'gf': 'Salut'},
{'gh': 'Agoo'},
{'gi':'Hola'},
{'gl': 'Aluu'},
{'gm': 'Salaam Aleikum'},
{'gn':'I Ni Tilin'},
{'gp': 'Salut'},
{'gq': 'Hola'},
{'gr':'Geia Sou'},
{'gs': 'Hello'},
{'gt': 'Hola'},
{'gu':'Håfa Adai'},
{'gw': 'Olá'},
{'gy': 'Hello'},
{'hk': 'Nǐ hǎo'},
{'hm': 'Hello'},
{'hn': 'Hola'},
{'hr': 'Bok'},
{'ht': 'Bonjou'},
{'hu':'Szia'},
{'id':'Halo'},
{'ie': 'Hi'},
{'il':'Shalom'},
{'in':'Namaste'},
{'io': 'Hello'},
{'iq':'Chlomo'},
{'ir':':Salam'},
{'is': 'Halló'},
{'it': 'Ciao'},
{'jm': 'Hello'},
{'jo':'Salam'},
{'jp': 'Kon\'nichiwa'},
{'ke':'Hujambo'},
{'kg': 'Salamsatysby'},
{'kh':'Chomreabsuor'},
{'ki':'Mauri'},
{'km': 'Shikomoro'},
{'kn': 'Hello'},
{'kp':'Annyeonghaseyo'},
{'kr':'Annyeonghaseyo'},
{'kw': 'Marhaba'},
{'ky': 'Hello'},
{'kz':'Salem'},
{'la':'Sabaidee'},
{'lb':'MarHabā'},
{'lc': 'Bonjou'},
{'li': 'Grüss Gott'},
{'lk':'Ayubowan'},
{'lr':'Ya-Helloo-oo'},
{'ls':'Helele'},
{'lt': 'Labas'},
{'lu': 'Mo&iuml;en'},
{'lv': 'Sveiki'},
{'ly':'As-Salaam-Alaikum'},
{'ma': 'As-Salaam-Alaikum'},
{'mc':'Salut'},
{'md':'Bună Ziua'},
{'mg':'Salama'},
{'mh': 'Iọkwe Eok'},
{'mk':'Zdravo'},
{'ml':'I Ni Ce'},
{'mm': 'Mingalarba'},
{'mn':'Sain Uu'},
{'mo': 'Néih Hóu'},
{'mp': 'Håfa Adai'},
{'mq': 'Salut'},
{'mr': 'As-Salaam-Alaikum'},
{'ms': 'Hello'},
{'mt':'Hello'},
{'mu': 'Bonzur'},
{'mv': 'Assalaamu alaikum'},
{'mw':'Muli Bwanji'},
{'mx':'Hola'},
{'my': 'Hai'},
{'mz':'Olá'},
{'na': 'Hello'},
{'nc': 'Salu'},
{'ne':'Hello'},
{'nf':'Hello'},
{'ng': 'Ẹ n lẹ'},
{'ni': 'Hola'},
{'nl': 'Hallo'},
{'no': 'Hei'},
{'np':'Jvajalapa'},
{'nr':'Ekamowir Omo'},
{'nt': 'Hello'},
{'nu':'Fakalofa Atu'},
{'nz': 'Hello'},
{'om': 'Marhaban'},
{'pa': 'Hola'},
{'pe': 'Hola'},
{'pf': 'Salut'},
{'pg':'Tok Pisin'},
{'ph':'Kumusta'},
{'pk':'As-Salaam-Alaikum'},
{'pl': 'Həˈlō'},
{'pm':'Salut'},
{'pn':'Hello'},
{'pr':'Hola'},
{'pt': 'Olá'},
{'pw': 'Alii'},
{'py': 'Maiteí'},
{'qa': 'As-Salaam-Alaikum'},
{'re':'Bonzour'},
{'ro': 'Salut'},
{'ru': 'Privet'},
{'rw':'Muraho Bite'},
{'sa':'Marhaban'},
{'sb': 'Halo Olaketa'},
{'sc': 'Bonzour'},
{'sd':'Salam Aleekom'},
{'se':'Hej'},
{'sg': 'Nín hǎo'},
{'sh': 'Hello'},
{'si':'Zdravo'},
{'sj': 'Hei'},
{'sk':'Ahoj'},
{'sl': 'Hello'},
{'sm':'Ciào'},
{'sn': 'Salut'},
{'so':'See Tahay'},
{'sr':'Hello'},
{'st': 'Olá'},
{'sv': 'Hola'},
{'sy': 'Alsalam Ealaykum'},
{'sz': 'Sawubona'},
{'tc': 'Hello'},
{'td': 'As-salam Alaykom'},
{'tf': 'Salut'},
{'tg':'Alekay'},
{'th':'S̄wạs̄dī'},
{'tj':'Salom'},
{'tk': 'Mālo Ni'},
{'tm': 'Salam Salawmaleýkim'},
{'tn':'Aslema'},
{'to':'Malo E Lelei'},
{'tl': 'Elo Hi'},
{'tr':'Selam'},
{'tt': 'Hello'},
{'tv':'Fakatalofa'},
{'tw':'Nǐ hǎo'},
{'tz':'Jambo'},
{'ua':'Pryvit'},
{'ug':'Gyebale Ko'},
{'gb': 'Hello'},
{'us':'Hello'},
{'uy':'Hola'},
{'uz': 'Salom'},
{'va':'Ciao'},
{'vc': 'Hello'},
{'ve':'Hola'},
{'vg': 'Hello'},
{'vi': 'Hello'},
{'vn': 'Chào'},
{'vu':'Halo'},
{'wf': 'Salut'},
{'ws': 'Talofa'},
{'ye': 'Marhaba'},
{'yt':'Salut'},
{'yu': 'Zdravo'},
{'za':'Hello'},
{'zm': 'Shani'},
{'cd': 'Mbote Mbote Na Yo'},
{'zw': 'Mhoro'},
{'ap':'Nǐ Hǎo'},
{'rs': 'Zdravo'},
{'ax':'Hej'},
{'eu': 'Hello'},
{'ps': 'Merhaba'},
{'me': 'Zdravo'}
]


export default greeting