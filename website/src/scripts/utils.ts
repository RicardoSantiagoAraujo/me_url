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

export function formatWordList(words: string[]): string {
  const length = words.length;

  if (length === 0) return "";
  if (length === 1) return words[0];
  if (length === 2) return `${words[0]} and ${words[1]}`;

  const allButLast = words.slice(0, -1).join(", ");
  const last = words[length - 1];
  return `${allButLast}, and ${last}`;
}

export function getImageFromZArray(
  whichImgId: "idMainImg" | "idBgImg",
  data: any
) {
  const meta =
    data.images.find((img: any) => img.id === data[whichImgId]) || null;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{jpeg,jpg,webp,png,gif,svg}"
  );
  const img = meta ? (images[meta.url] ? images[meta.url]() : meta.url) : null;
  return { img, meta };
}


