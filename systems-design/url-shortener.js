// Design a URL shortener
// You know, like bit.ly.
// Let's call it ca.ke!
// Step 1 is to scope the project. System design questions like this are usually 
// intentionally left open-ended, so you have to ask some questions and make some 
// decisions about exactly what you're building to get on the same page as your 
// interviewer.
// So, what are we building? What features might we need?

// Command line tool - enter the original URL, return shortened URL
// Validate = URL exists
// Store hash map where each shortened URL corresponds to lengthy URL

const original_url = process.argv[2]

// Validate
