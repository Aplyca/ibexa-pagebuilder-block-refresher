export const IbexaPageBuilderBlockRefresher = (ibexaVersion = "3.*", fn) => {
    const supportedVersions = ["ezplatform", "3.*", "4.*"];
    if(supportedVersions.includes(ibexaVersion)){
        let eventName = "";
        let dataIdReference = "";
        let classPreviewReference = "";

        switch(ibexaVersion){
            case "ezplatform": 
                eventName = "ez-post-update-blocks-preview";
                dataIdReference = "data-ez-block-id";
                classPreviewReference = "c-block-preview";
                break;
            case "3.*":
                eventName = "ez-post-update-blocks-preview";
                dataIdReference = "data-ez-block-id";
                classPreviewReference = "c-block-preview";
                break;
            case "4.*":
                eventName = "ibexa-post-update-blocks-preview";
                dataIdReference = "data-ez-block-id";
                classPreviewReference = "c-pb-block-preview";
                break;
        }

        if(window.self !== window.top){
            window.top.window.addEventListener('load', () => {
                window.document.body.addEventListener(eventName, (event) => {
                    try {
                        setTimeout(() => {
                            if(typeof fn == "function") {
                                const blockId = event.detail.blockIds[0];
                                const blockElement = document.querySelector(`[${dataIdReference}="${blockId}"] > .${classPreviewReference}`).children[0]; 
                                fn(blockElement);
                            } else {
                                console.warn("You must pass a function as a first parameter to the IbexaPageBuilderBlockRefresher function");
                            }
                        });
                    } catch (exception) {
                        console.warn("An error occurred while trying to refresh the component:", exception);
                    }
                });
            });
        }
    } else {
        console.warn("You must pass a supported version as a the second parameter to the IbexaPageBuilderBlockRefresher function");
    }
}
