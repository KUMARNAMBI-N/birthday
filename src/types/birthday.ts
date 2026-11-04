export interface PhotoItem {
  id: string
  url: string
  caption: string
  alt: string
  rotationDeg: number
  date?: string
}

export interface StoryChapter {
  id: string
  chapterLabel: string
  heading: string
  subheading: string
  date?: string
  salutation?: string
  paragraphs: string[]
  signoff?: string
  signature?: string
}

export interface BirthdayContent {
  recipient: {
    name: string
    nickname: string
    birthdayDate: string
    relationship?: string
  }
  hero: {
    decorativeLabel: string
    mainTitle: string
    herName: string
    introSentence: string
    heroPhotoUrl: string
    heroPhotoCaption: string
    buttonText: string
  }
  chapterOne: StoryChapter
  chapterTwo: StoryChapter
  memories: {
    label: string
    heading: string
    subheading: string
    photos: PhotoItem[]
  }
  chapterThree: StoryChapter
  wish: {
    tag: string
    heading: string
    paragraphs: string[]
    blessing: string
  }
  surprise: {
    teaserLabel: string
    promptText: string
    buttonText: string
    revealedHeading: string
    messageParagraphs: string[]
    loveNote: string
    signature: string
  }
  final: {
    herName: string
    mainWish: string
    closingParagraphs: string[]
    madeWithLoveText: string
    backToTopText: string
  }
  audio: {
    title: string
    artist: string
    src: string
    enabled: boolean
  }
}
