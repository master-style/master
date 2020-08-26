const HTMLCollectionProto = HTMLCollection.prototype;
const NodeListProto = NodeList.prototype;

HTMLCollectionProto.filter = NodeListProto.filter = Array.prototype.filter;
HTMLCollectionProto.indexOf = NodeListProto.indexOf = Array.prototype.indexOf;
HTMLCollectionProto.forEach = Array.prototype.forEach;
