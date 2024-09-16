function isDST(date) {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== date.getTimezoneOffset();
}
function getCurrentTimeInLosAngeles() {
  const now = /* @__PURE__ */ new Date();
  const offsetVilleurbanne = isDST(now) ? 2 : 1;
  now.setHours(now.getUTCHours() + offsetVilleurbanne);
  return now;
}
function formatTimeForLosAngeles(date) {
  const options = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Paris"
  };
  let formattedTime = new Intl.DateTimeFormat("fr-FR", options).format(date);
  const timezoneSuffix = isDST(date) ? " CEST" : " CET";
  formattedTime += timezoneSuffix;
  return formattedTime;
}
function formatDate(date) {
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatTag(tag) {
  return tag.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

export { formatTag as a, formatTimeForLosAngeles as b, formatDate as f, getCurrentTimeInLosAngeles as g };
