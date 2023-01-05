const Paggination = ({ totalpost, postperpage, pagginate }) => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        numbers.push(i);
    }

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
