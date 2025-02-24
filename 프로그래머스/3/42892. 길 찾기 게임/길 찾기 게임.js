function buildTree(nodes) {
        if (nodes.length === 0) return null;
        const root = nodes[0];
        const leftNodes = nodes.filter(node => node.x < root.x);
        const rightNodes = nodes.filter(node => node.x > root.x);
    
     return {
            x: root.x,
            y: root.y,
            num: root.num,
            left: buildTree(leftNodes),
            right: buildTree(rightNodes)
        };
}

function solution(nodeinfo) {
//     for(let i=0; i<nodeinfo.length;i++){
//         const [x,y] = nodeinfo[i];
//         // 각 x,y들을 1부터 차례대로 배정
        
//     }
    
    const nodes = nodeinfo
        .map((node, index) => ({ x: node[0], y: node[1], num: index + 1 }))
        .sort((a, b) => b.y - a.y || a.x - b.x);
    
    const root = buildTree(nodes);
    
    // 전위 순회
    function preorder(node, result = []) {
        if (node) {
            result.push(node.num);
            preorder(node.left, result);
            preorder(node.right, result);
        }
        return result;
    }

    // 후위 순회
    function postorder(node, result = []) {
        if (node) {
            postorder(node.left, result);
            postorder(node.right, result);
            result.push(node.num);
        }
        return result;
    }
    
    return [preorder(root), postorder(root)];
}