// function DFS(node) {
//     let stack = new Stack(this.nodes.length);
//     let visited = new Set();
//     stack.push(node);
//     visited.add(node);
//     while (!stack.isEmpty()) {
//         let t = stack.pop()
//         console.log(t)
//         this.edges[t]
//             .filter(n => !visited.has(n))
//             .forEach(n => {
//                 visited.add(n);
//                 stack.push(n);
//             });
//     }
// }

const family = {
    name: "mother",
    children: [{
        name: "Rona",
        children: [{
            name: "Noy",
            children: [
                { name: "Ben", children: [{ name: "Gali", children: [] }] },
                { name: "Dana", children: [] }
            ]
        }, { name: "Rotem", children: [{ name: "Noa", children: [] }] }]
    }]
}

function dfs(object) {
    console.log(object.name);
    if (object.children.length) {
        for (let i = 0; i < object.children.length; i++) {
            dfs(object.children[i])
        }
    }
}
dfs(family);