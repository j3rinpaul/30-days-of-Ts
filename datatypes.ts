//strings can be made in two types

//implict
let string1 = "Hello World";

//explict

let word : string = "Hello WOrld"

//in case of explict datatypes it cannot be reassigned to another data type
//eg: 

// word = 32;  this throws an error that "attempts to re-assign the value to a different type" 
//string1 = 45; this also shows the same error


// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

//in js this will return the datatype as an object but in ts this will be returned as 'any'thing
//it could be number or string etc..


let val: any = true;
val = "string";

//the datatype any allows all kinds of typecasting and doesn't throws error as in of js


//unknown is also a datatype same as any
//it allows the developer to cast the datatype later

let w: unknown = 1;
w = "string"; // no error

//as unknown performs the same as any but it is safe to use unknown rather than any