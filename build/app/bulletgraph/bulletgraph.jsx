"use strict";

function activeItem(args){
	 if (args.activeIndex == 0) {
            var width = (ej.isTouchDevice()) ? 250 : 595;
            var height = 90;
            var bullet0Instance = $("#bulletCore0").ejBulletGraph("instance");
            var bullet1Instance = $("#bulletCore1").ejBulletGraph("instance");
            var bullet2Instance = $("#bulletCore2").ejBulletGraph("instance");
            var bullet3Instance = $("#bulletCore3").ejBulletGraph("instance");
            $(bullet0Instance.svgObject).width(width);
            $(bullet1Instance.svgObject).width(width);
            $(bullet2Instance.svgObject).width(width);
            $(bullet3Instance.svgObject).width(width);
            $(bullet0Instance.svgObject).height(height);
            $(bullet1Instance.svgObject).height(height);
            $(bullet2Instance.svgObject).height(height);
            $(bullet3Instance.svgObject).height(height);

            bullet0Instance._bulletResize();
            bullet1Instance._bulletResize();
            bullet2Instance._bulletResize();
            bullet3Instance._bulletResize();
          
        } else {
            var width = 320;
            var height = 400;
            var instance = $("#bulletCore4").ejBulletGraph("instance");
            if (instance.alreadySelected) {
                $(instance.svgObject).width(width);
                $(instance.svgObject).height(height);
                instance._bulletResize();
            }
            else
                instance.alreadySelected = true;
        }          
}

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType" itemActive={activeItem}  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/bulletgraph/default.html">Default</a></li>
            <li><a href="app/bulletgraph/remotedata.html">Data Binding</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('bulletgraph')
);



