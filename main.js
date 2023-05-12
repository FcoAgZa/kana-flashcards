const kana_print_div = document.getElementById("kana_print_div");
const kana_print = document.getElementById("kana_print");

const answer_div = document.getElementById("answer_div");
const ans_help_print = document.getElementById("ans_help_print");
const ans_res_print = document.getElementById("ans_res_print");

const input_text_div = document.getElementById("input_text_div");
const userans_txtinput = document.getElementById("userans_txtinput");

const button_div = document.getElementById("button_div");
const hiragana_start_btn = document.getElementById("hiragana_start_btn");
const katakana_start_btn = document.getElementById("katakana_start_btn");
const show_answer_btn = document.getElementById("show_answer_btn");
const user_answer_btn = document.getElementById("user_answer_btn");
const hiragana_more_btn = document.getElementById("hiragana_more_btn");
const katakana_more_btn = document.getElementById("katakana_more_btn");
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
function restart_ans(){
    answer_div.classList.remove(
        'ans_help_print', 'answer_show_correct', 'answer_show_wrong');
    ans_res_print.innerHTML = ""; 
    ans_help_print.innerHTML = "";
}
function hiragana_start(option){ //Iniciar
    op = option;
    pick_kana = Math.floor(Math.random() * 46);
    my_hiragana = hiraganakatakana [pick_kana] [option];
    my_romanji = hiraganakatakana  [pick_kana] ["romanji"];
    console.log(pick_kana + "" + my_hiragana + "" + my_romanji);
    //restart_ans();
    userans_txtinput.className = '';
    userans_txtinput.disabled = false;
    show_arr = [
        kana_print, kana_print_div,  
        input_text_div, userans_txtinput, 
        user_answer_btn, show_answer_btn
    ].forEach(show);
    hide_arr = [
        //answer_div, ans_help_print,
        hiragana_more_btn, switch_btn,
        hiragana_start_btn, katakana_start_btn
    ].forEach(hide);
    kana_print.innerHTML = my_hiragana;
    userans_txtinput.focus();
    userans_txtinput.select();
    userans_txtinput.value = "";
    if (op === 'hiragana'){
        switch_btn.onclick = function(){ hiragana_start('katakana'); }
        switch_btn.value = "Try Katakana";
    }
    else{
        switch_btn.onclick = function(){ hiragana_start('hiragana'); }
        switch_btn.value = "Try Hiragana";
    }
    
}

function show_answer(){
    show_arr = [
        /*answer_div, ans_help_print, */hiragana_more_btn, switch_btn
    ].forEach(show);
    userans_txtinput.className = '';
    userans_txtinput.classList.add('ans_help');
    userans_txtinput.value = "It's " + my_romanji;
    userans_txtinput.disabled = true;
    hide_arr = [
        show_answer_btn, user_answer_btn,  
        //input_text_div, userans_txtinput
    ].forEach(hide);
    hiragana_more_btn.onclick = function() { hiragana_start(op); };
}

function answer(){
    hide_arr = [
        //input_text_div, userans_txtinput,
        show_answer_btn, user_answer_btn
    ].forEach(hide);
    show_arr = [
        /*answer_div, ans_res_print,*/ hiragana_more_btn, switch_btn
    ].forEach(show);
    userans_txtinput.className = '';
    if (userans_txtinput.value === my_romanji){
        userans_txtinput.value = "Yes, it's " + my_romanji;
        userans_txtinput.classList.add('answer_show_correct');
    }
    else{
        userans_txtinput.value = "No, it's " + my_romanji;
        userans_txtinput.classList.add('answer_show_wrong');
    }
    hiragana_more_btn.onclick = function() { hiragana_start(op); }
}