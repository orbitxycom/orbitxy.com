```javascript
// ==========================================
// ORBITXY WEBSITE PROTECTION
// ==========================================

(() => {
    "use strict";

    // ------------------------------
    // 1. BLOKIR KLIK KANAN
    // ------------------------------
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });


    // ------------------------------
    // 2. BLOKIR COPY
    // ------------------------------
    document.addEventListener("copy", (e) => {
        e.preventDefault();
    });


    // ------------------------------
    // 3. BLOKIR CUT
    // ------------------------------
    document.addEventListener("cut", (e) => {
        e.preventDefault();
    });


    // ------------------------------
    // 4. BLOKIR DRAG
    // ------------------------------
    document.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });


    // ------------------------------
    // 5. BLOKIR SHORTCUT
    // ------------------------------
    document.addEventListener("keydown", (e) => {

        const key = e.key.toLowerCase();

        // Ctrl + U
        if (e.ctrlKey && key === "u") {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl + S
        if (e.ctrlKey && key === "s") {
            e.preventDefault();
            return false;
        }

        // Ctrl + C
        if (e.ctrlKey && key === "c") {
            e.preventDefault();
            return false;
        }

        // Ctrl + X
        if (e.ctrlKey && key === "x") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + I
        if (e.ctrlKey && e.shiftKey && key === "i") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + J
        if (e.ctrlKey && e.shiftKey && key === "j") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + C
        if (e.ctrlKey && e.shiftKey && key === "c") {
            e.preventDefault();
            return false;
        }

        // F12
        if (e.key === "F12") {
            e.preventDefault();
            return false;
        }
    });


    // ------------------------------
    // 6. BLOKIR SELECTION
    // ------------------------------
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
    });


    // ------------------------------
    // 7. BLOKIR VIEW-SOURCE DARI
    // LINK YANG DIBUAT DENGAN JAVASCRIPT
    // ------------------------------
    document.addEventListener("click", (e) => {

        const target = e.target.closest("a");

        if (!target) return;

        const href = target.getAttribute("href");

        if (href && href.toLowerCase().startsWith("view-source:")) {
            e.preventDefault();
            return false;
        }
    });


    // ------------------------------
    // 8. DETEKSI DEVTOOLS
    // ------------------------------
    let devtoolsDetected = false;

    const threshold = 160;

    setInterval(() => {

        const widthDifference =
            window.outerWidth - window.innerWidth;

        const heightDifference =
            window.outerHeight - window.innerHeight;

        if (
            widthDifference > threshold ||
            heightDifference > threshold
        ) {

            if (!devtoolsDetected) {

                devtoolsDetected = true;

                console.clear();

                // Jangan hapus website.
                // Hanya beri peringatan di console.
                console.log(
                    "%cORBITXY",
                    "font-size:30px;font-weight:bold;"
                );

                console.log(
                    "Developer Tools terdeteksi."
                );
            }

        } else {

            devtoolsDetected = false;
        }

    }, 1000);


    // ------------------------------
    // 9. HAPUS CONSOLE
    // ------------------------------
    setInterval(() => {
        console.clear();
    }, 1500);


    // ------------------------------
    // 10. BLOKIR PRINT
    // ------------------------------
    window.addEventListener("beforeprint", (e) => {
        e.preventDefault();
    });


    console.log(
        "%cOrbitXY Protection Active",
        "font-size:20px;font-weight:bold;"
    );

})();
```
