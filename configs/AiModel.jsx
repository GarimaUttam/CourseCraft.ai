/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 Hour, NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the essential concepts and syntax needed to write basic programs. It is designed for beginners with no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, features, and applications. It also covers setting up the Python environment and writing your first Python program.\",\n        \"duration\": \"15 minutes\",\n        \"category\": \"Programming\"\n      },\n      {\n        \"name\": \"Data Types and Variables\",\n        \"about\": \"This chapter explores fundamental data types in Python, such as integers, floats, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations on them.\",\n        \"duration\": \"20 minutes\",\n        \"category\": \"Programming\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"This chapter dives into Python operators, including arithmetic, comparison, logical, and bitwise operators. You will learn how to build expressions using these operators and understand the order of operations.\",\n        \"duration\": \"20 minutes\",\n        \"category\": \"Programming\"\n      },\n      {\n        \"name\": \"Control Flow Statements\",\n        \"about\": \"This chapter introduces control flow statements like conditional statements (if-else) and looping constructs (for and while loops) to control the execution flow of your programs.\",\n        \"duration\": \"15 minutes\",\n        \"category\": \"Programming\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter explores the concept of functions in Python, which allow you to organize code into reusable blocks. You will also learn about Python modules and how to import and use them in your programs.\",\n        \"duration\": \"10 minutes\",\n        \"category\": \"Programming\"\n      }\n    ],\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  