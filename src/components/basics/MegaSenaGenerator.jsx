export default function MegaSenaGenerator(props) {

    let amount = props.amount;

    function generateValues() {
        let values = [];        
        for(let i = 0; i < amount; i++) {
            let value = (Math.round(1 + Math.random() * 59));
            while(values.includes(value)){
                value = (Math.round(1 + Math.random() * 59));
            }
            values.push(value);
        }
        return values.sort((a,b) => a - b);
    }

    function showNumbers(array) {
        let returnElement = ``;
        array.forEach(number => returnElement += `${number} `)
        return returnElement;
    }

    let valuesArray = generateValues();
    
    return (
        <>
            <h3>The {amount} numbers are:</h3>
            <h3>{showNumbers(valuesArray)}</h3>            
        </> 
    );    
}