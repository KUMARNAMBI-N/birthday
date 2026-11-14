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
    mainTitle: "Happy Birthday, My Princess Kriti!",
    herName: "Kriti",
    introSentence: "Some people make the world more beautiful simply by being in it. Today is all about celebrating you, your beautiful smile, your dreams, and all the happiness you bring into this world.",
    heroPhotoUrl: "./images/birthday-childhood.jpg",
    heroPhotoCaption: "My Beautiful Soul, An Irreplaceable Heart❤️",
    buttonText: "LET'S CELEBRATE YOUR DAY ↓",
  },

  // ── SECTION 2: PAGE ONE ────────────────────────────────────────────────
  chapterOne: {
    id: "chapter-1",
    chapterLabel: "",
    heading: "Where It All Began",
    subheading: "Oru Azhagana Aarambam ❤️",
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
    signature: "Always Yours ❤️",
    nextSectionId: "chapter-2",
    nextSectionLabel: "Your Forever Safe Place ↓"
  },

  // ── SECTION 3: PAGE TWO ────────────────────────────────────────────────
  chapterTwo: {
    id: "chapter-2",
    chapterLabel: "",
    heading: "Your Forever Safe Place",
    subheading: "Unakku Eppovume Naan Irukken ❤️",
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
    signature: "Always Yours ❤️",
    nextSectionId: "memories-section",
    nextSectionLabel: "Namma Chinna Ulagam (Memories) ↓"
  },

  // ── SECTION 4: OUR MEMORIES ────────────────────────────────────────────
  memories: {
    label: "NAMMA CHINNA ULAGAM",
    heading: "Chinna Moments, Azhagana Memories",
    subheading: "Namma azhagana moments, aayiram feelings — naan eppozhum nenjil vachikka virumburavai.",
    photos: [
      {
        id: "mem-couple-1",
        url: "./images/couple-memory-01.jpeg",
        caption: "Ennaikum en manasil oru special idam irukkum indha moment.",
        alt: "A treasured moment together that will always have a special place in my heart",
        rotationDeg: -2.0,
        date: "Cherished Moment"
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
      },
      {
        id: "mem-couple-4",
        url: "./images/couple-memory-04.jpeg",
        caption: "Chinna vayasil irundhe azhagana un siripu, indha ulagathaiye velichamaakkum.",
        alt: "Kriti's precious childhood smile",
        rotationDeg: 2.0,
        date: "Pure Innocence"
      },
      {
        id: "mem-couple-5",
        url: "./images/couple-memory-05.jpeg",
        caption: "Malligaipoo choodi azhagaa vandha un mugam, en manasil eppozhum ninaivirukkum.",
        alt: "Kriti in traditional saree with jasmine flowers",
        rotationDeg: -1.8,
        date: "Traditional Grace"
      },
      {
        id: "mem-couple-6",
        url: "./images/couple-memory-06.jpeg",
        caption: "Un kooda pesumbodhu kidaikkira andha mananiraivu, vera engayum kidaikadhu.",
        alt: "A heartwarming candid moment with Kriti",
        rotationDeg: 1.5,
        date: "Peaceful Heart"
      },
      {
        id: "mem-couple-7",
        url: "./images/couple-memory-07.jpeg",
        caption: "Nee sirikkum ovvoru nodiyum, en ulagam muzhuvadhum azhagaagudhu.",
        alt: "Radiant smile that lights up everything",
        rotationDeg: -2.2,
        date: "Pure Joy"
      },
      {
        id: "mem-couple-8",
        url: "./images/couple-memory-08.jpeg",
        caption: "Un kangalil theriyum andha paasam, naan vaazhkai muzhukka kaakka virumbuvadhu.",
        alt: "A deep affectionate gaze",
        rotationDeg: 1.9,
        date: "Unspoken Love"
      },
      {
        id: "mem-couple-9",
        url: "./images/couple-memory-09.jpeg",
        caption: "Chinna chinna sandhosham, periya ninaivugalaaga maarum namma kooda.",
        alt: "Little moments that turn into forever memories",
        rotationDeg: -1.4,
        date: "Sweet Moments"
      },
      {
        id: "mem-couple-10",
        url: "./images/couple-memory-10.jpeg",
        caption: "Un kooda nadakkum ovvoru paadhaiyum enakku oru azhagana payanam dhaan.",
        alt: "Every path walked with you is a beautiful journey",
        rotationDeg: 2.1,
        date: "Together Always"
      },
      {
        id: "mem-couple-11",
        url: "./images/couple-memory-11.jpeg",
        caption: "Namma kadhaiyil ovvoru pakkamum azhagaa maarikitte pogudhu.",
        alt: "Every page in our love story grows more beautiful",
        rotationDeg: -1.7,
        date: "Our Journey"
      },
      {
        id: "mem-couple-12",
        url: "./images/couple-memory-12.jpeg",
        caption: "En valkaiyil nee vandha pinbu dhaan, ovvoru naalum oru thiruvizha pola aanadhu.",
        alt: "Every day became a celebration after you came into my life",
        rotationDeg: 1.6,
        date: "A Blessed Life"
      },
      {
        id: "mem-couple-13",
        url: "./images/couple-memory-13.jpeg",
        caption: "Un anbum un thunayum dhaan enakkana miga periya balam.",
        alt: "Your love and presence is my greatest strength",
        rotationDeg: -2.0,
        date: "My Strength"
      },
      {
        id: "mem-couple-14",
        url: "./images/couple-memory-14.jpeg",
        caption: "Namma anbin aazham, intha kaalam thandi naalaikum thodarum.",
        alt: "A timeless love that will last through all the tomorrows",
        rotationDeg: 1.8,
        date: "Forever and Ever"
      }
    ]
  },

  // ── SECTION 5: PAGE THREE ──────────────────────────────────────────────
  chapterThree: {
    id: "chapter-3",
    chapterLabel: "",
    heading: "Our Dreams, Our Tomorrow ❤️",
    subheading: "Happy Birthday, My Dear Kriti!",
    salutation: "Kriti...",
    paragraphs: [
      "Indha blue saree, ring, chocolates ellame unakkaga. Un birthday-ah innum special-ah maathanum nu dhaan aasai. ❤️",
      "Nee eppovume happy-ah irukkanum. Un dreams ellame nijamaaganum.",
      "Innaikku distance irundhaalum, oru naal namma serndhu neraya beautiful memories create pannuvom.",
      "Un sirippaiyum, un dreams-aiyum eppovume celebrate panna naan iruppen.",
      "Happy Birthday, Kriti! ❤️"
    ],
    signoff: "The best memories are yet to come.",
    signature: "Always Yours ❤️",
    nextSectionId: "wish-section",
    nextSectionLabel: "A Thousand Wishes for You ↓"
  },

  // ── SECTION 6: BIRTHDAY BLESSINGS ──────────────────────────────────────
  wish: {
    tag: "Indha Naal Unakkaga, En Uyire Kriti! ❤️🥹",
    heading: "❤️ A Thousand Wishes for You, My Soulmate",
    paragraphs: [
      "Kriti...",
      "Innaikku un birthday mattum illa... Enakku romba special-aana oru naal. Yenna, indha ulagathula nee indha azhagana naal-la dhaan vandha. Unna maadhiri oru azhagana manasa indha ulagathukku kodutha naal.",
      "Unakku en manasula irukkura sila vishayangalai sollanum nu romba naala aasai. Words-la en feelings ellathayum solla mudiyuma nu theriyala... Aana en manasula irukkuradha unakku sollanum.",
      "En manasaara unakkaga naan aasai paduradhu... ❤️",
      "1. Un azhagana sirippu endha situation-layum marainjidave koodadhu. Un smile dhaan unakku mattum illa, unna nesikkira manasukkum oru happiness.",
      "2. Un manasula irukkura chinna chinna aasai kooda oru naal nijamaaganum. Nee kanavu kaanura ovvoru vishayamum un kai seranum.",
      "3. Life-la evlo challenges vandhaalum, adhai face panna thevaiyaana courage-um confidence-um unakku eppovume irukkanum.",
      "4. Nee yaarukkagavum unmaiyaana unnai maathikka vendam. Un kindness, un innocence, un character — idhellam eppovume ippadiye azhaga irukkanum.",
      "5. Unakku pidicha idangalukku travel pannanum, pudhu pudhu experiences enjoy pannanum, un life full-ah beautiful memories create pannanum.",
      "6. Unna purinjukkira manushangalum, un feelings-ku value kudukkira manushangalum eppovume un life-la irukkanum.",
      "7. Nee tired-ah irukkumbodhu unakku peace kidaikkanum. Nee sad-ah irukkumbodhu un manasu aarudhal adaiyanum. Nee confused-ah irukkumbodhu unakku sariyana vazhi theriyanum.",
      "8. Un success-ai nee mattum celebrate pannaama, unna nesikkira ellarum perumaiya celebrate panra alavukku nee life-la uyaranum.",
      "9. Unakku nalla health, endless happiness, peaceful mind, and a beautiful future kidaikkanum.",
      "10. Mukkiyama, un life-la nee evlo precious, evlo special, evlo valuable person nu nee oru naal kooda marandhudakoodadhu.",
      "And Kriti... En manasula irundhu oru vishayam sollanum. ❤️",
      "Nee en life-la vandhadhukku apram, sila feelings-ku pudhu artham kidaichirukku. Un kooda pesura chinna chinna moments, un sirippu, un happiness, un feelings — idhellam enakku romba special.",
      "Unna eppovume happy-ah paakanum nu thonum. Un dreams achieve panradhai paathu santhoshapadanum nu thonum. Unakku kashtamaana nerangal vandhaalum, unakku support-ah irukkanum nu thonum.",
      "Namma life-la enna nadandhaalum, un happiness-um peace-um eppovume mukkiyam.",
      "Unakku naan kudukka virumburadhu expensive gifts mattum illa... Unna purinjukkira oru manasu, un feelings-ku value kudukkira oru uravu, un happiness-la santhoshapadura oru idhayam.",
      "Happy Birthday, En Uyirin Uyire Kriti! ❤️🥹",
      "Unakku indha birthday mattum illaama, un life-la varra ovvoru naalum beautiful-ah irukkanum.",
      "Un kanavugal nijamaaganum, un aasaihal niraiveranum, un mugathula irukkura sirippu endha naalum kuraiya koodadhu.",
      "You are not just someone special in my life... You are a beautiful part of my heart. ❤️"
    ],
    blessing: "With lots of love, always! 🫂❤️"
  },

  // ── SECTION 7: SECRET SURPRISE ENVELOPE ────────────────────────────────
  surprise: {
    teaserLabel: "ONE LAST THING FROM MY HEART",
    promptText: "Sila words irukku… nee eppovume marakkakoodaadha nu naan virumburen.",
    buttonText: "A Secret Just for You ❤️",
    revealedHeading: "❤️ A Promise From My Heart",
    messageParagraphs: [
      "Kriti...",
      "Life-la ellaa naalum sandhoshama irukka mudiyadhu. Sila neram sirippu, sila neram kanneer, sila neram thanimai. Aana andha ella nerangalilum, unakku oru nambikkaiyaana thunaiyaaga irukka naan virumburen.",
      "Nee sandhoshama irukkumbodhu un kooda sirippen. Nee sogama irukkumbodhu un manasula irukkuradhai porumaiya ketpen. Nee thothu ponaalum, unnala mudiyum nu unakku nambikkai koduppen.",
      "Un dreams-ai respect pannuven, un feelings-ai purinjukka muyarchi pannuven. Nee eppovume en kitta unmaiyaana unnai kaattalaam. Unna judge pannaama, un feelings-ku value koduppen.",
      "Unakku ellame naan mattum dhaan nu sollala... Aana unakku thevaiyaana nerathula, ennala mudinja alavukku un pakkathula irukka eppovume virumburen.",
      "Once Again, Happy Birthday, En Chellamaana Kriti! ❤️",
      "Un vaazhkai muzhuvadhum happiness, peace, love and success nirainjirukkanum. Un azhagana sirippu endha naalum maarama irukkanum."
    ],
    loveNote: "Oru vishayam mattum eppovume nyabagam vachikko... Unakku indha ulagathula evlo kashtam vandhaalum, unnai purinjukka virumbura oru manasu eppovume irukku.",
    signature: "Always With Love & Care, En Uyire! ❤️🫂"
  },

  // ── SECTION 8: FINAL SCREEN ────────────────────────────────────────────
  final: {
    herName: "Kriti",
    mainWish: "Happy Birthday, My Princess Kriti! ❤️👑",
    closingParagraphs: [
      "May your smile never fade, your dreams come true, and your life always be filled with happiness.",
      "Keep smiling, keep shining, and keep being the wonderful person you are.",
      "You deserve all the beautiful things this world has to offer.",
      "Once again, Happy Birthday, Kriti! ❤️"
    ],
    madeWithLoveText: "Stay happy. Stay blessed. Keep shining.",
    backToTopText: "Back to Top"
  },

  audio: {
    title: "Birthday Melody for Kriti",
    artist: "With Love",
    src: "/images/audiomass-output.mp3",
    enabled: true
  }
}
