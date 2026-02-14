import type { YearMonth } from "@/types/YearMonth";
import classNames from "@/components/YearMonthRange/YearMonthRange.module.scss";
import YearMonthAbbreviation from "@/components/YearMonthAbbreviation/YearMonthAbbreviation";

type Props = {
    start?: YearMonth;
    end?: YearMonth;
};

export default function YearMonthRange({ start, end }: Props) {
    const startNode = start !== undefined ? <YearMonthAbbreviation yearMonth={start} /> : null;
    const endNode = end !== undefined ? <YearMonthAbbreviation yearMonth={end} /> : null;
    let content = <></>;
    if (startNode !== null && endNode !== null) {
        content = <>{startNode} — {endNode}</>;
    } else if (startNode !== null) {
        content = <>Since {startNode}</>;
    } else if (endNode !== null) {
        content = <>Until {endNode}</>;
    }
    return <span className={classNames.root}>{content}</span>;
}
