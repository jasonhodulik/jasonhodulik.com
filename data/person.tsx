import type { Person } from "@/types/Person";
import ContactChannel from "@/types/ContactChannel";
import Month from "@/types/Month";

const person: Person = {
    name: "Jason Hodulik",
    title: "Senior Full-Stack Engineer",
    summary: "Jason Hodulik is a full-stack engineer with 20+ years of experience planning, designing, building, deploying, and improving web and mobile apps.",
    contactMethods: [
        {
            channel: ContactChannel.Location,
            value: "New Jersey"
        },
        {
            channel: ContactChannel.Email,
            value: "jason@jasonhodulik.com",
            url: new URL("mailto:jason@jasonhodulik.com")
        },
        {
            channel: ContactChannel.GitHub,
            value: "github.com/jasonhodulik",
            url: new URL("https://github.com/jasonhodulik")
        },
        {
            channel: ContactChannel.LinkedIn,
            value: "linkedin.com/in/jasonhodulik",
            url: new URL("https://linkedin.com/in/jasonhodulik")
        }
    ],
    skillGroups: [
        {
            name: <>Programming</>,
            description: <>Full-stack application development across multiple languages.</>,
            skills: [
                {
                    name: <>JavaScript</>
                },
                {
                    name: <>Swift</>
                },
                {
                    name: <><abbr title="PHP: Hypertext Preprocessor">PHP</abbr></>
                },
                {
                    name: <>TypeScript</>
                },
                {
                    name: <>Rust</>
                },
                {
                    name: <>Object-Oriented Design Patterns</>
                }
            ]
        },
        {
            name: <>Platforms</>,
            description: <>Frameworks and tools for user interfaces, <abbr title="Application Programming Interfaces">APIs</abbr>, and content management systems.</>,
            skills: [
                {
                    name: <>SwiftUI</>
                },
                {
                    name: <>Next.js</>
                },
                {
                    name: <>React</>
                },
                {
                    name: <>Node.js</>
                },
                {
                    name: <>Laravel</>
                },
                {
                    name: <><abbr title="HyperText Markup Language">HTML</abbr></>
                },
                {
                    name: <><abbr title="Cascading Style Sheets">CSS</abbr></>
                },
                {
                    name: <><abbr title="Syntactically Awesome Style Sheets">Sass</abbr></>
                },
                {
                    name: <>WordPress</>
                }
            ]
        },
        {
            name: <>Databases</>,
            description: <>Design, development, administration, <abbr title="Extract, Transform, Load">ETL</abbr>, and reporting.</>,
            skills: [
                {
                    name: <><abbr title="Structured Query Language">SQL</abbr></>
                },
                {
                    name: <>MySQL</>
                },
                {
                    name: <>PostgreSQL</>
                },
                {
                    name: <><abbr title="Microsoft SQL Server">MS SQL</abbr></>
                },
                {
                    name: <>Redis</>
                }
            ]
        },
        {
            name: <><abbr title="Development &amp; Operations">DevOps</abbr> &amp; Architecture</>,
            description: <>Cloud and dedicated infrastructure, <abbr title="Continuous Integration">CI</abbr>/<abbr title="Continuous Delivery">CD</abbr>, and system administration.</>,
            skills: [
                {
                    name: <>Docker</>
                },
                {
                    name: <>GitHub Actions</>
                },
                {
                    name: <><abbr title="Amazon Web Services">AWS</abbr></>
                },
                {
                    name: <>DigitalOcean</>
                },
                {
                    name: <>Microsoft Azure</>
                },
                {
                    name: <>Rackspace</>
                },
                {
                    name: <>Git</>
                }
            ]
        },
        {
            name: <>Leadership</>,
            description: <>Direction and project management for software teams.</>,
            skills: [
                {
                    name: <>Agile Project Management</>
                },
                {
                    name: <>Scrum Leadership</>
                },
                {
                    name: <>Jira</>
                },
                {
                    name: <>Code Review</>
                }
            ]
        },
        {
            name: <>Design</>,
            description: <>Planning effective, easy-to-use, and accessible software.</>,
            skills: [
                {
                    name: <><abbr title="User Experience">UX</abbr> Design</>
                },
                {
                    name: <><abbr title="User Interface">UI</abbr> Design</>
                },
                {
                    name: <>Conversion Rate Optimization</>
                },
                {
                    name: <><abbr title="Search Engine Optimization">SEO</abbr> Strategy</>
                }
            ]
        }
    ],
    experiences: [
        {
            name: "Full-Stack Engineer",
            title: <>Owner</>,
            organization: {
                name: "Chiseled Pixel",
                url: new URL("https://chiseledpixel.com/")
            },
            start: {
                year: 2023,
                month: Month.May
            },
            description: <>Built and launched <a href="https://coastermate.com/">Coastermate</a>, an iOS app for roller coaster enthusiasts, including its backend architecture, database, <abbr title="Representational State Transfer">REST</abbr> <abbr title="Application Programming Interface">API</abbr>, and administration tools.</>
        },
        {
            name: "Full-Stack Engineer",
            title: <>Web Developer, Web Director, <abbr title="Chief Marketing Officer">CMO</abbr></>,
            organization: {
                name: "Brimar Industries",
                url: new URL("https://www.brimar.com/")
            },
            start: {
                year: 2011,
                month: Month.October
            },
            end: {
                year: 2022,
                month: Month.September
            },
            description: <>Architected and built a scalable multi-site ecommerce platform with a web app for designing custom signs; led a cross-functional engineering team; and improved <abbr title="Business Intelligence">BI</abbr>, <abbr title="Enterprise Resource Planning">ERP</abbr>, and <abbr title="Customer Relationship Management">CRM</abbr> integrations.</>
        },
        {
            name: "Front-End Engineer",
            title: <>Web Designer, Art Director</>,
            organization: {
                name: "Hertz Furniture",
                url: new URL("https://www.hertzfurniture.com/")
            },
            start: {
                year: 2008,
                month: Month.January
            },
            end: {
                year: 2011,
                month: Month.October
            },
            description: <>Created ecommerce user interfaces, templates, landing pages, and emails in coordination with an offshore back-end development team.</>
        }
    ]
};

export default person;
