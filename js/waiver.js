figures = document.getElementsByTagName("figure");

// Problem 1
function add_one_third_class() {
    for (var ii = 0; ii < figures.length; ++ii) {
        figures[ii].className = "one-third";
    }
}

add_one_third_class();

// Problem 2
footer = document.getElementsByTagName("footer")[0];
function remove_footer() {
    footer.remove();
}

footer.addEventListener("click", remove_footer);

// Problem 3
function hide_5th_figure() {
    figures[4].style.visibility = "hidden";
}

figures[4].addEventListener("dblclick", hide_5th_figure);

// Problem 4
figure0_caption = figures[0].getElementsByTagName("figcaption")[0]
original_figure0_caption_font_family = figure0_caption.style.fontFamily

function change_1st_figure_caption_font() {
    figure0_caption.style.fontFamily = "Cursive";
}

function restore_1st_figure_caption_font() {
    figure0_caption.style.fontFamily = original_figure0_caption_font_family;
}

figure0_caption.addEventListener("mouseenter", change_1st_figure_caption_font);
figure0_caption.addEventListener("mouseleave", restore_1st_figure_caption_font);

// Problem 5
figure0_caption.tabIndex = 1;
figure0_caption.addEventListener("focusin", change_1st_figure_caption_font);
figure0_caption.addEventListener("focusout", restore_1st_figure_caption_font);
