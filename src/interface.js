/**
 * Created by suleinv on 03.02.14.
 */
var Screen  = function(title, text, layer) {

    this._tittle = new Kinetic.Text({
        x: stage.width() / 2,
        y: stage.height() / 2,
        text: title,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
    })

    simpleText.offsetX(simpleText.width()/2);

    this._text = new Kinetic.Text({
        x: 100,
        y: 60,
        text: text,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 380,
        padding: 20,
        align: 'center'
    });

    this.rect = new Kinetic.Rect({
        x: stage.width() / 2,
        y: stage.height() / 2,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 800,
        height: 600,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: {x:10,y:10},
        shadowOpacity: 0.2,
        cornerRadius: 10
    });
};
Screen.prototype.Draw = function() {

}

// add the shapes to the layer
layer.add(simpleText);
layer.
layer.add(rect);
layer.add(complexText);
stage.add(layer);
