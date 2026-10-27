export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + '...';
}

const PARIS_TIME_ZONE = 'Europe/Paris';

/**
 * Formats a date as the wall-clock time in Paris (Lyon), suffixed with the
 * zone abbreviation in effect at that instant, e.g. "9:05:03 PM CET".
 * Independent of the server's and the visitor's own time zone.
 */
export function formatParisTime(date: Date): string {
  const time = new Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: PARIS_TIME_ZONE
  }).format(date);

  const zone = new Intl.DateTimeFormat('en-GB', {
    timeZone: PARIS_TIME_ZONE,
    timeZoneName: 'short'
  })
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;

  return zone ? `${time} ${zone}` : time;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export function customBack() {
  const homePage = '/';
  const previousURL = document.referrer;

  if (previousURL.includes(homePage)) {
    window.location.href = homePage;
  } else {
    history.back();
  }
}
