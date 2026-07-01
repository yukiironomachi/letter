const scene =
    document.getElementById("scene");

const flap =
    document.getElementById("flap");

const letter =
    document.getElementById("letter");

const container =
    document.getElementById("letterContainer");

let open = false;

scene.onclick = () => {

    if(!open){

        // フタを開く
        flap.style.transform =
            "rotateX(180deg)";

        // フタが開いた後に
        setTimeout(()=>{

            // 手紙を最前面へ
            container.style.zIndex =
                "100";

            // 手紙を出す
            letter.style.top =
                "0px";

        },700);

    }
    else{

        // 手紙を戻す
        letter.style.top =
            "160px";

        // 手紙を後ろへ
        container.style.zIndex =
            "1";

        // フタを閉じる
        setTimeout(()=>{

            flap.style.transform =
                "rotateX(0deg)";

        },300);
    }

    open = !open;
};