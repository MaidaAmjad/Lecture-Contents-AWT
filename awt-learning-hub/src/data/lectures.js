export const lectures = [
  {
    id: 1,
    title: "JSON – Structure, Data Types, Conversion & XML Evolution",
    topic: "JavaScript Object Notation",
    duration: "Self-Study",
    type: "Theory",
    description: "JSON structure, 6 data types, serialization/deserialization, and the evolution from XML to JSON.",
    sections: [
      {
        heading: "What Is JSON?",
        content: [
          "JSON (JavaScript Object Notation) is a lightweight, text-based, language-independent data interchange format.",
          "Originally derived from JavaScript object literal syntax, JSON has grown to become the universal language of data exchange.",
          "Formally specified by Douglas Crockford in the early 2000s and standardized as ECMA-404 and RFC 8259.",
          "Design philosophy: a minimal set of rules that both humans can read effortlessly and machines can parse with exceptional speed.",
        ],
        example: {
          label: "Official Standards",
          points: [
            "ECMA-404 — The JSON Data Interchange Standard",
            "RFC 8259 — Internet Engineering Task Force specification",
          ],
        },
      },
      {
        heading: "JSON Structure",
        subsections: [
          {
            title: "The Two Root Structures",
            content: [
              "Object { } — An unordered collection of name/value pairs. Keys are strings, followed by a colon, then a value. Pairs separated by commas, enclosed in curly braces.",
              "Array [ ] — An ordered sequence of values. Values separated by commas, enclosed in square brackets. Elements can be of any JSON type.",
            ],
          },
          {
            title: "Basic JSON Example",
            code: `{
  "id": 1001,
  "name": "Ayesha Malik",
  "email": "ayesha@example.com",
  "isActive": true,
  "score": 98.5,
  "tags": ["developer", "full-stack", "mentor"],
  "address": {
    "city": "Lahore",
    "country": "Pakistan",
    "postalCode": "54000"
  },
  "projects": null
}`,
          },
          {
            title: "Structural Rules",
            content: [
              "Keys must always be strings enclosed in double quotes — single quotes are NOT valid JSON.",
              "Key-value pairs inside objects are separated by commas; the last pair must NOT have a trailing comma.",
              "JSON is case-sensitive: 'Name', 'name', and 'NAME' are three distinct keys.",
              "Strings must use double quotes — special characters must be escaped with a backslash.",
              "Whitespace outside of strings is ignored and used only for readability.",
              "A JSON document must have exactly one root value — either an object or an array.",
            ],
          },
          {
            title: "Nested & Complex Structures",
            code: `{
  "company": "TechCorp Ltd",
  "founded": 2015,
  "departments": [
    {
      "name": "Engineering",
      "headcount": 45,
      "teams": ["Frontend", "Backend", "DevOps", "QA"]
    },
    {
      "name": "Product",
      "headcount": 12,
      "teams": ["Design", "Research", "Strategy"]
    }
  ],
  "publiclyTraded": false,
  "ceo": null
}`,
          },
        ],
      },
      {
        heading: "JSON Data Types (6 Types)",
        table: {
          headers: ["Type", "Syntax", "Example", "Description"],
          rows: [
            ["String", '"double quotes"', '"Hello, World!"', "Unicode text, must use escape sequences for special chars"],
            ["Number", "integer or float", "42, 3.14, -7, 1.5e10", "No distinction between int/float; no NaN or Infinity allowed"],
            ["Boolean", "true or false", "true, false", "Lowercase only; True or False are invalid"],
            ["Null", "null", "null", "Represents absence of value; lowercase only"],
            ["Object", "{ key: value, ... }", '{"x": 1, "y": 2}', "Unordered collection of name/value pairs"],
            ["Array", "[ value, ... ]", '[1, "two", true, null]', "Ordered list; elements can be mixed types"],
          ],
        },
        subsections: [
          {
            title: "String Type — Escape Sequences",
            code: `{
  "simple":    "Hello World",
  "withQuote": "He said \\"JSON is great\\"",
  "withSlash": "C:\\\\Users\\\\Documents",
  "newline":   "Line 1\\nLine 2",
  "tab":       "Column1\\tColumn2",
  "unicode":   "\\u0041 is the letter A"
}`,
            content: [
              'Common escape sequences: \\" (double quote), \\\\ (backslash), \\n (newline), \\t (tab), \\r (carriage return), \\uXXXX (Unicode).',
            ],
          },
          {
            title: "Number Type — Constraints",
            code: `{
  "integer":    42,
  "negative":   -17,
  "float":      3.14159,
  "scientific": 1.5e10,

  // NOT valid JSON:
  "invalid_nan": NaN,
  "invalid_inf": Infinity,
  "invalid_hex": 0xFF
}`,
          },
          {
            title: "Type Comparison Across Languages",
            table: {
              headers: ["JSON Type", "JavaScript", "Python", "Java", "Go"],
              rows: [
                ["String", "String", "str", "String", "string"],
                ["Number", "Number", "int / float", "int / double", "int / float64"],
                ["Boolean", "Boolean", "bool", "boolean", "bool"],
                ["Null", "null", "None", "null", "nil"],
                ["Object", "Object / Map", "dict", "Map / POJO", "map / struct"],
                ["Array", "Array", "list", "List / array", "slice"],
              ],
            },
          },
        ],
      },
      {
        heading: "Data Conversion (Serialization & Deserialization)",
        subsections: [
          {
            title: "Serialization vs Deserialization",
            content: [
              "Serialization (Encoding) — Converting a native data structure into a JSON string. Also called: stringify, marshal, encode, dump. Example: sending data TO an API.",
              "Deserialization (Decoding) — Converting a JSON string into a native data structure. Also called: parse, unmarshal, decode, load. Example: receiving data FROM an API response.",
            ],
          },
          {
            title: "JavaScript Conversion",
            code: `// PARSE: JSON string → JavaScript object
const jsonString = '{"name":"Ali","age":28,"skills":["JS","React"]}';
const obj = JSON.parse(jsonString);
console.log(obj.name);       // "Ali"
console.log(obj.skills[0]);  // "JS"

// STRINGIFY: JavaScript object → JSON string
const user = { name: 'Sara', active: true, score: 95.5 };
const json = JSON.stringify(user);
// Result: '{"name":"Sara","active":true,"score":95.5}'

// Pretty-printed output
const pretty = JSON.stringify(user, null, 2);`,
          },
          {
            title: "Python Conversion",
            code: `import json

# PARSE: JSON string → Python dict
json_str = '{"city":"Karachi","pop":15000000,"coastal":true}'
data = json.loads(json_str)
print(data["city"])    # "Karachi"

# DUMP: Python dict → JSON string
person = {"name": "Fatima", "age": 30, "languages": ["Urdu", "English"]}
json_output = json.dumps(person, indent=2)

# FILE I/O
with open('data.json', 'w') as f:
    json.dump(person, f, indent=2)

with open('data.json', 'r') as f:
    loaded = json.load(f)`,
          },
          {
            title: "Other Languages",
            code: `// Java (Jackson)
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(myObject);
MyClass obj = mapper.readValue(json, MyClass.class);

// Go
jsonBytes, _ := json.Marshal(myStruct)
json.Unmarshal(jsonBytes, &myStruct)

// PHP
$obj = json_decode($jsonString, true);
$str = json_encode($phpArray);

// C# (.NET)
var obj = JsonSerializer.Deserialize<MyClass>(jsonString);
var str = JsonSerializer.Serialize(myObject);`,
          },
          {
            title: "Common Conversion Pitfalls",
            content: [
              "Integers larger than 2^53 - 1 cannot be precisely represented — use strings for large IDs.",
              "Date/Time has no JSON type — use ISO 8601 strings (\"2024-04-27T10:30:00Z\").",
              "undefined in JavaScript is NOT valid JSON and is silently dropped during JSON.stringify().",
              "Circular references cause JSON.stringify() to throw an error.",
              "NaN and Infinity are not valid JSON — replace with null or string representation.",
              "Key order is NOT guaranteed in JSON objects — never rely on property order.",
            ],
          },
        ],
      },
      {
        heading: "From XML to JSON — Technological Evolution",
        subsections: [
          {
            title: "The Era of XML (1998–2010)",
            content: [
              "XML emerged from SGML and became a W3C recommendation in 1998.",
              "Technologies like SOAP, WSDL, XSLT, and RSS were built entirely on XML.",
              "Enterprise systems, government platforms, and B2B integrations standardized on XML-based web services.",
            ],
            code: `<?xml version="1.0" encoding="UTF-8"?>
<user>
  <id>1001</id>
  <name>Ayesha Malik</name>
  <email>ayesha@example.com</email>
  <isActive>true</isActive>
  <tags>
    <tag>developer</tag>
    <tag>full-stack</tag>
  </tags>
  <address>
    <city>Lahore</city>
    <country>Pakistan</country>
  </address>
</user>`,
          },
          {
            title: "The Rise of JSON (2001–Present)",
            content: [
              "Douglas Crockford popularized JSON in 2001, recognizing that JavaScript's native object literal syntax could serve as a simple, powerful data format.",
              "The same data in JSON is roughly half the characters, with no closing tags, no XML declaration, and no namespace complexity.",
            ],
            code: `{
  "id": 1001,
  "name": "Ayesha Malik",
  "email": "ayesha@example.com",
  "isActive": true,
  "tags": ["developer", "full-stack"],
  "address": {
    "city": "Lahore",
    "country": "Pakistan"
  }
}`,
          },
          {
            title: "XML vs JSON — Comparison",
            table: {
              headers: ["Dimension", "XML", "JSON"],
              rows: [
                ["Verbosity", "Highly verbose — every value needs opening/closing tags", "Concise — key-value pairs with minimal syntax"],
                ["Data Types", "Everything is text — types enforced by schema (XSD)", "6 native types: string, number, boolean, null, object, array"],
                ["Parsing Speed", "Slower — complex DOM or SAX parsing required", "Faster — JSON.parse() is highly optimized"],
                ["Payload Size", "Large — 30-50% overhead from redundant tag pairs", "Small — minimal syntax; compresses well with gzip"],
                ["Comments", "Supports <!-- comments --> natively", "No comment syntax — intentionally excluded"],
                ["Primary Use", "Documents, configs, legacy enterprise, SOAP", "REST APIs, web apps, config files, NoSQL databases"],
              ],
            },
          },
          {
            title: "Timeline of the XML-to-JSON Transition",
            table: {
              headers: ["Year", "Milestone"],
              rows: [
                ["1998", "W3C publishes XML 1.0. XML becomes backbone of enterprise web services."],
                ["1999", "SOAP protocol introduced using XML as its message format."],
                ["2001", "Douglas Crockford coins 'JSON' and registers JSON.org."],
                ["2004", "Ajax popularized by Google Maps. JSON soon replaces XML in Ajax."],
                ["2006", "JSON begins appearing in REST APIs. Twitter, Flickr offer JSON responses."],
                ["2009", "Node.js released — JSON becomes natural format for full-stack JS."],
                ["2013", "ECMA-404 officially standardizes JSON. GitHub, Stripe, Twilio ship JSON-first."],
                ["2014", "MongoDB reaches v2.6. NoSQL databases accelerate JSON adoption."],
                ["2017", "RFC 8259 supersedes RFC 4627 with stricter JSON specification."],
                ["2020s", "JSON is the default. YAML, JSON5, NDJSON, JSON-LD extend the ecosystem."],
              ],
            },
          },
          {
            title: "Why JSON Won",
            content: [
              "Rise of JavaScript — a format identical to JS object literals eliminated a parsing step entirely.",
              "Mobile & Bandwidth — JSON's smaller payloads meant real cost savings on early smartphones.",
              "REST Architecture — Roy Fielding's REST principles matched JSON's simplicity perfectly.",
              "Developer Experience — Junior developers could read/write JSON immediately; XML required learning namespaces and schemas.",
              "Performance — JSON parsing is 2-3x faster than equivalent XML in most environments.",
              "NoSQL Alignment — MongoDB, CouchDB, Elasticsearch, and Firebase store data as JSON natively.",
            ],
          },
          {
            title: "When XML Still Makes Sense",
            content: [
              "Document formats: Microsoft Office (DOCX, XLSX), OpenDocument Format (ODF).",
              "Configuration: Maven (pom.xml), Spring, Ant, and many Java frameworks.",
              "SOAP-based legacy systems: Banks, healthcare (HL7), and government systems.",
              "SVG graphics: Scalable Vector Graphics is XML-based and integral to web design.",
              "RSS/Atom feeds: Widely used XML formats for content syndication.",
            ],
          },
        ],
      },
      {
        heading: "JSON Best Practices",
        subsections: [
          {
            title: "Naming & Structure",
            content: [
              "Use camelCase for key names in web APIs (firstName, not first_name or FirstName).",
              "Be consistent — do not mix camelCase, snake_case, and PascalCase.",
              "Use null explicitly for missing values rather than omitting the key.",
              "Design flat structures where possible; excessive nesting harms readability.",
            ],
          },
          {
            title: "Security",
            content: [
              "Never trust incoming JSON — always validate against a schema (Ajv, Joi, Zod) before processing.",
              "Sanitize string values to prevent stored XSS attacks when rendering JSON data in HTML.",
              "Do NOT use eval() to parse JSON — always use JSON.parse() which is safe and sandboxed.",
              "Limit maximum payload size on APIs to prevent JSON bomb DoS attacks.",
            ],
          },
          {
            title: "Performance",
            content: [
              "Enable gzip/Brotli compression for JSON API responses — typically reduces payload by 70-80%.",
              "Use pagination for large collections — never return unbounded arrays from APIs.",
              "Consider binary formats (MessagePack, CBOR, Protobuf) when JSON parsing becomes a bottleneck.",
              "Use streaming JSON parsers (NDJSON) for very large datasets.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "What does JSON stand for?", a: "JavaScript Object Notation" },
      { q: "How many data types does JSON define?", a: "6 — String, Number, Boolean, Null, Object, Array" },
      { q: "Are single quotes valid in JSON keys?", a: "No. Keys must always be enclosed in double quotes." },
      { q: "What is serialization in JSON context?", a: "Converting a native data structure into a JSON string (e.g., JSON.stringify() in JS)." },
      { q: "What is deserialization?", a: "Converting a JSON string into a native data structure (e.g., JSON.parse() in JS)." },
      { q: "Why did JSON replace XML in most web APIs?", a: "JSON is more concise, faster to parse, has native data types, and aligns perfectly with JavaScript and REST." },
      { q: "Is NaN a valid JSON value?", a: "No. NaN and Infinity are not valid JSON values." },
      { q: "What year was JSON formally standardized as ECMA-404?", a: "2013" },
      { q: "Name two cases where XML is still preferred over JSON.", a: "Document formats (DOCX, XLSX) and SOAP-based legacy enterprise systems." },
      { q: "What is the difference between JSON.parse() and JSON.stringify()?", a: "JSON.parse() converts a JSON string to a JS object (deserialize). JSON.stringify() converts a JS object to a JSON string (serialize)." },
    ],
  },
  {
    id: 2,
    title: "Node.js Architecture, Core Features & Modules",
    topic: "Introduction to Node.js",
    duration: "2 Hours",
    type: "Theory",
    description: "Node.js runtime, core features, event loop, callbacks, event emitters, modules, and NPM.",
    sections: [
      {
        heading: "What is Node.js?",
        content: [
          "Node.js is an open-source, cross-platform runtime environment.",
          "Used to run JavaScript outside the browser.",
          "Built on Google Chrome's V8 JavaScript Engine.",
        ],
      },
      {
        heading: "Core Features",
        subsections: [
          {
            title: "1. Asynchronous & Non-blocking",
            content: [
              "Node.js can handle multiple requests without waiting.",
              "Improves performance and scalability.",
            ],
            example: {
              label: "Real-life Example: Restaurant Waiter",
              points: [
                "Traditional (blocking): Waiter takes one order, waits until food is served, then takes next order.",
                "Node.js (non-blocking): Waiter takes multiple orders and serves them as food becomes ready.",
              ],
            },
          },
          {
            title: "2. Single-Threaded but Highly Scalable",
            content: [
              "Uses a single thread.",
              "Manages thousands of requests using event-driven architecture.",
            ],
          },
          {
            title: "3. Fast Performance",
            content: ["Uses V8 engine → converts JS directly into machine code."],
          },
          {
            title: "4. Cross-platform",
            content: ["Runs on Windows, Linux, macOS."],
          },
        ],
      },
      {
        heading: "Node.js Architecture Overview",
        content: [
          "Node.js follows: Event-driven, Non-blocking I/O, Client–Server architecture.",
        ],
        list: {
          label: "Architecture Flow:",
          items: [
            "Client sends request",
            "Request goes to Event Queue",
            "Event Loop processes request",
            "Background threads handle heavy tasks",
            "Response sent back to client",
          ],
        },
      },
      {
        heading: "Types of Modules",
        subsections: [
          {
            title: "1. Core Modules",
            content: ["Built-in modules provided by Node.js."],
            list: { label: "Examples:", items: ["fs (File System)", "http", "path", "os"] },
          },
          {
            title: "2. Local Modules",
            content: ["Created by developers.", "Used to organize code."],
            example: {
              label: "Real-life Example",
              points: ["Like chapters in a book – each chapter handles a specific topic."],
            },
          },
          {
            title: "3. Third-Party Modules",
            content: ["Installed using NPM."],
            list: { label: "Examples:", items: ["express", "mongoose"] },
          },
        ],
      },
      {
        heading: "Event Loop, Callbacks & Event Emitters",
        subsections: [
          {
            title: "Event Loop",
            content: [
              "Heart of Node.js.",
              "Handles asynchronous operations.",
              "Continuously checks: Call stack, Event queue, Callback queue.",
              "Think of it like a traffic police officer deciding which request goes next.",
            ],
          },
          {
            title: "Callbacks",
            content: [
              "A callback is a function passed as an argument.",
              "Executed after a task is completed.",
            ],
            example: {
              label: "Real-life Example",
              points: [
                "You order food → call the waiter.",
                "When food is ready → waiter calls you.",
              ],
            },
          },
          {
            title: "Event Emitters",
            content: ["Used to emit and listen to events.", "Based on Observer pattern."],
            list: {
              label: "Example Use Cases:",
              items: ["File upload completion", "Button click", "Network request"],
            },
          },
        ],
      },
      {
        heading: "NPM – Node Package Manager",
        content: [
          "NPM stands for Node Package Manager.",
          "Largest software registry in the world.",
          "Used to install libraries and manage dependencies.",
        ],
        table: {
          headers: ["Command", "Purpose"],
          rows: [
            ["npm init", "Create project"],
            ["npm install", "Install all packages"],
            ["npm install package-name", "Install specific package"],
            ["npm uninstall", "Remove package"],
            ["npm -v", "Check npm version"],
          ],
        },
        extra: "package.json is like a shopping list of required items for your project.",
      },
    ],
    quiz: [
      { q: "What is Node.js built on?", a: "Google Chrome's V8 JavaScript Engine." },
      { q: "Every Node.js file is treated as a ______", a: "Module" },
      { q: "Which core module is used to create a web server?", a: "http" },
      { q: "Do core modules need to be installed via NPM?", a: "No — they are built-in to Node.js." },
      { q: "Why is Node.js non-blocking?", a: "It uses an event-driven, asynchronous architecture with the Event Loop." },
      { q: "What is the role of the Event Loop?", a: "It continuously checks the call stack, event queue, and callback queue to handle async operations." },
      { q: "What is a callback in Node.js?", a: "A function passed as an argument that is executed after a task is completed." },
      { q: "Difference between Core & Third-party modules?", a: "Core modules are built-in; third-party modules are installed via NPM (e.g., express, mongoose)." },
      { q: "What does package.json contain?", a: "Project name, dependencies, and scripts." },
      { q: "What is the role of NPM?", a: "Node Package Manager — installs libraries and manages project dependencies." },
    ],
  },
  {
    id: 7,
    title: "Designing REST API",
    topic: "REST API Design Using Case Study",
    duration: "2 Hours",
    type: "Theory + Practical",
    description: "REST principles, HTTP methods, endpoint design, and Online Bookstore case study.",
    sections: [
      {
        heading: "What is an API?",
        content: [
          "API (Application Programming Interface) is a set of rules that allows different software systems to communicate with each other.",
        ],
        example: {
          label: "Real-life Example",
          points: [
            "When you use Foodpanda or Careem, the mobile app communicates with a server using APIs.",
            'The app sends a request: "Show available restaurants"',
            "The server responds with restaurant data in JSON format.",
          ],
        },
      },
      {
        heading: "What is REST?",
        content: [
          "REST (Representational State Transfer) is an architectural style for designing networked applications.",
          "It uses: HTTP protocol, Standard HTTP methods, Stateless communication.",
        ],
        list: {
          label: "REST Principles:",
          items: ["Stateless", "Client-Server Architecture", "Uniform Interface", "Resource-based"],
        },
      },
      {
        heading: "HTTP Methods Used in REST",
        table: {
          headers: ["Method", "Purpose", "Real-life Example"],
          rows: [
            ["GET", "Retrieve data", "View product"],
            ["POST", "Create data", "Register user"],
            ["PUT", "Update data", "Update profile"],
            ["DELETE", "Delete data", "Delete account"],
          ],
        },
      },
      {
        heading: "Case Study: Online Bookstore REST API",
        content: [
          "We will design a REST API for an Online Bookstore System.",
          "In REST, everything is a Resource. Resources: Users, Books, Orders.",
        ],
        subsections: [
          {
            title: "Users Endpoints",
            table: {
              headers: ["Operation", "Method", "Endpoint"],
              rows: [
                ["Register User", "POST", "/users"],
                ["Get All Users", "GET", "/users"],
                ["Get Single User", "GET", "/users/{id}"],
                ["Update User", "PUT", "/users/{id}"],
                ["Delete User", "DELETE", "/users/{id}"],
              ],
            },
          },
          {
            title: "Books Endpoints",
            table: {
              headers: ["Operation", "Method", "Endpoint"],
              rows: [
                ["Add Book", "POST", "/books"],
                ["Get All Books", "GET", "/books"],
                ["Get Book", "GET", "/books/{id}"],
                ["Update Book", "PUT", "/books/{id}"],
                ["Delete Book", "DELETE", "/books/{id}"],
              ],
            },
          },
          {
            title: "Orders Endpoints",
            table: {
              headers: ["Operation", "Method", "Endpoint"],
              rows: [
                ["Create Order", "POST", "/orders"],
                ["Get Orders", "GET", "/orders"],
              ],
            },
          },
        ],
      },
      {
        heading: "REST API Design Best Practices",
        subsections: [
          {
            title: "1. Use Nouns, Not Verbs",
            content: ["❌ /getBooks", "✅ /books"],
          },
          {
            title: "2. Use Plural Resource Names",
            content: ["❌ /book", "✅ /books"],
          },
          {
            title: "3. Use Proper HTTP Status Codes",
            table: {
              headers: ["Code", "Meaning"],
              rows: [
                ["200", "OK"],
                ["201", "Created"],
                ["400", "Bad Request"],
                ["404", "Not Found"],
                ["500", "Server Error"],
              ],
            },
          },
          {
            title: "4. Use JSON Format",
            code: `{\n  "id": 1,\n  "title": "Clean Code",\n  "author": "Robert C. Martin",\n  "price": 500\n}`,
          },
        ],
      },
      {
        heading: "Practical Implementation",
        content: ["We will implement using Node.js, Express.js, and Postman."],
        subsections: [
          {
            title: "Step 1: Initialize Project",
            code: `npm init -y\nnpm install express body-parser`,
          },
          {
            title: "Step 2: Create Server",
            code: `const express = require('express');\nconst app = express();\napp.use(express.json());\napp.listen(3000, () => {\n  console.log("Server running on port 3000");\n});`,
          },
          {
            title: "Step 3: GET All Books",
            code: `let books = [];\napp.get('/books', (req, res) => {\n  res.json(books);\n});`,
          },
          {
            title: "Step 4: POST Book",
            code: `app.post('/books', (req, res) => {\n  const book = req.body;\n  books.push(book);\n  res.status(201).json(book);\n});`,
          },
          {
            title: "Step 5: DELETE Book",
            code: `app.delete('/books/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  books = books.filter(b => b.id !== id);\n  res.json({ message: "Book deleted" });\n});`,
          },
        ],
      },
      {
        heading: "Advanced Concepts",
        subsections: [
          {
            title: "1. Query Parameters",
            code: `GET /books?author=Ali`,
          },
          {
            title: "2. Pagination",
            code: `GET /books?page=1&limit=10`,
          },
          {
            title: "3. Authentication (JWT)",
            content: [
              "Use JWT tokens for secure APIs.",
              "Login Flow: User sends credentials → Server verifies → Server sends token → Client sends token in header.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "What is the endpoint to update book with id = 10?", a: "PUT /books/10" },
      { q: "Which HTTP method is used to delete a user?", a: "DELETE" },
      { q: "Is /getAllBooks a good REST endpoint? Why?", a: "No. REST uses nouns, not verbs. Correct: /books" },
      { q: "Why REST APIs are stateless?", a: "Each request contains all necessary info; server doesn't store session." },
      { q: "What happens if we don't use proper HTTP status codes?", a: "Clients can't understand the result of their requests properly." },
    ],
  },
  {
    id: 8,
    title: "Implementing REST API",
    topic: "REST API Implementation Using Case Study",
    duration: "2 Hours",
    type: "Theory + Step-by-Step Practical",
    description: "Full CRUD REST API implementation with Student Management System case study.",
    sections: [
      {
        heading: "Learning Objectives",
        list: {
          label: "By the end of this lecture, students will be able to:",
          items: [
            "Understand what a REST API is.",
            "Explain REST principles.",
            "Design API endpoints.",
            "Implement a REST API step-by-step.",
            "Test API using tools like Postman.",
            "Apply CRUD operations in real-life case studies.",
          ],
        },
      },
      {
        heading: "REST Principles (6 Main)",
        subsections: [
          { title: "1. Client-Server Architecture", content: ["Frontend and backend are separate."] },
          {
            title: "2. Stateless",
            content: [
              "Each request must contain all necessary information.",
              "Server does NOT store client session.",
            ],
            example: { label: "Example", points: ["Every time you go to ATM, you insert card again."] },
          },
          { title: "3. Cacheable", content: ["Responses can be cached to improve performance."] },
          { title: "4. Uniform Interface", content: ["Standard URL and HTTP methods."] },
          { title: "5. Layered System", content: ["Can have security layer, database layer etc."] },
          { title: "6. Code on Demand (Optional)", content: ["Server can send executable code to client."] },
        ],
      },
      {
        heading: "Case Study: Student Management System",
        content: [
          "We want to build a REST API for a Student Management System.",
          "Each student has: id, name, email, department.",
          "In REST, everything is a resource. Resource here = Student. Base URL: /api/students",
        ],
        table: {
          headers: ["Operation", "Method", "URL"],
          rows: [
            ["Get all students", "GET", "/api/students"],
            ["Get student by id", "GET", "/api/students/{id}"],
            ["Add student", "POST", "/api/students"],
            ["Update student", "PUT", "/api/students/{id}"],
            ["Delete student", "DELETE", "/api/students/{id}"],
          ],
        },
      },
      {
        heading: "Step-by-Step Implementation",
        subsections: [
          {
            title: "Step 1: Initialize Project",
            code: `npm init -y\nnpm install express`,
          },
          {
            title: "Step 2: Basic Server Setup",
            code: `const express = require('express');\nconst app = express();\napp.use(express.json());\napp.listen(3000, () => {\n  console.log("Server running on port 3000");\n});`,
          },
          {
            title: "Step 3: Dummy Data",
            code: `let students = [\n  { id: 1, name: "Ali", email: "ali@gmail.com", department: "CS" },\n  { id: 2, name: "Sara", email: "sara@gmail.com", department: "IT" }\n];`,
          },
          {
            title: "Step 4: GET All Students",
            code: `app.get('/api/students', (req, res) => {\n  res.json(students);\n});`,
          },
          {
            title: "Step 5: GET Student By ID",
            code: `app.get('/api/students/:id', (req, res) => {\n  const student = students.find(s => s.id == req.params.id);\n  if (!student) {\n    return res.status(404).json({ message: "Student not found" });\n  }\n  res.json(student);\n});`,
          },
          {
            title: "Step 6: POST Create Student",
            code: `app.post('/api/students', (req, res) => {\n  const newStudent = {\n    id: students.length + 1,\n    ...req.body\n  };\n  students.push(newStudent);\n  res.status(201).json(newStudent);\n});`,
          },
          {
            title: "Step 7: PUT Update Student",
            code: `app.put('/api/students/:id', (req, res) => {\n  const student = students.find(s => s.id == req.params.id);\n  if (!student) {\n    return res.status(404).json({ message: "Student not found" });\n  }\n  student.name = req.body.name;\n  student.email = req.body.email;\n  student.department = req.body.department;\n  res.json(student);\n});`,
          },
          {
            title: "Step 8: DELETE Student",
            code: `app.delete('/api/students/:id', (req, res) => {\n  students = students.filter(s => s.id != req.params.id);\n  res.json({ message: "Student deleted successfully" });\n});`,
          },
        ],
      },
      {
        heading: "Testing Using Postman",
        content: ["Open Postman → Select HTTP method → Enter URL → Send request → Check response."],
        table: {
          headers: ["Code", "Meaning"],
          rows: [
            ["200", "OK"],
            ["201", "Created"],
            ["400", "Bad Request"],
            ["404", "Not Found"],
            ["500", "Server Error"],
          ],
        },
      },
    ],
    quiz: [
      { q: "What does REST stand for?", a: "Representational State Transfer" },
      { q: "Difference between PUT and POST?", a: "POST creates a new resource; PUT updates an existing one." },
      { q: "Why APIs should be stateless?", a: "For scalability and simplicity — each request is independent." },
      { q: "Design endpoints for Teacher resource.", a: "GET /teachers, POST /teachers, PUT /teachers/{id}, DELETE /teachers/{id}" },
      { q: "What status code is used when resource is created?", a: "201 Created" },
    ],
  },
];

export const getLectureById = (id) => lectures.find((l) => l.id === parseInt(id));
