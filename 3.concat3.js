function concat3(string1, string2, string3, separator) {
  return [string1, string2, string3].join(separator);
}

console.log(concat3("HTML", "CSS", "JavaScript", ","));
