const Renderer = function () {

    const renderPosts = function (posts) {
        const postsContainer = $("#posts");
        postsContainer.empty();

        posts.forEach(post => {
            const postDiv = $(".post.template").clone().removeClass("template").show();
            postDiv.attr("data-id", post.id);
            postDiv.find(".post-text").text(post.text);
            postDiv.find(".delete").attr("data-id", post.id);

            const commentsDiv = postDiv.find(".comments");
            commentsDiv.empty(); 
            post.comments.forEach(comment => {
                const commentDiv = $(`
                    <div class="comment" data-id="${comment.id}">
                        ${comment.text}
                        <div class="delete-comment" data-id="${comment.id}">X</div>
                    </div>
                `);
                commentsDiv.append(commentDiv);
            });

            postsContainer.append(postDiv);
        });
    };

    return { renderPosts };
};
