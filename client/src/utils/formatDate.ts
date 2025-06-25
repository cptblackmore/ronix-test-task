export function formatDate(iso: string, withoutTime = false): string {
  const date = new Date(iso);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  if (withoutTime) {
    return `${day}.${month}.${year}`;
  }

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} • ${hours}:${minutes}`;
}
