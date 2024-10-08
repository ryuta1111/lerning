const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}ステータス ${xhr.status} で完了しました`;
    });

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    xhr.send();
    log.textContent = `${log.textContent}XHR リクエストを開始しました\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});



// function doStep1(init){
//     return init + 1;
// }
// function doStep2(init){
//     return init + 2;
// }
// function doStep3(init){
//     return init + 3;
// }
// function doOperation(){
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
// }
// doOperation();

function doStep1(init, callback){
    const result = init + 1;
    callback(result);
}
function doStep2(init, callback){
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback){
    const result = init +3;
    callback(result);
}

function doOperation(){
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}
doOperation();
