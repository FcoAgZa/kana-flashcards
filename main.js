const kana_print_div = document.getElementById("kana_print_div");
const kana_print = document.getElementById("kana_print");

const inout_div = document.getElementById("inout_div");
const inout_txt = document.getElementById("inout_txt");

const button_div = document.getElementById("button_div");
const hiragana_start_btn = document.getElementById("hiragana_start_btn");
const katakana_start_btn = document.getElementById("katakana_start_btn");
const show_answer_btn = document.getElementById("show_answer_btn");
const user_answer_btn = document.getElementById("user_answer_btn");
const more_btn = document.getElementById("more_btn");
const switch_btn = document.getElementById("switch_btn");

const hiraganakatakana = [
    { hiragana: 'あ', katakana: 'ア', romanji: 'a' },
    { hiragana: 'い', katakana: 'イ', romanji: 'i' },
    { hiragana: 'う', katakana: 'ウ', romanji: 'u' },
    { hiragana: 'え', katakana: 'エ', romanji: 'e' },
    { hiragana: 'お', katakana: 'オ', romanji: 'o' },

    { hiragana: 'か', katakana: 'カ', romanji: 'ka' },
    { hiragana: 'き', katakana: 'キ', romanji: 'ki' },
    { hiragana: 'く', katakana: 'ク', romanji: 'ku' },
    { hiragana: 'け', katakana: 'ケ', romanji: 'ke' },
    { hiragana: 'こ', katakana: 'コ', romanji: 'ko' },

    { hiragana: 'さ', katakana: 'サ', romanji: 'sa' },
    { hiragana: 'し', katakana: 'シ', romanji: 'shi' },
    { hiragana: 'す', katakana: 'ス', romanji: 'su' },
    { hiragana: 'せ', katakana: 'セ', romanji: 'se' },
    { hiragana: 'そ', katakana: 'ソ', romanji: 'so' },
        
    { hiragana: 'た', katakana: 'タ', romanji: 'ta' },
    { hiragana: 'ち', katakana: 'チ', romanji: 'chi' },
    { hiragana: 'つ', katakana: 'ツ', romanji: 'tsu' },
    { hiragana: 'て', katakana: 'テ', romanji: 'te' },
    { hiragana: 'と', katakana: 'ト', romanji: 'to' },
        
    { hiragana: 'な', katakana: 'ナ', romanji: 'na' },
    { hiragana: 'に', katakana: 'ニ', romanji: 'ni' }, 
    { hiragana: 'ぬ', katakana: 'ヌ', romanji: 'nu' }, 
    { hiragana: 'ね', katakana: 'ネ', romanji: 'ne' }, 
    { hiragana: 'の', katakana: 'ノ', romanji: 'no' },   
    
    { hiragana: 'は', katakana: 'ハ', romanji: 'ha' },
    { hiragana: 'ひ', katakana: 'ヒ', romanji: 'hi' }, 
    { hiragana: 'ふ', katakana: 'フ', romanji: 'fu' }, 
    { hiragana: 'へ', katakana: 'ヘ', romanji: 'he' }, 
    { hiragana: 'ほ', katakana: 'ホ', romanji: 'ho' }, 

    { hiragana: 'ま', katakana: 'マ', romanji: 'ma' },
    { hiragana: 'み', katakana: 'ミ', romanji: 'mi' },
    { hiragana: 'む', katakana: 'ム', romanji: 'mu' },
    { hiragana: 'め', katakana: 'メ', romanji: 'me' },
    { hiragana: 'も', katakana: 'モ', romanji: 'mo' },

    { hiragana: 'や', katakana: 'ヤ', romanji: 'ya' },
    { hiragana: 'ゆ', katakana: 'ユ', romanji: 'yu' },
    { hiragana: 'よ', katakana: 'ヨ', romanji: 'yo' },

    { hiragana: 'ら', katakana: 'ラ', romanji: 'ra' },
    { hiragana: 'り', katakana: 'リ', romanji: 'ri' },
    { hiragana: 'る', katakana: 'ル', romanji: 'ru' },
    { hiragana: 'れ', katakana: 'レ', romanji: 're' },
    { hiragana: 'ろ', katakana: 'ロ', romanji: 'ro' },

    { hiragana: 'わ', katakana: 'ワ', romanji: 'wa' },
    { hiragana: 'を', katakana: 'ヲ', romanji: 'wo' },

    { hiragana: 'ん', katakana: 'ン', romanji: 'n' },
];

var my_hiragana = "";
var my_katakana = "";
var my_romanji = "";

function show (element){
    element.disabled = false;
    element.classList.remove('hidden');
}
function hide (element){
    element.disabled = true;
    element.classList.add('hidden');
}

function start(option){ //Iniciar
    op = option;
    pick_kana = Math.floor(Math.random() * 46);
    my_hiragana = hiraganakatakana [pick_kana] [option];
    my_romanji = hiraganakatakana  [pick_kana] ["romanji"];

    show_arr = [ kana_print, kana_print_div,  inout_div, inout_txt, user_answer_btn, show_answer_btn ].forEach(show);
    hide_arr = [ more_btn, switch_btn, hiragana_start_btn, katakana_start_btn ].forEach(hide);

    kana_print.innerHTML = my_hiragana;

    inout_txt.className = '';
    inout_txt.disabled = false;
    inout_txt.focus();
    inout_txt.select();
    inout_txt.value = "";

    if (op === 'hiragana'){
        more_btn.onclick = function(){ start('hiragana'); }
        switch_btn.onclick = function(){ start('katakana'); }
        switch_btn.value = "Try Katakana";
    }
    else{
        more_btn.onclick = function(){ start('katakana'); }
        switch_btn.onclick = function(){ start('hiragana'); }
        switch_btn.value = "Try Hiragana";
    }
}

function show_answer(){
    show_arr = [ more_btn, switch_btn ].forEach(show);
    hide_arr = [ show_answer_btn, user_answer_btn ].forEach(hide);
    
    inout_txt.className = '';
    inout_txt.classList.add('ans_help');
    inout_txt.value = "It's " + my_romanji;
    inout_txt.disabled = true;
}

function answer(){
    show_arr = [ more_btn, switch_btn ].forEach(show);
    hide_arr = [ show_answer_btn, user_answer_btn ].forEach(hide);

    inout_txt.className = '';
    inout_txt.disabled = true;
    inout_txt_lowerCase = inout_txt.value.toLowerCase();
    if (inout_txt_lowerCase === my_romanji){
        inout_txt.value = "Yes, it's " + my_romanji;
        inout_txt.classList.add('answer_show_correct');
    }
    else{
        inout_txt.value = "No, it's " + my_romanji;
        inout_txt.classList.add('answer_show_wrong');
    }
}