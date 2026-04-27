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
    id: 3,
    title: "HTTP Server, URL Module & File System",
    topic: "Node.js HTTP + URL + FS with Files & Streams",
    duration: "2 Hours",
    type: "Theory + Practical",
    description: "Build an HTTP server from scratch, parse URLs, route requests, and serve files using streams.",
    sections: [
      {
        heading: "Introduction & Overview",
        content: [
          "Node.js can act as a web server without any framework using the built-in http module.",
          "The http module provides low-level primitives for building servers — you create a server, listen on a port, and handle requests with a callback.",
          "For each incoming request, Node passes two objects: req (IncomingMessage) and res (ServerResponse).",
          "In practice, most applications need routing (different behavior for different URLs) and often need to read/write files.",
        ],
        subsections: [
          {
            title: "Minimal HTTP Server",
            code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello from Node HTTP server!\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,
          },
        ],
      },
      {
        heading: "HTTP Request/Response Essentials",
        content: [
          "HTTP is a request/response protocol. Clients send a request (method + URL + headers + optional body).",
          "The server returns a response (status code + headers + optional body).",
        ],
        subsections: [
          {
            title: "Methods, Status Codes & Headers",
            content: [
              "Methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).",
              "Status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 500 Internal Server Error.",
              "Headers: metadata such as Content-Type, Content-Length, Cache-Control.",
            ],
          },
          {
            title: "Reading req Values in Node",
            code: `// Inside createServer callback:
console.log(req.method);        // e.g., 'GET'
console.log(req.url);           // e.g., '/search?q=node'
console.log(req.headers.host);  // e.g., 'localhost:3000'

// Key point: req.url is NOT a full URL — just path + query.
// To parse it safely, use the URL module with a base.`,
          },
        ],
      },
      {
        heading: "URL Module: Parsing Path & Query",
        content: [
          "The URL class provides a reliable way to separate pathname, searchParams, and hash.",
          "Manual string splitting (e.g., by '?' and '&') is error-prone, especially with URL encoding (spaces, special characters).",
        ],
        subsections: [
          {
            title: "URL Components",
            table: {
              headers: ["Component", "Example", "Description"],
              rows: [
                ["pathname", "/products/42", "The route path"],
                ["searchParams", "?q=node&limit=10", "Query string key-value pairs"],
                ["hash", "#section", "Fragment — usually client-side only"],
              ],
            },
          },
          {
            title: "Recommended Parsing Pattern",
            code: `const { URL } = require('url');

function parseUrl(req) {
  // Base is required because req.url is relative.
  const base = \`http://\${req.headers.host}\`;
  return new URL(req.url, base);
}

// Example:
const u = parseUrl(req);
console.log(u.pathname);              // '/search'
console.log(u.searchParams.get('q')); // 'node'`,
          },
        ],
      },
      {
        heading: "Routing from Scratch (No Framework)",
        content: [
          "Routing means: decide which handler function to run based on HTTP method and URL pathname.",
          "A simple object-based pattern scales better than many if/else statements.",
          "Frameworks like Express add middleware, parameterized routes, and better error handling — but understanding this low-level routing helps you debug real apps.",
        ],
        subsections: [
          {
            title: "Object-Based Router",
            code: `const http = require('http');
const { URL } = require('url');

const routes = {
  'GET /': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Home\\n');
  },
  'GET /api/time': (req, res) => {
    const payload = { now: new Date().toISOString() };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(payload));
  }
};

function handler(req, res) {
  const u = new URL(req.url, \`http://\${req.headers.host}\`);
  const key = \`\${req.method} \${u.pathname}\`;
  const fn = routes[key];
  if (!fn) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Not Found\\n');
  }
  fn(req, res, u);
}

http.createServer(handler).listen(3000);`,
          },
        ],
      },
      {
        heading: "File System (fs): Files vs Streams",
        content: [
          "The fs module provides multiple styles of APIs for reading and writing files.",
          "Rule of thumb: In a server, prefer asynchronous APIs so the event loop can handle other requests while waiting for disk I/O.",
        ],
        subsections: [
          {
            title: "fs API Styles",
            table: {
              headers: ["Style", "API", "Use Case"],
              rows: [
                ["Synchronous (blocking)", "fs.readFileSync, fs.writeFileSync", "Scripts, CLI tools — NOT servers"],
                ["Callback-based async", "fs.readFile(path, cb)", "Classic Node.js pattern"],
                ["Promise-based", "fs.promises.readFile(path)", "Modern async/await style"],
                ["Stream-based", "fs.createReadStream(path)", "Large files — most efficient"],
              ],
            },
          },
          {
            title: "Async File Read (Promise Style)",
            code: `const fs = require('fs/promises');

async function readTextFile(path) {
  // returns a Buffer; convert to string if needed
  const data = await fs.readFile(path, 'utf8');
  return data;
}`,
          },
        ],
      },
      {
        heading: "Streams and pipe(): Efficient for Large Data",
        content: [
          "A stream processes data in chunks — ideal for large files (videos, logs, downloads) because it avoids loading the entire file into RAM.",
          "In Node, an HTTP response is a writable stream, so we can stream a file directly to the client using pipe().",
          "Backpressure: If the network is slow, pipe() coordinates flow so memory doesn't grow uncontrollably.",
        ],
        subsections: [
          {
            title: "Streaming a File to the Response",
            code: `const fs = require('fs');

function streamFileToResponse(filePath, res) {
  const fileStream = fs.createReadStream(filePath);

  fileStream.on('error', (err) => {
    // Typical errors: ENOENT (file not found), EACCES (permission)
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('File not found\\n');
  });

  res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
  fileStream.pipe(res); // handles chunking + backpressure
}`,
          },
          {
            title: "Common Pitfalls",
            content: [
              "Forgetting to end the response: always call res.end() (directly or via pipe).",
              "Wrong Content-Type: browsers behave differently for text/html vs application/json.",
              "Path traversal when serving files: do not allow '../' to escape your public directory.",
              "Using readFile for huge files: can cause high memory use; prefer streams.",
              "Not handling errors: always handle fs and stream errors to avoid crashes.",
            ],
          },
        ],
      },
      {
        heading: "Example A: JSON API + Query Parsing",
        content: [
          "Implement GET /api/echo?msg=hello returning JSON — demonstrates URL parsing and query parameters.",
        ],
        subsections: [
          {
            title: "Echo Endpoint",
            code: `const http = require('http');
const { URL } = require('url');

http.createServer((req, res) => {
  const u = new URL(req.url, \`http://\${req.headers.host}\`);

  if (req.method === 'GET' && u.pathname === '/api/echo') {
    const msg = u.searchParams.get('msg') ?? '';
    const payload = { ok: true, msg };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(payload));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found\\n');
}).listen(3000);`,
          },
        ],
      },
      {
        heading: "Example B: Static File Server with Security",
        content: [
          "A real server often serves HTML/CSS/JS from a public/ folder.",
          "Security: prevent path traversal — users must not be able to request /../secret.txt to escape the public folder.",
          "Use path.normalize and confirm the final path stays inside the public directory.",
        ],
        subsections: [
          {
            title: "Full Static File Server",
            code: `const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const publicDir = path.join(__dirname, 'public');

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ({
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.svg':  'image/svg+xml'
  })[ext] || 'application/octet-stream';
}

function safeJoin(base, target) {
  const targetPath = path.normalize(path.join(base, target));
  if (!targetPath.startsWith(base)) return null; // block traversal
  return targetPath;
}

http.createServer((req, res) => {
  const u = new URL(req.url, \`http://\${req.headers.host}\`);
  let reqPath = decodeURIComponent(u.pathname);
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = safeJoin(publicDir, reqPath);
  if (!filePath) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Bad Request\\n');
  }

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('File Not Found\\n');
  });
  res.writeHead(200, { 'Content-Type': contentType(filePath) });
  stream.pipe(res);
}).listen(3000);`,
          },
        ],
      },
      {
        heading: "Mini-Lab Tasks",
        content: [
          "Objective: Build a small server that (1) parses the URL query, (2) serves one JSON endpoint, and (3) streams files from a public folder.",
        ],
        subsections: [
          {
            title: "Task 1: Query Parser Endpoint (8 min)",
            content: [
              "Create GET /api/sum?a=5&b=7 and respond with JSON: {\"a\":5,\"b\":7,\"sum\":12}.",
              "Validate inputs: if a or b is missing or not a number, return 400 with a helpful message.",
            ],
            code: `if (req.method === 'GET' && u.pathname === '/api/sum') {
  const a = Number(u.searchParams.get('a'));
  const b = Number(u.searchParams.get('b'));
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ ok: false, error: 'a and b must be numbers' }));
  }
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  return res.end(JSON.stringify({ ok: true, a, b, sum: a + b }));
}`,
          },
          {
            title: "Task 2: Static File Streaming (8 min)",
            content: [
              "Create a public/ folder with index.html.",
              "Map / to /index.html and stream the file using fs.createReadStream and pipe().",
              "If file not found, respond with 404.",
            ],
          },
          {
            title: "Stretch Goals",
            content: [
              "Add a GET /download route that streams a large file with Content-Disposition for download.",
              "Add basic logging: method, pathname, status code, and request time.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "What are the two objects Node passes to the createServer callback?", a: "req (IncomingMessage) — contains method, headers, URL, and readable body stream. res (ServerResponse) — used to set status, headers, and write the response body." },
      { q: "Why do we need a base URL when parsing req.url with the URL class?", a: "Because req.url is a relative path (e.g., '/search?q=node'), not a full URL. The URL constructor requires an absolute URL, so we supply a base like http://localhost:3000." },
      { q: "What is the difference between fs.readFileSync and fs.createReadStream?", a: "readFileSync is blocking and loads the entire file into memory. createReadStream is non-blocking and processes data in chunks — much better for large files in a server." },
      { q: "What does pipe() do when streaming a file to an HTTP response?", a: "It connects a readable stream (file) to a writable stream (HTTP response), automatically handling chunking and backpressure so memory doesn't grow uncontrollably." },
      { q: "What is path traversal and how do you prevent it?", a: "Path traversal is when a user requests a path like /../secret.txt to escape the public directory. Prevent it by using path.normalize and checking that the resolved path still starts with the public directory base." },
      { q: "Which fs API style is recommended in a production server and why?", a: "Asynchronous APIs (promise-based or stream-based) — they don't block the event loop, so the server can handle other requests while waiting for disk I/O." },
      { q: "What HTTP status code should you return for a missing file?", a: "404 Not Found." },
      { q: "Why is manual string splitting of URLs (by '?' and '&') error-prone?", a: "It doesn't handle URL encoding — spaces and special characters encoded as %20 or + won't be decoded correctly. The URL class handles this automatically." },
      { q: "Write the routing key format used in the object-based router pattern.", a: "The key is a string combining method and pathname: e.g., 'GET /' or 'GET /api/time'. The handler is looked up with routes[`${req.method} ${u.pathname}`]." },
      { q: "What Content-Type header should a JSON API response use?", a: "application/json; charset=utf-8" },
    ],
  },
  {
    id: 4,
    title: "Express.js Fundamentals",
    topic: "Express Framework: Middleware, Routing & Modular Architecture",
    duration: "2 Hours",
    type: "Theory",
    description: "Express.js core concepts — middleware pipeline, routing strategies, express.Router(), and scalable application architecture with separation of concerns.",
    sections: [
      {
        heading: "What is Express.js?",
        content: [
          "Express.js is a minimalist, flexible, and fast Node.js web application framework that provides a robust set of features for web and mobile applications.",
          "It is often referred to as the 'de facto standard' framework for Node.js.",
          "While Node.js provides core HTTP capabilities, building complex apps directly with the http module is tedious — manual URL parsing, body parsing, routing, and auth all need to be handled from scratch.",
          "Express.js solves this by providing a structured, extensible approach.",
        ],
        subsections: [
          {
            title: "Key Characteristics",
            table: {
              headers: ["Characteristic", "Description"],
              rows: [
                ["Minimalist", "Thin layer over Node.js — doesn't obscure its features"],
                ["Unopinionated", "No forced architecture or database choice — full flexibility"],
                ["Performance", "Built on Node.js's fast V8 JavaScript engine"],
                ["Extensible", "Highly extensible through middleware and routing"],
              ],
            },
          },
          {
            title: "Minimal Express App",
            code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
          },
        ],
      },
      {
        heading: "Middleware — Deep Dive",
        content: [
          "Middleware functions have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.",
          "They are executed in sequence, allowing you to intercept, process, and potentially modify req and res before they reach the final route handler.",
        ],
        subsections: [
          {
            title: "Key Responsibilities of Middleware",
            content: [
              "Execute any code.",
              "Make changes to the request and response objects.",
              "End the request-response cycle (e.g., by sending a response).",
              "Call the next middleware in the stack via next() — if not called, the request hangs.",
            ],
          },
          {
            title: "Basic Middleware Structure",
            code: `app.use((req, res, next) => {
  console.log('Time:', Date.now(), '| Method:', req.method, '| URL:', req.url);
  next(); // pass control to the next middleware
});`,
          },
          {
            title: "1. Application-Level Middleware",
            content: [
              "Bound to the app object using app.use() or app.METHOD().",
              "Can be global (no path) or scoped to a specific path prefix.",
            ],
            code: `// Global — runs for every request
app.use((req, res, next) => {
  console.log('Global middleware');
  next();
});

// Path-scoped — runs only for /users/*
app.use('/users', (req, res, next) => {
  console.log('Request to /users path');
  next();
});`,
          },
          {
            title: "2. Router-Level Middleware",
            content: ["Works the same as application-level middleware but is bound to an instance of express.Router()."],
            code: `const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-specific middleware');
  next();
});`,
          },
          {
            title: "3. Built-in Middleware",
            content: [
              "express.json() — Parses incoming requests with JSON payloads. Makes data available on req.body.",
              "express.urlencoded() — Parses URL-encoded request bodies (HTML form submissions).",
              "express.static() — Serves static files (HTML, CSS, images) from a directory.",
            ],
            code: `app.use(express.json());           // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static('public')); // serve static files`,
          },
          {
            title: "4. Third-Party Middleware",
            content: ["Installed via NPM for specific tasks."],
            code: `const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('combined')); // HTTP request logger
app.use(cors());             // Enable Cross-Origin Resource Sharing`,
          },
          {
            title: "5. Error-Handling Middleware",
            content: [
              "Special middleware with 4 arguments: (err, req, res, next).",
              "Must be defined last in the middleware stack.",
            ],
            code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!', message: err.message });
});`,
          },
          {
            title: "Order of Execution",
            content: [
              "Middleware is executed in the order it is defined with app.use() or app.METHOD().",
              "If a middleware does not call next(), the request-response cycle terminates — subsequent middleware and route handlers are never reached.",
            ],
          },
        ],
      },
      {
        heading: "Routing in Express",
        content: [
          "Routing determines how an application responds to a client request to a particular endpoint — a URI (path) and a specific HTTP method.",
          "Basic syntax: app.METHOD(PATH, HANDLER)",
        ],
        subsections: [
          {
            title: "HTTP Methods",
            table: {
              headers: ["Method", "Purpose", "Example Path"],
              rows: [
                ["GET", "Retrieve data (read)", "/users"],
                ["POST", "Submit data (create)", "/users"],
                ["PUT", "Update data (replace)", "/users/:id"],
                ["PATCH", "Partially update data", "/users/:id"],
                ["DELETE", "Remove data", "/users/:id"],
              ],
            },
          },
          {
            title: "Route Parameters",
            content: [
              "Used to capture dynamic values in the URL.",
              "Defined using colons (e.g., /users/:userId). Values are available in req.params.",
            ],
            code: `app.get('/users/:userId/books/:bookId', (req, res) => {
  console.log(req.params.userId); // '123' for /users/123/books/456
  console.log(req.params.bookId); // '456'
  res.send(\`User: \${req.params.userId}, Book: \${req.params.bookId}\`);
});`,
          },
          {
            title: "Query Parameters",
            content: ["Accessed via req.query. Appear after ? in the URL."],
            code: `// GET /search?q=express&page=2
app.get('/search', (req, res) => {
  const { q, page = 1 } = req.query;
  res.json({ query: q, page: Number(page) });
});`,
          },
          {
            title: "Chained Route Handlers",
            content: [
              "Route handlers can be single functions or an array of functions (chained middleware for a specific route).",
            ],
            code: `const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
};

const getUser = (req, res) => {
  res.send('User profile data');
};

// checkAuth runs first, then getUser
app.get('/profile', checkAuth, getUser);`,
          },
          {
            title: "Chaining Multiple Middleware on a Route",
            code: `app.post('/data',
  express.json(),                    // 1. parse JSON body
  (req, res, next) => {              // 2. validate
    if (!req.body.name) {
      return res.status(400).send('Name is required');
    }
    next();
  },
  (req, res) => {                    // 3. process & respond
    res.status(201).send(\`Data received for \${req.body.name}\`);
  }
);`,
          },
        ],
      },
      {
        heading: "Modular Routing with express.Router()",
        content: [
          "As an application grows, app.js becomes cluttered with numerous route definitions — hard to manage, especially with multiple resource types (users, products, orders).",
          "express.Router() creates modular, mountable route handlers. A Router instance is a complete middleware and routing system.",
          "You create separate router files for different API resources, then mount them onto specific paths in app.js.",
        ],
        subsections: [
          {
            title: "Creating a Router — routes/users.js",
            code: `// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:id', (req, res) => {
  res.send(\`Get user with ID: \${req.params.id}\`);
});

router.post('/', (req, res) => {
  res.status(201).send('Create a new user');
});

router.put('/:id', (req, res) => {
  res.send(\`Update user \${req.params.id}\`);
});

router.delete('/:id', (req, res) => {
  res.send(\`Delete user \${req.params.id}\`);
});

module.exports = router;`,
          },
          {
            title: "Mounting the Router — app.js",
            code: `// app.js
const express = require('express');
const app = express();

app.use(express.json()); // global middleware

const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter); // mount at /api/users

// Now:
// GET  /api/users       → router.get('/')
// GET  /api/users/123   → router.get('/:id')
// POST /api/users       → router.post('/')

app.listen(3000, () => console.log('Server on port 3000'));`,
          },
          {
            title: "Router-Level Auth Middleware",
            content: ["Middleware applied inside a router affects only that router's routes."],
            code: `// routes/admin.js
const express = require('express');
const router = express.Router();

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

router.use(authMiddleware); // applies to ALL routes in this router

router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

module.exports = router;

// app.js
app.use('/admin', require('./routes/admin'));`,
          },
          {
            title: "Benefits of Modular Routing",
            table: {
              headers: ["Benefit", "Description"],
              rows: [
                ["Organization", "Keeps related routes together, improving readability"],
                ["Maintainability", "Easier to update features without affecting other parts"],
                ["Reusability", "Routers can be reused across different apps"],
                ["Scalability", "Facilitates collaboration in larger teams"],
              ],
            },
          },
        ],
      },
      {
        heading: "Application Architecture & Request Flow",
        content: [
          "A well-structured application is crucial for maintainability and scalability.",
          "Express is unopinionated, but common patterns emerge — often resembling MVC (Model-View-Controller) or a layered architecture.",
        ],
        subsections: [
          {
            title: "Recommended Directory Structure",
            code: `project/
├── app.js              # Entry point — init Express, global middleware, mount routers
├── config/             # DB config, environment settings
├── routes/             # Route definitions (use express.Router)
│   ├── users.js
│   └── products.js
├── controllers/        # Business logic — handle req/res, call models
│   ├── usersController.js
│   └── productsController.js
├── models/             # Database schemas (e.g., Mongoose)
│   ├── User.js
│   └── Product.js
├── middleware/         # Reusable middleware
│   ├── auth.js
│   └── logger.js
└── public/             # Static assets (HTML, CSS, JS, images)`,
          },
          {
            title: "Separation of Concerns",
            table: {
              headers: ["Layer", "Responsibility"],
              rows: [
                ["app.js", "Initialize Express, connect DB, set global middleware, mount routers"],
                ["routes/", "Define API endpoints, link to controller functions"],
                ["controllers/", "Handle specific requests, interact with models"],
                ["models/", "Define data structure, interact with database"],
                ["middleware/", "Reusable functions (auth, logging, validation)"],
                ["config/", "Environment-dependent configuration"],
              ],
            },
          },
          {
            title: "Request Flow: Client → Server",
            content: [
              "1. Client sends HTTP request — e.g., GET /api/users/123",
              "2. app.js receives the request.",
              "3. Global middleware runs — express.json(), logging middleware.",
              "4. app.js matches /api/users and forwards to usersRouter.",
              "5. Router-level middleware runs — e.g., authentication check.",
              "6. usersRouter matches /:id and calls usersController.getUserById.",
              "7. Controller interacts with the User model to fetch data from DB.",
              "8. Model returns data to the controller.",
              "9. Controller sends response via res.json() or res.send().",
              "10. Error-handling middleware catches any errors and sends an error response.",
            ],
          },
          {
            title: "Global vs Route-Specific Middleware",
            code: `// app.js — Global middleware (runs for ALL requests)
app.use(express.json());
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

// Route-specific middleware (runs only for /admin)
const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
};

app.get('/admin', authMiddleware, (req, res) => {
  res.send('Admin dashboard');
});`,
          },
        ],
      },
    ],
    quiz: [
      { q: "What is Express.js and why use it over plain Node.js http module?", a: "Express.js is a minimalist Node.js web framework. It simplifies URL parsing, body parsing, routing, and middleware integration — tasks that require manual effort with the raw http module." },
      { q: "What are the 5 types of middleware in Express?", a: "Application-level, Router-level, Built-in (express.json, express.static, express.urlencoded), Third-party (morgan, cors), and Error-handling middleware." },
      { q: "What happens if next() is not called in a middleware?", a: "The request-response cycle terminates — the next middleware or route handler is never executed, and the client hangs waiting for a response." },
      { q: "What is the signature of error-handling middleware and where must it be placed?", a: "It takes 4 arguments: (err, req, res, next). It must be defined last in the middleware stack, after all routes." },
      { q: "What is the difference between app.use() and app.get()?", a: "app.use() applies middleware to all HTTP methods and optionally a path prefix. app.get() defines a handler specifically for GET requests on an exact path." },
      { q: "How do you access route parameters like /users/:id?", a: "Via req.params.id inside the route handler." },
      { q: "What problem does express.Router() solve?", a: "As apps grow, app.js becomes cluttered with all routes. Router() lets you split routes into separate files by resource (users, products) and mount them at specific base paths." },
      { q: "What does app.use('/api/users', usersRouter) do?", a: "It mounts the usersRouter at the /api/users base path. All routes defined in usersRouter are now prefixed with /api/users." },
      { q: "What is the role of controllers/ in Express application architecture?", a: "Controllers contain the business logic for handling specific requests — they receive req/res from routes and interact with models to fetch or modify data." },
      { q: "Describe the full request flow for GET /api/users/123 in a well-structured Express app.", a: "1. app.js receives request → 2. Global middleware runs → 3. Matched to /api/users, forwarded to usersRouter → 4. Router middleware (auth) runs → 5. /:id matched, calls getUserById controller → 6. Controller queries User model → 7. Model returns data → 8. Controller sends res.json() → 9. Error middleware catches any errors." },
    ],
  },
  {
    id: 5,
    title: "Express.js Architecture Concepts",
    topic: "Middleware, Routing, and Routers in Express",
    duration: "2 Hours",
    type: "Theory",
    description: "Express.js framework fundamentals — middleware types, routing, Express Router, and scalable application architecture with MVC.",
    sections: [
      {
        heading: "What is Express.js?",
        content: [
          "Express.js is a minimal and flexible web framework built on top of Node.js.",
          "It helps developers build web servers, create APIs, and handle HTTP requests and responses.",
        ],
        example: {
          label: "Real-Life Analogy: Restaurant Manager",
          points: [
            "Customers = Client (Browser/Postman)",
            "Orders = Requests",
            "Kitchen = Server logic",
            "Waiter = Middleware",
            "Manager = Express",
          ],
        },
        subsections: [
          {
            title: "Basic Express App Structure",
            code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
          },
          {
            title: "Key Components",
            content: [
              "app → Application object",
              "app.get() → Route definition",
              "req → Request object",
              "res → Response object",
              "app.listen() → Starts the server",
            ],
          },
        ],
      },
      {
        heading: "Middleware Concepts",
        content: [
          "Middleware is a function that executes after receiving a request and before sending a response.",
          "Middleware functions have access to req, res, and next().",
          "Official definition: Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle.",
        ],
        example: {
          label: "Real-Life Analogy: Airport Security",
          points: [
            "1. Passenger arrives → Request",
            "2. Security checks passport → Middleware 1",
            "3. Baggage scan → Middleware 2",
            "4. Boarding gate → Route handler",
          ],
        },
        subsections: [
          {
            title: "1. Application-Level Middleware",
            content: ["Attached directly to the app object using app.use(). Runs for every request."],
            code: `app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next(); // pass control to next middleware
});`,
          },
          {
            title: "2. Router-Level Middleware",
            content: ["Used inside Router objects — scoped to specific route groups."],
          },
          {
            title: "3. Built-in Middleware",
            content: [
              "express.json() → Parses incoming JSON request bodies.",
              "express.static() → Serves static files (HTML, CSS, images) from a folder.",
            ],
          },
          {
            title: "4. Error-Handling Middleware",
            content: ["Takes 4 arguments: (err, req, res, next). Must be defined last."],
            code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});`,
          },
          {
            title: "Why Middleware is Powerful",
            content: [
              "Authentication — verify tokens before reaching route handlers.",
              "Logging — record every request for debugging and monitoring.",
              "Data validation — reject malformed requests early.",
              "Error handling — centralize error responses in one place.",
            ],
          },
        ],
      },
      {
        heading: "Routing in Express",
        content: [
          "Routing refers to how an application responds to client requests for a specific endpoint.",
          "Think of routing like Google Maps — different routes lead to different destinations, and the URL determines which function runs.",
        ],
        subsections: [
          {
            title: "Route Methods",
            table: {
              headers: ["Method", "Purpose", "Example"],
              rows: [
                ["GET", "Retrieve data", "app.get('/users', handler)"],
                ["POST", "Create data", "app.post('/users', handler)"],
                ["PUT", "Update data", "app.put('/users/:id', handler)"],
                ["DELETE", "Delete data", "app.delete('/users/:id', handler)"],
              ],
            },
          },
          {
            title: "Basic Route Example",
            code: `app.get('/about', (req, res) => {
  res.send("About Page");
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: "Login received", username });
});`,
          },
          {
            title: "Route Parameters",
            content: [
              "Route parameters are named URL segments used to capture values at specific positions.",
              "Accessed via req.params. Example: /user/5 → req.params.id = '5'",
            ],
            code: `app.get('/user/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

// Multiple params
app.get('/posts/:year/:month', (req, res) => {
  const { year, month } = req.params;
  res.json({ year, month });
});`,
          },
          {
            title: "Query Parameters",
            content: ["Query strings come after ? in the URL. Accessed via req.query."],
            code: `// GET /search?q=express&limit=10
app.get('/search', (req, res) => {
  const { q, limit } = req.query;
  res.json({ query: q, limit });
});`,
          },
        ],
      },
      {
        heading: "Express Router",
        content: [
          "Router allows us to separate routes into different files and organize large applications.",
          "It makes applications scalable and clean.",
          "Imagine a project with 50 routes and multiple modules — putting everything in one file becomes messy and unmanageable.",
        ],
        example: {
          label: "Real-Life Analogy: University Departments",
          points: [
            "Admission Office → /admissions",
            "Accounts Office → /accounts",
            "Examination Office → /exams",
            "Each department handles its own tasks independently.",
          ],
        },
        subsections: [
          {
            title: "Creating a Router — routes/user.js",
            code: `const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.send("All Users");
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(\`Single User: \${req.params.id}\`);
});

// POST /users
router.post('/', (req, res) => {
  res.status(201).json({ message: "User created", data: req.body });
});

module.exports = router;`,
          },
          {
            title: "Mounting the Router — app.js",
            code: `const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);
// Now: GET /users, GET /users/10, POST /users

app.listen(3000, () => console.log("Server on port 3000"));`,
          },
        ],
      },
      {
        heading: "Application Architecture & MVC",
        content: [
          "Express applications often follow the MVC (Model-View-Controller) pattern.",
          "Model → Database logic. View → Frontend (EJS/React etc.). Controller → Business logic.",
          "Middleware order matters — Express executes middleware in the order it is defined.",
        ],
        subsections: [
          {
            title: "Recommended Folder Structure",
            code: `project/
├── app.js
├── routes/
│   ├── user.js
│   └── product.js
├── middleware/
│   ├── auth.js
│   └── logger.js
├── controllers/
│   └── userController.js
└── models/
    └── User.js`,
          },
          {
            title: "Controllers — Separating Business Logic",
            content: [
              "Instead of writing handler logic inline in routes, move it to controller files.",
              "This improves readability, maintainability, and supports scaling.",
            ],
            code: `// controllers/userController.js
exports.getUsers = (req, res) => {
  res.json([{ id: 1, name: "Ali" }]);
};

// routes/user.js
const userController = require('../controllers/userController');
router.get('/', userController.getUsers); // clean!`,
          },
          {
            title: "Middleware Order Matters",
            content: [
              "Express executes middleware in the order it is registered.",
              "If auth middleware fails, the route handler never executes.",
            ],
            code: `app.use(logger);       // runs first — logs every request
app.use(auth);         // runs second — blocks unauthorized requests
app.use('/users', userRoutes); // only reached if auth passes`,
          },
          {
            title: "Custom Auth Middleware Example",
            code: `// middleware/auth.js
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  // verify token logic here...
  next(); // token valid — proceed
};`,
          },
        ],
      },
    ],
    quiz: [
      { q: "What is Express.js?", a: "A minimal and flexible web framework built on top of Node.js for building web servers and APIs." },
      { q: "What is middleware in Express?", a: "A function that executes after receiving a request and before sending a response. It has access to req, res, and next()." },
      { q: "What is the difference between app.use() and app.get()?", a: "app.use() applies middleware to all HTTP methods and optionally a path prefix. app.get() defines a route handler specifically for GET requests on an exact path." },
      { q: "What happens if next() is not called in a middleware?", a: "The request-response cycle is stuck — the next middleware or route handler never executes, and the client hangs waiting for a response." },
      { q: "Why is middleware order important in Express?", a: "Express executes middleware in the order it is registered. If auth middleware is placed before routes, unauthorized requests are blocked before reaching any route handler." },
      { q: "What are the 4 types of middleware in Express?", a: "Application-level, Router-level, Built-in (express.json, express.static), and Error-handling middleware." },
      { q: "Why use Express Router instead of defining all routes in app.js?", a: "Router separates routes into different files, making large applications organized, scalable, and maintainable." },
      { q: "What does express.json() do?", a: "It is built-in middleware that parses incoming requests with JSON payloads and makes the data available on req.body." },
      { q: "What is the MVC pattern in Express?", a: "Model = database logic, View = frontend (EJS/React), Controller = business logic. It separates concerns for cleaner, more maintainable code." },
      { q: "How do you access a route parameter like /users/:id?", a: "Via req.params.id inside the route handler." },
    ],
  },
  {
    id: 6,
    title: "Web App Dev & REST Principles",
    topic: "View Generators, Bootstrap & REST Architecture",
    duration: "2 Hours",
    type: "Theory",
    description: "View generators & scaffolding, Bootstrap responsive UI, REST statelessness, idempotency, HTTP method selection, and URI design.",
    color: "teal",
    sections: [
      {
        heading: "View Generators & MVC Architecture",
        color: "purple",
        content: [
          "In web development, a View is the part of an application responsible for displaying data to users.",
          "It belongs to the MVC Architecture — Model handles data, View displays data, Controller controls logic & flow.",
          "Example: Model → Student database | View → Student list page | Controller → Fetches students and sends to View.",
        ],
        subsections: [
          {
            title: "What is a View Generator?",
            content: [
              "A View Generator automatically creates UI files (HTML templates or views) based on models.",
              "It saves time and reduces manual coding — this process is often called Scaffolding.",
            ],
          },
          {
            title: "Scaffolding Example — University Management System",
            content: [
              "You define a Student model: id, name, email, department.",
              "The view generator automatically creates: List View, Create Form, Edit Page, Delete Confirmation page.",
            ],
            code: `// Student model definition
Student:
  - id
  - name
  - email
  - department

// Auto-generated views (scaffolding):
→ GET  /students        → List View
→ GET  /students/new    → Create Form
→ GET  /students/:id/edit → Edit Page
→ DELETE /students/:id  → Delete Confirmation`,
          },
          {
            title: "Frameworks with View Generators",
            table: {
              headers: ["Framework", "Language", "Generator Command"],
              rows: [
                ["Django", "Python", "python manage.py startapp"],
                ["Laravel", "PHP", "php artisan make:model"],
                ["Ruby on Rails", "Ruby", "rails generate scaffold"],
                ["ASP.NET Core", "C#", "dotnet aspnet-codegenerator"],
              ],
            },
          },
          {
            title: "Advantages of View Generators",
            content: [
              "Fast development — generate full CRUD views in seconds.",
              "Reduces human errors — consistent, tested templates.",
              "Consistent design — uniform UI across all views.",
              "Easy maintenance — update the model, regenerate views.",
            ],
          },
        ],
      },
      {
        heading: "Bootstrap — Responsive UI Framework",
        color: "blue",
        content: [
          "Bootstrap is a front-end framework used to design responsive websites quickly.",
          "It provides CSS styles, components, a 12-column grid system, and pre-designed UI elements.",
        ],
        subsections: [
          {
            title: "Without vs With Bootstrap",
            table: {
              headers: ["Without Bootstrap", "With Bootstrap"],
              rows: [
                ["Write full CSS manually", "Professional UI in minutes"],
                ["Time consuming", "Mobile responsive by default"],
                ["Cross-browser issues", "Pre-built, tested components"],
                ["Inconsistent styling", "Consistent design system"],
              ],
            },
          },
          {
            title: "Bootstrap Grid System",
            content: [
              "Bootstrap uses a 12-column layout system.",
              "6 columns → Half width | 4 columns → One-third | 12 columns → Full width.",
              "Breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px).",
            ],
            code: `<!-- 2-column layout -->
<div class="container">
  <div class="row">
    <div class="col-md-6">Left Column</div>
    <div class="col-md-6">Right Column</div>
  </div>
</div>

<!-- 3-column layout -->
<div class="row">
  <div class="col-md-4">Column 1</div>
  <div class="col-md-4">Column 2</div>
  <div class="col-md-4">Column 3</div>
</div>`,
          },
          {
            title: "Common Bootstrap Components",
            table: {
              headers: ["Component", "Usage", "Class Example"],
              rows: [
                ["Buttons", "Actions & CTAs", "btn btn-primary"],
                ["Cards", "Content containers", "card card-body"],
                ["Navbar", "Navigation bar", "navbar navbar-expand-lg"],
                ["Forms", "Input groups", "form-control form-label"],
                ["Tables", "Data display", "table table-striped"],
                ["Alerts", "Notifications", "alert alert-success"],
                ["Modals", "Popup dialogs", "modal modal-dialog"],
              ],
            },
          },
          {
            title: "Adding Bootstrap to an Express/EJS App",
            code: `<!-- In your HTML <head> — CDN method -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

<!-- Before </body> — JS bundle -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</script>

<!-- Or via npm -->
npm install bootstrap

// In app.js — serve Bootstrap from node_modules
app.use('/css', express.static('node_modules/bootstrap/dist/css'));`,
          },
        ],
      },
      {
        heading: "REST Architecture Principles",
        color: "green",
        content: [
          "REST stands for Representational State Transfer — an architectural style for designing web services.",
          "Introduced by Roy Fielding in his doctoral dissertation (2000).",
        ],
        subsections: [
          {
            title: "The 6 REST Constraints",
            table: {
              headers: ["Constraint", "Description"],
              rows: [
                ["Client-Server", "Frontend and backend are separated — independent evolution"],
                ["Stateless", "Each request contains all necessary info — server stores no session"],
                ["Cacheable", "Responses can be cached to improve performance"],
                ["Uniform Interface", "Consistent resource identification and manipulation via URIs"],
                ["Layered System", "Client can't tell if connected directly to server or intermediary"],
                ["Code on Demand (optional)", "Server can send executable code to client"],
              ],
            },
          },
          {
            title: "Statelessness — Deep Dive",
            content: [
              "Each request from client to server must contain ALL necessary information.",
              "Server does NOT remember previous requests — no session stored server-side.",
              "Benefits: scalability (any server can handle any request), reliability, simplicity.",
            ],
            example: {
              label: "Real-Life Analogy: ATM Machine",
              points: [
                "Every transaction requires card + PIN — machine doesn't remember previous customer.",
                "In Web API: each request includes authentication token + required parameters.",
                "Stateful (bad): Server remembers 'user logged in' between requests.",
                "Stateless (good): Every request carries a JWT token to prove identity.",
              ],
            },
          },
          {
            title: "Idempotency",
            content: [
              "An operation is idempotent if performing it multiple times gives the same result.",
              "Idempotent methods: GET, PUT, DELETE.",
              "NOT idempotent: POST — each call creates a new resource.",
            ],
            table: {
              headers: ["Method", "Idempotent?", "Reason"],
              rows: [
                ["GET", "Yes", "Reading data never changes state"],
                ["PUT", "Yes", "Replacing a resource with same data = same result"],
                ["DELETE", "Yes", "Deleting an already-deleted resource = still deleted"],
                ["POST", "No", "Each call creates a new resource — different result each time"],
                ["PATCH", "No*", "Depends on implementation — partial updates may not be idempotent"],
              ],
            },
          },
        ],
      },
      {
        heading: "HTTP Method Selection",
        color: "orange",
        content: [
          "REST uses HTTP methods semantically — each method has a specific, well-defined purpose.",
          "Choosing the correct method makes your API predictable and self-documenting.",
        ],
        subsections: [
          {
            title: "HTTP Methods Reference",
            table: {
              headers: ["Method", "Purpose", "Idempotent", "Safe", "Example"],
              rows: [
                ["GET", "Retrieve data", "Yes", "Yes", "GET /products"],
                ["POST", "Create new resource", "No", "No", "POST /products"],
                ["PUT", "Replace entire resource", "Yes", "No", "PUT /products/1"],
                ["PATCH", "Partially update resource", "No*", "No", "PATCH /products/1"],
                ["DELETE", "Remove resource", "Yes", "No", "DELETE /products/1"],
              ],
            },
          },
          {
            title: "Online Store Example",
            content: [
              "GET /products → View all products (safe, idempotent)",
              "POST /products → Add a new product (creates new resource each time)",
              "PUT /products/1 → Replace product #1 entirely",
              "PATCH /products/1 → Update only the price of product #1",
              "DELETE /products/1 → Remove product #1",
            ],
          },
          {
            title: "Safe vs Idempotent",
            content: [
              "Safe: The operation does NOT modify server state. Only GET and HEAD are safe.",
              "Idempotent: Multiple identical requests have the same effect as one. GET, PUT, DELETE are idempotent.",
              "A safe method is always idempotent, but an idempotent method is not always safe (e.g., DELETE).",
            ],
          },
        ],
      },
      {
        heading: "Resource Identification & URI Design",
        color: "pink",
        content: [
          "In REST, a Resource is any object or data — Student, Course, Product, Order.",
          "Resources are identified by URIs (Uniform Resource Identifiers).",
          "Resources should be nouns, not verbs — the HTTP method expresses the action.",
        ],
        subsections: [
          {
            title: "URI Design Rules",
            content: [
              "Use nouns, not verbs — /students not /getStudents.",
              "Use plural form — /students not /student.",
              "Use hierarchical structure for relationships — /students/10/courses.",
              "Use lowercase and hyphens — /blog-posts not /BlogPosts.",
              "Never use trailing slashes — /students not /students/.",
            ],
          },
          {
            title: "Good vs Bad URI Design",
            table: {
              headers: ["Bad URI ❌", "Good URI ✅", "Reason"],
              rows: [
                ["/createStudent", "POST /students", "Verb in URI — use HTTP method instead"],
                ["/deleteStudent", "DELETE /students/1", "Action belongs to HTTP method"],
                ["/updateStudent", "PUT /students/1", "Use PUT/PATCH for updates"],
                ["/getStudentList", "GET /students", "GET is implied — noun only"],
                ["/student", "GET /students", "Use plural form"],
              ],
            },
          },
          {
            title: "University REST API — Full Example",
            code: `// Students resource
GET    /students          → Get all students
GET    /students/:id      → Get student by ID
POST   /students          → Create new student
PUT    /students/:id      → Update student (full replace)
PATCH  /students/:id      → Update student (partial)
DELETE /students/:id      → Delete student

// Nested resources (relationships)
GET    /students/:id/courses     → Get courses for a student
POST   /students/:id/courses     → Enroll student in a course
DELETE /students/:id/courses/:cid → Unenroll from a course

// Query parameters for filtering
GET /students?department=CS&year=2
GET /students?page=1&limit=20`,
          },
          {
            title: "Library System REST API Design",
            table: {
              headers: ["Operation", "Method", "URI"],
              rows: [
                ["Get all books", "GET", "/books"],
                ["Get book by ID", "GET", "/books/:id"],
                ["Add new book", "POST", "/books"],
                ["Update book", "PUT", "/books/:id"],
                ["Delete book", "DELETE", "/books/:id"],
                ["Get book's reviews", "GET", "/books/:id/reviews"],
                ["Add review", "POST", "/books/:id/reviews"],
              ],
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "What does MVC stand for and what is the role of each layer?", a: "Model-View-Controller. Model handles data, View displays data to users, Controller controls logic and flow between Model and View." },
      { q: "What is scaffolding in web development?", a: "Scaffolding is the automatic generation of CRUD views (List, Create, Edit, Delete) based on a model definition. It saves time and reduces manual coding." },
      { q: "What is Bootstrap and what problem does it solve?", a: "Bootstrap is a front-end CSS framework that provides a responsive grid system, pre-built components, and consistent styling — eliminating the need to write CSS from scratch." },
      { q: "What is Bootstrap's grid system based on?", a: "A 12-column layout. Columns can be combined: 6+6 = half width, 4+4+4 = thirds, 12 = full width. Responsive breakpoints (sm, md, lg, xl) control layout at different screen sizes." },
      { q: "What does REST stand for and who introduced it?", a: "Representational State Transfer. Introduced by Roy Fielding in his doctoral dissertation in 2000." },
      { q: "What is statelessness in REST and why is it important?", a: "Each request must contain all necessary information — the server stores no session state between requests. This enables scalability (any server can handle any request) and reliability." },
      { q: "What is idempotency? Which HTTP methods are idempotent?", a: "An operation is idempotent if performing it multiple times gives the same result. GET, PUT, and DELETE are idempotent. POST is NOT — each call creates a new resource." },
      { q: "What is the difference between a 'safe' and an 'idempotent' HTTP method?", a: "Safe: does not modify server state (only GET/HEAD). Idempotent: multiple identical requests have the same effect as one (GET, PUT, DELETE). All safe methods are idempotent, but not vice versa." },
      { q: "Why should REST URIs use nouns instead of verbs?", a: "Because the HTTP method (GET, POST, PUT, DELETE) already expresses the action. Using verbs in URIs is redundant and breaks the uniform interface constraint. Use /students not /getStudents." },
      { q: "Design a REST API for an Online Food Ordering System with at least 3 resources.", a: "Resources: /restaurants, /menus, /orders. Examples: GET /restaurants, POST /orders, GET /orders/:id, PUT /orders/:id, DELETE /orders/:id, GET /restaurants/:id/menus, POST /restaurants/:id/menus." },
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
