/**
 * Calculates the age based on the provided birth date.
 *
 * @param birthYear - The year of birth.
 * @param birthMonth - The month of birth (1-12).
 * @param birthDay - The day of birth (1-31).
 * @returns The calculated age in years.
 */
export function calculateAge(
  birthYear: number,
  birthMonth: number,
  birthDay: number
): number {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Months are 0-indexed in JS

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

/**
 * Formats an array of words into a human-readable list.
 *
 * @param words - Array of words to format into a list.
 * @returns A formatted string representing the list of words.
 */
export function formatWordList(words: string[]): string {
  const length = words.length;

  if (length === 0) return "";
  if (length === 1) return words[0];
  if (length === 2) return `${words[0]} and ${words[1]}`;

  const allButLast = words.slice(0, -1).join(", ");
  const last = words[length - 1];
  return `${allButLast}, and ${last}`;
}

/**
 * Retrieves an image and its metadata from a specified data object.
 *
 * @param whichImgId - "idMainImg" or "idBgImg"
 * @param data - The data object containing image information.
 * @returns An object containing the image and its metadata.
 */
export function getImageFromZArray(
  whichImgId: "idMainImg" | "idBgImg",
  data: any
) {
  const meta =
    data.images?.find((img: any) => img.id === data[whichImgId]) || null;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{jpeg,jpg,webp,png,gif,svg}"
  );
  if (meta) {
    const img = images[meta.url] ? images[meta.url]() : meta.url; 
    return {
      url: img,
      alt: meta.alt,
      title: meta.title,
      caption: meta.caption,
      style: meta.style,
    };
  } else {
    return null;
  }
}

// Handling date display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
  })
    .format(date)
    .replace("-", "/"); // Convert "YYYY-MM" → "YYYY/MM";
};

export function getDateRangeString(
  dateStart: string,
  dateEnd?: string | null
): string {
  let dateRange: string;
  if (!dateEnd) {
    dateRange = `${formatDate(dateStart)} - Present`;
  } else {
    dateRange = `${formatDate(dateStart)} - ${formatDate(dateEnd)}`;
  }
  return dateRange;
}
