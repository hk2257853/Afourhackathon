const Paggination = ({ totalpost, postperpage, pagginate }) => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        numbers.push(i);
    }
    setTimeout(() => {
        let cols = document.getElementsByClassName("col")
        Array.from(cols).forEach(col => {
            col.style.maxWidth = "fit-content"
            col.style.width = "20px"
        });

    },1)
    return (
        <>
            <div className="row">
                {
                    numbers.map((num) => {
                        return <>
                                <div className="col m-1">
                                    <button className="btn btn-warning" onClick={() => pagginate(num)}>{num}</button>
                                </div>
                        </>
                    })
                }
            </div>
        </>
    )
}
export default Paggination;
