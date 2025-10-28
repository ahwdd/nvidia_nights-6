export function renderDateWithSuperscript(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return dateStr;
  const regex = /(\d+)(st|nd|rd|th)\b/gi;
  if (!regex.test(dateStr)) return dateStr;

  const elements = [];
  let lastIndex = 0;

  dateStr.replace(regex, (match, num, suffix, offset) => {
    if (offset > lastIndex) elements.push(dateStr.slice(lastIndex, offset));
    elements.push(<span key={`num-${offset}`}>{num}</span>);
    elements.push(
      <sup key={`sup-${offset}`} className="align-super text-xs">
        {suffix}
      </sup>
    );
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < dateStr.length) elements.push(dateStr.slice(lastIndex));
  return <>{elements}</>;
}
