export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

// Helper function to determine if Daylight Saving Time is in effect for a given date
function isDST(date: Date): boolean {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== date.getTimezoneOffset(); // True if DST is in effect
}

export function getCurrentTimeInLosAngeles(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Villeurbanne is in Central European Time (UTC+1), but during Daylight Saving Time it's UTC+2
  const offsetVilleurbanne = isDST(now) ? 2 : 1; // Adjust for DST
  now.setHours(now.getUTCHours() + offsetVilleurbanne);

  return now;
}

export function formatTimeForLosAngeles(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Paris",
  };

  let formattedTime = new Intl.DateTimeFormat("fr-FR", options).format(date);

  // Append the time zone abbreviation. For simplicity, appending "CET" or "CEST" depending on Daylight Saving Time.
  const timezoneSuffix = isDST(date) ? " CEST" : " CET";
  formattedTime += timezoneSuffix;

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


export function formatTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}



export function customBack() {
  const homePage = "/";
  const previousURL = document.referrer;

  if (previousURL.includes(homePage)) {
      window.location.href = homePage;
  } else {
      history.back();
  }
}

// Make sure to expose this function globally if it's being called directly in inline event handlers
// window.customBack = customBack;
