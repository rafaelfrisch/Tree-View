function AddIcons(){
    const Icons = [
        $('<i class="fas fa-plus">'),
        $('<i class="fas fa-edit">'),
        $('<i class="fas fa-trash-alt">')
    ]
    const IconElements = $('<div class="edit-element">').append(Icons)
    return IconElements
}

function AddContent(){
    const Text = $('<div class="tree-content">').html("Lorem Ipsum")
    return Text
}

function AddNode(parent){
    const TreeNode = $('<div class="tree-element">')
        .append(AddContent(), AddIcons())
    $(parent).append(TreeNode)
}
const Tree = document.getElementById('tree')
AddNode(Tree)
