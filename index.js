function darkmode() {

    const themeButton = document.getElementsByClassName('imgbutton');
    const backgrounds = document.getElementsByTagName('body');
    const subBackgrounds = document.getElementsByClassName('contentsContainer');
    const maincolors = document.getElementsByTagName('a');
    const titles = document.getElementsByTagName('h3');

    console.log(themeButton[0]);
    console.log(themeButton[1]);

    themeButton[0].classList.toggle('darkmodeToggle');
    themeButton[0].classList.toggle('lightmodeToggle');

    themeButton[1].classList.toggle('githubButton');
    themeButton[1].classList.toggle('githubLightButton');

    for(i = 0; i < backgrounds.length; i++)
        backgrounds[i].classList.toggle('darkThemeMainBgColor');
    for(i = 0; i < maincolors.length; i++)
        maincolors[i].classList.toggle('darkThemeMainColor');
    for(i = 0; i < subBackgrounds.length; i++)
        subBackgrounds[i].classList.toggle('darkThemeSubBgColor');
    for(i = 0; i < titles.length; i++)
        titles[i].classList.toggle('darkThemeMainColor');
}

