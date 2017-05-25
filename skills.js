/** STRUCTURE STUFF **/
const requiredToUid = (r) => (Array.isArray(r)
    ? `${toSlug(r[0].title)}${(r[1] || "1")}`
    : toSlug(r.title) + "1");
const toSlug = (() => {
    const TRIM = /^\s+|\s+$/g;
    const INVALID = /[^a-z0-9 -]/g;
    const WHITESPACE = /\s+/g;
    const DASHES = /-+/g;
    const toSlug = (str) => (str
        .toLowerCase()
        .replace(TRIM, '')
        .replace(INVALID, '')
        .replace(WHITESPACE, '_')
        .replace(DASHES, '-'));
    return toSlug;
})();
const unprocessedTree = [];
const add = (a) => (unprocessedTree.push(a)
    , a);
const html = add({ title: 'HTML',
    requires: [],
    description: 'The main language for creating web pages, HTML is written in the form of tags enclosed in angle brackets (like <html>).',
    levels: [{ description: 'You understand how to create and view a basic web page.',
            requires: []
        },
        { description: 'You understand how to link pages together, design multi-column layouts, and work with form fields and media elements.',
            requires: []
        }
    ],
    links: [['HTML.net Tutorials', 'http://www.html.net/tutorials/html/'],
        ['Sublime Text 3, a great code editor', 'http://www.sublimetext.com/']
    ]
});
const css = add({ title: 'CSS',
    requires: [html
    ],
    links: [['CSS Tutorials', 'http://www.htmldog.com/guides/css/'],
        ['Can I use... (browser support)', 'http://caniuse.com/#cats=CSS']
    ],
    levels: [{ description: 'You are familiar with the basics of CSS formatting and the box model.',
            requires: []
        },
        { description: 'You are familiar with media queries and responsive design for adapting your design to fit different devices.',
            requires: []
        }
    ],
    description: 'Cascading Style Sheets (CSS) is a language for styling web pages.  CSS rules target elements in the HTML document to specify the presentation, such as font, color, spacing, and size.'
});
const csstools = add({ title: 'CSS Tools',
    requires: [css],
    links: [['Sass vs. LESS', 'http://css-tricks.com/sass-vs-less/'],
        ['LESS', 'http://lesscss.org/'],
        ['Sass', 'http://sass-lang.com/'],
        ['Stylus', 'http://learnboost.github.io/stylus/']
    ],
    levels: [{ description: 'You are familiar with variables and nesting.',
            requires: []
        },
        { description: 'You can use advanced tools like mix-ins and sometimes write your own.',
            requires: []
        }
    ],
    description: 'Preprocessors like LESS and SASS help you write more structured and efficient CSS by adding features like variables, functions, and nesting.'
});
const webdesign = add({ title: 'Web Design Mastery',
    requires: [[css, 1]
    ],
    links: [],
    levels: [],
    description: 'You can bring design ideas to life by translating them into the requisite HTML document with CSS styles.'
});
const jquery = add({ title: 'jQuery Effects',
    requires: [webdesign
    ],
    links: [['Codecademy jQuery', 'http://www.codecademy.com/tracks/jquery'],
        ['jQuery Category: Manipulation', 'http://api.jquery.com/category/manipulation/'],
        ['jQuery Category: Effects', 'http://api.jquery.com/category/effects/']
    ],
    levels: [{ description: 'You are familiar with manipulating the document object model (DOM) - modifying values, content, properties, entire elements, etc.',
            requires: []
        },
        { description: 'You are familiar with adding standard animation to a web page.',
            requires: []
        },
        { description: 'You are familiar with creating and adding custom effects to a web page.',
            requires: []
        }
    ],
    description: 'jQuery provides techniques and methods for client-side manipulation of the web page elements.'
});
const seo = add({ title: 'Search Engine Optimization (SEO)',
    requires: [[html, 1]
    ],
    levels: [],
    links: [['Search Engine Optimization (Google)', 'https://support.google.com/webmasters/answer/35291'],
        ['Webmaster Tools (Google)', 'http://www.google.com/webmasters/tools/'],
        ['Bing - Webmaster Tools', 'http://www.bing.com/toolbox/webmaster']
    ],
    description: 'The process of affecting the ranking/visibility of a website or web page in a search engines results.'
});
const analytics = add({ title: 'Analytics',
    requires: [[seo, 2]
    ],
    levels: [],
    links: [['10 SEO Analysis Tools You Should Be Using', 'http://www.webgnomes.org/blog/10-seo-analysis-tools/'],
        ['Configuring SEO data in Analytics (Google)', 'https://support.google.com/analytics/answer/1308621?hl=en'],
        ['Using the SEO Reports (Google)', 'http://www.bing.com/toolbox/webmaster'],
        ['Bing - SEO Analyzer', 'http://www.bing.com/toolbox/seo-analyzer']
    ],
    description: 'Analytics provide performance data about a website as well as information that is usable to measure the success of SEO.'
});
const js = add({ title: 'Javascript',
    requires: [[html, 2]
    ],
    levels: [],
    links: [['JavaScript Tutorial', 'http://www.htmldog.com/guides/javascript/'],
        ['Codecademy JavaScript', 'http://www.codecademy.com/tracks/javascript'],
        ['List of Videos for Beginner JavaScript', 'http://thenewboston.org/list.php?cat=10'],
        ['Douglas Crockford on Javascript', 'http://javascript.crockford.com/']
    ],
    description: 'JavaScript is the dominant language for client-side programming.  It executes in the user&rsquo;s browser to manipulate the HTML document after it has loaded.  This may be as simple as showing hidden elements, or more advanced like contacting the server to load more data.'
});
const jslib = add({ title: 'JS Libraries & Frameworks',
    requires: [[js, 2]
    ],
    links: [],
    levels: [{ description: 'You tap into libraries like jQuery, MooTools, Prototype, Dojo, and YUI to streamline your work.',
            requires: []
        },
        { description: 'You use frameworks like KnockoutJS, Ember.js, AngularJS, and Backbone.js to structure complex frontend functionality.',
            requires: []
        }
    ],
    description: 'Once you&rsquo;re comfortable with the JavaScript language, there&rsquo;s a multitude of libraries and frameworks to accomplish common tasks and enhance your development.'
});
const front_end = add({ title: 'Front-end Development Mastery',
    description: '',
    levels: [],
    links: [],
    requires: [[jslib, 1]
    ]
});
const server_side_programming = add({ title: 'Server-side Programming',
    requires: [[html, 2], [js, 2]],
    levels: [],
    links: [['Server-side scripting Wiki', 'http://en.wikipedia.org/wiki/Server-side_scripting']
    ],
    description: 'Developing items (code) that executes on the server (server-side) instead of the user&raquo;s (client&raquo;s) machine.'
});
const server_side_frameworks = add({ title: 'Server-side Frameworks',
    requires: [[server_side_programming, 2]],
    levels: [],
    links: [['Comparison of web application frameworks', 'http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks'],
        ['Web development - server side coding', 'http://en.wikipedia.org/wiki/Web_development#Server_side_coding']
    ],
    description: 'These are software frameworks and collection of packages or modules that allow developers to write applications or services without having to handle the overhead of common activities and lower level details, such as session management, database access, etc.'
});
const db = add({ title: 'Database Authoring',
    requires: [html],
    links: [['w3schools.com SQL Tutorial', 'http://www.w3schools.com/sql/'],
        ['SQLZOO Interactive SQL Tutorial', 'http://sqlzoo.net/wiki/'],
        ['Database Normalization Wiki', 'https://en.wikipedia.org/wiki/Database_normalization']
    ],
    levels: [{ description: 'You understand how to setup tables.',
            requires: []
        },
        { description: 'You understand how relational databases organize data.',
            requires: []
        }
    ],
    description: 'Databases are powerful engines for storing, organizing, and retrieving data.  There is a wide variety of database platforms to choose from.  The most widely used database language is Structured Query Language (SQL).  Properly architecting your data will facilitate your site&rsquo;s server-side programming.'
});
const dbmanagement = add({ title: 'Advanced DB Management',
    requires: [db
    ],
    links: [['Stored Procedure - Wiki', 'http://en.wikipedia.org/wiki/Stored_procedure'],
        ['User-defined function Wiki', 'http://en.wikipedia.org/wiki/User_defined_function'],
        ['Database Tuning Wiki', 'http://en.wikipedia.org/wiki/Database_tuning'],
        ['Performance Monitoring and Tuning How-to Topics (SQL Server)', 'http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx'],
        ['Sql Server Performance Tuning Tips', 'http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/'],
        ['Oracle database Performance Tuning FAQ', 'http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ']
    ],
    levels: [{ description: 'You write stored procedures and user-defined functions for more efficient querying.',
            requires: []
        },
        { description: 'You can detect causes of performance deficiencies and fine tune a database like a rock star.',
            requires: []
        }
    ],
    description: 'Besides creating basic tables and relating data, databases allow for the creation of stored procedures, sets of SQL statements that are stored in the database, and user-defined functions (UDFs) , functions that can be used in SQL statements.  Just architecting the database is not enough.  The database also needs to be optimized or tuned to increase performance.'
});
const server_side_development_mastery = add({ title: 'Server-side Development Mastery',
    requires: [server_side_frameworks,
        dbmanagement
    ],
    links: [],
    levels: [],
    description: 'You are capable of architecting and building an application\'s backend to efficiently store and retrieve data.'
});
const auth = add({ title: 'User Authentication and Authorization',
    requires: [server_side_development_mastery],
    levels: [],
    links: [['ASP.NET authentication and authorization - CodeProject', 'http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization'],
        ['OpenID Wiki (authentication)', 'http://en.wikipedia.org/wiki/OpenID'],
        ['OAuth Community', 'http://oauth.net/'],
        ['ASP.NET Authorization', 'http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx']
    ],
    description: 'Authentication is the process determining whether someone or something is who or what it is declared to be. Authorization is the process of determining if a user is allowed to perform an action or has access to a resource.'
});
const ajax = add({ title: 'AJAX & APIs',
    requires: [front_end, server_side_development_mastery],
    levels: [],
    links: [['AJAX (programming) Wiki', 'http://en.wikipedia.org/wiki/Ajax_(programming)'],
        ['List of Videos for AJAX', 'http://thenewboston.org/list.php?cat=61'],
        ['Ajax: The Official Microsoft ASP.NET Site', 'http://www.asp.net/ajax'],
        ['Web Service Wiki', 'http://en.wikipedia.org/wiki/Web_service'],
        ['Representational state transfer (REST) Wiki', 'http://en.wikipedia.org/wiki/Representational_state_transfer']
    ],
    description: 'Technology exists to allow separate systems to communicate between each other in various ways as well as allowing interfaces to be more intractive.  These include the use of Asynchronous JavaScript and XML (AJAX), usually on the client-side, to communicate with an external system.  Other technologies, such as web services, are used to setup end-points for allowing communication with an external system.'
});
const user_discovery = add({ title: 'User Discovery',
    requires: [],
    levels: [{ description: 'You know the right questions to ask, and use sketches to confirm your ideas.',
            requires: []
        },
        { description: 'You use advanced techniques like experience mapping to lead conversations with stakeholders.',
            requires: []
        }
    ],
    links: [['The anatomy of an experience map', 'http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map']
    ],
    description: 'One of the first steps taken before anything is designed is to determine what the client (both the site requestor and the site user) wants and/or needs. Techniques include simple sketching, card-sortting and experience mapping.'
});
const graphic_design = add({ title: 'Graphic Design',
    requires: [user_discovery],
    levels: [{ description: 'You can create a balanced, complementary layout with a clear message.',
            requires: []
        },
        { description: 'You understand how to create a strikingly unique design, which supports traditional design values as well as your underlying message.',
            requires: []
        }
    ],
    links: [['Graphic Design Wiki', 'http://en.wikipedia.org/wiki/Graphic_design'],
        ['Behance', 'http://www.behance.net/'],
        ['User experience design Wiki', 'http://en.wikipedia.org/wiki/User_experience_design'],
        ['Awwwards', 'http://www.awwwards.com/']
    ],
    description: 'Graphic design is about aesthetics and usability. Good designs are inviting and easy to understand, by solid use of color, typography, balance, hierarchy and white space.'
});
const graphic_design_tools = add({ title: 'Graphic Design Tools',
    requires: [graphic_design],
    levels: [],
    links: [['100 Top Tools for Graphic Designers | Graphic Design Classes', 'http://graphicdesignclasses.net/design-tools/']
    ],
    description: 'Software such as Photoshop and devices like drawing tablets are used to create layouts, work with type, touch-up photos, and other activities to add professional polish to your designs.'
});
const prototypes = add({ title: 'Prototypes',
    requires: [user_discovery],
    levels: [],
    links: [['Design Better And Faster With Rapid Prototyping', 'http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/'],
        ['16 Design Tools for Prototyping and Wireframing', 'http://www.sitepoint.com/tools-prototyping-wireframing/']
    ],
    description: 'Modeling a new design without building all the underlying functionality is a fast and efficient way to convey ideas, test a new concept, and identify problems you didn\'t anticipate.'
});
const user_experience_design_mastery = add({ title: 'User Experience Design Mastery',
    requires: [user_discovery, graphic_design],
    levels: [],
    links: [],
    description: 'You are capable of converting project requirements to an attractive design that promotes a pleasant user experience.'
});
const user_testing = add({ title: 'User Testing',
    requires: [user_experience_design_mastery],
    levels: [],
    links: [['My big list of 24 Web Site Usability Testing Tools', 'http://www.usefulusability.com/24-usability-testing-tools/'],
        ['Usability Testing Wiki', 'http://en.wikipedia.org/wiki/Usability_testing']
    ],
    description: 'It is a technique, also known as usability testing, that is used to evaluate a website by testing it on users.'
});
const server_admin = add({ title: 'Server Administration',
    requires: [],
    links: [['Comparison of web server software Wiki', 'http://en.wikipedia.org/wiki/Comparison_of_web_server_software'],
        ['Apache mod_rewrite - Apache HTTP Server', 'http://httpd.apache.org/docs/2.4/rewrite/']
    ],
    levels: [{ description: 'You are capable of setting up your application in a new environment.',
            requires: []
        },
        { description: 'You are familiar with server-side URL rewriting tools like mod_rewrite.',
            requires: []
        }
    ],
    description: 'Even the simplest web applications will require a server to run them.  There are several popular and fully-featured web servers to choose from, though your application\'s server-side programming language may limit your options.  Learning to manage and configure your web server will help you keep your site up and running smoothly.'
});
const deployment = add({ title: 'Deployment',
    requires: [server_admin
    ],
    links: [['SSL Certificate Installation', 'http://www.sslshopper.com/ssl-certificate-installation.html'],
        ['Minimize payload size - Google Developers', 'https://developers.google.com/speed/docs/best-practices/payload'],
        ['Parallelize downloads across hostnames - Google Developers', 'https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads']
    ],
    levels: [{ description: 'You minify your public-facing files and serve compressed files to save bandwidth and improve your site&raquo;s speed.',
            requires: []
        },
        { description: 'You secure sensitive traffic over HTTPS using an SSL certificate.',
            requires: []
        }
    ],
    description: 'Before sharing your application with the world, follow the best practices for security and performance on the server.'
});
const web_design_mastery = add({ title: 'Web Development Mastery',
    requires: [webdesign,
        jquery,
        front_end,
        server_side_development_mastery,
        user_experience_design_mastery,
        deployment
    ],
    levels: [],
    links: [['Web Development Wiki', 'http://en.wikipedia.org/wiki/Web_development']
    ],
    description: 'This refers to designing, creating, and maintaining a website.'
});
const makeUidToId = (byID) => (uid) => (uid in byID
    ? byID[uid].id
    : (console.log(uid)
        , null));
