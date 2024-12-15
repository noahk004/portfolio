interface DateTextProps {
  startDate?: Date;
  endDate: Date;
}

export default function DateText({ startDate, endDate }: DateTextProps) {
  return (
    <p>
      {startDate && (
        <span>
          {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
            startDate
          )}{" "}
          {startDate.getFullYear()} -{" "}
        </span>
      )}
      {new Intl.DateTimeFormat("en-US", { month: "long" }).format(endDate)}{" "}
      {endDate.getFullYear()}
    </p>
  );
}
