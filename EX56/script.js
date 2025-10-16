function get_input() {
    return document.getElementById('input_data').value;
}

function set_result(text) {
    document.getElementById('result_output').value = text;
}

function enter_data() {
    const data = prompt("Please enter your data:", "");
    if (data !== null) {
        document.getElementById('input_data').value = data;
    }
}

function count_uppercase() {
    const str = get_input();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    set_result(`Number of uppercase characters: ${count}`);
}

function display_uppercase() {
    const str = get_input();
    set_result(str.toUpperCase());
}

function output_one_word_per_line() {
    const str = get_input().trim();
    if (str === "") {
        set_result("");
        return;
    }
    const words = str.split(/\s+/);
    set_result(words.join('\n'));
}

function display_lowercase() {
    const str = get_input();
    set_result(str.toLowerCase());
}

function count_words() {
    const str = get_input().trim();
    if (str === "") {
        set_result("Word count: 0");
        return;
    }
    const words = str.split(/\s+/);
    set_result(`Word count: ${words.length}`);
}

function count_lowercase() {
    const str = get_input();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            count++;
        }
    }
    set_result(`Number of lowercase characters: ${count}`);
}

function print_vowels_consonants() {
    const str = get_input();
    const vowels_list = "aeiouAEIOU";
    let vowels = "";
    let consonants = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            if (vowels_list.includes(char)) {
                vowels += char;
            } else {
                consonants += char;
            }
        }
    }
    set_result(`Vowels: ${vowels}\n\nConsonants: ${consonants}`);
}

function go_to_w3c() {
    window.open('https://www.w3.org/TR/javascript-api/', '_blank');
}