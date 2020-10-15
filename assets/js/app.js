Mmenu.configs.classNames.selected = "active";
            Mmenu.configs.offCanvas.page.selector = "#my-page";

            document.addEventListener(
                "DOMContentLoaded", () => {
                    const menu = new Mmenu( "#my-menu", {
                        slidingSubmenus: false,
                        extensions: ["theme-dark",
                                    "pagedim-black", 
                                    "position-right"]

                    });
                }
            );

document.addEventListener(
        "DOMContentLoaded", () => {
            new mhead( "#my-header", {
                pin: 100
            });
        }
    );
            