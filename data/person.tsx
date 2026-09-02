import type Person from "@/types/Person";
import ContactChannel from "@/types/ContactChannel";
import Month from "@/types/Month";

const person: Person = {
    name: "Jason Hodulik",
    summary: "Jason Hodulik is a technology leader with 20+ years of experience turning business needs into successful technology products, platforms, and operational improvements across engineering, design and data.",
    title: "Technology Leader",
    titleDescription: "Product, Engineering, and Delivery Leader with 20+ years of experience building software, leading technology initiatives, and identifying and translating business needs into successful products and platforms.",
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
            channel: ContactChannel.LinkedIn,
            value: "linkedin.com/in/jasonhodulik",
            url: new URL("https://linkedin.com/in/jasonhodulik")
        }
    ],
    skillGroups: [
        {
            name: <>Business &amp; Opportunity</>,
            description: <>Understanding businesses from the inside: objectives, processes, customers, and people; working directly with stakeholders and leaders across the organization to identify problems, evaluate existing workflows, uncover opportunities, and determine where technology can create meaningful business value.</>,
            skills: [
                {
                    name: <>Business &amp; Technology Strategy</>
                },
                {
                    name: <>Product Strategy &amp; Roadmapping</>
                },
                {
                    name: <>Requirements Analysis</>
                },
                {
                    name: <>Customer &amp; User Needs</>
                },
                {
                    name: <>Process Analysis &amp; Improvement</>
                },
                {
                    name: <>Opportunity Identification</>
                },
                {
                    name: <>Prioritization</>
                },
                {
                    name: <>Stakeholder Communication</>
                },
                {
                    name: <>Executive &amp; Cross-Functional Alignment</>
                }
            ]
        },
        {
            name: <>Solution Design</>,
            description: <>Translating business needs and opportunities into practical solutions that balance user needs, business objectives, technical constraints, and time to value; designing products and systems from both user and technical perspectives, separating <abbr title="Minimum Viable Products">MVPs</abbr> from future phases, and documenting solutions clearly to prepare for building and operation.</>,
            skills: [
                {
                    name: <>Product &amp; Solution Design</>
                },
                {
                    name: <><abbr title="User Experience">UX</abbr>/<abbr title="User Interface">UI</abbr> Design</>
                },
                {
                    name: <>Technical Architecture</>
                },
                {
                    name: <><abbr title="Application Programming Interface">API</abbr> Design &amp; OpenAPI</>
                },
                {
                    name: <><abbr title="Minimum Viable Product">MVP</abbr> Definition &amp; Phased Delivery</>
                },
                {
                    name: <>Prototyping &amp; <abbr title="Proofs of Concepts">POCs</abbr></>
                },
                {
                    name: <>Technical Documentation &amp; Confluence</>
                },
                {
                    name: <>Requirements &amp; Specifications</>
                },
                {
                    name: <><abbr title="Statements of Work">SOWs</abbr></>
                }
            ]
        },
        {
            name: <>Delivery &amp; Leadership</>,
            description: <>Leading multidisciplinary teams from defined solutions to working products; establishing practical delivery processes, breaking complex initiatives into incremental deliverables, managing priorities and dependencies, and facilitating communication between engineering, design, product, and business stakeholders.</>,
            skills: [
                {
                    name: <>Cross-Functional Leadership</>
                },
                {
                    name: <>Program &amp; Project Management</>
                },
                {
                    name: <>Agile / Scrum &amp; Jira</>
                },
                {
                    name: <>Backlog Management</>
                },
                {
                    name: <>User Stories &amp; Acceptance Criteria</>
                },
                {
                    name: <>Dependency &amp; Risk Management</>
                },
                {
                    name: <>Code Review &amp; Technical Review</>
                },
                {
                    name: <>Blocker Removal</>
                },
                {
                    name: <><abbr title="Continuous Integration">CI</abbr>/<abbr title="Continuous Delivery">CD</abbr> &amp; <abbr title="Development &amp; Operations">DevOps</abbr></>
                }
            ]
        },
        {
            name: <>Launch &amp; Optimization</>,
            description: <>Delivery as a means to an outcome and not just an endpoint, leading beta testing and releases, preparing users and organizations for change, monitoring products in production, analyzing performance and business results, and continuously adapting priorities based on what the data and users reveal.</>,
            skills: [
                {
                    name: <>User Testing</>
                },
                {
                    name: <>Release Management</>
                },
                {
                    name: <>Training &amp; Presentations</>
                },
                {
                    name: <>Operational Readiness</>
                },
                {
                    name: <><abbr title="Key Performance Indicators">KPIs</abbr> &amp; Success Metrics</>
                },
                {
                    name: <>Data &amp; Performance Metrics</>
                },
                {
                    name: <>A/B &amp; Multivariate Testing</>
                },
                {
                    name: <>Conversion Rate Optimization</>
                },
                {
                    name: <>Observability &amp; Production Monitoring</>
                },
                {
                    name: <>Issue Triage</>
                }
            ]
        },
        {
            name: <>Technical Foundation</>,
            description: <>Deep technical experience providing the foundation for leadership decision-making throughout the entire product and technology lifecycle. More than 20 years of hands-on experience designing, building, and operating web applications, APIs, e-commerce platforms, mobile applications, databases, and cloud infrastructure supporting an ability to evaluate technical trade-offs, communicate effectively with engineers, and remain close enough to implementation to make informed decisions.</>,
            skills: [
                {
                    name: <>Full-Stack Development</>
                },
                {
                    name: <>Cloud Architecture &amp; <abbr title="Amazon Web Services">AWS</abbr></>
                },
                {
                    name: <>Containerization &amp; Docker</>
                },
                {
                    name: <>Web (TypeScript, JavaScript, React, Node.js, <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>, Laravel)</>
                },
                {
                    name: <>Mobile (Swift, SwiftUI, iOS)</>
                },
                {
                    name: <>Data &amp; Business Intelligence (<abbr title="Structured Query Language">SQL</abbr>, <abbr title="Not Only Structured Query Language">NoSQL</abbr>)</>
                },
                {
                    name: <><abbr title="User Experience">UX</abbr>/<abbr title="User Interface">UI</abbr> Design &amp; Figma</>
                },
                {
                    name: <><abbr title="Search Engine Optimization">SEO</abbr></>
                }
            ]
        }
    ],
    experiences: [
        {
            name: "Founder & Product Manager",
            organization: {
                name: "Chiseled Pixel",
                url: new URL("https://chiseledpixel.com/")
            },
            start: {
                year: 2023,
                month: Month.May
            },
            description: <>Created and launched <a href="https://coastermate.com/">Coastermate</a>, a social web service and mobile application for roller coaster enthusiasts, owning the complete product lifecycle: customer research, business planning, product strategy, roadmap, <abbr title="User Experience">UX</abbr>/<abbr title="User Interface">UI</abbr>, technical architecture, engineering, beta testing, App Store launch, analytics, and ongoing operations. Designed and built the <abbr title="Representational State Transfer">REST</abbr> <abbr title="Application Programming Interface">API</abbr>, database, client application, administration interface, and supporting infrastructure, using user feedback and product metrics to guide continued development.</>
        },
        {
            name: "Chief Marketing Officer",
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
            description: <>Progressed through increasingly broad technology, product, and business leadership roles before becoming <abbr title="Chief Marketing Officer">CMO</abbr>, ultimately leading product strategy and a cross-functional organization spanning software engineering, <abbr title="User Experience">UX</abbr>/<abbr title="User Interface">UI</abbr> design, product development, advertising, sales, and customer service. Owned the strategy and roadmap for a $20M annual e-commerce business with over 10,000 <abbr title="Stock Keeping Units">SKUs</abbr> and 500 daily orders, translating business strategy, customer needs, analytics, and operational requirements into technology initiatives and customer-facing products. Helped scale the business from less than $2M to approximately $20M in annual revenue while increasing e-commerce conversion rates from 2–3% to over 4%. Led major initiatives spanning e-commerce platform modernization, custom-product technology, business intelligence, infrastructure, mobile experiences, integrations, and Agile delivery.</>
        },
        {
            name: "Art Director",
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
            description: <>Led web design and front-end engineering for a large e-commerce business, combining visual design, user experience, front-end development, and digital marketing. Directed a small team of designers and engineers while partnering with merchandising and marketing to improve customer experience, <abbr title="Search Engine Optimization">SEO</abbr>, and conversion. Designed and built core e-commerce experiences including navigation, category and product pages, cart and checkout, landing pages, responsive layouts, and email campaigns, while also contributing to experimentation and print/catalog production.</>
        }
    ]
};

export default person;