const buildTree = (skills, byID = {}, UidToId = makeUidToId(byID)) => (skills
    .reduce((base, { title, requires, links, levels, description }) => {
    const _uid = toSlug(title);
    const uid = `${_uid}1`;
    const final = { title: `${title} 1`,
        requires: requires.map(requiredToUid),
        links,
        description,
        uid,
        level: 0,
        levels: []
    };
    const children = levels.map(({ description, requires, links }, nid) => ({ title: `${title} ${nid + 2}`,
        requires: [uid, ...requires.map(requiredToUid)],
        links: (links || []),
        levels: [],
        description,
        level: nid + 1,
        uid: `${_uid}${nid + 2}`
    }));
    final.levels = children.map(({ uid }) => uid);
    const ret = [final, ...children];
    return [...base, ...ret];
}, [])
    .map(({ title, requires, links, levels, description, level, uid }, id) => (byID[uid] =
    { title,
        requires,
        links,
        levels,
        level,
        description,
        uid,
        id
    }))
    .map(({ title, requires, links, levels, level, description, uid, id }) => ({ title,
    requires: requires.map(UidToId).filter(Boolean),
    links,
    levels: levels.map(UidToId).filter(Boolean),
    level,
    description,
    uid,
    id
})));
const cx = (classes) => (!classes
    ? undefined
    : (typeof classes == 'string'
        ? classes
        : (Array.isArray(classes)
            ? classes.map(cx)
            : Object.keys(classes).map((k) => (!!classes[k] ? k : false))).filter(Boolean).join(' ')) || undefined);
