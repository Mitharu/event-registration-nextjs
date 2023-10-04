'use client'
interface FontFormat {
    fontWeight : 'regular' | 'bold',
    src : string,
}

interface FontFamilyFormat {
    name : string,
    format : string,
    font : FontFormat[],
    link : string | null
}

interface EventColorConfig {
    primary : string,
    shadePrimary : string,
    secondary : string,
    fontLabel : string
}

interface EventConfig {
    eventName : string,
    imageLogo : string,
    withHome : boolean,
    color : EventColorConfig,
    fontFamily : FontFamilyFormat[],
}

export default function GlobalVarCSS() {
    const props : EventConfig = {
        eventName : 'Barbie Run 2023',
        imageLogo : 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        withHome : false,
        color : {
            primary : '#E01883',
            shadePrimary : '#AD1365',
            secondary : '#FFFFFF',
            fontLabel : '#000000'
        },
        fontFamily : [
            {
                name : 'Oswald',
                format : 'css',
                font : [],
                link : 'https://fonts.googleapis.com/css?family=Oswald'
            },
        ],
    }

    const { color,fontFamily } = props;
    const fontCustom = SetFont(fontFamily);
    return(
        <style jsx global> 
        {`
            ${fontCustom.stringCustomFont}
            :root{
                --cusPrimaryColor:${color.primary};
                --cusShadePrimary:${color.shadePrimary};
                --cusSecondary:${color.secondary};
                --cusFontLabel:${color.fontLabel};
                --cusFontHome : ${fontCustom.fontNameList[0]};
                --cusFontRegister : '${fontCustom.fontNameList[fontCustom.fontNameList.length < 2 ? 0 : 1]}';
            }
        `}
        </style>
    )
}

function SetFont(fontData : FontFamilyFormat[]) {
    let fontNameList : string[] = [];
    let stringCustomFont = fontData.map((item : FontFamilyFormat) => {
        fontNameList.push(item.name);
        if(item.format == 'css') {
            return `@import url(${item.link});`;
        }

        else {
            return listFontLocal(item)
        }
        
    }).join(' ');

    return { stringCustomFont, fontNameList};
}

function listFontLocal(item : FontFamilyFormat) {
    let listLocal = item.font.map((fontData : FontFormat) => (
        `
            @font-face {
                font-family: ${item.name};
                src: url(${fontData.src});
                ${fontData.fontWeight == 'regular' ? '' : "font-weight : bold;"}
            }
        `
    )).join(' ');
    return listLocal;
}