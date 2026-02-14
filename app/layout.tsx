import { Noto_Sans } from "next/font/google";
import "@/app/global.scss";

const notoSans = Noto_Sans({
    variable: "--primary-font",
    subsets: ["latin"]
});

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
    return (
        <html lang="en">
            <body className={notoSans.variable}>
                {children}
            </body>
        </html>
    );
}
