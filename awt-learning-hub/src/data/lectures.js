export const lectures = [
  {
    id: 1,
    title: "JSON — Structure, Data Types, Conversion & XML Evolution",
    topic: "JavaScript Object Notation",
    duration: "Self-Study",
    type: "Theory",
    description: "JSON structure, 6 data types, serialization/deserialization, and the evolution from XML to JSON.",
    color: "blue",
    sections: [
      {
        heading: "What Is JSON?",
        color: "blue",
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
        color: "purple",
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
        color: "green",
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
        color: "orange",
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
            code: `// PARSE: JSON string †’ JavaScript object
const jsonString = '{"name":"Ali","age":28,"skills":["JS","React"]}';
const obj = JSON.parse(jsonString);
console.log(obj.name);       // "Ali"
console.log(obj.skills[0]);  // "JS"

// STRINGIFY: JavaScript object †’ JSON string
const user = { name: 'Sara', active: true, score: 95.5 };
const json = JSON.stringify(user);
// Result: '{"name":"Sara","active":true,"score":95.5}'

// Pretty-printed output
const pretty = JSON.stringify(user, null, 2);`,
          },
          {
            title: "Python Conversion",
            code: `import json

# PARSE: JSON string †’ Python dict
json_str = '{"city":"Karachi","pop":15000000,"coastal":true}'
data = json.loads(json_str)
print(data["city"])    # "Karachi"

# DUMP: Python dict †’ JSON string
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
        color: "pink",
        subsections: [
          {
            title: "The Era of XML (1998—2010)",
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
            title: "The Rise of JSON (2001—Present)",
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
        color: "indigo",
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
    color: "green",
    sections: [
      {
        heading: "What is Node.js?",
        color: "blue",
        content: [
          "Node.js is an open-source, cross-platform runtime environment.",
          "Used to run JavaScript outside the browser.",
          "Built on Google Chrome's V8 JavaScript Engine.",
        ],
      },
      {
        heading: "Core Features",
        color: "green",
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
            content: ["Uses V8 engine †’ converts JS directly into machine code."],
          },
          {
            title: "4. Cross-platform",
            content: ["Runs on Windows, Linux, macOS."],
          },
        ],
      },
      {
        heading: "Node.js Architecture Overview",
        color: "purple",
        content: [
          "Node.js follows: Event-driven, Non-blocking I/O, Client—Server architecture.",
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
        color: "orange",
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
              points: ["Like chapters in a book — each chapter handles a specific topic."],
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
        color: "pink",
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
                "You order food †’ call the waiter.",
                "When food is ready †’ waiter calls you.",
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
        heading: "NPM — Node Package Manager",
        color: "teal",
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
    color: "orange",
    sections: [
      {
        heading: "Introduction & Overview",
        color: "blue",
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
        color: "green",
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
        color: "purple",
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
        color: "orange",
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
        color: "pink",
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
        color: "teal",
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
        color: "indigo",
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
        color: "rose",
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
        color: "green",
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
    color: "amber",
    sections: [
      {
        heading: "What is Express.js?",
        color: "blue",
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
        color: "purple",
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
        color: "green",
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
        color: "orange",
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
// GET  /api/users       †’ router.get('/')
// GET  /api/users/123   †’ router.get('/:id')
// POST /api/users       †’ router.post('/')

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
        color: "pink",
        content: [
          "A well-structured application is crucial for maintainability and scalability.",
          "Express is unopinionated, but common patterns emerge — often resembling MVC (Model-View-Controller) or a layered architecture.",
        ],
        subsections: [
          {
            title: "Recommended Directory Structure",
            code: `project/
”œ”—€ app.js              # Entry point — init Express, global middleware, mount routers
”œ”—€ config/             # DB config, environment settings
”œ”—€ routes/             # Route definitions (use express.Router)
”‚   ”œ”—€ users.js
”‚   ”””—€ products.js
”œ”—€ controllers/        # Business logic — handle req/res, call models
”‚   ”œ”—€ usersController.js
”‚   ”””—€ productsController.js
”œ”—€ models/             # Database schemas (e.g., Mongoose)
”‚   ”œ”—€ User.js
”‚   ”””—€ Product.js
”œ”—€ middleware/         # Reusable middleware
”‚   ”œ”—€ auth.js
”‚   ”””—€ logger.js
”””—€ public/             # Static assets (HTML, CSS, JS, images)`,
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
            title: "Request Flow: Client †’ Server",
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
      { q: "Describe the full request flow for GET /api/users/123 in a well-structured Express app.", a: "1. app.js receives request †’ 2. Global middleware runs †’ 3. Matched to /api/users, forwarded to usersRouter †’ 4. Router middleware (auth) runs †’ 5. /:id matched, calls getUserById controller †’ 6. Controller queries User model †’ 7. Model returns data †’ 8. Controller sends res.json() †’ 9. Error middleware catches any errors." },
    ],
  },
  {
    id: 5,
    title: "Express.js Architecture Concepts",
    topic: "Middleware, Routing, and Routers in Express",
    duration: "2 Hours",
    type: "Theory",
    description: "Express.js framework fundamentals — middleware types, routing, Express Router, and scalable application architecture with MVC.",
    color: "violet",
    sections: [
      {
        heading: "What is Express.js?",
        color: "blue",
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
              "app †’ Application object",
              "app.get() †’ Route definition",
              "req †’ Request object",
              "res †’ Response object",
              "app.listen() †’ Starts the server",
            ],
          },
        ],
      },
      {
        heading: "Middleware Concepts",
        color: "green",
        content: [
          "Middleware is a function that executes after receiving a request and before sending a response.",
          "Middleware functions have access to req, res, and next().",
          "Official definition: Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle.",
        ],
        example: {
          label: "Real-Life Analogy: Airport Security",
          points: [
            "1. Passenger arrives †’ Request",
            "2. Security checks passport †’ Middleware 1",
            "3. Baggage scan †’ Middleware 2",
            "4. Boarding gate †’ Route handler",
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
              "express.json() †’ Parses incoming JSON request bodies.",
              "express.static() †’ Serves static files (HTML, CSS, images) from a folder.",
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
        color: "purple",
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
              "Accessed via req.params. Example: /user/5 †’ req.params.id = '5'",
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
        color: "orange",
        content: [
          "Router allows us to separate routes into different files and organize large applications.",
          "It makes applications scalable and clean.",
          "Imagine a project with 50 routes and multiple modules — putting everything in one file becomes messy and unmanageable.",
        ],
        example: {
          label: "Real-Life Analogy: University Departments",
          points: [
            "Admission Office †’ /admissions",
            "Accounts Office †’ /accounts",
            "Examination Office †’ /exams",
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
        color: "teal",
        content: [
          "Express applications often follow the MVC (Model-View-Controller) pattern.",
          "Model †’ Database logic. View †’ Frontend (EJS/React etc.). Controller †’ Business logic.",
          "Middleware order matters — Express executes middleware in the order it is defined.",
        ],
        subsections: [
          {
            title: "Recommended Folder Structure",
            code: `project/
”œ”—€ app.js
”œ”—€ routes/
”‚   ”œ”—€ user.js
”‚   ”””—€ product.js
”œ”—€ middleware/
”‚   ”œ”—€ auth.js
”‚   ”””—€ logger.js
”œ”—€ controllers/
”‚   ”””—€ userController.js
”””—€ models/
    ”””—€ User.js`,
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
          "Example: Model †’ Student database | View †’ Student list page | Controller †’ Fetches students and sends to View.",
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
†’ GET  /students        †’ List View
†’ GET  /students/new    †’ Create Form
†’ GET  /students/:id/edit †’ Edit Page
†’ DELETE /students/:id  †’ Delete Confirmation`,
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
              "6 columns †’ Half width | 4 columns †’ One-third | 12 columns †’ Full width.",
              "Breakpoints: xs (<576px), sm (‰¥576px), md (‰¥768px), lg (‰¥992px), xl (‰¥1200px).",
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
              "GET /products †’ View all products (safe, idempotent)",
              "POST /products †’ Add a new product (creates new resource each time)",
              "PUT /products/1 †’ Replace product #1 entirely",
              "PATCH /products/1 †’ Update only the price of product #1",
              "DELETE /products/1 †’ Remove product #1",
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
              headers: ["Bad URI Œ", "Good URI œ…", "Reason"],
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
GET    /students          †’ Get all students
GET    /students/:id      †’ Get student by ID
POST   /students          †’ Create new student
PUT    /students/:id      †’ Update student (full replace)
PATCH  /students/:id      †’ Update student (partial)
DELETE /students/:id      †’ Delete student

// Nested resources (relationships)
GET    /students/:id/courses     †’ Get courses for a student
POST   /students/:id/courses     †’ Enroll student in a course
DELETE /students/:id/courses/:cid †’ Unenroll from a course

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
    id: 8,
    title: "JWT in REST APIs",
    topic: "Implementing JSON Web Tokens (JWT) in REST APIs",
    duration: "2 Hours",
    type: "Theory",
    description: "Authentication vs authorization, JWT structure (Header, Payload, Signature), how JWT works in REST APIs, and security best practices.",
    color: "rose",
    sections: [
      {
        heading: "What is Authentication?",
        color: "blue",
        content: [
          "Authentication is the process of verifying who the user is.",
          "It answers the question: 'Are you who you claim to be?'",
        ],
        example: {
          label: "Real-life Example",
          points: [
            "Logging into Facebook using username & password.",
            "The system checks your credentials to confirm your identity.",
          ],
        },
      },
      {
        heading: "What is Authorization?",
        color: "purple",
        content: [
          "Authorization determines what a user can access after they have been authenticated.",
          "It answers the question: 'What are you allowed to do?'",
        ],
        example: {
          label: "Real-life Example",
          points: [
            "Admin can delete posts.",
            "Regular user can only view posts.",
          ],
        },
      },
      {
        heading: "Traditional Session-Based Authentication",
        color: "orange",
        content: [
          "In traditional session-based auth, the server stores session data for every logged-in user.",
          "The client receives a session cookie that is sent with every request.",
        ],
        subsections: [
          {
            title: "How It Works",
            content: [
              "User logs in †’ server creates a session and stores it in memory/database.",
              "Server sends a session ID cookie to the client.",
              "Client sends the cookie with every subsequent request.",
              "Server looks up the session ID to identify the user.",
            ],
          },
          {
            title: "The Problem",
            content: [
              "Not scalable for large distributed systems — every server must share session storage.",
              "Requires sticky sessions or a shared session store (e.g., Redis) in multi-server setups.",
              "Stateful — violates REST's statelessness principle.",
            ],
          },
        ],
      },
      {
        heading: "What is JWT (JSON Web Token)?",
        color: "green",
        content: [
          "JWT is a compact, secure way to transmit information between client and server.",
          "It is self-contained, digitally signed, and stateless.",
          "Defined by the RFC 7519 standard.",
        ],
        example: {
          label: "Real-Life Analogy: Movie Ticket ðŸŽŸ",
          points: [
            "You show your ticket †’ you enter the cinema.",
            "No need to verify your identity again — the ticket itself proves you paid.",
            "JWT works the same way: the token carries all necessary info.",
          ],
        },
        subsections: [
          {
            title: "Why JWT in REST APIs?",
            content: [
              "REST APIs are stateless — JWT fits perfectly by avoiding server-side session storage.",
              "Scales easily across multiple servers — any server can verify the token.",
              "Works across multiple services and domains (microservices, mobile apps).",
            ],
          },
        ],
      },
      {
        heading: "Structure of a JWT",
        color: "teal",
        content: [
          "A JWT consists of 3 parts separated by dots: Header.Payload.Signature",
          "Each part is Base64URL-encoded.",
        ],
        subsections: [
          {
            title: "1. Header",
            content: [
              "Contains the token type (JWT) and the signing algorithm used.",
            ],
            code: `{
  "alg": "HS256",
  "typ": "JWT"
}`,
          },
          {
            title: "2. Payload",
            content: [
              "Contains claims — data about the user and additional metadata.",
              "Common claims: userId, role, expiry time (exp).",
              "š ï¸ Payload is Base64-encoded, NOT encrypted — do not store sensitive data here.",
            ],
            code: `{
  "userId": 101,
  "role": "admin",
  "exp": 1712345678
}`,
          },
          {
            title: "3. Signature",
            content: [
              "Ensures the token has not been tampered with.",
              "Created by signing: Base64(Header) + '.' + Base64(Payload) using a secret key.",
              "Only the server knows the secret key — so only the server can verify the signature.",
            ],
            code: `HMACSHA256(
  Base64UrlEncode(header) + "." + Base64UrlEncode(payload),
  secretKey
)`,
          },
          {
            title: "Full JWT Formula",
            code: `JWT = Base64(Header) + "." + Base64(Payload) + "." + Signature`,
          },
          {
            title: "Real-Life Analogy: University ID Card",
            content: [
              "Header = Type of card (Student ID)",
              "Payload = Your name, roll number, department",
              "Signature = Official university stamp — proves it's authentic",
            ],
          },
        ],
      },
      {
        heading: "How JWT Works in REST APIs",
        color: "pink",
        content: [
          "JWT follows a 6-step authentication flow between client and server.",
        ],
        subsections: [
          {
            title: "JWT Authentication Flow",
            content: [
              "1. User logs in — sends credentials to the server.",
              "2. Server verifies credentials against the database.",
              "3. Server generates a JWT and sends it back to the client.",
              "4. Client stores the token (LocalStorage or SessionStorage).",
              "5. Client sends the token in the Authorization header with every request.",
              "6. Server validates the token (checks signature + expiry) and grants access.",
            ],
          },
          {
            title: "Step 1: Login Request",
            code: `// Client sends:
{
  "username": "Ali",
  "password": "1234"
}`,
          },
          {
            title: "Step 2: Server Returns Token",
            code: `// Server responds:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
          },
          {
            title: "Step 3: Client Sends Token in Requests",
            code: `// Authorization header format:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
          },
          {
            title: "Step 4: Server Verifies Token",
            content: [
              "Server checks the signature using the secret key.",
              "Server checks the expiry (exp) claim.",
              "If valid †’ access granted. If invalid/expired †’ 401 Unauthorized.",
            ],
          },
        ],
      },
      {
        heading: "Advantages & Limitations of JWT",
        color: "indigo",
        subsections: [
          {
            title: "œ… Advantages",
            content: [
              "Stateless — no server-side session storage needed.",
              "Scalable — any server can verify the token without shared state.",
              "Fast authentication — no database lookup required per request.",
              "Works across domains and services (microservices, mobile apps).",
            ],
          },
          {
            title: "Œ Limitations",
            content: [
              "Cannot easily revoke a token before it expires.",
              "Token size can be large compared to a session cookie.",
              "Security risks if stored improperly (e.g., XSS attacks via LocalStorage).",
            ],
          },
        ],
      },
      {
        heading: "Security Best Practices",
        color: "rose",
        subsections: [
          {
            title: "1. Use HTTPS",
            content: ["Always transmit tokens over HTTPS to prevent token theft via man-in-the-middle attacks."],
          },
          {
            title: "2. Use Expiration Time",
            content: ["Always set an exp claim — short-lived tokens (15—60 min) reduce the risk window if stolen."],
          },
          {
            title: "3. Use a Strong Secret Key",
            content: ["Use a long, random secret key (256-bit minimum) to prevent brute-force attacks on the signature."],
          },
          {
            title: "4. Avoid Storing Sensitive Data in Payload",
            content: ["The payload is Base64-encoded, not encrypted — anyone can decode it. Never store passwords or PII."],
          },
          {
            title: "5. Use Refresh Tokens",
            content: ["For long sessions, use short-lived access tokens + long-lived refresh tokens to re-issue new access tokens."],
          },
          {
            title: "Token Storage: LocalStorage vs Cookies",
            table: {
              headers: ["Storage", "XSS Risk", "CSRF Risk", "Recommended Use"],
              rows: [
                ["LocalStorage", "High — JS can read it", "None", "Simple SPAs with low security needs"],
                ["HttpOnly Cookie", "None — JS cannot read", "Possible (use CSRF token)", "Recommended for production"],
                ["SessionStorage", "High — JS can read it", "None", "Short-lived sessions only"],
              ],
            },
          },
        ],
      },
      {
        heading: "Common JWT Libraries",
        color: "green",
        table: {
          headers: ["Language", "Library", "Install Command"],
          rows: [
            ["Node.js", "jsonwebtoken", "npm install jsonwebtoken"],
            ["Python", "PyJWT", "pip install PyJWT"],
            ["Java", "jjwt", "Maven/Gradle dependency"],
          ],
        },
        subsections: [
          {
            title: "Node.js Example — Sign & Verify",
            code: `const jwt = require('jsonwebtoken');
const SECRET = 'your-strong-secret-key';

// Generate token
const token = jwt.sign(
  { userId: 101, role: 'admin' },
  SECRET,
  { expiresIn: '1h' }
);

// Verify token
try {
  const decoded = jwt.verify(token, SECRET);
  console.log(decoded.userId); // 101
} catch (err) {
  console.log('Invalid or expired token');
}`,
          },
          {
            title: "Express Middleware — Protect Routes",
            code: `function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// Protect a route
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome', user: req.user });
});`,
          },
        ],
      },
    ],
    quiz: [
      { q: "What are the 3 parts of a JWT?", a: "Header, Payload, and Signature — separated by dots: Header.Payload.Signature" },
      { q: "What is the difference between Authentication and Authorization?", a: "Authentication verifies who the user is (identity). Authorization determines what the user can access (permissions)." },
      { q: "Why is JWT called stateless?", a: "Because the server does not store any session data — all necessary information is contained within the token itself." },
      { q: "What is stored in the JWT Payload?", a: "Claims (data) such as userId, role, and expiry time (exp). It is Base64-encoded, not encrypted." },
      { q: "What happens if the JWT signature is invalid?", a: "The server rejects the token and returns a 401 Unauthorized response — the request is denied." },
      { q: "Why should you NOT store sensitive data in the JWT payload?", a: "Because the payload is only Base64-encoded, not encrypted — anyone who has the token can decode and read it." },
      { q: "What is the purpose of the exp claim in JWT?", a: "It sets the expiration time of the token. After this time, the token is considered invalid and the server will reject it." },
      { q: "What is the Authorization header format for sending a JWT?", a: "Authorization: Bearer <token>" },
      { q: "What is a Refresh Token and why is it used?", a: "A long-lived token used to obtain new short-lived access tokens without requiring the user to log in again — used for long sessions." },
      { q: "Name one advantage and one limitation of JWT.", a: "Advantage: Stateless and scalable — no server-side session storage needed. Limitation: Cannot easily revoke a token before it expires." },
    ],
  },
  {
    id: 11,
    title: "Angular Core Mastery",
    topic: "Templating, Directives, Pipes, DI, Services, Routing & Observables",
    duration: "2 Hours",
    type: "Theory + Practical Demo",
    description: "Deep dive into Angular's core — structural & attribute directives, built-in & custom pipes, dependency injection, services, routing with params, and reactive Observables.",
    color: "amber",
    sections: [
      {
        heading: "Angular Mental Model",
        color: "blue",
        content: [
          "Angular drives UI from component state  when data changes, the view updates automatically.",
          "Change Detection: Angular detects when data changes and updates the DOM without manual DOM manipulation.",
          "Keep API logic out of components  put it in Services. Components should only handle UI.",
        ],
        subsections: [
          {
            title: "Data Flow",
            content: [
              "Component State  Template Binding  Rendered DOM",
              "User Event  Component Method  State Update  DOM Update",
            ],
          },
          {
            title: "Component Structure",
            content: [
              "TypeScript class  holds properties (state) and methods (behaviour).",
              "HTML template  binds to the class using Angular syntax.",
              "Optional CSS  scoped styles for this component only.",
            ],
          },
        ],
      },
      {
        heading: "Templating  Data Binding",
        color: "green",
        content: [
          "Templates connect component data to the UI. There are four binding types  all are essential.",
        ],
        subsections: [
          {
            title: "1. Interpolation  Component to HTML (text output)",
            code: "// component.ts\ntitle = 'My Store';\nprice = 1500;\n\n// template\n// <h1>{{ title }}</h1>\n// <p>Price: {{ price }}</p>",
          },
          {
            title: "2. Property Binding  Component to DOM Property",
            code: "// component.ts\nimgUrl = '/logo.png';\nisDisabled = true;\n\n// template\n// <img [src]=\"imgUrl\" alt=\"Logo\">\n// <button [disabled]=\"isDisabled\">Submit</button>",
          },
          {
            title: "3. Event Binding  DOM Event to Component",
            code: "// component.ts\naddToCart(item: any): void {\n  this.cart.push(item);\n}\n\n// template\n// <button (click)=\"addToCart(item)\">Add to Cart</button>\n// <input (input)=\"onSearch($event)\">",
          },
          {
            title: "4. Two-Way Binding  Component and HTML",
            code: "// component.ts  (FormsModule required in AppModule)\nsearchText = '';\n\n// template\n// <input [(ngModel)]=\"searchText\" placeholder=\"Search...\">\n// <p>You typed: {{ searchText }}</p>",
          },
          {
            title: "Template Reference Variable",
            code: "// #emailInput is a reference to the DOM element\n// <input #emailInput type=\"email\" placeholder=\"Enter email\">\n// <button (click)=\"check(emailInput.value)\">Check</button>",
          },
          {
            title: "Common Mistakes",
            content: [
              "Forgetting to import FormsModule when using [(ngModel)].",
              "Using {{ }} inside attribute values  use property binding instead: [disabled]=\"val\" not disabled=\"{{ val }}\".",
              "Interpolation outputs a string; Property Binding sets a DOM property  they are different.",
            ],
          },
        ],
      },
      {
        heading: "Directives  Control the DOM",
        color: "purple",
        content: [
          "Directives are instructions that modify the DOM structure or appearance.",
          "Two main types: Structural (change DOM structure) and Attribute (change appearance/behaviour).",
          "The * (asterisk) prefix identifies structural directives.",
        ],
        subsections: [
          {
            title: "Structural Directives",
            table: {
              headers: ["Directive", "What it Does", "Use Case"],
              rows: [
                ["*ngIf", "Adds/removes element from DOM", "Conditional UI"],
                ["*ngFor", "Repeats element for each item", "Lists / Tables"],
                ["*ngSwitch", "Switch-case rendering", "Multiple states"],
              ],
            },
          },
          {
            title: "Structural Directives Code",
            content: [
              "*ngIf example: <div *ngIf=\"isLoggedIn\">Welcome back!</div>",
              "*ngFor example: <li *ngFor=\"let item of items; index as i\">{{ i+1 }}. {{ item.name }}</li>",
              "*ngSwitch: use [ngSwitch] on parent, *ngSwitchCase on children.",
            ],
          },
          {
            title: "Attribute Directives",
            table: {
              headers: ["Directive", "What it Does"],
              rows: [
                ["[ngClass]", "Conditionally toggle CSS classes"],
                ["[ngStyle]", "Apply inline styles dynamically"],
                ["ngModel", "Two-way form control binding"],
              ],
            },
          },
          {
            title: "Key Distinction",
            content: [
              "*ngIf removes the element from the DOM entirely  it does NOT just hide it.",
              "This affects performance and event handlers  important to remember.",
              "Structural directives (*) change DOM structure; Attribute directives change appearance/behaviour.",
            ],
          },
        ],
      },
      {
        heading: "Pipes  Format Data for Display",
        color: "orange",
        content: [
          "Pipes transform data in templates for display  the original data is never changed.",
          "Pipes are for display formatting only, not business logic.",
        ],
        subsections: [
          {
            title: "Built-in Pipes",
            table: {
              headers: ["Pipe", "Example", "Output"],
              rows: [
                ["currency", "{{ 1200 | currency:'USD' }}", "$1,200.00"],
                ["date", "{{ today | date:'short' }}", "4/22/26, 3:00 PM"],
                ["uppercase", "{{ 'ahmed' | uppercase }}", "AHMED"],
                ["lowercase", "{{ 'AHMED' | lowercase }}", "ahmed"],
                ["number", "{{ 3.14159 | number:'1.2-2' }}", "3.14"],
                ["async", "{{ obs$ | async }}", "auto-subscribes to Observable"],
              ],
            },
          },
          {
            title: "Custom Pipe",
            content: [
              "Decorate a class with @Pipe({ name: 'truncate' }) and implement PipeTransform.",
              "transform(value: string, limit = 50): string  return truncated string with '...' if over limit.",
              "Register in AppModule declarations, then use: {{ longText | truncate:30 }}",
            ],
          },
          {
            title: "Pure vs Impure Pipes",
            content: [
              "Pure pipe (default): only runs when the input reference changes  efficient.",
              "Impure pipe: runs on every change detection cycle  can be expensive.",
              "Avoid heavy computation inside pipes  they run frequently.",
            ],
          },
        ],
      },
      {
        heading: "Dependency Injection & Services",
        color: "teal",
        content: [
          "Dependency Injection (DI) means Angular creates and provides service instances automatically  components do not need to instantiate them manually.",
          "Services hold shared logic: API calls, caching, authentication  keeping components clean.",
        ],
        subsections: [
          {
            title: "Creating a Service",
            content: [
              "Decorate with @Injectable({ providedIn: 'root' })  creates a Singleton for the whole app.",
              "Define methods like getProducts() and getById(id) that return data.",
              "Generate with CLI: ng generate service product",
            ],
          },
          {
            title: "Injecting into a Component",
            content: [
              "Add the service as a constructor parameter: constructor(private ps: ProductService) {}",
              "Use it in ngOnInit: this.products = this.ps.getProducts();",
              "Angular's injector automatically provides the service instance.",
            ],
          },
          {
            title: "Provider Scope",
            table: {
              headers: ["Scope", "How", "Effect"],
              rows: [
                ["Root (Singleton)", "providedIn: 'root'", "One shared instance across the entire app"],
                ["Component level", "providers: [] in @Component", "New instance per component  use carefully"],
              ],
            },
          },
          {
            title: "Why Use Services?",
            content: [
              "Component stays clean  it only handles UI, not data fetching or business logic.",
              "Logic reuse  write once, inject anywhere in the app.",
              "Easier testing  inject a mock service to test components in isolation.",
            ],
          },
        ],
      },
      {
        heading: "Routing  SPA Navigation",
        color: "pink",
        content: [
          "Routing lets users navigate between views without a full page reload  the core of a Single Page Application.",
          "Angular Router matches the URL to a component and renders it inside router-outlet.",
        ],
        subsections: [
          {
            title: "Defining Routes",
            content: [
              "Import Routes and RouterModule from @angular/router.",
              "Define an array: { path: '', component: HomeComponent }, { path: 'products/:id', component: ProductDetailComponent }",
              "Wildcard route { path: '**', component: NotFoundComponent } must ALWAYS be last.",
            ],
          },
          {
            title: "Navigation in Templates",
            content: [
              "Use [routerLink]=\"['/products']\" for declarative navigation in HTML.",
              "Use [routerLink]=\"['/products', item.id]\" for dynamic links.",
              "Add router-outlet to app.component.html  this is where matched components render.",
            ],
          },
          {
            title: "Reading Route Parameters",
            content: [
              "Inject ActivatedRoute in the constructor.",
              "Read params: const id = this.route.snapshot.paramMap.get('id');",
              "For programmatic navigation inject Router and call: this.router.navigate(['/products']);",
            ],
          },
          {
            title: "Common Routing Mistakes",
            content: [
              "Forgetting router-outlet in app.component.html  routes will not render without it.",
              "Wildcard route ** must always be LAST  otherwise it matches everything.",
              "routerLink (template, declarative) vs navigate() (TypeScript, programmatic)  both are valid but used in different contexts.",
            ],
          },
        ],
      },
      {
        heading: "Observables & Reactive Data",
        color: "indigo",
        content: [
          "Observables represent async data streams  API responses, user events, route changes.",
          "Angular's HttpClient returns Observables. You must subscribe to receive the data.",
          "The async pipe is the preferred way to consume Observables in templates  it auto-subscribes and auto-unsubscribes.",
        ],
        subsections: [
          {
            title: "Service with HttpClient",
            content: [
              "Inject HttpClient in the service constructor.",
              "getProducts(): Observable<Product[]> { return this.http.get<Product[]>('/api/products'); }",
              "getById(id): Observable<Product> { return this.http.get<Product>(`/api/products/${id}`); }",
            ],
          },
          {
            title: "Method 1: Manual subscribe()",
            content: [
              "this.ps.getProducts().subscribe(data => { this.products = data; });",
              "Call this in ngOnInit.",
              "Remember to unsubscribe to avoid memory leaks  store the Subscription and call .unsubscribe() in ngOnDestroy.",
            ],
          },
          {
            title: "Method 2: async pipe (Recommended)",
            content: [
              "Assign the Observable to a property: products$ = this.ps.getProducts();",
              "In template: <li *ngFor=\"let p of products$ | async\">{{ p.name }}</li>",
              "async pipe subscribes AND unsubscribes automatically  no memory leaks.",
            ],
          },
          {
            title: "Common RxJS Operators",
            table: {
              headers: ["Operator", "Purpose", "Example Use Case"],
              rows: [
                ["map()", "Transform emitted data", "Extract only names from response"],
                ["filter()", "Filter emitted values", "Show only active products"],
                ["switchMap()", "Cancel previous, start new Observable", "Search-as-you-type"],
                ["debounceTime()", "Wait before emitting", "Reduce API calls while typing"],
              ],
            },
          },
          {
            title: "Memory Leak Warning",
            content: [
              "Calling subscribe() without cleanup causes memory leaks in long-lived components.",
              "Use async pipe  it handles subscribe and unsubscribe automatically.",
              "Alternatively use takeUntil() with a Subject, or store the Subscription and call .unsubscribe() in ngOnDestroy.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "What is the difference between *ngIf and CSS display:none?", a: "*ngIf removes the element from the DOM entirely. CSS display:none just hides it visually  the element still exists in the DOM. *ngIf affects performance and event handlers." },
      { q: "What are the four types of data binding in Angular?", a: "1. Interpolation {{ x }}  component to HTML text. 2. Property binding [prop]=\"x\"  component to DOM. 3. Event binding (event)=\"fn()\"  DOM to component. 4. Two-way [(ngModel)]=\"x\"  both directions." },
      { q: "What is the difference between structural and attribute directives?", a: "Structural directives (*ngIf, *ngFor) change the DOM structure  they add or remove elements. Attribute directives (ngClass, ngStyle) change the appearance or behaviour of existing elements." },
      { q: "What is a pipe in Angular and when should you NOT use one?", a: "A pipe transforms data for display in templates without changing the original data. Do NOT use pipes for business logic or heavy computation  they run frequently and should only handle display formatting." },
      { q: "What does providedIn: 'root' mean in @Injectable?", a: "It registers the service at the root level, creating a single shared instance (Singleton) available throughout the entire application." },
      { q: "Why should API calls be placed in a Service, not a Component?", a: "To keep components clean (UI only), enable logic reuse across the app, and make testing easier by allowing mock services to be injected." },
      { q: "What happens if the wildcard route ** is not placed last in the routes array?", a: "It will match every URL before the other routes get a chance to match  effectively blocking all navigation. The wildcard must always be the last route." },
      { q: "What is the difference between routerLink and router.navigate()?", a: "routerLink is used declaratively in templates (HTML). router.navigate() is used programmatically in TypeScript  e.g., after a form submission or button click in the component class." },
      { q: "What is the advantage of using the async pipe over manual subscribe()?", a: "The async pipe automatically subscribes when the component initialises and automatically unsubscribes when the component is destroyed  preventing memory leaks without any extra code." },
      { q: "What does switchMap() do and when is it useful?", a: "switchMap() cancels the previous Observable and switches to a new one when a new value arrives. It is ideal for search-as-you-type  each new keystroke cancels the previous API request." },
    ],
  },
  {
    id: 7,
    title: "Designing & Implementing REST API",
    topic: "REST API Design + Full CRUD Implementation",
    duration: "2 Hours",
    type: "Theory + Practical",
    description: "REST principles, HTTP methods, endpoint design with Online Bookstore case study, and full CRUD implementation with Student Management System.",
    color: "indigo",
    sections: [
      {
        heading: "What is an API?",
        color: "blue",
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
        color: "green",
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
        color: "orange",
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
        color: "purple",
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
        ],
      },
      {
        heading: "REST API Design Best Practices",
        color: "pink",
        subsections: [
          { title: "1. Use Nouns, Not Verbs", content: ["Bad: /getBooks", "Good: /books"] },
          { title: "2. Use Plural Resource Names", content: ["Bad: /book", "Good: /books"] },
          {
            title: "3. Use Proper HTTP Status Codes",
            table: {
              headers: ["Code", "Meaning"],
              rows: [["200", "OK"], ["201", "Created"], ["400", "Bad Request"], ["404", "Not Found"], ["500", "Server Error"]],
            },
          },
          { title: "4. Use JSON Format", code: '{\n  "id": 1,\n  "title": "Clean Code",\n  "author": "Robert C. Martin",\n  "price": 500\n}' },
        ],
      },
      {
        heading: "Full CRUD Implementation — Student Management",
        color: "teal",
        subsections: [
          { title: "Step 1: Initialize Project", code: "npm init -y\nnpm install express" },
          { title: "Step 2: Basic Server Setup", code: "const express = require('express');\nconst app = express();\napp.use(express.json());\napp.listen(3000, () => console.log('Server running on port 3000'));" },
          { title: "Step 3: Dummy Data", code: "let students = [\n  { id: 1, name: 'Ali',  email: 'ali@gmail.com',  department: 'CS' },\n  { id: 2, name: 'Sara', email: 'sara@gmail.com', department: 'IT' }\n];" },
          { title: "Step 4: GET All Students", code: "app.get('/api/students', (req, res) => {\n  res.json(students);\n});" },
          { title: "Step 5: GET Student By ID", code: "app.get('/api/students/:id', (req, res) => {\n  const student = students.find(s => s.id == req.params.id);\n  if (!student) return res.status(404).json({ message: 'Student not found' });\n  res.json(student);\n});" },
          { title: "Step 6: POST Create Student", code: "app.post('/api/students', (req, res) => {\n  const newStudent = { id: students.length + 1, ...req.body };\n  students.push(newStudent);\n  res.status(201).json(newStudent);\n});" },
          { title: "Step 7: PUT Update Student", code: "app.put('/api/students/:id', (req, res) => {\n  const student = students.find(s => s.id == req.params.id);\n  if (!student) return res.status(404).json({ message: 'Student not found' });\n  Object.assign(student, req.body);\n  res.json(student);\n});" },
          { title: "Step 8: DELETE Student", code: "app.delete('/api/students/:id', (req, res) => {\n  students = students.filter(s => s.id != req.params.id);\n  res.json({ message: 'Student deleted successfully' });\n});" },
        ],
      },
    ],
    quiz: [
      { q: "What is the endpoint to update book with id = 10?", a: "PUT /books/10" },
      { q: "Which HTTP method is used to delete a user?", a: "DELETE" },
      { q: "Is /getAllBooks a good REST endpoint? Why?", a: "No. REST uses nouns, not verbs. Correct endpoint: GET /books" },
      { q: "Why are REST APIs stateless?", a: "Each request contains all necessary info — the server does not store session state, enabling scalability." },
      { q: "What status code is returned when a resource is created?", a: "201 Created" },
      { q: "What does REST stand for?", a: "Representational State Transfer" },
      { q: "Difference between PUT and POST?", a: "POST creates a new resource; PUT replaces/updates an existing one." },
      { q: "Design endpoints for a Teacher resource.", a: "GET /teachers, POST /teachers, PUT /teachers/{id}, DELETE /teachers/{id}" },
      { q: "What happens if we do not use proper HTTP status codes?", a: "Clients cannot understand the result of their requests — error handling breaks down." },
      { q: "Write the Express route to get a single student by ID with a 404 fallback.", a: "app.get('/api/students/:id', (req, res) => { const s = students.find(s => s.id == req.params.id); if (!s) return res.status(404).json({ message: 'Not found' }); res.json(s); });" },
    ],
  },
  {
    id: 9,
    title: "TypeScript Classes, Inheritance & Interfaces",
    topic: "TypeScript Language Constructs: OOP",
    duration: "2 Hours",
    type: "Theory",
    description: "Classes, access modifiers, inheritance, method overriding, interfaces, and the difference between classes and interfaces in TypeScript.",
    color: "violet",
    sections: [
      {
        heading: "What is a Class?",
        color: "blue",
        content: [
          "A class is a blueprint for creating objects.",
          "It bundles related properties (data) and methods (behaviour) into a single reusable unit.",
        ],
        example: {
          label: "Real-Life Analogy",
          points: ["A car blueprint creates many car objects.", "A student template creates student objects with name, age, and methods."],
        },
        subsections: [
          {
            title: "Basic Class Syntax",
            code: "class Student {\n  name: string;\n  age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  display(): void {\n    console.log(`Name: ${this.name}, Age: ${this.age}`);\n  }\n}\n\nconst s = new Student('Ali', 20);\ns.display();",
          },
          { title: "Key Concepts", content: ["Properties: Variables declared inside the class that hold object state.", "Constructor: Special method called automatically when an object is created.", "Methods: Functions defined inside the class that describe object behaviour."] },
        ],
      },
      {
        heading: "Access Modifiers",
        color: "purple",
        content: ["Access modifiers control the visibility of class members from outside the class.", "TypeScript provides three modifiers: public, private, and protected."],
        table: {
          headers: ["Modifier", "Accessible From", "Use Case"],
          rows: [
            ["public", "Everywhere (default)", "Properties/methods that should be freely accessible"],
            ["private", "Inside the class only", "Internal state that should not be exposed"],
            ["protected", "Class & subclasses only", "State shared with child classes but hidden from outside"],
          ],
        },
        subsections: [
          {
            title: "Bank Account Example",
            code: "class BankAccount {\n  private balance: number;\n\n  constructor(balance: number) {\n    this.balance = balance;\n  }\n\n  deposit(amount: number): void {\n    this.balance += amount;\n  }\n\n  getBalance(): number {\n    return this.balance;\n  }\n}",
          },
        ],
      },
      {
        heading: "Inheritance",
        color: "green",
        content: ["Inheritance allows a child class to reuse properties and methods of a parent class.", "Use the extends keyword to create a child class."],
        subsections: [
          {
            title: "Basic Inheritance",
            code: "class Animal {\n  move(): void { console.log('Moving...'); }\n}\n\nclass Dog extends Animal {\n  bark(): void { console.log('Barking...'); }\n}\n\nconst dog = new Dog();\ndog.move();\ndog.bark();",
          },
          { title: "Benefits", content: ["Code reuse: write common logic once in the parent class.", "Cleaner structure: related classes share a clear hierarchy.", "Easy maintenance: fix a bug in the parent and all children benefit."] },
        ],
      },
      {
        heading: "Method Overriding",
        color: "orange",
        content: ["A child class can override a parent class method to provide its own specific implementation."],
        subsections: [
          {
            title: "Overriding Example",
            code: "class Animal {\n  speak(): void { console.log('Animal speaks'); }\n}\n\nclass Cat extends Animal {\n  speak(): void { console.log('Cat meows'); }\n}\n\nclass Dog extends Animal {\n  speak(): void { console.log('Dog barks'); }\n}\n\nconst animals: Animal[] = [new Cat(), new Dog()];\nanimals.forEach(a => a.speak());",
          },
          {
            title: "Using super",
            code: "class Teacher extends Person {\n  greet(): void {\n    super.greet();\n    console.log('And I am a teacher.');\n  }\n}",
          },
        ],
      },
      {
        heading: "Interfaces",
        color: "teal",
        content: ["An interface defines a contract that a class must follow — it specifies what properties and methods a class must have, without providing any implementation.", "Use the implements keyword to apply an interface to a class."],
        example: {
          label: "Real-Life Analogy",
          points: ["A job contract defines responsibilities the employee must fulfil.", "A USB port standard defines the shape/pins any USB device must have."],
        },
        subsections: [
          {
            title: "Interface with Methods",
            code: "interface Shape {\n  area(): number;\n}\n\nclass Circle implements Shape {\n  constructor(private radius: number) {}\n\n  area(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}",
          },
          {
            title: "Multiple Interfaces",
            code: "interface A { a: number; }\ninterface B { b: number; }\n\nclass Test implements A, B {\n  a = 10;\n  b = 20;\n}",
          },
        ],
      },
      {
        heading: "Classes vs Interfaces",
        color: "pink",
        content: ["Use a Class when you need actual implementation.", "Use an Interface when you need a structure/contract."],
        table: {
          headers: ["Feature", "Class", "Interface"],
          rows: [
            ["Implementation", "Yes", "No"],
            ["Object creation", "Yes (new)", "No"],
            ["Constructor", "Yes", "No"],
            ["Inheritance", "Yes (extends)", "Yes (extends)"],
            ["Multiple inheritance", "No", "Yes (implements A, B)"],
          ],
        },
      },
    ],
    quiz: [
      { q: "What is a class in TypeScript?", a: "A class is a blueprint for creating objects. It bundles properties (data) and methods (behaviour) into a reusable unit." },
      { q: "Which keyword is used for inheritance in TypeScript?", a: "extends — e.g., class Dog extends Animal { }" },
      { q: "Which keyword is used to apply an interface to a class?", a: "implements — e.g., class Student implements Person { }" },
      { q: "What is the difference between public, private, and protected?", a: "public: accessible everywhere. private: accessible only inside the class. protected: accessible inside the class and its subclasses." },
      { q: "What is method overriding?", a: "When a child class provides its own implementation of a method that already exists in the parent class." },
      { q: "What is the difference between a class and an interface?", a: "A class has implementation (constructors, method bodies, object creation). An interface only defines a contract (property/method signatures) with no implementation." },
      { q: "Can a class implement multiple interfaces?", a: "Yes — class Test implements A, B { }" },
      { q: "What is encapsulation?", a: "Bundling data and methods inside a class and restricting direct access to internal state using private/protected modifiers." },
      { q: "What does super() do in a child class constructor?", a: "It calls the parent class constructor, allowing the child to initialise inherited properties before adding its own." },
      { q: "When should you use an interface instead of a class?", a: "Use an interface when you need to define a structure/contract without implementation — to enforce that certain properties and methods exist across multiple unrelated classes." },
    ],
  },
  {
    id: 10,
    title: "Introduction to Angular + Building a Sample App",
    topic: "Decorators, Modules, Components, Data Binding",
    duration: "2 Hours",
    type: "Theory + Practical Demo",
    description: "What Angular is, why it is used, Angular CLI, NgModule, Component decorator, and all four types of data binding.",
    color: "cyan",
    sections: [
      {
        heading: "Why Angular?",
        color: "blue",
        content: [
          "Angular is a structured, opinionated framework for building large-scale Single Page Applications (SPAs) with strong conventions.",
          "Framework vs library: Angular gives a full approach — routing, dependency injection, tooling, and more out of the box.",
          "Ideal for enterprise apps: consistent conventions make large codebases maintainable.",
          "Uses TypeScript and a component-based UI model.",
        ],
        example: { label: "Real-World Examples", points: ["Admin dashboards, HR portals, banking front-ends.", "Any app where structure, scalability, and team collaboration matter."] },
        subsections: [
          {
            title: "Angular vs Plain JS / jQuery / React",
            table: {
              headers: ["Aspect", "Plain JS / jQuery", "React", "Angular"],
              rows: [
                ["Type", "Library", "UI Library", "Full Framework"],
                ["Language", "JavaScript", "JavaScript / JSX", "TypeScript"],
                ["Routing", "Manual", "React Router (separate)", "Built-in"],
                ["Forms", "Manual", "Manual / libraries", "Built-in (FormsModule)"],
                ["Best for", "Small scripts", "Flexible UIs", "Large enterprise SPAs"],
              ],
            },
          },
        ],
      },
      {
        heading: "Angular Architecture Overview",
        color: "green",
        content: ["Angular apps are built from modules and components, rendered via templates, and enhanced by data binding and dependency injection.", "In Angular, everything is a component, and modules organize them."],
        subsections: [
          { title: "Core Building Blocks", content: ["Angular CLI: creates boilerplate, builds, and serves the app.", "App Module (root): organizes declarations and imports.", "Component: TypeScript logic + HTML template + CSS styles.", "Template: the view layer with Angular-specific syntax."] },
          {
            title: "Angular CLI — Key Commands",
            table: {
              headers: ["Command", "Purpose"],
              rows: [
                ["npm i -g @angular/cli", "Install Angular CLI globally"],
                ["ng new my-app", "Create a new Angular project"],
                ["ng serve -o", "Run dev server and open in browser"],
                ["ng generate component name", "Create a new component"],
                ["ng build", "Build for production"],
              ],
            },
          },
        ],
      },
      {
        heading: "Modules & @NgModule Decorator",
        color: "purple",
        content: ["A module groups related components and features and tells Angular what to compile and use.", "@NgModule is a decorator that provides configuration metadata for the module."],
        subsections: [
          {
            title: "@NgModule Metadata Properties",
            code: "import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { FormsModule } from '@angular/forms';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, FormsModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }",
          },
          {
            title: "@NgModule Properties Reference",
            table: {
              headers: ["Property", "Purpose", "Where"],
              rows: [
                ["declarations", "Things I own: components, directives, pipes", "Inside module"],
                ["imports", "Things I use: CommonModule, FormsModule", "Inside module"],
                ["providers", "Things I inject: services", "Module or component"],
                ["bootstrap", "Starting point: entry component", "AppModule only"],
              ],
            },
          },
          { title: "Common Mistakes", content: ["Putting a component in imports instead of declarations.", "Forgetting to import FormsModule when using [(ngModel)]."] },
        ],
      },
      {
        heading: "Components & @Component Decorator",
        color: "orange",
        content: ["A component is a reusable UI building block — it controls a view (template).", "Every Angular app has at least one component: the root AppComponent."],
        subsections: [
          {
            title: "@Component Metadata",
            code: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-user-card',\n  templateUrl: './user-card.component.html',\n  styleUrls: ['./user-card.component.css']\n})\nexport class UserCardComponent {\n  name: string = 'Ali';\n  role: string = 'Developer';\n\n  greet(): void {\n    alert(`Hello from ${this.name}!`);\n  }\n}",
          },
          { title: "Exam Tip", content: ["selector is used in HTML and Angular renders that component's template.", "If asked 'How does Angular render UI?' answer: Component class + template + data binding (driven by decorators)."] },
        ],
      },
      {
        heading: "Data Binding",
        color: "pink",
        content: ["Data binding connects component data (TypeScript) with template UI (HTML).", "There are four types of data binding in Angular."],
        subsections: [
          { title: "1. Interpolation — TS to HTML", code: "title = 'AWT Learning Hub';\n\n// template\n// <h1>{{ title }}</h1>" },
          { title: "2. Property Binding — TS to DOM Property", code: "isDisabled = true;\n\n// template\n// <button [disabled]=\"isDisabled\">Submit</button>" },
          { title: "3. Event Binding — DOM Event to TS", code: "save(): void { console.log('Saved!'); }\n\n// template\n// <button (click)=\"save()\">Save</button>" },
          { title: "4. Two-Way Binding — TS and HTML", code: "userName = '';\n\n// Requires FormsModule\n// <input [(ngModel)]=\"userName\" placeholder=\"Enter name\">\n// <p>Hello, {{ userName }}!</p>" },
          {
            title: "Data Binding Comparison",
            table: {
              headers: ["Binding", "Direction", "Syntax", "Use Case"],
              rows: [
                ["Interpolation", "TS to HTML", "{{ x }}", "Display text/values"],
                ["Property", "TS to DOM", "[prop]=\"x\"", "Set DOM properties"],
                ["Event", "DOM to TS", "(event)=\"fn()\"", "Handle user actions"],
                ["Two-way", "Both", "[(ngModel)]=\"x\"", "Forms and inputs"],
              ],
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "What is Angular best described as?", a: "A front-end framework for building Single Page Applications (SPAs) — opinionated, scalable, and TypeScript-first." },
      { q: "Which decorator defines a component in Angular?", a: "@Component — it provides metadata: selector, templateUrl, and styleUrls." },
      { q: "Where do you register components in an NgModule?", a: "In the declarations array — declarations are things the module owns (components, directives, pipes)." },
      { q: "What is the difference between declarations and imports in @NgModule?", a: "declarations: components/directives/pipes that belong to this module. imports: other modules whose exported features are needed (e.g., FormsModule, BrowserModule)." },
      { q: "What are the four types of data binding in Angular?", a: "1. Interpolation {{ x }} — TS to HTML. 2. Property binding [prop]=\"x\" — TS to DOM. 3. Event binding (event)=\"fn()\" — DOM to TS. 4. Two-way binding [(ngModel)]=\"x\" — both directions." },
      { q: "Which syntax is correct for event binding?", a: "(click)=\"save()\" — parentheses wrap the event name." },
      { q: "What module must be imported to use [(ngModel)]?", a: "FormsModule — imported from @angular/forms and added to the imports array in @NgModule." },
      { q: "What is the role of the selector in @Component?", a: "It defines the HTML tag name used to render the component — e.g., selector: 'app-user-card' means you use <app-user-card> in templates." },
      { q: "What is the difference between interpolation and property binding?", a: "Interpolation {{ x }} outputs a string value into the HTML content. Property binding [prop]=\"x\" sets a DOM property to a TypeScript expression — needed for non-string values like booleans." },
      { q: "What CLI command creates a new component?", a: "ng generate component component-name (or ng g c component-name) — it creates the TS, HTML, CSS files and auto-registers in AppModule." },
    ],
  },
  {
    id: 12,
    title: "MEAN Stack + ReactJS Integration",
    topic: "Complete MEAN Stack App with REST + React Components, Virtual DOM, Hooks, Props & State",
    duration: "2 Hours",
    type: "Theory + Live Demo",
    description: "How MEAN-stack layers communicate through REST, building an Express + MongoDB backend, and consuming it with a React frontend using components, props, state, and hooks.",
    color: "emerald",
    sections: [
      {
        heading: "MEAN Stack End-to-End Mental Model",
        color: "blue",
        content: [
          "MEAN is a full-stack pipeline: React UI sends HTTP requests to Express/Node API, which processes them and stores/retrieves data from MongoDB.",
          "MEAN layers: UI (React), API (Express), Runtime (Node.js), Database (MongoDB).",
          "REST is the standardized communication layer — URLs + HTTP methods + JSON.",
          "Client-server separation: the UI should never talk to the database directly.",
        ],
        example: {
          label: "Real-World Example: Task Manager",
          points: [
            "Add task: React form POST to /api/tasks",
            "List tasks: React useEffect GET from /api/tasks",
            "Update status: React button PATCH /api/tasks/:id",
            "Delete task: React button DELETE /api/tasks/:id",
          ],
        },
        subsections: [
          {
            title: "Full Request Flow",
            content: [
              "1. React triggers action (button click or page load)",
              "2. React calls API using fetch or axios",
              "3. Express route receives the request",
              "4. Mongoose queries MongoDB",
              "5. Server returns JSON response",
              "6. React updates state and UI re-renders",
            ],
          },
        ],
      },
      {
        heading: "REST API Design for Task Manager",
        color: "green",
        content: [
          "REST endpoints represent resources. Use HTTP methods to perform actions on them.",
          "Resource naming: /api/tasks not /api/getTasks — always use nouns.",
          "JSON request/response shape consistency is critical — frontend and backend must agree on key names.",
        ],
        subsections: [
          {
            title: "CRUD Endpoint Mapping",
            table: {
              headers: ["Method", "Route", "Purpose", "Status Code"],
              rows: [
                ["GET", "/api/tasks", "List all tasks", "200 OK"],
                ["POST", "/api/tasks", "Create new task", "201 Created"],
                ["PUT/PATCH", "/api/tasks/:id", "Update task", "200 OK"],
                ["DELETE", "/api/tasks/:id", "Delete task", "200 OK"],
              ],
            },
          },
          {
            title: "API Contract Example",
            code: '// POST /api/tasks — request body:\n{ "title": "Buy milk", "done": false }\n\n// Response:\n{ "_id": "64abc...", "title": "Buy milk", "done": false }',
          },
          {
            title: "Common REST Mistakes",
            content: [
              "Using GET for create or update operations.",
              "Returning raw database errors to the client — always send a clean error message.",
              "Inconsistent _id vs id — MongoDB uses _id, be consistent across frontend and backend.",
            ],
          },
        ],
      },
      {
        heading: "Backend: Express + Mongoose",
        color: "purple",
        content: [
          "Express handles routing and middleware. Mongoose maps JavaScript objects to MongoDB documents.",
          "Always add express.json() middleware — without it, req.body will be undefined.",
          "Enable CORS so the React dev server (port 3000) can call the Express API (port 5000).",
        ],
        subsections: [
          {
            title: "Project Setup",
            code: "npm init -y\nnpm install express mongoose cors\n\n// server.js\nconst express = require('express');\nconst mongoose = require('mongoose');\nconst cors = require('cors');\n\nconst app = express();\napp.use(cors());\napp.use(express.json());\n\nmongoose.connect('mongodb://localhost:27017/taskdb');\n\napp.listen(5000, () => console.log('API running on port 5000'));",
          },
          {
            title: "Task Model (Mongoose)",
            code: "// models/Task.js\nconst mongoose = require('mongoose');\n\nconst taskSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  done:  { type: Boolean, default: false },\n}, { timestamps: true });\n\nmodule.exports = mongoose.model('Task', taskSchema);",
          },
          {
            title: "REST Routes",
            code: "const Task = require('./models/Task');\n\n// GET all tasks\napp.get('/api/tasks', async (req, res) => {\n  const tasks = await Task.find();\n  res.json(tasks);\n});\n\n// POST create task\napp.post('/api/tasks', async (req, res) => {\n  const task = await Task.create(req.body);\n  res.status(201).json(task);\n});\n\n// PATCH update done\napp.patch('/api/tasks/:id', async (req, res) => {\n  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });\n  res.json(task);\n});\n\n// DELETE task\napp.delete('/api/tasks/:id', async (req, res) => {\n  await Task.findByIdAndDelete(req.params.id);\n  res.json({ message: 'Deleted' });\n});",
          },
          {
            title: "Common Backend Mistakes",
            content: [
              "Forgetting app.use(express.json()) — req.body becomes undefined.",
              "Not enabling CORS — browser blocks all requests from the React dev server.",
              "Not handling async errors — unhandled promise rejections crash the server.",
            ],
          },
        ],
      },
      {
        heading: "React Core Concepts: Components, Props & State",
        color: "orange",
        content: [
          "React UI is built from components. Data flows down via props. Component internal data uses state.",
          "Functional components are the modern standard — use hooks for state and lifecycle.",
          "One-way data flow: Parent passes data to Child via props. Child cannot modify props.",
        ],
        subsections: [
          {
            title: "Component Tree for Task Manager",
            code: "// Component hierarchy:\n// <TaskApp />\n//   <TaskForm onAdd={handleAdd} />\n//   <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />\n//     <TaskItem task={task} onToggle={...} onDelete={...} />",
          },
          {
            title: "Props vs State",
            table: {
              headers: ["Feature", "Props", "State"],
              rows: [
                ["Owned by", "Parent component", "Component itself"],
                ["Mutability", "Read-only", "Mutable via setter"],
                ["Purpose", "Pass data/config down", "Store dynamic UI data"],
                ["Triggers re-render?", "If changed by parent", "Yes, always"],
              ],
            },
          },
          {
            title: "TaskForm Component",
            code: "function TaskForm({ onAdd }) {\n  const [title, setTitle] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!title.trim()) return;\n    onAdd(title);       // lift state up to parent\n    setTitle('');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={title} onChange={e => setTitle(e.target.value)} placeholder=\"New task...\" />\n      <button type=\"submit\">Add</button>\n    </form>\n  );\n}",
          },
          {
            title: "Key Rule",
            content: [
              "If data should change (user input, fetched list), it belongs in state, not in props.",
              "Classic exam question: Differentiate props and state with an example.",
            ],
          },
        ],
      },
      {
        heading: "Hooks as Lifecycle: useEffect + Data Fetching",
        color: "teal",
        content: [
          "Hooks replace class lifecycle methods. useEffect runs after render to handle side effects like API calls.",
          "useEffect(() => { ... }, []) runs once on mount — equivalent to componentDidMount.",
          "The dependency array controls when the effect re-runs: [] = once, [id] = when id changes, no array = every render.",
        ],
        subsections: [
          {
            title: "Fetching Tasks on Load",
            code: "function TaskApp() {\n  const [tasks,   setTasks]   = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error,   setError]   = useState(null);\n\n  useEffect(() => {\n    fetch('http://localhost:5000/api/tasks')\n      .then(r => r.json())\n      .then(data => { setTasks(data); setLoading(false); })\n      .catch(err => { setError(err.message); setLoading(false); });\n  }, []); // run once on mount\n\n  if (loading) return <p>Loading...</p>;\n  if (error)   return <p>Error: {error}</p>;\n\n  return <TaskList tasks={tasks} />;\n}",
          },
          {
            title: "Adding a Task (POST)",
            code: "const handleAdd = async (title) => {\n  const res  = await fetch('http://localhost:5000/api/tasks', {\n    method:  'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body:    JSON.stringify({ title, done: false }),\n  });\n  const newTask = await res.json();\n  setTasks(prev => [...prev, newTask]); // immutable update\n};",
          },
          {
            title: "Deleting a Task (DELETE)",
            code: "const handleDelete = async (id) => {\n  await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });\n  setTasks(prev => prev.filter(t => t._id !== id));\n};",
          },
          {
            title: "Common React + API Mistakes",
            content: [
              "Updating state inside useEffect without a dependency array — causes infinite re-render loop.",
              "Forgetting to await response.json() — you get a Promise object instead of data.",
              "Not handling loading and error states — leads to blank screens on slow networks.",
            ],
          },
        ],
      },
      {
        heading: "Virtual DOM & Rendering Behavior",
        color: "pink",
        content: [
          "React does not update the real DOM for every state change. It builds a Virtual DOM, diffs it against the previous version, and updates only what changed.",
          "Re-render does not mean a full page reload — only the changed components update.",
          "State update triggers reconciliation: React compares old and new virtual DOM trees.",
        ],
        subsections: [
          {
            title: "Virtual DOM Flow",
            content: [
              "1. State changes in a component.",
              "2. React creates a new Virtual DOM tree.",
              "3. React diffs the new tree against the previous one (reconciliation).",
              "4. Only the changed nodes are patched in the real DOM.",
            ],
          },
          {
            title: "Why Keys Matter in Lists",
            code: "// Without key — React cannot track which item changed:\ntasks.map(t => <TaskItem task={t} />)  // bad\n\n// With key — React efficiently updates only the changed item:\ntasks.map(t => <TaskItem key={t._id} task={t} />)  // good",
          },
          {
            title: "State Immutability",
            content: [
              "Never mutate state directly — e.g., tasks.push(newTask) will not trigger a re-render.",
              "Always create a new array/object: setTasks([...tasks, newTask]).",
              "React detects changes by reference — same reference = no re-render.",
            ],
          },
        ],
      },
      {
        heading: "Common Full-Stack Integration Mistakes",
        color: "rose",
        subsections: [
          {
            title: "CORS Blocked Requests",
            content: [
              "Cause: Express server does not have CORS enabled.",
              "Fix: npm install cors and add app.use(cors()) before your routes.",
            ],
          },
          {
            title: "Route Mismatch",
            content: [
              "Cause: Frontend calls /api/task but backend defines /api/tasks.",
              "Fix: Always double-check the exact route string on both sides.",
            ],
          },
          {
            title: "JSON Key Mismatch",
            content: [
              "Cause: Backend returns _id but frontend reads id.",
              "Fix: Use t._id consistently, or transform the response in the service layer.",
            ],
          },
          {
            title: "Stale UI After POST",
            content: [
              "Cause: After creating a task, the state is not updated — only the DB has the new item.",
              "Fix: After a successful POST, either re-fetch all tasks or append the returned object to state.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "Which HTTP method is most appropriate to create a new resource in REST?", a: "POST — it creates a new resource and returns 201 Created." },
      { q: "In Express, which middleware is required to read JSON body data?", a: "express.json() — added with app.use(express.json()). Without it, req.body is undefined." },
      { q: "In React, changing which of the following triggers a re-render?", a: "State update — calling a setState setter triggers React to re-render the component." },
      { q: "What does useEffect(() => { ... }, []) do?", a: "It runs the effect only once after the first render — equivalent to componentDidMount in class components." },
      { q: "What does Virtual DOM primarily help React do?", a: "Minimize real DOM changes — React diffs the virtual DOM and only patches what actually changed, making updates efficient." },
      { q: "What is the difference between props and state in React?", a: "Props are read-only inputs passed from parent to child. State is mutable data owned by the component itself — changing state triggers a re-render." },
      { q: "Why do we need CORS in a React + Express setup?", a: "Browsers block cross-origin requests by default. CORS middleware on the Express server tells the browser to allow requests from the React dev server's origin." },
      { q: "What happens if you forget the key prop in a React list?", a: "React cannot efficiently track which items changed, causing incorrect DOM updates, UI glitches, and performance issues when items are added, removed, or reordered." },
      { q: "Why does useEffect sometimes cause infinite loops?", a: "When a state variable is updated inside useEffect and that same variable is in the dependency array — the effect runs, updates state, which triggers the effect again, endlessly." },
      { q: "Write the REST routes for update task status and delete a task.", a: "Update: PATCH /api/tasks/:id with body { done: true }. Delete: DELETE /api/tasks/:id. Both return 200 OK on success." },
    ],
  },
  {
    id: 13,
    title: "React Language (JSX), Components, Routing, Forms & Hooks",
    topic: "React: JSX, Sample App, Components, Routing, Controlled vs Uncontrolled Forms, Hooks",
    duration: "2 Hours",
    type: "Theory + Live Coding + Mini Activities",
    description: "Write JSX, build and compose components, implement client-side routing, handle forms (controlled vs uncontrolled), and use core hooks (useState, useEffect, useRef, useContext).",
    color: "rose",
    sections: [
      {
        heading: "React Mental Model — Why React?",
        color: "blue",
        content: [
          "React builds UI using components and updates the UI efficiently when state changes.",
          "React apps are a component tree — data flows down via props, events flow up via callbacks.",
          "State changes trigger a re-render using the Virtual DOM diffing algorithm.",
          "Real-world example: An Instagram feed is made of post components; the like button updates state locally without reloading the page.",
        ],
      },
      {
        heading: "JSX — React's Language",
        color: "purple",
        content: [
          "JSX is a syntax extension that lets you write UI like HTML inside JavaScript, but it follows JS rules.",
          "Use className instead of class (class is a reserved JS keyword).",
          "JavaScript expressions go inside { } curly braces.",
          "Inline styles use objects: style={{ backgroundColor: 'red' }}",
          "Lists rendered with .map() must include a key prop on each element.",
          "Use onClick={handler} not onclick=\"...\" — event names are camelCase in JSX.",
        ],
        subsections: [
          {
            title: "HTML vs JSX Comparison",
            table: {
              headers: ["HTML", "JSX"],
              rows: [
                ['class="box"', 'className="box"'],
                ['onclick="f()"', "onClick={f}"],
                ['"hello " + name', '{"hello " + name}'],
                ["style string", "style object"],
              ],
            },
          },
          {
            title: "JSX Compilation Flow",
            content: [
              "JSX → React.createElement() → Virtual DOM diff → Real DOM update",
              "Babel compiles JSX to React.createElement() calls under the hood.",
            ],
          },
          {
            title: "Common JSX Mistakes",
            content: [
              "❌ Returning sibling elements without a wrapper — wrap in a Fragment or div.",
              "❌ Using if directly inside JSX — use a ternary (condition ? a : b) or && short-circuit instead.",
              "❌ Forgetting the key prop in .map() — React cannot efficiently track list items without it.",
              "❌ Using class instead of className.",
            ],
          },
        ],
      },
      {
        heading: "Sample App Creation + Folder Structure",
        color: "green",
        content: [
          "A React project provides a dev server, bundler, and component structure.",
          "Recommended setup: create a React app using Vite, install dependencies, and run the dev server.",
          "App.jsx is the root UI composition point.",
          "main.jsx / index.jsx mounts the app to the real DOM.",
          "The components/ folder holds reusable UI pieces.",
          "Vite is faster than CRA (Create React App) for the development experience — keep focus on React concepts.",
        ],
        subsections: [
          {
            title: "Vite Setup Commands",
            code: `# Create a new React app with Vite
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,
          },
          {
            title: "Key Folder Structure",
            code: `my-app/
├── index.html          ← HTML entry point
├── src/
│   ├── main.jsx        ← Mounts <App /> to DOM
│   ├── App.jsx         ← Root component
│   └── components/     ← Reusable components
└── package.json`,
          },
        ],
      },
      {
        heading: "Components — Props & State",
        color: "orange",
        content: [
          "Components are reusable UI blocks — the building blocks of every React app.",
          "Props are read-only inputs passed from a parent component to a child.",
          "State is internal, mutable data owned by the component — changing state triggers a re-render.",
          "Render lists using .map() and always provide a stable key.",
          "Event handling uses camelCase: onChange, onClick, onSubmit.",
        ],
        subsections: [
          {
            title: "Props Example",
            code: `// Parent passes data down as props
function App() {
  return <UserCard name="Ayesha" role="Developer" />;
}

// Child receives and uses props (read-only)
function UserCard({ name, role }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}`,
          },
          {
            title: "State Example (useState)",
            code: `import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}`,
          },
          {
            title: "Common Component Mistakes",
            content: [
              "❌ Directly mutating state arrays/objects — always create a new reference: setItems([...items, newItem]).",
              "❌ Forgetting to pass a required prop — the child receives undefined and may crash.",
              "Exam tip: 'Difference between props and state' — props come from the parent, state lives inside the component.",
            ],
          },
        ],
      },
      {
        heading: "Routing with React Router",
        color: "pink",
        content: [
          "Routing makes React behave like a multi-page app without a full page reload.",
          "Install React Router: npm install react-router-dom",
          "Wrap the app with <BrowserRouter> at the top level.",
          "Define <Routes> and individual <Route path='...' element={...} /> entries.",
          "Use <Link to='/about'>About</Link> for navigation — never use <a href> for internal links.",
          "Create a catch-all 404 route with path='*'.",
          "Exam tip: If a question mentions 'no page reload' + 'fast navigation', the answer involves client-side routing (React Router).",
        ],
        subsections: [
          {
            title: "Basic Routing Setup",
            code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
          },
          {
            title: "React Routing Flow",
            content: [
              "User clicks <Link> → URL changes → Router matches <Route> → Component renders (no reload).",
              "Dynamic routes use params: <Route path='/products/:id' element={<Product />} />",
              "Read params in the component with the useParams() hook.",
            ],
          },
        ],
      },
      {
        heading: "Forms: Controlled vs Uncontrolled",
        color: "teal",
        content: [
          "Forms can be handled using React state (controlled) or DOM refs (uncontrolled).",
          "Default recommendation: use controlled forms — they are predictable and easy to validate.",
        ],
        subsections: [
          {
            title: "Controlled Forms",
            content: [
              "React state is the single source of truth for the input value.",
              "Use value={state} + onChange={...} on every input.",
              "Pros: easy validation, instant UI updates, predictable behavior.",
              "Cons: more boilerplate code for forms with many fields.",
            ],
            code: `function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Fields required');
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}`,
          },
          {
            title: "Uncontrolled Forms",
            content: [
              "The DOM holds the input value — React does not track it on every keystroke.",
              "Use useRef() to read the value only when needed (e.g., on submit).",
              "Pros: less re-rendering, quick for simple or legacy forms.",
              "Cons: harder to validate, less idiomatic React.",
            ],
            code: `import { useRef } from 'react';

function UncontrolledLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}`,
          },
          {
            title: "Controlled vs Uncontrolled Comparison",
            table: {
              headers: ["Feature", "Controlled", "Uncontrolled"],
              rows: [
                ["Data source", "React state", "DOM"],
                ["Validation", "Easy", "Manual"],
                ["Re-render per keystroke", "Yes", "No"],
                ["Best for", "Complex forms", "Quick / simple forms"],
              ],
            },
          },
          {
            title: "Common Form Mistakes",
            content: [
              "❌ Controlled input without onChange — the input becomes read-only.",
              "❌ Forgetting preventDefault() in the form's onSubmit handler — the page reloads.",
              "❌ Mixing controlled and uncontrolled approaches on the same input.",
            ],
          },
        ],
      },
      {
        heading: "Hooks Crash Pack",
        color: "indigo",
        content: [
          "Hooks add 'superpowers' to functional components: state, side effects, DOM refs, and shared context.",
          "Rules of Hooks: only call hooks at the top level of a component, never inside loops or conditions.",
        ],
        subsections: [
          {
            title: "useState — Component Memory",
            content: [
              "Stores a value that persists across re-renders and triggers a re-render when updated.",
              "Returns [currentValue, setterFunction].",
            ],
            code: `const [count, setCount] = useState(0);
// Increment
setCount(count + 1);
// Functional update (safer for async)
setCount(prev => prev + 1);`,
          },
          {
            title: "useEffect — Side Effects",
            content: [
              "Runs after render — used for data fetching, subscriptions, timers, and DOM manipulation.",
              "useEffect(() => { ... }, []) runs once on mount (empty dependency array).",
              "Dependencies in the array control when the effect re-runs.",
              "Return a cleanup function to cancel subscriptions or timers.",
            ],
            code: `useEffect(() => {
  // Runs once on mount
  fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data));
}, []); // empty array = run once

useEffect(() => {
  // Runs whenever 'query' changes
  fetchResults(query);
}, [query]);`,
          },
          {
            title: "useRef — DOM Access & Persistent Values",
            content: [
              "Provides a mutable .current property that does NOT trigger a re-render when changed.",
              "Primary use: accessing DOM elements directly (e.g., focus an input).",
              "Secondary use: storing a value that should persist across renders without causing re-renders.",
            ],
            code: `const inputRef = useRef(null);

// Focus the input after adding a note
const handleAdd = () => {
  addNote();
  inputRef.current.focus();
};

return <input ref={inputRef} placeholder="New note..." />;`,
          },
          {
            title: "useContext — Global-ish State Sharing",
            content: [
              "Shares state across the component tree without prop drilling.",
              "Common use cases: theme (light/dark), authenticated user, language/locale.",
              "Create a context with React.createContext(), provide it with <Context.Provider value={...}>, and consume it with useContext(Context).",
            ],
            code: `const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>;
}`,
          },
          {
            title: "Hook Quick Reference",
            table: {
              headers: ["Hook", "Purpose", "Real-world Example"],
              rows: [
                ["useState", "Component memory / local state", "Like button toggle, form input value"],
                ["useEffect", "Side effects after render", "Fetch users from API on page load"],
                ["useRef", "DOM access / persist without re-render", "Auto-focus input after adding a note"],
                ["useContext", "Global-ish state sharing", "Light/dark theme toggle across app"],
              ],
            },
          },
        ],
      },
    ],
    quiz: [
      { q: "JSX must return how many root elements?", a: "Exactly one root element. Use a <div> or Fragment (<>...</>) to wrap siblings." },
      { q: "In JSX, how do you apply a CSS class to an element?", a: "Use className='...' — not class, which is a reserved JavaScript keyword." },
      { q: "What is the difference between props and state?", a: "Props are read-only inputs passed from a parent component. State is mutable data owned by the component itself — changing state triggers a re-render." },
      { q: "What does a controlled form input require?", a: "Both value={state} and onChange={handler} — React state is the single source of truth." },
      { q: "What is React Router mainly used for?", a: "Client-side navigation without a full page reload — enabling SPA (Single Page Application) behavior." },
      { q: "Which hook is best for focusing an input field programmatically?", a: "useRef — it gives direct access to the DOM element via .current without causing re-renders." },
      { q: "What does useEffect(() => { ... }, []) do?", a: "Runs the effect exactly once after the first render (on mount). The empty dependency array means it never re-runs." },
      { q: "Why should you never mutate state directly?", a: "React detects changes by reference. Direct mutation (e.g., array.push()) does not create a new reference, so React does not detect the change and will not re-render." },
      { q: "When would you choose an uncontrolled form over a controlled one?", a: "For quick/simple forms, legacy integrations, or when you only need the value on submit — not on every keystroke." },
      { q: "What is the purpose of the key prop in a list rendered with .map()?", a: "It gives React a stable identity for each list item so it can efficiently track additions, removals, and reorders without re-rendering the entire list." },
    ],
  },
  {
    id: 14,
    title: "REST API Calling (Fetch & Axios) + Redux & Redux Thunk",
    topic: "React API Integration: Fetch, Axios, Redux, Redux Thunk (Async Middleware)",
    duration: "2 Hours",
    type: "Theory + Practical + Live Coding",
    description: "Call REST APIs from React using Fetch and Axios, manage shared state with Redux, and handle async API logic using Redux Thunk middleware.",
    color: "cyan",
    sections: [
      {
        heading: "Context & Motivation — Why API Calls + Redux?",
        color: "blue",
        content: [
          "Frontend apps don't 'own' data — APIs do. React needs a clean way to request data and keep UI consistent across components.",
          "Every async UI interaction needs three states: loading, success, and error.",
          "Scaling problem: prop drilling and duplicated fetching across components becomes unmanageable.",
          "Redux solves shared state; Thunk solves async side-effects.",
          "Real-world example: An e-commerce app has product list, cart, and user profile — all shared state across many screens.",
        ],
        subsections: [
          {
            title: "The Big Picture",
            table: {
              headers: ["Tool", "Role"],
              rows: [
                ["Fetch / Axios", "How we talk to the backend (HTTP requests)"],
                ["Redux", "Where we keep shared state (single store)"],
                ["Redux Thunk", "How Redux handles async API logic (middleware)"],
              ],
            },
          },
        ],
      },
      {
        heading: "API Calling with Fetch",
        color: "green",
        content: [
          "Fetch is built into the browser — no installation needed.",
          "You manually handle JSON parsing, HTTP errors, headers, and request body.",
          "fetch() only rejects on network errors, NOT on 404/500 — you must check response.ok.",
          "Set Content-Type: application/json header for POST/PUT requests.",
          "Use AbortController to cancel in-flight requests on component unmount (prevents state updates after unmount).",
          "React StrictMode in development runs effects twice — use a cleanup/abort guard to prevent duplicate calls.",
        ],
        subsections: [
          {
            title: "GET Request — The 4 Steps",
            content: [
              "1. Call fetch(url)",
              "2. Check response.ok — throw if false",
              "3. Convert with response.json()",
              "4. Update state (or dispatch to Redux)",
            ],
            code: `import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/products', { signal: controller.signal });
        if (!res.ok) throw new Error(\`HTTP error: \${res.status}\`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort(); // cleanup on unmount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{products.map(p => <li key={p._id}>{p.name}</li>)}</ul>;
}`,
          },
          {
            title: "POST Request with Fetch",
            code: `const createProduct = async (product) => {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};`,
          },
          {
            title: "Common Fetch Mistakes",
            content: [
              "❌ Forgetting await response.json() — you get a Promise, not the data.",
              "❌ Not checking response.ok — 404/500 responses won't throw automatically.",
              "❌ Missing headers in POST — server can't parse the body without Content-Type.",
              "❌ Updating state after component unmounts — always abort or guard with a flag.",
            ],
          },
        ],
      },
      {
        heading: "API Calling with Axios",
        color: "purple",
        content: [
          "Axios is a third-party library — install with: npm install axios",
          "Automatically parses JSON — response data is in response.data (no .json() call needed).",
          "Throws errors on 4xx/5xx responses automatically — easier error handling.",
          "Supports request/response interceptors — great for attaching auth tokens globally.",
          "Better timeout and config ergonomics than Fetch.",
          "Exam tip: If asked 'Why Axios over Fetch?' mention interceptors, better defaults, automatic JSON, and cleaner error handling.",
        ],
        subsections: [
          {
            title: "Fetch vs Axios Comparison",
            table: {
              headers: ["Feature", "Fetch", "Axios"],
              rows: [
                ["Built-in", "✅ Yes", "❌ No (npm install)"],
                ["Auto JSON parse", "❌ Manual (.json())", "✅ Yes (response.data)"],
                ["Throws on 404/500", "❌ Manual (check response.ok)", "✅ Yes (auto throws)"],
                ["Interceptors", "❌ No", "✅ Yes"],
                ["Upload progress", "Harder", "Easier"],
                ["Request cancellation", "AbortController", "CancelToken / AbortController"],
              ],
            },
          },
          {
            title: "Axios GET & POST Example",
            code: `import axios from 'axios';

// GET
const fetchUsers = async () => {
  try {
    const res = await axios.get('/api/users');
    setUsers(res.data); // no .json() needed
  } catch (err) {
    setError(err.response?.data?.message || err.message);
  }
};

// POST
const createUser = async (user) => {
  const res = await axios.post('/api/users', user);
  return res.data;
};`,
          },
          {
            title: "Axios Interceptor — Auto Auth Token",
            code: `import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

// Attach token to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

// Handle 401 globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) window.location.href = '/login';
    return Promise.reject(err);
  }
);

export default api;`,
          },
          {
            title: "Common Axios Mistakes",
            content: [
              "❌ Forgetting to set baseURL — leads to repeating the full URL in every call.",
              "❌ Not distinguishing err.response (server replied with error) vs err.request (no response received).",
            ],
          },
        ],
      },
      {
        heading: "Redux with React — Core Concepts",
        color: "orange",
        content: [
          "Redux is a predictable state container — instead of many scattered local states, shared state lives in one 'store'.",
          "Store holds the entire global state tree.",
          "Reducer is a pure function: (state, action) => newState — no side effects, no API calls, no randomness.",
          "Action is a plain object: { type: 'ACTION_TYPE', payload: data }",
          "Wrap the app with <Provider store={store}> to make the store available to all components.",
          "useSelector() reads state from the store; useDispatch() sends actions to the store.",
          "Redux is best when many components depend on the same data and updates must be consistent.",
        ],
        subsections: [
          {
            title: "Redux Data Flow",
            content: [
              "Component → dispatch(action) → reducer → store update → component re-renders",
              "The flow is always unidirectional — data flows in one direction only.",
            ],
          },
          {
            title: "Redux Setup Example (Vanilla Redux)",
            code: `// store/productsReducer.js
const initialState = { items: [], loading: false, error: null };

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(productsReducer, applyMiddleware(thunk));

// main.jsx
import { Provider } from 'react-redux';
root.render(<Provider store={store}><App /></Provider>);`,
          },
          {
            title: "Reading & Dispatching in a Component",
            code: `import { useSelector, useDispatch } from 'react-redux';

function ProductsPage() {
  const { items, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchProducts())}>Load Products</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>{items.map(p => <li key={p._id}>{p.name}</li>)}</ul>
    </div>
  );
}`,
          },
          {
            title: "Common Redux Mistakes",
            content: [
              "❌ Mutating state directly in the reducer — always return a new object/array.",
              "❌ Using the wrong slice key in useSelector — double-check the state shape.",
              "❌ Dispatching an action with the wrong type string — use constants or Redux Toolkit.",
              "❌ Calling APIs inside a reducer — reducers must be pure; use Thunk for side effects.",
            ],
          },
        ],
      },
      {
        heading: "Redux Thunk — Async Middleware",
        color: "pink",
        content: [
          "By default, Redux only accepts plain action objects. Redux Thunk middleware allows you to dispatch a function (a 'thunk') instead.",
          "That function receives (dispatch, getState) and can perform async work, then dispatch multiple actions.",
          "Thunk solves: 'Where do I put API call logic in the Redux world?'",
          "Keeps components clean — the UI just triggers an action; the thunk handles all async logic.",
          "Exam tip: 'Thunk enables async actions via middleware; it allows dispatching functions that receive (dispatch, getState).'",
        ],
        subsections: [
          {
            title: "Thunk Lifecycle Pattern",
            content: [
              "1. Dispatch FETCH_START → set loading: true",
              "2. Make the API call",
              "3. On success: dispatch FETCH_SUCCESS with data",
              "4. On failure: dispatch FETCH_FAIL with error message",
            ],
          },
          {
            title: "Thunk Action Creator Example",
            code: `// Thunk action creator
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' });
  try {
    const res = await fetch('/api/products');
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const data = await res.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_FAIL', payload: err.message });
  }
};

// Component just dispatches — no async logic here
function ProductsPage() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(fetchProducts())}>Load</button>;
}`,
          },
          {
            title: "Login Flow with Thunk (Real-world)",
            code: `export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('/api/auth/login', credentials);
    const { user, token } = res.data;
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL', payload: err.response?.data?.message });
  }
};`,
          },
          {
            title: "Full Redux Thunk Flow",
            content: [
              "UI Button Click → dispatch(thunk) → Thunk middleware intercepts → API call → dispatch(success/fail) → reducer → store update → UI re-renders",
              "Always model async state with three fields: loading, data (or items), error.",
            ],
          },
          {
            title: "Common Thunk Mistakes",
            content: [
              "❌ Calling the API inside the reducer instead of the thunk.",
              "❌ Not handling the finally block — loading stays true forever if an error occurs.",
              "❌ Dispatching success but forgetting to clear the previous error state.",
              "❌ Forgetting to apply thunk middleware when creating the store.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "In the Fetch API, which condition must you check to handle HTTP 404/500 properly?", a: "response.ok — fetch() only rejects on network errors, not on 4xx/5xx HTTP responses. You must manually check if (!response.ok) and throw." },
      { q: "Where does Axios put the parsed response data?", a: "In response.data — Axios automatically parses JSON, so you don't need to call .json()." },
      { q: "What is a Redux reducer?", a: "A pure function that takes (state, action) and returns a new state. It must have no side effects — no API calls, no randomness, no mutations." },
      { q: "What does Redux Thunk allow you to dispatch?", a: "Functions (thunks) — instead of only plain action objects. The function receives (dispatch, getState) and can perform async work." },
      { q: "What is the correct async action lifecycle pattern in Redux Thunk?", a: "Dispatch FETCH_START → make API call → dispatch FETCH_SUCCESS (with data) or FETCH_FAIL (with error message)." },
      { q: "Why should reducers be pure functions?", a: "Predictability and testability — given the same state and action, a pure reducer always returns the same result. Side effects (API calls, randomness) would make state unpredictable." },
      { q: "What is an Axios interceptor used for?", a: "To run logic on every request or response — commonly used to attach an Authorization token to every outgoing request, or to handle 401 errors globally." },
      { q: "Why does fetch() not throw on a 404 response?", a: "fetch() only rejects its Promise on network-level failures (e.g., no internet). A 404 is a valid HTTP response, so the Promise resolves — you must check response.ok to detect it." },
      { q: "What is the role of <Provider store={store}> in a React-Redux app?", a: "It makes the Redux store available to all child components via React context, enabling useSelector() and useDispatch() to work anywhere in the tree." },
      { q: "When should you prefer Redux over local state / useContext?", a: "When many components across different parts of the tree depend on the same data and updates must be consistent — e.g., auth user, cart, product list. For small/local UI state, local useState is simpler." },
    ],
  },
  {
    id: 15,
    title: "Unit Testing in React + Complete MERN Stack Implementation",
    topic: "React Testing (RTL + Jest) + MERN Architecture & End-to-End Feature Flow",
    duration: "2 Hours",
    type: "Theory + Practical Walkthrough",
    description: "Design a React test strategy using RTL and Jest, implement practical testing patterns for events/async/mocks, and build a complete MERN feature end-to-end from React UI to MongoDB.",
    color: "emerald",
    sections: [
      {
        heading: "Why Testing + What 'Complete MERN' Means",
        color: "blue",
        content: [
          "Most bugs happen at boundaries: user input, async API calls, state updates, and integration between modules.",
          "'It works on my machine' ≠ 'it's reliable' — testing gives confidence to refactor safely.",
          "MERN app success = smooth data flow + maintainable, structured codebase.",
          "Real-world example: A login form shows 'Logged in' but the token is never saved → user refreshes and is logged out.",
          "Testing prevents regressions; MERN structure prevents chaos.",
        ],
      },
      {
        heading: "Unit Testing in React — The Right Mindset",
        color: "purple",
        content: [
          "React tests should verify what the user sees and does (behavior), not internal component details.",
          "React Testing Library (RTL) philosophy: 'query like a user' — use getByRole, getByLabelText, findByText.",
          "If you can't select an element easily in a test, your UI might be less accessible.",
        ],
        subsections: [
          {
            title: "What to Test (High Value)",
            content: [
              "Rendering states: empty list, loading spinner, error message.",
              "User interactions: click, type, submit.",
              "Conditional UI: elements that appear/disappear based on props or state.",
              "Accessibility labels and roles — testability improves UX.",
            ],
          },
          {
            title: "What NOT to Test (Usually)",
            content: [
              "Implementation details — private functions, internal state structure.",
              "CSS pixels (unless using visual regression tooling).",
              "The exact number of times a function was called internally.",
            ],
          },
          {
            title: "Unit vs Integration vs E2E",
            table: {
              headers: ["Type", "Scope", "Tooling", "Example"],
              rows: [
                ["Unit", "One component / function", "Jest + RTL", "Button click updates label"],
                ["Integration", "Components + API module", "Jest + RTL + MSW/mock", "Form submit calls API and shows success"],
                ["E2E", "Full app in browser", "Cypress / Playwright", "Login → dashboard works end-to-end"],
              ],
            },
          },
          {
            title: "Testing Pyramid",
            content: [
              "Base (many): Unit tests — fast, isolated, cheap to write.",
              "Middle (some): Integration tests — verify components work together.",
              "Top (few): E2E tests — slow but highest confidence.",
              "Strategy = confidence: unit + integration, with optional E2E later.",
            ],
          },
          {
            title: "Basic RTL Test Structure",
            code: `import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Arrange → Act → Assert
test('increments count when button is clicked', () => {
  // Arrange
  render(<Counter />);

  // Act
  fireEvent.click(screen.getByRole('button', { name: /increment/i }));

  // Assert
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`,
          },
        ],
      },
      {
        heading: "Practical Testing Patterns",
        color: "orange",
        content: [
          "Most real tests involve events and asynchronous updates.",
          "Always use findBy... or waitFor for async content — getByText will fail before the DOM updates.",
        ],
        subsections: [
          {
            title: "1) Testing Events & State Updates",
            content: [
              "Click → UI change: fire a click event, assert the new text/element appears.",
              "Typing in input → value changes: use fireEvent.change or userEvent.type.",
              "Submit form → validation messages appear: fire submit, assert error text is visible.",
            ],
            code: `test('shows error when form submitted empty', () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});`,
          },
          {
            title: "2) Testing Async UI (Fetch / Axios)",
            content: [
              "Loading spinner shows immediately after render/trigger.",
              "Data appears after the promise resolves — use findBy... (returns a Promise).",
              "Error message appears when the API call fails.",
            ],
            code: `import { render, screen } from '@testing-library/react';
import { rest } from 'msw'; // or jest.mock your api module
import UsersList from './UsersList';

// Mock the API module
jest.mock('../api/users', () => ({
  getUsers: jest.fn().mockResolvedValue([
    { _id: '1', name: 'Ayesha' },
    { _id: '2', name: 'Ali' },
  ]),
}));

test('shows loading then renders users', async () => {
  render(<UsersList />);

  // Loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for async data
  expect(await screen.findByText('Ayesha')).toBeInTheDocument();
  expect(screen.getByText('Ali')).toBeInTheDocument();
});

test('shows error when fetch fails', async () => {
  require('../api/users').getUsers.mockRejectedValueOnce(new Error('Network error'));
  render(<UsersList />);
  expect(await screen.findByText(/network error/i)).toBeInTheDocument();
});`,
          },
          {
            title: "3) Mocking Strategies",
            content: [
              "Mock the API module (api/users.js) rather than mocking fetch/axios everywhere — cleaner and more maintainable.",
              "Use MSW (Mock Service Worker) conceptually to simulate real server responses at the network level.",
              "Avoid over-mocking — if everything is mocked, tests don't represent real usage.",
            ],
          },
          {
            title: "Common Testing Mistakes",
            content: [
              "❌ Using getByText for async content — use findByText or wrap in waitFor.",
              "❌ Forgetting to wrap async actions in act() — causes 'not wrapped in act' warnings.",
              "❌ Testing internal state instead of UI output — tests break on refactor.",
              "❌ Over-mocking until tests become meaningless.",
              "❌ Not wrapping components that need Router or Context in the test render.",
              "Exam tip: If asked 'How to test API UI?' — mock the network, verify loading → success/error UI states, assert rendered output.",
            ],
          },
        ],
      },
      {
        heading: "MERN Stack — Architecture Blueprint",
        color: "teal",
        content: [
          "MERN is a pipeline: React UI → Express API → MongoDB, with Node.js powering the server runtime.",
          "The full request flow: React (Client) → HTTP (Axios/Fetch) → Express Routes → Controller → Service/Model (Mongoose) → MongoDB",
          "The response returns back the same path in reverse.",
          "MERN 'complete implementation' is NOT one giant file — it's a structured, layered codebase.",
          "Exam tip: In MERN questions, always mention Routes → Controllers → Models, and that the client calls the API with proper HTTP methods and status codes.",
        ],
        subsections: [
          {
            title: "Separation of Concerns",
            content: [
              "Routes: URL mapping only — define the path and HTTP method, delegate to controller.",
              "Controllers: request/response logic — validate input, call model, send response.",
              "Models: schema definition + DB operations — Mongoose queries live here.",
              "REST endpoints connect the front-end to the DB cleanly.",
              "Environment configs: .env for connection strings, API base URL, secrets.",
            ],
          },
          {
            title: "MERN Folder Structure",
            table: {
              headers: ["Layer", "Example Folders"],
              rows: [
                ["Backend", "/server/routes, /server/controllers, /server/models, /server/config"],
                ["Frontend", "/client/components, /client/pages, /client/services (api)"],
              ],
            },
          },
          {
            title: "MERN Architecture Flow",
            code: `// 1. React component triggers API call
const handleSubmit = async (note) => {
  await notesApi.create(note);   // client/services/notesApi.js
  fetchNotes();
};

// 2. Express Route (server/routes/notes.js)
router.post('/', notesController.create);

// 3. Controller (server/controllers/notesController.js)
exports.create = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 4. Mongoose Model (server/models/Note.js)
const noteSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  body:      { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Note', noteSchema);`,
          },
        ],
      },
      {
        heading: "Complete MERN Implementation Flow (Step-by-Step)",
        color: "indigo",
        content: [
          "Build one feature end-to-end — you learn more from one full vertical slice than many half-finished flows.",
          "Build vertically: endpoint → DB → UI → tests.",
        ],
        subsections: [
          {
            title: "The 8-Step Recipe (Notes Feature Example)",
            content: [
              "1. Define Feature — Notes with fields: title, body, createdAt.",
              "2. Design API — GET /api/notes, POST /api/notes, PUT /api/notes/:id, DELETE /api/notes/:id.",
              "3. Backend Setup — Express server + express.json() + CORS middleware + Mongoose DB connection.",
              "4. Create Model — Mongoose schema with required field validations.",
              "5. Implement Controller — CRUD handlers returning proper HTTP status codes (200, 201, 400, 404, 500).",
              "6. React Integration — API service module (api/notes.js) centralizes all fetch/axios calls.",
              "7. UI States — Always handle loading, error, and empty list states in every component.",
              "8. Testing Plan — Unit test form validation; integration test: submit → calls API → list updates (with mock).",
            ],
          },
          {
            title: "Backend Setup Code",
            code: `// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/notes', require('./routes/notes'));
app.listen(5000, () => console.log('Server on port 5000'));`,
          },
          {
            title: "React API Service Module",
            code: `// client/services/notesApi.js
import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getNotes    = ()       => axios.get(\`\${BASE}/notes\`).then(r => r.data);
export const createNote  = (data)   => axios.post(\`\${BASE}/notes\`, data).then(r => r.data);
export const updateNote  = (id, d)  => axios.put(\`\${BASE}/notes/\${id}\`, d).then(r => r.data);
export const deleteNote  = (id)     => axios.delete(\`\${BASE}/notes/\${id}\`).then(r => r.data);`,
          },
          {
            title: "Common MERN Implementation Mistakes",
            content: [
              "❌ Mixing DB logic inside route files — routes should only map URLs to controllers.",
              "❌ No schema validation — garbage data enters the DB and causes downstream bugs.",
              "❌ Hardcoding URLs (http://localhost:5000) — breaks on deployment; use .env variables.",
              "❌ Ignoring error states in the UI — the app freezes or confuses the user.",
            ],
          },
        ],
      },
    ],
    quiz: [
      { q: "What does React Testing Library encourage you to test?", a: "User-visible behavior — what the user sees and interacts with, not internal component state or implementation details." },
      { q: "Which RTL query should you use for async UI updates?", a: "findByText (or findBy...) — it returns a Promise and waits for the element to appear. getByText throws immediately if the element isn't there yet." },
      { q: "In MERN, which layer should contain DB query logic?", a: "Models/Services — Mongoose queries belong in the model or a service layer, not in routes or controllers." },
      { q: "What is the correct HTTP method to update an existing resource?", a: "PUT (full replace) or PATCH (partial update). Both return 200 OK on success." },
      { q: "A reliable MERN architecture separates which three backend layers?", a: "Routes (URL mapping), Controllers (request/response logic), and Models (schema + DB operations)." },
      { q: "Why is testing implementation details discouraged in React?", a: "Tests that check internal state or private functions break whenever you refactor — even if the UI behavior is unchanged. Testing behavior makes tests resilient to refactoring." },
      { q: "Why do we mock API calls in frontend tests?", a: "To make tests fast, deterministic, and isolated from the network. Real API calls are slow, can fail for external reasons, and make tests flaky." },
      { q: "What is the difference between a Controller and a Model in Express/Mongoose?", a: "Controller handles the HTTP request/response cycle — validates input and sends the response. Model defines the schema and contains the Mongoose DB query logic." },
      { q: "What is the Arrange–Act–Assert pattern in testing?", a: "Arrange: set up the component/data. Act: trigger the user interaction or event. Assert: verify the expected UI output or behavior." },
      { q: "List the 8 steps to build a complete MERN feature end-to-end.", a: "1) Define feature, 2) Design API endpoints, 3) Backend setup (Express + Mongoose), 4) Create Model with schema, 5) Implement Controller (CRUD + status codes), 6) React API service module, 7) UI states (loading/error/empty), 8) Testing plan (unit + integration)." },
    ],
  },
];

export const getLectureById = (id) => lectures.find((l) => l.id === parseInt(id));
