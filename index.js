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
    const Text = $('<div class="tree-content">').html("Lorem ipsum")
    return Text
}

function AddNode(parent){
    const TreeNode = $('<div class="tree-element">')
        .append(AddContent(), AddIcons())
    const NodeContent = $('<div class="node-content">').append(TreeNode)
    $(parent).append(NodeContent)
}

function RemoveTreeNode(node){
    $(node).remove()
}

function EditContent(content){
    $(content).attr('contenteditable', 'true')
    if(content != ElementEditable)
        $(ElementEditable).removeAttr('contenteditable', 'false')
    $(content).focus()
    ElementEditable = content
}

function TreeNodeClicked(node){
    if(node.classList[0] == "tree-element")
        $(node).addClass('tree-element-clicked')
        if(node != ElementClicked)
            $(ElementClicked).removeClass('tree-element-clicked')
        ElementClicked = node

    if(node.classList[0] == "fas")
        if(node.classList[1] == "fa-plus")
            AddNode($(node).closest(".node-content"))
        if(node.classList[1] == "fa-edit")
            EditContent($(node).parent().prev())
        if(node.classList[1] == "fa-trash-alt")
            RemoveTreeNode($(node).closest(".node-content"))
    return 
}

const Tree = document.getElementById('tree')
let ElementClicked = false
let ElementEditable = false
AddNode(Tree)
AddNode(Tree)
AddNode(Tree)

$(document).on('click', '.tree-element', (event)=>{
    TreeNodeClicked(event.target)
})
