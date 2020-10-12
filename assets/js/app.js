Mmenu.configs.classNames.selected = "active";
            Mmenu.configs.offCanvas.page.selector = "#my-page";

            document.addEventListener(
                "DOMContentLoaded", () => {
                    const menu = new Mmenu( "#my-menu", {
                        slidingSubmenus: false,
                        extensions: ["theme-dark",
                                    "pagedim-black", 
                                    "position-right"],
                        
                        wrappers: ["bootstrap"],

                        navbars: [
                          {
                             "position": "bottom",
                             "content": [
                                "<a class='fab fa-instagram' href='#/'></a>",
                                "<a class='fab fa-linkedin' href='#/'></a>",
                                "<a class='fab fa-github-square' href='#/'></a>"
                             ]
                          }
                       ]

                    });
                }
            );

            