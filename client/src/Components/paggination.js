import "../Components/css/paggination.css"

const Paggination = ({ totalpost, postperpage, pagginate }) => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        numbers.push(i);
    }

    return (
        <>
            <ul className="pageno">
                {
                    numbers.map((num) => {
                        return <>
                                <li style={{listStyle: "none"}} className="m-1">
                                    <button className="btn btn-warning" onClick={() => pagginate(num)}>{num}</button>
                                </li>
                        </>
                    })
                }
            </ul>
        </>
    )
}
export default Paggination;
