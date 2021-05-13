var PrecisionRating = React.createClass({
    render: function () {
        return (
            <div id="rating_precision">
                
                <div class="frame">
                    <table id="table">
                        <tr>
                            <td valign="top">
                                Full Precision :
                            </td>
                            <td>
                                <EJ.Rating value={4} ></EJ.Rating>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Half Precision :
                            </td>
                            <td>
                                <EJ.Rating value={3.5} precision="half" ></EJ.Rating>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Exact Precision :
                            </td>
                            <td>
                                <EJ.Rating value={3.7} precision="exact" ></EJ.Rating>
                            </td>
                        </tr>
                    </table>
                </div>
</div>
        );
    }
});

ReactDOM.render(<PrecisionRating />, document.getElementById('rating-precision'));