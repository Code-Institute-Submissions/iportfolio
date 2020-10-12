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
                                "<a class='fa fa-envelope' href='#/'></a>",
                                "<a class='fa fa-twitter' href='#/'></a>",
                                "<a class='fa fa-facebook' href='#/'></a>"
                             ]
                          }
                       ]

                    });
                }
            );

            