const cs = (styles) => (styles
    ? Object.keys(styles)
        .map((k) => ([k,
        styles[k]
    ].join(':')))
        .join(';')
    : undefined);
const makeProps = (el, props) => (props && Object.keys(props)
    .map((k) => (k == 'class' || k == 'className'
    ? ['class', cx(props[k])]
    : (k === 'style'
        ? [k, cs(props[k])]
        : [k, props[k]])))
    .map(([name, value]) => (typeof value == 'undefined'
    ? null
    : el.setAttribute(name, value)))
    , el);
const isNode = (thing) => (thing && 'nodeName' in thing && 'nodeType' in thing);
const isRawValue = (thing) => (typeof thing == 'string' || typeof thing == 'number');
const isHTMLChild = (thing) => (isRawValue(thing) || isNode(thing));
function createElement(tag, props, ...children) {
    const attrs = (isHTMLChild(props)
        ? (children = [props, ...children]
            , {})
        : props);
    const el = (tag
        ? makeProps(document.createElement(tag), attrs)
        : document.createDocumentFragment());
    children.forEach((c) => (c
        ? (typeof c == 'string' || typeof c == 'number'
            ? el.textContent = el.textContent + `${c}`
            : el.appendChild(c))
        : null));
    return el;
}
const h = createElement;
const mount = (root, where = 'body') => ((document.querySelector(where) || document.body).appendChild(root));
const div = h.bind(null, 'div');
const span = h.bind(null, 'span');
const ul = h.bind(null, 'ul');
const li = h.bind(null, 'li');
const p = h.bind(null, 'p');
const h1 = h.bind(null, 'h1');
const h2 = h.bind(null, 'h2');
const h3 = h.bind(null, 'h3');
const h4 = h.bind(null, 'h4');
const a = h.bind(null, 'a');
const anchor = (href, text = href, props) => (a(Object.assign({ href }, props), text));
const style = (props) => (h('style', Object.keys(props).map((selector) => (`${selector}{${cs(props[selector])}}`)).join('')));
const tree = buildTree(unprocessedTree);
mount(div(h1('Web Dev Skill Tree'), style({ body: { 'font-family': 'sans-serif',
        background: '#1b1b1b'
    },
    h1: { color: '#fdfdfd'
    },
    '.skill': { background: '#fdfdfd',
        color: '#1b1b1b',
        width: `300px`,
        height: `300px`,
        'box-sizing': 'border-box',
        padding: '10px',
        overflow: 'auto',
        margin: `20px`,
        float: 'left'
    }
}), ...tree.map(({ title, requires, links, levels, level, description, uid, id }) => (div({ id: uid,
    class: ['skill',
        `level-${level}`,
        { 'level-top': !requires.length }
    ]
}, h2(title), p(description), links.length && ul(...links.map(([text, href]) => (li(anchor(href, text))))), levels.length && ul(h3('levels'), ...levels.map((n) => (li(anchor(`#${tree[n].uid}`, tree[n].title))))), requires.length && ul({ class: 'depends-on' }, h3('depends on'), ...requires.map((n) => (li(span(tree[n].title))))))))), '#main');
//# sourceMappingURL=skills.js.map