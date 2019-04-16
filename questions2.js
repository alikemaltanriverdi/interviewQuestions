// node1 = { "is_text": true, "string": "Hello", "children": [{ "is_text": false, "children": [{}]}]};
// node2 = { "is_text": true, "string": "Hel", "children": [{ "is_text": true,"string":"lo", "children": [{}] }] };

//Please provide node to the function

// Input: node
// Output: Concatinated strings found the node
// Affect: None
function getText(node) {
    return (node.string || '') + (node.children || []).map(getText).join('');
}

console.log(getText(node1) === getText(node2));