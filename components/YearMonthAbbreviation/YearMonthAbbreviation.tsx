import type YearMonth from "@/types/YearMonth";
import classNames from "@/components/YearMonthAbbreviation/YearMonthAbbreviation.module.scss";
import MonthAbbreviation from "@/components/MonthAbbreviation/MonthAbbreviation";

interface Props {
    yearMonth: YearMonth;
};

export default function YearMonthAbbreviation({ yearMonth }: Props) {
    return <time className={classNames.root} dateTime={`${yearMonth.year}-${yearMonth.month.toString().padStart(2, "0")}`}><MonthAbbreviation month={yearMonth.month} /> {yearMonth.year}</time>;
}
