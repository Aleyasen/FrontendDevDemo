$(document).ready(function () {

    $("#showPostsButton").click(function () {
        showPosts();
    });

});

function showPosts() {

    $.get("http://jsonplaceholder.typicode.com/posts", function (posts, status) {

        applyMustacheTemplate('posts-list-template.html', {"posts": posts}, "#table-container")
    });
}


function applyMustacheTemplate(template_file, data, selector) {
    $.get(template_file, function (template) {

        var rendered = Mustache.render(template, data);
        $(selector).html(rendered);
    });
}