"use strict";

ReactDOM.render(
    <EJ.Toolbar width="100%" >
        <ul>
            <li id="Left" title="Left">
                <div className="ToolbarItems LeftAlign_tool"></div>
            </li>
            <li id="Center" title="Center">
                <div className="ToolbarItems CenterAlign_tool"></div>
            </li>
            <li id="Right" title="Right">
                <div className="ToolbarItems RightAlign_tool"></div>
            </li>
            <li id="Justify" title="Justify">
                <div className="ToolbarItems Justify_tool"></div>
            </li>
        </ul>
            <ul>
                <li id="Bold" title="Bold">
                    <div className="ToolbarItems Bold_tool"></div>
                </li>
                <li id="Italic" title="Italic">
                    <div className="ToolbarItems Italic_tool"></div>
                </li>
                <li id="StrikeThrough" title="Strike Through">
                    <div className="ToolbarItems StrikeThrough_tool"></div>
                </li>
                <li id="UndeLine" title="UnderLine">
                    <div className="ToolbarItems Underline_tool"></div>
                </li>
            </ul>
    </EJ.Toolbar>,
document.getElementById('toolbar-default')
);