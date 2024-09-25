function darkmode() {

    const themeButton = document.getElementById('imgbutton');
    const backgrounds = document.getElementsByTagName('body');
    const subBackgrounds = document.getElementsByClassName('contentsContainer');
    const maincolors = document.getElementsByTagName('a');
    const titles = document.getElementsByTagName('h3');

    if (themeButton.className==='darkmodeToggle') {
        themeButton.className='lightmodeToggle';
    } else {
        themeButton.className='darkmodeToggle';
    }

    for(i = 0; i < backgrounds.length; i++)
        backgrounds[i].classList.toggle('darkThemeMainBgColor');
    for(i = 0; i < maincolors.length; i++)
        maincolors[i].classList.toggle('darkThemeMainColor');
    for(i = 0; i < subBackgrounds.length; i++)
        subBackgrounds[i].classList.toggle('darkThemeSubBgColor');
    for(i = 0; i < titles.length; i++)
        titles[i].classList.toggle('darkThemeMainColor');
}

