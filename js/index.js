$('.picBox').on('mouseenter', function enter(e) {
    addClassName(this, e, 'in')
});

$('.picBox').on('mouseleave', function enter(e) {
    addClassName(this, e, 'out')
});

function addClassName(context, e, prefix) {
    let originPoint = {
        x: $(this).width() / 2,
        y: $(this).height() / 2
    };
    let newPoint = {
        x: e.offsetX - originPoint.x / 2,
        y: e.offsetY - originPoint.y / 2
    };
    let angel = Math.atan2(newPoint.y, newPoint.x);//获得(x,y离picBox原点的角度)
    let computedAngel = (angel * 180 / Math.PI + 180) / 90;
    let direction;
    if (computedAngel >= 0.5 && computedAngel < 1.5) {
        direction = '-top'
    }
    if (computedAngel >= 1.5 && computedAngel < 2.5) {
        direction = '-right'
    }
    if (computedAngel >= 2.5 && computedAngel < 3.5) {
        direction = '-bottom'
    }
    if (computedAngel >= 3.5 && computedAngel <= 4 || computedAngel >= 0 && computedAngel < 0.5) {
        direction = '-left'
    }
    $(context).attr('class', 'picBox').addClass(prefix + direction);
}