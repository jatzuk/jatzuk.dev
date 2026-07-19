document.getElementById('cv-link').addEventListener('click', function (e) {
    e.preventDefault();
    var parts = ['__y8YIHaol1', 'WTw2moQf3MI', 'j48tMIycnkR'];
    var id = parts.map(function (p) {
        return p.split('').reverse().join('');
    }).join('');
    window.open(['https:/', '/drive.google.com', '/file/d/', id, '/view'].join(''), '_blank', 'noopener');
});
