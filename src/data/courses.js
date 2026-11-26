// Course content from the original Ximie app (fine-code-quest-go.base44.app).
// Additional HTML units teach tables, colspan, images, media and embeds.
export const courses = [
  {
    "id": "html",
    "title": "HTML",
    "tagline": "Structure the web",
    "description": "Learn the tags that give every page its skeleton — headings, links, images, sections and forms.",
    "units": [
      {
        "id": "html-u1",
        "title": "Unit 1",
        "subtitle": "First steps",
        "lessons": [
          {
            "id": "html-1-1",
            "title": "Hello, HTML",
            "exercises": [
              {
                "type": "choice",
                "prompt": "HTML gives a web page its…",
                "options": [
                  "structure",
                  "colours",
                  "logic"
                ],
                "answer": 0,
                "explain": "HTML marks up content so the browser knows what each part is."
              },
              {
                "type": "choice",
                "prompt": "Which tag makes the largest heading?",
                "code": "<h1>Big</h1>\n<h3>Smaller</h3>",
                "options": [
                  "<h1>",
                  "<h3>",
                  "<head>"
                ],
                "answer": 0,
                "explain": "<h1> is the biggest heading. <h6> is the smallest."
              },
              {
                "type": "fill",
                "prompt": "Make “Hello world” a heading.",
                "bank": [
                  "</h1>",
                  "<p>",
                  "Hello world",
                  "<h1>",
                  "</p>"
                ],
                "solution": [
                  "<h1>",
                  "Hello world",
                  "</h1>"
                ],
                "explain": "Open the tag, add the text, then close the tag."
              },
              {
                "type": "code",
                "prompt": "Write an h1 that says “My Blog”.",
                "starter": "",
                "solution": "<h1>My Blog</h1>",
                "checks": [
                  "<h1[^>]*>\\s*My Blog\\s*</h1>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Every element has an opening tag and a closing tag."
              },
              {
                "type": "choice",
                "prompt": "What does a closing tag look like?",
                "options": [
                  "</p>",
                  "<p>",
                  "<p />"
                ],
                "answer": 0,
                "explain": "Closing tags start with a slash: </p>."
              }
            ]
          },
          {
            "id": "html-1-2",
            "title": "Text & emphasis",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag creates a paragraph?",
                "options": [
                  "<p>",
                  "<para>",
                  "<text>"
                ],
                "answer": 0,
                "explain": "<p> wraps a block of text."
              },
              {
                "type": "choice",
                "prompt": "Which tag makes text bold and important?",
                "options": [
                  "<strong>",
                  "<big>",
                  "<bold>"
                ],
                "answer": 0,
                "explain": "<strong> means “this matters” and browsers show it bold."
              },
              {
                "type": "fill",
                "prompt": "Make “Important” stand out with <strong>.",
                "bank": [
                  "</strong>",
                  "<em>",
                  "Important",
                  "<strong>",
                  "</em>"
                ],
                "solution": [
                  "<strong>",
                  "Important",
                  "</strong>"
                ],
                "explain": "Bold = <strong>, italic = <em>."
              },
              {
                "type": "code",
                "prompt": "Write a paragraph that says “I love coding”, with the word love in italics using <em>.",
                "solution": "<p>I <em>love</em> coding</p>",
                "checks": [
                  "<p[^>]*>",
                  "<em[^>]*>\\s*love\\s*</em>",
                  "coding"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Tags can live inside other tags — that is called nesting."
              },
              {
                "type": "choice",
                "prompt": "Which tag adds a line break?",
                "options": [
                  "<br>",
                  "<lb>",
                  "<break>"
                ],
                "answer": 0,
                "explain": "<br> is a self-closing tag — it needs no closing tag."
              }
            ]
          },
          {
            "id": "html-1-3",
            "title": "Links & lists",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag creates a link?",
                "options": [
                  "<a>",
                  "<link>",
                  "<href>"
                ],
                "answer": 0,
                "explain": "<a> is the anchor tag. The href attribute holds the destination."
              },
              {
                "type": "fill",
                "prompt": "Link to example.com with the text “Visit”.",
                "bank": [
                  "Visit",
                  "</a>",
                  "<a href=\"https://example.com\">",
                  "<p>"
                ],
                "solution": [
                  "<a href=\"https://example.com\">",
                  "Visit",
                  "</a>"
                ],
                "explain": "The link text goes between the opening and closing tags."
              },
              {
                "type": "code",
                "prompt": "Create an unordered list with two items: Tea and Coffee.",
                "solution": "<ul>\n  <li>Tea</li>\n  <li>Coffee</li>\n</ul>",
                "checks": [
                  "<ul[^>]*>",
                  "<li[^>]*>\\s*Tea\\s*</li>",
                  "<li[^>]*>\\s*Coffee\\s*</li>",
                  "</ul>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "<ul> holds the list, each <li> is one item."
              },
              {
                "type": "choice",
                "prompt": "Which tag is a single list item?",
                "options": [
                  "<li>",
                  "<item>",
                  "<ul>"
                ],
                "answer": 0,
                "explain": "List item = <li>."
              },
              {
                "type": "choice",
                "prompt": "A numbered list uses…",
                "options": [
                  "<ol>",
                  "<ul>",
                  "<dl>"
                ],
                "answer": 0,
                "explain": "<ol> is an ordered (numbered) list, <ul> is unordered."
              }
            ]
          }
        ]
      },
      {
        "id": "html-u2",
        "title": "Unit 2",
        "subtitle": "Page structure",
        "lessons": [
          {
            "id": "html-2-1",
            "title": "The page skeleton",
            "exercises": [
              {
                "type": "choice",
                "prompt": "What comes first in every HTML document?",
                "options": [
                  "<!DOCTYPE html>",
                  "<html>",
                  "<head>"
                ],
                "answer": 0,
                "explain": "The doctype tells the browser this is modern HTML."
              },
              {
                "type": "choice",
                "prompt": "The <head> element holds…",
                "options": [
                  "information about the page",
                  "the visible content",
                  "the footer"
                ],
                "answer": 0,
                "explain": "The head holds the title, meta tags and stylesheets."
              },
              {
                "type": "code",
                "prompt": "Add a <title> that says “My Site”.",
                "starter": "<head>\n\n</head>",
                "solution": "<head>\n  <title>My Site</title>\n</head>",
                "checks": [
                  "<title[^>]*>\\s*My Site\\s*</title>"
                ],
                "explain": "The title shows in the browser tab."
              },
              {
                "type": "fill",
                "prompt": "Open and close the body element.",
                "bank": [
                  "</body>",
                  "<main>",
                  "<body>",
                  "</main>"
                ],
                "solution": [
                  "<body>",
                  "</body>"
                ],
                "explain": "Everything visitors see lives inside <body>."
              },
              {
                "type": "choice",
                "prompt": "Which tag is self-closing (has no closing tag)?",
                "options": [
                  "<img>",
                  "<div>",
                  "<p>"
                ],
                "answer": 0,
                "explain": "Images, <br> and <hr> stand alone."
              }
            ]
          },
          {
            "id": "html-2-2",
            "title": "Images & attributes",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which attribute describes an image for screen readers?",
                "options": [
                  "alt",
                  "src",
                  "title"
                ],
                "answer": 0,
                "explain": "alt text is read aloud and shown if the image fails to load."
              },
              {
                "type": "fill",
                "prompt": "Add an image with src cat.jpg and alt “A cat”.",
                "bank": [
                  "<image>",
                  "alt=\"A cat\">",
                  "<img",
                  "src=\"cat.jpg\""
                ],
                "solution": [
                  "<img",
                  "src=\"cat.jpg\"",
                  "alt=\"A cat\">"
                ],
                "explain": "Attributes sit inside the opening tag as name=\"value\"."
              },
              {
                "type": "code",
                "prompt": "Show the photo at https://picsum.photos/200 with alt text “Random photo”.",
                "solution": "<img src=\"https://picsum.photos/200\" alt=\"Random photo\">",
                "checks": [
                  "<img",
                  "src=\"https://picsum.photos/200\"",
                  "alt=\"Random photo\""
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "src is where the file lives, alt describes it."
              },
              {
                "type": "choice",
                "prompt": "What does the src attribute mean?",
                "options": [
                  "where the file lives",
                  "the file size",
                  "the file colour"
                ],
                "answer": 0,
                "explain": "src = source location."
              },
              {
                "type": "choice",
                "prompt": "Which tag adds a caption to a figure?",
                "options": [
                  "<figcaption>",
                  "<caption>",
                  "<label>"
                ],
                "answer": 0,
                "explain": "<figure> groups an image, <figcaption> describes it."
              }
            ]
          },
          {
            "id": "html-2-3",
            "title": "Semantic sections",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag marks the main navigation?",
                "options": [
                  "<nav>",
                  "<menu>",
                  "<top>"
                ],
                "answer": 0,
                "explain": "<nav> tells browsers and screen readers “this is navigation”."
              },
              {
                "type": "choice",
                "prompt": "Which tag holds the main content of a page?",
                "options": [
                  "<main>",
                  "<body>",
                  "<section>"
                ],
                "answer": 0,
                "explain": "There should be one <main> per page."
              },
              {
                "type": "fill",
                "prompt": "Wrap “About us” in a section.",
                "bank": [
                  "</section>",
                  "<div>",
                  "About us",
                  "<section>"
                ],
                "solution": [
                  "<section>",
                  "About us",
                  "</section>"
                ],
                "explain": "Sections group related content."
              },
              {
                "type": "code",
                "prompt": "Create a header containing an h1 “Portfolio”, and a main containing a paragraph “Hello”.",
                "solution": "<header>\n  <h1>Portfolio</h1>\n</header>\n<main>\n  <p>Hello</p>\n</main>",
                "checks": [
                  "<header[\\s\\S]*<h1[^>]*>\\s*Portfolio\\s*</h1>",
                  "<main[\\s\\S]*<p[^>]*>\\s*Hello\\s*</p>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Semantic tags describe the job of each area."
              },
              {
                "type": "choice",
                "prompt": "Semantic tags help…",
                "options": [
                  "search engines and screen readers",
                  "make pages slower",
                  "add colours"
                ],
                "answer": 0,
                "explain": "They describe meaning, not looks."
              }
            ]
          }
        ]
      },
      {
        "id": "html-u3",
        "title": "Unit 3",
        "subtitle": "Forms & inputs",
        "lessons": [
          {
            "id": "html-3-1",
            "title": "Inputs & labels",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag creates a text field?",
                "options": [
                  "<input>",
                  "<text>",
                  "<field>"
                ],
                "answer": 0,
                "explain": "<input> changes behaviour with its type attribute."
              },
              {
                "type": "fill",
                "prompt": "Create a text input with placeholder “Your name”.",
                "bank": [
                  "placeholder=\"Your name\">",
                  "<label>",
                  "<input",
                  "type=\"text\""
                ],
                "solution": [
                  "<input",
                  "type=\"text\"",
                  "placeholder=\"Your name\">"
                ],
                "explain": "Placeholder text hints at what to type."
              },
              {
                "type": "choice",
                "prompt": "A <label> is linked to an input with…",
                "options": [
                  "for and id",
                  "class",
                  "style"
                ],
                "answer": 0,
                "explain": "label for=\"email\" matches input id=\"email\"."
              },
              {
                "type": "code",
                "prompt": "Build a labeled email field: a label “Email” with for=\"email\", and an input with id=\"email\" and type=\"email\".",
                "solution": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" placeholder=\"you@email.com\">",
                "checks": [
                  "<label[^>]*for=\"email\"[^>]*>\\s*Email\\s*</label>",
                  "<input[^>]*id=\"email\"",
                  "type=\"email\""
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Labels make forms easier to use — tap the label to focus the field."
              },
              {
                "type": "choice",
                "prompt": "Which input type hides typed characters?",
                "options": [
                  "password",
                  "secret",
                  "hidden"
                ],
                "answer": 0,
                "explain": "type=\"password\" masks the text."
              }
            ]
          },
          {
            "id": "html-3-2",
            "title": "Buttons & choices",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag makes a clickable button?",
                "options": [
                  "<button>",
                  "<click>",
                  "<a>"
                ],
                "answer": 0,
                "explain": "<button> is made for actions."
              },
              {
                "type": "fill",
                "prompt": "Create a submit button that says “Send”.",
                "bank": [
                  "<button",
                  "Send",
                  "</button>",
                  "type=\"submit\">",
                  "<input>"
                ],
                "solution": [
                  "<button",
                  "type=\"submit\">",
                  "Send",
                  "</button>"
                ],
                "explain": "type=\"submit\" sends the form."
              },
              {
                "type": "code",
                "prompt": "Create a dropdown with options “One” and “Two”.",
                "solution": "<select>\n  <option>One</option>\n  <option>Two</option>\n</select>",
                "checks": [
                  "<select",
                  "<option[^>]*>\\s*One\\s*</option>",
                  "<option[^>]*>\\s*Two\\s*</option>",
                  "</select>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "<select> is the dropdown, each <option> is a choice."
              },
              {
                "type": "choice",
                "prompt": "Which button type sends a form?",
                "options": [
                  "submit",
                  "send",
                  "post"
                ],
                "answer": 0,
                "explain": "submit is the built-in type."
              },
              {
                "type": "choice",
                "prompt": "Which element groups form fields with a caption?",
                "options": [
                  "<fieldset>",
                  "<group>",
                  "<formgroup>"
                ],
                "answer": 0,
                "explain": "fieldset + legend keep related fields together."
              }
            ]
          },
          {
            "id": "html-3-3",
            "title": "Build a signup form",
            "exercises": [
              {
                "type": "choice",
                "prompt": "A <form> needs which attribute to send its data somewhere?",
                "options": [
                  "action",
                  "href",
                  "src"
                ],
                "answer": 0,
                "explain": "action is the address the data goes to."
              },
              {
                "type": "code",
                "prompt": "Create a form with a text input (placeholder “Name”) and a submit button “Join”.",
                "solution": "<form>\n  <input type=\"text\" placeholder=\"Name\">\n  <button type=\"submit\">Join</button>\n</form>",
                "checks": [
                  "<form",
                  "<input",
                  "placeholder=\"Name\"",
                  "type=\"submit\"",
                  "Join"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Forms wrap the fields that belong together."
              },
              {
                "type": "fill",
                "prompt": "Stop the form being sent while the field is empty.",
                "bank": [
                  "required",
                  "validate",
                  "mandatory"
                ],
                "solution": [
                  "required"
                ],
                "explain": "Add the required attribute to the input."
              },
              {
                "type": "code",
                "prompt": "Add an email input with placeholder “you@email.com” and a password input.",
                "solution": "<input type=\"email\" placeholder=\"you@email.com\">\n<input type=\"password\" placeholder=\"Password\">",
                "checks": [
                  "type=\"email\"",
                  "placeholder=\"you@email.com\"",
                  "type=\"password\""
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Different types give mobile keyboards and validation for free."
              },
              {
                "type": "choice",
                "prompt": "What does the required attribute do?",
                "options": [
                  "blocks submit until filled",
                  "makes it bold",
                  "adds a label"
                ],
                "answer": 0,
                "explain": "The browser refuses to submit an empty required field."
              }
            ]
          }
        ]
      },
      {
        "id": "html-u4",
        "title": "Unit 4",
        "subtitle": "Tables & media",
        "lessons": [
          {
            "id": "html-4-1",
            "title": "Tables & colspan",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag starts a new row in a table?",
                "options": [
                  "<tr>",
                  "<td>",
                  "<table>"
                ],
                "answer": 0,
                "explain": "tr means table row. Each row holds cells made with <td> or <th>."
              },
              {
                "type": "choice",
                "prompt": "What does the colspan attribute do?",
                "options": [
                  "Merges a cell across several columns",
                  "Makes the text bigger",
                  "Adds another column to the table"
                ],
                "answer": 0,
                "explain": "colspan=\"2\" tells one cell to take up the space of two columns."
              },
              {
                "type": "fill",
                "prompt": "Make a header cell span two columns.",
                "bank": [
                  "</th>",
                  "<th",
                  "colspan=\"2\">",
                  "Team"
                ],
                "solution": [
                  "<th",
                  "colspan=\"2\">",
                  "Team",
                  "</th>"
                ],
                "explain": "The opening <th> tag takes a colspan attribute; the closing tag ends the cell."
              },
              {
                "type": "code",
                "prompt": "Build a table with a header that spans two columns, then two data cells.",
                "starter": "<table>\n  \n</table>",
                "solution": "<table>\n  <tr><th colspan=\"2\">Team</th></tr>\n  <tr><td>Ada</td><td>Grace</td></tr>\n</table>",
                "checks": [
                  "<table",
                  "<tr[^>]*>",
                  "colspan\\s*=\\s*[\"']?2",
                  "<td[^>]*>\\s*Ada",
                  "<td[^>]*>\\s*Grace",
                  "</table>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "colspan belongs on the cell that should stretch across columns."
              },
              {
                "type": "choice",
                "prompt": "Which attribute makes a cell span several rows?",
                "options": [
                  "rowspan",
                  "row-height",
                  "spanrow"
                ],
                "answer": 0,
                "explain": "rowspan is the vertical cousin of colspan."
              }
            ]
          },
          {
            "id": "html-4-2",
            "title": "Images & figures",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which attribute describes an image for screen readers?",
                "options": [
                  "alt",
                  "title",
                  "id"
                ],
                "answer": 0,
                "explain": "alt text is read aloud and appears when the picture cannot load."
              },
              {
                "type": "choice",
                "prompt": "When an image fails to load, what do visitors see?",
                "options": [
                  "Its alt text",
                  "Its src address",
                  "Nothing at all"
                ],
                "answer": 0,
                "explain": "That is why useful alt text matters — here is a picture that always loads:",
                "demoImage": {
                  "src": "/assets/image-placeholder.svg",
                  "alt": "Ximie the panda"
                }
              },
              {
                "type": "choice",
                "prompt": "Which element adds a caption under a picture?",
                "options": [
                  "<figcaption>",
                  "<caption>",
                  "<label>"
                ],
                "answer": 0,
                "explain": "Wrap the image and its <figcaption> in a <figure> element."
              },
              {
                "type": "fill",
                "prompt": "Add width and height to keep the page from jumping.",
                "bank": [
                  "width=\"200\"",
                  "<img",
                  "src=\"cat.jpg\"",
                  "height=\"120\">"
                ],
                "solution": [
                  "<img",
                  "src=\"cat.jpg\"",
                  "width=\"200\"",
                  "height=\"120\">"
                ],
                "explain": "Attributes can go in any order inside the opening tag."
              },
              {
                "type": "code",
                "prompt": "Show a photo with alt text and a caption underneath.",
                "starter": "<figure>\n  \n</figure>",
                "solution": "<figure>\n  <img src=\"https://picsum.photos/200\" alt=\"Random photo\">\n  <figcaption>A random photo</figcaption>\n</figure>",
                "checks": [
                  "<figure",
                  "<img[^>]*alt=",
                  "<figcaption[^>]*>",
                  "A random photo",
                  "</figure>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "The preview shows the image; if the remote photo cannot load, a placeholder appears instead.",
                "demoImage": {
                  "src": "/assets/image-placeholder.svg",
                  "alt": "Image preview"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "html-u5",
        "title": "Unit 5",
        "subtitle": "Rich content",
        "lessons": [
          {
            "id": "html-5-1",
            "title": "Audio & video",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag plays a video with browser controls?",
                "options": [
                  "<video controls>",
                  "<movie>",
                  "<player>"
                ],
                "answer": 0,
                "explain": "The controls attribute gives viewers play, pause and volume buttons."
              },
              {
                "type": "choice",
                "prompt": "Inside <video>, which element points to a media file?",
                "options": [
                  "<source>",
                  "<link>",
                  "<file>"
                ],
                "answer": 0,
                "explain": "<source src=\"clip.mp4\" type=\"video/mp4\"> lets the browser pick a format it supports."
              },
              {
                "type": "fill",
                "prompt": "Add controls to a video element.",
                "bank": [
                  "<video",
                  "controls>",
                  "src=\"clip.mp4\"",
                  "</video>"
                ],
                "solution": [
                  "<video",
                  "src=\"clip.mp4\"",
                  "controls>",
                  "</video>"
                ],
                "explain": "controls is a boolean attribute — it needs no value."
              },
              {
                "type": "code",
                "prompt": "Embed a video that has one source and controls.",
                "starter": "<video>\n  \n</video>",
                "solution": "<video controls>\n  <source src=\"clip.mp4\" type=\"video/mp4\">\n</video>",
                "checks": [
                  "<video[^>]*controls",
                  "<source[^>]*src=\"clip.mp4\"",
                  "</video>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Put <source> inside <video>, just like options sit inside <select>."
              },
              {
                "type": "choice",
                "prompt": "Which attribute makes media play again when it finishes?",
                "options": [
                  "loop",
                  "repeat",
                  "cycle"
                ],
                "answer": 0,
                "explain": "Add loop to <audio> or <video> to start over automatically."
              }
            ]
          },
          {
            "id": "html-5-2",
            "title": "Details & embeds",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which tag makes a clickable show/hide widget?",
                "options": [
                  "<details>",
                  "<dropdown>",
                  "<toggle>"
                ],
                "answer": 0,
                "explain": "Browsers give <details> a little arrow and handle the open/close behaviour for you."
              },
              {
                "type": "choice",
                "prompt": "What goes inside <summary>?",
                "options": [
                  "The clickable heading",
                  "The footer",
                  "A stylesheet"
                ],
                "answer": 0,
                "explain": "The summary is the label people click to reveal the rest."
              },
              {
                "type": "fill",
                "prompt": "Open and close a details widget with a summary.",
                "bank": [
                  "</details>",
                  "<details>",
                  "More info",
                  "<summary>",
                  "</summary>"
                ],
                "solution": [
                  "<details>",
                  "<summary>",
                  "More info",
                  "</summary>",
                  "</details>"
                ],
                "explain": "The summary must be the first child of <details>."
              },
              {
                "type": "code",
                "prompt": "Create a details widget with the summary \"Show more\".",
                "starter": "<details>\n  \n</details>",
                "solution": "<details>\n  <summary>Show more</summary>\n  <p>Extra details here.</p>\n</details>",
                "checks": [
                  "<details",
                  "<summary[^>]*>\\s*Show more\\s*</summary>",
                  "<p[^>]*>",
                  "</details>"
                ],
                "preview": {
                  "mode": "html"
                },
                "explain": "Everything after <summary> is hidden until the widget is opened."
              },
              {
                "type": "choice",
                "prompt": "Which tag embeds another page inside your page?",
                "options": [
                  "<iframe>",
                  "<frame>",
                  "<embed-page>"
                ],
                "answer": 0,
                "explain": "<iframe src=\"page.html\"></iframe> shows another document in a frame."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "css",
    "title": "CSS",
    "tagline": "Make it beautiful",
    "description": "Colours, typography, the box model, flexbox, grid and the little touches that make a page feel finished.",
    "units": [
      {
        "id": "css-u1",
        "title": "Unit 1",
        "subtitle": "Styling basics",
        "lessons": [
          {
            "id": "css-1-1",
            "title": "Selectors & colours",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property changes the text colour?",
                "options": [
                  "color",
                  "text-color",
                  "font-color"
                ],
                "answer": 0,
                "explain": "In CSS the text colour is simply color."
              },
              {
                "type": "choice",
                "prompt": "A CSS rule starts with a…",
                "code": "p {\n  color: red;\n}",
                "options": [
                  "selector",
                  "pointer",
                  "tag name only"
                ],
                "answer": 0,
                "explain": "The selector (here p) says which elements the rule applies to."
              },
              {
                "type": "fill",
                "prompt": "Make every paragraph red.",
                "bank": [
                  "{",
                  "color:",
                  "p",
                  "}",
                  "red;"
                ],
                "solution": [
                  "p",
                  "{",
                  "color:",
                  "red;",
                  "}"
                ],
                "explain": "The shape of every rule: selector { property: value; }"
              },
              {
                "type": "code",
                "prompt": "Give the .note class a blue text colour.",
                "starter": ".note {\n  \n}",
                "solution": ".note {\n  color: blue;\n}",
                "checks": [
                  "\\.note\\s*\\{[^}]*color:\\s*(blue|#0000ff|#00f)"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<p class=\"note\">Hello CSS</p>"
                },
                "explain": "A dot selects a class: .note"
              },
              {
                "type": "choice",
                "prompt": "Which selector picks an element by id?",
                "options": [
                  "#header",
                  ".header",
                  "header"
                ],
                "answer": 0,
                "explain": "# is for ids, . is for classes."
              }
            ]
          },
          {
            "id": "css-1-2",
            "title": "Fonts & text",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property sets the size of text?",
                "options": [
                  "font-size",
                  "text-size",
                  "size"
                ],
                "answer": 0,
                "explain": "font-size takes a unit, like 20px or 1.5rem."
              },
              {
                "type": "fill",
                "prompt": "Make the heading bold.",
                "bank": [
                  "{",
                  "bold;",
                  "font-weight:",
                  "h1",
                  "}"
                ],
                "solution": [
                  "h1",
                  "{",
                  "font-weight:",
                  "bold;",
                  "}"
                ],
                "explain": "font-weight: bold is the classic way to embolden text."
              },
              {
                "type": "code",
                "prompt": "Centre the heading and make it 40px.",
                "starter": ".title {\n  \n}",
                "solution": ".title {\n  text-align: center;\n  font-size: 40px;\n}",
                "checks": [
                  "\\.title\\s*\\{[^}]*text-align:\\s*center",
                  "font-size:\\s*40px"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<h1 class=\"title\">Big title</h1>"
                },
                "explain": "text-align centres the text inside its box."
              },
              {
                "type": "choice",
                "prompt": "Which unit scales with the reader’s font size?",
                "options": [
                  "rem",
                  "px",
                  "cm"
                ],
                "answer": 0,
                "explain": "1rem is the root font size, so it respects user settings."
              },
              {
                "type": "choice",
                "prompt": "Which property adds space between letters?",
                "options": [
                  "letter-spacing",
                  "word-gap",
                  "text-space"
                ],
                "answer": 0,
                "explain": "letter-spacing: 1px is great for small uppercase labels."
              }
            ]
          },
          {
            "id": "css-1-3",
            "title": "The box model",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Padding is the space…",
                "options": [
                  "inside the border",
                  "outside the border",
                  "between letters"
                ],
                "answer": 0,
                "explain": "Content → padding → border → margin."
              },
              {
                "type": "fill",
                "prompt": "Add 16px of padding inside the card.",
                "bank": [
                  "16px;",
                  "{",
                  ".card",
                  "padding:",
                  "}"
                ],
                "solution": [
                  ".card",
                  "{",
                  "padding:",
                  "16px;",
                  "}"
                ],
                "explain": "padding: 16px pushes the content away from the edge."
              },
              {
                "type": "code",
                "prompt": "Give the box a 2px solid black border.",
                "starter": ".box {\n  \n}",
                "solution": ".box {\n  border: 2px solid black;\n}",
                "checks": [
                  "\\.box\\s*\\{[^}]*border:\\s*2px\\s+solid"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"box\">Box</div>"
                },
                "explain": "border takes width, style and colour in one line."
              },
              {
                "type": "choice",
                "prompt": "Which property adds space outside the element?",
                "options": [
                  "margin",
                  "padding",
                  "gap"
                ],
                "answer": 0,
                "explain": "Margin pushes other elements away."
              },
              {
                "type": "choice",
                "prompt": "box-sizing: border-box makes width include…",
                "options": [
                  "padding and border",
                  "nothing extra",
                  "only the content"
                ],
                "answer": 0,
                "explain": "It keeps widths predictable — most projects set it on everything."
              }
            ]
          }
        ]
      },
      {
        "id": "css-u2",
        "title": "Unit 2",
        "subtitle": "Layout",
        "lessons": [
          {
            "id": "css-2-1",
            "title": "Display & spacing",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which display value puts elements side by side?",
                "options": [
                  "flex",
                  "block",
                  "none"
                ],
                "answer": 0,
                "explain": "Flexbox lays children out in a row by default."
              },
              {
                "type": "fill",
                "prompt": "Turn the container into a flex row.",
                "bank": [
                  "{",
                  ".row",
                  "flex;",
                  "display:",
                  "}"
                ],
                "solution": [
                  ".row",
                  "{",
                  "display:",
                  "flex;",
                  "}"
                ],
                "explain": "display: flex turns the element into a flex container."
              },
              {
                "type": "code",
                "prompt": "Centre the items horizontally and vertically with flex.",
                "starter": ".row {\n  display: flex;\n  \n}",
                "solution": ".row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
                "checks": [
                  "display:\\s*flex",
                  "justify-content:\\s*center",
                  "align-items:\\s*center"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"row\" style=\"height:120px;background:#f1f5f9\"><span>A</span><span>B</span></div>"
                },
                "explain": "justify-content runs along the row, align-items across it."
              },
              {
                "type": "choice",
                "prompt": "display: none does what?",
                "options": [
                  "hides the element completely",
                  "makes it transparent",
                  "shrinks it"
                ],
                "answer": 0,
                "explain": "It takes the element out of the layout entirely."
              },
              {
                "type": "choice",
                "prompt": "Which value makes an element take a full line?",
                "options": [
                  "block",
                  "inline",
                  "inline-block"
                ],
                "answer": 0,
                "explain": "Block elements start on a new line and fill the width."
              }
            ]
          },
          {
            "id": "css-2-2",
            "title": "Flexbox",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property spaces flex items apart?",
                "options": [
                  "gap",
                  "space",
                  "padding"
                ],
                "answer": 0,
                "explain": "gap is the modern way to space flex and grid children."
              },
              {
                "type": "fill",
                "prompt": "Push the nav items to opposite ends.",
                "bank": [
                  "{",
                  "space-between;",
                  ".nav",
                  "justify-content:",
                  "}"
                ],
                "solution": [
                  ".nav",
                  "{",
                  "justify-content:",
                  "space-between;",
                  "}"
                ],
                "explain": "space-between puts the free space in the middle."
              },
              {
                "type": "code",
                "prompt": "Make a flex row that wraps, with a 12px gap.",
                "starter": ".tags {\n  display: flex;\n  \n}",
                "solution": ".tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}",
                "checks": [
                  "display:\\s*flex",
                  "flex-wrap:\\s*wrap",
                  "gap:\\s*12px"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"tags\"><span>One</span><span>Two</span><span>Three</span><span>Four</span></div>"
                },
                "explain": "flex-wrap lets items flow onto new lines when space runs out."
              },
              {
                "type": "choice",
                "prompt": "flex-direction: column lays items out…",
                "options": [
                  "top to bottom",
                  "left to right",
                  "diagonally"
                ],
                "answer": 0,
                "explain": "Column stacks children vertically."
              },
              {
                "type": "choice",
                "prompt": "flex: 1 on a child means…",
                "options": [
                  "it fills the leftover space",
                  "it disappears",
                  "it becomes fixed width"
                ],
                "answer": 0,
                "explain": "It grows to share the free space with other flexible siblings."
              }
            ]
          },
          {
            "id": "css-2-3",
            "title": "Grid",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property defines grid columns?",
                "options": [
                  "grid-template-columns",
                  "columns",
                  "grid-cols"
                ],
                "answer": 0,
                "explain": "grid-template-columns describes the column track sizes."
              },
              {
                "type": "fill",
                "prompt": "Create two equal grid columns.",
                "bank": [
                  "1fr 1fr;",
                  "{",
                  ".grid",
                  "grid-template-columns:",
                  "}"
                ],
                "solution": [
                  ".grid",
                  "{",
                  "grid-template-columns:",
                  "1fr 1fr;",
                  "}"
                ],
                "explain": "1fr 1fr splits the width into two equal fractions."
              },
              {
                "type": "code",
                "prompt": "Make a 3-column grid with a 10px gap.",
                "starter": ".grid {\n  display: grid;\n  \n}",
                "solution": ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
                "checks": [
                  "display:\\s*grid",
                  "grid-template-columns:\\s*repeat\\(3",
                  "gap:\\s*10px"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"grid\"><span>1</span><span>2</span><span>3</span></div>"
                },
                "explain": "repeat(3, 1fr) is shorthand for three equal columns."
              },
              {
                "type": "choice",
                "prompt": "What does 1fr mean?",
                "options": [
                  "one fraction of the free space",
                  "one pixel",
                  "one row"
                ],
                "answer": 0,
                "explain": "fr = fraction of the available space."
              },
              {
                "type": "choice",
                "prompt": "Grid shines for…",
                "options": [
                  "two-dimensional layouts",
                  "only text",
                  "animations"
                ],
                "answer": 0,
                "explain": "Grid handles rows and columns at the same time."
              }
            ]
          }
        ]
      },
      {
        "id": "css-u3",
        "title": "Unit 3",
        "subtitle": "Polish",
        "lessons": [
          {
            "id": "css-3-1",
            "title": "Borders & shadows",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property rounds corners?",
                "options": [
                  "border-radius",
                  "corner-radius",
                  "radius"
                ],
                "answer": 0,
                "explain": "border-radius: 16px softens any box."
              },
              {
                "type": "fill",
                "prompt": "Round the card corners by 12px.",
                "bank": [
                  "12px;",
                  "{",
                  ".card",
                  "border-radius:",
                  "}"
                ],
                "solution": [
                  ".card",
                  "{",
                  "border-radius:",
                  "12px;",
                  "}"
                ],
                "explain": "A big radius on a small element makes a circle."
              },
              {
                "type": "code",
                "prompt": "Give the card a soft shadow.",
                "starter": ".card {\n  \n}",
                "solution": ".card {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}",
                "checks": [
                  "\\.card\\s*\\{[^}]*box-shadow:\\s*[^;]+"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"card\">Soft card</div>"
                },
                "explain": "box-shadow takes x-offset, y-offset, blur and colour."
              },
              {
                "type": "choice",
                "prompt": "In box-shadow: 0 8px 24px, the 24px is the…",
                "options": [
                  "blur",
                  "colour",
                  "x-offset"
                ],
                "answer": 0,
                "explain": "x-offset, y-offset, blur, then colour."
              },
              {
                "type": "choice",
                "prompt": "Which property makes a border dashed?",
                "options": [
                  "border-style",
                  "border-type",
                  "border-line"
                ],
                "answer": 0,
                "explain": "border-style: dashed — solid, dotted and dashed all work."
              }
            ]
          },
          {
            "id": "css-3-2",
            "title": "Hover & transitions",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which pseudo-class styles an element on hover?",
                "options": [
                  ":hover",
                  ":over",
                  ":mouse"
                ],
                "answer": 0,
                "explain": ".btn:hover applies only while the pointer is over the button."
              },
              {
                "type": "fill",
                "prompt": "Change the button colour on hover.",
                "bank": [
                  "{",
                  "black;",
                  ".btn:hover",
                  "background:",
                  "}"
                ],
                "solution": [
                  ".btn:hover",
                  "{",
                  "background:",
                  "black;",
                  "}"
                ],
                "explain": "Pseudo-classes attach straight to the selector with a colon."
              },
              {
                "type": "code",
                "prompt": "On hover, make .btn background #58cc02 with a .3s transition.",
                "starter": ".btn {\n  \n}\n\n.btn:hover {\n  \n}",
                "solution": ".btn {\n  transition: background .3s ease;\n}\n\n.btn:hover {\n  background: #58cc02;\n}",
                "checks": [
                  "\\.btn:hover",
                  "background:\\s*(#58cc02|rgb\\(88,\\s*204,\\s*2\\))",
                  "transition:[^;]*\\.3s"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<button class=\"btn\">Hover me</button>"
                },
                "explain": "Transition goes on the base rule, so both directions animate."
              },
              {
                "type": "choice",
                "prompt": "Which property animates changes smoothly?",
                "options": [
                  "transition",
                  "animation-delay",
                  "transform"
                ],
                "answer": 0,
                "explain": "transition: all .2s ease is a great default."
              },
              {
                "type": "choice",
                "prompt": "Which transform makes an element bigger?",
                "options": [
                  "scale(1.1)",
                  "rotate(1.1)",
                  "move(1.1)"
                ],
                "answer": 0,
                "explain": "scale multiplies the size — 1.1 is 10% bigger."
              }
            ]
          },
          {
            "id": "css-3-3",
            "title": "Build a card",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which property stacks content vertically in a flex card?",
                "options": [
                  "flex-direction: column",
                  "flex: column",
                  "direction: column"
                ],
                "answer": 0,
                "explain": "Column direction makes children flow top to bottom."
              },
              {
                "type": "code",
                "prompt": "Style .card: white background, 16px padding, 16px rounded corners.",
                "starter": ".card {\n  \n}",
                "solution": ".card {\n  background: white;\n  padding: 16px;\n  border-radius: 16px;\n}",
                "checks": [
                  "background(-color)?:\\s*(white|#fff|#ffffff)",
                  "padding:\\s*16px",
                  "border-radius:\\s*16px"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"card\"><h3>Card</h3><p>Styled by you.</p></div>"
                },
                "explain": "Three properties are enough for a clean card."
              },
              {
                "type": "fill",
                "prompt": "Give the card a thin grey border.",
                "bank": [
                  "1px solid #ddd;",
                  "{",
                  ".card",
                  "border:",
                  "}"
                ],
                "solution": [
                  ".card",
                  "{",
                  "border:",
                  "1px solid #ddd;",
                  "}"
                ],
                "explain": "border: 1px solid #ddd is the classic hairline."
              },
              {
                "type": "code",
                "prompt": "Lift the card on hover: transform translateY(-4px) on .card:hover.",
                "starter": ".card {\n  transition: transform .2s ease;\n}\n\n.card:hover {\n  \n}",
                "solution": ".card {\n  transition: transform .2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}",
                "checks": [
                  "\\.card:hover",
                  "transform:\\s*translateY\\(-4px\\)"
                ],
                "preview": {
                  "mode": "css",
                  "html": "<div class=\"card\">Hover to lift</div>"
                },
                "explain": "Tiny motion like this makes an interface feel alive."
              },
              {
                "type": "choice",
                "prompt": "What makes a layout look tidy?",
                "options": [
                  "consistent spacing",
                  "random colours",
                  "more fonts"
                ],
                "answer": 0,
                "explain": "Pick a spacing scale (4, 8, 16, 24) and stick to it."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "js",
    "title": "JavaScript",
    "tagline": "Make it think",
    "description": "Variables, logic, loops and functions — then make real pages react to clicks and typing.",
    "units": [
      {
        "id": "js-u1",
        "title": "Unit 1",
        "subtitle": "Foundations",
        "lessons": [
          {
            "id": "js-1-1",
            "title": "Variables",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which keyword declares a value that can change?",
                "options": [
                  "let",
                  "const",
                  "fixed"
                ],
                "answer": 0,
                "explain": "let can be reassigned, const cannot."
              },
              {
                "type": "choice",
                "prompt": "Which of these is a string?",
                "options": [
                  "\"hello\"",
                  "42",
                  "true"
                ],
                "answer": 0,
                "explain": "Text in quotes is a string."
              },
              {
                "type": "fill",
                "prompt": "Declare a score of 10.",
                "bank": [
                  "=",
                  "score",
                  "10;",
                  "let",
                  "const"
                ],
                "solution": [
                  "let",
                  "score",
                  "=",
                  "10;"
                ],
                "explain": "let name = value; — the semicolon ends the statement."
              },
              {
                "type": "code",
                "prompt": "Create a variable called name with the value \"Ada\", then log it to the console.",
                "starter": "",
                "solution": "let name = \"Ada\";\nconsole.log(name);",
                "checks": [
                  "(let|const)\\s+name\\s*=\\s*[\"']Ada[\"']",
                  "console\\.log"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "console.log prints values into the console panel."
              },
              {
                "type": "choice",
                "prompt": "const means…",
                "options": [
                  "the value cannot be reassigned",
                  "the value is private",
                  "the value is a number"
                ],
                "answer": 0,
                "explain": "Use const by default, let only when the value changes."
              }
            ]
          },
          {
            "id": "js-1-2",
            "title": "Types & operators",
            "exercises": [
              {
                "type": "choice",
                "prompt": "What does 2 + 2 give you?",
                "options": [
                  "4",
                  "\"22\"",
                  "22"
                ],
                "answer": 0,
                "explain": "Two numbers add up numerically."
              },
              {
                "type": "choice",
                "prompt": "Which operator checks equality including type?",
                "options": [
                  "===",
                  "==",
                  "="
                ],
                "answer": 0,
                "explain": "=== is strict equality — prefer it over ==."
              },
              {
                "type": "fill",
                "prompt": "Add 5 to points and store it back.",
                "bank": [
                  "+=",
                  "points",
                  "5;",
                  "="
                ],
                "solution": [
                  "points",
                  "+=",
                  "5;"
                ],
                "explain": "points += 5 is short for points = points + 5."
              },
              {
                "type": "code",
                "prompt": "Log the result of 7 * 6.",
                "starter": "",
                "solution": "console.log(7 * 6);",
                "checks": [
                  "console\\.log\\(\\s*7\\s*\\*\\s*6\\s*\\)"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "* multiplies, / divides, % gives the remainder."
              },
              {
                "type": "choice",
                "prompt": "typeof \"hi\" returns…",
                "options": [
                  "\"string\"",
                  "\"text\"",
                  "\"word\""
                ],
                "answer": 0,
                "explain": "typeof tells you the type of a value."
              }
            ]
          },
          {
            "id": "js-1-3",
            "title": "Strings",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which operator joins two strings?",
                "options": [
                  "+",
                  "&",
                  "."
                ],
                "answer": 0,
                "explain": "\"Hi \" + name glues the text together."
              },
              {
                "type": "fill",
                "prompt": "Build a greeting from the name variable.",
                "bank": [
                  "+",
                  "\"Hello, \"",
                  "name"
                ],
                "solution": [
                  "\"Hello, \"",
                  "+",
                  "name"
                ],
                "explain": "String + variable creates one combined string."
              },
              {
                "type": "code",
                "prompt": "Log the length of the word \"coding\".",
                "starter": "",
                "solution": "console.log(\"coding\".length);",
                "checks": [
                  "[\"']coding[\"']\\.length",
                  "console\\.log"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": ".length counts the characters."
              },
              {
                "type": "choice",
                "prompt": "Which method makes text uppercase?",
                "options": [
                  ".toUpperCase()",
                  ".upper()",
                  ".big()"
                ],
                "answer": 0,
                "explain": "\"hi\".toUpperCase() → \"HI\""
              },
              {
                "type": "choice",
                "prompt": "Template literals are wrapped in…",
                "options": [
                  "backticks",
                  "single quotes",
                  "double quotes"
                ],
                "answer": 0,
                "explain": "`Hello ${name}` lets you drop values straight into text."
              }
            ]
          }
        ]
      },
      {
        "id": "js-u2",
        "title": "Unit 2",
        "subtitle": "Logic",
        "lessons": [
          {
            "id": "js-2-1",
            "title": "Conditions",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which keyword starts a condition?",
                "options": [
                  "if",
                  "when",
                  "check"
                ],
                "answer": 0,
                "explain": "if (condition) { … }"
              },
              {
                "type": "fill",
                "prompt": "Log “pass” when the score is at least 50.",
                "bank": [
                  "{",
                  "if",
                  "(score >= 50)",
                  "console.log(\"pass\")",
                  "}"
                ],
                "solution": [
                  "if",
                  "(score >= 50)",
                  "{",
                  "console.log(\"pass\")",
                  "}"
                ],
                "explain": "The condition goes in parentheses, the action in braces."
              },
              {
                "type": "code",
                "prompt": "Log \"big\" when n is greater than 10, otherwise log \"small\".",
                "starter": "let n = 12;\n",
                "solution": "let n = 12;\nif (n > 10) {\n  console.log(\"big\");\n} else {\n  console.log(\"small\");\n}",
                "checks": [
                  "if\\s*\\(\\s*n\\s*>\\s*10\\s*\\)",
                  "else",
                  "console\\.log\\(\\s*[\"']big[\"']\\s*\\)",
                  "console\\.log\\(\\s*[\"']small[\"']\\s*\\)"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "else catches every case the if did not."
              },
              {
                "type": "choice",
                "prompt": "else runs when…",
                "options": [
                  "the if condition is false",
                  "always",
                  "the if condition is true"
                ],
                "answer": 0,
                "explain": "Only one branch of an if/else ever runs."
              },
              {
                "type": "choice",
                "prompt": "Which operator means “and”?",
                "options": [
                  "&&",
                  "||",
                  "!!"
                ],
                "answer": 0,
                "explain": "&& both true, || either true, ! flips a value."
              }
            ]
          },
          {
            "id": "js-2-2",
            "title": "Loops",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which loop repeats a set number of times most simply?",
                "options": [
                  "for",
                  "if",
                  "while (true)"
                ],
                "answer": 0,
                "explain": "for (let i = 0; i < 5; i++) counts for you."
              },
              {
                "type": "fill",
                "prompt": "Loop from 0 to 4 and log each number.",
                "bank": [
                  "{",
                  "for",
                  "(let i = 0; i < 5; i++)",
                  "console.log(i)",
                  "}"
                ],
                "solution": [
                  "for",
                  "(let i = 0; i < 5; i++)",
                  "{",
                  "console.log(i)",
                  "}"
                ],
                "explain": "Start at 0, stop before 5, add one each round."
              },
              {
                "type": "code",
                "prompt": "Use a for loop to log the numbers 1 to 3.",
                "starter": "",
                "solution": "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
                "checks": [
                  "for\\s*\\(",
                  "console\\.log\\(\\s*i\\s*\\)",
                  "i\\s*<=\\s*3|i\\s*<\\s*4"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "i++ adds one to i after each pass."
              },
              {
                "type": "choice",
                "prompt": "What does i++ do?",
                "options": [
                  "adds 1 to i",
                  "doubles i",
                  "stops the loop"
                ],
                "answer": 0,
                "explain": "It is shorthand for i = i + 1."
              },
              {
                "type": "choice",
                "prompt": "A while loop runs…",
                "options": [
                  "while its condition is true",
                  "exactly once",
                  "never"
                ],
                "answer": 0,
                "explain": "If the condition never turns false, the loop never stops."
              }
            ]
          },
          {
            "id": "js-2-3",
            "title": "Functions",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which keyword declares a function?",
                "options": [
                  "function",
                  "def",
                  "fn"
                ],
                "answer": 0,
                "explain": "function greet() { … }"
              },
              {
                "type": "fill",
                "prompt": "Declare a function called greet.",
                "bank": [
                  "greet",
                  "{",
                  "function",
                  "()",
                  "}"
                ],
                "solution": [
                  "function",
                  "greet",
                  "()",
                  "{",
                  "}"
                ],
                "explain": "Name, parentheses for inputs, braces for the body."
              },
              {
                "type": "code",
                "prompt": "Write a function add(a, b) that returns a + b, then log add(2, 3).",
                "starter": "",
                "solution": "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));",
                "checks": [
                  "function\\s+add\\s*\\(\\s*a\\s*,\\s*b\\s*\\)",
                  "return\\s+a\\s*\\+\\s*b",
                  "add\\(\\s*2\\s*,\\s*3\\s*\\)"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "Parameters are the inputs; return sends a value back."
              },
              {
                "type": "choice",
                "prompt": "What sends a value out of a function?",
                "options": [
                  "return",
                  "give",
                  "output"
                ],
                "answer": 0,
                "explain": "Without return, a function gives back undefined."
              },
              {
                "type": "choice",
                "prompt": "An arrow function is written with…",
                "options": [
                  "=>",
                  "->",
                  ":"
                ],
                "answer": 0,
                "explain": "const add = (a, b) => a + b;"
              }
            ]
          }
        ]
      },
      {
        "id": "js-u3",
        "title": "Unit 3",
        "subtitle": "The DOM",
        "lessons": [
          {
            "id": "js-3-1",
            "title": "Selecting elements",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which method finds an element by CSS selector?",
                "options": [
                  "document.querySelector",
                  "document.find",
                  "document.get"
                ],
                "answer": 0,
                "explain": "It takes any CSS selector, like \"#title\" or \".box\"."
              },
              {
                "type": "fill",
                "prompt": "Select the element with id title.",
                "bank": [
                  "\"#title\"",
                  "document.querySelector(",
                  ")",
                  "document.find("
                ],
                "solution": [
                  "document.querySelector(",
                  "\"#title\"",
                  ")"
                ],
                "explain": "Ids use a hash inside the selector."
              },
              {
                "type": "code",
                "prompt": "Select the .box element and store it in a const called box.",
                "starter": "",
                "solution": "const box = document.querySelector(\".box\");",
                "checks": [
                  "const\\s+box\\s*=\\s*document\\.querySelector\\(\\s*[\"']\\.box[\"']\\s*\\)"
                ],
                "preview": {
                  "mode": "js",
                  "html": "<div class=\"box\">Hi there</div>"
                },
                "explain": "Now the element is in a variable you can work with."
              },
              {
                "type": "choice",
                "prompt": "textContent changes…",
                "options": [
                  "the text inside an element",
                  "the element’s colour",
                  "the page title only"
                ],
                "answer": 0,
                "explain": "el.textContent = \"New text\" replaces what is shown."
              },
              {
                "type": "choice",
                "prompt": "Which method finds all matching elements?",
                "options": [
                  "querySelectorAll",
                  "querySelector",
                  "getElement"
                ],
                "answer": 0,
                "explain": "It returns a list you can loop over."
              }
            ]
          },
          {
            "id": "js-3-2",
            "title": "Events",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Which method listens for a click?",
                "options": [
                  "addEventListener",
                  "onClickListener",
                  "listen"
                ],
                "answer": 0,
                "explain": "el.addEventListener(\"click\", handler)"
              },
              {
                "type": "fill",
                "prompt": "Add a click listener to the button.",
                "bank": [
                  "\"click\"",
                  "button.addEventListener(",
                  "handleClick",
                  ",",
                  ")"
                ],
                "solution": [
                  "button.addEventListener(",
                  "\"click\"",
                  ",",
                  "handleClick",
                  ")"
                ],
                "explain": "First the event name, then the function to run."
              },
              {
                "type": "code",
                "prompt": "When the button is clicked, log \"clicked\".",
                "starter": "const button = document.querySelector(\"#btn\");\n",
                "solution": "const button = document.querySelector(\"#btn\");\nbutton.addEventListener(\"click\", () => {\n  console.log(\"clicked\");\n});",
                "checks": [
                  "addEventListener\\(\\s*[\"']click[\"']",
                  "console\\.log\\(\\s*[\"']clicked[\"']"
                ],
                "preview": {
                  "mode": "js",
                  "html": "<button id=\"btn\">Click me</button>"
                },
                "explain": "The arrow function runs every time the event fires."
              },
              {
                "type": "choice",
                "prompt": "The function that runs on an event is called a…",
                "options": [
                  "callback",
                  "printer",
                  "selector"
                ],
                "answer": 0,
                "explain": "You hand it to the browser to call later."
              },
              {
                "type": "choice",
                "prompt": "Which event fires when an input’s value changes?",
                "options": [
                  "input",
                  "change-color",
                  "typing"
                ],
                "answer": 0,
                "explain": "\"input\" fires on every keystroke."
              }
            ]
          },
          {
            "id": "js-3-3",
            "title": "Build a counter",
            "exercises": [
              {
                "type": "choice",
                "prompt": "Where should you store a changing count?",
                "options": [
                  "a let variable",
                  "a CSS class",
                  "the page title"
                ],
                "answer": 0,
                "explain": "JavaScript state lives in variables."
              },
              {
                "type": "code",
                "prompt": "Create a let variable called count set to 0.",
                "starter": "",
                "solution": "let count = 0;",
                "checks": [
                  "let\\s+count\\s*=\\s*0"
                ],
                "preview": {
                  "mode": "js"
                },
                "explain": "let, because the value will change."
              },
              {
                "type": "code",
                "prompt": "Increase count by 1 when the button is clicked, then show it inside #output.",
                "starter": "let count = 0;\nconst button = document.querySelector(\"#btn\");\nconst output = document.querySelector(\"#output\");\n",
                "solution": "let count = 0;\nconst button = document.querySelector(\"#btn\");\nconst output = document.querySelector(\"#output\");\nbutton.addEventListener(\"click\", () => {\n  count = count + 1;\n  output.textContent = count;\n});",
                "checks": [
                  "addEventListener\\(\\s*[\"']click[\"']",
                  "count\\s*(\\+\\+|=\\s*count\\s*\\+\\s*1|\\+=?\\s*1)",
                  "querySelector\\(\\s*[\"']#output[\"']"
                ],
                "preview": {
                  "mode": "js",
                  "html": "<button id=\"btn\">+1</button><p id=\"output\">0</p>"
                },
                "explain": "Read the value, update it, then write it back to the page."
              },
              {
                "type": "choice",
                "prompt": "output.textContent = count displays…",
                "options": [
                  "the number stored in count",
                  "the word count",
                  "nothing"
                ],
                "answer": 0,
                "explain": "textContent takes the value, not the variable name."
              },
              {
                "type": "choice",
                "prompt": "A good next step after a counter is…",
                "options": [
                  "splitting code into small functions",
                  "deleting the HTML",
                  "adding 100 variables"
                ],
                "answer": 0,
                "explain": "Small functions are easier to read and reuse."
              }
            ]
          }
        ]
      }
    ]
  }
];
