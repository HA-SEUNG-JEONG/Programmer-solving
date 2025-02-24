function buildTree(nodes) {
  if (nodes.length === 0) return null;
        const root = nodes[0];
        const tree = { x: root.x, y: root.y, num: root.num, left: null, right: null };

        for (let i = 1; i < nodes.length; i++) {
            let current = tree;
            while (true) {
                if (nodes[i].x < current.x) {
                    if (current.left === null) {
                        current.left = { x: nodes[i].x, y: nodes[i].y, num: nodes[i].num, left: null, right: null };
                        break;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = { x: nodes[i].x, y: nodes[i].y, num: nodes[i].num, left: null, right: null };
                        break;
                    }
                    current = current.right;
                }
            }
        }
        return tree;
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
    function preorder(root) {
        const result = [];
        const stack = [root];
        while (stack.length > 0) {
            const node = stack.pop();
            if (node) {
                result.push(node.num);
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        return result;
    }

    // 후위 순회
    function postorder(root) {
        const result = [];
        const stack = [];
        let current = root;
        let lastVisited = null;

        while (current || stack.length > 0) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                const peekNode = stack[stack.length - 1];
                if (peekNode.right && lastVisited !== peekNode.right) {
                    current = peekNode.right;
                } else {
                    result.push(peekNode.num);
                    lastVisited = stack.pop();
                }
            }
        }
        return result;
    }
    
    return [preorder(root), postorder(root)];
}