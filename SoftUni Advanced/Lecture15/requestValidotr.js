function httpValidator(obj) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersions = [" HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  let uriRegex = /[\w.]+/g;
  let msgText = [`<`, `>`, `\\`, `&`, `'`, `"`];

  if (!validMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (obj.uri !== "*" && !obj.uri.match(uriRegex)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!validVersions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }
  for (let ch of obj.message) {
    if (msgText.includes(ch)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return obj
}

httpValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "rm -rf /",
});
