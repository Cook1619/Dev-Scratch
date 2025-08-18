console.log("=== MAP FUNDAMENTALS ===")

// 1. Basic Map Operations - Creating and Manipulating Maps
function mapBasics() {
    console.log("\n--- Basic Map Operations ---")
    
    // Creating a map
    const myMap = new Map()
    
    // Adding key-value pairs (.set method)
    myMap.set("name", "John")
    myMap.set("age", 25)
    myMap.set(1, "number key")
    myMap.set(true, "boolean key")
    
    console.log("Map after adding items:", myMap)
    console.log("Map size:", myMap.size)
    
    // Getting values (.get method)
    console.log("Name:", myMap.get("name"))
    console.log("Age:", myMap.get("age"))
    
    // Checking if key exists (.has method)
    console.log("Has 'name' key:", myMap.has("name"))
    console.log("Has 'email' key:", myMap.has("email"))
    
    // Deleting entries (.delete method)
    myMap.delete("age")
    console.log("After deleting 'age':", myMap)
    console.log("New size:", myMap.size)
    
    // Clearing all entries (.clear method)
    myMap.clear()
    console.log("After clearing:", myMap)
    console.log("Size after clearing:", myMap.size)
}

// Run the basics
mapBasics()

// 2. Map vs Object - Understanding the Differences
function mapVsObject() {
    console.log("\n--- Map vs Object ---")
    
    // Object approach
    const objCounter = {}
    objCounter["apple"] = 1
    objCounter["banana"] = 2
    console.log("Object:", objCounter)
    console.log("Object keys:", Object.keys(objCounter))
    
    // Map approach
    const mapCounter = new Map()
    mapCounter.set("apple", 1)
    mapCounter.set("banana", 2)
    console.log("Map:", mapCounter)
    console.log("Map keys:", Array.from(mapCounter.keys()))
    console.log("Map values:", Array.from(mapCounter.values()))
    
    // Maps can use ANY type as keys (objects can't)
    const obj = { id: 1 }
    mapCounter.set(obj, "object as key")
    mapCounter.set(42, "number as key")
    console.log("Map with different key types:", mapCounter)
}

//mapVsObject()

// 3. Iterating Through Maps
function mapIteration() {
    console.log("\n--- Iterating Through Maps ---")
    
    const fruits = new Map()
    fruits.set("apple", 5)
    fruits.set("banana", 3)
    fruits.set("orange", 8)
    
    // Method 1: for...of with entries (most common)
    console.log("Using for...of with entries:")
    for (const [key, value] of fruits) {
        console.log(`${key}: ${value}`)
    }
    
    // Method 2: forEach method
    console.log("\nUsing forEach:")
    fruits.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
    
    // Method 3: Separate iteration over keys and values
    console.log("\nKeys only:")
    for (const key of fruits.keys()) {
        console.log(key)
    }
    
    console.log("\nValues only:")
    for (const value of fruits.values()) {
        console.log(value)
    }
}

//mapIteration()

// =============================================
// BASIC MAP PROBLEMS - Applying the Concepts
// =============================================

console.log("\n\n=== BASIC MAP PROBLEMS ===")

// Problem 1: Count Characters in a String
function countCharacters(str) {
    console.log(`\n--- Counting characters in: "${str}" ---`)
    
    // TODO: Create a map to count each character
    const letterMap = new Map()
    // Hint: Loop through string, use map.has() to check if character exists
    for (let i = 0; i < str.length; i++) {
        const currentValue = str[i]
        if (letterMap.has(currentValue)) {
            letterMap.set(currentValue, letterMap.get(currentValue) + 1)
        } else {
            letterMap.set(currentValue, 1)
        }

    }
    return letterMap
    // If exists, increment count. If not, set to 1
    
    // Expected Output Examples:
    // "hello" -> Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
    // "javascript" -> Map { 'j' => 1, 'a' => 2, 'v' => 1, 's' => 1, 'c' => 1, 'r' => 1, 'i' => 1, 'p' => 1, 't' => 1 }
    
}

// Test the function (uncomment when ready)
console.log('Counting hello', countCharacters("hello"))       // Should show: h:1, e:1, l:2, o:1
console.log('Counting hello',countCharacters("javascript"))   // Should show: j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1

// Problem 2: Find First Non-Repeating Character
function firstNonRepeating(str) {
    console.log(`\n--- Finding first non-repeating character in: "${str}" ---`)
    const strMap = new Map()
    // TODO: Use a map to count characters, then find first with count of 1
    for (let i = 0; i < str.length; i++){
        const currentValue = str[i]
        if (strMap.has(currentValue)){
            strMap.set(currentValue, strMap.get(currentValue) + 1)
        } else {
            strMap.set(currentValue, 1)
        }
    }
    // need to ensure the map is built out first, then evaluate 
    for (let i = 0; i < str.length; i++) {
        if (strMap.get(str[i]) === 1) {
            return str[i]
        }
    }
    return null
    // Expected Output Examples:
    // "hello" -> "h" (h appears once, e appears once, but h comes first)
    // "javascript" -> "j" (j appears once and comes first)
    // "aabbcc" -> null or undefined (no character appears exactly once)
    
}

// Test the function (uncomment when ready)
console.log(firstNonRepeating("hello")) // Should return "h"
console.log(firstNonRepeating("javascript")) // Should return "j"
console.log(firstNonRepeating("aabbcc")) // Should return null
console.log(firstNonRepeating("abccba")) // Should return null - all chars repeat

// Problem 3: Group Words by Length
function groupByLength(words) {
    console.log(`\n--- Grouping words by length: ${words} ---`)
    
    // TODO: Create a map where key is length, value is array of words with that length
    
    // Expected Output Example:
    // ["cat", "dog", "elephant", "hi", "javascript", "go"]
    // -> Map {
    //      2 => ["hi", "go"],
    //      3 => ["cat", "dog"], 
    //      8 => ["elephant"],
    //      10 => ["javascript"]
    //    }
    
}

// Test the function (uncomment when ready)
// groupByLength(["cat", "dog", "elephant", "hi", "javascript", "go"])

console.log("\n=== Ready to implement these problems? Start with countCharacters! ===")