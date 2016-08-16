/**
 * Created by kyubits on 08/13/2016.
 */

$(document).ready(function () {
    $(".snipcart-footer").text("Don't worry.. you are secure.. Trust me ;)");
    console.log("document loaded");
});

$(function () {
    $(".typed_element").typed({
        strings: [
            "deciding what to eat! ^1000",
            "calorie counting all by yourself? ^1500",
            "not knowing what you may like in a new place? ^2000",
            "reading reviews from a million places! ^1500",
            "staring at menu items for ever! ^500"
        ],
        typeSpeed: 0,
        shuffle: true,
        backDelay: 500,
        loop: true
    });
});