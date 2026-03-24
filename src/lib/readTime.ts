/* https://help.medium.com/hc/en-us/articles/214991667-Read-time */

/* https://blog.medium.com/read-time-and-you-bc2048ab620c */

/*
Copyright (c) 2019 Pritish

https://github.com/pritishvaidya/read-time-estimate/
*/

const WORDS_PER_MIN = 275; // wpm

const IMAGE_READ_TIME = 12; // in seconds

const CHINESE_KOREAN_READ_TIME = 500; // cpm

const IMAGE_TAGS = ['img', 'Image'];

/**
 *  String#imageReadTime() -> { time, count }
 *
 *  Get Image Read Time from a string.
 *
 * */

function imageCount(imageTags: string[], string: string): number {
  const combinedImageTags = imageTags.join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(
  customImageTime: number = IMAGE_READ_TIME,
  tags: string[] = IMAGE_TAGS,
  string: string
): { time: number; count: number } {
  let seconds = 0;
  const count = imageCount(tags, string);

  if (count > 10) {
    seconds = (count / 2) * (customImageTime + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * customImageTime + (1 - count)); // n/2[2a+(n-1)d]
  }

  return {
    time: seconds / 60,
    count
  };
}

/**
 *  String#wordsReadTime() -> { characterTime, otherLanguageTime, wordTime, wordCount }
 *
 *  Get Words count from a string.
 *
 * */

function wordsCount(string: string): number {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
} // Chinese / Japanese / Korean

function otherLanguageReadTime(string: string) {
  const pattern = '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const count = (string.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, '');
  return {
    count,
    time,
    formattedString
  };
}

function wordsReadTime(string: string, wordsPerMin = WORDS_PER_MIN): ReadTimeResult {
  const {
    count: characterCount,
    time: otherLanguageTime,
    formattedString
  } = otherLanguageReadTime(string);
  const wordCount = wordsCount(formattedString);
  const wordTime = wordCount / wordsPerMin;
  return {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount
  };
}

/**
 *  String#stripTags() -> String
 *
 *  Strip HTML tags string.
 *
 * */
function stripTags(string: string): string {
  const pattern: string = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg: RegExp = new RegExp(pattern, 'gi');
  return string.replace(reg, '');
}

/**
 *  String#stripWhitespace() -> String
 *
 *  Strip HTML tags string.
 *
 * */
function stripWhitespace(string: string): string {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

/**
 *  String#humanizeTime() -> String
 *
 *  Convert time(in minutes) to a humanized string.
 *
 * */
function humanizeTime(time: number): string {
  if (time < 0.5) {
    return 'less than a minute';
  }

  if (time >= 0.5 && time < 1.5) {
    return '1 minute';
  }

  return `${Math.ceil(time)} minutes`;
}

interface ReadTimeResult {
  characterCount: number;
  otherLanguageTime: number;
  wordTime: number;
  wordCount: number;
}

interface ReadTime extends ReadTimeResult {
  humanizedDuration: string;
  duration: number;
  totalWords: number;
  totalImages: number;
  imageTime: number;
  otherLanguageTimeCharacters: number;
}

function readTime(
  string: string,
  imageTags: string[],
  customWordTime: number | undefined = undefined,
  customImageTime: number | undefined = undefined,
  chineseKoreanReadTime: number | undefined = undefined
): ReadTime {
  const { time: imageTime, count: imageCount$$1 } = imageReadTime(
    customImageTime,
    imageTags,
    string
  );
  const strippedString = stripTags(stripWhitespace(string));
  const { characterCount, otherLanguageTime, wordTime, wordCount } = wordsReadTime(
    strippedString,
    customWordTime
  );
  return {
    humanizedDuration: humanizeTime(imageTime + wordTime),
    duration: imageTime + wordTime,
    characterCount,
    wordCount,
    totalWords: wordCount,
    wordTime,
    totalImages: imageCount$$1,
    imageTime,
    otherLanguageTimeCharacters: characterCount,
    otherLanguageTime
  };
}

export default readTime;
//# sourceMappingURL=read-time-estimate.esm.js.map
