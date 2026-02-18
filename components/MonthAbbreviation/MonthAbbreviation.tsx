import classNames from "@/components/MonthAbbreviation/MonthAbbreviation.module.scss";
import Month from "@/types/Month";

interface Props {
    month: Month;
};

export default function MonthAbbreviation({ month }: Props) {
    const monthName = Month[month];
    const monthAbbreviation = monthName.substring(0, 3);
    return monthName.length > monthAbbreviation.length ? <abbr className={classNames.root} title={monthName}>{monthAbbreviation}</abbr> : <span className={classNames.root}>{monthName}</span>;
}
