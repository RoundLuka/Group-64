
// PascalCasing
function Info() {
    const hardwareComponents = ["Motherboard", "Graphics Card", "Central Proccesing Unit", "Random Access Memory", "Hardrive"];

    const op = "Operative systems";

    return (
        <>
            <h3>Hardware</h3>
            <ul>
                {hardwareComponents.map((value, index) => 
                <li key={new Date.now()}>{value}</li>)}
            </ul>
            <h3>Software</h3>
            <ul>
                <li>{op.toUpperCase()}</li>
                <li>Apps</li>
                <li>Broswer</li>
            </ul>
        </>
    )
}

export default Info;