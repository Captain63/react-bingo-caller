const generateBingoNumbers = () => {
    const bingoNumbersMaster = [];

    // Populate B1-15 in array
    for (let i = 1; i < 16; i++) {
        bingoNumbersMaster.push(`B${i}`);
    }

    // Populate I16-30 in array 
    for (let i = 16; i < 31; i++) {
        bingoNumbersMaster.push(`I${i}`);
    }

    // Populate N31-N45 in array 
    for (let i = 31; i < 46; i++) {
        bingoNumbersMaster.push(`N${i}`);
    }

    // Populate G46-60 in array 
    for (let i = 46; i < 61; i++) {
        bingoNumbersMaster.push(`G${i}`);
    }

    // Populate O61-75 in array 
    for (let i = 61; i < 76; i++) {
        bingoNumbersMaster.push(`O${i}`);
    }

    return bingoNumbersMaster;
};

export default generateBingoNumbers;