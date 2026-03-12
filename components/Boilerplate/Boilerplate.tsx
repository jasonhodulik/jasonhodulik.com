import classNames from "@/components/Boilerplate/Boilerplate.module.scss";

export default function Profile() {
  return (
    <footer className={classNames.root}>
        <p>This site and <a href="https://github.com/jasonhodulik/jasonhodulik.com">its source code repository</a> are hosted on GitHub. It was built using Next.js, React, TypeScript, and <abbr title="Syntactically Awesome Style Sheets">Sass</abbr>.</p>
        <p>© 2026 Jason Hodulik</p>
    </footer>
  );
}
