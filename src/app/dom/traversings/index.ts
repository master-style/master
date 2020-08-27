const HTMLCollectionPrototype = HTMLCollection.prototype;
const NodeListPrototype = NodeList.prototype;

HTMLCollectionPrototype.filter = NodeListPrototype.filter = Array.prototype.filter;
HTMLCollectionPrototype.indexOf = NodeListPrototype.indexOf = Array.prototype.indexOf;
HTMLCollectionPrototype.forEach = Array.prototype.forEach;
