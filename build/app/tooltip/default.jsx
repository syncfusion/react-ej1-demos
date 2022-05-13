var DefaultTooltip = React.createClass({
    render: function () {
        return (
            <div id="tooltip_default">
                <div class="frame">
                    <div class="control">
                        JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the <EJ.Tooltip id="link1" content="ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262."><u> ECMAScript </u> </EJ.Tooltip>language specification. Alongside HTML and CSS, it is one of the three essential technologies of <EJ.Tooltip id="link2" content="The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet." position-stem-horizontal="left" position-stem-vertical="center" position-target-horizontal="right" position-target-vertical="center"><u> World&nbsp;Wide&nbsp;Web </u> </EJ.Tooltip>content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting <EJ.Tooltip id="link3" content='Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic.' position-stem-horizontal="right" position-stem-vertical="center" position-target-horizontal="left" position-target-vertical="center"> <u>object&nbsp;-&nbsp;oriented </u> </EJ.Tooltip>, imperative, and functional programming styles.
                    </div>
                </div>
            </div>
           );
        }
    });

ReactDOM.render(<DefaultTooltip />, document.getElementById('tooltip-default'));