const form = document.getElementById('inputs');

    form.addEventListener('submit', function(e) {

    e.preventDefault();

    const timer = form.elements['time'].value;
    const addMin1 = (form.elements['arange1'].value);
    const addMax1 = (form.elements['arange2'].value);
    const addMin2 = (form.elements['arange3'].value);
    const addMax2 = (form.elements['arange4'].value);
    const mulMin1 = (form.elements['mrange1'].value);
    const mulMax1 = (form.elements['mrange2'].value);
    const mulMin2 = (form.elements['mrange3'].value);
    const mulMax2 = (form.elements['mrange4'].value);

    localStorage.setItem('timer', timer);
    localStorage.setItem('minA1', addMin1);
    localStorage.setItem('maxA2', addMax1);
    localStorage.setItem('minA3', addMin2);
    localStorage.setItem('maxA4', addMax2);
    localStorage.setItem('minM1', mulMin1);
    localStorage.setItem('maxM2', mulMax1);
    localStorage.setItem('minM3', mulMin2);
    localStorage.setItem('maxM4', mulMax2);

    window.location.href = 'game.html';

    })