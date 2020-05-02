function randomize(numberOfStructures) {
    let data = [];
    let total = 0;
    structures.sort((a, b) => b.probability - a.probability);
    for (let k = 0; k < structures.length; k++) {
        total += structures[k].probability;
    }

    let lastUnit = 0;
    Loop1:
    for (let i = 0; i < numberOfStructures; i++) {
        let cumulative = 0;
        let random = Math.random() * total;
        let space = Math.floor(Math.random() * 5 + 8);
        for (let j = 0; j < structures.length; j++) {
            cumulative += structures[j].probability;
            if (random < cumulative) {
                for (let l = 0; l < structures[j].data.length; l++) {
                    data.push({
                        type: structures[j].data[l].type,
                        initialGridUnit: structures[j].data[l].initialGridUnit + space + lastUnit,
                        gridUnitsHigh: (structures[j].data[l].gridUnitsHigh == undefined ? 0 : structures[j].data[l].gridUnitsHigh),
                        id: null,
                        lava: structures[j].data[l].lava
                    });
                }
                let length = structures[j].data[structures[j].data.length - 1].initialGridUnit - structures[j].data[0].initialGridUnit;
                lastUnit += length + space;
                continue Loop1;
            }
        }
    }
    return data;
}