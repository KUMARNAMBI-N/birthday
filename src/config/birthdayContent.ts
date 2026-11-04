import { BirthdayContent } from '../types/birthday'

/**
 * =======================================================================
 * AURORA — Luxury Birthday Wishes Experience Configuration
 * Our Complete Three-Page Tanglish Love Story for Kriti ❤️
 * =======================================================================
 */

export const birthdayContent: BirthdayContent = {
  recipient: {
    name: "Kriti",
    nickname: "En Chellam",
    birthdayDate: "11 November 2003",
    relationship: "My girlfriend and future wife",
  },

  hero: {
    decorativeLabel: "A LITTLE WORLD CREATED JUST FOR YOU",
    mainTitle: "Happy Birthday, En Chellamaana Kriti ❤️",
    herName: "Kriti",
    introSentence: "Sila people namakku ellarum therinjavanga maadhiri therium. Aana avanga life-la evlo mukkiyam-nu namma realise pannumbothe… already avanga namba heart-la special idam pidichiruvanga.",
    heroPhotoUrl: "./images/birthday-childhood.jpg",
    heroPhotoCaption: "The one who holds my heart",
    buttonText: "Namma Story Paarkkalaam ↓",
  },

  // ── SECTION 2: PAGE ONE ────────────────────────────────────────────────
  chapterOne: {
    id: "chapter-1",
    chapterLabel: "CHAPTER 01 – NAMMA KADHAIYIN AARAMBAM",
    heading: "Kriti… Unakkaga Oru Chinna Ulagam",
    subheading: "A connection that began long before we understood what it would mean.",
    date: "11.11.2003 – The day a beautiful soul came into this world.",
    salutation: "Kriti…",
    paragraphs: [
      "Unakku theriyuma? Namma rendu perum chinna vayasil irundhe orutharukku oruthar therinjavanga. Aana appo namma rendu perum ivlo close-ah pesikkala.",
      "Un life-la naan enna role play panna poren, en life-la nee evlo mukkiyamaana person-ah maarappora nu appo enakku theriyadhu.",
      "Nee oru single child. Unakku kooda vilayaada oru brother-um illa, sister-um illa. Chinna vayasil irundhe indha feeling unakku irundhirukkum. Sila nerangalil unakku oru sibling irundhirundha nalla irundhirukkume nu thonirukkalaam.",
      "Aana Kriti, un life-la nadandha ella vishayangalayum naan maatha mudiyadhu. Un past-ah thirumba kondu poi change panna mudiyadhu. Aana un future-la nee thaniya feel panna koodadhu nu naan virumburen.",
      "Un life-la nee neraya situations face pannirukka. Veliyila sirichalum, manasukulla evlo feelings irundhirukkum nu enakku theriyadhu. Nee solladha sila valigal kooda irukkalaam.",
      "Aana onnu mattum sollanum…",
      "Un sirippukku mattum illa, un kanneerukkum naan irukka virumburen.",
      "Unakku ellam nalla irukkumbodhu mattum pakkathula irukkuradhu love illa. Unakku edhuvum sariyaa pogadha nerathulayum, un kaiya vidaama irukkuradhudhaan enakku mukkiyam.",
      "Namma story innum aarambathula dhaan irukku Kriti. Aana indha story-la nee enakku romba special."
    ],
    signoff: "With all my heart,",
    signature: "Yours Always ❤️"
  },

  // ── SECTION 3: PAGE TWO ────────────────────────────────────────────────
  chapterTwo: {
    id: "chapter-2",
    chapterLabel: "CHAPTER 02 – UNAKKAGA NAAN",
    heading: "Unakku Ellamaagavum Irukka Virumbum Naan",
    subheading: "Not just your love, but also your best friend, your support and your safe place.",
    salutation: "Kriti…",
    paragraphs: [
      "Naan unakku oru lover-ah mattum irukka virumbala. Unakku thevaiyana nerathula oru nalla friend-ah irukkanum.",
      "Nee bayapadumbodhu unakku confidence kudukkanum. Nee tired-ah irukkumbodhu unakku aarudhala irukkanum. Nee happy-ah irukkumbodhu un kooda kuzhandhai maadhiri sirikkanum.",
      "Unakku oru brother irundha eppadi support panniruppaano, oru friend eppadi un pecha ketiruppaano, oru partner eppadi un dreams-ah encourage panniruppaalo — appadi unakku support-ah irukka naan aasai paduren.",
      "Unakku ellame naan mattum dhaan nu solla varala. Unakku unnudaiya family-um, friends-um, un own dreams-um romba mukkiyam.",
      "Aana avanga ellarukkum naduvula, unakku eppovume nambikkaiyaana oru person-ah naan irukkanum.",
      "Endha soozhnilai vandhaalum, un pakkathula nikka naan virumburen.",
      "Nee thappu panninaalum unakku puriya vaippen. Nee kashtathula irundha un pecha porumaiya ketpen. Unakku edhaavadhu achieve pannanum na unakku encouragement kuduppen.",
      "Namma rendu perukkum sila misunderstandings varalaam. Sandai varalaam. Sila neram pesama irukkalaam. Aana ego-vukkaaga namma relationship-ah lose panna koodadhu.",
      "Namma rendu perum orutharukku oruthar purinjukittu, respect kuduthu, support pannittu valaranum.",
      "Naan un future husband-ah irukka aasai paduren, Kriti. Un kooda oru azhagana future build pannanum.",
      "Namma rendu perum serndhu sirikkanum, travel pannanum, chinna chinna vishayangalai celebrate pannanum.",
      "Un dreams enakku mukkiyam. Un happiness enakku mukkiyam. Un identity-um un freedom-um enakku mukkiyam.",
      "Naan un life-ah control panna varala. Un life-la unakku strength-ah irukka varren."
    ],
    signoff: "Always by your side,",
    signature: "Your Future Life Partner ❤️"
  },

  // ── SECTION 4: OUR MEMORIES ────────────────────────────────────────────
  memories: {
    label: "NAMMA CHINNA ULAGAM",
    heading: "Chinna Moments, Azhagana Memories",
    subheading: "Moonu photos, ennamo feelings — naan eppozhum vachikka virumburavai.",
    photos: [
      {
        id: "mem-couple-1",
        url: "./images/couple-memory-01.jpeg",
        caption: "Ennaikum en manasil oru special idam irukkum indha moment.",
        alt: "A treasured moment together that will always have a special place in my heart",
        rotationDeg: -2.0,
        date: "Cherished Memory"
      },
      {
        id: "mem-couple-2",
        url: "./images/couple-memory-02.jpeg",
        caption: "Un kooda irukura chinna chinna memories, words-la sollamudiyadhadhu.",
        alt: "Kriti in the blue saree, a memory that means more than words can explain",
        rotationDeg: 1.8,
        date: "The Blue Saree"
      },
      {
        id: "mem-couple-3",
        url: "./images/couple-memory-03.jpeg",
        caption: "Indha memory innaikku azhagana, namma story naalaikum thodarum.",
        alt: "A beautiful memory today, and a story we will keep writing together tomorrow",
        rotationDeg: -1.5,
        date: "Our Tomorrow"
      }
    ]
  },

  // ── SECTION 5: PAGE THREE ──────────────────────────────────────────────
  chapterThree: {
    id: "chapter-3",
    chapterLabel: "CHAPTER 03 – NAMMA FUTURE",
    heading: "Un Ovvoru Birthday-um Sirippoda Irukkanum",
    subheading: "Different cities, but one heart and one beautiful dream.",
    salutation: "Happy Birthday, En Chellamaana Kriti! ❤️",
    paragraphs: [
      "Innaikku un birthday.",
      "Unakku indha birthday-la naan expensive gifts mattum kudukka virumbala. En manasula irukkura feelings-ah unakku puriya vekkanum nu dhaan aasai.",
      "Indha blue saree unakkaga.",
      "Indha ring namma relationship-oda oru azhagana ninaivaga irukkattum.",
      "Indha chocolates un birthday-ah innum konjam sweet-ah maathattum.",
      "Indha three photos namma memories-ah unakku thirumba nyabagapaduthattum.",
      "Indha website-la irukkura ovvoru word-um unakkaga naan create pannadhu. Nee eppovavadhu lonely-ah feel pannina, indha page-ah open panni padi. Unakku evlo special-ah irukka nu idhu nyabagapaduthattum.",
      "Kriti… unakku inime varra ovvoru birthday-um sirippoda irukkanum. Un kannula happiness mattum irukkanum. Un dreams ellame nijamaaganum. Nee aasai padra ella vishayangalum unakku kidaikkanum.",
      "Unakku eppovavadhu azhanum pola irundha azhu. Strong-ah irukkanum nu unnai nee force pannikkaadha.",
      "Un feelings-ah maraikka vendam. Unakku pesa thonumbodhu pesu. Silent-ah irukkanum pola irundhaalum parava illa.",
      "Naan unakku support-ah irukka virumburen.",
      "Distance namma rendu peraiyum different places-la vachirukkalaam. Aana namma manasula irukkura paasathai distance decide panna mudiyadhu.",
      "Oru naal indha long-distance memories ellam namma rendu perum serndhu ukkandhu pesura memories-ah maaranum.",
      "Innaikku phone-la pesura conversations, naalaikku face-to-face sirippaga maaranum.",
      "Innaikku miss panra moments, naalaikku namma serndhu vaazhra azhagana naatkalaga maaranum.",
      "Namma future eppadi irukkum nu enakku exact-ah theriyadhu. Aana adhai un kooda serndhu build panna naan manasara aasai paduren.",
      "Enakku un kooda oru naal mattum illa… vaazhkai muzhukka memories create pannanum.",
      "Kriti, nee en life-la oru special person mattum illa. Naan en future-ah imagine pannumbodhu andha future-la unakkum oru azhagana idam irukku.",
      "Unakku naan kudukka virumbura periya gift enna theriyuma? Unna nee eppovume thaniya illa nu feel panna vaikkiradhu. Unna respect pannuradhu. Un dreams-ku support pannuradhu. Un kooda sirichu, un kooda valarndhu, un kooda oru azhagana life build pannuradhu.",
      "Once again, Happy Birthday, Kriti! ❤️ Un sirippu eppovume kuraiya koodadhu. Un happiness eppovume maarakoodadhu.",
      "Intha story-oda next pages namma rendu perum serndhu ezhudhuvom."
    ],
    signoff: "With lots of love,",
    signature: "Un Future Life Partner ❤️💍"
  },

  // ── SECTION 6: BIRTHDAY BLESSINGS ──────────────────────────────────────
  wish: {
    tag: "EN MANASIL IRUNDHU UN BIRTHDAY-KU",
    heading: "My Birthday Wishes for You, Kriti",
    paragraphs: [
      "Un sirippu eppovume kuraiya koodadhu.",
      "Un manam eppovume aanandhamaga irukkanum.",
      "Nee aasai padra ella kanaavugalum nijamaaganum.",
      "Kattinamaana naalkalil courage-um, thodarndhu poga strength-um unakku kidaikkanum.",
      "Un life-la azhagana opportunities-um, nijamana happiness-um, unna nijamayil paargira people-um kidaikkanum.",
      "Mukkiyamana vishayam — nee evlo special-nu nee eppozhum marakkakoodadhu.",
      "Un birthday-la mattum illa, un life-la ovvoru ordinary day-lum nee happiness deserve panra."
    ],
    blessing: "Namma life enna direction-la ponal, namma oru naal thirumba oru vazhiya serndhuva nu naan namburen. ❤️"
  },

  // ── SECTION 7: SECRET SURPRISE ENVELOPE ────────────────────────────────
  surprise: {
    teaserLabel: "ONE LAST THING FROM MY HEART",
    promptText: "Sila words irukku… nee eppovume marakkakoodaadha nu naan virumburen.",
    buttonText: "Open My Heart ❤️",
    revealedHeading: "My Promise to You, Kriti",
    messageParagraphs: [
      "Kriti…",
      "Indha entire website-la irundhu oru vishayam mattum nee nyabagam vachikka venumna, adhu idhu dhaan:",
      "En kadhal peira nee vera yaraavadhu mathiri nadikaanum illa. Un original self-ah mattum kaattu.",
      "Nee happy-ah iru, sad-ah iru, excited-ah iru, worried-ah iru, silent-ah iru — un real self-ah purinja virumburen.",
      "Ovvoru naal-um perfect-ah irukkum nu promise panna mudiyadhu.",
      "Aana unna innum nanna love panna, innum nanna understand panna, innum nanna support panna naan always try pannuven.",
      "Un achievements-ah celebrate pannuven. Un dreams-ah encourage pannuven. Un decisions-ah respect pannuven. Life-la kashtam varum nerathula un pakkathula iruppuven.",
      "Oru naal indha long-distance days-ah namma rendu perum thirumba paakumbodhu, namma evlo thoorum vandhurukkoma nu smile panrom nu naan namburen.",
      "Nagatham, kindness, respect, love — ippadi oru azhagana veedu namma rendu perum serndhu kattalaam.",
      "En life-la part-ah irukka thanks, Kriti.",
      "Un kooda oru azhagana future pathi kanaavaada oru person-ah irukka thanks.",
      "Happy Birthday, Kriti. ❤️",
      "Indha oru birthday mattum alla, namma serndhu celebrate panna neraya birthdays vandhirukattum."
    ],
    loveNote: "Innaikku different cities. Naalaikku oru azhagana kanaavu. ❤️",
    signature: "Un Future Life Partner ❤️"
  },

  // ── SECTION 8: FINAL SCREEN ────────────────────────────────────────────
  final: {
    herName: "Kriti",
    mainWish: "Happy Birthday, En Chellamaana Kriti ❤️",
    closingParagraphs: [
      "Indha namma story-oda mudivu illa.",
      "Idhu oru azhagana new chapter-oda aarambam.",
      "Nee sirichi, kanaavi, un aasai padra ellavalagave maaridhu vaa.",
      "Next page thirumbum pothu, namma rendu perum pakkathula iruppom nu naan namburen. ❤️"
    ],
    madeWithLoveText: "Un kooda oru azhagana life build pannanum nu, kadhalin udane seydhadhu. ❤️ — Kriti-kkaaga",
    backToTopText: "Aarambathirku Thirumbu"
  },

  audio: {
    title: "Ethereal Birthday Reverie",
    artist: "Romantic Music Box & Harp",
    src: "/audio/birthday-ambient.mp3",
    enabled: true
  }
}
