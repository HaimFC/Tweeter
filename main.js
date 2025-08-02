const tweeter = Tweeter();
const renderer = Renderer();

const render = function() {
    renderer.renderPosts(tweeter.getPosts());
};

const bindEvents = function() {
    $("#twit-button").on("click", function() {
        const postText = $("#input").val().trim();
        if (postText !== "") {
            tweeter.addPost(postText);
            $("#input").val(""); // Clear input
            render();
        }
    });

    $("#posts").on("click", ".delete", function() {
        const postID = $(this).closest(".post").data("id");
        tweeter.removePost(postID);
        render();
    });

    $("#posts").on("click", ".comment-button", function() {
        const postDiv = $(this).closest(".post");
        const postID = postDiv.data("id");
        const commentInput = postDiv.find(".comment-input");
        const commentText = commentInput.val().trim();

        if (commentText !== "") {
            tweeter.addComment(postID, commentText);
            commentInput.val(""); // Clear input
            render();
        }
    });

    $("#posts").on("click", ".delete-comment", function() {
        const commentID = $(this).data("id");
        const postID = $(this).closest(".post").data("id");

        tweeter.removeComment(postID, commentID);
        render();
    });
};

const init = function() {
    render();
    bindEvents();
};

init();
