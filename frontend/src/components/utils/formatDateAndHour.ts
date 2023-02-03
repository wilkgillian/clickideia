export function formatDateAndHour(dateTime: string | null) {
  if (dateTime === null) {
    return;
  }
  const date = new Intl.DateTimeFormat("pt-Br").format(new Date(dateTime));
  const time = new Intl.DateTimeFormat("pt-Br", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateTime));

  const dateAndTime = {
    date,
    time,
  };

  return dateAndTime;
}
